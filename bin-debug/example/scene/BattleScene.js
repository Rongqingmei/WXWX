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
 * Created by yangsong on 2014/11/28.
 * UI场景层
 */
var BattleScene = (function (_super) {
    __extends(BattleScene, _super);
    /**
    * 构造函数
    */
    function BattleScene() {
        return _super.call(this) || this;
    }
    /**
    * 进入Scene调用
    */
    BattleScene.prototype.onEnter = function () {
        _super.prototype.onEnter.call(this);
        //添加该Scene使用的层级
        this.addLayer(LayerManager.UI_Main);
        this.addLayer(LayerManager.UI_Popup);
        this.addLayer(LayerManager.UI_Message);
        this.addLayer(LayerManager.UI_Tips);
        //添加一个纯色背景
        var rect = new eui.Rect();
        rect.fillColor = 0x78b93f;
        rect.percentHeight = 100;
        rect.percentWidth = 100;
        LayerManager.UI_Main.addChild(rect);
        //初始打开Home页面
        App.ViewManager.open(ViewConst.Battle);
    };
    /**
    * 退出Scene调用
    */
    BattleScene.prototype.onExit = function () {
        _super.prototype.onExit.call(this);
    };
    return BattleScene;
}(BaseScene));
__reflect(BattleScene.prototype, "BattleScene");
//# sourceMappingURL=BattleScene.js.map