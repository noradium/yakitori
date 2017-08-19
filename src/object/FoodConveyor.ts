import Momo from './food/Momo';
import Liver from './food/Liver';
import Heart from './food/Heart';
import FoodBase from './food/FoodBase';
import Nankotsu from './food/Nankotsu';
import Negi from './food/Negi';
import Sasami from './food/Sasami';
import Tsukune from './food/Tsukune';

const FOOD_DISTRIBUTION = [
  { rate: 5, Constructor: Momo },
  { rate: 4, Constructor: Negi },
  { rate: 4, Constructor: Sasami },
  { rate: 4, Constructor: Tsukune },
  { rate: 3, Constructor: Nankotsu },
  { rate: 3, Constructor: Liver },
  { rate: 3, Constructor: Heart }
];

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
    const interval = g.game.random[0].get(3500, 5000);

    scene.setTimeout(interval, () => {
      const food = this.generateRandomFood(scene);
      const conveyorBoundingRect = this.conveyor.calculateBoundingRect();
      food.x = g.game.width;
      food.y = g.game.random[0].get(conveyorBoundingRect.top, conveyorBoundingRect.bottom - food.boundingHeight);
      this.foodContainer.append(food);
      this.setFoodGenerateTimer(scene);
    });
  }

  private generateRandomFood(scene: g.Scene) {
    const max = FOOD_DISTRIBUTION.reduce((p, c) => p + c.rate, 0);
    const randomNum = g.game.random[0].get(0, max - 1);
    let counter = 0;
    for (let i = 0; i < FOOD_DISTRIBUTION.length; ++i) {
      counter += FOOD_DISTRIBUTION[i].rate;
      if (randomNum < counter) {
        return new FOOD_DISTRIBUTION[i].Constructor({scene});
      }
    }
    // ここにはこないはずだけど一応
    return new Momo({scene});
  }
}
