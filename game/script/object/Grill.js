"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Grill = (function (_super) {
    __extends(Grill, _super);
    function Grill(scene) {
        var _this = _super.call(this, {
            scene: scene,
            src: scene.assets['grill']
        }) || this;
        _this.x = g.game.width - _this.width - 230;
        _this.y = g.game.height - _this.height - 40;
        scene.append(_this);
        return _this;
    }
    Grill.prototype.isContainedKusi = function (kusi) {
        return kusi.x > this.x &&
            kusi.x < this.x + this.width &&
            kusi.y > this.y - 10 &&
            kusi.y < this.y + 20;
    };
    return Grill;
}(g.Sprite));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Grill;
