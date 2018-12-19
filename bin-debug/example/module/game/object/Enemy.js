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
 * Created by yangsong on 15-1-16.
 */
var Enemy = (function (_super) {
    __extends(Enemy, _super);
    function Enemy($controller) {
        var _this = _super.call(this, $controller) || this;
        _this.createArmature();
        return _this;
    }
    Enemy.prototype.createArmature = function () {
        this.armature.register(App.DragonBonesFactory.makeArmature("guaiwu001", "guaiwu001", 1.2), [
            BaseGameObject.ACTION_Idle,
            BaseGameObject.ACTION_Move,
            BaseGameObject.ACTION_Hart,
            BaseGameObject.ACTION_Fly,
            BaseGameObject.ACTION_Land,
            BaseGameObject.ACTION_jump,
            Enemy.ACTION_Attack
        ]);
        this.armature.addCompleteCallFunc(this.armaturePlayEnd, this);
        this.initFrameData("guaiwu001");
    };
    Enemy.prototype.init = function () {
        _super.prototype.init.call(this);
        this.gotoIdle();
    };
    /**
     * 死亡消失
     */
    Enemy.prototype.disappear = function () {
        _super.prototype.disappear.call(this);
        this.controller.applyFunc(GameConst.Remove_Enemy, this);
    };
    Enemy.prototype.armaturePlayEnd = function (e, animationName) {
        if (animationName == Enemy.ACTION_Attack) {
            this.gotoIdle();
        }
        else if (animationName == Enemy.ACTION_Hart) {
            this.gotoIdle();
        }
        else if (animationName == Enemy.ACTION_Fly) {
            this.armature.stop();
        }
        else if (animationName == Enemy.ACTION_Land) {
            this.armature.stop();
        }
    };
    Enemy.prototype.gotoAttack = function () {
        _super.prototype.gotoAttack.call(this);
        this.playAttackArmature();
    };
    Enemy.prototype.playAttackArmature = function () {
        this.armature.play(Enemy.ACTION_Attack, 1);
        App.SoundManager.playEffect("sound_enemyAttack");
    };
    Enemy.prototype.gotoLand = function () {
        _super.prototype.gotoLand.call(this);
        if (this.isDie)
            return;
        App.SoundManager.playEffect("sound_enenyLand");
        this.gameController.shock();
    };
    Enemy.prototype.fly = function (attackObj, speedZ, speedX) {
        _super.prototype.fly.call(this, attackObj, speedZ, speedX);
        App.SoundManager.playEffect("sound_beiji");
    };
    Enemy.prototype.hart = function (attackObj, speed, xMoveDis) {
        _super.prototype.hart.call(this, attackObj, speed, xMoveDis);
        App.SoundManager.playEffect("sound_beiji");
    };
    Enemy.prototype.hartFly = function (attackObj, speedZ, attract) {
        _super.prototype.hartFly.call(this, attackObj, speedZ, attract);
        App.SoundManager.playEffect("sound_beiji");
    };
    Enemy.ACTION_Attack = "gongji";
    Enemy.ACTION_Skill1 = "jineng";
    Enemy.ACTION_Skill2 = "jineng2";
    return Enemy;
}(BaseFrameGameObject));
__reflect(Enemy.prototype, "Enemy");
//# sourceMappingURL=Enemy.js.map