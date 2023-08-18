(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define("bozoevent", [], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root["bozoevent"] = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  var eventStack = [];
  var eventCallbacks = {};
  var events = {};

  return {
    createEvent(type = "", properties = {}) {
      eventCallbacks[type] = {};
      events[type] = properties;
      return type;
    },

    dispatchEvent(type = "") {
      if (!events[type]) return;
      eventStack.push(type);
    },

    on(type = "", callback = () => { }) {
      let callbacks = eventCallbacks[type];
      if (!callbacks) return;
      let id = crypto.randomUUID();
      eventCallbacks[type][id] = callback;
      return id;
    },

    removeListener(type = "", id = "") {
      if (!events[type]) return;
      delete eventCallbacks[type][id];
    },

    removeEvent(type = "") {
      delete eventCallbacks[type];
    },

    executeEvents() {
      for (let i = 0; i < eventStack.length; i++) {
        let callbacks = eventCallbacks[eventStack[i]];
        let event = events[eventStack[i]];
        for (let id in callbacks) {
          callbacks[id](event);
        }
        // have to free up the stack regardless the number of listeners
        eventStack.splice(i, 1);
        i--;
      }
    }
  };
}));