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
var RpgMonster = (function (_super) {
    __extends(RpgMonster, _super);
    function RpgMonster() {
        return _super.call(this) || this;
    }
    RpgMonster.prototype.init = function (data) {
        _super.prototype.init.call(this, data);
        this.addComponent(ComponentType.Aoi);
        this.addComponent(ComponentType.Ai);
        this.addComponent(ComponentType.Move);
    };
    RpgMonster.prototype.setInCamera = function (value) {
        _super.prototype.setInCamera.call(this, value);
        if (value) {
            this.addComponent(ComponentType.Avatar);
            this.addComponent(ComponentType.Battle);
        }
        else {
            this.removeComponent(ComponentType.Avatar);
            this.removeComponent(ComponentType.Battle);
        }
    };
    RpgMonster.prototype.destory = function () {
        _super.prototype.destory.call(this);
    };
    return RpgMonster;
}(RpgGameObject));
__reflect(RpgMonster.prototype, "RpgMonster");
//# sourceMappingURL=RpgMonster.js.map