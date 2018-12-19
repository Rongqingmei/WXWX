/**
 * Created by egret on 15-1-7.
 */
class LoadingView extends BaseEuiView {
    private zuoRect: eui.Rect;
    private youRect: eui.Rect;
    private flag: boolean = true;

    public constructor($controller: BaseController, $parent: eui.Group) {
        super($controller, $parent);
        this.skinName = "resource/skins/LoadingUISkin.exml";
    }

    public txtMsg: eui.Label;

    public setProgress(current: number, total: number): void {
        this.txtMsg.text = "资源加载中..." + current + "/" + total;
        if (current == total) {
            this.playDoneAinma();
        }
    }

    private playDoneAinma(): void {
        if (this.flag) {
            this.flag = false;
            let self = this;
            //左挡板
            let temp1x = self.zuoRect.x;
            let Tween1 = egret.Tween.get(self.zuoRect).to({ x: temp1x - 500 ,alpha:0}, 2000);
            //右挡板
            let temp2x = self.youRect.x;
            let Tween2 = egret.Tween.get(self.youRect).to({ x: temp2x + 500 ,alpha:0}, 2000);
            //文字
            let Tween3 = egret.Tween.get(self.txtMsg).to({ alpha: 0 }, 1400);
        }
    }

}