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
function logIt(msg) {
    console.log(msg);
}
logIt('Hello from logSvc!');
var eventSvc = new EventSvc();
console.log(eventSvc.name);
var ProductType = (function () {
    function ProductType(description) {
        this.description = description;
    }
    return ProductType;
}());
var Feature = (function () {
    function Feature(name, productType) {
        this.name = name;
        if (productType) {
            this._productType = productType;
        }
    }
    Object.defineProperty(Feature.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Feature.prototype.beginWork = function () {
        alert('Work has begun on ' + this.name);
    };
    return Feature;
}());
