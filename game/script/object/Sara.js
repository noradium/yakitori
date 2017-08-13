"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Sara = (function (_super) {
    __extends(Sara, _super);
    function Sara(scene) {
        var _this = _super.call(this, {
            scene: scene,
            src: scene.assets['sara']
        }) || this;
        _this.x = g.game.width - _this.width - 5;
        _this.y = g.game.height - _this.height - 2;
        scene.append(_this);
        return _this;
    }
    Sara.prototype.isContainedKusi = function (kusi) {
        return kusi.x > this.x &&
            kusi.x < this.x + this.width &&
            kusi.y > this.y - 30 &&
            kusi.y < this.y + 50;
    };
    return Sara;
}(g.Sprite));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Sara;
