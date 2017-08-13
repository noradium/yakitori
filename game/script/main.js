"use strict";
var game_1 = require("./scene/game");
function main(param) {
    var scene = new game_1.default(g.game);
    g.game.pushScene(scene);
}
module.exports = main;
