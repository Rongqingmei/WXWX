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
 * Created by egret on 15-1-16.
 */
var BaseGameObject = (function (_super) {
    __extends(BaseGameObject, _super);
    function BaseGameObject($controller) {
        var _this = _super.call(this) || this;
        _this.originX = 0;
        _this.originY = 0;
        _this.originZ = 0;
        _this.trueY = 0;
        _this.armature = new DragonBonesArmatureContainer();
        _this.addChild(_this.armature);
        _this.controller = $controller;
        return _this;
    }
    BaseGameObject.prototype.init = function () {
        this.hp = 300;
        this.isDie = false;
        App.TimerManager.doFrame(1, 0, this.onFrame, this);
    };
    BaseGameObject.prototype.destory = function () {
        this.armature.stop();
        App.TimerManager.remove(this.onFrame, this);
        App.DisplayUtils.removeFromParent(this);
        ObjectPool.push(this);
    };
    BaseGameObject.prototype.onFrame = function (time) {
        this.update(time);
        this.setPos();
    };
    BaseGameObject.prototype.setPos = function () {
        if (this.$getX() != this.originX) {
            this.$setX(this.originX);
        }
        if (this.$getY() != this.trueY) {
            this.$setY(this.trueY);
        }
    };
    BaseGameObject.prototype.update = function (time) {
    };
    BaseGameObject.prototype.registerArmature = function (actionName) {
    };
    Object.defineProperty(BaseGameObject.prototype, "x", {
        get: function () {
            return this.originX;
        },
        set: function (value) {
            this.originX = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseGameObject.prototype, "y", {
        get: function () {
            return this.originY;
        },
        set: function (value) {
            this.originY = value;
            this.trueY = this.originY + this.originZ;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseGameObject.prototype, "z", {
        get: function () {
            return this.originZ;
        },
        set: function (value) {
            this.originZ = value;
            this.trueY = this.originY + this.originZ;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseGameObject.prototype, "gameController", {
        get: function () {
            return this.controller;
        },
        enumerable: true,
        configurable: true
    });
    BaseGameObject.prototype.isMyFront = function (obj) {
        return this.scaleX == 1 ? this.x <= obj.x : this.x >= obj.x;
    };
    BaseGameObject.prototype.isMyBack = function (obj) {
        return this.scaleX == -1 ? this.x <= obj.x : this.x >= obj.x;
    };
    BaseGameObject.prototype.isMyLeft = function (obj) {
        return this.scaleX == -1 ? this.y <= obj.y : this.y >= obj.y;
    };
    BaseGameObject.prototype.isMyRight = function (obj) {
        return this.scaleX == 1 ? this.y <= obj.y : this.y >= obj.y;
    };
    BaseGameObject.prototype.isMyTop = function (obj) {
        return this.z >= obj.z;
    };
    BaseGameObject.prototype.isMyDown = function (obj) {
        return this.z <= obj.z;
    };
    BaseGameObject.ACTION_Idle = "daiji";
    BaseGameObject.ACTION_Move = "yidong";
    BaseGameObject.ACTION_Hart = "beiji";
    BaseGameObject.ACTION_Fly = "jifei";
    BaseGameObject.ACTION_Land = "daodi";
    BaseGameObject.ACTION_jump = "jump";
    return BaseGameObject;
}(egret.DisplayObjectContainer));
__reflect(BaseGameObject.prototype, "BaseGameObject");
//# sourceMappingURL=BaseGameObject.js.map