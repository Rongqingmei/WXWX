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
 * tabbar附加一个容器
 */
var TabBarContainer = (function (_super) {
    __extends(TabBarContainer, _super);
    function TabBarContainer(skinName) {
        if (skinName === void 0) { skinName = null; }
        var _this = _super.call(this) || this;
        //默认皮肤
        if (!skinName) {
            skinName = "resource/skins/TabBarSkin.exml";
        }
        _this._tabBarItemRendererSkinName = "resource/skins/TabBarButtonSkin.exml";
        _this._tabBarItemRenderer = TabBarButton;
        _this._dp = new eui.ArrayCollection();
        _this._views = [];
        _this.skinName = skinName;
        return _this;
    }
    TabBarContainer.prototype.onTabBarIndexChanged = function (e) {
        this.viewStack.selectedIndex = this.tabBar.selectedIndex;
    };
    TabBarContainer.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.tabBar) {
            this.tabBar.itemRendererSkinName = this._tabBarItemRendererSkinName;
            this.tabBar.itemRenderer = this._tabBarItemRenderer;
            this.tabBar.dataProvider = this._dp;
            this.tabBar.addEventListener(egret.Event.CHANGE, this.onTabBarIndexChanged, this);
        }
        else if (instance == this.viewStack) {
            for (var i = 0; i < this._views.length; i++) {
                this.viewStack.addChild(this._views[i]);
            }
            this._views.length = 0;
            this.tabBar.selectedIndex = 0;
            this.viewStack.selectedIndex = 0;
        }
    };
    Object.defineProperty(TabBarContainer.prototype, "tabBarItemRendererSkinName", {
        set: function (value) {
            this._tabBarItemRendererSkinName = value;
            if (this.tabBar) {
                this.tabBar.itemRendererSkinName = this._tabBarItemRendererSkinName;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabBarContainer.prototype, "tabBarItemRenderer", {
        set: function (value) {
            this._tabBarItemRenderer = value;
            if (this.tabBar) {
                this.tabBar.itemRenderer = this._tabBarItemRenderer;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     *  添加一项到ViewStack
     * @param title
     * @param titleSelected
     * @param content
     */
    TabBarContainer.prototype.addViewStackElement = function (title, titleSelected, content) {
        this._dp.addItem({ "title": title, "titleSelected": titleSelected });
        if (this.viewStack) {
            this.viewStack.addChild(content);
        }
        else {
            this._views.push(content);
        }
    };
    return TabBarContainer;
}(eui.Component));
__reflect(TabBarContainer.prototype, "TabBarContainer");
//# sourceMappingURL=TabBarContainer.js.map