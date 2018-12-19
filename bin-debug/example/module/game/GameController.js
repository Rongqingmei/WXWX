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
 * Created by egret on 15-1-16.
 */
var GameController = (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super.call(this) || this;
        /**
         * 六方向检测是否在攻击范围内
         */
        _this.checkHitRectangle_Att = new egret.Rectangle();
        _this.checkHitRectangle_Def = new egret.Rectangle();
        _this.canAttackObjs = new Array();
        _this.gameView = new GameView(_this, LayerManager.Game_Main);
        App.ViewManager.register(ViewConst.Game, _this.gameView);
        _this.gameUIView = new GameUIView(_this, LayerManager.Game_Main);
        App.ViewManager.register(ViewConst.GameUI, _this.gameUIView);
        _this.registerFunc(GameConst.Get_Hero, _this.getHero, _this);
        _this.registerFunc(GameConst.Remove_Enemy, _this.removeEnemy, _this);
        return _this;
    }
    /**
     * 获取主角
     * @returns {Hero}
     */
    GameController.prototype.getHero = function () {
        return this.gameView.hero;
    };
    GameController.prototype.removeEnemy = function (enemy) {
        this.gameView.removeEnemy(enemy);
    };
    /**
     * 震动
     */
    GameController.prototype.shock = function () {
        App.ShockUtils.shock(App.ShockUtils.MAP, this.gameView);
    };
    /**
     * 慢镜头
     */
    GameController.prototype.slowMotion = function () {
        App.ShockUtils.destroy();
        AnchorUtil.setAnchor(this.gameView, 0.5);
        this.gameView.x = App.StageUtils.getWidth() * 0.5;
        this.gameView.y = App.StageUtils.getHeight() * 0.5;
        this.gameView.width = App.StageUtils.getWidth();
        this.gameView.height = App.StageUtils.getHeight();
        App.TimerManager.setTimeScale(0.1);
        egret.Tween.get(this.gameView).to({ scaleX: 1.1, scaleY: 1.1 }, 1200).to({
            scaleX: 1,
            scaleY: 1
        }, 300).call(this.slowMotionEnd, this);
    };
    GameController.prototype.slowMotionEnd = function () {
        AnchorUtil.setAnchor(this.gameView, 0);
        this.gameView.x = 0;
        this.gameView.y = 0;
        App.TimerManager.setTimeScale(1);
    };
    /**
     * 获取可攻击对象
     */
    GameController.prototype.getMyAttackObjects = function (me, meAttackDis) {
        this.canAttackObjs.length = 0;
        if (me instanceof Enemy) {
            if (!this.gameView.hero.isLand && this.checkIsInDis(me, this.gameView.hero, meAttackDis)) {
                this.canAttackObjs.push(this.gameView.hero);
            }
        }
        else if (me instanceof Hero) {
            for (var i = 0, len = this.gameView.enemys.length; i < len; i++) {
                var enemy = this.gameView.enemys[i];
                if (enemy.isDie)
                    continue;
                if (enemy.isLand)
                    continue;
                if (!enemy.isInScreen)
                    continue;
                if (this.checkIsInDis(me, enemy, meAttackDis)) {
                    this.canAttackObjs.push(enemy);
                }
            }
        }
        return this.canAttackObjs;
    };
    /**
     * 获取离自己最近的对象
     * @param me
     */
    GameController.prototype.getMyNearAttackObjects = function (me) {
        if (me instanceof Enemy) {
            return this.gameView.hero;
        }
        else if (me instanceof Hero) {
        }
        return null;
    };
    GameController.prototype.checkIsInDis = function (attactObj, defenceObj, attackDis) {
        var front = attackDis[0]; //前
        var back = attackDis[1]; //后
        var left = attackDis[2]; //左
        var right = attackDis[3]; //右
        var top = attackDis[4]; //上
        var down = attackDis[5]; //下
        var ylen = defenceObj.y <= attactObj.y ? left : right;
        this.checkHitRectangle_Att.x = attactObj.x - (attactObj.scaleX == 1 ? back : front);
        this.checkHitRectangle_Att.y = attactObj.z - top;
        this.checkHitRectangle_Att.width = front + back;
        this.checkHitRectangle_Att.height = top + down;
        this.checkHitRectangle_Def.x = defenceObj.x - defenceObj.width * 0.5;
        this.checkHitRectangle_Def.y = defenceObj.z - defenceObj.height;
        this.checkHitRectangle_Def.width = defenceObj.width;
        this.checkHitRectangle_Def.height = defenceObj.height;
        return Math.abs(defenceObj.y - attactObj.y) <= ylen && this.checkHitRectangle_Att.intersects(this.checkHitRectangle_Def);
    };
    return GameController;
}(BaseController));
__reflect(GameController.prototype, "GameController");
//# sourceMappingURL=GameController.js.map