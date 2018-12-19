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
var RpgGameScene = (function (_super) {
    __extends(RpgGameScene, _super);
    /**
     * 构造函数
     */
    function RpgGameScene() {
        return _super.call(this) || this;
    }
    /**
     * 进入Scene调用
     */
    RpgGameScene.prototype.onEnter = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        _super.prototype.onEnter.call(this);
        //参数
        var mapId = param[0];
        //开启ComponentSystem
        ComponentSystem.start();
        //添加该Scene使用的Layer
        this.addLayer(LayerManager.Game_Main);
        this.addLayer(LayerManager.UI_Main);
        this.addLayer(LayerManager.UI_Popup);
        this.addLayer(LayerManager.UI_Message);
        this.addLayer(LayerManager.UI_Tips);
        //运行RpgGame
        App.ControllerManager.applyFunc(ControllerConst.RpgGame, RpgGameConst.GameInit, mapId);
        //开启UI部分
        App.ViewManager.open(ViewConst.Home);
        //播放背景音乐
        App.SoundManager.playBg("sound_bg");
    };
    /**
     * 退出Scene调用
     */
    RpgGameScene.prototype.onExit = function () {
        _super.prototype.onExit.call(this);
        //关闭ComponentSystem
        ComponentSystem.stop();
    };
    return RpgGameScene;
}(BaseScene));
__reflect(RpgGameScene.prototype, "RpgGameScene");
//# sourceMappingURL=RpgGameScene.js.map