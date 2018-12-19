/**
 * Created by egret on 15-1-6.
 */
class BattleView extends BaseEuiView {
    private myObj: eui.Group;
    private myObjima: eui.Image;
    private yourObj: eui.Group;
    private yourObjima: eui.Image;
    private Message: eui.Group;
    private msgLabel: eui.Label;
    private MyInfo: eui.Group;
    //测试按钮
    private testmsg: eui.Button;
    private testattack: eui.Button;
    private testbeattack: eui.Button;
    private testskill: eui.Button;
    private testreset: eui.Button;

    //存储默认位置的
    private myX: number;
    private myY: number;
    private yourX: number;
    private yourY: number;
    private MyInfoX: number;
    private MyInfoY: number;

    public constructor($controller: BaseController, $parent: eui.Group) {
        super($controller, $parent);

        this.skinName = "resource/skins/BattleSkin.exml";
    }

    //button:eui.Button;

    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    public initUI(): void {
        super.initUI();
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
    }

    /**初始化我方瞬动idle动画，或者卡动idle动画 */
    private initMyObjTween(IsKazhen: boolean = false, height: number = 4, time: number = 700) {
        let self = this;
        if (IsKazhen) {
            egret.Tween.removeTweens(this.myObj);////清除之前的动画
            self.mytween = egret.Tween.get(self.myObj, { "loop": true }).to({ y: this.myY + height }, 0).to({ y: this.myY + height }, time).to({ y: this.myY }, 0).to({ y: this.myY }, time);
        } else {
            egret.Tween.removeTweens(self.myObj);////清除之前的动画
            self.mytween = egret.Tween.get(self.myObj, { "loop": true }).to({ y: this.myY + height }, time).to({ y: this.myY }, time);
        }
        //这个测试用的
        this.initMyInfoTween();
    }

    /**初始化我方状态栏瞬动idle动画，或者卡动idle动画 */
    private initMyInfoTween(IsKazhen: boolean = false, height: number = 2, time: number = 700) {
        let self = this;
        if (IsKazhen) {
            egret.Tween.removeTweens(self.MyInfo);////清除之前的动画
            self.MyInfo.x = self.MyInfoX;
            self.MyInfo.y = self.MyInfoY;
            self.mytween = egret.Tween.get(self.MyInfo, { "loop": true }).to({ y: this.MyInfoY + height }, 0).to({ y: this.MyInfoY + height }, time).to({ y: this.MyInfoY }, 0).to({ y: this.MyInfoY }, time);
        } else {
            egret.Tween.removeTweens(self.MyInfo);////清除之前的动画
            self.MyInfo.x = self.MyInfoX;
            self.MyInfo.y = self.MyInfoY;
            self.mytween = egret.Tween.get(self.MyInfo, { "loop": true }).to({ y: this.MyInfoY + height }, time).to({ y: this.MyInfoY }, time);
        }
    }

    //弹出对话框的函数
    private OutMessage(msg: string) {
        let self = this;
        egret.Tween.removeTweens(this.Message);////清除之前的动画
        self.Message.visible = true;
        let tween = egret.Tween.get(self.Message).to({ scaleY: 0.7, scaleX: 0.7, alpha: 0.1 }, 0).to({ scaleY: 1.0, scaleX: 1.0, alpha: 1.0 }, 150);
        //文字的一个个敲出
        this.msgLabel.width = 0;
        egret.Tween.removeTweens(self.msgLabel);////清除之前的动画
        let Labeltween = egret.Tween.get(self.msgLabel).to({ width: 309 }, 3000);
    }

    /**龙骨动画测试项目 */
    private initdragonbone(): void {
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", dragonBones.DragonBones.VERSION);

        var dragonbonesData = RES.getRes("xiaociguaiidle_ske_json");
        var textureData = RES.getRes("xiaociguaiidle_tex_json");
        var texture = RES.getRes("xiaociguaiidle_tex_png");

        let egretFactory: dragonBones.EgretFactory = dragonBones.EgretFactory.factory;
        egretFactory.parseDragonBonesData(dragonbonesData);
        egretFactory.parseTextureAtlasData(textureData, texture);

        let armatureDisplay: dragonBones.EgretArmatureDisplay = egretFactory.buildArmatureDisplay("Sprite");

        // this.myObjima.visible = false;
        this.myObj.addChild(armatureDisplay);

        armatureDisplay.x = 40;//80;
        armatureDisplay.y = 40;//80;
        armatureDisplay.scaleX = 2.5;
        armatureDisplay.scaleY = 2.5;
        armatureDisplay.animation.play("Sprite");
    }

    private testmsgClickHandler(e: egret.TouchEvent): void {
        //App.ViewManager.open(ViewConst.Friend);
        this.OutMessage("xxx");
    }


    private testattackClickHandler(): void {
        this.myObjattack();

        //多少秒后敌人受到攻击
        var timer: egret.Timer = new egret.Timer(190, 1);//后面的数值是进行几次timerFunc
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
    }

    // private ontest(): void {
    //     egret.Tween.pauseTweens(this.yourObj);
    // }

    // private ontest2(): void {
    //     egret.Tween.resumeTweens(this.yourObj);
    // }

    private testbeattackClickHandler(): void {
        this.yourObjBeattack();
        console.log("testbeattackClickHandler");
    }

    private testskillClickHandler(): void {
        console.log("testskillClickHandler");
    }

    private testresetClickHandler(): void {
        console.log("testresetClickHandler");
    }

    /**我方攻击的函数 */
    private mytween: egret.Tween;
    private myObjattack(kdtime: number = 200): void {
        let self = this;
        egret.Tween.removeTweens(this.myObj);
        let time = 180;
        self.mytween = egret.Tween.get(self.myObj).to({ x: self.myX + 80, y: self.myY - 6 }, time).to({ x: self.myX + 80, y: self.myY - 6 }, kdtime).to({ x: self.myX, y: self.myY }, time).call(this.initMyObjTween, this);
        //测试用的
        egret.Tween.pauseTweens(self.MyInfo);////清除之前的动画
        //self.MyInfo.x = self.MyInfoX;
        //self.MyInfo.y = self.MyInfoY;
    }

    /**敌方被攻击的函数x+20正好 */
    private yourtween: egret.Tween;
    private yourObjBeattack(): void {
        let self = this;
        egret.Tween.removeTweens(self.yourObj);
        let time = 300;
        self.yourtween = egret.Tween.get(self.yourObj).to({ x: self.yourX + 30, y: self.yourY }, time).to({ x: self.yourX, y: self.yourY }, time);
    }

}
