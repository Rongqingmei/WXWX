var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by yangsong on 15-3-27.
 * StarlingSwf测试
 */
var StarlingSwfTest = (function () {
    function StarlingSwfTest() {
        //StarlingSwf使用
        App.StarlingSwfFactory.addSwf("bossMC", RES.getRes("bossMC_swf_json"), RES.getRes("bossMC_json"));
        var mc = App.StarlingSwfFactory.makeMc("boss_whiteBear");
    }
    return StarlingSwfTest;
}());
__reflect(StarlingSwfTest.prototype, "StarlingSwfTest");
//# sourceMappingURL=StarlingSwfTest.js.map