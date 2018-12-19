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
var RpgTiles = (function (_super) {
    __extends(RpgTiles, _super);
    function RpgTiles() {
        var _this = _super.call(this) || this;
        _this.tiles = [];
        _this.screenTiles = [];
        return _this;
    }
    RpgTiles.prototype.init = function (mapId) {
        this.mapId = mapId;
        var mapData = RES.getRes("map_" + mapId + "_data.json");
        this.cols = Math.floor(mapData.width / RpgGameData.GameTileWidth);
        this.rows = Math.floor(mapData.height / RpgGameData.GameTileHeight);
    };
    RpgTiles.prototype.updateCameraPos = function ($x, $y) {
        var currCol = Math.round($x / RpgGameData.GameTileWidth);
        var currRow = Math.round($y / RpgGameData.GameTileHeight);
        var screenCols = Math.ceil(App.StageUtils.getWidth() / RpgGameData.GameTileWidth) + 1;
        var screenRows = Math.ceil(App.StageUtils.getHeight() / RpgGameData.GameTileHeight) + 1;
        var halfScreenCols = Math.ceil(screenCols / 2);
        var halfScreenRows = Math.ceil(screenRows / 2);
        var minCol = currCol - halfScreenCols;
        var maxCol = currCol + halfScreenCols;
        if (minCol < 0) {
            maxCol += -minCol;
            minCol = 0;
        }
        if (maxCol > this.cols) {
            minCol -= (maxCol - this.cols);
            maxCol = this.cols;
        }
        var minRow = currRow - halfScreenRows;
        var maxRow = currRow + halfScreenRows;
        if (minRow < 0) {
            maxRow += -minRow;
            minRow = 0;
        }
        if (maxRow > this.rows) {
            minRow -= (maxRow - this.rows);
            maxRow = this.rows;
        }
        var screenTiles = [];
        for (var i = minCol; i <= maxCol; i++) {
            for (var j = minRow; j <= maxRow; j++) {
                var tileKey = i + "_" + j;
                var tile = this.tiles[tileKey];
                if (!tile) {
                    tile = new RpgTile();
                    tile.init(this.mapId, i, j);
                    this.tiles[tileKey] = tile;
                }
                if (!tile.parent) {
                    this.addChild(tile);
                }
                screenTiles.push(tileKey);
            }
        }
        //移除不在屏幕内的格子
        this.screenTiles.forEach(function (tileKey) {
            if (screenTiles.indexOf(tileKey) == -1) {
                var tile = this.tiles[tileKey];
                tile && App.DisplayUtils.removeFromParent(tile);
            }
        }.bind(this));
        this.screenTiles = screenTiles;
    };
    RpgTiles.prototype.destory = function () {
        var keys = Object.keys(this.tiles);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var tile = this.tiles[key];
            tile.destory();
            this.tiles[key] = null;
            delete this.tiles[key];
        }
        this.screenTiles.splice(0);
    };
    return RpgTiles;
}(egret.DisplayObjectContainer));
__reflect(RpgTiles.prototype, "RpgTiles");
//# sourceMappingURL=RpgTiles.js.map