"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("./models");
var data_mock_1 = require("./data.mock");
var Checkout = /** @class */ (function () {
    //constructor
    function Checkout(user, products, option) {
        this.user = user;
        this.products = products;
        this.option = option;
    }
    Checkout.prototype.getGrossPrice = function (products) {
        return products.map(function (x) { return x.price; }).reduce(function (sum, item) { return sum + item; }, 0);
    };
    Checkout.prototype.discountOnCashSum = function (priceSum) {
        var cashDiscount = Math.floor(priceSum / 100) * 5;
        return priceSum - cashDiscount;
    };
    Checkout.prototype.discountPercent = function (product) {
        if (product.type == "groceries")
            return 0;
        switch (this.option) {
            case models_1.discountOption.Employee: {
                if (this.user.isEmployee)
                    return models_1.discountOption.Employee;
            }
            case models_1.discountOption.Affiliate: {
                if (this.user.isAffiliate)
                    return models_1.discountOption.Affiliate;
            }
            case models_1.discountOption.Over2years: {
                if (this.user.membershipFrom > 2)
                    return models_1.discountOption.Over2years;
            }
        }
        return 0;
    };
    Checkout.prototype.netPrice = function () {
        var _this = this;
        var iList = this.products.map(function (item) {
            var discountNumber = _this.discountPercent(item);
            return __assign({}, item, { price: item.price * (100 - discountNumber) / 100 });
        });
        var grossAmount = this.getGrossPrice(iList);
        var nestPrice = this.discountOnCashSum(grossAmount);
        return nestPrice;
    };
    return Checkout;
}());
exports.Checkout = Checkout;
var cc = new Checkout(data_mock_1.MOCK_USER, data_mock_1.MOCK_PRODUCTS, data_mock_1.MOCK_OPTION);
console.log("net price", cc.netPrice());
//# sourceMappingURL=main.js.map