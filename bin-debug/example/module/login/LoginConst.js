var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by Administrator on 2014/11/23.
 */
var LoginConst = (function () {
    function LoginConst() {
    }
    LoginConst.LOGIN_C2S = 10001;
    LoginConst.LOGIN_S2C = 10002;
    return LoginConst;
}());
__reflect(LoginConst.prototype, "LoginConst");
//# sourceMappingURL=LoginConst.js.map