
import Kusi from './Kusi';

export default class Result extends g.E {
  private background: g.FilledRect;
  private font: g.DynamicFont;
  private nameLabel: g.Label;
  private dekimasitaLabel: g.Label;
  private kusi: Kusi;

  constructor(scene: g.Scene) {
    super({scene, x: 10, y: 10});
    this.font = new g.DynamicFont(g.FontFamily.SansSerif, 40, g.game);
    this.background = new g.FilledRect({
      scene,
      width: 500,
      height: 200,
      cssColor: '#cccccc'
    });
    this.nameLabel = new g.Label({
      scene: scene,
      font: this.font,
      text: '',
      fontSize: 40,
      textColor: 'black',
      x: 10,
      y: 10
    });
    this.dekimasitaLabel = new g.Label({
      scene: scene,
      font: this.font,
      text: 'ができました',
      fontSize: 25,
      textColor: 'black',
      x: 340,
      y: 60
    });

    this.append(this.background);
    this.append(this.nameLabel);
    this.append(this.dekimasitaLabel);
    this.hide();
    scene.append(this);
  }

  showResult(name: string, kusi: Kusi) {
    if (this.kusi) {
      this.remove(this.kusi);
    }
    this.nameLabel.text = name;
    this.nameLabel.invalidate();
    this.kusi = kusi;
    this.kusi.angle = 270;
    this.kusi.x = this.x + 5;
    this.kusi.y = 140;
    this.kusi.modified();
    this.append(this.kusi);
    this.show();
    this.scene.setTimeout(3000, () => {
      this.hideResult();
    });
  }

  hideResult() {
    this.hide();
  }
}
