
import Kusi from './Kusi';

export default class Result extends g.E {
  private background: g.FilledRect;
  private font: g.DynamicFont;
  private nameLabel: g.Label;
  private dekimasitaLabel: g.Label;
  private closeButton: g.Label;
  private twitterButton: g.E;
  private twitterButtonBackground: g.FilledRect;
  private twitterButtonImage: g.Sprite;
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
    this.closeButton = new g.Label({
      scene: scene,
      font: this.font,
      text: '[×]',
      fontSize: 25,
      textColor: 'red',
      x: 480,
      y: 10,
      touchable: true
    });
    this.closeButton.pointUp.handle(this.onCloseButtonPointUp);
    this.twitterButton = new g.E({
      scene: scene,
      x: 0,
      y: 140,
      width: 50,
      height: 50,
      touchable: true
    });
    this.twitterButtonBackground = new g.FilledRect({
      scene: scene,
      width: 50,
      height: 50,
      cssColor: '#55acee'
    });
    this.twitterButtonImage = new g.Sprite({
      scene: scene,
      width: 50,
      height: 50,
      src: scene.assets['twitter']
    });
    this.twitterButton.append(this.twitterButtonBackground);
    this.twitterButton.append(this.twitterButtonImage);
    this.twitterButton.pointUp.handle(this.onTwitterButtonPointUp);

    this.append(this.background);
    this.append(this.nameLabel);
    this.append(this.dekimasitaLabel);
    this.append(this.closeButton);
    this.append(this.twitterButton);
    this.hide();
    scene.append(this);
  }

  showResult(name: string, kusi: Kusi) {
    if (this.kusi) {
      this.remove(this.kusi);
    }
    this.nameLabel.text = name;
    this.nameLabel.invalidate();
    this.background.width = this.nameLabel.width + 60;
    this.closeButton.x = this.background.width - this.closeButton.width - 10;
    this.dekimasitaLabel.x = this.background.width - this.dekimasitaLabel.width - 10;
    this.twitterButton.x = this.background.width - 85;
    this.kusi = kusi;
    this.kusi.angle = 270;
    this.kusi.x = this.x + 5;
    this.kusi.y = 140;
    this.kusi.modified();
    this.append(this.kusi);
    this.show();
  }

  hideResult() {
    this.hide();
  }

  private onCloseButtonPointUp = () => {
    this.hideResult();
  };

  private onTwitterButtonPointUp = () => {
    window.open(`https://twitter.com/intent/tweet?text=花守ゆみりさんのために「${this.nameLabel.text}」を焼きました(*´▽｀*)&url=http%3a%2f%2fhanayumi%2enoradium%2ecom`, '_blank', 'width=660,height=250');
  };
}
