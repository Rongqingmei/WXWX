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
 * Created by yangsong on 2017/10/13.
 */
var CameraComponent = (function (_super) {
    __extends(CameraComponent, _super);
    function CameraComponent() {
        return _super.call(this) || this;
    }
    CameraComponent.prototype.start = function () {
        _super.prototype.start.call(this);
        this.moveObjs = [];
        this.moveObjs.push(this.entity.gameView.getGameEffectLayer());
        this.moveObjs.push(this.entity.gameView.getGameObjcetLayer());
        this.moveObjs.push(this.entity.gameView.getBackground());
        this.background = this.entity.gameView.getBackground();
    };
    CameraComponent.prototype.stop = function () {
        _super.prototype.stop.call(this);
        this.moveObjs = null;
        this.background = null;
        this.playerX = null;
        this.playerY = null;
        this.playerCol = null;
        this.playerRow = null;
    };
    CameraComponent.prototype.update = function (advancedTime) {
        _super.prototype.update.call(this, advancedTime);
        if (this.playerPosChange()) {
            this.playerX = this.entity.x;
            this.playerY = this.entity.y;
            this.dealMoveObjs();
        }
        if (this.playerCellChange()) {
            this.playerCol = this.entity.col;
            this.playerRow = this.entity.row;
            this.dealBgCamera();
        }
    };
    CameraComponent.prototype.playerPosChange = function () {
        return this.playerX != this.entity.x || this.playerY != this.entity.y;
    };
    CameraComponent.prototype.playerCellChange = function () {
        return this.playerCol != this.entity.col || this.playerRow != this.entity.row;
    };
    CameraComponent.prototype.dealMoveObjs = function () {
        var left = Math.max(this.playerX - App.StageUtils.getWidth() * 0.5, 0);
        var top = Math.max(this.playerY - App.StageUtils.getHeight() * 0.5, 0);
        left = Math.min(this.background.mapWidth - App.StageUtils.getWidth(), left);
        top = Math.min(this.background.mapHeight - App.StageUtils.getHeight(), top);
        this.moveObjs.forEach(function (obj) {
            obj.x = -left;
            obj.y = -top;
        });
    };
    CameraComponent.prototype.dealBgCamera = function () {
        this.background.updateCameraPos(this.playerX, this.playerY);
    };
    return CameraComponent;
}(Component));
__reflect(CameraComponent.prototype, "CameraComponent");
//# sourceMappingURL=CameraComponent.js.map