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
var RpgPlayer = (function (_super) {
    __extends(RpgPlayer, _super);
    function RpgPlayer() {
        return _super.call(this) || this;
    }
    RpgPlayer.prototype.init = function (data) {
        _super.prototype.init.call(this, data);
        this.addComponent(ComponentType.Avatar);
        this.addComponent(ComponentType.AvatarSkill);
        this.addComponent(ComponentType.Head);
        this.addComponent(ComponentType.Move);
        this.addComponent(ComponentType.Camera);
        this.addComponent(ComponentType.Sort);
        this.addComponent(ComponentType.Control);
        this.addComponent(ComponentType.AutoBattle);
        this.addComponent(ComponentType.Battle);
    };
    RpgPlayer.prototype.destory = function () {
        _super.prototype.destory.call(this);
    };
    return RpgPlayer;
}(RpgGameObject));
__reflect(RpgPlayer.prototype, "RpgPlayer");
//# sourceMappingURL=RpgPlayer.js.map