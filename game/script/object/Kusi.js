"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Kusi = (function (_super) {
    __extends(Kusi, _super);
    function Kusi(params) {
        var _this = _super.call(this, params) || this;
        _this.onKusiPointMove = function (event) {
            _this.x += event.prevDelta.x;
            _this.y += event.prevDelta.y;
            _this.modified();
        };
        _this.kusi = new g.Sprite({
            scene: params.scene,
            src: params.scene.assets['kusi'],
            touchable: true
        });
        _this.foods = new g.E({
            scene: params.scene
        });
        _this.append(_this.kusi);
        _this.append(_this.foods);
        _this.kusi.pointMove.handle(_this.onKusiPointMove);
        params.scene.append(_this);
        return _this;
    }
    Kusi.prototype.appendFood = function (food) {
        this.foods.append(food);
        food.x = -(food.width / 2);
        food.y = this.kusi.height - 60 - (food.height - 30) * this.foods.children.length;
    };
    Kusi.prototype.startGrill = function () {
        if (!this.foods.children) {
            return;
        }
        this.foods.children.forEach(function (food) {
            food.startGrill();
        });
    };
    Kusi.prototype.stopGrill = function () {
        if (!this.foods.children) {
            return;
        }
        this.foods.children.forEach(function (food) {
            food.stopGrill();
        });
    };
    Kusi.prototype.getFoods = function () {
        if (!this.foods.children) {
            return [];
        }
        return this.foods.children;
    };
    Object.defineProperty(Kusi.prototype, "body", {
        get: function () {
            return this.kusi;
        },
        enumerable: true,
        configurable: true
    });
    return Kusi;
}(g.E));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Kusi;
