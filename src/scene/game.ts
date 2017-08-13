import FoodConveyor from '../object/FoodConveyor';
import Kusioki from '../object/Kusioki';
import Kusi from '../object/Kusi';
import FoodBase from '../object/food/FoodBase';
import Grill from '../object/Grill';
import Sara from '../object/Sara';
import Result from '../object/Result';
import YakitoriAPI from '../api/YakitoriAPI';

export default class GameScene extends g.Scene {
  static ASSETS: string[] = [
    'convayor',
    'momo_nama',
    'momo_good',
    'momo_koge',
    'kusioki',
    'kusi',
    'grill',
    'sara'
  ];

  private kusiList: Kusi[] = [];

  constructor(game: g.Game) {
    super(game, GameScene.ASSETS);
    this.loaded.handle(() => {
      const foodConveyor = new FoodConveyor(this);
      const kusioki = new Kusioki(this);
      const grill = new Grill(this);
      const sara = new Sara(this);
      const result = new Result(this);

      kusioki.pointDown.handle((event: g.PointDownEvent) => {
        const kusi = new Kusi({
          scene: this,
          x: event.point.x,
          y: event.point.y
        });

        kusi.body.pointMove.handle((event: g.PointMoveEvent) => {
          if (Math.abs(event.prevDelta.x) < 10 && event.prevDelta.y < -10) {
            const foodPointSource = foodConveyor.findFood({x: kusi.x, y: kusi.y});
            if (!foodPointSource) {
              return;
            }
            const food = foodPointSource.target as FoodBase;
            foodConveyor.removeFood(food);
            kusi.appendFood(food);
          }
        });

        kusi.body.pointUp.handle((event: g.PointUpEvent) => {
          if (grill.isContainedKusi(kusi)) {
            kusi.startGrill();
          } else if (sara.isContainedKusi(kusi)) {
            YakitoriAPI.post(this.createPostData(kusi))
              .then((json: {name: string}) => {
                this.remove(kusi);
                result.showResult(json.name, kusi);
              });
          }
        });
        kusi.body.pointDown.handle((event: g.PointDownEvent) => {
          kusi.stopGrill();
        });

        this.kusiList.push(kusi);
      });
    });
  }

  private createPostData(kusi: Kusi) {
    return {
      foods: kusi.getFoods().map((food: FoodBase) => {
        return {
          name: food.getFoodName(),
          condition: food.getCurrentCondition()
        };
      })
    };
  }
}
