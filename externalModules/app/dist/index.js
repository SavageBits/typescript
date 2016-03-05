define(["require", "exports", './feature/feature'], function (require, exports, feature_1) {
    "use strict";
    var pt = new feature_1.ProductType('A product');
    var feature = new feature_1.default('A feature', pt);
    feature.beginWork();
});
