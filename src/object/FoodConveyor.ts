import Momo from './food/Momo';
import FoodBase from './food/FoodBase';

export default class FoodConveyor {
  private conveyor: g.E;
  private foodContainer: g.E;

  constructor(scene: g.Scene) {
    this.conveyor = new g.E({scene});
    this.foodContainer = new g.E({scene});
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

  findFood(point: {x: number, y: number}) {
    return this.foodContainer.findPointSourceByPoint(point);
  }

  removeFood(food: FoodBase) {
    this.foodContainer.remove(food);
  }

  private onConveyorUpdate = () => {
    this.conveyor.x--;
    if (this.conveyor.x < -g.game.width) {
      this.conveyor.x = 0;
    }
    this.conveyor.modified();
  };

  private onFoodContainerUpdate = () => {
    const foods = this.foodContainer.children;
    if (!foods) {
      return;
    }

    foods.forEach((food: FoodBase) => {
      food.x--;
      if (food.x < -food.boundingWidth) {
        food.destroy();
      }
      food.modified();
    });
  };

  private setFoodGenerateTimer(scene: g.Scene) {
    const interval = g.game.random[0].get(3000, 5000);

    scene.setTimeout(interval, () => {
      const food = new Momo({scene});
      const conveyorBoundingRect = this.conveyor.calculateBoundingRect();
      food.x = g.game.width;
      food.y = g.game.random[0].get(conveyorBoundingRect.top, conveyorBoundingRect.bottom - food.boundingHeight);
      this.foodContainer.append(food);
      this.setFoodGenerateTimer(scene);
    });
  }
}
