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
 * 商品的渲染器
 */
var SaleItemRenderer = (function (_super) {
    __extends(SaleItemRenderer, _super);
    function SaleItemRenderer() {
        return _super.call(this) || this;
    }
    SaleItemRenderer.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        if (this.titleDisplay) {
            this.titleDisplay.text = this.data.title;
        }
        if (this.priceDisplay) {
            this.priceDisplay.text = this.data.price;
        }
        if (this.timeDisplay) {
            this.timeDisplay.text = this.data.time;
        }
        if (this.iconDisplay) {
            this.iconDisplay.source = this.data.icon;
        }
    };
    SaleItemRenderer.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (!this.data)
            return;
        if (instance == this.titleDisplay) {
            this.titleDisplay.text = this.data.title;
        }
        if (instance == this.priceDisplay) {
            this.priceDisplay.text = this.data.price;
        }
        if (instance == this.timeDisplay) {
            this.timeDisplay.text = this.data.time;
        }
        if (instance == this.iconDisplay) {
            this.iconDisplay.source = this.data.icon;
        }
    };
    return SaleItemRenderer;
}(eui.ItemRenderer));
__reflect(SaleItemRenderer.prototype, "SaleItemRenderer");
//# sourceMappingURL=SaleItemRenderer.js.map