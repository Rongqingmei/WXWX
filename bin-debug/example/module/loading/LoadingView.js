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
 * Created by egret on 15-1-7.
 */
var LoadingView = (function (_super) {
    __extends(LoadingView, _super);
    function LoadingView($controller, $parent) {
        var _this = _super.call(this, $controller, $parent) || this;
        _this.flag = true;
        _this.skinName = "resource/skins/LoadingUISkin.exml";
        return _this;
    }
    LoadingView.prototype.setProgress = function (current, total) {
        this.txtMsg.text = "资源加载中..." + current + "/" + total;
        if (current == total) {
            this.playDoneAinma();
        }
    };
    LoadingView.prototype.playDoneAinma = function () {
        if (this.flag) {
            this.flag = false;
            var self_1 = this;
            //左挡板
            var temp1x = self_1.zuoRect.x;
            var Tween1 = egret.Tween.get(self_1.zuoRect).to({ x: temp1x - 500, alpha: 0 }, 2000);
            //右挡板
            var temp2x = self_1.youRect.x;
            var Tween2 = egret.Tween.get(self_1.youRect).to({ x: temp2x + 500, alpha: 0 }, 2000);
            //文字
            var Tween3 = egret.Tween.get(self_1.txtMsg).to({ alpha: 0 }, 1400);
        }
    };
    return LoadingView;
}(BaseEuiView));
__reflect(LoadingView.prototype, "LoadingView");
//# sourceMappingURL=LoadingView.js.map