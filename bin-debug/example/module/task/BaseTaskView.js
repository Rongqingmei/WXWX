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
 * Created by egret on 15-1-7.
 */
var BaseTaskView = (function (_super) {
    __extends(BaseTaskView, _super);
    function BaseTaskView(controller, parent) {
        var _this = _super.call(this, controller, parent) || this;
        _this.dataProvider = new eui.ArrayCollection();
        return _this;
    }
    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    BaseTaskView.prototype.initUI = function () {
        _super.prototype.initUI.call(this);
        //布局
        var layout = new eui.VerticalLayout();
        layout.horizontalAlign = "center";
        //创建一个列表
        this.taskList = new eui.List();
        this.taskList.itemRenderer = TaskItemRenderer;
        this.taskList.itemRendererSkinName = "resource/skins/TaskItemRendererSkin.exml";
        this.taskList.dataProvider = this.dataProvider;
        this.taskList.layout = layout;
        //创建一个 Scroller
        this.scroller = new eui.Scroller();
        this.scroller.percentWidth = this.scroller.percentHeight = 100;
        this.scroller.top = 5;
        this.scroller.viewport = this.taskList;
        this.contentGroup.addChild(this.scroller);
    };
    /**
     *对面板数据的初始化，用于子类继承
     *
     */
    BaseTaskView.prototype.initData = function () {
        _super.prototype.initData.call(this);
    };
    return BaseTaskView;
}(BasePanelView));
__reflect(BaseTaskView.prototype, "BaseTaskView");
//# sourceMappingURL=BaseTaskView.js.map