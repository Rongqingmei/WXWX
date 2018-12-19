var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by egret on 15-1-6.
 */
var GameConst = (function () {
    function GameConst() {
    }
    GameConst.Get_Hero = 10000;
    GameConst.Remove_Enemy = 10001;
    return GameConst;
}());
__reflect(GameConst.prototype, "GameConst");
//# sourceMappingURL=GameConst.js.map