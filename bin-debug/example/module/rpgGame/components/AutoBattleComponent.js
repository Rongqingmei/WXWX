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
var AutoBattleComponent = (function (_super) {
    __extends(AutoBattleComponent, _super);
    function AutoBattleComponent() {
        return _super.call(this) || this;
    }
    AutoBattleComponent.prototype.start = function () {
        _super.prototype.start.call(this);
        this.dealInterval = 500;
    };
    AutoBattleComponent.prototype.stop = function () {
        _super.prototype.stop.call(this);
    };
    AutoBattleComponent.prototype.update = function (advancedTime) {
        _super.prototype.update.call(this, advancedTime);
        if (this.entity.action == Action.Stand) {
            if (!this.entity.battleObj) {
                this.searchBattleObj();
                this.moveToBattleObj();
            }
        }
    };
    AutoBattleComponent.prototype.searchBattleObj = function () {
        var list = this.entity.gameView.getMonsters();
        list.forEach(function (monster) {
            monster["dis"] = App.MathUtils.getDistance(monster.col, monster.row, this.entity.col, this.entity.row);
        }.bind(this));
        list.sort(function (a, b) {
            if (a["dis"] < b["dis"]) {
                return -1;
            }
            else {
                return 1;
            }
        });
        for (var i = 0; i < list.length; i++) {
            var obj = list[i];
            if (obj.propertyData.hp) {
                this.entity.battleObj = obj;
                break;
            }
        }
    };
    AutoBattleComponent.prototype.moveToBattleObj = function () {
        if (!this.entity.battleObj) {
            return;
        }
        var offsetFlagX = 0;
        if (this.entity.x > this.entity.battleObj.x) {
            offsetFlagX = 1;
        }
        else if (this.entity.x < this.entity.battleObj.x) {
            offsetFlagX = -1;
        }
        var offsetFlagY = 0;
        if (this.entity.y > this.entity.battleObj.y) {
            offsetFlagY = 1;
        }
        else if (this.entity.y < this.entity.battleObj.y) {
            offsetFlagY = -1;
        }
        var endX = this.entity.battleObj.x + offsetFlagX * RpgGameData.GameCellWidth;
        var endY = this.entity.battleObj.y + offsetFlagY * RpgGameData.GameCellHeight;
        var controlComponent = this.entity.getComponent(ComponentType.Control);
        controlComponent.moveTo(endX, endY);
    };
    return AutoBattleComponent;
}(Component));
__reflect(AutoBattleComponent.prototype, "AutoBattleComponent");
//# sourceMappingURL=AutoBattleComponent.js.map