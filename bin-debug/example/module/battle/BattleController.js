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
 * Created by yangsong on 15-1-6.
 */
var BattleController = (function (_super) {
    __extends(BattleController, _super);
    function BattleController() {
        var _this = _super.call(this) || this;
        //this.proxy = new DemoProxy(this);
        _this.battleView = new BattleView(_this, LayerManager.UI_Main);
        App.ViewManager.register(ViewConst.Battle, _this.battleView);
        return _this;
    }
    return BattleController;
}(BaseController));
__reflect(BattleController.prototype, "BattleController");
//# sourceMappingURL=BattleController.js.map