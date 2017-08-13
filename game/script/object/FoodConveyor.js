"use strict";
var Momo_1 = require("./food/Momo");
var FoodConveyor = (function () {
    function FoodConveyor(scene) {
        var _this = this;
        this.onConveyorUpdate = function () {
            _this.conveyor.x--;
            if (_this.conveyor.x < -g.game.width) {
                _this.conveyor.x = 0;
            }
            _this.conveyor.modified();
        };
        this.onFoodContainerUpdate = function () {
            var foods = _this.foodContainer.children;
            if (!foods) {
                return;
            }
            foods.forEach(function (food) {
                food.x--;
                if (food.x < -food.boundingWidth) {
                    food.destroy();
                }
                food.modified();
            });
        };
        this.conveyor = new g.E({ scene: scene });
        this.foodContainer = new g.E({ scene: scene });
        this.conveyor.append(new g.Sprite({
            scene: scene,
            x: 0,
            y: 0,
            src: scene.assets['convayor']
        }));
        this.conveyor.append(new g.Sprite({
            scene: scene,
            x: 960,
            y: 0,
            src: scene.assets['convayor']
        }));
        this.conveyor.update.handle(this.onConveyorUpdate);
        this.foodContainer.update.handle(this.onFoodContainerUpdate);
        scene.append(this.conveyor);
        scene.append(this.foodContainer);
        this.setFoodGenerateTimer(scene);
    }
    FoodConveyor.prototype.findFood = function (point) {
        return this.foodContainer.findPointSourceByPoint(point);
    };
    FoodConveyor.prototype.removeFood = function (food) {
        this.foodContainer.remove(food);
    };
    FoodConveyor.prototype.setFoodGenerateTimer = function (scene) {
        var _this = this;
        var interval = g.game.random[0].get(3000, 5000);
        scene.setTimeout(interval, function () {
            var food = new Momo_1.default({ scene: scene });
            var conveyorBoundingRect = _this.conveyor.calculateBoundingRect();
            food.x = g.game.width;
            food.y = g.game.random[0].get(conveyorBoundingRect.top, conveyorBoundingRect.bottom - food.boundingHeight);
            _this.foodContainer.append(food);
            _this.setFoodGenerateTimer(scene);
        });
    };
    return FoodConveyor;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FoodConveyor;
