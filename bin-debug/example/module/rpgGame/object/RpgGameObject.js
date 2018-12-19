var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by yangsong on 2017/10/11.
 */
var RpgGameObject = (function () {
    function RpgGameObject() {
        this._components = {};
    }
    RpgGameObject.prototype.init = function (data) {
        this.id = data.id;
        this.col = data.col;
        this.row = data.row;
        this.gameView = data.gameView;
        this.mcPath = data.mcPath;
        this.mcName = data.mcName;
        this.skillPath = data.skillPath;
        this.speed = data.speed || RpgGameData.WalkSpeed;
        this.dir = data.dir || Dir.Bottom;
        this.propertyData = data.propertyData;
        var p = RpgGameUtils.convertCellToXY(this.col, this.row);
        this.x = p.x;
        this.y = p.y;
        this.action = Action.Stand;
    };
    RpgGameObject.prototype.destory = function () {
        var componentNames = Object.keys(this._components);
        while (componentNames.length) {
            var componentName = componentNames[0];
            this.removeComponent(componentName);
            componentNames = Object.keys(this._components);
        }
        this._path = null;
        this.gameView = null;
        this.battleObj = null;
        this.propertyData = null;
    };
    RpgGameObject.prototype.addComponent = function (componentName) {
        if (this._components[componentName]) {
            return;
        }
        var component = ObjectPool.pop(componentName);
        component.type = componentName;
        component.entity = this;
        component.start();
        ComponentSystem.addComponent(component);
        this._components[componentName] = component;
    };
    RpgGameObject.prototype.removeComponent = function (componentName) {
        var component = this._components[componentName];
        if (!component) {
            return;
        }
        ComponentSystem.removeComponent(component);
        component.stop();
        ObjectPool.push(component);
        this._components[componentName] = null;
        delete this._components[componentName];
    };
    RpgGameObject.prototype.getComponent = function (componentName) {
        var hasComponent = this._components[componentName];
        return hasComponent;
    };
    Object.defineProperty(RpgGameObject.prototype, "path", {
        get: function () {
            return this._path;
        },
        set: function (value) {
            this._path = value;
            this.pathChange = true;
            if (this._path) {
                this.action = Action.Move;
            }
            else {
                this.action = Action.Stand;
            }
        },
        enumerable: true,
        configurable: true
    });
    RpgGameObject.prototype.setInCamera = function (value) {
        this._inCamera = value;
    };
    RpgGameObject.prototype.getInCamera = function () {
        return this._inCamera;
    };
    return RpgGameObject;
}());
__reflect(RpgGameObject.prototype, "RpgGameObject");
//# sourceMappingURL=RpgGameObject.js.map