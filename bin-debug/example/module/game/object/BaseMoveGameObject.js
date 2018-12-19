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
var BaseMoveGameObject = (function (_super) {
    __extends(BaseMoveGameObject, _super);
    function BaseMoveGameObject($controller) {
        var _this = _super.call(this, $controller) || this;
        _this.maxSpeedZ = 30;
        _this.gravitySpeed = 1;
        return _this;
    }
    BaseMoveGameObject.prototype.init = function () {
        _super.prototype.init.call(this);
        this.speed = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.speedZ = 0;
        this.endX = 0;
        this.endY = 0;
        this.radian = 0;
        this.alpha = 1;
        this.isCommand = false;
    };
    BaseMoveGameObject.prototype.destory = function () {
        _super.prototype.destory.call(this);
    };
    BaseMoveGameObject.prototype.update = function (time) {
        _super.prototype.update.call(this, time);
        var func = "state_" + this.currState;
        if (this.currState) {
            this[func](time);
        }
    };
    BaseMoveGameObject.prototype.state_idle = function (time) {
    };
    BaseMoveGameObject.prototype.state_move = function (time) {
        var useSpeed = this.speed / (1000 / 60) * time;
        if (this.endX && this.endY) {
            this.radian = App.MathUtils.getRadian2(this.x, this.y, this.endX, this.endY);
            this.speedX = Math.cos(this.radian) * useSpeed;
            this.speedY = Math.sin(this.radian) * useSpeed * 0.65;
            var gotoX = this.x + this.speedX;
            var gotoY = this.y + this.speedY;
            if (gotoX < GameData.MIN_X
                || gotoX > GameData.MAX_X
                || gotoY < GameData.MIN_Y
                || gotoY > GameData.MAX_Y) {
                if (!this.isCommand) {
                    this.stopMove();
                    return;
                }
            }
            var dis = App.MathUtils.getDistance(this.x, this.y, this.endX, this.endY);
            if (dis < Math.abs(this.speedX) + Math.abs(this.speedY)) {
                this.stopMove();
                return;
            }
            this.x = gotoX;
            this.y = gotoY;
        }
        else {
            this.speedX = Math.cos(this.radian) * useSpeed;
            this.speedY = Math.sin(this.radian) * useSpeed * 0.65;
            var gotoX = this.x + this.speedX;
            var gotoY = this.y + this.speedY;
            if (gotoX < GameData.MIN_X || gotoX > GameData.MAX_X) {
                gotoX = this.x;
            }
            if (gotoY < GameData.MIN_Y || gotoY > GameData.MAX_Y) {
                gotoY = this.y;
            }
            this.x = gotoX;
            this.y = gotoY;
        }
    };
    BaseMoveGameObject.prototype.state_attack = function (time) {
        if (this.speedZ) {
            this.state_jump(time);
        }
        else if (this.speed) {
            this.state_move(time);
        }
    };
    BaseMoveGameObject.prototype.state_jump = function (time) {
        if (this.speed) {
            this.state_move(time);
        }
        if (this.speedZ > this.maxSpeedZ) {
            this.speedZ = this.maxSpeedZ;
        }
        else {
            this.speedZ += this.gravitySpeed;
        }
        var gotoZ = this.z + this.speedZ / (1000 / 60) * time;
        if (gotoZ > 0) {
            gotoZ = 0;
            this.stopJump();
        }
        this.z = gotoZ;
    };
    BaseMoveGameObject.prototype.state_land = function (time) {
        if (this.isDie) {
            return;
        }
        this.landTime += time;
        if (this.landTime >= 1500) {
            this.leave();
        }
    };
    BaseMoveGameObject.prototype.state_hurt = function (time) {
        if (this.speedZ || this.z < 0) {
            this.state_jump(time);
        }
        else if (this.speed) {
            this.state_move(time);
        }
    };
    BaseMoveGameObject.prototype.stopJump = function () {
        this.speedZ = 0;
        if (!this.isAttack) {
            this.gotoLand();
        }
        if (this.isDie) {
            egret.Tween.get(this).to({ alpha: 0 }, 2000).call(function () {
                this.disappear();
                this.destory();
            }, this);
        }
    };
    /**
     * 死亡消失
     */
    BaseMoveGameObject.prototype.disappear = function () {
    };
    BaseMoveGameObject.prototype.stopMove = function () {
        this.speed = 0;
        this.isCommand = false;
        if (!this.isHurt && !this.isAttack && this.z == 0) {
            this.gotoIdle();
        }
    };
    BaseMoveGameObject.prototype.leave = function () {
        this.gotoIdle();
    };
    //只移动不切换动作
    BaseMoveGameObject.prototype.moveTo = function ($speed, $endX, $endY) {
        this.speed = $speed;
        this.endX = $endX;
        this.endY = $endY;
        this.radian = 0;
    };
    //行走到某个点
    BaseMoveGameObject.prototype.walkTo = function ($speed, $endX, $endY) {
        this.moveTo($speed, $endX, $endY);
        this.scaleX = this.endX >= this.x ? 1 : -1;
        this.gotoMove();
    };
    //行走
    BaseMoveGameObject.prototype.walk = function (xFlag, yFlag, $speed) {
        this.speed = $speed;
        this.endX = 0;
        this.endY = 0;
        this.radian = Math.atan2(yFlag, xFlag);
        this.scaleX = xFlag > 0 ? 1 : -1;
        this.gotoMove();
    };
    //跳起不切换动作
    BaseMoveGameObject.prototype.moveToZ = function ($speedZ) {
        this.speedZ = $speedZ;
    };
    //强制落地
    BaseMoveGameObject.prototype.standLand = function () {
        this.speedZ = 0;
        this.z = 0;
    };
    //跳起
    BaseMoveGameObject.prototype.jump = function ($speedZ, $speedX) {
        if ($speedX === void 0) { $speedX = 0; }
        this.speed = Math.abs($speedX);
        this.radian = Math.atan2(0, $speedX > 0 ? 1 : -1);
        this.endX = 0;
        this.endY = 0;
        this.speedZ = $speedZ;
        this.gotoJump();
    };
    BaseMoveGameObject.prototype.gotoIdle = function () {
        this.speed = 0;
        this.currState = BaseMoveGameObject.STATE_IDLE;
        this.armature.play(BaseMoveGameObject.ACTION_Idle, 0);
    };
    BaseMoveGameObject.prototype.gotoMove = function () {
        this.currState = BaseMoveGameObject.STATE_MOVE;
        this.armature.play(BaseMoveGameObject.ACTION_Move, 0);
    };
    BaseMoveGameObject.prototype.gotoAttack = function () {
        this.currState = BaseMoveGameObject.STATE_ATTACK;
    };
    BaseMoveGameObject.prototype.gotoJump = function () {
        this.currState = BaseMoveGameObject.STATE_JUMP;
    };
    BaseMoveGameObject.prototype.gotoLand = function () {
        this.landTime = 0;
        this.currState = BaseMoveGameObject.STATE_LAND;
        this.armature.play(BaseMoveGameObject.ACTION_Land, 1);
    };
    BaseMoveGameObject.prototype.gotoHurtState = function () {
        this.currState = BaseMoveGameObject.STATE_HURT;
    };
    BaseMoveGameObject.prototype.gotoHurt = function () {
        this.gotoHurtState();
        this.armature.play(BaseMoveGameObject.ACTION_Hart, 1);
    };
    BaseMoveGameObject.prototype.command_in = function (speed, toX, toY) {
        this.isCommand = true;
        this.walkTo(speed, toX, toY);
    };
    Object.defineProperty(BaseMoveGameObject.prototype, "isInScreen", {
        get: function () {
            return this.x > GameData.MIN_X && this.x < GameData.MAX_X
                && this.y > GameData.MIN_Y && this.y < GameData.MAX_Y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseMoveGameObject.prototype, "isIdle", {
        get: function () {
            return this.currState == BaseMoveGameObject.STATE_IDLE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseMoveGameObject.prototype, "isAttack", {
        get: function () {
            return this.currState == BaseMoveGameObject.STATE_ATTACK;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseMoveGameObject.prototype, "isMove", {
        get: function () {
            return this.currState == BaseMoveGameObject.STATE_MOVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseMoveGameObject.prototype, "isJump", {
        get: function () {
            return this.currState == BaseMoveGameObject.STATE_JUMP;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseMoveGameObject.prototype, "isLand", {
        get: function () {
            return this.currState == BaseMoveGameObject.STATE_LAND;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseMoveGameObject.prototype, "isHurt", {
        get: function () {
            return this.currState == BaseMoveGameObject.STATE_HURT;
        },
        enumerable: true,
        configurable: true
    });
    BaseMoveGameObject.STATE_IDLE = "idle";
    BaseMoveGameObject.STATE_MOVE = "move";
    BaseMoveGameObject.STATE_ATTACK = "attack";
    BaseMoveGameObject.STATE_JUMP = "jump";
    BaseMoveGameObject.STATE_LAND = "land";
    BaseMoveGameObject.STATE_HURT = "hurt";
    return BaseMoveGameObject;
}(BaseGameObject));
__reflect(BaseMoveGameObject.prototype, "BaseMoveGameObject");
//# sourceMappingURL=BaseMoveGameObject.js.map