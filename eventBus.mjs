class EventBus {
  #eventMap = {};
  constructor() {}
  on(eventName = "", callback = () => {}) {
    // 监听事件触发
    let GET = this.#eventMap[eventName];
    if (!GET) {
      GET = [];
      this.#eventMap[eventName] = GET;
    }
    GET.push(callback);
  }
  emit(eventName,...args) {
    // 发出事件
    const GET = this.#eventMap[eventName];
    if (!GET) return;
    GET.forEach(fn => {
      fn(...args);
    });
  }
  off(eventName = "", callback) { 
    const GET = this.#eventMap[eventName];
    const i = GET.findIndex(fn => fn === callback);
    if (GET.length === 0) {
      delete this.#eventMap[eventName];
    } else {
      GET.splice(i, 1)
    }
  }
}
new EventBus();
