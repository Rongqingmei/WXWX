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
var RpgGameController = (function (_super) {
    __extends(RpgGameController, _super);
    function RpgGameController() {
        var _this = _super.call(this) || this;
        //View初始化
        _this.gameView = new RpgGameView(_this, LayerManager.Game_Main);
        App.ViewManager.register(ViewConst.RpgGame, _this.gameView);
        //Model初始化
        _this.gameModel = new RpgGameModel(_this);
        //注册模块消息
        _this.registerFunc(RpgGameConst.GameInit, _this.gameInit, _this);
        _this.registerFunc(RpgGameConst.GameResize, _this.gameResize, _this);
        return _this;
    }
    RpgGameController.prototype.gameInit = function (mapId) {
        this.gameModel.mapId = mapId;
        this.gameModel.playerData = {
            mcName: "scenePlayer_0",
            propertyData: {
                name: "yangsong",
                title: "[开发者]",
                vip: 8,
                attackDis: 3,
                attackInterval: 1500,
                hp: 9999999
            }
        };
        this.gameModel.monsterNum = 200;
        App.ViewManager.open(ViewConst.RpgGame, this.gameModel);
    };
    RpgGameController.prototype.gameResize = function () {
        this.gameView.resize();
    };
    return RpgGameController;
}(BaseController));
__reflect(RpgGameController.prototype, "RpgGameController");
//# sourceMappingURL=RpgGameController.js.map