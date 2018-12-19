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
var LoginController = (function (_super) {
    __extends(LoginController, _super);
    function LoginController() {
        var _this = _super.call(this) || this;
        //初始化Model
        _this.loginModel = new LoginModel(_this);
        //初始化UI
        _this.loginView = new LoginView(_this, LayerManager.UI_Main);
        App.ViewManager.register(ViewConst.Login, _this.loginView);
        //初始化Proxy
        _this.loginProxy = new LoginProxy(_this);
        //注册模块间、模块内部事件监听
        //注册C2S消息
        _this.registerFunc(LoginConst.LOGIN_C2S, _this.onLogin, _this);
        //注册S2C消息
        _this.registerFunc(LoginConst.LOGIN_S2C, _this.loginSuccess, _this);
        return _this;
    }
    /**
     * 请求登陆处理
     * @param userName
     * @param pwd
     */
    LoginController.prototype.onLogin = function (userName, pwd) {
        this.loginProxy.login(userName, pwd);
    };
    /**
     * 登陆成功处理
     */
    LoginController.prototype.loginSuccess = function (userInfo) {
        //保存数据
        this.loginModel.userInfo = userInfo;
        //本模块UI处理
        this.loginView.loginSuccess();
        //UI跳转
        App.ViewManager.close(ViewConst.Login);
        var model = this.getControllerModel(ControllerConst.Login);
    };
    return LoginController;
}(BaseController));
__reflect(LoginController.prototype, "LoginController");
//# sourceMappingURL=LoginController.js.map