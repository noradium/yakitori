import FoodBase from './food/FoodBase';

export default class Kusi extends g.E {
  private kusi: g.Sprite;
  private foods: g.E;

  constructor(params: {scene: g.Scene, x: number, y: number}) {
    super(params);
    this.kusi = new g.Sprite({
      scene: params.scene,
      src: params.scene.assets['kusi'],
      touchable: true
    });
    this.foods = new g.E({
      scene: params.scene
    });
    this.append(this.kusi);
    this.append(this.foods);
    this.kusi.pointMove.handle(this.onKusiPointMove);
    params.scene.append(this);
  }

  appendFood(food: FoodBase) {
    this.foods.append(food);
    food.x = -(food.width / 2);
    food.y = this.kusi.height - 60 - (food.height - 30) * this.foods.children.length;
  }

  startGrill() {
    if (!this.foods.children) {
      return;
    }
    this.foods.children.forEach((food: FoodBase) => {
      food.startGrill();
    });
  }

  stopGrill() {
    if (!this.foods.children) {
      return;
    }
    this.foods.children.forEach((food: FoodBase) => {
      food.stopGrill();
    });
  }

  getFoods(): FoodBase[] {
    if (!this.foods.children) {
      return [];
    }
    return this.foods.children as FoodBase[];
  }

  private onKusiPointMove = (event: g.PointMoveEvent) => {
    this.x += event.prevDelta.x;
    this.y += event.prevDelta.y;
    this.modified();
  };

  get body() {
    return this.kusi;
  }
}
