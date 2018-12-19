window.skins={};
function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
    __.prototype = b.prototype;
    d.prototype = new __();
};
window.generateEUI = {};
generateEUI.paths = {};
generateEUI.styles = undefined;
generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"}
generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma 'Microsoft Yahei'";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text")
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma 'Microsoft Yahei'";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skins/BattleSkin.exml'] = window.BattleSkin = (function (_super) {
	__extends(BattleSkin, _super);
	function BattleSkin() {
		_super.call(this);
		this.skinParts = ["bg","yourplace","myplace","yourObjima","yourObj","myObjima","myObj","MyName","MyLv","MyHp","MyInfo","YourName","YourLv","YourHp","YourInfo","msgLabel","Message","testmsg","testattack","testbeattack","testskill","testreset","Test"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = BattleSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 400;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 480;
		t.elementsContent = [this.bg_i(),this.yourplace_i(),this.myplace_i(),this.yourObj_i(),this.myObj_i(),this.MyInfo_i(),this.YourInfo_i(),this.Message_i(),this.Test_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xacaf80;
		t.height = 300;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.yourplace_i = function () {
		var t = new eui.Image();
		this.yourplace = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 74;
		t.source = "dishang";
		t.width = 258;
		t.x = 225;
		t.y = 86;
		return t;
	};
	_proto.myplace_i = function () {
		var t = new eui.Image();
		this.myplace = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.source = "dishang";
		t.width = 285;
		t.x = -9;
		t.y = 186;
		return t;
	};
	_proto.yourObj_i = function () {
		var t = new eui.Group();
		this.yourObj = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.width = 120;
		t.x = 288;
		t.y = 36;
		t.elementsContent = [this.yourObjima_i()];
		return t;
	};
	_proto.yourObjima_i = function () {
		var t = new eui.Image();
		this.yourObjima = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "tulangquan01";
		t.top = 0;
		return t;
	};
	_proto.myObj_i = function () {
		var t = new eui.Group();
		this.myObj = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 110;
		t.width = 120;
		t.x = 85.5;
		t.y = 125;
		t.elementsContent = [this.myObjima_i()];
		return t;
	};
	_proto.myObjima_i = function () {
		var t = new eui.Image();
		this.myObjima = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillMode = "scale";
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xiaociguai";
		t.top = 0;
		return t;
	};
	_proto.MyInfo_i = function () {
		var t = new eui.Group();
		this.MyInfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.width = 176;
		t.x = 278;
		t.y = 145;
		t.elementsContent = [this._Image1_i(),this.MyName_i(),this.MyLv_i(),this.MyHp_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = -4;
		t.left = 0;
		t.right = -5;
		t.scale9Grid = new egret.Rectangle(10,9,34,36);
		t.source = "Panel_back";
		t.top = 0;
		return t;
	};
	_proto.MyName_i = function () {
		var t = new eui.Label();
		this.MyName = t;
		t.bold = true;
		t.fontFamily = "KaiTi";
		t.left = 15;
		t.size = 19;
		t.text = "小磁怪";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.top = 8;
		return t;
	};
	_proto.MyLv_i = function () {
		var t = new eui.Label();
		this.MyLv = t;
		t.fontFamily = "Microsoft YaHei";
		t.right = 12;
		t.size = 17;
		t.text = "Lv71";
		t.textAlign = "right";
		t.textColor = 0x000000;
		t.top = 7;
		return t;
	};
	_proto.MyHp_i = function () {
		var t = new eui.ProgressBar();
		this.MyHp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 6.5;
		t.value = 50;
		t.width = 99.5;
		t.x = 62;
		t.y = 35.5;
		return t;
	};
	_proto.YourInfo_i = function () {
		var t = new eui.Group();
		this.YourInfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51;
		t.width = 176;
		t.x = 21.5;
		t.y = 17;
		t.elementsContent = [this._Image2_i(),this.YourName_i(),this.YourLv_i(),this.YourHp_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = -4;
		t.left = 0;
		t.right = -5;
		t.scale9Grid = new egret.Rectangle(10,9,34,36);
		t.source = "Panel_back";
		t.top = 0;
		return t;
	};
	_proto.YourName_i = function () {
		var t = new eui.Label();
		this.YourName = t;
		t.bold = true;
		t.fontFamily = "KaiTi";
		t.left = 15;
		t.size = 19;
		t.text = "土狼犬";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.top = 8;
		return t;
	};
	_proto.YourLv_i = function () {
		var t = new eui.Label();
		this.YourLv = t;
		t.fontFamily = "Microsoft YaHei";
		t.right = 12;
		t.size = 17;
		t.text = "Lv71";
		t.textAlign = "right";
		t.textColor = 0x000000;
		t.top = 7;
		return t;
	};
	_proto.YourHp_i = function () {
		var t = new eui.ProgressBar();
		this.YourHp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 6.5;
		t.value = 50;
		t.width = 99.5;
		t.x = 62;
		t.y = 31;
		return t;
	};
	_proto.Message_i = function () {
		var t = new eui.Group();
		this.Message = t;
		t.alpha = 0.9;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 91;
		t.width = 485;
		t.x = 0;
		t.y = 213;
		t.elementsContent = [this._Image3_i(),this.msgLabel_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -5;
		t.left = -3;
		t.right = -4;
		t.scale9Grid = new egret.Rectangle(10,9,34,36);
		t.source = "Panel_back";
		t.top = -1;
		return t;
	};
	_proto.msgLabel_i = function () {
		var t = new eui.Label();
		this.msgLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 24;
		t.left = 77;
		t.size = 18;
		t.text = "文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.width = 309;
		t.y = 23.5;
		return t;
	};
	_proto.Test_i = function () {
		var t = new eui.Group();
		this.Test = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 88;
		t.width = 471;
		t.x = 4;
		t.y = 307;
		t.elementsContent = [this.testmsg_i(),this.testattack_i(),this.testbeattack_i(),this.testskill_i(),this.testreset_i()];
		return t;
	};
	_proto.testmsg_i = function () {
		var t = new eui.Button();
		this.testmsg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.label = "文字框";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 88;
		t.x = 5.5;
		t.y = 2;
		return t;
	};
	_proto.testattack_i = function () {
		var t = new eui.Button();
		this.testattack = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.label = "攻击";
		t.width = 75;
		t.x = 96;
		t.y = 2;
		return t;
	};
	_proto.testbeattack_i = function () {
		var t = new eui.Button();
		this.testbeattack = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37;
		t.label = "被攻击";
		t.width = 80;
		t.x = 173;
		t.y = 2;
		return t;
	};
	_proto.testskill_i = function () {
		var t = new eui.Button();
		this.testskill = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37;
		t.label = "技能";
		t.width = 90;
		t.x = 256;
		t.y = 2;
		return t;
	};
	_proto.testreset_i = function () {
		var t = new eui.Button();
		this.testreset = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37;
		t.label = "恢复";
		t.width = 85;
		t.x = 348;
		t.y = 2;
		return t;
	};
	return BattleSkin;
})(eui.Skin);generateEUI.paths['resource/skins/MenuSkin.exml'] = window.MenuSkin = (function (_super) {
	__extends(MenuSkin, _super);
	function MenuSkin() {
		_super.call(this);
		this.skinParts = [];
		
	}
	var _proto = MenuSkin.prototype;

	return MenuSkin;
})(eui.Skin);generateEUI.paths['resource/skins/MenuButtonSkin.exml'] = window.MenuButtonSkin = (function (_super) {
	__extends(MenuButtonSkin, _super);
	function MenuButtonSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i()];
		this._Image2_i();
		
		this._Image3_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image3","",1,"")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image3","",1,"")
				])
			,
			new eui.State ("disabled",
				[
					new eui.AddItems("_Image3","",1,"")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.AddItems("_Image2","",1,"")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.AddItems("_Image2","",1,"")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.AddItems("_Image2","",1,"")
				])
		];
	}
	var _proto = MenuButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "btn_shrink_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.scaleX = -1;
		t.source = "btn_shrink";
		t.x = 59;
		t.y = 16;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.source = "btn_shrink";
		t.x = 19;
		t.y = 16;
		return t;
	};
	return MenuButtonSkin;
})(eui.Skin);generateEUI.paths['resource/skins/GuiScreenSkin.exml'] = window.GuiScreenSkin = (function (_super) {
	__extends(GuiScreenSkin, _super);
	function GuiScreenSkin() {
		_super.call(this);
		this.skinParts = ["headDisplay","nameDisplay","levelDisplay","goldDisplay","diamondDisplay","friendBtn","shopBtn","warehouseBtn","factoryBtn","moreBtn","menu","menuBtn"];
		
		this.height = 1000;
		this.width = 650;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this._Rect2_i(),this._Image2_i(),this._Group9_i(),this._Group10_i(),this.menu_i(),this.menuBtn_i()];
	}
	var _proto = GuiScreenSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "table_cloud_top";
		t.y = 150;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xebfff8;
		t.height = 150;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 15466488;
		t.height = 100;
		t.left = 0;
		t.right = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 100;
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "table_cloud_bottom";
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 170;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Group8_i()];
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this.headDisplay_i(),this._Image5_i(),this._Group1_i(),this._Image6_i(),this._Group3_i(),this._Group5_i(),this._Group7_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 78;
		t.source = "icon_name";
		t.width = 218;
		t.x = 140;
		t.y = 9;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "icon_head";
		t.width = 135;
		t.x = 20;
		t.y = 19;
		return t;
	};
	_proto.headDisplay_i = function () {
		var t = new eui.Image();
		this.headDisplay = t;
		t.height = 95;
		t.width = 95;
		t.x = 36;
		t.y = 43;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 83;
		t.source = "icon_LV";
		t.width = 83;
		t.x = 0;
		t.y = -1;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.width = 160;
		t.x = 166;
		t.y = 34;
		t.elementsContent = [this.nameDisplay_i()];
		return t;
	};
	_proto.nameDisplay_i = function () {
		var t = new eui.Label();
		this.nameDisplay = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 21;
		t.text = "_羽";
		t.textColor = 3710089;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "icon_badge";
		t.x = 104;
		t.y = 96;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 164;
		t.y = 96;
		t.elementsContent = [this._Image7_i(),this._Group2_i(),this._Image8_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "icon_line";
		t.x = 17;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.width = 142;
		t.x = 49;
		t.y = 15;
		t.elementsContent = [this.levelDisplay_i()];
		return t;
	};
	_proto.levelDisplay_i = function () {
		var t = new eui.Label();
		this.levelDisplay = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 21;
		t.text = "0/220";
		t.textColor = 3710089;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "icon_experience";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 369;
		t.y = 22;
		t.elementsContent = [this._Image9_i(),this._Group4_i(),this._Image10_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "icon_line";
		t.x = 17;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.width = 142;
		t.x = 49;
		t.y = 15;
		t.elementsContent = [this.goldDisplay_i()];
		return t;
	};
	_proto.goldDisplay_i = function () {
		var t = new eui.Label();
		this.goldDisplay = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 21;
		t.text = "1200";
		t.textColor = 3710089;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "icon_gold";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.x = 394;
		t.y = 96;
		t.elementsContent = [this._Image11_i(),this._Group6_i(),this._Image12_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "icon_line";
		t.x = 17;
		t.y = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.width = 142;
		t.x = 49;
		t.y = 15;
		t.elementsContent = [this.diamondDisplay_i()];
		return t;
	};
	_proto.diamondDisplay_i = function () {
		var t = new eui.BitmapLabel();
		this.diamondDisplay = t;
		t.font = "font_fnt";
		t.horizontalCenter = 0;
		t.text = "99";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "icon_diamond";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 120;
		t.left = 0;
		t.right = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.friendBtn_i(),this.shopBtn_i(),this.warehouseBtn_i(),this.factoryBtn_i(),this.moreBtn_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.friendBtn_i = function () {
		var t = new eui.Image();
		this.friendBtn = t;
		t.source = "icon_friend";
		t.x = 80;
		t.y = 71;
		return t;
	};
	_proto.shopBtn_i = function () {
		var t = new eui.Image();
		this.shopBtn = t;
		t.height = 99;
		t.source = "icon_shop";
		t.width = 114;
		t.x = 112;
		t.y = 53;
		return t;
	};
	_proto.warehouseBtn_i = function () {
		var t = new eui.Image();
		this.warehouseBtn = t;
		t.source = "icon_warehouse";
		t.x = 157;
		t.y = 136;
		return t;
	};
	_proto.factoryBtn_i = function () {
		var t = new eui.Image();
		this.factoryBtn = t;
		t.source = "icon_factory";
		t.x = 110;
		t.y = 148;
		return t;
	};
	_proto.moreBtn_i = function () {
		var t = new eui.Image();
		this.moreBtn = t;
		t.source = "icon_more";
		t.x = 150;
		t.y = 149;
		return t;
	};
	_proto.menu_i = function () {
		var t = new Menu();
		this.menu = t;
		t.skinName = "MenuSkin";
		t.visible = false;
		t.x = 78;
		t.y = 216;
		return t;
	};
	_proto.menuBtn_i = function () {
		var t = new eui.ToggleButton();
		this.menuBtn = t;
		t.label = "切换按钮";
		t.skinName = "MenuButtonSkin";
		t.x = 14;
		t.y = 237;
		return t;
	};
	return GuiScreenSkin;
})(eui.Skin);generateEUI.paths['resource/skins/LoadingUISkin.exml'] = window.LoadingUISkin = (function (_super) {
	__extends(LoadingUISkin, _super);
	function LoadingUISkin() {
		_super.call(this);
		this.skinParts = ["txtMsg"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this.txtMsg_i()];
	}
	var _proto = LoadingUISkin.prototype;

	_proto.txtMsg_i = function () {
		var t = new eui.Label();
		this.txtMsg = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "资源加载中...";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 249;
		return t;
	};
	return LoadingUISkin;
})(eui.Skin);generateEUI.paths['resource/skins/PanelSkin.exml'] = window.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	var PanelSkin$Skin1 = 	(function (_super) {
		__extends(PanelSkin$Skin1, _super);
		function PanelSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_wrong")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_wrong")
					])
			];
		}
		var _proto = PanelSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_wrong";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PanelSkin$Skin1;
	})(eui.Skin);

	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["contentGroup","closeBtn","iconDisplay","button"];
		
		this.elementsContent = [this._Group1_i(),this._Group4_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.fillColor = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 600;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 505;
		t.elementsContent = [this._Group2_i(),this.closeBtn_i(),this._Group3_i(),this.button_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 50;
		t.elementsContent = [this._Rect2_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this.contentGroup_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 16;
		t.fillColor = 0x097993;
		t.top = 16;
		t.width = 480;
		t.x = 11;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.source = "table_box_down";
		t.x = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "table_box_up";
		t.top = 0;
		t.x = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 93;
		t.source = "table_box_middle";
		t.top = 46;
		t.x = 0;
		return t;
	};
	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.bottom = 40;
		t.left = 30;
		t.right = 30;
		t.top = 40;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.x = 452;
		t.y = 28;
		t.skinName = PanelSkin$Skin1;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.top = 0;
		t.elementsContent = [this._Image4_i(),this.iconDisplay_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "table_bg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.source = "table_activity";
		t.verticalCenter = 0;
		return t;
	};
	_proto.button_i = function () {
		var t = new eui.Image();
		this.button = t;
		t.horizontalCenter = 0;
		t.y = 552;
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/SaleItemSkin.exml'] = window.SaleItemSkin = (function (_super) {
	__extends(SaleItemSkin, _super);
	function SaleItemSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","iconDisplay","priceDisplay","timeDisplay"];
		
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.iconDisplay_i(),this._Image2_i(),this.priceDisplay_i(),this._Image3_i(),this.timeDisplay_i()];
	}
	var _proto = SaleItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "card_bg";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 34;
		t.width = 137;
		t.x = 22;
		t.y = 12;
		t.elementsContent = [this.titleDisplay_i()];
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 21;
		t.text = "普通化肥";
		t.textColor = 16777215;
		t.verticalCenter = 0;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.source = "icon_fertilizer02";
		t.verticalCenter = 5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "icon_diamond";
		t.width = 60;
		t.x = 123;
		t.y = 56;
		return t;
	};
	_proto.priceDisplay_i = function () {
		var t = new eui.Label();
		this.priceDisplay = t;
		t.bold = true;
		t.size = 20;
		t.text = "3";
		t.textColor = 3710089;
		t.x = 151;
		t.y = 57;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "icon_02";
		t.x = 8;
		t.y = 134;
		return t;
	};
	_proto.timeDisplay_i = function () {
		var t = new eui.Label();
		this.timeDisplay = t;
		t.bold = true;
		t.size = 20;
		t.text = "-10分钟";
		t.textColor = 3710089;
		t.x = 47;
		t.y = 144;
		return t;
	};
	return SaleItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/TabBarButtonSkin.exml'] = window.TabBarButtonSkin = (function (_super) {
	__extends(TabBarButtonSkin, _super);
	function TabBarButtonSkin() {
		_super.call(this);
		this.skinParts = ["iconDisplaySelected","iconDisplay"];
		
		this.elementsContent = [];
		this._Image1_i();
		
		this.iconDisplaySelected_i();
		
		this._Image2_i();
		
		this.iconDisplay_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.AddItems("iconDisplaySelected","",1,"")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.AddItems("iconDisplaySelected","",1,"")
				])
			,
			new eui.State ("disabled",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.AddItems("iconDisplaySelected","",1,"")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.AddItems("_Image2","",1,""),
					new eui.AddItems("iconDisplay","",1,"")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.AddItems("_Image2","",1,""),
					new eui.AddItems("iconDisplay","",1,"")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.AddItems("_Image2","",1,""),
					new eui.AddItems("iconDisplay","",1,"")
				])
		];
	}
	var _proto = TabBarButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "tabBar_down";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.iconDisplaySelected_i = function () {
		var t = new eui.Image();
		this.iconDisplaySelected = t;
		t.source = "text_fertilizer01";
		t.x = 18;
		t.y = 7;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.source = "tabBar_selected_down";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.source = "text_fertilizer02";
		t.x = 18;
		t.y = 10;
		return t;
	};
	return TabBarButtonSkin;
})(eui.Skin);generateEUI.paths['resource/skins/TabBarSkin.exml'] = window.TabBarSkin = (function (_super) {
	__extends(TabBarSkin, _super);
	function TabBarSkin() {
		_super.call(this);
		this.skinParts = ["tabBar","viewStack"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = TabBarSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.tabBar_i(),this._Image1_i(),this._Scroller1_i()];
		return t;
	};
	_proto.tabBar_i = function () {
		var t = new eui.TabBar();
		this.tabBar = t;
		t.left = 10;
		t.top = 5;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 5;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "sto_table_tittle";
		t.x = 0;
		t.y = 50;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 385;
		t.left = 25;
		t.right = 25;
		t.top = 85;
		t.viewport = this.viewStack_i();
		return t;
	};
	_proto.viewStack_i = function () {
		var t = new eui.ViewStack();
		this.viewStack = t;
		return t;
	};
	return TabBarSkin;
})(eui.Skin);generateEUI.paths['resource/skins/TaskItemRendererSkin.exml'] = window.TaskItemRendererSkin = (function (_super) {
	__extends(TaskItemRendererSkin, _super);
	function TaskItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay","goldDisplay","seedDisplay","progressDisplay"];
		
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.iconDisplay_i(),this._Image2_i(),this._Image3_i(),this.goldDisplay_i(),this.seedDisplay_i(),this.progressDisplay_i()];
	}
	var _proto = TaskItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "task_bg";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 39;
		t.width = 204;
		t.x = 80;
		t.y = 4;
		t.elementsContent = [this.labelDisplay_i()];
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.horizontalCenter = 1.5;
		t.size = 21;
		t.text = "标签";
		t.textColor = 5918538;
		t.verticalCenter = 1;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.source = "icon_experience";
		t.verticalCenter = 0.5;
		t.x = 13;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 26;
		t.source = "icon_experience";
		t.verticalCenter = 20.5;
		t.width = 26;
		t.x = 205;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.source = "icon_gold";
		t.width = 25;
		t.x = 81;
		t.y = 50;
		return t;
	};
	_proto.goldDisplay_i = function () {
		var t = new eui.Label();
		this.goldDisplay = t;
		t.bold = true;
		t.fontFamily = "SimSun";
		t.size = 20;
		t.text = "+100";
		t.textColor = 5918538;
		t.x = 109;
		t.y = 50;
		return t;
	};
	_proto.seedDisplay_i = function () {
		var t = new eui.Label();
		this.seedDisplay = t;
		t.bold = true;
		t.fontFamily = "SimSun";
		t.size = 20;
		t.text = "+100";
		t.textColor = 5918538;
		t.x = 233;
		t.y = 50;
		return t;
	};
	_proto.progressDisplay_i = function () {
		var t = new eui.Label();
		this.progressDisplay = t;
		t.bold = true;
		t.fontFamily = "SimSun";
		t.horizontalCenter = 139;
		t.size = 20;
		t.text = "0/5";
		t.textColor = 5918538;
		t.verticalCenter = 0;
		return t;
	};
	return TaskItemRendererSkin;
})(eui.Skin);