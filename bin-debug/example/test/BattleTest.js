var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by yangsong on 15-3-27.
 * GUI测试
 */
var BattleTest = (function () {
    function BattleTest() {
        var groupName = "preload_DemoTest";
        var subGroups = ["preload_core", "preload_ui", "preload"];
        App.ResourceUtils.loadGroups(groupName, subGroups, this.onResourceLoadComplete, this.onResourceLoadProgress, this);
    }
    /**
     * 资源组加载完成
     */
    BattleTest.prototype.onResourceLoadComplete = function () {
        this.initModule();
        App.Init();
        //音乐音效处理
        App.SoundManager.setBgOn(true);
        App.SoundManager.setEffectOn(!App.DeviceUtils.IsHtml5 || !App.DeviceUtils.IsMobile);
        //App.SceneManager.runScene(SceneConsts.UI);
        //App.SceneManager.runScene(SceneConsts.Battle);
        //延迟切换场景
        //App.SceneManager.LoadingrunScene(SceneConsts.Idle,3000);
        App.SceneManager.runScene(SceneConsts.Idle, 3000);
    };
    /**
     * 资源组加载进度
     */
    BattleTest.prototype.onResourceLoadProgress = function (itemsLoaded, itemsTotal) {
        App.ControllerManager.applyFunc(ControllerConst.Loading, LoadingConst.SetProgress, itemsLoaded, itemsTotal);
    };
    /**
     * 初始化所有模块
     */
    BattleTest.prototype.initModule = function () {
        App.ControllerManager.register(ControllerConst.Friend, new FriendController());
        App.ControllerManager.register(ControllerConst.Battle, new BattleController());
        App.ControllerManager.register(ControllerConst.Idle, new IdleController());
        App.ControllerManager.register(ControllerConst.FubenPanel, new FubenPanelController());
    };
    return BattleTest;
}());
__reflect(BattleTest.prototype, "BattleTest");
//# sourceMappingURL=BattleTest.js.map