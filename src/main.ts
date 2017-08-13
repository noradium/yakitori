import GameScene from './scene/game';

function main(param: g.GameMainParameterObject): void {
	const scene = new GameScene(g.game);
	g.game.pushScene(scene);
}

export = main;
