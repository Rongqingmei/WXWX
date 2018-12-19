var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by yangsong on 15-3-27.
 * ActDemo
 */
var ActTest = (function () {
    function ActTest() {
        var groupName = "preload";
        var subGroups = ["preload_core", "preload_battle"];
        App.ResourceUtils.loadGroups(groupName, subGroups, this.onResourceLoadComplete, this.onResourceLoadProgress, this);
    }
    /**
     * 资源组加载完成
     */
    ActTest.prototype.onResourceLoadComplete = function () {
        this.initModule();
        App.Init();
        //音乐音效处理
        App.SoundManager.setBgOn(true);
        App.SoundManager.setEffectOn(true);
        this.initBattleDragonBones();
        App.SceneManager.runScene(SceneConsts.Game);
    };
    /**
     * 资源组加载进度
     */
    ActTest.prototype.onResourceLoadProgress = function (itemsLoaded, itemsTotal) {
        App.ControllerManager.applyFunc(ControllerConst.Loading, LoadingConst.SetProgress, itemsLoaded, itemsTotal);
    };
    /**
     * 初始化战斗使用的动画
     */
    ActTest.prototype.initBattleDragonBones = function () {
        var arr = ["zhujue1", "zhujue2", "guaiwu001", "jineng1", "jineng2", "guaiwu002", "guaiwu002_effect", "guaiwu003", "guaiwu003_effect"];
        for (var i = 0, len = arr.length; i < len; i++) {
            var dbName = arr[i];
            var skeletonData = RES.getRes(dbName + "_skeleton_json");
            var texturePng = RES.getRes(dbName + "_texture_png");
            var textureData = RES.getRes(dbName + "_texture_json");
            App.DragonBonesFactory.initArmatureFile(skeletonData, texturePng, textureData);
        }
    };
    /**
     * 初始化所有模块
     */
    ActTest.prototype.initModule = function () {
        App.ControllerManager.register(ControllerConst.Game, new GameController());
    };
    return ActTest;
}());
__reflect(ActTest.prototype, "ActTest");
//# sourceMappingURL=ActTest.js.map