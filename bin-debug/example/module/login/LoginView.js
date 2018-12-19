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
 * Created by Administrator on 2014/11/23.
 */
var LoginView = (function (_super) {
    __extends(LoginView, _super);
    function LoginView($controller, $parent) {
        return _super.call(this, $controller, $parent) || this;
    }
    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    LoginView.prototype.initUI = function () {
        _super.prototype.initUI.call(this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLogin, this);
    };
    /**
     *对面板数据的初始化，用于子类继承
     *
     */
    LoginView.prototype.initData = function () {
        _super.prototype.initData.call(this);
    };
    /**
     * 面板开启执行函数，用于子类继承
     * @param param 参数
     */
    LoginView.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        _super.prototype.open.call(this, param);
    };
    /**
     * 面板关闭执行函数，用于子类继承
     * @param param 参数
     */
    LoginView.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        _super.prototype.close.call(this, param);
    };
    /**
     * 请求登陆处理
     * @param userName
     * @param pwd
     */
    LoginView.prototype.onLogin = function () {
        var userName = "yangsong";
        var pwd = "123456";
        //进行基础检测
        if (userName == null || userName.length == 0) {
            return;
        }
        if (pwd == null || pwd.length == 0) {
            return;
        }
        this.applyFunc(LoginConst.LOGIN_C2S, userName, pwd);
    };
    /**
     * 登陆成功处理
     */
    LoginView.prototype.loginSuccess = function () {
        //TODO 登陆成功处理
    };
    return LoginView;
}(BaseEuiView));
__reflect(LoginView.prototype, "LoginView");
//# sourceMappingURL=LoginView.js.map