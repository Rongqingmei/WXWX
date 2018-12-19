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
var BattleComponent = (function (_super) {
    __extends(BattleComponent, _super);
    function BattleComponent() {
        return _super.call(this) || this;
    }
    BattleComponent.prototype.start = function () {
        _super.prototype.start.call(this);
        // this.dealInterval = 100;
    };
    BattleComponent.prototype.stop = function () {
        _super.prototype.stop.call(this);
        this.isAttacking = false;
        this.attackTime = null;
    };
    BattleComponent.prototype.update = function (advancedTime) {
        _super.prototype.update.call(this, advancedTime);
        if (!this.entity.battleObj) {
            return;
        }
        if (this.entity.action != Action.Stand) {
            return;
        }
        if (!this.isAttacking) {
            if (this.canAttack()) {
                this.startAttack();
            }
        }
        else {
            if (!this.canAttack()) {
                this.stopAttack();
            }
            else {
                this.continueAttack();
            }
        }
    };
    BattleComponent.prototype.canAttack = function () {
        var attackDis = this.entity.propertyData.attackDis;
        return Math.abs(this.entity.battleObj.col - this.entity.col) <= attackDis
            && Math.abs(this.entity.battleObj.row - this.entity.row) <= attackDis;
    };
    BattleComponent.prototype.stopAttack = function () {
        this.isAttacking = false;
        this.attackTime = null;
        this.entity.battleObj = null;
    };
    BattleComponent.prototype.startAttack = function () {
        this.isAttacking = true;
        this.attackTime = egret.getTimer();
        this.entity.dir = RpgGameUtils.computeGameObjDir(this.entity.x, this.entity.y, this.entity.battleObj.x, this.entity.battleObj.y);
        this.entity.action = Action.Attack;
        var defenceObj = this.entity.battleObj;
        if (!defenceObj.battleObj) {
            defenceObj.battleObj = this.entity;
            defenceObj.path = null;
        }
        egret.setTimeout(this.dealHarm, this, 500);
    };
    BattleComponent.prototype.dealHarm = function () {
        if (!this.entity) {
            return;
        }
        var defenceObj = this.entity.battleObj;
        if (!defenceObj) {
            return;
        }
        //计算伤害
        var harm = App.RandomUtils.limitInteger(200, 800);
        defenceObj.propertyData.hp = Math.max(0, defenceObj.propertyData.hp - harm);
        //掉血数字显示
        if (defenceObj instanceof RpgMonster) {
            this.entity.gameView.showHpChange(defenceObj, -harm);
        }
        else {
            this.entity.gameView.showHpChange(defenceObj, -harm, 0x00FF00);
        }
        //死亡处理
        if (defenceObj.propertyData.hp == 0) {
            if (defenceObj instanceof RpgMonster) {
                this.entity.battleObj = null;
                this.entity.gameView.removeMonster(defenceObj);
            }
        }
        else {
            if (defenceObj.action == Action.Stand) {
                defenceObj.action = Action.Attacked;
            }
        }
    };
    BattleComponent.prototype.continueAttack = function () {
        var attackInterval = this.entity.propertyData.attackInterval;
        var nowTime = egret.getTimer();
        if (nowTime - this.attackTime >= attackInterval) {
            this.startAttack();
        }
    };
    return BattleComponent;
}(Component));
__reflect(BattleComponent.prototype, "BattleComponent");
//# sourceMappingURL=BattleComponent.js.map