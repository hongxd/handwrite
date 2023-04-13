const adapter = (config) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(config.method, config.url, true);
    xhr.timeout = config.timeout;
    xhr.send(config.data);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve({
            data: xhr.response,
            status: xhr.status,
          });
        } else {
          reject({ status: xhr.status });
        }
      }
    };
    if (config.cancelToken || config.signal) {
      reject("cancel");
      xhr.abort();
    }
    xhr.onerror = reject;
  });
};
class InterceptorManager {
  handlers = [];
  use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled,
      rejected,
    });
  }
  eject(id) {
    this.handlers[id] = null;
  }
  clear() {
    this.handlers = [];
  }
  foreach(fn) {
    this.handlers.forEach((h) => {
      fn(h);
    });
  }
}
class Axios {
  interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager(),
  };
  request(configOrUrl, config) {
    if (typeof configOrUrl === "string") {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    const requestInterceptorChain = [];
    this.interceptors.request.foreach((interceptor) => {
      requestInterceptorChain.unshift(
        interceptor.fulfilled,
        interceptor.rejected
      );
    });

    let promise = Promise.resolve(config);

    const responseInterceptorChain = [];
    this.interceptors.response.foreach((interceptor) => {
      responseInterceptorChain.unshift(
        interceptor.fulfilled,
        interceptor.rejected
      );
    });
    const chain = [
      ...requestInterceptorChain,
      adapter,
      undefined,
      ...responseInterceptorChain,
    ];
    let i = 0;
    const len = chain.length;
    while (i < len) {
      promise = promise.then(chain[i++], chain[i++]);
    }
    return promise;
  }
}
["get", "post", "put", "delete"].forEach((method) => {
  Axios.prototype[method] = function (url, config) {
    return context.request(url, config);
  };
});
function createInstance() {
  const context = new Axios();
  // createInstance并没有直接返回context，实际源码如下：
  /**
   * const instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  // 主要是赋值各种请求方法，让instance不仅是一个函数，也是一个对象，能通过.get，.post等方法进行调用
  utils.extend(instance, Axios.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  // 主要是赋值拦截器和默认配置，不会赋值请求方法，因为请求方法在隐式原型上
  utils.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
   */

  return context;
}
const axios = createInstance();
console.log(axios);
