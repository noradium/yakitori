abstract class FoodBase extends g.E {
  protected abstract get assetNameNama(): string;
  protected abstract get assetNameGood(): string;
  protected abstract get assetNameKoge(): string;
  protected abstract get goodGrillSec(): number;
  protected abstract get kogeGrillSec(): number;

  protected sprites: {[key: string]: g.Sprite};

  private boundingRect: g.CommonRect;

  private grilledTimeSec: number = 0;
  private isGrilling: boolean;
  private currentCondition: string;

  public abstract get foodName(): string;

  constructor(params: g.EParameterObject) {
    super({...params, touchable: true});
    this.sprites = {
      nama: new g.Sprite({
        scene: params.scene,
        src: params.scene.assets[this.assetNameNama]
      }),
      good: new g.Sprite({
        scene: params.scene,
        src: params.scene.assets[this.assetNameGood]
      }),
      koge: new g.Sprite({
        scene: params.scene,
        src: params.scene.assets[this.assetNameKoge]
      })
    };

    this.setCurrentSprite('nama');
    this.append(this.sprites['nama']);
    this.append(this.sprites['good']);
    this.append(this.sprites['koge']);
    this.update.handle(this.onUpdate);
    this.boundingRect = this.calculateBoundingRect();
    this.width = this.boundingWidth;
    this.height = this.boundingHeight;
    params.scene.append(this);
  }

  startGrill() {
    this.isGrilling = true;
  }

  stopGrill() {
    this.isGrilling = false;
  }

  getCurrentCondition(): string {
    return this.currentCondition;
  }

  private onUpdate = () => {
    this.boundingRect = this.calculateBoundingRect();

    if (!this.isGrilling) {
      return;
    }
    this.grilledTimeSec += 1 / g.game.fps;

    if (this.currentCondition === 'nama' && this.grilledTimeSec > this.goodGrillSec) {
      this.setCurrentSprite('good');
    } else if (this.currentCondition === 'good' && this.grilledTimeSec > this.kogeGrillSec) {
      this.setCurrentSprite('koge');
    }
  };

  private setCurrentSprite(condition: string) {
    this.currentCondition = condition;
    Object.keys(this.sprites).forEach((key) => {
      if (condition === key) {
        this.sprites[key].show();
      } else {
        this.sprites[key].hide();
      }
    });
  }

  get boundingWidth() {
    return this.boundingRect.right - this.boundingRect.left;
  }

  get boundingHeight() {
    return this.boundingRect.bottom - this.boundingRect.top;
  }
}

export default FoodBase;
