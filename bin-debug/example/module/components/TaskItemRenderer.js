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
 * 任务的渲染器
 */
var TaskItemRenderer = (function (_super) {
    __extends(TaskItemRenderer, _super);
    function TaskItemRenderer() {
        return _super.call(this) || this;
    }
    TaskItemRenderer.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        if (this.iconDisplay) {
            this.iconDisplay.source = this.data.icon;
        }
        if (this.goldDisplay) {
            this.goldDisplay.text = this.data.gold;
        }
        if (this.seedDisplay) {
            this.seedDisplay.text = this.data.seed;
        }
        if (this.progressDisplay) {
            this.progressDisplay.text = this.data.progress;
        }
        if (this.labelDisplay) {
            this.labelDisplay.text = this.data.label;
        }
    };
    TaskItemRenderer.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (!this.data)
            return;
        if (instance == this.iconDisplay) {
            this.iconDisplay.source = this.data.icon;
        }
        if (instance == this.goldDisplay) {
            this.goldDisplay.text = this.data.gold;
        }
        if (instance == this.seedDisplay) {
            this.seedDisplay.text = this.data.seed;
        }
        if (instance == this.progressDisplay) {
            this.progressDisplay.text = this.data.progress;
        }
        if (instance == this.labelDisplay) {
            this.labelDisplay.text = this.data.label;
        }
    };
    return TaskItemRenderer;
}(eui.ItemRenderer));
__reflect(TaskItemRenderer.prototype, "TaskItemRenderer");
//# sourceMappingURL=TaskItemRenderer.js.map