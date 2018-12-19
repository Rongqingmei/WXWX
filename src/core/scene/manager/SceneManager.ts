/**
 * Created by yangsong on 2014/11/28.
 * 场景管理类
 */
class SceneManager extends BaseClass {
    private _scenes:any;
    private _currScene:number;

    /**
     * 构造函数
     */
    public constructor() {
        super();
        this._scenes = {};
    }

    /**
     * 清空处理
     */
    public clear():void {
        var nowScene:BaseScene = this._scenes[this._currScene];
        if(nowScene){
            nowScene.onExit();
            this._currScene = undefined;
        }
        this._scenes = {};
    }

    /**
     * 注册Scene
     * @param key Scene唯一标识
     * @param scene Scene对象
     */
    public register(key:number, scene:BaseScene):void {
        this._scenes[key] = scene;
    }

    /**
     * 切换场景
     * @param key 场景唯一标识
     */
    public runScene(key:number, ...param:any[]):void {
        var nowScene:BaseScene = this._scenes[key];
        if (nowScene == null) {
            Log.trace("场景" + key + "不存在");
            return;
        }

        var oldScene:BaseScene = this._scenes[this._currScene];
        if (oldScene) {
            oldScene.onExit();
        }

        nowScene.onEnter.apply(nowScene, param);
        this._currScene = key;
    }

     /**
     * 延时切换场景（加载场景加载完成后）
     * @param key 场景唯一标识
     */
    private DelayOldScene:BaseScene;
    public LoadingrunScene(key:number,time:number, ...param:any[]):void {
        var nowScene:BaseScene = this._scenes[key];
        if (nowScene == null) {
            Log.trace("场景" + key + "不存在");
            return;
        }
        //记录旧的场景的代号，用于之后来销毁退出
        this.DelayOldScene = this._scenes[this._currScene];
        //设定定时器用来一定时间后推出旧的
        var timer: egret.Timer = new egret.Timer(time, 1);
        //timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        timer.start();
        //载入新的场景
        nowScene.onEnter.apply(nowScene, param);
        this._currScene = key;
    }
    private timerComFunc():void{
        if (this.DelayOldScene) {
            console.log("this.DelayOldScenexxxxxxxxxxxxxxx",this.DelayOldScene);
            this.DelayOldScene.onExit();
        }
    }

    /**
     * 获取当前Scene
     * @returns {number}
     */
    public getCurrScene():number {
        return this._currScene;
    }
}
