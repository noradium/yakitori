import Kusi from './Kusi';

export default class Grill extends g.Sprite {
  constructor(scene: g.Scene) {
    super({
      scene: scene,
      src: scene.assets['grill']
    });
    this.x = g.game.width - this.width - 230;
    this.y = g.game.height - this.height - 40;

    scene.append(this);
  }

  isContainedKusi(kusi: Kusi) {
    return kusi.x > this.x &&
      kusi.x < this.x + this.width &&
      kusi.y > this.y - 10 &&
      kusi.y < this.y + 20;
  }
}
