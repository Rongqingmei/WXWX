/**
 * Created by egret on 15-1-6.
 */
class IdleView extends BaseEuiView {
    private help:eui.ToggleButton;
    public constructor($controller: BaseController, $parent: eui.Group) {
        super($controller, $parent);

        this.skinName = "resource/skins/IdleSkin.exml";
    }

    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    public initUI(): void {
        super.initUI();
        console.log("xxxxxxxxxxxxxx进入View");
        this.help.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this);
    }

    private onClick():void{
        // App.SceneManager.runScene(SceneConsts.Battle);
        App.ViewManager.open(ViewConst.FubenPanel);
    }

}
