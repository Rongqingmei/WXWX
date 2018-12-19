/**
 * Created by yangsong on 15-1-6.
 */
class IdleController extends BaseController{
 
    //private proxy:DemoProxy;
    private idleView:IdleView;
 
    public constructor(){
        super();
 
        //this.proxy = new DemoProxy(this);
 
        this.idleView = new IdleView(this, LayerManager.UI_Main);
        App.ViewManager.register(ViewConst.Idle, this.idleView);
    }

}
