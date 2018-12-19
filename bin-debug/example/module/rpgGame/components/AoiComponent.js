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
var AoiComponent = (function (_super) {
    __extends(AoiComponent, _super);
    function AoiComponent() {
        return _super.call(this) || this;
    }
    AoiComponent.prototype.start = function () {
        _super.prototype.start.call(this);
        this.dealInterval = 1000;
        this.dealTime = this.dealInterval;
    };
    AoiComponent.prototype.stop = function () {
        _super.prototype.stop.call(this);
    };
    AoiComponent.prototype.update = function (advancedTime) {
        _super.prototype.update.call(this, advancedTime);
        this.setEntityAoi();
    };
    AoiComponent.prototype.setEntityAoi = function () {
        var gameObjectLayer = this.entity.gameView.getGameObjcetLayer();
        var minX = -gameObjectLayer.x;
        var minY = -gameObjectLayer.y;
        var maxX = minX + App.StageUtils.getWidth();
        var maxY = minY + App.StageUtils.getHeight();
        var minAoiPoint = RpgGameUtils.convertXYToAoi(minX, minY).clone();
        var maxAoiPoint = RpgGameUtils.convertXYToAoi(maxX, maxY).clone();
        var entityAoiPoint = RpgGameUtils.convertXYToAoi(this.entity.x, this.entity.y);
        var inCamera = (entityAoiPoint.x >= minAoiPoint.x && entityAoiPoint.x <= maxAoiPoint.x)
            && (entityAoiPoint.y >= minAoiPoint.y && entityAoiPoint.y <= maxAoiPoint.y);
        if (inCamera) {
            if (!this.entity.getInCamera()) {
                this.entity.setInCamera(true);
            }
        }
        else {
            if (this.entity.getInCamera()) {
                this.entity.setInCamera(false);
            }
        }
    };
    return AoiComponent;
}(Component));
__reflect(AoiComponent.prototype, "AoiComponent");
//# sourceMappingURL=AoiComponent.js.map