"use strict";
var logSvc_1 = require('./../core/logSvc');
logSvc_1.default('hello from logSvc');
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
