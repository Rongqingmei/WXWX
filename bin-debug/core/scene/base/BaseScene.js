var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by yangsong on 15-1-7.
 * Scene基类
 */
var BaseScene = (function () {
    /**
     * 构造函数
     */
    function BaseScene() {
        this._layers = new Array();
    }
    /**
     * 进入Scene调用
     */
    BaseScene.prototype.onEnter = function () {
    };
    /**
     * 退出Scene调用
     */
    BaseScene.prototype.onExit = function () {
        App.ViewManager.closeAll();
        this.removeAllLayer();
    };
    /**
     * 添加一个Layer到舞台
     * @param layer
     */
    BaseScene.prototype.addLayer = function (layer) {
        App.StageUtils.getStage().addChild(layer);
        this._layers.push(layer);
    };
    /**
     * 添加一个Layer到舞台
     * @param layer
     */
    BaseScene.prototype.addLayerAt = function (layer, index) {
        App.StageUtils.getStage().addChildAt(layer, index);
        this._layers.push(layer);
    };
    /**
     * 在舞台移除一个Layer
     * @param layer
     */
    BaseScene.prototype.removeLayer = function (layer) {
        App.StageUtils.getStage().removeChild(layer);
        this._layers.splice(this._layers.indexOf(layer), 1);
    };
    /**
     * Layer中移除所有
     * @param layer
     */
    BaseScene.prototype.layerRemoveAllChild = function (layer) {
        layer.removeChildren();
    };
    /**
     * 移除所有Layer
     */
    BaseScene.prototype.removeAllLayer = function () {
        while (this._layers.length) {
            var layer = this._layers[0];
            this.layerRemoveAllChild(layer);
            this.removeLayer(layer);
        }
    };
    return BaseScene;
}());
__reflect(BaseScene.prototype, "BaseScene");
//# sourceMappingURL=BaseScene.js.map