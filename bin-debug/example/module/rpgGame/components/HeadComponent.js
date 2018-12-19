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
 * Created by yangsong on 2017/10/11.
 */
var HeadComponent = (function (_super) {
    __extends(HeadComponent, _super);
    function HeadComponent() {
        return _super.call(this) || this;
    }
    HeadComponent.prototype.start = function () {
        _super.prototype.start.call(this);
        var avatarComponent = this.entity.getComponent(ComponentType.Avatar);
        this.createNameTxt(avatarComponent.body);
        this.createTitleTxt(avatarComponent.body);
    };
    HeadComponent.prototype.createNameTxt = function (parent) {
        this.nameTxt = new egret.TextField();
        this.nameTxt.size = 18;
        this.nameTxt.textColor = 0xFFFFFF;
        this.nameTxt.width = 100;
        this.nameTxt.height = 20;
        this.nameTxt.textAlign = egret.HorizontalAlign.CENTER;
        this.nameTxt.strokeColor = 0x000000;
        this.nameTxt.stroke = 2;
        this.nameTxt.text = this.entity.propertyData.name;
        this.nameTxt.y = -160;
        AnchorUtil.setAnchorX(this.nameTxt, 0.5);
        parent.addChild(this.nameTxt);
    };
    HeadComponent.prototype.createTitleTxt = function (parent) {
        this.titleTxt = new egret.TextField();
        this.titleTxt.size = 18;
        this.titleTxt.textColor = 0x87CEEB;
        this.titleTxt.width = 100;
        this.titleTxt.height = 20;
        this.titleTxt.textAlign = egret.HorizontalAlign.CENTER;
        this.titleTxt.strokeColor = 0x000000;
        this.titleTxt.stroke = 2;
        this.titleTxt.text = this.entity.propertyData.title;
        this.titleTxt.y = -180;
        AnchorUtil.setAnchorX(this.titleTxt, 0.5);
        parent.addChild(this.titleTxt);
    };
    HeadComponent.prototype.stop = function () {
        _super.prototype.stop.call(this);
        App.DisplayUtils.removeFromParent(this.nameTxt);
        this.nameTxt = null;
        App.DisplayUtils.removeFromParent(this.titleTxt);
        this.titleTxt = null;
    };
    HeadComponent.prototype.update = function (advancedTime) {
        _super.prototype.update.call(this, advancedTime);
    };
    return HeadComponent;
}(Component));
__reflect(HeadComponent.prototype, "HeadComponent");
//# sourceMappingURL=HeadComponent.js.map