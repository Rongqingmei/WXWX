var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by yangsong on 15-3-27.
 * ProtoBuf测试
 */
var ProtoBufTest = (function () {
    function ProtoBufTest() {
        App.ResourceUtils.loadGroup("preload_core", this.onResourceLoadComplete, this.onResourceLoadProgress, this);
    }
    /**
     * 资源组加载完成
     */
    ProtoBufTest.prototype.onResourceLoadComplete = function () {
        App.Init();
        this.clientTest();
        // this.socketTest();
    };
    /**
     * 资源组加载进度
     */
    ProtoBufTest.prototype.onResourceLoadProgress = function (itemsLoaded, itemsTotal) {
        App.ControllerManager.applyFunc(ControllerConst.Loading, LoadingConst.SetProgress, itemsLoaded, itemsTotal);
    };
    ProtoBufTest.prototype.clientTest = function () {
        //创建一条消息
        var msg = simple.user_login_c2s.fromObject({
            accid: 1,
            tstamp: 2,
            ticket: "yangsong"
        });
        //序列化
        var buffer = simple.user_login_c2s.encode(msg).finish();
        Log.trace("序列化数据：", buffer);
        //反序列化
        var message = simple.user_login_c2s.decode(buffer);
        Log.trace("反序列化数据：", message);
    };
    ProtoBufTest.prototype.socketTest = function () {
        //发送一条消息到服务器
        function send() {
            var msg = {};
            msg.key = "simple.user_login_c2s";
            msg.body = {
                "accid": 888,
                "tstamp": 999,
                "ticket": "yangsong"
            };
            App.Socket.send(msg);
        }
        App.Socket.connect();
        App.MessageCenter.addListener(SocketConst.SOCKET_CONNECT, function () {
            Log.trace("与服务器连接上");
            send();
        }, this);
        App.MessageCenter.addListener(SocketConst.SOCKET_RECONNECT, function () {
            Log.trace("与服务器重新连接上");
            send();
        }, this);
        App.MessageCenter.addListener(SocketConst.SOCKET_START_RECONNECT, function () {
            Log.trace("开始与服务器重新连接");
        }, this);
        App.MessageCenter.addListener(SocketConst.SOCKET_CLOSE, function () {
            Log.trace("与服务器断开连接");
        }, this);
        App.MessageCenter.addListener(SocketConst.SOCKET_NOCONNECT, function () {
            Log.trace("服务器连接不上");
        }, this);
        App.MessageCenter.addListener("10001", function (msg) {
            Log.trace("收到服务器消息:", msg);
        }, this);
    };
    return ProtoBufTest;
}());
__reflect(ProtoBufTest.prototype, "ProtoBufTest");
//# sourceMappingURL=ProtoBufTest.js.map