var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by yangsong on 2014/11/23.
 * 游戏层级类
 */
var LayerManager = (function () {
    function LayerManager() {
    }
    /**
     * 游戏背景层
     * @type {BaseSpriteLayer}
     */
    LayerManager.Game_Bg = new BaseSpriteLayer();
    /**
     * 主游戏层
     * @type {BaseSpriteLayer}
     */
    LayerManager.Game_Main = new BaseSpriteLayer();
    /**
     * UI主界面
     * @type {BaseEuiLayer}
     */
    LayerManager.UI_Main = new BaseEuiLayer();
    /**
     * UI弹出框层
     * @type {BaseEuiLayer}
     */
    LayerManager.UI_Popup = new BaseEuiLayer();
    /**
     * UI警告消息层
     * @type {BaseEuiLayer}
     */
    LayerManager.UI_Message = new BaseEuiLayer();
    /**
     * UITips层
     * @type {BaseEuiLayer}
     */
    LayerManager.UI_Tips = new BaseEuiLayer();
    return LayerManager;
}());
__reflect(LayerManager.prototype, "LayerManager");
//# sourceMappingURL=LayerManager.js.map