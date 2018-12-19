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
 * Created by egret on 15-1-27.
 */
var BaseFrameGameObject = (function (_super) {
    __extends(BaseFrameGameObject, _super);
    function BaseFrameGameObject($controller) {
        return _super.call(this, $controller) || this;
    }
    BaseFrameGameObject.prototype.initFrameData = function ($dragonBonesDataName) {
        this.attackConfig = RES.getRes("attack_json")[$dragonBonesDataName];
        if (this.attackConfig) {
            this.armature.addFrameCallFunc(this.armatureEventHandle, this);
        }
    };
    BaseFrameGameObject.prototype.armatureEventHandle = function (e) {
        var frameLabel = e.eventObject.name;
        var actionStr = this.attackConfig[frameLabel].action || "";
        var actions = actionStr.split(",");
        for (var i = 0, len = actions.length; i < len; i++) {
            var arr = actions[i].split("_");
            var funcName = arr[0];
            arr[0] = frameLabel;
            this[funcName].apply(this, arr);
        }
    };
    BaseFrameGameObject.prototype.frameEnemyHart = function (frameLabel, speed, xMoveDis, shock) {
        if (shock === void 0) { shock = "0"; }
        var attDis = this.attackConfig[frameLabel].dis;
        var attackObjs = this.gameController.getMyAttackObjects(this, attDis);
        if (attackObjs.length && shock == "1") {
            this.frameShock();
        }
        for (var i = 0, len = attackObjs.length; i < len; i++) {
            attackObjs[i].hart(this, parseInt(speed), parseInt(xMoveDis));
        }
    };
    BaseFrameGameObject.prototype.frameEnemyFly = function (frameLabel, speedZ, speedX, shock) {
        if (shock === void 0) { shock = "0"; }
        var attDis = this.attackConfig[frameLabel].dis;
        var attackObjs = this.gameController.getMyAttackObjects(this, attDis);
        if (attackObjs.length && shock == "1") {
            this.frameShock();
        }
        for (var i = 0, len = attackObjs.length; i < len; i++) {
            attackObjs[i].fly(this, parseInt(speedZ), parseInt(speedX));
        }
    };
    BaseFrameGameObject.prototype.frameEnemyHartMoveToZ = function (frameLabel, speedZ, attract) {
        if (attract === void 0) { attract = "0"; }
        var attDis = this.attackConfig[frameLabel].dis;
        var attackObjs = this.gameController.getMyAttackObjects(this, attDis);
        for (var i = 0, len = attackObjs.length; i < len; i++) {
            attackObjs[i].hartFly(this, parseInt(speedZ), parseInt(attract) == 1);
        }
    };
    BaseFrameGameObject.prototype.frameThisMoveTo = function (frameLabel, speed, xMoveDis) {
        this.moveTo(parseInt(speed), this.x + (this.scaleX * parseInt(xMoveDis)), this.y);
    };
    BaseFrameGameObject.prototype.frameThisMoveToZ = function (frameLabel, $speedZ) {
        this.moveToZ(parseInt($speedZ));
    };
    BaseFrameGameObject.prototype.frameThisStandLand = function (frameLabel) {
        this.standLand();
    };
    BaseFrameGameObject.prototype.frameShock = function (frameLabel) {
        if (frameLabel === void 0) { frameLabel = null; }
        this.gameController.shock();
    };
    return BaseFrameGameObject;
}(BaseHitGameObject));
__reflect(BaseFrameGameObject.prototype, "BaseFrameGameObject");
//# sourceMappingURL=BaseFrameGameObject.js.map