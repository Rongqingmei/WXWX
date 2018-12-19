/**
 * Created by yangsong on 15-1-6.
 */
class BattleController extends BaseController{
 
    //private proxy:DemoProxy;
    private battleView:BattleView;
 
    public constructor(){
        super();
 
        //this.proxy = new DemoProxy(this);
 
        this.battleView = new BattleView(this, LayerManager.UI_Main);
        App.ViewManager.register(ViewConst.Battle, this.battleView);
    }
}
