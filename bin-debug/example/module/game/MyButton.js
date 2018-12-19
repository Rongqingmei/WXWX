var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * Created by egret on 15-1-16.
 */
var MyButton = (function (_super) {
    __extends(MyButton, _super);
    function MyButton(buttonName, $x, $y, func, target) {
        var _this = _super.call(this) || this;
        _this._func = func;
        _this._target = target;
        _this.width = 100;
        _this.height = 40;
        _this.graphics.beginFill(0x333333, 1);
        _this.graphics.drawRect(0, 0, _this.width, _this.height);
        _this.graphics.endFill();
        var txt = new egret.TextField();
        txt.textColor = 0xFFFFFF;
        txt.textAlign = egret.HorizontalAlign.CENTER;
        txt.text = buttonName;
        txt.width = _this.width;
        txt.height = 20;
        txt.size = 20;
        txt.y = (_this.height - txt.height) * 0.5;
        _this.addChild(txt);
        _this.touchEnabled = true;
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick, _this);
        _this.x = $x;
        _this.y = $y;
        return _this;
    }
    MyButton.prototype.onClick = function (e) {
        e.stopPropagation();
        if (this._func)
            this._func.call(this._target);
    };
    return MyButton;
}(egret.Sprite));
__reflect(MyButton.prototype, "MyButton");
//# sourceMappingURL=MyButton.js.map