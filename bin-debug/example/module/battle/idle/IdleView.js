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
 * Created by egret on 15-1-6.
 */
var IdleView = (function (_super) {
    __extends(IdleView, _super);
    function IdleView($controller, $parent) {
        var _this = _super.call(this, $controller, $parent) || this;
        _this.skinName = "resource/skins/IdleSkin.exml";
        return _this;
    }
    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    IdleView.prototype.initUI = function () {
        _super.prototype.initUI.call(this);
        console.log("xxxxxxxxxxxxxx进入View");
        this.help.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    };
    IdleView.prototype.onClick = function () {
        // App.SceneManager.runScene(SceneConsts.Battle);
        App.ViewManager.open(ViewConst.FubenPanel);
    };
    return IdleView;
}(BaseEuiView));
__reflect(IdleView.prototype, "IdleView");
//# sourceMappingURL=IdleView.js.map