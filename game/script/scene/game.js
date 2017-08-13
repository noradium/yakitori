"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FoodConveyor_1 = require("../object/FoodConveyor");
var Kusioki_1 = require("../object/Kusioki");
var Kusi_1 = require("../object/Kusi");
var Grill_1 = require("../object/Grill");
var Sara_1 = require("../object/Sara");
var Result_1 = require("../object/Result");
var YakitoriAPI_1 = require("../api/YakitoriAPI");
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene(game) {
        var _this = _super.call(this, game, GameScene.ASSETS) || this;
        _this.kusiList = [];
        _this.loaded.handle(function () {
            var foodConveyor = new FoodConveyor_1.default(_this);
            var kusioki = new Kusioki_1.default(_this);
            var grill = new Grill_1.default(_this);
            var sara = new Sara_1.default(_this);
            var result = new Result_1.default(_this);
            kusioki.pointDown.handle(function (event) {
                var kusi = new Kusi_1.default({
                    scene: _this,
                    x: event.point.x,
                    y: event.point.y
                });
                kusi.body.pointMove.handle(function (event) {
                    if (Math.abs(event.prevDelta.x) < 10 && event.prevDelta.y < -10) {
                        var foodPointSource = foodConveyor.findFood({ x: kusi.x, y: kusi.y });
                        if (!foodPointSource) {
                            return;
                        }
                        var food = foodPointSource.target;
                        foodConveyor.removeFood(food);
                        kusi.appendFood(food);
                    }
                });
                kusi.body.pointUp.handle(function (event) {
                    if (grill.isContainedKusi(kusi)) {
                        kusi.startGrill();
                    }
                    else if (sara.isContainedKusi(kusi)) {
                        YakitoriAPI_1.default.post(_this.createPostData(kusi))
                            .then(function (response) {
                            _this.remove(kusi);
                            result.showResult(response.name, kusi);
                        });
                    }
                });
                kusi.body.pointDown.handle(function (event) {
                    kusi.stopGrill();
                });
                _this.kusiList.push(kusi);
            });
        });
        return _this;
    }
    GameScene.prototype.createPostData = function (kusi) {
        return {
            foods: kusi.getFoods().map(function (food) {
                return {
                    name: food.getFoodName(),
                    condition: food.getCurrentCondition()
                };
            })
        };
    };
    return GameScene;
}(g.Scene));
GameScene.ASSETS = [
    'convayor',
    'momo_nama',
    'momo_good',
    'momo_koge',
    'kusioki',
    'kusi',
    'grill',
    'sara'
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameScene;
