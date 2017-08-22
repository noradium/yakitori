import Kusi from './Kusi';

export default class Sara extends g.Sprite {
  constructor(scene: g.Scene) {
    super({
      scene: scene,
      src: scene.assets['sara']
    });
    this.x = g.game.width - this.width - 5;
    this.y = g.game.height - this.height - 2;

    scene.append(this);
  }

  isContainedKusi(kusi: Kusi) {
    return kusi.x > this.x &&
      kusi.x < this.x + this.width &&
      kusi.y > this.y - 100 &&
      kusi.y < this.y + 100;
  }
}
