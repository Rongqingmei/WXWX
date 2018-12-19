var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by yangsong on 2017/10/18.
 */
var RpgGameRes = (function () {
    function RpgGameRes() {
    }
    RpgGameRes.clearAvatar = function (avatarResName) {
        var groupName = "avatarGroup_" + avatarResName;
        if (this.LoadingResList[groupName]) {
            this.LoadingResList[groupName] = null;
            delete this.LoadingResList[groupName];
        }
        if (this.ComplateResList[groupName]) {
            this.ComplateResList[groupName] = null;
            delete this.ComplateResList[groupName];
        }
        RES.destroyRes(groupName);
    };
    RpgGameRes.loadAvatar = function (avatarResPath, avatarResName, onLoadComplate, onLoadComplateTarget) {
        var groupName = "avatarGroup_" + avatarResName;
        if (this.ComplateResList[groupName]) {
            onLoadComplate.call(onLoadComplateTarget);
        }
        else if (this.LoadingResList[groupName]) {
            this.LoadingResList[groupName].push([onLoadComplate, onLoadComplateTarget]);
        }
        else {
            this.LoadingResList[groupName] = [];
            this.LoadingResList[groupName].push([onLoadComplate, onLoadComplateTarget]);
            var avatarResKeys = [];
            [
                {
                    name: avatarResName + ".json",
                    type: "json"
                },
                {
                    name: avatarResName + ".png",
                    type: "image"
                }
            ].forEach(function (res) {
                var resKey = "avatar_" + res.name;
                avatarResKeys.push(resKey);
                App.ResourceUtils.createResource(resKey, res.type, avatarResPath + res.name);
            });
            App.ResourceUtils.createGroup(groupName, avatarResKeys);
            App.ResourceUtils.loadGroup(groupName, this.onLoadGroupComplate, this.onLoadGroupProgress, this);
        }
    };
    RpgGameRes.onLoadGroupComplate = function (groupName) {
        var callBacks = this.LoadingResList[groupName];
        callBacks.forEach(function (arr) {
            arr[0].call(arr[1]);
        });
        this.LoadingResList[groupName] = null;
        delete this.LoadingResList[groupName];
        this.ComplateResList[groupName] = 1;
    };
    RpgGameRes.onLoadGroupProgress = function (groupName) {
    };
    RpgGameRes.ComplateResList = {};
    RpgGameRes.LoadingResList = {};
    return RpgGameRes;
}());
__reflect(RpgGameRes.prototype, "RpgGameRes");
//# sourceMappingURL=RpgGameRes.js.map