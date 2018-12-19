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
 * 场景管理类
 */
var SceneManager = (function (_super) {
    __extends(SceneManager, _super);
    /**
     * 构造函数
     */
    function SceneManager() {
        var _this = _super.call(this) || this;
        _this._scenes = {};
        return _this;
    }
    /**
     * 清空处理
     */
    SceneManager.prototype.clear = function () {
        var nowScene = this._scenes[this._currScene];
        if (nowScene) {
            nowScene.onExit();
            this._currScene = undefined;
        }
        this._scenes = {};
    };
    /**
     * 注册Scene
     * @param key Scene唯一标识
     * @param scene Scene对象
     */
    SceneManager.prototype.register = function (key, scene) {
        this._scenes[key] = scene;
    };
    /**
     * 切换场景
     * @param key 场景唯一标识
     */
    SceneManager.prototype.runScene = function (key) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        var nowScene = this._scenes[key];
        if (nowScene == null) {
            Log.trace("场景" + key + "不存在");
            return;
        }
        var oldScene = this._scenes[this._currScene];
        if (oldScene) {
            oldScene.onExit();
        }
        nowScene.onEnter.apply(nowScene, param);
        this._currScene = key;
    };
    SceneManager.prototype.LoadingrunScene = function (key, time) {
        var param = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            param[_i - 2] = arguments[_i];
        }
        var nowScene = this._scenes[key];
        if (nowScene == null) {
            Log.trace("场景" + key + "不存在");
            return;
        }
        //记录旧的场景的代号，用于之后来销毁退出
        this.DelayOldScene = this._scenes[this._currScene];
        //设定定时器用来一定时间后推出旧的
        var timer = new egret.Timer(time, 1);
        //timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        timer.start();
        //载入新的场景
        nowScene.onEnter.apply(nowScene, param);
        this._currScene = key;
    };
    SceneManager.prototype.timerComFunc = function () {
        if (this.DelayOldScene) {
            console.log("this.DelayOldScenexxxxxxxxxxxxxxx", this.DelayOldScene);
            this.DelayOldScene.onExit();
        }
    };
    /**
     * 获取当前Scene
     * @returns {number}
     */
    SceneManager.prototype.getCurrScene = function () {
        return this._currScene;
    };
    return SceneManager;
}(BaseClass));
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManager.js.map