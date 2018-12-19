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
 * tabbar的按钮
 */
var TabBarButton = (function (_super) {
    __extends(TabBarButton, _super);
    function TabBarButton() {
        return _super.call(this) || this;
    }
    Object.defineProperty(TabBarButton.prototype, "data", {
        get: function () {
            return this.mydata;
        },
        set: function (value) {
            this.mydata = value;
            if (this.iconDisplay) {
                this.iconDisplay.source = this.data.title;
            }
            if (this.iconDisplaySelected) {
                this.iconDisplaySelected.source = this.data.titleSelected;
            }
        },
        enumerable: true,
        configurable: true
    });
    TabBarButton.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (!this.data)
            return;
        if (instance == this.iconDisplay) {
            this.iconDisplay.source = this.data.title;
        }
        if (instance == this.iconDisplaySelected) {
            this.iconDisplaySelected.source = this.data.titleSelected;
        }
    };
    return TabBarButton;
}(eui.ItemRenderer));
__reflect(TabBarButton.prototype, "TabBarButton");
//# sourceMappingURL=TabBarButton.js.map