var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by yangsong on 2017/10/12.
 */
var RpgGameUtils = (function () {
    function RpgGameUtils() {
    }
    RpgGameUtils.convertCellToXY = function (col, row) {
        this._convertUsePoint.x = col * RpgGameData.GameCellWidth + RpgGameData.GameCellWidth * 0.5;
        this._convertUsePoint.y = row * RpgGameData.GameCellHeight + RpgGameData.GameCellHeight * 0.5;
        return this._convertUsePoint;
    };
    RpgGameUtils.convertXYToCell = function (x, y) {
        this._convertUsePoint.x = Math.floor(x / RpgGameData.GameCellWidth);
        this._convertUsePoint.y = Math.floor(y / RpgGameData.GameCellHeight);
        return this._convertUsePoint;
    };
    RpgGameUtils.convertXYToAoi = function (x, y) {
        this._convertUsePoint.x = Math.floor(x / RpgGameData.GameAoiWidth);
        this._convertUsePoint.y = Math.floor(y / RpgGameData.GameAoiHeight);
        return this._convertUsePoint;
    };
    RpgGameUtils.computeGameObjDir = function (currX, currY, gotoX, gotoY) {
        var radian = App.MathUtils.getRadian2(currX, currY, gotoX, gotoY);
        var angle = App.MathUtils.getAngle(radian);
        var dir;
        if (angle == 0) {
            dir = Dir.Right;
        }
        else if (angle == 90) {
            dir = Dir.Bottom;
        }
        else if (angle == 180) {
            dir = Dir.Left;
        }
        else if (angle == -90) {
            dir = Dir.Top;
        }
        else if (angle > 0 && angle < 90) {
            dir = Dir.BottomRight;
        }
        else if (angle > 90 && angle < 180) {
            dir = Dir.BottomLeft;
        }
        else if (angle > -180 && angle < -90) {
            dir = Dir.TopLeft;
        }
        else if (angle > -90 && angle < 0) {
            dir = Dir.TopRight;
        }
        return dir;
    };
    RpgGameUtils._convertUsePoint = new egret.Point();
    return RpgGameUtils;
}());
__reflect(RpgGameUtils.prototype, "RpgGameUtils");
//# sourceMappingURL=RpgGameUtils.js.map