var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by yangsong on 2017/10/11.
 */
var RpgGameConst = (function () {
    function RpgGameConst() {
    }
    RpgGameConst.GameInit = 10000;
    RpgGameConst.GameResize = 10001;
    return RpgGameConst;
}());
__reflect(RpgGameConst.prototype, "RpgGameConst");
//# sourceMappingURL=RpgGameConst.js.map