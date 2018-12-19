
class FubenPanelController extends BaseController{
 
    //private proxy:DemoProxy;
    private fubenPanelView:FubenPanelView;
 
    public constructor(){
        super();
 
        //this.proxy = new DemoProxy(this);
 
        this.fubenPanelView = new FubenPanelView(this, LayerManager.UI_Main);
        App.ViewManager.register(ViewConst.FubenPanel, this.fubenPanelView);
    }
}
