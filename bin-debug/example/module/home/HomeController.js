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
var HomeController = (function (_super) {
    __extends(HomeController, _super);
    function HomeController() {
        var _this = _super.call(this) || this;
        _this.proxy = new HomeProxy(_this);
        _this.homeView = new HomeView(_this, LayerManager.UI_Main);
        App.ViewManager.register(ViewConst.Home, _this.homeView);
        return _this;
    }
    return HomeController;
}(BaseController));
__reflect(HomeController.prototype, "HomeController");
//# sourceMappingURL=HomeController.js.map