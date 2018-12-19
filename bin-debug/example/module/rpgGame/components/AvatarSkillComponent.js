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
 * Created by yangsong on 2017/10/11.
 */
var AvatarSkillComponent = (function (_super) {
    __extends(AvatarSkillComponent, _super);
    function AvatarSkillComponent() {
        return _super.call(this) || this;
    }
    AvatarSkillComponent.prototype.start = function () {
        _super.prototype.start.call(this);
        var avatarComponent = this.entity.getComponent(ComponentType.Avatar);
        this.mcParent = avatarComponent.body;
        this.mc = ObjectPool.pop("RpgMovieClip");
        this.mc.setComplateAction(this.complateAction, this);
        this.startLoad();
    };
    AvatarSkillComponent.prototype.stop = function () {
        _super.prototype.stop.call(this);
        this.mc.destroy();
        this.mc = null;
        this.mcParent = null;
    };
    AvatarSkillComponent.prototype.update = function (advancedTime) {
        _super.prototype.update.call(this, advancedTime);
        if (this.entity.action == Action.Attack && !this.mc.parent) {
            this.startMc();
        }
        else if (this.entity.action != Action.Attack && this.mc.parent) {
            this.stopMc();
        }
        if (this.mc.parent) {
            this.mc.runAction(advancedTime);
        }
    };
    AvatarSkillComponent.prototype.startMc = function () {
        this.mc.gotoAction(this.entity.action, this.entity.dir, true);
        if (this.entity.dir == Dir.Top
            || this.entity.dir == Dir.TopLeft
            || this.entity.dir == Dir.TopRight) {
            this.mcParent.addChildAt(this.mc, 0);
        }
        else {
            this.mcParent.addChild(this.mc);
        }
    };
    AvatarSkillComponent.prototype.stopMc = function () {
        App.DisplayUtils.removeFromParent(this.mc);
    };
    AvatarSkillComponent.prototype.complateAction = function () {
        this.stopMc();
    };
    AvatarSkillComponent.prototype.startLoad = function () {
        RpgGameRes.loadAvatar(this.entity.skillPath, this.entity.mcName + "_attack", this.onLoadComplate, this);
    };
    AvatarSkillComponent.prototype.onLoadComplate = function () {
        if (!this.isRuning) {
            return;
        }
        var avatarResName = this.entity.mcName + "_attack";
        var data = RES.getRes("avatar_" + avatarResName + ".json");
        var texture = RES.getRes("avatar_" + avatarResName + ".png");
        var mcFactory = new egret.MovieClipDataFactory(data, texture);
        this.mc.setMcData(mcFactory.generateMovieClipData(avatarResName));
    };
    return AvatarSkillComponent;
}(Component));
__reflect(AvatarSkillComponent.prototype, "AvatarSkillComponent");
//# sourceMappingURL=AvatarSkillComponent.js.map