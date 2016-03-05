define(["require", "exports"], function (require, exports) {
    "use strict";
    var EventHandler = (function () {
        function EventHandler(eventName) {
            this.eventName = eventName;
        }
        return EventHandler;
    }());
    var EventSvc = (function () {
        function EventSvc() {
            this._eventHandler = new EventHandler('An event');
        }
        Object.defineProperty(EventSvc.prototype, "name", {
            get: function () {
                return this._eventHandler.eventName;
            },
            enumerable: true,
            configurable: true
        });
        return EventSvc;
    }());
    exports.default = EventSvc;
});
