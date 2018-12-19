/**
 * Created by yangsong on 15-3-27.
 * GUI测试
 */
class BattleTest{
    public constructor(){
        var groupName:string = "preload_DemoTest";
        var subGroups:Array<string> = ["preload_core", "preload_ui","preload"];
        App.ResourceUtils.loadGroups(groupName, subGroups, this.onResourceLoadComplete, this.onResourceLoadProgress, this);
    }
 
    /**
     * 资源组加载完成
     */
    private onResourceLoadComplete():void {
        this.initModule();
        App.Init();
 
        //音乐音效处理
        App.SoundManager.setBgOn(true);
        App.SoundManager.setEffectOn(!App.DeviceUtils.IsHtml5 || !App.DeviceUtils.IsMobile);
 
        //App.SceneManager.runScene(SceneConsts.UI);
        //App.SceneManager.runScene(SceneConsts.Battle);
        //延迟切换场景
        //App.SceneManager.LoadingrunScene(SceneConsts.Idle,3000);
        App.SceneManager.runScene(SceneConsts.Idle,3000);
    }
 
    /**
     * 资源组加载进度
     */
    private onResourceLoadProgress(itemsLoaded:number, itemsTotal:number):void {
        App.ControllerManager.applyFunc(ControllerConst.Loading, LoadingConst.SetProgress, itemsLoaded, itemsTotal);
    }
 
    /**
     * 初始化所有模块
     */
    private initModule():void{
        App.ControllerManager.register(ControllerConst.Friend, new FriendController());
        App.ControllerManager.register(ControllerConst.Battle, new BattleController());
        App.ControllerManager.register(ControllerConst.Idle, new IdleController());
        App.ControllerManager.register(ControllerConst.FubenPanel, new FubenPanelController());
    }
}
