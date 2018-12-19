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
var AvatarComponent = (function (_super) {
    __extends(AvatarComponent, _super);
    function AvatarComponent() {
        return _super.call(this) || this;
    }
    AvatarComponent.prototype.start = function () {
        _super.prototype.start.call(this);
        this.mc = ObjectPool.pop("RpgMovieClip");
        this.mc.setDefault("avatarDefault_png");
        this.mc.setComplateAction(this.complateAction, this);
        this.body = ObjectPool.pop("egret.DisplayObjectContainer");
        this.body.addChild(this.mc);
        this.entity.gameView.getGameObjcetLayer().addChild(this.body);
        this.startLoad();
    };
    AvatarComponent.prototype.stop = function () {
        _super.prototype.stop.call(this);
        this.mc.destroy();
        this.mc = null;
        App.DisplayUtils.removeFromParent(this.body);
        ObjectPool.push(this.body);
        this.body.removeChildren();
        this.body = null;
    };
    AvatarComponent.prototype.update = function (advancedTime) {
        _super.prototype.update.call(this, advancedTime);
        this.setPos();
        if (this.entity.action != this.mc.getCurrAction()
            || this.entity.dir != this.mc.getCurrDir()) {
            this.mc.gotoAction(this.entity.action, this.entity.dir);
        }
        this.mc.runAction(advancedTime);
    };
    AvatarComponent.prototype.complateAction = function () {
        if (this.mc.getCurrAction() == Action.Die) {
            this.entity.gameView.removeMonster(this.entity);
        }
        else {
            this.entity.action = Action.Stand;
            this.mc.gotoAction(this.entity.action, this.entity.dir);
        }
    };
    AvatarComponent.prototype.setPos = function () {
        if (this.body.x != this.entity.x) {
            this.body.x = this.entity.x;
        }
        if (this.body.y != this.entity.y) {
            this.body.y = this.entity.y;
        }
    };
    AvatarComponent.prototype.startLoad = function () {
        RpgGameRes.loadAvatar(this.entity.mcPath, this.entity.mcName, this.onLoadComplate, this);
    };
    AvatarComponent.prototype.onLoadComplate = function () {
        if (!this.isRuning) {
            return;
        }
        var avatarResName = this.entity.mcName;
        var data = RES.getRes("avatar_" + avatarResName + ".json");
        var texture = RES.getRes("avatar_" + avatarResName + ".png");
        var mcFactory = new egret.MovieClipDataFactory(data, texture);
        this.mc.setMcData(mcFactory.generateMovieClipData(avatarResName));
    };
    return AvatarComponent;
}(Component));
__reflect(AvatarComponent.prototype, "AvatarComponent");
//# sourceMappingURL=AvatarComponent.js.map