"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Kusioki = (function (_super) {
    __extends(Kusioki, _super);
    function Kusioki(scene) {
        var _this = _super.call(this, {
            scene: scene,
            src: scene.assets['kusioki'],
            touchable: true
        }) || this;
        _this.x = 0;
        _this.y = g.game.height - _this.height - 20;
        scene.append(_this);
        return _this;
    }
    return Kusioki;
}(g.Sprite));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Kusioki;
