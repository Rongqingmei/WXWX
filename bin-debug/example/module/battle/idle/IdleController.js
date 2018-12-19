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
var IdleController = (function (_super) {
    __extends(IdleController, _super);
    function IdleController() {
        var _this = _super.call(this) || this;
        //this.proxy = new DemoProxy(this);
        _this.idleView = new IdleView(_this, LayerManager.UI_Main);
        App.ViewManager.register(ViewConst.Idle, _this.idleView);
        return _this;
    }
    return IdleController;
}(BaseController));
__reflect(IdleController.prototype, "IdleController");
//# sourceMappingURL=IdleController.js.map