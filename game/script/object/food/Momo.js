"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FoodBase_1 = require("./FoodBase");
var Momo = (function (_super) {
    __extends(Momo, _super);
    function Momo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Momo.prototype, "assetNameNama", {
        get: function () {
            return 'momo_nama';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Momo.prototype, "assetNameGood", {
        get: function () {
            return 'momo_good';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Momo.prototype, "assetNameKoge", {
        get: function () {
            return 'momo_koge';
        },
        enumerable: true,
        configurable: true
    });
    Momo.prototype.getFoodName = function () {
        return 'momo';
    };
    return Momo;
}(FoodBase_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Momo;
