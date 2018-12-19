/**
 * Created by yangsong on 2014/11/28.
 * UI场景层
 */
class IdleScene extends BaseScene {
    /**
    * 构造函数
    */
    public constructor() {
        super();
    }
    /**
    * 进入Scene调用
    */
    public onEnter(): void {
        super.onEnter();
 
        //添加该Scene使用的层级
        this.addLayer(LayerManager.UI_Main);
        this.addLayer(LayerManager.UI_Popup);
        this.addLayer(LayerManager.UI_Message);
        this.addLayer(LayerManager.UI_Tips);
 
        //添加一个纯色背景
        var rect: eui.Rect = new eui.Rect();
        rect.fillColor = 0x000000;
        rect.percentHeight = 100;
        rect.percentWidth = 100;
        LayerManager.UI_Main.addChild(rect);
 
        //初始打开Home页面
        App.ViewManager.open(ViewConst.Idle);
    }
    /**
    * 退出Scene调用
    */
    public onExit(): void {
        super.onExit();
    }
 
}
