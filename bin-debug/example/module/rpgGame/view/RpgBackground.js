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
var RpgBackground = (function (_super) {
    __extends(RpgBackground, _super);
    function RpgBackground() {
        return _super.call(this) || this;
    }
    RpgBackground.prototype.init = function (mapId) {
        this.mapId = mapId;
        var mapData = RES.getRes("map_" + mapId + "_data.json");
        this.mapWidth = mapData.width;
        this.mapHeight = mapData.height;
        this.miniBg = new egret.Bitmap();
        this.miniBg.texture = RES.getRes("map_" + mapId + "_mini.jpg");
        this.miniBg.width = this.mapWidth;
        this.miniBg.height = this.mapHeight;
        this.addChild(this.miniBg);
        this.tiles = new RpgTiles();
        this.tiles.init(mapId);
        this.addChild(this.tiles);
    };
    RpgBackground.prototype.updateCameraPos = function ($x, $y) {
        this.tiles.updateCameraPos($x, $y);
    };
    return RpgBackground;
}(egret.DisplayObjectContainer));
__reflect(RpgBackground.prototype, "RpgBackground");
//# sourceMappingURL=RpgBackground.js.map