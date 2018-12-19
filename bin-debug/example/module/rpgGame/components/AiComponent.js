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
var AiComponent = (function (_super) {
    __extends(AiComponent, _super);
    function AiComponent() {
        return _super.call(this) || this;
    }
    AiComponent.prototype.start = function () {
        _super.prototype.start.call(this);
        this.resetDealInterval();
    };
    AiComponent.prototype.stop = function () {
        _super.prototype.stop.call(this);
    };
    AiComponent.prototype.update = function (advancedTime) {
        _super.prototype.update.call(this, advancedTime);
        if (this.entity.battleObj) {
            return;
        }
        this.doMove();
        this.resetDealInterval();
    };
    AiComponent.prototype.resetDealInterval = function () {
        this.dealInterval = App.RandomUtils.limitInteger(5 * 1000, 50 * 1000);
    };
    AiComponent.prototype.doMove = function () {
        var currCol = this.entity.col;
        var currRow = this.entity.row;
        var gotoDir = App.RandomUtils.limitInteger(0, 7);
        var gotoDis = App.RandomUtils.limitInteger(3, 8);
        var dirCol = 0;
        var dirRow = 0;
        if (gotoDir == Dir.Top) {
            dirRow = -1;
        }
        else if (gotoDir == Dir.TopRight) {
            dirCol = 1;
            dirRow = -1;
        }
        else if (gotoDir == Dir.Right) {
            dirCol = 1;
        }
        else if (gotoDir == Dir.BottomRight) {
            dirCol = 1;
            dirRow = 1;
        }
        else if (gotoDir == Dir.Bottom) {
            dirRow = 1;
        }
        else if (gotoDir == Dir.BottomLeft) {
            dirCol = -1;
            dirRow = 1;
        }
        else if (gotoDir == Dir.Left) {
            dirCol = -1;
        }
        else if (gotoDir == Dir.TopLeft) {
            dirCol = -1;
            dirRow = -1;
        }
        var mapBlocks = this.entity.gameView.getBlocksData();
        var paths = [];
        for (var i = 1; i <= gotoDis; i++) {
            var tmpCol = currCol + dirCol * i;
            var tmpRow = currRow + dirRow * i;
            if (!mapBlocks[tmpRow]) {
                break;
            }
            if (!mapBlocks[tmpRow][tmpCol]) {
                break;
            }
            paths.push(new PathNode(tmpCol, tmpRow));
        }
        if (paths.length > 1) {
            this.entity.path = paths;
        }
        else {
            this.entity.path = null;
        }
    };
    return AiComponent;
}(Component));
__reflect(AiComponent.prototype, "AiComponent");
//# sourceMappingURL=AiComponent.js.map