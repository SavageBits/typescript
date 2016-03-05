(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var EventHandler = (function () {
    function EventHandler(eventName) {
        this.eventName = eventName;
    }
    return EventHandler;
})();
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
})();
exports.default = EventSvc;
},{}],2:[function(require,module,exports){
function logIt(msg) {
    console.log(msg);
}
exports.default = logIt;
exports.logIt = logIt;
},{}],3:[function(require,module,exports){
var logSvc_1 = require('./../core/logSvc');
var eventSvc_1 = require('./../core/eventSvc');
logSvc_1.default('hello from logSvc');
var eventSvc = new eventSvc_1.default();
console.log(eventSvc.name);
var feature = {
    somethingElse: 'hey',
    anotherProp: 'now',
    name: 'New feature',
    description: this.name + ' is a feature',
    size: 'M',
    getName: function () {
        logSvc_1.default(this.name);
        return this.name;
    },
    getDescription: function () {
        return this.description;
    },
    calcDaysToImplement: function (size, numberOfDevs) {
        var daysToImplement;
        switch (size) {
            case 'S':
                daysToImplement = 100 / numberOfDevs;
                break;
            case 'M':
                daysToImplement = 400 / numberOfDevs;
                break;
            default:
                daysToImplement = Infinity;
                break;
        }
        return daysToImplement;
    }
};
var feature2 = {
    name: 'Newer feature',
    description: this.name + ' is a feature'
};
var ProductType = (function () {
    function ProductType(description) {
        this.description = description;
    }
    return ProductType;
})();
exports.ProductType = ProductType;
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
})();
exports.default = Feature;
},{"./../core/eventSvc":1,"./../core/logSvc":2}],4:[function(require,module,exports){
var feature_1 = require('./feature/feature');
var pt = new feature_1.ProductType('A product');
var feature = new feature_1.default('A feature', pt);
feature.beginWork();
},{"./feature/feature":3}]},{},[4]);
