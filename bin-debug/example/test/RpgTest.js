var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by yangsong on 15-3-27.
 * RpgDemo
 */
var RpgTest = (function () {
    function RpgTest() {
        //指定MapId
        this.mapId = 1193;
        this.mapGroupKey = "map_" + this.mapId;
        this.initMapResource();
        //加载资源
        var groupName = "preload_RpgTest";
        var subGroups = ["preload_core", "preload_ui", "preload_rpg", this.mapGroupKey];
        App.ResourceUtils.loadGroups(groupName, subGroups, this.onResourceLoadComplete, this.onResourceLoadProgress, this);
    }
    RpgTest.prototype.initMapResource = function () {
        var mapResPath = "resource/assets/rpgGame/map/" + this.mapId + "/";
        var mapResKey = this.mapGroupKey + "_";
        var mapResKeys = [];
        var mapRes = [
            {
                name: "data.json",
                type: "json"
            },
            {
                name: "mini.jpg",
                type: "image"
            }
        ];
        mapRes.forEach(function (res) {
            var resKey = mapResKey + res.name;
            App.ResourceUtils.createResource(resKey, res.type, mapResPath + res.name);
            mapResKeys.push(resKey);
        });
        App.ResourceUtils.createGroup(this.mapGroupKey, mapResKeys);
    };
    /**
     * 资源组加载完成
     */
    RpgTest.prototype.onResourceLoadComplete = function () {
        this.initModule();
        App.Init();
        //音乐音效处理
        App.SoundManager.setBgOn(true);
        App.SoundManager.setEffectOn(true);
        //进入游戏
        App.SceneManager.runScene(SceneConsts.RpgGame, this.mapId);
    };
    /**
     * 资源组加载进度
     */
    RpgTest.prototype.onResourceLoadProgress = function (itemsLoaded, itemsTotal) {
        App.ControllerManager.applyFunc(ControllerConst.Loading, LoadingConst.SetProgress, itemsLoaded, itemsTotal);
    };
    /**
     * 初始化所有模块
     */
    RpgTest.prototype.initModule = function () {
        App.ControllerManager.register(ControllerConst.Login, new LoginController());
        App.ControllerManager.register(ControllerConst.Home, new HomeController());
        App.ControllerManager.register(ControllerConst.Friend, new FriendController());
        App.ControllerManager.register(ControllerConst.Shop, new ShopController());
        App.ControllerManager.register(ControllerConst.Warehouse, new WarehouseController());
        App.ControllerManager.register(ControllerConst.Factory, new FactoryController());
        App.ControllerManager.register(ControllerConst.Task, new TaskController());
        App.ControllerManager.register(ControllerConst.Mail, new MailController());
        App.ControllerManager.register(ControllerConst.RpgGame, new RpgGameController());
    };
    return RpgTest;
}());
__reflect(RpgTest.prototype, "RpgTest");
//# sourceMappingURL=RpgTest.js.map