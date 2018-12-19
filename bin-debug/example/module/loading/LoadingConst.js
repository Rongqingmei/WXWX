var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by Administrator on 2014/11/23.
 */
var LoadingConst = (function () {
    function LoadingConst() {
    }
    LoadingConst.SetProgress = 10001;
    return LoadingConst;
}());
__reflect(LoadingConst.prototype, "LoadingConst");
//# sourceMappingURL=LoadingConst.js.map