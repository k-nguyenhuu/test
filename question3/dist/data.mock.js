"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("./models");
exports.MOCK_USER = {
    isEmployee: true,
    isAffiliate: true,
    membershipFrom: 2 //5% discount
};
exports.MOCK_PRODUCTS = [
    {
        name: "orange",
        type: "groceries",
        price: 3
    },
    {
        name: "watch",
        type: "tech",
        price: 40
    }
];
exports.MOCK_OPTION = models_1.discountOption.Employee;
//# sourceMappingURL=data.mock.js.map