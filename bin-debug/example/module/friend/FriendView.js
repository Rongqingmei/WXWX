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
var FriendView = (function (_super) {
    __extends(FriendView, _super);
    function FriendView(controller, parent) {
        var _this = _super.call(this, controller, parent) || this;
        _this.icon = "table_tittle";
        return _this;
    }
    return FriendView;
}(BasePanelView));
__reflect(FriendView.prototype, "FriendView");
//# sourceMappingURL=FriendView.js.map