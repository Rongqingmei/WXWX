var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by yangsong on 2017/10/11.
 */
var Component = (function () {
    function Component() {
    }
    Component.prototype.start = function () {
        this.dealTime = 0;
        this.dealInterval = 0;
        this.isRuning = true;
    };
    Component.prototype.stop = function () {
        this.dealTime = null;
        this.dealInterval = null;
        this.entity = null;
        this.isRuning = false;
        this.type = null;
    };
    Component.prototype.update = function (advancedTime) {
    };
    return Component;
}());
__reflect(Component.prototype, "Component");
//# sourceMappingURL=Component.js.map