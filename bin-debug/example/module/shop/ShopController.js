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
 * Created by egret on 15-1-7.
 */
var ShopController = (function (_super) {
    __extends(ShopController, _super);
    function ShopController() {
        var _this = _super.call(this) || this;
        _this.shopView = new ShopView(_this, LayerManager.UI_Popup);
        App.ViewManager.register(ViewConst.Shop, _this.shopView);
        return _this;
    }
    return ShopController;
}(BaseController));
__reflect(ShopController.prototype, "ShopController");
//# sourceMappingURL=ShopController.js.map