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
 * Created by egret on 15-1-6.
 */
var BattleView = (function (_super) {
    __extends(BattleView, _super);
    function BattleView($controller, $parent) {
        var _this = _super.call(this, $controller, $parent) || this;
        _this.skinName = "resource/skins/BattleSkin.exml";
        return _this;
    }
    //button:eui.Button;
    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    BattleView.prototype.initUI = function () {
        _super.prototype.initUI.call(this);
        this.testmsg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.testmsgClickHandler, this);
        this.testattack.addEventListener(egret.TouchEvent.TOUCH_TAP, this.testattackClickHandler, this);
        this.testbeattack.addEventListener(egret.TouchEvent.TOUCH_TAP, this.testbeattackClickHandler, this);
        this.testskill.addEventListener(egret.TouchEvent.TOUCH_TAP, this.testskillClickHandler, this);
        this.testreset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.testresetClickHandler, this);
        //初始化默认存储数据
        this.myX = this.myObj.x;
        this.myY = this.myObj.y;
        this.yourX = this.yourObj.x;
        this.yourY = this.yourObj.y;
        this.MyInfoX = this.MyInfo.x;
        this.MyInfoY = this.MyInfo.y;
        //初始化我方动画
        this.initMyObjTween(false, 4, 700);
        //弹出一个msg
        this.OutMessage("xxx");
    };
    /**初始化我方瞬动idle动画，或者卡动idle动画 */
    BattleView.prototype.initMyObjTween = function (IsKazhen, height, time) {
        if (IsKazhen === void 0) { IsKazhen = false; }
        if (height === void 0) { height = 4; }
        if (time === void 0) { time = 700; }
        var self = this;
        if (IsKazhen) {
            egret.Tween.removeTweens(this.myObj); ////清除之前的动画
            self.mytween = egret.Tween.get(self.myObj, { "loop": true }).to({ y: this.myY + height }, 0).to({ y: this.myY + height }, time).to({ y: this.myY }, 0).to({ y: this.myY }, time);
        }
        else {
            egret.Tween.removeTweens(self.myObj); ////清除之前的动画
            self.mytween = egret.Tween.get(self.myObj, { "loop": true }).to({ y: this.myY + height }, time).to({ y: this.myY }, time);
        }
        //这个测试用的
        this.initMyInfoTween();
    };
    /**初始化我方状态栏瞬动idle动画，或者卡动idle动画 */
    BattleView.prototype.initMyInfoTween = function (IsKazhen, height, time) {
        if (IsKazhen === void 0) { IsKazhen = false; }
        if (height === void 0) { height = 2; }
        if (time === void 0) { time = 700; }
        var self = this;
        if (IsKazhen) {
            egret.Tween.removeTweens(self.MyInfo); ////清除之前的动画
            self.MyInfo.x = self.MyInfoX;
            self.MyInfo.y = self.MyInfoY;
            self.mytween = egret.Tween.get(self.MyInfo, { "loop": true }).to({ y: this.MyInfoY + height }, 0).to({ y: this.MyInfoY + height }, time).to({ y: this.MyInfoY }, 0).to({ y: this.MyInfoY }, time);
        }
        else {
            egret.Tween.removeTweens(self.MyInfo); ////清除之前的动画
            self.MyInfo.x = self.MyInfoX;
            self.MyInfo.y = self.MyInfoY;
            self.mytween = egret.Tween.get(self.MyInfo, { "loop": true }).to({ y: this.MyInfoY + height }, time).to({ y: this.MyInfoY }, time);
        }
    };
    //弹出对话框的函数
    BattleView.prototype.OutMessage = function (msg) {
        var self = this;
        egret.Tween.removeTweens(this.Message); ////清除之前的动画
        self.Message.visible = true;
        var tween = egret.Tween.get(self.Message).to({ scaleY: 0.7, scaleX: 0.7, alpha: 0.1 }, 0).to({ scaleY: 1.0, scaleX: 1.0, alpha: 1.0 }, 150);
        //文字的一个个敲出
        this.msgLabel.width = 0;
        egret.Tween.removeTweens(self.msgLabel); ////清除之前的动画
        var Labeltween = egret.Tween.get(self.msgLabel).to({ width: 309 }, 3000);
    };
    /**龙骨动画测试项目 */
    BattleView.prototype.initdragonbone = function () {
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", dragonBones.DragonBones.VERSION);
        var dragonbonesData = RES.getRes("xiaociguaiidle_ske_json");
        var textureData = RES.getRes("xiaociguaiidle_tex_json");
        var texture = RES.getRes("xiaociguaiidle_tex_png");
        var egretFactory = dragonBones.EgretFactory.factory;
        egretFactory.parseDragonBonesData(dragonbonesData);
        egretFactory.parseTextureAtlasData(textureData, texture);
        var armatureDisplay = egretFactory.buildArmatureDisplay("Sprite");
        // this.myObjima.visible = false;
        this.myObj.addChild(armatureDisplay);
        armatureDisplay.x = 40; //80;
        armatureDisplay.y = 40; //80;
        armatureDisplay.scaleX = 2.5;
        armatureDisplay.scaleY = 2.5;
        armatureDisplay.animation.play("Sprite");
    };
    BattleView.prototype.testmsgClickHandler = function (e) {
        //App.ViewManager.open(ViewConst.Friend);
        this.OutMessage("xxx");
    };
    BattleView.prototype.testattackClickHandler = function () {
        this.myObjattack();
        //多少秒后敌人受到攻击
        var timer = new egret.Timer(190, 1); //后面的数值是进行几次timerFunc
        //timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.yourObjBeattack, this);
        timer.start();
        // //多少秒后卡住
        // var timer2: egret.Timer = new egret.Timer(210, 1);//后面的数值是进行几次timerFunc
        // //timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        // timer2.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.ontest, this);
        // timer2.start();
        // //多少秒后恢复
        // var timer3: egret.Timer = new egret.Timer(680, 1);//后面的数值是进行几次timerFunc
        // //timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        // timer3.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.ontest2, this);
        // timer3.start();
    };
    // private ontest(): void {
    //     egret.Tween.pauseTweens(this.yourObj);
    // }
    // private ontest2(): void {
    //     egret.Tween.resumeTweens(this.yourObj);
    // }
    BattleView.prototype.testbeattackClickHandler = function () {
        this.yourObjBeattack();
        console.log("testbeattackClickHandler");
    };
    BattleView.prototype.testskillClickHandler = function () {
        console.log("testskillClickHandler");
    };
    BattleView.prototype.testresetClickHandler = function () {
        console.log("testresetClickHandler");
    };
    BattleView.prototype.myObjattack = function (kdtime) {
        if (kdtime === void 0) { kdtime = 200; }
        var self = this;
        egret.Tween.removeTweens(this.myObj);
        var time = 180;
        self.mytween = egret.Tween.get(self.myObj).to({ x: self.myX + 80, y: self.myY - 6 }, time).to({ x: self.myX + 80, y: self.myY - 6 }, kdtime).to({ x: self.myX, y: self.myY }, time).call(this.initMyObjTween, this);
        //测试用的
        egret.Tween.pauseTweens(self.MyInfo); ////清除之前的动画
        //self.MyInfo.x = self.MyInfoX;
        //self.MyInfo.y = self.MyInfoY;
    };
    BattleView.prototype.yourObjBeattack = function () {
        var self = this;
        egret.Tween.removeTweens(self.yourObj);
        var time = 300;
        self.yourtween = egret.Tween.get(self.yourObj).to({ x: self.yourX + 30, y: self.yourY }, time).to({ x: self.yourX, y: self.yourY }, time);
    };
    return BattleView;
}(BaseEuiView));
__reflect(BattleView.prototype, "BattleView");
//# sourceMappingURL=BattleView.js.map