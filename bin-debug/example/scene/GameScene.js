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
 * 游戏场景
 */
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    /**
     * 构造函数
     */
    function GameScene() {
        return _super.call(this) || this;
    }
    /**
     * 进入Scene调用
     */
    GameScene.prototype.onEnter = function () {
        _super.prototype.onEnter.call(this);
        this.addLayerAt(LayerManager.Game_Main, 0);
        App.ViewManager.open(ViewConst.Game);
        App.ViewManager.open(ViewConst.GameUI);
        //播放背景音乐
        App.SoundManager.playBg("sound_bg");
    };
    /**
     * 退出Scene调用
     */
    GameScene.prototype.onExit = function () {
        _super.prototype.onExit.call(this);
    };
    return GameScene;
}(BaseScene));
__reflect(GameScene.prototype, "GameScene");
//# sourceMappingURL=GameScene.js.map