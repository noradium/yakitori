"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Result = (function (_super) {
    __extends(Result, _super);
    function Result(scene) {
        var _this = _super.call(this, { scene: scene, x: 10, y: 10 }) || this;
        _this.font = new g.DynamicFont(g.FontFamily.SansSerif, 40, g.game);
        _this.background = new g.FilledRect({
            scene: scene,
            width: 500,
            height: 200,
            cssColor: '#cccccc'
        });
        _this.nameLabel = new g.Label({
            scene: scene,
            font: _this.font,
            text: '',
            fontSize: 40,
            textColor: 'black',
            x: 10,
            y: 10
        });
        _this.dekimasitaLabel = new g.Label({
            scene: scene,
            font: _this.font,
            text: 'ができました',
            fontSize: 25,
            textColor: 'black',
            x: 340,
            y: 60
        });
        _this.append(_this.background);
        _this.append(_this.nameLabel);
        _this.append(_this.dekimasitaLabel);
        _this.hide();
        scene.append(_this);
        return _this;
    }
    Result.prototype.showResult = function (name, kusi) {
        var _this = this;
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
        this.scene.setTimeout(3000, function () {
            _this.hideResult();
        });
    };
    Result.prototype.hideResult = function () {
        this.hide();
    };
    return Result;
}(g.E));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Result;
