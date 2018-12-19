var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by yangsong on 2017/10/11.
 */
var RpgGameData = (function () {
    function RpgGameData() {
    }
    RpgGameData.GameTileWidth = 256;
    RpgGameData.GameTileHeight = 256;
    RpgGameData.GameCellWidth = 32;
    RpgGameData.GameCellHeight = 16;
    RpgGameData.GameAoiWidth = 256;
    RpgGameData.GameAoiHeight = 256;
    RpgGameData.WalkSpeed = 3;
    return RpgGameData;
}());
__reflect(RpgGameData.prototype, "RpgGameData");
//# sourceMappingURL=RpgGameData.js.map