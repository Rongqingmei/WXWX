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
 * Created by yangsong on 2017/10/13.
 */
var ControlComponent = (function (_super) {
    __extends(ControlComponent, _super);
    function ControlComponent() {
        return _super.call(this) || this;
    }
    ControlComponent.prototype.start = function () {
        _super.prototype.start.call(this);
        this.entity.gameView.touchEnabled = true;
        this.entity.gameView.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.astar = new SilzAstar(this.entity.gameView.getBlocksData());
    };
    ControlComponent.prototype.stop = function () {
        _super.prototype.stop.call(this);
        this.entity.gameView.touchEnabled = false;
        this.entity.gameView.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.astar = null;
    };
    ControlComponent.prototype.update = function (advancedTime) {
        _super.prototype.update.call(this, advancedTime);
    };
    ControlComponent.prototype.onClick = function (evt) {
        var gotoX = evt.stageX + (-this.entity.gameView.getGameObjcetLayer().x);
        var gotoY = evt.stageY + (-this.entity.gameView.getGameObjcetLayer().y);
        this.moveTo(gotoX, gotoY);
        this.entity.battleObj = null;
    };
    ControlComponent.prototype.moveTo = function (gotoX, gotoY) {
        var currX = this.entity.x;
        var currY = this.entity.y;
        var path = this.astar.find(currX, currY, gotoX, gotoY);
        if (path && path.length > 1) {
            path.shift();
            this.entity.path = path;
        }
        else {
            this.entity.path = null;
        }
    };
    return ControlComponent;
}(Component));
__reflect(ControlComponent.prototype, "ControlComponent");
//# sourceMappingURL=ControlComponent.js.map