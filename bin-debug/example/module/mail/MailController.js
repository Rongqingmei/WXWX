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
var MailController = (function (_super) {
    __extends(MailController, _super);
    function MailController() {
        var _this = _super.call(this) || this;
        _this.mailView = new MailView(_this, LayerManager.UI_Popup);
        App.ViewManager.register(ViewConst.Mail, _this.mailView);
        return _this;
    }
    return MailController;
}(BaseController));
__reflect(MailController.prototype, "MailController");
//# sourceMappingURL=MailController.js.map