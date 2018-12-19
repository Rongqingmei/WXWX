var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by yangsong on 15-3-27.
 * GUI测试
 */
var EUITest = (function () {
    function EUITest() {
        var groupName = "preload_EUITest";
        var subGroups = ["preload_core", "preload_ui"];
        App.ResourceUtils.loadGroups(groupName, subGroups, this.onResourceLoadComplete, this.onResourceLoadProgress, this);
    }
    /**
     * 资源组加载完成
     */
    EUITest.prototype.onResourceLoadComplete = function () {
        this.initModule();
        App.Init();
        //音乐音效处理
        App.SoundManager.setBgOn(true);
        App.SoundManager.setEffectOn(!App.DeviceUtils.IsHtml5 || !App.DeviceUtils.IsMobile);
        App.SceneManager.runScene(SceneConsts.UI);
    };
    /**
     * 资源组加载进度
     */
    EUITest.prototype.onResourceLoadProgress = function (itemsLoaded, itemsTotal) {
        App.ControllerManager.applyFunc(ControllerConst.Loading, LoadingConst.SetProgress, itemsLoaded, itemsTotal);
    };
    /**
     * 初始化所有模块
     */
    EUITest.prototype.initModule = function () {
        App.ControllerManager.register(ControllerConst.Login, new LoginController());
        App.ControllerManager.register(ControllerConst.Home, new HomeController());
        App.ControllerManager.register(ControllerConst.Friend, new FriendController());
        App.ControllerManager.register(ControllerConst.Shop, new ShopController());
        App.ControllerManager.register(ControllerConst.Warehouse, new WarehouseController());
        App.ControllerManager.register(ControllerConst.Factory, new FactoryController());
        App.ControllerManager.register(ControllerConst.Task, new TaskController());
        App.ControllerManager.register(ControllerConst.Mail, new MailController());
    };
    return EUITest;
}());
__reflect(EUITest.prototype, "EUITest");
//# sourceMappingURL=EUITest.js.map