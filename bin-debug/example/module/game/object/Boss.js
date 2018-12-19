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
 * Created by egret on 15-2-2.
 */
var Boss = (function (_super) {
    __extends(Boss, _super);
    function Boss($controller) {
        return _super.call(this, $controller) || this;
    }
    Boss.prototype.init = function () {
        _super.prototype.init.call(this);
        this.move_time = App.RandomUtils.limitInteger(1000, 2000);
        this.attack_time = App.RandomUtils.limitInteger(1000, 2000);
        this.hp = 500;
        this.setAttackType(1);
    };
    Boss.prototype.createArmature = function () {
        this.armature.register(App.DragonBonesFactory.makeArmature("guaiwu002", "guaiwu002", 1.2), [
            BaseGameObject.ACTION_Idle,
            BaseGameObject.ACTION_Move,
            BaseGameObject.ACTION_Hart,
            BaseGameObject.ACTION_Fly,
            BaseGameObject.ACTION_Land,
            BaseGameObject.ACTION_jump,
            Enemy.ACTION_Attack,
            Enemy.ACTION_Skill1
        ]);
        this.armature.register(App.DragonBonesFactory.makeArmature("guaiwu003", "guaiwu003", 1.2), [
            Enemy.ACTION_Skill2
        ]);
        this.armature.addCompleteCallFunc(this.armaturePlayEnd, this);
        this.initFrameData("guaiwu002");
        this.effectArmature = new DragonBonesArmatureContainer();
        this.effectArmature.register(App.DragonBonesFactory.makeArmature("guaiwu002_effect", "guaiwu002_effect", 1.2), [
            Enemy.ACTION_Attack,
            Enemy.ACTION_Skill1
        ]);
        this.effectArmature.register(App.DragonBonesFactory.makeArmature("guaiwu003_effect", "guaiwu003_effect", 1.2), [
            Enemy.ACTION_Skill2
        ]);
    };
    Boss.prototype.setAttackType = function (type) {
        this.attackType = type;
        if (this.attackType == 1) {
            this.ai_attack_dis = this.attackConfig["attack1"].dis;
        }
        else if (this.attackType == 2) {
            this.ai_attack_dis = this.attackConfig["skill1"].dis;
        }
        else if (this.attackType == 3) {
            this.ai_attack_dis = this.attackConfig["skill2_3"].dis;
        }
    };
    Boss.prototype.update = function (time) {
        _super.prototype.update.call(this, time);
    };
    Boss.prototype.armaturePlayEnd = function (e, animationName) {
        _super.prototype.armaturePlayEnd.call(this, e, animationName);
        if (animationName == Enemy.ACTION_Attack) {
            this.setAttackType(2);
        }
        else if (animationName == Enemy.ACTION_Skill1) {
            this.gotoIdle();
            this.setAttackType(3);
        }
        else if (animationName == Enemy.ACTION_Skill2) {
            this.gotoIdle();
            this.setAttackType(1);
        }
    };
    Boss.prototype.playAttackArmature = function () {
        var anmatureName;
        if (this.attackType == 1) {
            anmatureName = Enemy.ACTION_Attack;
            App.SoundManager.playEffect("sound_bossAttack");
        }
        else if (this.attackType == 2) {
            anmatureName = Enemy.ACTION_Skill1;
            App.SoundManager.playEffect("sound_bossSkill");
        }
        else if (this.attackType == 3) {
            anmatureName = Enemy.ACTION_Skill2;
            App.SoundManager.playEffect("sound_bossSkill");
        }
        this.armature.play(anmatureName, 1);
        this.playEffect(anmatureName);
    };
    Boss.prototype.die = function () {
        _super.prototype.die.call(this);
        this.jump(-40, this.scaleX * -10);
        this.gameController.slowMotion();
    };
    Boss.prototype.removeEffect = function () {
        this.effectArmature.stop();
        App.DisplayUtils.removeFromParent(this.effectArmature);
    };
    Boss.prototype.playEffect = function (actionName) {
        if (this.effectArmature.play(actionName, 1)) {
            this.addChild(this.effectArmature);
        }
        else {
            this.removeEffect();
        }
    };
    Boss.prototype.leave = function () {
        _super.prototype.leave.call(this);
        this.stopMove();
        this.setAttackType(2);
        this.gotoAttack();
    };
    Boss.prototype.gotoIdle = function () {
        _super.prototype.gotoIdle.call(this);
        this.removeEffect();
    };
    Boss.prototype.destory = function () {
        _super.prototype.destory.call(this);
        this.removeEffect();
    };
    return Boss;
}(Enemy));
__reflect(Boss.prototype, "Boss");
//# sourceMappingURL=Boss.js.map