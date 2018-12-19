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
var RpgTile = (function (_super) {
    __extends(RpgTile, _super);
    function RpgTile() {
        return _super.call(this) || this;
    }
    RpgTile.prototype.init = function (mapId, col, row) {
        this.col = col;
        this.row = row;
        this.x = this.col * RpgGameData.GameTileWidth;
        this.y = this.row * RpgGameData.GameTileHeight;
        var tileResName = row + "_" + col + ".jpg";
        var tileResPath = "resource/assets/rpgGame/map/" + mapId + "/" + tileResName;
        this.tileResKey = "map_" + mapId + "_" + tileResName;
        //异步加载
        App.ResourceUtils.createResource(this.tileResKey, "image", tileResPath);
        RES.getResAsync(this.tileResKey, function (img) {
            this.texture = img;
        }, this);
    };
    RpgTile.prototype.destory = function () {
        App.DisplayUtils.removeFromParent(this);
        RES.destroyRes(this.tileResKey);
        this.texture = null;
    };
    return RpgTile;
}(egret.Bitmap));
__reflect(RpgTile.prototype, "RpgTile");
//# sourceMappingURL=RpgTile.js.map