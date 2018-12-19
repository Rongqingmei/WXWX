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
var TaskController = (function (_super) {
    __extends(TaskController, _super);
    function TaskController() {
        var _this = _super.call(this) || this;
        _this.taskView = new TaskView(_this, LayerManager.UI_Popup);
        App.ViewManager.register(ViewConst.Task, _this.taskView);
        _this.dailyView = new DailyView(_this, LayerManager.UI_Popup);
        App.ViewManager.register(ViewConst.Daily, _this.dailyView);
        return _this;
    }
    return TaskController;
}(BaseController));
__reflect(TaskController.prototype, "TaskController");
//# sourceMappingURL=TaskController.js.map