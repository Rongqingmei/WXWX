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
var SortComponent = (function (_super) {
    __extends(SortComponent, _super);
    function SortComponent() {
        return _super.call(this) || this;
    }
    SortComponent.prototype.start = function () {
        _super.prototype.start.call(this);
        this.dealInterval = 500;
    };
    SortComponent.prototype.stop = function () {
        _super.prototype.stop.call(this);
    };
    SortComponent.prototype.update = function (advancedTime) {
        _super.prototype.update.call(this, advancedTime);
        this.sortGameObjs();
    };
    SortComponent.prototype.sortGameObjs = function () {
        this.entity.gameView.getGameObjcetLayer().$children.sort(this.sortF);
    };
    SortComponent.prototype.sortF = function (d1, d2) {
        if (d1.y > d2.y) {
            return 1;
        }
        else if (d1.y < d2.y) {
            return -1;
        }
        else {
            return 0;
        }
    };
    return SortComponent;
}(Component));
__reflect(SortComponent.prototype, "SortComponent");
//# sourceMappingURL=SortComponent.js.map