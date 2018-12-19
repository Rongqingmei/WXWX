
class FubenPanelView extends BaseEuiView {
    private enter:eui.Button;
    private Bg:eui.Image;
    private BOSS3:eui.Group;

    public constructor($controller: BaseController, $parent: eui.Group) {
        super($controller, $parent);
        this.skinName = "resource/skins/battle/fuben/FubenPanelSkin.exml";
    }

    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    public initUI(): void {
        super.initUI();
        this.enter.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtn,this);
        this.Bg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtn,this);
        this.BOSS3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBattle,this);
    }

    private onBtn():void{
        App.ViewManager.close(ViewConst.FubenPanel);
    }

    private onBattle():void{
        App.SceneManager.runScene(SceneConsts.Battle);
    }

}
