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
var BasePanelView = (function (_super) {
    __extends(BasePanelView, _super);
    function BasePanelView(controller, parent) {
        var _this = _super.call(this, controller, parent) || this;
        _this.skinName = "resource/skins/PanelSkin.exml";
        return _this;
    }
    Object.defineProperty(BasePanelView.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        set: function (value) {
            this._icon = value;
            if (this.iconDisplay) {
                this.iconDisplay.source = this._icon;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePanelView.prototype, "btn", {
        get: function () {
            return this._btn;
        },
        set: function (value) {
            this._btn = value;
            if (this.button) {
                this.button.source = this._btn;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    BasePanelView.prototype.initUI = function () {
        _super.prototype.initUI.call(this);
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.closeBtnClickHandler, this);
    };
    /**
     *对面板数据的初始化，用于子类继承
     *
     */
    BasePanelView.prototype.initData = function () {
        _super.prototype.initData.call(this);
        this.iconDisplay.source = this._icon;
        this.button.source = this._btn;
    };
    BasePanelView.prototype.closeBtnClickHandler = function (e) {
        App.ViewManager.closeView(this);
    };
    return BasePanelView;
}(BaseEuiView));
__reflect(BasePanelView.prototype, "BasePanelView");
//# sourceMappingURL=BasePanelView.js.map