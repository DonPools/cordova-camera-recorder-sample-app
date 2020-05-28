
var isDeviceReady = false;
class DeferredPromise {
  constructor() {
    this._promise = new Promise((resolve, reject) => {
      // assign the resolve and reject functions to `this`
      // making them usable on the class instance
      this.resolve = resolve;
      this.reject = reject;
    });
    // bind `then` and `catch` to implement the same interface as Promise
    this.then = this._promise.then.bind(this._promise);
    this.catch = this._promise.catch.bind(this._promise);
    this[Symbol.toStringTag] = "Promise";
  }
}

document.addEventListener('deviceready', function () {
  isDeviceReady = true;
}, false);


export const deviceReady = function () {
  let ready = new DeferredPromise()
  if (!window.cordova) {
    ready.reject("Not in cordova environment");
  }

  if (isDeviceReady) {
    ready.resolve(true);
  }

  document.addEventListener('deviceready', function () {
    ready.resolve(true);
  }, false);

  return ready;
}