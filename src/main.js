module.exports = (function () {
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
})()