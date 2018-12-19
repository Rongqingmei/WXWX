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
var FubenPanelController = (function (_super) {
    __extends(FubenPanelController, _super);
    function FubenPanelController() {
        var _this = _super.call(this) || this;
        //this.proxy = new DemoProxy(this);
        _this.fubenPanelView = new FubenPanelView(_this, LayerManager.UI_Main);
        App.ViewManager.register(ViewConst.FubenPanel, _this.fubenPanelView);
        return _this;
    }
    return FubenPanelController;
}(BaseController));
__reflect(FubenPanelController.prototype, "FubenPanelController");
//# sourceMappingURL=FubenPanelController.js.map