const Status = {
  resolved: 0,
  pending: 1,
  rejected: 2,
};

function execFunctionWithCatchError(execFn, value, resolve, reject) {
  try {
    resolve(execFn(value));
  } catch (e) {
    reject(e);
  }
}

class myPromise {
  #status;
  #value;
  #reason;
  #resolveCallbacks = [];
  #rejectCallbacks = [];
  constructor(executor) {
    this.#status = Status.pending;
    executor(this.#resolve.bind(this), this.#reject.bind(this));
  }
  #resolve(value) {
    if (this.#status === Status.pending) {
      queueMicrotask(() => {
        if (this.#status !== Status.pending) return;
        this.#status = Status.resolved;
        this.#value = value;
        this.#resolveCallbacks.forEach((fn) => {
          fn(value)
        });
      });
    }
  }
  #reject(reason) {
    if (this.#status === Status.pending) {
      queueMicrotask(() => {
        if (this.#status !== Status.pending) return;
        this.#status = Status.rejected;
        this.#reason = reason;
        this.#rejectCallbacks.forEach((fn) => fn(reason));
      });
    }
  }
  then(onfulfilled, onrejected) {
    return new myPromise((resolve, reject) => {
      switch (this.#status) {
        case Status.resolved: {
          if (onfulfilled) {
            execFunctionWithCatchError(
              onfulfilled,
              this.#value,
              resolve,
              reject
            );
          }
          break;
        }
        case Status.rejected: {
          if (onrejected) {
            execFunctionWithCatchError(
              onrejected,
              this.#reason,
              resolve,
              reject
            );
          }
          break
        }
        case Status.pending: {
          this.#resolveCallbacks.push(() => {
            execFunctionWithCatchError(
              onfulfilled,
              this.#value,
              resolve,
              reject
            );
          })
          this.#rejectCallbacks.push(() => {
            execFunctionWithCatchError(
              onrejected,
              this.#reason,
              resolve,
              reject
            );
          })
        }
      }
      
    });
  }
}

const a = new myPromise((resolve, reject) => {
  resolve("5555");
  reject(555);
});
a.then(
  (res) => {
    return res + 666 + "dcoiadcmoadmcoaskmcasklcsa";
  },
  (reason) => {
    // console.log(reason);
  }
).then((res) => {
  console.log(res);
});
a.then((res) => {
  console.log(res);
});
