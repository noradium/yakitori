export default class Kusioki extends g.Sprite {
  constructor(scene: g.Scene) {
    super({
      scene: scene,
      src: scene.assets['kusioki'],
      touchable: true
    });
    this.x = 0;
    this.y = g.game.height - this.height - 20;

    scene.append(this);
  }
}
