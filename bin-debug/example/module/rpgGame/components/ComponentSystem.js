var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by yangsong on 2017/10/11.
 */
var ComponentSystem = (function () {
    function ComponentSystem() {
    }
    ComponentSystem.addComponent = function (component) {
        if (!this._Components[component.type]) {
            this._Components[component.type] = [];
        }
        this._Components[component.type].push(component);
    };
    ComponentSystem.removeComponent = function (component) {
        if (!this._Components[component.type]) {
            return;
        }
        var index = this._Components[component.type].indexOf(component);
        if (index != -1) {
            this._Components[component.type].splice(index, 1);
        }
    };
    ComponentSystem.start = function () {
        App.TimerManager.doFrame(1, 0, this.onEnterFrame, this);
    };
    ComponentSystem.stop = function () {
        App.TimerManager.remove(this.onEnterFrame, this);
    };
    ComponentSystem.onEnterFrame = function (advancedTime) {
        this.dealComponents(this._Components[ComponentType.Ai], advancedTime);
        this.dealComponents(this._Components[ComponentType.AutoBattle], advancedTime);
        this.dealComponents(this._Components[ComponentType.Move], advancedTime);
        this.dealComponents(this._Components[ComponentType.Aoi], advancedTime);
        this.dealComponents(this._Components[ComponentType.Battle], advancedTime);
        this.dealComponents(this._Components[ComponentType.Avatar], advancedTime);
        this.dealComponents(this._Components[ComponentType.AvatarSkill], advancedTime);
        this.dealComponents(this._Components[ComponentType.Camera], advancedTime);
        this.dealComponents(this._Components[ComponentType.Sort], advancedTime);
    };
    ComponentSystem.dealComponents = function (arr, advancedTime) {
        if (!arr) {
            return;
        }
        arr.forEach(function (component) {
            if (!component.isRuning) {
                return;
            }
            component.dealTime += advancedTime;
            if (component.dealTime >= component.dealInterval) {
                component.dealTime = 0;
                component.update(advancedTime);
            }
        });
    };
    ComponentSystem._Components = {};
    return ComponentSystem;
}());
__reflect(ComponentSystem.prototype, "ComponentSystem");
//# sourceMappingURL=ComponentSystem.js.map