/**
 * Created by egret on 15-1-7.
 */
class LoadingScene extends BaseScene{
    /**
     * 构造函数
     */
    public constructor(){
        super();
    }

    /**
     * 进入Scene调用
     */
    public onEnter():void{
        super.onEnter();

        //添加该Scene使用的层级
        this.addLayer(LayerManager.UI_Popup);

        //初始打开Loading页面
        App.ViewManager.open(ViewConst.Loading);
    }

    /**
     * 退出Scene调用
     */
    public onExit():void{
        //super.onExit();
        //关闭loadingScene中的所有View
        App.ViewManager.close(ViewConst.Loading);
        //移除自身所有的layer
        this.removeAllLayer();
    }
}