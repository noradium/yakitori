"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var FoodBase = (function (_super) {
    __extends(FoodBase, _super);
    function FoodBase(params) {
        var _this = _super.call(this, __assign({}, params, { touchable: true })) || this;
        _this.grilledTimeSec = 0;
        _this.onUpdate = function () {
            _this.boundingRect = _this.calculateBoundingRect();
            if (!_this.isGrilling) {
                return;
            }
            _this.grilledTimeSec += 1 / g.game.fps;
            if (_this.currentCondition === 'nama' && _this.grilledTimeSec > 5) {
                _this.setCurrentSprite('good');
            }
            else if (_this.currentCondition === 'good' && _this.grilledTimeSec > 8) {
                _this.setCurrentSprite('koge');
            }
        };
        _this.sprites = {
            nama: new g.Sprite({
                scene: params.scene,
                src: params.scene.assets[_this.assetNameNama]
            }),
            good: new g.Sprite({
                scene: params.scene,
                src: params.scene.assets[_this.assetNameGood]
            }),
            koge: new g.Sprite({
                scene: params.scene,
                src: params.scene.assets[_this.assetNameKoge]
            })
        };
        _this.setCurrentSprite('nama');
        _this.append(_this.sprites['nama']);
        _this.append(_this.sprites['good']);
        _this.append(_this.sprites['koge']);
        _this.update.handle(_this.onUpdate);
        _this.boundingRect = _this.calculateBoundingRect();
        _this.width = _this.boundingWidth;
        _this.height = _this.boundingHeight;
        params.scene.append(_this);
        return _this;
    }
    FoodBase.prototype.startGrill = function () {
        this.isGrilling = true;
    };
    FoodBase.prototype.stopGrill = function () {
        this.isGrilling = false;
    };
    FoodBase.prototype.getCurrentCondition = function () {
        return this.currentCondition;
    };
    FoodBase.prototype.setCurrentSprite = function (condition) {
        var _this = this;
        this.currentCondition = condition;
        Object.keys(this.sprites).forEach(function (key) {
            if (condition === key) {
                _this.sprites[key].show();
            }
            else {
                _this.sprites[key].hide();
            }
        });
    };
    Object.defineProperty(FoodBase.prototype, "boundingWidth", {
        get: function () {
            return this.boundingRect.right - this.boundingRect.left;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FoodBase.prototype, "boundingHeight", {
        get: function () {
            return this.boundingRect.bottom - this.boundingRect.top;
        },
        enumerable: true,
        configurable: true
    });
    return FoodBase;
}(g.E));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FoodBase;
