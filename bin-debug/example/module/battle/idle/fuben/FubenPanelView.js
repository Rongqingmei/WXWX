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
var FubenPanelView = (function (_super) {
    __extends(FubenPanelView, _super);
    function FubenPanelView($controller, $parent) {
        var _this = _super.call(this, $controller, $parent) || this;
        _this.skinName = "resource/skins/battle/fuben/FubenPanelSkin.exml";
        return _this;
    }
    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    FubenPanelView.prototype.initUI = function () {
        _super.prototype.initUI.call(this);
        this.enter.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn, this);
        this.Bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn, this);
        this.BOSS3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBattle, this);
    };
    FubenPanelView.prototype.onBtn = function () {
        App.ViewManager.close(ViewConst.FubenPanel);
    };
    FubenPanelView.prototype.onBattle = function () {
        App.SceneManager.runScene(SceneConsts.Battle);
    };
    return FubenPanelView;
}(BaseEuiView));
__reflect(FubenPanelView.prototype, "FubenPanelView");
//# sourceMappingURL=FubenPanelView.js.map