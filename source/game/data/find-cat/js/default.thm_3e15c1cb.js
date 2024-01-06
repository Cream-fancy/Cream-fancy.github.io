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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 12;
		t.ellipseWidth = 12;
		t.fillColor = 0x018db1;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/component/mySrc.exml'] = window.mySrc = (function (_super) {
	__extends(mySrc, _super);
	function mySrc() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = mySrc.prototype;

	return mySrc;
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
		this.skinParts = ["track","trackHighlight","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.trackHighlight_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 88;
		t.source = "";
		t.verticalCenter = 3.5;
		t.percentWidth = 100;
		return t;
	};
	_proto.trackHighlight_i = function () {
		var t = new eui.Group();
		this.trackHighlight = t;
		t.anchorOffsetX = 0;
		t.height = 92;
		t.scrollEnabled = true;
		t.width = 30;
		t.x = 9;
		t.y = 9;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = -1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.y = -1;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "";
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
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
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
		t.fontFamily = "Tahoma";
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/AboutView/AboutViewSkin.exml'] = window.AboutViewSkin = (function (_super) {
	__extends(AboutViewSkin, _super);
	function AboutViewSkin() {
		_super.call(this);
		this.skinParts = ["backBtn","backText","txt1","txt2","txt3"];
		
		this.height = 2300;
		this.width = 1440;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = AboutViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 200;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.backBtn_i(),this.backText_i(),this.txt1_i(),this.txt2_i(),this.txt3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "about1_png";
		t.x = -248;
		t.y = -556.6700000000001;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "about2_png";
		t.visible = false;
		t.x = -36;
		t.y = -696.27;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Image();
		this.backBtn = t;
		t.anchorOffsetY = 0;
		t.height = 91.34;
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "jiantou_png";
		t.x = -290.73;
		t.y = 905.8499999999999;
		return t;
	};
	_proto.backText_i = function () {
		var t = new eui.Label();
		this.backText = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 70;
		t.stroke = 3;
		t.strokeColor = 0x0f353b;
		t.text = "返回";
		t.x = -248;
		t.y = 916.52;
		return t;
	};
	_proto.txt1_i = function () {
		var t = new eui.Label();
		this.txt1 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 60;
		t.text = "《天天躲猫猫》是我们的第一个作品,乐信游戏位于深圳宝安";
		t.textColor = 0x32667f;
		t.visible = false;
		t.width = 803;
		t.x = -301;
		t.y = 10;
		return t;
	};
	_proto.txt2_i = function () {
		var t = new eui.Label();
		this.txt2 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 60;
		t.text = "发行:深圳市火星网络有限公司";
		t.textAlign = "left";
		t.textColor = 0x32667f;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 868.48;
		t.x = -323;
		t.y = 484;
		return t;
	};
	_proto.txt3_i = function () {
		var t = new eui.Label();
		this.txt3 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 60;
		t.text = "乐人互娱";
		t.textAlign = "left";
		t.textColor = 0x32667F;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 868.48;
		t.x = -185;
		t.y = 573;
		return t;
	};
	return AboutViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/AchievementView/AchievementItemSkin.exml'] = window.AchievementItemSkin = (function (_super) {
	__extends(AchievementItemSkin, _super);
	function AchievementItemSkin() {
		_super.call(this);
		this.skinParts = ["imgIcon","imgIden","imgNew","lbNum"];
		
		this.height = 326;
		this.width = 249;
		this.elementsContent = [this._Image1_i(),this.imgIcon_i(),this.imgIden_i(),this._Label1_i(),this.imgNew_i(),this.lbNum_i()];
	}
	var _proto = AchievementItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 113;
		t.horizontalCenter = 0;
		t.scaleX = 2.5;
		t.scaleY = 2.5;
		t.source = "shoujikuang_png";
		t.verticalCenter = 0;
		t.width = 90;
		return t;
	};
	_proto.imgIcon_i = function () {
		var t = new eui.Image();
		this.imgIcon = t;
		t.height = 434;
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "";
		t.verticalCenter = -26;
		t.width = 370;
		return t;
	};
	_proto.imgIden_i = function () {
		var t = new eui.Image();
		this.imgIden = t;
		t.height = 113;
		t.horizontalCenter = 0;
		t.scaleX = 2.5;
		t.scaleY = 2.5;
		t.source = "morenSmall";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 90;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 30;
		t.text = "15";
		t.verticalCenter = 111;
		t.visible = false;
		return t;
	};
	_proto.imgNew_i = function () {
		var t = new eui.Image();
		this.imgNew = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "new_png";
		t.visible = false;
		t.x = 146.5;
		t.y = 5.5;
		return t;
	};
	_proto.lbNum_i = function () {
		var t = new eui.BitmapLabel();
		this.lbNum = t;
		t.font = "az_fnt";
		t.horizontalCenter = 0.5;
		t.text = "15";
		t.verticalCenter = 106;
		return t;
	};
	return AchievementItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/CommonView/CommonScrollerViewSkin.exml'] = window.CommonScrollerViewSkin = (function (_super) {
	__extends(CommonScrollerViewSkin, _super);
	function CommonScrollerViewSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 2;
		this.width = 2;
	}
	var _proto = CommonScrollerViewSkin.prototype;

	return CommonScrollerViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/AchievementView/AchievementViewSkin.exml'] = window.AchievementViewSkin = (function (_super) {
	__extends(AchievementViewSkin, _super);
	function AchievementViewSkin() {
		_super.call(this);
		this.skinParts = ["txt1","dgActive","backBtn","backText","img_cj1","img_cj2","lbDoneCount","imgIden","imgClose1","imgClose2","lbIntrox","lbIntro","bBack","groupIntro"];
		
		this.height = 2300;
		this.width = 1440;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = AchievementViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 200;
		t.elementsContent = [this._Label1_i(),this.txt1_i(),this._Scroller1_i(),this.backBtn_i(),this.backText_i(),this._Label2_i(),this._BitmapLabel1_i(),this.img_cj1_i(),this.img_cj2_i(),this.lbDoneCount_i(),this.groupIntro_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 60;
		t.text = "成就";
		t.textColor = 0x32667f;
		t.visible = false;
		t.x = 41;
		t.y = -664;
		return t;
	};
	_proto.txt1_i = function () {
		var t = new eui.BitmapLabel();
		this.txt1 = t;
		t.font = "az_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "AchiV";
		t.y = -670;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1413.91;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollPolicyH = "off";
		t.skinName = "CommonScrollerViewSkin";
		t.width = 1024;
		t.x = -412;
		t.y = -594.91;
		t.viewport = this.dgActive_i();
		return t;
	};
	_proto.dgActive_i = function () {
		var t = new eui.DataGroup();
		this.dgActive = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1533;
		t.itemRendererSkinName = AchievementItemSkin;
		t.width = 1024;
		t.x = -1;
		t.y = -1;
		t.layout = this._TileLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.verticalGap = 20;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i(),this._Object6_i(),this._Object7_i(),this._Object8_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Image();
		this.backBtn = t;
		t.anchorOffsetY = 0;
		t.height = 91.34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jiantou_png";
		t.x = 542;
		t.y = 905.8499999999999;
		return t;
	};
	_proto.backText_i = function () {
		var t = new eui.Image();
		this.backText = t;
		t.anchorOffsetY = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "Back2_png";
		t.x = 318;
		t.y = 905.85;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 70;
		t.stroke = 3;
		t.strokeColor = 0x0f353b;
		t.text = "返回";
		t.visible = false;
		t.x = 378;
		t.y = 916.52;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "az_fnt";
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "Back";
		t.visible = false;
		t.x = 350;
		t.y = 916;
		return t;
	};
	_proto.img_cj1_i = function () {
		var t = new eui.Image();
		this.img_cj1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "achiveNum_png";
		t.x = -313;
		t.y = 896.02;
		return t;
	};
	_proto.img_cj2_i = function () {
		var t = new eui.Image();
		this.img_cj2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chengjiushuX_png";
		t.x = -141;
		t.y = 924;
		return t;
	};
	_proto.lbDoneCount_i = function () {
		var t = new eui.BitmapLabel();
		this.lbDoneCount = t;
		t.anchorOffsetX = 0;
		t.font = "white_fnt";
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "20";
		t.width = 176;
		t.x = -44;
		t.y = 901.52;
		return t;
	};
	_proto.groupIntro_i = function () {
		var t = new eui.Group();
		this.groupIntro = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this.imgIden_i(),this.imgClose1_i(),this.imgClose2_i(),this.lbIntrox_i(),this.lbIntro_i(),this.bBack_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.height = 3082.67;
		t.horizontalCenter = 0;
		t.verticalCenter = 346;
		t.width = 1440;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1136;
		t.horizontalCenter = 0;
		t.source = "shoujikuang_png";
		t.verticalCenter = 0;
		t.width = 906;
		return t;
	};
	_proto.imgIden_i = function () {
		var t = new eui.Image();
		this.imgIden = t;
		t.height = 434;
		t.horizontalCenter = 0;
		t.scaleX = 2.1;
		t.scaleY = 2.1;
		t.source = "moren_png";
		t.verticalCenter = -105;
		t.width = 370;
		return t;
	};
	_proto.imgClose1_i = function () {
		var t = new eui.Image();
		this.imgClose1 = t;
		t.source = "ok_png";
		t.x = -22.5;
		t.y = 712.39;
		return t;
	};
	_proto.imgClose2_i = function () {
		var t = new eui.Label();
		this.imgClose2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 60;
		t.text = "确定";
		t.textColor = 0x133535;
		t.visible = false;
		t.x = 36;
		t.y = 754.89;
		return t;
	};
	_proto.lbIntrox_i = function () {
		var t = new eui.Label();
		this.lbIntrox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 135;
		t.size = 60;
		t.stroke = 5;
		t.strokeColor = 0x0f353b;
		t.text = "22";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 795.58;
		t.x = -295;
		t.y = 476.67;
		return t;
	};
	_proto.lbIntro_i = function () {
		var t = new eui.BitmapLabel();
		this.lbIntro = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "az_fnt";
		t.horizontalCenter = 5.5;
		t.scaleX = 1.8;
		t.scaleY = 1.8;
		t.text = "break";
		t.verticalCenter = 449;
		t.width = 400;
		return t;
	};
	_proto.bBack_i = function () {
		var t = new eui.BitmapLabel();
		this.bBack = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "az_fnt";
		t.height = 37.71;
		t.scaleX = 1.8;
		t.scaleY = 1.8;
		t.text = "Back";
		t.width = 93.51;
		t.x = 15;
		t.y = 747.52;
		return t;
	};
	return AchievementViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/ChapterView/ChapterItemViewSkin.exml'] = window.ChapterItemViewSkin = (function (_super) {
	__extends(ChapterItemViewSkin, _super);
	function ChapterItemViewSkin() {
		_super.call(this);
		this.skinParts = ["imgBg","numTxt","imgState"];
		
		this.currentState = "up";
		this.height = 188;
		this.width = 175;
		this.elementsContent = [this.imgBg_i(),this.numTxt_i(),this._Rect1_i(),this.imgState_i()];
		this.states = [
			new eui.State ("down",
				[
					new eui.SetProperty("numTxt","font","blue_fnt")
				])
			,
			new eui.State ("up",
				[
					new eui.SetProperty("imgBg","visible",false)
				])
		];
	}
	var _proto = ChapterItemViewSkin.prototype;

	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "xuanzhong_png";
		t.top = 0;
		return t;
	};
	_proto.numTxt_i = function () {
		var t = new eui.BitmapLabel();
		this.numTxt = t;
		t.font = "grey_fnt";
		t.horizontalCenter = 0;
		t.text = "1";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 5;
		t.fillAlpha = 0;
		t.left = 0;
		t.right = 5;
		t.top = 0;
		return t;
	};
	_proto.imgState_i = function () {
		var t = new eui.Image();
		this.imgState = t;
		t.height = 60;
		t.source = "gou_png";
		t.width = 60;
		t.x = 65;
		t.y = 116;
		return t;
	};
	return ChapterItemViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/ChapterView/ChapterOneViewSkin.exml'] = window.ChapterOneViewSkin = (function (_super) {
	__extends(ChapterOneViewSkin, _super);
	function ChapterOneViewSkin() {
		_super.call(this);
		this.skinParts = ["rightImg","backBtn","backText","_bottomGp","lvGroup","levelNum"];
		
		this.height = 2300;
		this.width = 1440;
		this.elementsContent = [this._Group2_i(),this.levelNum_i()];
	}
	var _proto = ChapterOneViewSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 200;
		t.elementsContent = [this._Image1_i(),this._bottomGp_i(),this.lvGroup_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "check_select_png";
		t.x = -155;
		t.y = -660;
		return t;
	};
	_proto._bottomGp_i = function () {
		var t = new eui.Group();
		this._bottomGp = t;
		t.x = -433.18;
		t.y = 635;
		t.elementsContent = [this._Group1_i(),this.backBtn_i(),this.backText_i(),this._Label1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 474;
		t.width = 484;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this.rightImg_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 157.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yinzi_png";
		t.width = 284;
		t.x = 99.38;
		t.y = 226;
		return t;
	};
	_proto.rightImg_i = function () {
		var t = new eui.Image();
		this.rightImg = t;
		t.horizontalCenter = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Image();
		this.backBtn = t;
		t.anchorOffsetY = 0;
		t.height = 91.34;
		t.rotation = 180;
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "jiantou_png";
		t.x = 926.21;
		t.y = 312;
		return t;
	};
	_proto.backText_i = function () {
		var t = new eui.Image();
		this.backText = t;
		t.anchorOffsetY = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "Back2_png";
		t.x = 703;
		t.y = 217.85;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 70;
		t.text = "返回";
		t.visible = false;
		t.x = 778.76;
		t.y = 230.52;
		return t;
	};
	_proto.lvGroup_i = function () {
		var t = new eui.DataGroup();
		this.lvGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1183.39;
		t.horizontalCenter = 2.5;
		t.itemRendererSkinName = ChapterItemViewSkin;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 954.79;
		t.x = -375.00000000000006;
		t.y = -478.66;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 81;
		t.verticalGap = 69;
		return t;
	};
	_proto.levelNum_i = function () {
		var t = new eui.BitmapLabel();
		this.levelNum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "az_fnt";
		t.height = 42.64;
		t.horizontalCenter = 2;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "10/20";
		t.width = 118.48;
		t.y = 509.7;
		return t;
	};
	return ChapterOneViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/ChapterView/ChapterTwoViewSkin.exml'] = window.ChapterTwoViewSkin = (function (_super) {
	__extends(ChapterTwoViewSkin, _super);
	function ChapterTwoViewSkin() {
		_super.call(this);
		this.skinParts = ["backBtn","backText","_bottomGp","lvGroup","levelNum"];
		
		this.height = 2920;
		this.width = 1080;
		this.elementsContent = [this._Group1_i(),this.levelNum_i()];
	}
	var _proto = ChapterTwoViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 200;
		t.elementsContent = [this._Image1_i(),this._bottomGp_i(),this.lvGroup_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "check_select_png";
		t.x = -155;
		t.y = -660;
		return t;
	};
	_proto._bottomGp_i = function () {
		var t = new eui.Group();
		this._bottomGp = t;
		t.x = -370;
		t.y = 797.84;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.backBtn_i(),this.backText_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 157.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yinzi_png";
		t.width = 284;
		t.x = 0;
		t.y = 103.16;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "21_png";
		t.x = 33.08;
		t.y = 0;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Image();
		this.backBtn = t;
		t.anchorOffsetY = 0;
		t.height = 91.34;
		t.rotation = 180;
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "jiantou_png";
		t.x = 863.03;
		t.y = 146.13;
		return t;
	};
	_proto.backText_i = function () {
		var t = new eui.Image();
		this.backText = t;
		t.anchorOffsetY = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "Back2_png";
		t.x = 637;
		t.y = 52.01;
		return t;
	};
	_proto.lvGroup_i = function () {
		var t = new eui.DataGroup();
		this.lvGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1183.39;
		t.horizontalCenter = 2.5;
		t.itemRendererSkinName = ChapterItemViewSkin;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 954.79;
		t.x = -375.00000000000006;
		t.y = -478.66;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 81;
		t.verticalGap = 69;
		return t;
	};
	_proto.levelNum_i = function () {
		var t = new eui.BitmapLabel();
		this.levelNum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "az_fnt";
		t.height = 42.64;
		t.horizontalCenter = -3;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "10/20";
		t.width = 118.48;
		t.y = 817.38;
		return t;
	};
	return ChapterTwoViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/CommonAwardView/CommonAwardViewSkin.exml'] = window.CommonAwardViewSkin = (function (_super) {
	__extends(CommonAwardViewSkin, _super);
	var CommonAwardViewSkin$Skin1 = 	(function (_super) {
		__extends(CommonAwardViewSkin$Skin1, _super);
		function CommonAwardViewSkin$Skin1() {
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
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CommonAwardViewSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "NO_png";
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
		return CommonAwardViewSkin$Skin1;
	})(eui.Skin);

	function CommonAwardViewSkin() {
		_super.call(this);
		this.skinParts = ["Dialogbg0","mTips","mBtn","mBtnLabel","GSingleBtn0","mPropIcon1","mPropNum1","prop1Root","mPropIcon2","mPropNum2","prop2Root","GBoxTips"];
		
		this.height = 2330;
		this.width = 1440;
		this.elementsContent = [this.GBoxTips_i()];
	}
	var _proto = CommonAwardViewSkin.prototype;

	_proto.GBoxTips_i = function () {
		var t = new eui.Group();
		this.GBoxTips = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1080;
		t.elementsContent = [this._Rect1_i(),this.Dialogbg0_i(),this.mTips_i(),this.GSingleBtn0_i(),this.prop1Root_i(),this.prop2Root_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.height = 3057.12;
		t.horizontalCenter = 0;
		t.touchEnabled = true;
		t.verticalCenter = 310;
		t.width = 1440;
		return t;
	};
	_proto.Dialogbg0_i = function () {
		var t = new eui.Image();
		this.Dialogbg0 = t;
		t.height = 434;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "stop_png";
		t.width = 450;
		t.x = 84;
		t.y = 520;
		return t;
	};
	_proto.mTips_i = function () {
		var t = new eui.Image();
		this.mTips = t;
		t.horizontalCenter = 0.5;
		t.source = "Congratulations_png";
		t.y = 616;
		return t;
	};
	_proto.GSingleBtn0_i = function () {
		var t = new eui.Group();
		this.GSingleBtn0 = t;
		t.height = 140;
		t.width = 566;
		t.x = 245;
		t.y = 1209.53;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this.mBtn_i(),this._Label1_i(),this.mBtnLabel_i()];
		return t;
	};
	_proto.mBtn_i = function () {
		var t = new eui.Button();
		this.mBtn = t;
		t.x = 0;
		t.y = 0;
		t.skinName = CommonAwardViewSkin$Skin1;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "方正粗圆简体";
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "确 定";
		t.textAlign = "center";
		t.textColor = 0x1A3D42;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 200;
		return t;
	};
	_proto.mBtnLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.mBtnLabel = t;
		t.font = "az_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "ok";
		t.touchEnabled = false;
		t.verticalCenter = -4;
		return t;
	};
	_proto.prop1Root_i = function () {
		var t = new eui.Group();
		this.prop1Root = t;
		t.height = 200;
		t.width = 200;
		t.x = 248;
		t.y = 740;
		t.elementsContent = [this._Label2_i(),this.mPropIcon1_i(),this.mPropNum1_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 76;
		t.text = "x50";
		t.textColor = 0x492907;
		t.visible = false;
		t.x = 308;
		t.y = 82;
		return t;
	};
	_proto.mPropIcon1_i = function () {
		var t = new eui.Image();
		this.mPropIcon1 = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "jinb-icon_png";
		t.x = 149;
		t.y = 60;
		return t;
	};
	_proto.mPropNum1_i = function () {
		var t = new eui.BitmapLabel();
		this.mPropNum1 = t;
		t.font = "az_fnt";
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "x50";
		t.x = 288;
		t.y = 81;
		return t;
	};
	_proto.prop2Root_i = function () {
		var t = new eui.Group();
		this.prop2Root = t;
		t.height = 200;
		t.width = 200;
		t.x = 248;
		t.y = 895;
		t.elementsContent = [this._Label3_i(),this.mPropIcon2_i(),this.mPropNum2_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 76;
		t.text = "x50";
		t.textColor = 0x492907;
		t.visible = false;
		t.x = 308;
		t.y = 82;
		return t;
	};
	_proto.mPropIcon2_i = function () {
		var t = new eui.Image();
		this.mPropIcon2 = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "til-icon_png";
		t.x = 149;
		t.y = 60;
		return t;
	};
	_proto.mPropNum2_i = function () {
		var t = new eui.BitmapLabel();
		this.mPropNum2 = t;
		t.font = "az_fnt";
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "x50";
		t.x = 288;
		t.y = 81;
		return t;
	};
	return CommonAwardViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/CommonView/CommonNetLoadingViewSkin.exml'] = window.CommonNetLoadingViewSkin = (function (_super) {
	__extends(CommonNetLoadingViewSkin, _super);
	function CommonNetLoadingViewSkin() {
		_super.call(this);
		this.skinParts = ["NetLoadImage","GNetLoad"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this.GNetLoad_i()];
	}
	var _proto = CommonNetLoadingViewSkin.prototype;

	_proto.GNetLoad_i = function () {
		var t = new eui.Group();
		this.GNetLoad = t;
		t.height = 582;
		t.visible = false;
		t.width = 832;
		t.x = 576;
		t.y = 278;
		t.elementsContent = [this.NetLoadImage_i(),this._Label1_i()];
		return t;
	};
	_proto.NetLoadImage_i = function () {
		var t = new eui.Image();
		this.NetLoadImage = t;
		t.anchorOffsetX = 59;
		t.anchorOffsetY = 59;
		t.height = 118;
		t.source = "";
		t.width = 118;
		t.x = 406;
		t.y = 294;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "方正粗圆简体";
		t.height = 78;
		t.size = 32;
		t.text = "正在加载...";
		t.textAlign = "center";
		t.textColor = 0xF9F9FB;
		t.verticalAlign = "middle";
		t.width = 544;
		t.x = 142;
		t.y = 355;
		return t;
	};
	return CommonNetLoadingViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/CommonView/CommonViewSkin.exml'] = window.CommonViewSkin = (function (_super) {
	__extends(CommonViewSkin, _super);
	var CommonViewSkin$Skin2 = 	(function (_super) {
		__extends(CommonViewSkin$Skin2, _super);
		function CommonViewSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay0"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay0_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CommonViewSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "ok_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay0_i = function () {
			var t = new eui.Label();
			this.labelDisplay0 = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CommonViewSkin$Skin2;
	})(eui.Skin);

	var CommonViewSkin$Skin3 = 	(function (_super) {
		__extends(CommonViewSkin$Skin3, _super);
		function CommonViewSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay2"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CommonViewSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "NO_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay2_i = function () {
			var t = new eui.Label();
			this.labelDisplay2 = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CommonViewSkin$Skin3;
	})(eui.Skin);

	var CommonViewSkin$Skin4 = 	(function (_super) {
		__extends(CommonViewSkin$Skin4, _super);
		function CommonViewSkin$Skin4() {
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
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CommonViewSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "NO_png";
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
		return CommonViewSkin$Skin4;
	})(eui.Skin);

	function CommonViewSkin() {
		_super.call(this);
		this.skinParts = ["Dialogbg","BoxTipsContent","SelectCancleBtn","SelectCancleLab","SelectSureBtn","SelectSureLab","SelectSureImg","GSelectBtns","SingleSureBtn","SingleSureLab","GSingleBtn","GBoxTips","SimpleTipsContent","GSimpleTips"];
		
		this.height = 2300;
		this.width = 1440;
		this.elementsContent = [this.GBoxTips_i(),this.GSimpleTips_i()];
	}
	var _proto = CommonViewSkin.prototype;

	_proto.GBoxTips_i = function () {
		var t = new eui.Group();
		this.GBoxTips = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1080;
		t.elementsContent = [this._Rect1_i(),this.Dialogbg_i(),this._Label1_i(),this.BoxTipsContent_i(),this.GSelectBtns_i(),this.GSingleBtn_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.height = 3124.12;
		t.horizontalCenter = 0;
		t.touchEnabled = true;
		t.verticalCenter = 329;
		t.width = 1440;
		return t;
	};
	_proto.Dialogbg_i = function () {
		var t = new eui.Image();
		this.Dialogbg = t;
		t.height = 881;
		t.source = "stop_png";
		t.width = 913;
		t.x = 84;
		t.y = 520;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "方正粗圆简体";
		t.height = 346;
		t.size = 80;
		t.text = "当前余额不足,请充值~";
		t.textAlign = "center";
		t.textColor = 0x313131;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 716;
		t.x = 182;
		t.y = 703;
		return t;
	};
	_proto.BoxTipsContent_i = function () {
		var t = new eui.BitmapLabel();
		this.BoxTipsContent = t;
		t.font = "az_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "abcdabcdabcdababcd";
		t.verticalCenter = -99;
		t.width = 364;
		return t;
	};
	_proto.GSelectBtns_i = function () {
		var t = new eui.Group();
		this.GSelectBtns = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154;
		t.width = 612;
		t.x = 234;
		t.y = 1199;
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = -40.33;
		t.elementsContent = [this.SelectCancleBtn_i(),this._Label2_i(),this.SelectCancleLab_i()];
		return t;
	};
	_proto.SelectCancleBtn_i = function () {
		var t = new eui.Button();
		this.SelectCancleBtn = t;
		t.width = 299;
		t.x = 0;
		t.y = 0;
		t.skinName = CommonViewSkin$Skin2;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "方正粗圆简体";
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "取 消";
		t.textAlign = "center";
		t.textColor = 0x1a3d42;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 200;
		return t;
	};
	_proto.SelectCancleLab_i = function () {
		var t = new eui.BitmapLabel();
		this.SelectCancleLab = t;
		t.font = "az_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "close";
		t.touchEnabled = false;
		t.y = 33;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 360.39;
		t.elementsContent = [this.SelectSureBtn_i(),this._Label3_i(),this.SelectSureLab_i(),this.SelectSureImg_i()];
		return t;
	};
	_proto.SelectSureBtn_i = function () {
		var t = new eui.Button();
		this.SelectSureBtn = t;
		t.width = 299;
		t.x = 0;
		t.y = 0;
		t.skinName = CommonViewSkin$Skin3;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "方正粗圆简体";
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "确 定";
		t.textAlign = "center";
		t.textColor = 0x1a3d42;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 200;
		return t;
	};
	_proto.SelectSureLab_i = function () {
		var t = new eui.BitmapLabel();
		this.SelectSureLab = t;
		t.font = "az_fnt";
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "ok";
		t.touchEnabled = false;
		t.x = 110;
		t.y = 28.94;
		return t;
	};
	_proto.SelectSureImg_i = function () {
		var t = new eui.Image();
		this.SelectSureImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 87.88;
		t.source = "bofang_png";
		t.width = 88.88;
		t.x = 30.55;
		t.y = 25.03;
		return t;
	};
	_proto.GSingleBtn_i = function () {
		var t = new eui.Group();
		this.GSingleBtn = t;
		t.height = 140;
		t.visible = false;
		t.width = 566;
		t.x = 245;
		t.y = 1209.53;
		t.elementsContent = [this._Group3_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this.SingleSureBtn_i(),this._Label4_i(),this.SingleSureLab_i()];
		return t;
	};
	_proto.SingleSureBtn_i = function () {
		var t = new eui.Button();
		this.SingleSureBtn = t;
		t.x = 0;
		t.y = 0;
		t.skinName = CommonViewSkin$Skin4;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "方正粗圆简体";
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "确 定";
		t.textAlign = "center";
		t.textColor = 0x1a3d42;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 200;
		return t;
	};
	_proto.SingleSureLab_i = function () {
		var t = new eui.BitmapLabel();
		this.SingleSureLab = t;
		t.font = "az_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "ok";
		t.touchEnabled = false;
		t.y = 33;
		return t;
	};
	_proto.GSimpleTips_i = function () {
		var t = new eui.Group();
		this.GSimpleTips = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1080;
		t.elementsContent = [this._Image1_i(),this._Label5_i(),this.SimpleTipsContent_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 102;
		t.scale9Grid = new egret.Rectangle(0,389,913,95);
		t.source = "stop_png";
		t.touchEnabled = false;
		t.width = 926;
		t.x = 80;
		t.y = 903.56;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "方正粗圆简体";
		t.height = 78;
		t.size = 52;
		t.text = "当前余额不足,请充值~";
		t.textAlign = "center";
		t.textColor = 0x313131;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 855;
		t.x = 110;
		t.y = 915.56;
		return t;
	};
	_proto.SimpleTipsContent_i = function () {
		var t = new eui.BitmapLabel();
		this.SimpleTipsContent = t;
		t.font = "az_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "abcd";
		t.touchEnabled = false;
		t.y = 916;
		return t;
	};
	return CommonViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days10ViewSkin.exml'] = window.Days10ViewSkin = (function (_super) {
	__extends(Days10ViewSkin, _super);
	function Days10ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L1","bg_M1","bg_R1","eyesGroup","benUncle","shizhen","fenzhen","zhongBtn","jiantou","tv1","tv2","tv3","tv4","fuhao","binxiang2","binxiang1","guizi2","maobang","guizi1","yaokong","cateyesGroup","leftjiaotou","maoGroup","dun1","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days10ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this.eyesGroup_i(),this._Image7_i(),this.benUncle_i(),this._Image8_i(),this.shizhen_i(),this.fenzhen_i(),this.zhongBtn_i(),this.jiantou_i(),this.tv1_i(),this.tv2_i(),this.tv3_i(),this.tv4_i(),this.fuhao_i(),this.binxiang2_i(),this.binxiang1_i(),this.guizi2_i(),this.maobang_i(),this.guizi1_i(),this.yaokong_i(),this.cateyesGroup_i(),this._Image9_i(),this.leftjiaotou_i(),this.maoGroup_i(),this.dun1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L1_i(),this.bg_M1_i(),this.bg_R1_i()];
		return t;
	};
	_proto.bg_L1_i = function () {
		var t = new eui.Group();
		this.bg_L1 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M1_i = function () {
		var t = new eui.Group();
		this.bg_M1 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R1_i = function () {
		var t = new eui.Group();
		this.bg_R1 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.eyesGroup_i = function () {
		var t = new eui.Group();
		this.eyesGroup = t;
		t.height = 43;
		t.width = 119;
		t.x = 1934.65;
		t.y = 995.31;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "bed_png";
		t.x = 1672.67;
		t.y = 757.79;
		return t;
	};
	_proto.benUncle_i = function () {
		var t = new eui.Image();
		this.benUncle = t;
		t.source = "bedUncle_png";
		t.visible = false;
		t.x = 1853.5;
		t.y = 889.79;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "zhong_png";
		t.x = 1813;
		t.y = 250;
		return t;
	};
	_proto.shizhen_i = function () {
		var t = new eui.Image();
		this.shizhen = t;
		t.anchorOffsetX = 11;
		t.anchorOffsetY = 9.5;
		t.source = "shizhen_png";
		t.x = 1943;
		t.y = 377;
		return t;
	};
	_proto.fenzhen_i = function () {
		var t = new eui.Image();
		this.fenzhen = t;
		t.anchorOffsetX = 6;
		t.anchorOffsetY = 82;
		t.source = "fenzhen_png";
		t.x = 1943;
		t.y = 373.5;
		return t;
	};
	_proto.zhongBtn_i = function () {
		var t = new eui.Image();
		this.zhongBtn = t;
		t.alpha = 0;
		t.source = "zhong_png";
		t.x = 1813;
		t.y = 250;
		return t;
	};
	_proto.jiantou_i = function () {
		var t = new eui.Image();
		this.jiantou = t;
		t.source = "jiantou2_png";
		t.x = 2388;
		t.y = 286;
		return t;
	};
	_proto.tv1_i = function () {
		var t = new eui.Image();
		this.tv1 = t;
		t.source = "tv4_png";
		t.x = 2256;
		t.y = 268;
		return t;
	};
	_proto.tv2_i = function () {
		var t = new eui.Image();
		this.tv2 = t;
		t.source = "tv1_png";
		t.visible = false;
		t.x = 2256;
		t.y = 268;
		return t;
	};
	_proto.tv3_i = function () {
		var t = new eui.Image();
		this.tv3 = t;
		t.source = "tv2_png";
		t.visible = false;
		t.x = 2256;
		t.y = 268;
		return t;
	};
	_proto.tv4_i = function () {
		var t = new eui.Image();
		this.tv4 = t;
		t.source = "tv3_png";
		t.visible = false;
		t.x = 2256;
		t.y = 268;
		return t;
	};
	_proto.fuhao_i = function () {
		var t = new eui.Image();
		this.fuhao = t;
		t.rotation = 90;
		t.scaleX = -1;
		t.source = "jiantou_png";
		t.visible = false;
		t.x = 2428;
		t.y = 374;
		return t;
	};
	_proto.binxiang2_i = function () {
		var t = new eui.Image();
		this.binxiang2 = t;
		t.source = "binxiang2_png";
		t.visible = false;
		t.x = 2342;
		t.y = 714.79;
		return t;
	};
	_proto.binxiang1_i = function () {
		var t = new eui.Image();
		this.binxiang1 = t;
		t.source = "binxiang1_png";
		t.x = 2342;
		t.y = 714.79;
		return t;
	};
	_proto.guizi2_i = function () {
		var t = new eui.Image();
		this.guizi2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "guizi2_png";
		t.visible = false;
		t.x = 3180;
		t.y = 471;
		return t;
	};
	_proto.maobang_i = function () {
		var t = new eui.Image();
		this.maobang = t;
		t.source = "maobang_png";
		t.x = 3316;
		t.y = 1062.31;
		return t;
	};
	_proto.guizi1_i = function () {
		var t = new eui.Image();
		this.guizi1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "guizi1_png";
		t.x = 3180;
		t.y = 471;
		return t;
	};
	_proto.yaokong_i = function () {
		var t = new eui.Image();
		this.yaokong = t;
		t.source = "yaokongqi1_png";
		t.x = 3364;
		t.y = 728;
		return t;
	};
	_proto.cateyesGroup_i = function () {
		var t = new eui.Group();
		this.cateyesGroup = t;
		t.height = 40;
		t.width = 58;
		t.x = 745;
		t.y = 1267;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "saifa1_png";
		t.x = 498.75;
		t.y = 996.83;
		return t;
	};
	_proto.leftjiaotou_i = function () {
		var t = new eui.Rect();
		this.leftjiaotou = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 162;
		t.width = 135;
		t.x = 1620;
		t.y = 1088;
		return t;
	};
	_proto.maoGroup_i = function () {
		var t = new eui.Group();
		this.maoGroup = t;
		t.height = 128;
		t.visible = false;
		t.width = 164;
		t.x = 706.63;
		t.y = 1223.28;
		return t;
	};
	_proto.dun1_i = function () {
		var t = new eui.Image();
		this.dun1 = t;
		t.scaleX = -1;
		t.source = "dun1_png";
		t.visible = false;
		t.x = 822.72;
		t.y = 1045.5;
		return t;
	};
	return Days10ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days11ViewSkin.exml'] = window.Days11ViewSkin = (function (_super) {
	__extends(Days11ViewSkin, _super);
	function Days11ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L0","bg_M0","bg_R0","mLiefeng1","mLiefeng2","mHammer2","mYiguiOpen","mMogu4","mMogu1","mHammer","mYiguiClose","catsleep","mCat","mGirl","mVariation0","mVariation1","mVariation2","mVariation3","mVariationRoot","mGirlRoot","mMogu2Img","mMogu3Btn","guizi1","mMogu2Btn","guizi2","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days11ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.width = 4320;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this.mLiefeng1_i(),this.mLiefeng2_i(),this.mHammer2_i(),this.mYiguiOpen_i(),this.mMogu4_i(),this.mMogu1_i(),this.mHammer_i(),this.mYiguiClose_i(),this.catsleep_i(),this.mCat_i(),this.mGirlRoot_i(),this.mMogu2Img_i(),this.mMogu3Btn_i(),this.guizi1_i(),this.mMogu2Btn_i(),this.guizi2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L0_i(),this.bg_M0_i(),this.bg_R0_i()];
		return t;
	};
	_proto.bg_L0_i = function () {
		var t = new eui.Group();
		this.bg_L0 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M0_i = function () {
		var t = new eui.Group();
		this.bg_M0 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R0_i = function () {
		var t = new eui.Group();
		this.bg_R0 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.mLiefeng1_i = function () {
		var t = new eui.Image();
		this.mLiefeng1 = t;
		t.source = "liefen1_png";
		t.x = 1805.09;
		t.y = 537.9;
		return t;
	};
	_proto.mLiefeng2_i = function () {
		var t = new eui.Image();
		this.mLiefeng2 = t;
		t.source = "liefen2_png";
		t.visible = false;
		t.x = 1815.09;
		t.y = 547.9;
		return t;
	};
	_proto.mHammer2_i = function () {
		var t = new eui.Image();
		this.mHammer2 = t;
		t.source = "chuizi_png";
		t.visible = false;
		t.x = 1725.06;
		t.y = 561.46;
		return t;
	};
	_proto.mYiguiOpen_i = function () {
		var t = new eui.Image();
		this.mYiguiOpen = t;
		t.source = "yigui2_png";
		t.visible = false;
		t.x = 2095.55;
		t.y = 363.94;
		return t;
	};
	_proto.mMogu4_i = function () {
		var t = new eui.Image();
		this.mMogu4 = t;
		t.source = "poisoning_1_png";
		t.x = 2447.48;
		t.y = 224;
		return t;
	};
	_proto.mMogu1_i = function () {
		var t = new eui.Image();
		this.mMogu1 = t;
		t.source = "mogu_1_png";
		t.visible = false;
		t.x = 1856;
		t.y = 626;
		return t;
	};
	_proto.mHammer_i = function () {
		var t = new eui.Image();
		this.mHammer = t;
		t.source = "chuizi_png";
		t.x = 2314.06;
		t.y = 833.46;
		return t;
	};
	_proto.mYiguiClose_i = function () {
		var t = new eui.Image();
		this.mYiguiClose = t;
		t.source = "yigui1_png";
		t.x = 2095.91;
		t.y = 363.97;
		return t;
	};
	_proto.catsleep_i = function () {
		var t = new eui.Group();
		this.catsleep = t;
		t.height = 128;
		t.width = 164;
		t.x = 2178;
		t.y = 253;
		return t;
	};
	_proto.mCat_i = function () {
		var t = new eui.Rect();
		this.mCat = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 120;
		t.width = 166.82;
		t.x = 2176;
		t.y = 251;
		return t;
	};
	_proto.mGirlRoot_i = function () {
		var t = new eui.Group();
		this.mGirlRoot = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 200;
		t.x = 2244;
		t.y = 1146;
		t.elementsContent = [this.mGirl_i(),this.mVariationRoot_i()];
		return t;
	};
	_proto.mGirl_i = function () {
		var t = new eui.Image();
		this.mGirl = t;
		t.anchorOffsetX = 84;
		t.anchorOffsetY = 624;
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "tiao2_png";
		t.x = 101.94;
		t.y = 186;
		return t;
	};
	_proto.mVariationRoot_i = function () {
		var t = new eui.Group();
		this.mVariationRoot = t;
		t.anchorOffsetX = 4;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 200;
		t.x = 7;
		t.y = 3;
		t.elementsContent = [this.mVariation0_i(),this.mVariation1_i(),this.mVariation2_i(),this.mVariation3_i()];
		return t;
	};
	_proto.mVariation0_i = function () {
		var t = new eui.Image();
		this.mVariation0 = t;
		t.anchorOffsetX = 65;
		t.anchorOffsetY = 28;
		t.scaleX = -1;
		t.source = "variation_3_png";
		t.x = 128;
		t.y = 29;
		return t;
	};
	_proto.mVariation1_i = function () {
		var t = new eui.Image();
		this.mVariation1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 27;
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "variation_2_png";
		t.x = 45;
		t.y = 52;
		return t;
	};
	_proto.mVariation2_i = function () {
		var t = new eui.Image();
		this.mVariation2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 27;
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "variation_2_png";
		t.x = 72;
		t.y = -335;
		return t;
	};
	_proto.mVariation3_i = function () {
		var t = new eui.Image();
		this.mVariation3 = t;
		t.anchorOffsetX = 29;
		t.anchorOffsetY = 77;
		t.scaleX = -1;
		t.source = "variation_1_png";
		t.x = 64;
		t.y = -154;
		return t;
	};
	_proto.mMogu2Img_i = function () {
		var t = new eui.Image();
		this.mMogu2Img = t;
		t.source = "mogu_2_png";
		t.x = 3186.97;
		t.y = 1005.27;
		return t;
	};
	_proto.mMogu3Btn_i = function () {
		var t = new eui.Image();
		this.mMogu3Btn = t;
		t.source = "mogu_3_png";
		t.x = 3515.42;
		t.y = 312.51;
		return t;
	};
	_proto.guizi1_i = function () {
		var t = new eui.Image();
		this.guizi1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "guizi1_png";
		t.x = 3180;
		t.y = 471;
		return t;
	};
	_proto.mMogu2Btn_i = function () {
		var t = new eui.Rect();
		this.mMogu2Btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 165.45;
		t.width = 83.64;
		t.x = 3192;
		t.y = 1007;
		return t;
	};
	_proto.guizi2_i = function () {
		var t = new eui.Image();
		this.guizi2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "guizi2_png";
		t.visible = false;
		t.x = 3180;
		t.y = 471;
		return t;
	};
	return Days11ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days12ViewSkin.exml'] = window.Days12ViewSkin = (function (_super) {
	__extends(Days12ViewSkin, _super);
	function Days12ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L1","bg_M1","bg_R1","anjian2","anjian1","maoliang","bomb","maoGroup","dun1","lagan","zhan","xiangzi1","xiangzi2","dashu","uncleGroup","dogStop","cat1","dog1","uncle1","iconGroup1","cat2","dog2","uncle2","iconGroup2","cat3","dog3","uncle3","iconGroup3","baoza","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days12ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this._Image7_i(),this.anjian2_i(),this.anjian1_i(),this.maoliang_i(),this.bomb_i(),this.maoGroup_i(),this.dun1_i(),this.lagan_i(),this.zhan_i(),this.xiangzi1_i(),this.xiangzi2_i(),this.dashu_i(),this.uncleGroup_i(),this.dogStop_i(),this.iconGroup1_i(),this.iconGroup2_i(),this.iconGroup3_i(),this.baoza_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L1_i(),this.bg_M1_i(),this.bg_R1_i()];
		return t;
	};
	_proto.bg_L1_i = function () {
		var t = new eui.Group();
		this.bg_L1 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M1_i = function () {
		var t = new eui.Group();
		this.bg_M1 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R1_i = function () {
		var t = new eui.Group();
		this.bg_R1 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "laohuji_png";
		t.x = 1753;
		t.y = 526;
		return t;
	};
	_proto.anjian2_i = function () {
		var t = new eui.Image();
		this.anjian2 = t;
		t.source = "anjian2_png";
		t.visible = false;
		t.x = 1998;
		t.y = 939.5;
		return t;
	};
	_proto.anjian1_i = function () {
		var t = new eui.Image();
		this.anjian1 = t;
		t.source = "anjian1_png";
		t.x = 1998;
		t.y = 919.5;
		return t;
	};
	_proto.maoliang_i = function () {
		var t = new eui.Image();
		this.maoliang = t;
		t.source = "maoliang1_png";
		t.visible = false;
		t.x = 2100;
		t.y = 1320;
		return t;
	};
	_proto.bomb_i = function () {
		var t = new eui.Image();
		this.bomb = t;
		t.source = "bomb_png";
		t.visible = false;
		t.x = 2127.5;
		t.y = 1324;
		return t;
	};
	_proto.maoGroup_i = function () {
		var t = new eui.Group();
		this.maoGroup = t;
		t.height = 128;
		t.width = 164;
		t.x = 2080;
		t.y = 1255;
		return t;
	};
	_proto.dun1_i = function () {
		var t = new eui.Image();
		this.dun1 = t;
		t.source = "dun1_png";
		t.visible = false;
		t.x = 2084.5;
		t.y = 1059;
		return t;
	};
	_proto.lagan_i = function () {
		var t = new eui.Image();
		this.lagan = t;
		t.rotation = 0;
		t.source = "lagan_png";
		t.x = 2226;
		t.y = 762;
		return t;
	};
	_proto.zhan_i = function () {
		var t = new eui.Image();
		this.zhan = t;
		t.scaleX = -1;
		t.source = "cemian1_png";
		t.x = 2525;
		t.y = 573;
		return t;
	};
	_proto.xiangzi1_i = function () {
		var t = new eui.Image();
		this.xiangzi1 = t;
		t.height = 254;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xiangzi1_png";
		t.width = 320;
		t.x = 2355;
		t.y = 1309;
		return t;
	};
	_proto.xiangzi2_i = function () {
		var t = new eui.Image();
		this.xiangzi2 = t;
		t.source = "xiangzi2_png";
		t.visible = false;
		t.x = 2355;
		t.y = 1309;
		return t;
	};
	_proto.dashu_i = function () {
		var t = new eui.Image();
		this.dashu = t;
		t.source = "xdashu3_png";
		t.visible = false;
		t.x = 2285;
		t.y = 724;
		return t;
	};
	_proto.uncleGroup_i = function () {
		var t = new eui.Group();
		this.uncleGroup = t;
		t.height = 839;
		t.visible = false;
		t.width = 460;
		t.x = 2285;
		t.y = 724;
		return t;
	};
	_proto.dogStop_i = function () {
		var t = new eui.Image();
		this.dogStop = t;
		t.source = "dogStop2_png";
		t.visible = false;
		t.x = 1757.5;
		t.y = 1186;
		return t;
	};
	_proto.iconGroup1_i = function () {
		var t = new eui.Group();
		this.iconGroup1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 232;
		t.touchEnabled = false;
		t.width = 148;
		t.x = 1886;
		t.y = 674;
		t.elementsContent = [this.cat1_i(),this.dog1_i(),this.uncle1_i()];
		return t;
	};
	_proto.cat1_i = function () {
		var t = new eui.Image();
		this.cat1 = t;
		t.fillMode = "scale";
		t.source = "cat_png";
		t.x = 28;
		t.y = 9;
		return t;
	};
	_proto.dog1_i = function () {
		var t = new eui.Image();
		this.dog1 = t;
		t.fillMode = "scale";
		t.source = "dog_png";
		t.x = 48;
		t.y = 80;
		return t;
	};
	_proto.uncle1_i = function () {
		var t = new eui.Image();
		this.uncle1 = t;
		t.fillMode = "scale";
		t.source = "uncle_png";
		t.x = 60;
		t.y = 154;
		return t;
	};
	_proto.iconGroup2_i = function () {
		var t = new eui.Group();
		this.iconGroup2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 232;
		t.touchEnabled = false;
		t.width = 148;
		t.x = 1978;
		t.y = 656;
		t.elementsContent = [this.cat2_i(),this.dog2_i(),this.uncle2_i()];
		return t;
	};
	_proto.cat2_i = function () {
		var t = new eui.Image();
		this.cat2 = t;
		t.fillMode = "scale";
		t.source = "cat_png";
		t.x = 28;
		t.y = 9;
		return t;
	};
	_proto.dog2_i = function () {
		var t = new eui.Image();
		this.dog2 = t;
		t.fillMode = "scale";
		t.source = "dog_png";
		t.x = 48;
		t.y = 80;
		return t;
	};
	_proto.uncle2_i = function () {
		var t = new eui.Image();
		this.uncle2 = t;
		t.fillMode = "scale";
		t.source = "uncle_png";
		t.x = 60;
		t.y = 154;
		return t;
	};
	_proto.iconGroup3_i = function () {
		var t = new eui.Group();
		this.iconGroup3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 232;
		t.touchEnabled = false;
		t.width = 148;
		t.x = 2064;
		t.y = 642;
		t.elementsContent = [this.cat3_i(),this.dog3_i(),this.uncle3_i()];
		return t;
	};
	_proto.cat3_i = function () {
		var t = new eui.Image();
		this.cat3 = t;
		t.fillMode = "scale";
		t.source = "cat_png";
		t.x = 28;
		t.y = 9;
		return t;
	};
	_proto.dog3_i = function () {
		var t = new eui.Image();
		this.dog3 = t;
		t.fillMode = "scale";
		t.source = "dog_png";
		t.x = 48;
		t.y = 80;
		return t;
	};
	_proto.uncle3_i = function () {
		var t = new eui.Image();
		this.uncle3 = t;
		t.fillMode = "scale";
		t.source = "uncle_png";
		t.x = 60;
		t.y = 154;
		return t;
	};
	_proto.baoza_i = function () {
		var t = new eui.Image();
		this.baoza = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "baoza_png";
		t.verticalCenter = 308;
		t.visible = false;
		return t;
	};
	return Days12ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days13ViewSkin.exml'] = window.Days13ViewSkin = (function (_super) {
	__extends(Days13ViewSkin, _super);
	function Days13ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L0","bg_M0","bg_R0","mCatEndRoot","mHat3","mCatInitRoot","mHat0","mHat1","mHat2","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days13ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.width = 4320;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this._Image7_i(),this._Image8_i(),this.mCatEndRoot_i(),this.mHat3_i(),this.mCatInitRoot_i(),this.mHat0_i(),this.mHat1_i(),this.mHat2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L0_i(),this.bg_M0_i(),this.bg_R0_i()];
		return t;
	};
	_proto.bg_L0_i = function () {
		var t = new eui.Group();
		this.bg_L0 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M0_i = function () {
		var t = new eui.Group();
		this.bg_M0 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R0_i = function () {
		var t = new eui.Group();
		this.bg_R0 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "magic_uncle2_png";
		t.x = 1754.18;
		t.y = 817.99;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "desk_1_png";
		t.x = 1844;
		t.y = 1145;
		return t;
	};
	_proto.mCatEndRoot_i = function () {
		var t = new eui.Group();
		this.mCatEndRoot = t;
		t.anchorOffsetX = 0;
		t.height = 128;
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.width = 145.82;
		t.x = 1794;
		t.y = 746;
		return t;
	};
	_proto.mHat3_i = function () {
		var t = new eui.Image();
		this.mHat3 = t;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.source = "13_png";
		t.x = 1767.47;
		t.y = 734.05;
		return t;
	};
	_proto.mCatInitRoot_i = function () {
		var t = new eui.Group();
		this.mCatInitRoot = t;
		t.anchorOffsetX = 0;
		t.height = 128;
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.width = 145.82;
		t.x = 1948;
		t.y = 1064;
		return t;
	};
	_proto.mHat0_i = function () {
		var t = new eui.Image();
		this.mHat0 = t;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.source = "13_png";
		t.x = 1910.79;
		t.y = 1065.99;
		return t;
	};
	_proto.mHat1_i = function () {
		var t = new eui.Image();
		this.mHat1 = t;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.source = "13_png";
		t.x = 2114.79;
		t.y = 1065.99;
		return t;
	};
	_proto.mHat2_i = function () {
		var t = new eui.Image();
		this.mHat2 = t;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.source = "13_png";
		t.x = 2318.79;
		t.y = 1065.99;
		return t;
	};
	return Days13ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days14ViewSkin.exml'] = window.Days14ViewSkin = (function (_super) {
	__extends(Days14ViewSkin, _super);
	function Days14ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L1","bg_M1","bg_R1","men2","zituan1","men1","maoGroup","dun1","dun2","shizhen","fenzhen","zhongBtn","guizi2","maobang","guizi1","zituan2","zituan2Btn","zituan3","lajitong","lionSit1","lionLoop","lionAngry1","lionPlay1","lionPlay2","lionPlay3","zituan4","zituan5","zituan6","dimian1","dimian2","dimian3","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days14ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this.men2_i(),this.zituan1_i(),this.men1_i(),this.maoGroup_i(),this.dun1_i(),this.dun2_i(),this._Image7_i(),this.shizhen_i(),this.fenzhen_i(),this.zhongBtn_i(),this.guizi2_i(),this.maobang_i(),this.guizi1_i(),this.zituan2_i(),this._Image8_i(),this.zituan2Btn_i(),this.zituan3_i(),this.lajitong_i(),this.lionSit1_i(),this.lionLoop_i(),this.lionAngry1_i(),this.lionPlay1_i(),this.lionPlay2_i(),this.lionPlay3_i(),this.zituan4_i(),this.zituan5_i(),this.zituan6_i(),this.dimian1_i(),this.dimian2_i(),this.dimian3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L1_i(),this.bg_M1_i(),this.bg_R1_i()];
		return t;
	};
	_proto.bg_L1_i = function () {
		var t = new eui.Group();
		this.bg_L1 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M1_i = function () {
		var t = new eui.Group();
		this.bg_M1 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R1_i = function () {
		var t = new eui.Group();
		this.bg_R1 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.men2_i = function () {
		var t = new eui.Image();
		this.men2 = t;
		t.source = "men2_png";
		t.visible = false;
		t.x = 1708.56;
		t.y = 403;
		return t;
	};
	_proto.zituan1_i = function () {
		var t = new eui.Image();
		this.zituan1 = t;
		t.source = "zituan_png";
		t.x = 1731;
		t.y = 900;
		return t;
	};
	_proto.men1_i = function () {
		var t = new eui.Image();
		this.men1 = t;
		t.source = "men1_png";
		t.x = 1708.56;
		t.y = 403;
		return t;
	};
	_proto.maoGroup_i = function () {
		var t = new eui.Group();
		this.maoGroup = t;
		t.height = 128;
		t.width = 164;
		t.x = 2095;
		t.y = 896;
		return t;
	};
	_proto.dun1_i = function () {
		var t = new eui.Image();
		this.dun1 = t;
		t.scaleX = -1;
		t.source = "dun1_png";
		t.visible = false;
		t.x = 2220;
		t.y = 684;
		return t;
	};
	_proto.dun2_i = function () {
		var t = new eui.Image();
		this.dun2 = t;
		t.source = "dun2_png";
		t.visible = false;
		t.x = 1744;
		t.y = 1132;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "zhong_png";
		t.x = 2332;
		t.y = 402;
		return t;
	};
	_proto.shizhen_i = function () {
		var t = new eui.Image();
		this.shizhen = t;
		t.anchorOffsetX = 11;
		t.anchorOffsetY = 9.5;
		t.source = "shizhen_png";
		t.x = 2462.14;
		t.y = 529.09;
		return t;
	};
	_proto.fenzhen_i = function () {
		var t = new eui.Image();
		this.fenzhen = t;
		t.anchorOffsetX = 6;
		t.anchorOffsetY = 82;
		t.source = "fenzhen_png";
		t.x = 2462.14;
		t.y = 525.59;
		return t;
	};
	_proto.zhongBtn_i = function () {
		var t = new eui.Rect();
		this.zhongBtn = t;
		t.fillAlpha = 0;
		t.height = 254;
		t.width = 260;
		t.x = 2332;
		t.y = 402;
		return t;
	};
	_proto.guizi2_i = function () {
		var t = new eui.Image();
		this.guizi2 = t;
		t.scaleX = -1;
		t.source = "guizi2_png";
		t.visible = false;
		t.x = 1110;
		t.y = 490;
		return t;
	};
	_proto.maobang_i = function () {
		var t = new eui.Image();
		this.maobang = t;
		t.scaleX = -1;
		t.source = "maobang_png";
		t.x = 970;
		t.y = 1085;
		return t;
	};
	_proto.guizi1_i = function () {
		var t = new eui.Image();
		this.guizi1 = t;
		t.scaleX = -1;
		t.source = "guizi1_png";
		t.x = 1110;
		t.y = 490;
		return t;
	};
	_proto.zituan2_i = function () {
		var t = new eui.Image();
		this.zituan2 = t;
		t.source = "zituan_png";
		t.x = 3276;
		t.y = 1092;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "saifa1_png";
		t.x = 3680;
		t.y = 920;
		return t;
	};
	_proto.zituan2Btn_i = function () {
		var t = new eui.Rect();
		this.zituan2Btn = t;
		t.fillAlpha = 0;
		t.height = 76;
		t.width = 86;
		t.x = 3276;
		t.y = 1092;
		return t;
	};
	_proto.zituan3_i = function () {
		var t = new eui.Image();
		this.zituan3 = t;
		t.source = "zituan_png";
		t.x = 3832;
		t.y = 1280;
		return t;
	};
	_proto.lajitong_i = function () {
		var t = new eui.Image();
		this.lajitong = t;
		t.source = "lajitong_png";
		t.x = 3780;
		t.y = 1164;
		return t;
	};
	_proto.lionSit1_i = function () {
		var t = new eui.Image();
		this.lionSit1 = t;
		t.source = "lionSti_png";
		t.x = 2075;
		t.y = 1056.5;
		return t;
	};
	_proto.lionLoop_i = function () {
		var t = new eui.Image();
		this.lionLoop = t;
		t.source = "lionLoop1_png";
		t.visible = false;
		t.x = 2025;
		t.y = 1002;
		return t;
	};
	_proto.lionAngry1_i = function () {
		var t = new eui.Image();
		this.lionAngry1 = t;
		t.source = "lionAngry1_png";
		t.visible = false;
		t.x = 2075;
		t.y = 1057;
		return t;
	};
	_proto.lionPlay1_i = function () {
		var t = new eui.Image();
		this.lionPlay1 = t;
		t.source = "lionPlay_png";
		t.visible = false;
		t.x = 1983;
		t.y = 1028;
		return t;
	};
	_proto.lionPlay2_i = function () {
		var t = new eui.Image();
		this.lionPlay2 = t;
		t.source = "lionPlay_png";
		t.visible = false;
		t.x = 1653;
		t.y = 1028;
		return t;
	};
	_proto.lionPlay3_i = function () {
		var t = new eui.Image();
		this.lionPlay3 = t;
		t.source = "lionPlay_png";
		t.visible = false;
		t.x = 882;
		t.y = 1027;
		return t;
	};
	_proto.zituan4_i = function () {
		var t = new eui.Image();
		this.zituan4 = t;
		t.source = "zituan_png";
		t.visible = false;
		t.x = 1983;
		t.y = 1277.5;
		return t;
	};
	_proto.zituan5_i = function () {
		var t = new eui.Image();
		this.zituan5 = t;
		t.source = "zituan_png";
		t.visible = false;
		t.x = 1653;
		t.y = 1275;
		return t;
	};
	_proto.zituan6_i = function () {
		var t = new eui.Image();
		this.zituan6 = t;
		t.source = "zituan_png";
		t.visible = false;
		t.x = 868;
		t.y = 1298;
		return t;
	};
	_proto.dimian1_i = function () {
		var t = new eui.Rect();
		this.dimian1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 146;
		t.width = 170;
		t.x = 1941;
		t.y = 1237;
		return t;
	};
	_proto.dimian2_i = function () {
		var t = new eui.Rect();
		this.dimian2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 164;
		t.width = 174;
		t.x = 1626;
		t.y = 1236;
		return t;
	};
	_proto.dimian3_i = function () {
		var t = new eui.Rect();
		this.dimian3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 138;
		t.width = 170;
		t.x = 844;
		t.y = 1288;
		return t;
	};
	return Days14ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days15ViewSkin.exml'] = window.Days15ViewSkin = (function (_super) {
	__extends(Days15ViewSkin, _super);
	function Days15ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L0","bg_M0","bg_R0","mYiguiOpen","catsleep","mBone","mNecklace","mCatFeather","mHeadgear","mCotton","mYiguiClose","mPillow","mCat","mOtherProp","mDogSitGroup","mDogBtn","mPropRoot","mDogRunRoot","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days15ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.width = 4320;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this.mYiguiOpen_i(),this.catsleep_i(),this.mBone_i(),this.mNecklace_i(),this.mCatFeather_i(),this.mHeadgear_i(),this.mCotton_i(),this.mYiguiClose_i(),this.mPillow_i(),this.mCat_i(),this.mOtherProp_i(),this.mDogSitGroup_i(),this.mDogBtn_i(),this.mPropRoot_i(),this.mDogRunRoot_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L0_i(),this.bg_M0_i(),this.bg_R0_i()];
		return t;
	};
	_proto.bg_L0_i = function () {
		var t = new eui.Group();
		this.bg_L0 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M0_i = function () {
		var t = new eui.Group();
		this.bg_M0 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R0_i = function () {
		var t = new eui.Group();
		this.bg_R0 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.mYiguiOpen_i = function () {
		var t = new eui.Image();
		this.mYiguiOpen = t;
		t.source = "yigui2_png";
		t.visible = false;
		t.x = 1745.55;
		t.y = 363.94;
		return t;
	};
	_proto.catsleep_i = function () {
		var t = new eui.Group();
		this.catsleep = t;
		t.height = 128;
		t.width = 164;
		t.x = 2178;
		t.y = 253;
		return t;
	};
	_proto.mBone_i = function () {
		var t = new eui.Image();
		this.mBone = t;
		t.source = "gougutou_png";
		t.x = 2004;
		t.y = 873;
		return t;
	};
	_proto.mNecklace_i = function () {
		var t = new eui.Image();
		this.mNecklace = t;
		t.source = "xianglian_png";
		t.x = 2054;
		t.y = 746;
		return t;
	};
	_proto.mCatFeather_i = function () {
		var t = new eui.Image();
		this.mCatFeather = t;
		t.source = "maomao_png";
		t.visible = false;
		t.x = 2108;
		t.y = 1269;
		return t;
	};
	_proto.mHeadgear_i = function () {
		var t = new eui.Image();
		this.mHeadgear = t;
		t.source = "maotoutao_png";
		t.x = 1834;
		t.y = 726;
		return t;
	};
	_proto.mCotton_i = function () {
		var t = new eui.Image();
		this.mCotton = t;
		t.source = "mianhua_png";
		t.x = 1863;
		t.y = 861;
		return t;
	};
	_proto.mYiguiClose_i = function () {
		var t = new eui.Image();
		this.mYiguiClose = t;
		t.source = "yigui1_png";
		t.x = 1746.91;
		t.y = 363.97;
		return t;
	};
	_proto.mPillow_i = function () {
		var t = new eui.Image();
		this.mPillow = t;
		t.source = "zhengtou2_png";
		t.visible = false;
		t.x = 2016.61;
		t.y = 1227.27;
		return t;
	};
	_proto.mCat_i = function () {
		var t = new eui.Image();
		this.mCat = t;
		t.source = "maojiao_png";
		t.visible = false;
		t.x = 2094.61;
		t.y = 1218.27;
		return t;
	};
	_proto.mOtherProp_i = function () {
		var t = new eui.Image();
		this.mOtherProp = t;
		t.source = "zhengtou2_png";
		t.visible = false;
		t.x = 2140.61;
		t.y = 1222.27;
		return t;
	};
	_proto.mDogSitGroup_i = function () {
		var t = new eui.Group();
		this.mDogSitGroup = t;
		t.height = 50;
		t.width = 50;
		t.x = 2293;
		t.y = 1024;
		return t;
	};
	_proto.mDogBtn_i = function () {
		var t = new eui.Rect();
		this.mDogBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 369.24;
		t.width = 214.39;
		t.x = 2296;
		t.y = 1019;
		return t;
	};
	_proto.mPropRoot_i = function () {
		var t = new eui.Group();
		this.mPropRoot = t;
		t.height = 200;
		t.touchEnabled = false;
		t.width = 200;
		t.x = 2140;
		t.y = 1180;
		return t;
	};
	_proto.mDogRunRoot_i = function () {
		var t = new eui.Group();
		this.mDogRunRoot = t;
		t.bottom = 0;
		t.height = 1920;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 1080;
		t.x = 1620;
		return t;
	};
	return Days15ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days15Widget/Days15DogMoveSkin.exml'] = window.Days15DogMoveSkin = (function (_super) {
	__extends(Days15DogMoveSkin, _super);
	function Days15DogMoveSkin() {
		_super.call(this);
		this.skinParts = ["mBone","mDogStop","mMoveProp","mDogRunAnimRoot","mDogRunRoot","mUncle1","mZhentou","mCat1","mDogBackAnimRoot","mDogBackRoot","mUncleBackRoot","mLion","mLineBackAnimRoot","mLionBackRoot","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days15DogMoveSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.width = 4320;
		t.y = 0;
		t.elementsContent = [this.mBone_i(),this.mDogStop_i(),this.mDogRunRoot_i(),this.mDogBackRoot_i(),this.mUncleBackRoot_i(),this.mLionBackRoot_i()];
		return t;
	};
	_proto.mBone_i = function () {
		var t = new eui.Image();
		this.mBone = t;
		t.source = "gougutou_png";
		t.x = 2141;
		t.y = 1207;
		return t;
	};
	_proto.mDogStop_i = function () {
		var t = new eui.Image();
		this.mDogStop = t;
		t.scaleX = -1;
		t.source = "dogStop2_png";
		t.x = 2586;
		t.y = 1080;
		return t;
	};
	_proto.mDogRunRoot_i = function () {
		var t = new eui.Group();
		this.mDogRunRoot = t;
		t.height = 200;
		t.touchEnabled = false;
		t.width = 200;
		t.x = 2205;
		t.y = 1105;
		t.elementsContent = [this.mMoveProp_i(),this.mDogRunAnimRoot_i()];
		return t;
	};
	_proto.mMoveProp_i = function () {
		var t = new eui.Image();
		this.mMoveProp = t;
		t.rotation = 8.78;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "mianhua_png";
		t.x = -55;
		t.y = 13;
		return t;
	};
	_proto.mDogRunAnimRoot_i = function () {
		var t = new eui.Group();
		this.mDogRunAnimRoot = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.width = 200;
		t.x = 382;
		t.y = -20;
		return t;
	};
	_proto.mDogBackRoot_i = function () {
		var t = new eui.Group();
		this.mDogBackRoot = t;
		t.height = 200;
		t.touchEnabled = false;
		t.width = 200;
		t.x = 790;
		t.y = 1105;
		t.elementsContent = [this.mUncle1_i(),this.mZhentou_i(),this.mCat1_i(),this.mDogBackAnimRoot_i()];
		return t;
	};
	_proto.mUncle1_i = function () {
		var t = new eui.Image();
		this.mUncle1 = t;
		t.source = "dashubeidiao_png";
		t.x = -229;
		t.y = -175;
		return t;
	};
	_proto.mZhentou_i = function () {
		var t = new eui.Image();
		this.mZhentou = t;
		t.source = "zhengtou2_png";
		t.x = 110;
		t.y = 15;
		return t;
	};
	_proto.mCat1_i = function () {
		var t = new eui.Image();
		this.mCat1 = t;
		t.scaleX = 1;
		t.source = "maobeidiao_png";
		t.x = 247;
		t.y = 25;
		return t;
	};
	_proto.mDogBackAnimRoot_i = function () {
		var t = new eui.Group();
		this.mDogBackAnimRoot = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.width = 200;
		t.x = -113;
		t.y = -20;
		return t;
	};
	_proto.mUncleBackRoot_i = function () {
		var t = new eui.Group();
		this.mUncleBackRoot = t;
		t.height = 200;
		t.visible = false;
		t.width = 200;
		t.x = 2013;
		t.y = 771;
		return t;
	};
	_proto.mLionBackRoot_i = function () {
		var t = new eui.Group();
		this.mLionBackRoot = t;
		t.height = 200;
		t.visible = false;
		t.width = 200;
		t.x = -1186;
		t.y = 938;
		t.elementsContent = [this.mLion_i(),this.mLineBackAnimRoot_i()];
		return t;
	};
	_proto.mLion_i = function () {
		var t = new eui.Image();
		this.mLion = t;
		t.scaleX = -1;
		t.source = "lion_angry_png";
		t.visible = false;
		t.x = 348;
		t.y = -175;
		return t;
	};
	_proto.mLineBackAnimRoot_i = function () {
		var t = new eui.Group();
		this.mLineBackAnimRoot = t;
		t.height = 200;
		t.scaleX = -1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 349;
		t.y = -177;
		return t;
	};
	return Days15DogMoveSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days16ViewSkin.exml'] = window.Days16ViewSkin = (function (_super) {
	__extends(Days16ViewSkin, _super);
	function Days16ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L1","bg_M1","bg_R1","men2","men1","guizi2","tingzhenqi","guizi1","police","safe2","safe1","book","chuizi","chuizi2","catsleep","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days16ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this.men2_i(),this.men1_i(),this.guizi2_i(),this.tingzhenqi_i(),this.guizi1_i(),this._Image7_i(),this.police_i(),this._Image8_i(),this.safe2_i(),this.safe1_i(),this.book_i(),this.chuizi_i(),this.chuizi2_i(),this.catsleep_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L1_i(),this.bg_M1_i(),this.bg_R1_i()];
		return t;
	};
	_proto.bg_L1_i = function () {
		var t = new eui.Group();
		this.bg_L1 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M1_i = function () {
		var t = new eui.Group();
		this.bg_M1 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R1_i = function () {
		var t = new eui.Group();
		this.bg_R1 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.men2_i = function () {
		var t = new eui.Image();
		this.men2 = t;
		t.source = "men2_png";
		t.visible = false;
		t.x = 2269.18;
		t.y = 403;
		return t;
	};
	_proto.men1_i = function () {
		var t = new eui.Image();
		this.men1 = t;
		t.source = "men1_png";
		t.x = 2269.18;
		t.y = 403;
		return t;
	};
	_proto.guizi2_i = function () {
		var t = new eui.Image();
		this.guizi2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "guizi2_png";
		t.visible = false;
		t.x = 3180;
		t.y = 471;
		return t;
	};
	_proto.tingzhenqi_i = function () {
		var t = new eui.Image();
		this.tingzhenqi = t;
		t.source = "tingzhenqi_png";
		t.x = 3345.36;
		t.y = 969.97;
		return t;
	};
	_proto.guizi1_i = function () {
		var t = new eui.Image();
		this.guizi1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "guizi1_png";
		t.x = 3180;
		t.y = 471;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "xiangzi1_png";
		t.x = 3694.12;
		t.y = 1198.97;
		return t;
	};
	_proto.police_i = function () {
		var t = new eui.Image();
		this.police = t;
		t.source = "police_png";
		t.visible = false;
		t.x = 2089.4;
		t.y = 651.18;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "desk_1_png";
		t.x = 1760.43;
		t.y = 1154.82;
		return t;
	};
	_proto.safe2_i = function () {
		var t = new eui.Image();
		this.safe2 = t;
		t.source = "safe2_png";
		t.visible = false;
		t.x = 1941;
		t.y = 1043;
		return t;
	};
	_proto.safe1_i = function () {
		var t = new eui.Image();
		this.safe1 = t;
		t.height = 170;
		t.source = "safe1_png";
		t.width = 273;
		t.x = 1941;
		t.y = 1044;
		return t;
	};
	_proto.book_i = function () {
		var t = new eui.Image();
		this.book = t;
		t.source = "book_png";
		t.x = 3351.94;
		t.y = 676.12;
		return t;
	};
	_proto.chuizi_i = function () {
		var t = new eui.Image();
		this.chuizi = t;
		t.source = "chuizi_png";
		t.x = 3360.85;
		t.y = 1391.21;
		return t;
	};
	_proto.chuizi2_i = function () {
		var t = new eui.Image();
		this.chuizi2 = t;
		t.anchorOffsetY = 111;
		t.source = "chuizi_png";
		t.visible = false;
		t.x = 1912.62;
		t.y = 1052.09;
		return t;
	};
	_proto.catsleep_i = function () {
		var t = new eui.Group();
		this.catsleep = t;
		t.height = 122;
		t.width = 156;
		t.x = 1992.05;
		t.y = 1064.18;
		return t;
	};
	return Days16ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days17ViewSkin.exml'] = window.Days17ViewSkin = (function (_super) {
	__extends(Days17ViewSkin, _super);
	function Days17ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L0","bg_M0","bg_R0","shizhen","fenzhen","zhongBtn","catsleep","jiandao2","maoGroup","bomb2","closebtn2","closebtn1","longzi","jiandao1","guizi2","guizi1","book","closebtn3","curtainRightGroup","curtainLeftGroup","baoza","closebtn4","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days17ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this._Image7_i(),this.shizhen_i(),this.fenzhen_i(),this.zhongBtn_i(),this._Image8_i(),this.catsleep_i(),this.jiandao2_i(),this.maoGroup_i(),this.longzi_i(),this.jiandao1_i(),this.guizi2_i(),this.guizi1_i(),this.book_i(),this._Image14_i(),this._Image15_i(),this.closebtn3_i(),this.curtainRightGroup_i(),this.curtainLeftGroup_i(),this.baoza_i(),this.closebtn4_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L0_i(),this.bg_M0_i(),this.bg_R0_i()];
		return t;
	};
	_proto.bg_L0_i = function () {
		var t = new eui.Group();
		this.bg_L0 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M0_i = function () {
		var t = new eui.Group();
		this.bg_M0 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R0_i = function () {
		var t = new eui.Group();
		this.bg_R0 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "zhong_png";
		t.x = 2032.03;
		t.y = 198.99;
		return t;
	};
	_proto.shizhen_i = function () {
		var t = new eui.Image();
		this.shizhen = t;
		t.anchorOffsetX = 11;
		t.anchorOffsetY = 9.5;
		t.source = "shizhen_png";
		t.x = 2162.17;
		t.y = 326.08;
		return t;
	};
	_proto.fenzhen_i = function () {
		var t = new eui.Image();
		this.fenzhen = t;
		t.anchorOffsetX = 6;
		t.anchorOffsetY = 82;
		t.source = "fenzhen_png";
		t.x = 2162.17;
		t.y = 322.58;
		return t;
	};
	_proto.zhongBtn_i = function () {
		var t = new eui.Rect();
		this.zhongBtn = t;
		t.fillAlpha = 0;
		t.height = 254;
		t.width = 260;
		t.x = 2032.03;
		t.y = 198.99;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "desk_1_png";
		t.x = 1761;
		t.y = 1156;
		return t;
	};
	_proto.catsleep_i = function () {
		var t = new eui.Group();
		this.catsleep = t;
		t.height = 122;
		t.width = 156;
		t.x = 2229.19;
		t.y = 1077.14;
		return t;
	};
	_proto.jiandao2_i = function () {
		var t = new eui.Image();
		this.jiandao2 = t;
		t.source = "jiandao2_png";
		t.visible = false;
		t.x = 2060;
		t.y = 1088;
		return t;
	};
	_proto.maoGroup_i = function () {
		var t = new eui.Group();
		this.maoGroup = t;
		t.height = 128;
		t.width = 164;
		t.x = 1845.52;
		t.y = 1083.65;
		return t;
	};
	_proto.longzi_i = function () {
		var t = new eui.Group();
		this.longzi = t;
		t.x = 1804;
		t.y = 996;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this.bomb2_i(),this.closebtn2_i(),this.closebtn1_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cage2_png";
		t.x = 395.53;
		t.y = 18;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59.04;
		t.rotation = 179.77;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "blueLine2_png";
		t.width = 210.76;
		t.x = 606.53;
		t.y = 205.33;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59.04;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "blueLine2_png";
		t.width = 404.76;
		t.x = 204;
		t.y = 167.05;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 93.03;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "redLine2_png";
		t.width = 408.3;
		t.x = 204;
		t.y = 42.65;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 93.03;
		t.scaleX = 1;
		t.scaleY = -1;
		t.source = "redLine2_png";
		t.width = 211.33;
		t.x = 400.56;
		t.y = 115.59;
		return t;
	};
	_proto.bomb2_i = function () {
		var t = new eui.Image();
		this.bomb2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bomb2_png";
		t.x = 12.17;
		t.y = 36.5;
		return t;
	};
	_proto.closebtn2_i = function () {
		var t = new eui.Image();
		this.closebtn2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "closebtn2_png";
		t.visible = false;
		t.x = 67;
		t.y = 81;
		return t;
	};
	_proto.closebtn1_i = function () {
		var t = new eui.Image();
		this.closebtn1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "closebtn1_png";
		t.visible = false;
		t.x = 67;
		t.y = 81;
		return t;
	};
	_proto.jiandao1_i = function () {
		var t = new eui.Image();
		this.jiandao1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 81.12;
		t.source = "jiandao1_png";
		t.width = 161.07;
		t.x = 2131.04;
		t.y = 1419.91;
		return t;
	};
	_proto.guizi2_i = function () {
		var t = new eui.Image();
		this.guizi2 = t;
		t.source = "guizi2_png";
		t.visible = false;
		t.x = 3180;
		t.y = 471;
		return t;
	};
	_proto.guizi1_i = function () {
		var t = new eui.Image();
		this.guizi1 = t;
		t.source = "guizi1_png";
		t.x = 3180;
		t.y = 471;
		return t;
	};
	_proto.book_i = function () {
		var t = new eui.Image();
		this.book = t;
		t.source = "book_png";
		t.x = 3351.96;
		t.y = 679.12;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "xiangzi1_png";
		t.x = 3694;
		t.y = 1200;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "window1_png";
		t.x = 221.56;
		t.y = 439.81;
		return t;
	};
	_proto.closebtn3_i = function () {
		var t = new eui.Image();
		this.closebtn3 = t;
		t.source = "closebtn1_png";
		t.visible = false;
		t.x = 296;
		t.y = 851;
		return t;
	};
	_proto.curtainRightGroup_i = function () {
		var t = new eui.Group();
		this.curtainRightGroup = t;
		t.height = 540;
		t.width = 284;
		t.x = 214;
		t.y = 466;
		return t;
	};
	_proto.curtainLeftGroup_i = function () {
		var t = new eui.Group();
		this.curtainLeftGroup = t;
		t.height = 540;
		t.width = 284;
		t.x = 446;
		t.y = 440;
		return t;
	};
	_proto.baoza_i = function () {
		var t = new eui.Image();
		this.baoza = t;
		t.anchorOffsetX = 299;
		t.anchorOffsetY = 210;
		t.source = "baoza_png";
		t.visible = false;
		t.x = 1986;
		t.y = 1110;
		return t;
	};
	_proto.closebtn4_i = function () {
		var t = new eui.Rect();
		this.closebtn4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 88;
		t.width = 148;
		t.x = 268;
		t.y = 829;
		return t;
	};
	return Days17ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days18ViewSkin.exml'] = window.Days18ViewSkin = (function (_super) {
	__extends(Days18ViewSkin, _super);
	function Days18ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L1","bg_M1","bg_R1","guizi2","mogu2","guizi1","mogu1","men1","men2","mogu3","huapen","shizi1","mogu4","mMoguRoot","mSmokeRoot","mSmallLionRoot","mCat","mGirlAnimRoot","mGirl","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days18ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this.guizi2_i(),this.mogu2_i(),this.guizi1_i(),this.mogu1_i(),this.men1_i(),this.men2_i(),this._Image7_i(),this.mogu3_i(),this.huapen_i(),this._Image8_i(),this.shizi1_i(),this.mogu4_i(),this.mMoguRoot_i(),this.mSmokeRoot_i(),this.mSmallLionRoot_i(),this.mCat_i(),this.mGirlAnimRoot_i(),this.mGirl_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L1_i(),this.bg_M1_i(),this.bg_R1_i()];
		return t;
	};
	_proto.bg_L1_i = function () {
		var t = new eui.Group();
		this.bg_L1 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M1_i = function () {
		var t = new eui.Group();
		this.bg_M1 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R1_i = function () {
		var t = new eui.Group();
		this.bg_R1 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.guizi2_i = function () {
		var t = new eui.Image();
		this.guizi2 = t;
		t.scaleX = -1;
		t.source = "guizi2_png";
		t.visible = false;
		t.x = 1111;
		t.y = 498;
		return t;
	};
	_proto.mogu2_i = function () {
		var t = new eui.Image();
		this.mogu2 = t;
		t.source = "mogu_1_png";
		t.x = 829;
		t.y = 1088;
		return t;
	};
	_proto.guizi1_i = function () {
		var t = new eui.Image();
		this.guizi1 = t;
		t.scaleX = -1;
		t.source = "guizi1_png";
		t.x = 1111;
		t.y = 498;
		return t;
	};
	_proto.mogu1_i = function () {
		var t = new eui.Image();
		this.mogu1 = t;
		t.source = "poisoning_1_png";
		t.x = 628;
		t.y = 360;
		return t;
	};
	_proto.men1_i = function () {
		var t = new eui.Image();
		this.men1 = t;
		t.source = "men1_png";
		t.x = 1701.45;
		t.y = 404;
		return t;
	};
	_proto.men2_i = function () {
		var t = new eui.Image();
		this.men2 = t;
		t.source = "men2_png";
		t.visible = false;
		t.x = 1706.45;
		t.y = 404;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "saifa2_png";
		t.x = 2103.45;
		t.y = 744.5;
		return t;
	};
	_proto.mogu3_i = function () {
		var t = new eui.Image();
		this.mogu3 = t;
		t.source = "mogu_2_png";
		t.x = 2322.45;
		t.y = 592;
		return t;
	};
	_proto.huapen_i = function () {
		var t = new eui.Image();
		this.huapen = t;
		t.source = "huapen_png";
		t.x = 1761.6;
		t.y = 1331;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "saifa1_png";
		t.x = 3677;
		t.y = 919;
		return t;
	};
	_proto.shizi1_i = function () {
		var t = new eui.Image();
		this.shizi1 = t;
		t.anchorOffsetX = 316;
		t.anchorOffsetY = 456;
		t.source = "lionSti_png";
		t.x = 3692.67;
		t.y = 1544.5;
		return t;
	};
	_proto.mogu4_i = function () {
		var t = new eui.Image();
		this.mogu4 = t;
		t.source = "mogu_3_png";
		t.x = 3364;
		t.y = 768;
		return t;
	};
	_proto.mMoguRoot_i = function () {
		var t = new eui.Group();
		this.mMoguRoot = t;
		t.anchorOffsetX = -128;
		t.anchorOffsetY = -5;
		t.height = 200;
		t.touchEnabled = false;
		t.width = 722;
		t.x = 1801;
		t.y = 1281;
		return t;
	};
	_proto.mSmokeRoot_i = function () {
		var t = new eui.Group();
		this.mSmokeRoot = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 104;
		t.height = 200;
		t.touchEnabled = false;
		t.width = 200;
		t.x = 3585;
		t.y = 1214;
		return t;
	};
	_proto.mSmallLionRoot_i = function () {
		var t = new eui.Group();
		this.mSmallLionRoot = t;
		t.height = 200;
		t.width = 200;
		t.x = 3562;
		t.y = 1306;
		return t;
	};
	_proto.mCat_i = function () {
		var t = new eui.Image();
		this.mCat = t;
		t.source = "maochu1_png";
		t.visible = false;
		t.x = 3634;
		t.y = 1333;
		return t;
	};
	_proto.mGirlAnimRoot_i = function () {
		var t = new eui.Group();
		this.mGirlAnimRoot = t;
		t.height = 200;
		t.scaleX = -1;
		t.width = 200;
		t.x = 2317;
		t.y = 852;
		return t;
	};
	_proto.mGirl_i = function () {
		var t = new eui.Image();
		this.mGirl = t;
		t.scaleX = -1;
		t.source = "dun1_png";
		t.visible = false;
		t.x = 3611;
		t.y = 1093;
		return t;
	};
	return Days18ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days19ViewSkin.exml'] = window.Days19ViewSkin = (function (_super) {
	__extends(Days19ViewSkin, _super);
	function Days19ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L0","bg_M0","bg_R0","mYiguiOpen","mClothBaby","mClothSexy","mClothMagic","mYiguiClose","mLight","mBabyLight","mUncle","mUncleRoot","mCloudAnimRoot","guizi2","mRainShoes","guizi1","mBook","mBattery","mPillow","mCat","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days19ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.width = 4320;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this.mYiguiOpen_i(),this.mClothBaby_i(),this.mClothSexy_i(),this.mClothMagic_i(),this.mYiguiClose_i(),this.mLight_i(),this.mUncleRoot_i(),this.mCloudAnimRoot_i(),this.guizi2_i(),this.mRainShoes_i(),this.guizi1_i(),this.mBook_i(),this._Image7_i(),this.mBattery_i(),this.mPillow_i(),this.mCat_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L0_i(),this.bg_M0_i(),this.bg_R0_i()];
		return t;
	};
	_proto.bg_L0_i = function () {
		var t = new eui.Group();
		this.bg_L0 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M0_i = function () {
		var t = new eui.Group();
		this.bg_M0 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R0_i = function () {
		var t = new eui.Group();
		this.bg_R0 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.mYiguiOpen_i = function () {
		var t = new eui.Image();
		this.mYiguiOpen = t;
		t.source = "yigui2_png";
		t.visible = false;
		t.x = 2095.55;
		t.y = 363.94;
		return t;
	};
	_proto.mClothBaby_i = function () {
		var t = new eui.Image();
		this.mClothBaby = t;
		t.source = "yifu_waixingren_png";
		t.x = 2262;
		t.y = 471;
		return t;
	};
	_proto.mClothSexy_i = function () {
		var t = new eui.Image();
		this.mClothSexy = t;
		t.source = "yifu_tunvlang_png";
		t.x = 2407;
		t.y = 468;
		return t;
	};
	_proto.mClothMagic_i = function () {
		var t = new eui.Image();
		this.mClothMagic = t;
		t.source = "yifu_moshushi_png";
		t.x = 2136;
		t.y = 466;
		return t;
	};
	_proto.mYiguiClose_i = function () {
		var t = new eui.Image();
		this.mYiguiClose = t;
		t.source = "yigui1_png";
		t.x = 2095.91;
		t.y = 363.97;
		return t;
	};
	_proto.mLight_i = function () {
		var t = new eui.Image();
		this.mLight = t;
		t.source = "beam_png";
		t.x = 1637;
		t.y = -10;
		return t;
	};
	_proto.mUncleRoot_i = function () {
		var t = new eui.Group();
		this.mUncleRoot = t;
		t.height = 200;
		t.width = 200;
		t.x = 1813;
		t.y = 768;
		t.elementsContent = [this.mBabyLight_i(),this.mUncle_i()];
		return t;
	};
	_proto.mBabyLight_i = function () {
		var t = new eui.Image();
		this.mBabyLight = t;
		t.source = "tianxianbaobao_light_png";
		t.visible = false;
		t.x = 37;
		t.y = -66;
		return t;
	};
	_proto.mUncle_i = function () {
		var t = new eui.Image();
		this.mUncle = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "uncle_normal_png";
		t.x = -32;
		t.y = 3;
		return t;
	};
	_proto.mCloudAnimRoot_i = function () {
		var t = new eui.Group();
		this.mCloudAnimRoot = t;
		t.height = 200;
		t.width = 200;
		t.x = 1647;
		t.y = 880;
		return t;
	};
	_proto.guizi2_i = function () {
		var t = new eui.Image();
		this.guizi2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "guizi2_png";
		t.visible = false;
		t.x = 3180;
		t.y = 471;
		return t;
	};
	_proto.mRainShoes_i = function () {
		var t = new eui.Image();
		this.mRainShoes = t;
		t.source = "rainShoes_png";
		t.x = 3358.42;
		t.y = 1034.51;
		return t;
	};
	_proto.guizi1_i = function () {
		var t = new eui.Image();
		this.guizi1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "guizi1_png";
		t.x = 3180;
		t.y = 471;
		return t;
	};
	_proto.mBook_i = function () {
		var t = new eui.Image();
		this.mBook = t;
		t.source = "book_png";
		t.x = 3347.97;
		t.y = 676.27;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "saifa2_png";
		t.x = 470;
		t.y = 1059;
		return t;
	};
	_proto.mBattery_i = function () {
		var t = new eui.Image();
		this.mBattery = t;
		t.source = "dianchi_png";
		t.x = 625;
		t.y = 1157;
		return t;
	};
	_proto.mPillow_i = function () {
		var t = new eui.Image();
		this.mPillow = t;
		t.source = "zhengtou2_png";
		t.x = 545;
		t.y = 1106;
		return t;
	};
	_proto.mCat_i = function () {
		var t = new eui.Image();
		this.mCat = t;
		t.source = "maochu2_png";
		t.x = 1860;
		t.y = -176;
		return t;
	};
	return Days19ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days1ViewSkin.exml'] = window.Days1ViewSkin = (function (_super) {
	__extends(Days1ViewSkin, _super);
	function Days1ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L","bg_M","bg_R","haibao","binxiang1","binxiang2","men1","men2","weibolu1","weibolu2","shizhen","fenzhen","zhongBtn","mao","huiqie","baixiong","xiongmao","dun","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days1ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this.haibao_i(),this.binxiang1_i(),this.binxiang2_i(),this.men1_i(),this.men2_i(),this.weibolu1_i(),this.weibolu2_i(),this._Image7_i(),this.shizhen_i(),this.fenzhen_i(),this.zhongBtn_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this.mao_i(),this.huiqie_i(),this.baixiong_i(),this.xiongmao_i(),this.dun_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L_i(),this.bg_M_i(),this.bg_R_i()];
		return t;
	};
	_proto.bg_L_i = function () {
		var t = new eui.Group();
		this.bg_L = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M_i = function () {
		var t = new eui.Group();
		this.bg_M = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R_i = function () {
		var t = new eui.Group();
		this.bg_R = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.haibao_i = function () {
		var t = new eui.Image();
		this.haibao = t;
		t.source = "haibao_png";
		t.x = 2517.84;
		t.y = 1327;
		return t;
	};
	_proto.binxiang1_i = function () {
		var t = new eui.Image();
		this.binxiang1 = t;
		t.source = "binxiang1_png";
		t.x = 2250;
		t.y = 666;
		return t;
	};
	_proto.binxiang2_i = function () {
		var t = new eui.Image();
		this.binxiang2 = t;
		t.source = "binxiang2_png";
		t.visible = false;
		t.x = 2250;
		t.y = 666;
		return t;
	};
	_proto.men1_i = function () {
		var t = new eui.Image();
		this.men1 = t;
		t.source = "men1_png";
		t.x = 1703;
		t.y = 404;
		return t;
	};
	_proto.men2_i = function () {
		var t = new eui.Image();
		this.men2 = t;
		t.source = "men2_png";
		t.visible = false;
		t.x = 1706;
		t.y = 404;
		return t;
	};
	_proto.weibolu1_i = function () {
		var t = new eui.Image();
		this.weibolu1 = t;
		t.source = "weibolu1_png";
		t.x = 2252;
		t.y = 528;
		return t;
	};
	_proto.weibolu2_i = function () {
		var t = new eui.Image();
		this.weibolu2 = t;
		t.source = "weibolu2_png";
		t.visible = false;
		t.x = 2146;
		t.y = 525;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "zhong_png";
		t.x = 2247;
		t.y = 206;
		return t;
	};
	_proto.shizhen_i = function () {
		var t = new eui.Image();
		this.shizhen = t;
		t.anchorOffsetX = 11;
		t.anchorOffsetY = 9.5;
		t.source = "shizhen_png";
		t.x = 2377;
		t.y = 333;
		return t;
	};
	_proto.fenzhen_i = function () {
		var t = new eui.Image();
		this.fenzhen = t;
		t.anchorOffsetX = 6;
		t.anchorOffsetY = 82;
		t.source = "fenzhen_png";
		t.x = 2377;
		t.y = 329.5;
		return t;
	};
	_proto.zhongBtn_i = function () {
		var t = new eui.Image();
		this.zhongBtn = t;
		t.alpha = 0;
		t.source = "zhong_png";
		t.x = 2247;
		t.y = 206;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "jiaoyin3_png";
		t.x = 2440.96;
		t.y = 1431.59;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "saifa1_png";
		t.x = 553.23;
		t.y = 985.8;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "pa_png";
		t.x = 857.42;
		t.y = 1114.54;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "jiaoyin3_png";
		t.x = 3408.06;
		t.y = 1377.56;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "jiaoyin3_png";
		t.x = 3588.2;
		t.y = 1388.15;
		return t;
	};
	_proto.mao_i = function () {
		var t = new eui.Image();
		this.mao = t;
		t.source = "mao1_png";
		t.x = 3702.56;
		t.y = 1159.48;
		return t;
	};
	_proto.huiqie_i = function () {
		var t = new eui.Image();
		this.huiqie = t;
		t.source = "huiqie_png";
		t.x = 3632.68;
		t.y = 1142.16;
		return t;
	};
	_proto.baixiong_i = function () {
		var t = new eui.Image();
		this.baixiong = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "baixiong_png";
		t.x = 3677.42;
		t.y = 1142.6;
		return t;
	};
	_proto.xiongmao_i = function () {
		var t = new eui.Image();
		this.xiongmao = t;
		t.source = "xiongmao_png";
		t.x = 3752.59;
		t.y = 1187.52;
		return t;
	};
	_proto.dun_i = function () {
		var t = new eui.Image();
		this.dun = t;
		t.scaleX = -1;
		t.source = "dun1_png";
		t.visible = false;
		t.x = 3840;
		t.y = 967;
		return t;
	};
	return Days1ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days20ViewSkin.exml'] = window.Days20ViewSkin = (function (_super) {
	__extends(Days20ViewSkin, _super);
	function Days20ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L1","bg_M1","bg_R1","maojiao","mao1","moshumao1","yigui2","gutou","xianglian","maomao","yigui1","tunvlang","aliens","mainLion","dog","magic","smokeGroup1","smokeGroup2","moshumao3","jiantou2","jiantou","moshumao2","moshubang","yigui4","yifu_tunvlang","yifu_waixingren","yigui3","moshubangBtn","leftjiaotou","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days20ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this.maojiao_i(),this.mao1_i(),this.moshumao1_i(),this.yigui2_i(),this.gutou_i(),this.xianglian_i(),this.maomao_i(),this.yigui1_i(),this.tunvlang_i(),this.aliens_i(),this.mainLion_i(),this.dog_i(),this.magic_i(),this.smokeGroup1_i(),this.smokeGroup2_i(),this.moshumao3_i(),this.jiantou2_i(),this.jiantou_i(),this.moshumao2_i(),this.moshubang_i(),this.yigui4_i(),this.yifu_tunvlang_i(),this.yifu_waixingren_i(),this.yigui3_i(),this.moshubangBtn_i(),this.leftjiaotou_i(),this._Image7_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L1_i(),this.bg_M1_i(),this.bg_R1_i()];
		return t;
	};
	_proto.bg_L1_i = function () {
		var t = new eui.Group();
		this.bg_L1 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M1_i = function () {
		var t = new eui.Group();
		this.bg_M1 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R1_i = function () {
		var t = new eui.Group();
		this.bg_R1 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.maojiao_i = function () {
		var t = new eui.Image();
		this.maojiao = t;
		t.source = "maojiao_png";
		t.visible = false;
		t.x = 1818;
		t.y = 1250;
		return t;
	};
	_proto.mao1_i = function () {
		var t = new eui.Image();
		this.mao1 = t;
		t.source = "mao1_png";
		t.visible = false;
		t.x = 1818;
		t.y = 1250;
		return t;
	};
	_proto.moshumao1_i = function () {
		var t = new eui.Image();
		this.moshumao1 = t;
		t.source = "moshumao_png";
		t.visible = false;
		t.x = 1776;
		t.y = 1208;
		return t;
	};
	_proto.yigui2_i = function () {
		var t = new eui.Image();
		this.yigui2 = t;
		t.source = "yigui2_png";
		t.visible = false;
		t.x = 2142;
		t.y = 333;
		return t;
	};
	_proto.gutou_i = function () {
		var t = new eui.Image();
		this.gutou = t;
		t.source = "gougutou_png";
		t.x = 2390;
		t.y = 848;
		return t;
	};
	_proto.xianglian_i = function () {
		var t = new eui.Image();
		this.xianglian = t;
		t.source = "xianglian_png";
		t.x = 2363;
		t.y = 718;
		return t;
	};
	_proto.maomao_i = function () {
		var t = new eui.Image();
		this.maomao = t;
		t.source = "maomao_png";
		t.x = 2276.18;
		t.y = 854.91;
		return t;
	};
	_proto.yigui1_i = function () {
		var t = new eui.Image();
		this.yigui1 = t;
		t.source = "yigui1_png";
		t.x = 2142;
		t.y = 333;
		return t;
	};
	_proto.tunvlang_i = function () {
		var t = new eui.Image();
		this.tunvlang = t;
		t.source = "tunvlang_uncle_png";
		t.visible = false;
		t.x = 1718;
		t.y = 767;
		return t;
	};
	_proto.aliens_i = function () {
		var t = new eui.Image();
		this.aliens = t;
		t.source = "chengjiu24_png";
		t.visible = false;
		t.x = 1432.49;
		t.y = 660.21;
		return t;
	};
	_proto.mainLion_i = function () {
		var t = new eui.Image();
		this.mainLion = t;
		t.source = "mainLion_png";
		t.visible = false;
		t.x = 2081.7;
		t.y = 908.76;
		return t;
	};
	_proto.dog_i = function () {
		var t = new eui.Image();
		this.dog = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 423.23;
		t.source = "15_png";
		t.visible = false;
		t.width = 362.77;
		t.x = 1994.85;
		t.y = 785;
		return t;
	};
	_proto.magic_i = function () {
		var t = new eui.Image();
		this.magic = t;
		t.source = "magic_uncle2_png";
		t.x = 1757.76;
		t.y = 805.92;
		return t;
	};
	_proto.smokeGroup1_i = function () {
		var t = new eui.DataGroup();
		this.smokeGroup1 = t;
		t.height = 539;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 639;
		t.x = 1849.77;
		t.y = 618.5;
		return t;
	};
	_proto.smokeGroup2_i = function () {
		var t = new eui.DataGroup();
		this.smokeGroup2 = t;
		t.height = 539;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 639;
		t.x = 1611.77;
		t.y = 868.5;
		return t;
	};
	_proto.moshumao3_i = function () {
		var t = new eui.Image();
		this.moshumao3 = t;
		t.scaleX = -1;
		t.scaleY = -1;
		t.source = "moshumao_png";
		t.x = 2279.77;
		t.y = 1264.78;
		return t;
	};
	_proto.jiantou2_i = function () {
		var t = new eui.Image();
		this.jiantou2 = t;
		t.source = "jiantou2_png";
		t.visible = false;
		t.x = 1836.76;
		t.y = 714.9;
		return t;
	};
	_proto.jiantou_i = function () {
		var t = new eui.Image();
		this.jiantou = t;
		t.scaleX = -1;
		t.source = "jiantou_png";
		t.x = 1924.33;
		t.y = 751.67;
		return t;
	};
	_proto.moshumao2_i = function () {
		var t = new eui.Image();
		this.moshumao2 = t;
		t.source = "moshumao_png";
		t.x = 1777;
		t.y = 709;
		return t;
	};
	_proto.moshubang_i = function () {
		var t = new eui.Image();
		this.moshubang = t;
		t.source = "moshubang_png";
		t.x = 482;
		t.y = 794;
		return t;
	};
	_proto.yigui4_i = function () {
		var t = new eui.Image();
		this.yigui4 = t;
		t.source = "yigui2_png";
		t.x = 494;
		t.y = 333.91;
		return t;
	};
	_proto.yifu_tunvlang_i = function () {
		var t = new eui.Image();
		this.yifu_tunvlang = t;
		t.source = "yifu_tunvlang_png";
		t.x = 802.91;
		t.y = 442.15;
		return t;
	};
	_proto.yifu_waixingren_i = function () {
		var t = new eui.Image();
		this.yifu_waixingren = t;
		t.source = "yifu_waixingren_png";
		t.x = 657.7;
		t.y = 439.54;
		return t;
	};
	_proto.yigui3_i = function () {
		var t = new eui.Image();
		this.yigui3 = t;
		t.source = "yigui1_png";
		t.visible = false;
		t.x = 494;
		t.y = 333.91;
		return t;
	};
	_proto.moshubangBtn_i = function () {
		var t = new eui.Rect();
		this.moshubangBtn = t;
		t.fillAlpha = 0;
		t.height = 142;
		t.width = 212;
		t.x = 482;
		t.y = 794;
		return t;
	};
	_proto.leftjiaotou_i = function () {
		var t = new eui.Rect();
		this.leftjiaotou = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 162;
		t.width = 135;
		t.x = 1620;
		t.y = 1088;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "lajitong_png";
		t.x = 224;
		t.y = 875.88;
		return t;
	};
	return Days20ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days21ViewSkin.exml'] = window.Days21ViewSkin = (function (_super) {
	__extends(Days21ViewSkin, _super);
	function Days21ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L0","bg_M0","bg_R0","doctorUncle1","doctorUncle2","cat_package4","cat_package1","lock","lock_ring","magnet2","guizi2","chuizi","guizi1","magnetBtn","chuizi2","keys1","magnet3","dimian","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days21ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this._Image7_i(),this.doctorUncle1_i(),this.doctorUncle2_i(),this._Image8_i(),this.cat_package4_i(),this.cat_package1_i(),this.lock_i(),this.lock_ring_i(),this.magnet2_i(),this.guizi2_i(),this.chuizi_i(),this.guizi1_i(),this.magnetBtn_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this.chuizi2_i(),this.keys1_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this.magnet3_i(),this.dimian_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L0_i(),this.bg_M0_i(),this.bg_R0_i()];
		return t;
	};
	_proto.bg_L0_i = function () {
		var t = new eui.Group();
		this.bg_L0 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M0_i = function () {
		var t = new eui.Group();
		this.bg_M0 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R0_i = function () {
		var t = new eui.Group();
		this.bg_R0 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 26;
		t.source = "hospitalBg_png";
		t.verticalCenter = -390;
		return t;
	};
	_proto.doctorUncle1_i = function () {
		var t = new eui.Image();
		this.doctorUncle1 = t;
		t.source = "doctorUncle1_png";
		t.x = 1836;
		t.y = 503;
		return t;
	};
	_proto.doctorUncle2_i = function () {
		var t = new eui.Image();
		this.doctorUncle2 = t;
		t.source = "doctorUncle2_png";
		t.visible = false;
		t.x = 1836;
		t.y = 503;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "hospitalDesk_png";
		t.x = 1703;
		t.y = 886;
		return t;
	};
	_proto.cat_package4_i = function () {
		var t = new eui.Image();
		this.cat_package4 = t;
		t.source = "cat_package4_png";
		t.visible = false;
		t.x = 2240;
		t.y = 862;
		return t;
	};
	_proto.cat_package1_i = function () {
		var t = new eui.Image();
		this.cat_package1 = t;
		t.source = "cat_package1_png";
		t.x = 2240;
		t.y = 862;
		return t;
	};
	_proto.lock_i = function () {
		var t = new eui.Image();
		this.lock = t;
		t.source = "lock_png";
		t.x = 2414;
		t.y = 966;
		return t;
	};
	_proto.lock_ring_i = function () {
		var t = new eui.Image();
		this.lock_ring = t;
		t.source = "lock_ring_png";
		t.x = 2442;
		t.y = 980;
		return t;
	};
	_proto.magnet2_i = function () {
		var t = new eui.Image();
		this.magnet2 = t;
		t.source = "magnet2_png";
		t.x = 3430;
		t.y = 1152;
		return t;
	};
	_proto.guizi2_i = function () {
		var t = new eui.Image();
		this.guizi2 = t;
		t.source = "guizi2_png";
		t.x = 3418;
		t.y = 548;
		return t;
	};
	_proto.chuizi_i = function () {
		var t = new eui.Image();
		this.chuizi = t;
		t.source = "chuizi_png";
		t.x = 3578;
		t.y = 1148;
		return t;
	};
	_proto.guizi1_i = function () {
		var t = new eui.Image();
		this.guizi1 = t;
		t.source = "guizi1_png";
		t.visible = false;
		t.x = 3418;
		t.y = 548;
		return t;
	};
	_proto.magnetBtn_i = function () {
		var t = new eui.Rect();
		this.magnetBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 95.76;
		t.width = 101.82;
		t.x = 3427;
		t.y = 1155;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "canned1_png";
		t.x = 3620;
		t.y = 900;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "canned1_png";
		t.x = 3620;
		t.y = 940;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "canned1_png";
		t.x = 3692;
		t.y = 948;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "canned2_png";
		t.x = 3590;
		t.y = 810;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "canned2_png";
		t.x = 3590;
		t.y = 772;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "canned2_png";
		t.x = 3662;
		t.y = 818;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "canned2_png";
		t.x = 3742;
		t.y = 826;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "canned2_png";
		t.x = 3742;
		t.y = 788;
		return t;
	};
	_proto.chuizi2_i = function () {
		var t = new eui.Image();
		this.chuizi2 = t;
		t.anchorOffsetY = 111;
		t.source = "chuizi_png";
		t.visible = false;
		t.x = 2290;
		t.y = 990;
		return t;
	};
	_proto.keys1_i = function () {
		var t = new eui.Image();
		this.keys1 = t;
		t.source = "keys1_png";
		t.x = 718;
		t.y = 1196;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "saifa1_png";
		t.touchEnabled = false;
		t.x = 550;
		t.y = 978;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "posters4_png";
		t.x = 788;
		t.y = 628;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "posters5_png";
		t.x = 718;
		t.y = 506;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "posters6_png";
		t.x = 970;
		t.y = 516;
		return t;
	};
	_proto.magnet3_i = function () {
		var t = new eui.Image();
		this.magnet3 = t;
		t.rotation = 238.39;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "magnet2_png";
		t.visible = false;
		t.x = 877.06;
		t.y = 1385.43;
		return t;
	};
	_proto.dimian_i = function () {
		var t = new eui.Rect();
		this.dimian = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 98;
		t.width = 116;
		t.x = 807;
		t.y = 1274;
		return t;
	};
	return Days21ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days22ViewSkin.exml'] = window.Days22ViewSkin = (function (_super) {
	__extends(Days22ViewSkin, _super);
	function Days22ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L1","bg_M1","bg_R1","shizhen","fenzhen","zhongBtn","binxiang2","cat_happy","frozenCat","cat_fever2","binxiang1","men2","men1","feverGroup","cat_fever1","moshubang1","moshubang2","mainLion","smokeGroup","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days22ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this._Image7_i(),this._Image8_i(),this.shizhen_i(),this.fenzhen_i(),this.zhongBtn_i(),this._Image9_i(),this.binxiang2_i(),this.cat_happy_i(),this.frozenCat_i(),this.cat_fever2_i(),this.binxiang1_i(),this.men2_i(),this.men1_i(),this.feverGroup_i(),this.cat_fever1_i(),this.moshubang1_i(),this.moshubang2_i(),this.mainLion_i(),this.smokeGroup_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L1_i(),this.bg_M1_i(),this.bg_R1_i()];
		return t;
	};
	_proto.bg_L1_i = function () {
		var t = new eui.Group();
		this.bg_L1 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M1_i = function () {
		var t = new eui.Group();
		this.bg_M1 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R1_i = function () {
		var t = new eui.Group();
		this.bg_R1 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "hospitalBg_png";
		t.x = 1842.21;
		t.y = 275.46;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "zhong_png";
		t.x = 335.03;
		t.y = 156.56;
		return t;
	};
	_proto.shizhen_i = function () {
		var t = new eui.Image();
		this.shizhen = t;
		t.anchorOffsetX = 11;
		t.anchorOffsetY = 9.5;
		t.source = "shizhen_png";
		t.x = 465.17;
		t.y = 283.65;
		return t;
	};
	_proto.fenzhen_i = function () {
		var t = new eui.Image();
		this.fenzhen = t;
		t.anchorOffsetX = 6;
		t.anchorOffsetY = 82;
		t.source = "fenzhen_png";
		t.x = 465.17;
		t.y = 280.15;
		return t;
	};
	_proto.zhongBtn_i = function () {
		var t = new eui.Rect();
		this.zhongBtn = t;
		t.fillAlpha = 0;
		t.height = 254;
		t.width = 260;
		t.x = 335.03;
		t.y = 156.56;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "hospitalDesk_png";
		t.x = 1702.85;
		t.y = 884.94;
		return t;
	};
	_proto.binxiang2_i = function () {
		var t = new eui.Image();
		this.binxiang2 = t;
		t.source = "binxiang2_png";
		t.visible = false;
		t.x = 373;
		t.y = 1064;
		return t;
	};
	_proto.cat_happy_i = function () {
		var t = new eui.Image();
		this.cat_happy = t;
		t.source = "cat_happy_png";
		t.visible = false;
		t.x = 433;
		t.y = 1208;
		return t;
	};
	_proto.frozenCat_i = function () {
		var t = new eui.Image();
		this.frozenCat = t;
		t.source = "frozenCat_png";
		t.visible = false;
		t.x = 430.03;
		t.y = 1197.03;
		return t;
	};
	_proto.cat_fever2_i = function () {
		var t = new eui.Image();
		this.cat_fever2 = t;
		t.source = "cat_fever1_png";
		t.visible = false;
		t.x = 433;
		t.y = 1236;
		return t;
	};
	_proto.binxiang1_i = function () {
		var t = new eui.Image();
		this.binxiang1 = t;
		t.source = "binxiang1_png";
		t.x = 373;
		t.y = 1064;
		return t;
	};
	_proto.men2_i = function () {
		var t = new eui.Image();
		this.men2 = t;
		t.source = "men2_png";
		t.visible = false;
		t.x = 682;
		t.y = 400;
		return t;
	};
	_proto.men1_i = function () {
		var t = new eui.Image();
		this.men1 = t;
		t.source = "men1_png";
		t.x = 682;
		t.y = 400;
		return t;
	};
	_proto.feverGroup_i = function () {
		var t = new eui.Group();
		this.feverGroup = t;
		t.height = 122;
		t.width = 164;
		t.x = 2282;
		t.y = 920;
		return t;
	};
	_proto.cat_fever1_i = function () {
		var t = new eui.Image();
		this.cat_fever1 = t;
		t.source = "cat_fever1_png";
		t.visible = false;
		t.x = 2282;
		t.y = 920;
		return t;
	};
	_proto.moshubang1_i = function () {
		var t = new eui.Image();
		this.moshubang1 = t;
		t.source = "moshubang_png";
		t.visible = false;
		t.x = 1796.97;
		t.y = 839;
		return t;
	};
	_proto.moshubang2_i = function () {
		var t = new eui.Image();
		this.moshubang2 = t;
		t.rotation = 334.35;
		t.source = "moshubang_png";
		t.x = 1784.86;
		t.y = 886.92;
		return t;
	};
	_proto.mainLion_i = function () {
		var t = new eui.Image();
		this.mainLion = t;
		t.source = "mainLion_png";
		t.visible = false;
		t.x = 2260;
		t.y = 880;
		return t;
	};
	_proto.smokeGroup_i = function () {
		var t = new eui.DataGroup();
		this.smokeGroup = t;
		t.height = 539;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 639;
		t.x = 2033.43;
		t.y = 683.54;
		return t;
	};
	return Days22ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days23ViewSkin.exml'] = window.Days23ViewSkin = (function (_super) {
	__extends(Days23ViewSkin, _super);
	function Days23ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L0","bg_M0","bg_R0","keys","liefen2","liefen1","doctorUncle","mao1","maojiao","Nloop2","desk_close","chuizi1","chuizi2","desk_open","computer_open","computer_close","goose2","uncle_check","demu1","demu_angry","cage_close1","cage_open1","goose1","cage_close2","cage_open2","lock1","lock_ring1","lock2","lock_ring2","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days23ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this._Image7_i(),this._Image8_i(),this.keys_i(),this.liefen2_i(),this.liefen1_i(),this.doctorUncle_i(),this.mao1_i(),this.maojiao_i(),this.Nloop2_i(),this._Image9_i(),this.desk_close_i(),this.chuizi1_i(),this.chuizi2_i(),this.desk_open_i(),this.computer_open_i(),this.computer_close_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this.goose2_i(),this.uncle_check_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this.demu1_i(),this.demu_angry_i(),this.cage_close1_i(),this.cage_open1_i(),this._Image25_i(),this.goose1_i(),this.cage_close2_i(),this.cage_open2_i(),this.lock1_i(),this.lock_ring1_i(),this.lock2_i(),this.lock_ring2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L0_i(),this.bg_M0_i(),this.bg_R0_i()];
		return t;
	};
	_proto.bg_L0_i = function () {
		var t = new eui.Group();
		this.bg_L0 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M0_i = function () {
		var t = new eui.Group();
		this.bg_M0 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R0_i = function () {
		var t = new eui.Group();
		this.bg_R0 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "hospitalBg_png";
		t.x = 1842;
		t.y = 276;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "hospitalDesk_png";
		t.x = 1704;
		t.y = 886;
		return t;
	};
	_proto.keys_i = function () {
		var t = new eui.Image();
		this.keys = t;
		t.source = "keys1_png";
		t.x = 2374;
		t.y = 978;
		return t;
	};
	_proto.liefen2_i = function () {
		var t = new eui.Image();
		this.liefen2 = t;
		t.source = "liefen2_png";
		t.visible = false;
		t.x = 1848;
		t.y = 1008;
		return t;
	};
	_proto.liefen1_i = function () {
		var t = new eui.Image();
		this.liefen1 = t;
		t.source = "liefen1_png";
		t.x = 1848;
		t.y = 1008;
		return t;
	};
	_proto.doctorUncle_i = function () {
		var t = new eui.Image();
		this.doctorUncle = t;
		t.source = "doctorUncle1_png";
		t.x = 1812;
		t.y = 713.5;
		return t;
	};
	_proto.mao1_i = function () {
		var t = new eui.Image();
		this.mao1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 97.12;
		t.source = "mao1_png";
		t.visible = false;
		t.width = 124.44;
		t.x = 1886;
		t.y = 1090;
		return t;
	};
	_proto.maojiao_i = function () {
		var t = new eui.Image();
		this.maojiao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 107.43;
		t.source = "maojiao_png";
		t.visible = false;
		t.width = 111.41;
		t.x = 1892.8;
		t.y = 1086.84;
		return t;
	};
	_proto.Nloop2_i = function () {
		var t = new eui.Image();
		this.Nloop2 = t;
		t.scaleX = -1;
		t.source = "Nloop2_png";
		t.visible = false;
		t.x = 2111.08;
		t.y = 736;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "desk_2_png";
		t.x = 3292;
		t.y = 1004;
		return t;
	};
	_proto.desk_close_i = function () {
		var t = new eui.Image();
		this.desk_close = t;
		t.source = "desk_open_png";
		t.visible = false;
		t.x = 3488;
		t.y = 1126;
		return t;
	};
	_proto.chuizi1_i = function () {
		var t = new eui.Image();
		this.chuizi1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 97.41;
		t.rotation = 263.76;
		t.scaleX = 1;
		t.scaleY = -1;
		t.source = "chuizi_png";
		t.width = 155.33;
		t.x = 3648.55;
		t.y = 1313.29;
		return t;
	};
	_proto.chuizi2_i = function () {
		var t = new eui.Image();
		this.chuizi2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 111;
		t.source = "chuizi_png";
		t.visible = false;
		t.x = 1779.62;
		t.y = 1125.32;
		return t;
	};
	_proto.desk_open_i = function () {
		var t = new eui.Image();
		this.desk_open = t;
		t.source = "desk_close_png";
		t.x = 3488;
		t.y = 1126;
		return t;
	};
	_proto.computer_open_i = function () {
		var t = new eui.Image();
		this.computer_open = t;
		t.source = "computer_close_png";
		t.x = 3624;
		t.y = 858;
		return t;
	};
	_proto.computer_close_i = function () {
		var t = new eui.Image();
		this.computer_close = t;
		t.source = "computer_open_png";
		t.visible = false;
		t.x = 3624;
		t.y = 858;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "X_display_png";
		t.x = 3692;
		t.y = 480;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "posters4_png";
		t.x = 3450;
		t.y = 520;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "posters5_png";
		t.x = 3610;
		t.y = 447.5;
		return t;
	};
	_proto.goose2_i = function () {
		var t = new eui.Image();
		this.goose2 = t;
		t.source = "goose_png";
		t.visible = false;
		t.x = 3410;
		t.y = 812;
		return t;
	};
	_proto.uncle_check_i = function () {
		var t = new eui.Image();
		this.uncle_check = t;
		t.source = "uncle_check_png";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 3466;
		t.y = 758;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "canned1_png";
		t.x = 930;
		t.y = 358;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "canned1_png";
		t.x = 930;
		t.y = 426;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "canned1_png";
		t.x = 930;
		t.y = 396;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "canned1_png";
		t.x = 854;
		t.y = 396;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "canned1_png";
		t.x = 854;
		t.y = 426;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "zhiwujia_png";
		t.x = 794;
		t.y = 442;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "canned2_png";
		t.x = 584;
		t.y = 222;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "canned2_png";
		t.x = 560;
		t.y = 262;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "canned2_png";
		t.x = 496;
		t.y = 264;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "canned2_png";
		t.x = 630;
		t.y = 264;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "zhiwujia_png";
		t.x = 470;
		t.y = 280;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.source = "cage_bg_png";
		t.x = 340;
		t.y = 652;
		return t;
	};
	_proto.demu1_i = function () {
		var t = new eui.Image();
		this.demu1 = t;
		t.source = "demu1_png";
		t.x = 381;
		t.y = 686;
		return t;
	};
	_proto.demu_angry_i = function () {
		var t = new eui.Image();
		this.demu_angry = t;
		t.source = "demu_angry_png";
		t.visible = false;
		t.x = 381;
		t.y = 686;
		return t;
	};
	_proto.cage_close1_i = function () {
		var t = new eui.Image();
		this.cage_close1 = t;
		t.source = "cage_close_png";
		t.x = 332;
		t.y = 652;
		return t;
	};
	_proto.cage_open1_i = function () {
		var t = new eui.Image();
		this.cage_open1 = t;
		t.source = "cage_open_png";
		t.visible = false;
		t.x = 158;
		t.y = 654;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "cage_bg_png";
		t.x = 826;
		t.y = 754;
		return t;
	};
	_proto.goose1_i = function () {
		var t = new eui.Image();
		this.goose1 = t;
		t.source = "goose_png";
		t.x = 844;
		t.y = 786;
		return t;
	};
	_proto.cage_close2_i = function () {
		var t = new eui.Image();
		this.cage_close2 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "cage_close_png";
		t.x = 824;
		t.y = 752;
		return t;
	};
	_proto.cage_open2_i = function () {
		var t = new eui.Image();
		this.cage_open2 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "cage_open_png";
		t.visible = false;
		t.x = 702;
		t.y = 750.25;
		return t;
	};
	_proto.lock1_i = function () {
		var t = new eui.Image();
		this.lock1 = t;
		t.source = "lock_png";
		t.x = 618;
		t.y = 906;
		return t;
	};
	_proto.lock_ring1_i = function () {
		var t = new eui.Image();
		this.lock_ring1 = t;
		t.source = "lock_ring_png";
		t.x = 648;
		t.y = 920;
		return t;
	};
	_proto.lock2_i = function () {
		var t = new eui.Image();
		this.lock2 = t;
		t.source = "lock_png";
		t.x = 1016;
		t.y = 924;
		return t;
	};
	_proto.lock_ring2_i = function () {
		var t = new eui.Image();
		this.lock_ring2 = t;
		t.source = "lock_ring_png";
		t.x = 1046;
		t.y = 938;
		return t;
	};
	return Days23ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days24ViewSkin.exml'] = window.Days24ViewSkin = (function (_super) {
	__extends(Days24ViewSkin, _super);
	function Days24ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L1","bg_M1","bg_R1","nozzle1","chuizi","mao1","maojiao","cage_close","cage_open","duck","lock","lock_ring","keys_shit","nozzle2","nozzle_water","duck_angry1","duck_angry2","duck_shit","keys","food2","maoliang1","dun4","girl_shit","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days24ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this.nozzle1_i(),this.chuizi_i(),this._Image12_i(),this.mao1_i(),this.maojiao_i(),this.cage_close_i(),this.cage_open_i(),this.duck_i(),this.lock_i(),this.lock_ring_i(),this.keys_shit_i(),this.nozzle2_i(),this.nozzle_water_i(),this.duck_angry1_i(),this.duck_angry2_i(),this.duck_shit_i(),this.keys_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this.food2_i(),this._Image17_i(),this._Image18_i(),this.maoliang1_i(),this.dun4_i(),this.girl_shit_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L1_i(),this.bg_M1_i(),this.bg_R1_i()];
		return t;
	};
	_proto.bg_L1_i = function () {
		var t = new eui.Group();
		this.bg_L1 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M1_i = function () {
		var t = new eui.Group();
		this.bg_M1 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R1_i = function () {
		var t = new eui.Group();
		this.bg_R1 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "hospitalBg_png";
		t.x = 1842.3;
		t.y = 276.06;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "posters4_png";
		t.x = 675.7;
		t.y = 581.54;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "posters5_png";
		t.x = 605.88;
		t.y = 457.39;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "posters6_png";
		t.x = 860.82;
		t.y = 466.7;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "saifa1_png";
		t.x = 363.52;
		t.y = 1027.61;
		return t;
	};
	_proto.nozzle1_i = function () {
		var t = new eui.Image();
		this.nozzle1 = t;
		t.source = "nozzle_png";
		t.x = 545.79;
		t.y = 1048.7;
		return t;
	};
	_proto.chuizi_i = function () {
		var t = new eui.Image();
		this.chuizi = t;
		t.source = "chuizi_png";
		t.x = 824.61;
		t.y = 1096.82;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "cage_bg_png";
		t.x = 2224;
		t.y = 755;
		return t;
	};
	_proto.mao1_i = function () {
		var t = new eui.Image();
		this.mao1 = t;
		t.source = "mao1_png";
		t.x = 2268.17;
		t.y = 887.97;
		return t;
	};
	_proto.maojiao_i = function () {
		var t = new eui.Image();
		this.maojiao = t;
		t.source = "maojiao_png";
		t.visible = false;
		t.x = 2267;
		t.y = 882.96;
		return t;
	};
	_proto.cage_close_i = function () {
		var t = new eui.Image();
		this.cage_close = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "cage_close_png";
		t.x = 2217.94;
		t.y = 755;
		return t;
	};
	_proto.cage_open_i = function () {
		var t = new eui.Image();
		this.cage_open = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "cage_open_png";
		t.visible = false;
		t.x = 2089.84;
		t.y = 751.26;
		return t;
	};
	_proto.duck_i = function () {
		var t = new eui.Image();
		this.duck = t;
		t.source = "goose_png";
		t.x = 1869;
		t.y = 1150;
		return t;
	};
	_proto.lock_i = function () {
		var t = new eui.Image();
		this.lock = t;
		t.source = "lock_png";
		t.x = 2406.36;
		t.y = 921.1;
		return t;
	};
	_proto.lock_ring_i = function () {
		var t = new eui.Image();
		this.lock_ring = t;
		t.source = "lock_ring_png";
		t.x = 2437;
		t.y = 934;
		return t;
	};
	_proto.keys_shit_i = function () {
		var t = new eui.Image();
		this.keys_shit = t;
		t.source = "keys_shit_png";
		t.visible = false;
		t.x = 2071;
		t.y = 1298;
		return t;
	};
	_proto.nozzle2_i = function () {
		var t = new eui.Image();
		this.nozzle2 = t;
		t.scaleY = -1;
		t.source = "nozzle_png";
		t.visible = false;
		t.x = 2130.07;
		t.y = 1312.45;
		return t;
	};
	_proto.nozzle_water_i = function () {
		var t = new eui.Image();
		this.nozzle_water = t;
		t.source = "nozzle_water_png";
		t.visible = false;
		t.x = 2043.15;
		t.y = 1222.08;
		return t;
	};
	_proto.duck_angry1_i = function () {
		var t = new eui.Image();
		this.duck_angry1 = t;
		t.scaleX = -1;
		t.source = "duck_angry_png";
		t.visible = false;
		t.x = 2082.25;
		t.y = 1110.6;
		return t;
	};
	_proto.duck_angry2_i = function () {
		var t = new eui.Image();
		this.duck_angry2 = t;
		t.source = "duck_angry_png";
		t.visible = false;
		t.x = 1814.88;
		t.y = 1110.96;
		return t;
	};
	_proto.duck_shit_i = function () {
		var t = new eui.Image();
		this.duck_shit = t;
		t.source = "duck_shit_png";
		t.visible = false;
		t.x = 1823.83;
		t.y = 1128.71;
		return t;
	};
	_proto.keys_i = function () {
		var t = new eui.Image();
		this.keys = t;
		t.source = "keys1_png";
		t.visible = false;
		t.x = 2071;
		t.y = 1303;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "xiangzi1_png";
		t.x = 3307.44;
		t.y = 1059.31;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.65;
		t.scaleY = 0.65;
		t.source = "xiangzi1_png";
		t.x = 3343.23;
		t.y = 978.42;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "food2_png";
		t.x = 3575.84;
		t.y = 1269.96;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "food2_png";
		t.x = 3644.92;
		t.y = 1364.83;
		return t;
	};
	_proto.food2_i = function () {
		var t = new eui.Image();
		this.food2 = t;
		t.source = "food3_png";
		t.x = 3732.2;
		t.y = 1130.84;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "food2_png";
		t.x = 3828.6;
		t.y = 1163.6;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "food1_png";
		t.x = 3728.88;
		t.y = 1334.44;
		return t;
	};
	_proto.maoliang1_i = function () {
		var t = new eui.Image();
		this.maoliang1 = t;
		t.source = "maoliang1_png";
		t.x = 3448.42;
		t.y = 1409.44;
		return t;
	};
	_proto.dun4_i = function () {
		var t = new eui.Image();
		this.dun4 = t;
		t.scaleX = -1;
		t.source = "dun4_png";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 2463.36;
		t.y = 1113.5;
		return t;
	};
	_proto.girl_shit_i = function () {
		var t = new eui.Image();
		this.girl_shit = t;
		t.source = "girl_shit_png";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 2107.17;
		t.y = 1049.61;
		return t;
	};
	return Days24ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days25ViewSkin.exml'] = window.Days25ViewSkin = (function (_super) {
	__extends(Days25ViewSkin, _super);
	function Days25ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L0","bg_M0","bg_R0","maoyanGroup","magnet2","demu1","demuGroup","gril_hero","magnet3","maochu1","Nloop2","girl_spray","magnet1","desk_close","spray","desk_open","magnetBtn","spray2","spray3","fog","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days25ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this._Image7_i(),this._Image8_i(),this.maoyanGroup_i(),this.demuGroup_i(),this.gril_hero_i(),this.magnet3_i(),this.maochu1_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this.Nloop2_i(),this.girl_spray_i(),this.magnet1_i(),this._Image13_i(),this.desk_close_i(),this.spray_i(),this.desk_open_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this.magnetBtn_i(),this.spray2_i(),this.spray3_i(),this.fog_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L0_i(),this.bg_M0_i(),this.bg_R0_i()];
		return t;
	};
	_proto.bg_L0_i = function () {
		var t = new eui.Group();
		this.bg_L0 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M0_i = function () {
		var t = new eui.Group();
		this.bg_M0 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R0_i = function () {
		var t = new eui.Group();
		this.bg_R0 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "hospitalBg_png";
		t.x = 1844;
		t.y = 276;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "saifa2_png";
		t.x = 1680;
		t.y = 740;
		return t;
	};
	_proto.maoyanGroup_i = function () {
		var t = new eui.Group();
		this.maoyanGroup = t;
		t.height = 21;
		t.width = 65;
		t.x = 1871.71;
		t.y = 1033.08;
		return t;
	};
	_proto.demuGroup_i = function () {
		var t = new eui.Group();
		this.demuGroup = t;
		t.x = 1976;
		t.y = 881;
		t.elementsContent = [this.magnet2_i(),this.demu1_i()];
		return t;
	};
	_proto.magnet2_i = function () {
		var t = new eui.Image();
		this.magnet2 = t;
		t.rotation = 24.28;
		t.source = "magnet2_png";
		t.x = 145.18;
		t.y = 91.91;
		return t;
	};
	_proto.demu1_i = function () {
		var t = new eui.Image();
		this.demu1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "demu1_png";
		t.touchEnabled = false;
		return t;
	};
	_proto.gril_hero_i = function () {
		var t = new eui.Image();
		this.gril_hero = t;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "gril_hero_png";
		t.visible = false;
		t.x = 2350;
		t.y = 660;
		return t;
	};
	_proto.magnet3_i = function () {
		var t = new eui.Image();
		this.magnet3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 113.15;
		t.rotation = 200.15;
		t.source = "magnet1_png";
		t.visible = false;
		t.width = 113.15;
		t.x = 2355.78;
		t.y = 1072.89;
		return t;
	};
	_proto.maochu1_i = function () {
		var t = new eui.Image();
		this.maochu1 = t;
		t.source = "maochu1_png";
		t.visible = false;
		t.x = 1829.81;
		t.y = 1112.36;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "X_display_png";
		t.x = 3692;
		t.y = 481.52;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "posters4_png";
		t.x = 3439.42;
		t.y = 579.11;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "posters6_png";
		t.x = 3624;
		t.y = 468.52;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "posters5_png";
		t.x = 3572.86;
		t.y = 576.07;
		return t;
	};
	_proto.Nloop2_i = function () {
		var t = new eui.Image();
		this.Nloop2 = t;
		t.scaleX = -1;
		t.source = "Nloop2_png";
		t.x = 3485;
		t.y = 491;
		return t;
	};
	_proto.girl_spray_i = function () {
		var t = new eui.Image();
		this.girl_spray = t;
		t.scaleX = -1;
		t.source = "girl_spray_png";
		t.visible = false;
		t.x = 3487.52;
		t.y = 545.08;
		return t;
	};
	_proto.magnet1_i = function () {
		var t = new eui.Image();
		this.magnet1 = t;
		t.source = "magnet1_png";
		t.x = 3715;
		t.y = 980;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "desk_2_png";
		t.x = 3292;
		t.y = 1004;
		return t;
	};
	_proto.desk_close_i = function () {
		var t = new eui.Image();
		this.desk_close = t;
		t.source = "desk_open_png";
		t.visible = false;
		t.x = 3487;
		t.y = 1120;
		return t;
	};
	_proto.spray_i = function () {
		var t = new eui.Image();
		this.spray = t;
		t.source = "spray_png";
		t.x = 3532.84;
		t.y = 1178.37;
		return t;
	};
	_proto.desk_open_i = function () {
		var t = new eui.Image();
		this.desk_open = t;
		t.source = "desk_close_png";
		t.x = 3487;
		t.y = 1120;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "canned1_png";
		t.x = 3457.96;
		t.y = 1002.96;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "canned1_png";
		t.x = 3569.5;
		t.y = 981.14;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "canned1_png";
		t.x = 3699.15;
		t.y = 977.51;
		return t;
	};
	_proto.magnetBtn_i = function () {
		var t = new eui.Rect();
		this.magnetBtn = t;
		t.fillAlpha = 0;
		t.height = 94;
		t.width = 94;
		t.x = 3715;
		t.y = 980;
		return t;
	};
	_proto.spray2_i = function () {
		var t = new eui.Image();
		this.spray2 = t;
		t.source = "spray_png";
		t.visible = false;
		t.x = 2194.36;
		t.y = 974.74;
		return t;
	};
	_proto.spray3_i = function () {
		var t = new eui.Image();
		this.spray3 = t;
		t.scaleX = -1;
		t.source = "spray_png";
		t.visible = false;
		t.x = 3158.9;
		t.y = 513.52;
		return t;
	};
	_proto.fog_i = function () {
		var t = new eui.Image();
		this.fog = t;
		t.anchorOffsetX = 149;
		t.scaleX = -1;
		t.source = "fog_png";
		t.visible = false;
		t.x = 3158.9;
		t.y = 521.11;
		return t;
	};
	return Days25ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days26ViewSkin.exml'] = window.Days26ViewSkin = (function (_super) {
	__extends(Days26ViewSkin, _super);
	function Days26ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L1","bg_M1","bg_R1","mShiguan","mHuapen","mUncle","mUncle2","mMicroMirror","mDeskOpen","mKnife","mDeskClose","mKnife2","mogupian","xibao_1","xibao_2","xibao_3","smokeGroup","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days26ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this._Image7_i(),this._Image8_i(),this.mShiguan_i(),this.mHuapen_i(),this.mUncle_i(),this.mUncle2_i(),this._Image9_i(),this.mMicroMirror_i(),this._Image10_i(),this.mDeskOpen_i(),this.mKnife_i(),this.mDeskClose_i(),this.mKnife2_i(),this.mogupian_i(),this.xibao_1_i(),this.xibao_2_i(),this.xibao_3_i(),this.smokeGroup_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L1_i(),this.bg_M1_i(),this.bg_R1_i()];
		return t;
	};
	_proto.bg_L1_i = function () {
		var t = new eui.Group();
		this.bg_L1 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M1_i = function () {
		var t = new eui.Group();
		this.bg_M1 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R1_i = function () {
		var t = new eui.Group();
		this.bg_R1 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "hospitalBg_png";
		t.x = 1837.94;
		t.y = 272.88;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "hospitalDesk_png";
		t.x = 1704.94;
		t.y = 772.97;
		return t;
	};
	_proto.mShiguan_i = function () {
		var t = new eui.Image();
		this.mShiguan = t;
		t.bottom = 974;
		t.horizontalCenter = 200.5;
		t.source = "shiguan1_png";
		return t;
	};
	_proto.mHuapen_i = function () {
		var t = new eui.Image();
		this.mHuapen = t;
		t.bottom = 478;
		t.source = "moguhuapen1_png";
		t.x = 1935.03;
		return t;
	};
	_proto.mUncle_i = function () {
		var t = new eui.Image();
		this.mUncle = t;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "moguhuapen3_png";
		t.visible = false;
		t.x = 1935;
		t.y = 904;
		return t;
	};
	_proto.mUncle2_i = function () {
		var t = new eui.Image();
		this.mUncle2 = t;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "moguhuapen4_png";
		t.visible = false;
		t.x = 1935;
		t.y = 602;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "desk_2_png";
		t.x = 3294;
		t.y = 1006;
		return t;
	};
	_proto.mMicroMirror_i = function () {
		var t = new eui.Image();
		this.mMicroMirror = t;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "26_png";
		t.x = 3457;
		t.y = 781;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "X_display_png";
		t.x = 3691.12;
		t.y = 482;
		return t;
	};
	_proto.mDeskOpen_i = function () {
		var t = new eui.Image();
		this.mDeskOpen = t;
		t.source = "desk_open_png";
		t.visible = false;
		t.x = 3506;
		t.y = 1130;
		return t;
	};
	_proto.mKnife_i = function () {
		var t = new eui.Image();
		this.mKnife = t;
		t.source = "shoushudao_png";
		t.x = 3527.24;
		t.y = 1175.3;
		return t;
	};
	_proto.mDeskClose_i = function () {
		var t = new eui.Image();
		this.mDeskClose = t;
		t.source = "desk_close_png";
		t.x = 3506;
		t.y = 1130;
		return t;
	};
	_proto.mKnife2_i = function () {
		var t = new eui.Image();
		this.mKnife2 = t;
		t.source = "shoushudao_png";
		t.visible = false;
		t.x = 2053.24;
		t.y = 1185.3;
		return t;
	};
	_proto.mogupian_i = function () {
		var t = new eui.Image();
		this.mogupian = t;
		t.source = "mogupian_png";
		t.visible = false;
		t.x = 2103;
		t.y = 1145.5;
		return t;
	};
	_proto.xibao_1_i = function () {
		var t = new eui.Image();
		this.xibao_1 = t;
		t.height = 95;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xibao_1_png";
		t.visible = false;
		t.width = 110;
		t.x = 3536;
		t.y = 831;
		return t;
	};
	_proto.xibao_2_i = function () {
		var t = new eui.Image();
		this.xibao_2 = t;
		t.height = 94;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xibao_3_png";
		t.visible = false;
		t.width = 109;
		t.x = 3713;
		t.y = 817;
		return t;
	};
	_proto.xibao_3_i = function () {
		var t = new eui.Image();
		this.xibao_3 = t;
		t.height = 106;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xibao_5_png";
		t.visible = false;
		t.width = 104;
		t.x = 3389;
		t.y = 908;
		return t;
	};
	_proto.smokeGroup_i = function () {
		var t = new eui.Group();
		this.smokeGroup = t;
		t.height = 539;
		t.touchEnabled = false;
		t.width = 639;
		t.x = 2036;
		t.y = 588;
		return t;
	};
	return Days26ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days27ViewSkin.exml'] = window.Days27ViewSkin = (function (_super) {
	__extends(Days27ViewSkin, _super);
	function Days27ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L0","bg_M0","bg_R0","zhuzi1","zhuzi2","mao1","qiqiu4","qiqiu5","qiqiu6","uncleGroup","Nnvhai1","qiqiu2","guizi2","qiqiu1","guizi1","qiqiu3","curtainRightGroup","curtainLeftGroup","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days27ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this._Image7_i(),this._Group2_i(),this._Group3_i(),this.mao1_i(),this.uncleGroup_i(),this.Nnvhai1_i(),this._Image11_i(),this.qiqiu2_i(),this.guizi2_i(),this.qiqiu1_i(),this.guizi1_i(),this._Image12_i(),this.qiqiu3_i(),this._Image13_i(),this.curtainRightGroup_i(),this.curtainLeftGroup_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L0_i(),this.bg_M0_i(),this.bg_R0_i()];
		return t;
	};
	_proto.bg_L0_i = function () {
		var t = new eui.Group();
		this.bg_L0 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M0_i = function () {
		var t = new eui.Group();
		this.bg_M0 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R0_i = function () {
		var t = new eui.Group();
		this.bg_R0 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "hospitalBg_png";
		t.x = 1842;
		t.y = 275;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 638;
		t.x = 1800;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Image8_i(),this.zhuzi1_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = -2;
		t.horizontalAlign = "center";
		t.verticalAlign = "bottom";
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "banzi_png";
		t.top = 0;
		return t;
	};
	_proto.zhuzi1_i = function () {
		var t = new eui.Image();
		this.zhuzi1 = t;
		t.fillMode = "clip";
		t.height = 197;
		t.scale9Grid = new egret.Rectangle(0,47,77,105);
		t.source = "zhuzi1_png";
		t.x = 90;
		t.y = 76;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.bottom = 640;
		t.x = 2240;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this._Image9_i(),this.zhuzi2_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = -2;
		t.horizontalAlign = "center";
		t.verticalAlign = "bottom";
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "banzi_png";
		t.top = 0;
		return t;
	};
	_proto.zhuzi2_i = function () {
		var t = new eui.Image();
		this.zhuzi2 = t;
		t.fillMode = "clip";
		t.height = 696;
		t.scale9Grid = new egret.Rectangle(0,47,77,105);
		t.source = "zhuzi1_png";
		t.x = 90;
		t.y = 76;
		return t;
	};
	_proto.mao1_i = function () {
		var t = new eui.Image();
		this.mao1 = t;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.source = "mao1_png";
		t.x = 2314.1;
		t.y = 435.2;
		return t;
	};
	_proto.uncleGroup_i = function () {
		var t = new eui.Group();
		this.uncleGroup = t;
		t.x = 1764;
		t.y = 346;
		t.elementsContent = [this.qiqiu4_i(),this.qiqiu5_i(),this.qiqiu6_i(),this._Image10_i()];
		return t;
	};
	_proto.qiqiu4_i = function () {
		var t = new eui.Image();
		this.qiqiu4 = t;
		t.source = "qiqiu2_png";
		t.visible = false;
		t.x = 64;
		t.y = -19.5;
		return t;
	};
	_proto.qiqiu5_i = function () {
		var t = new eui.Image();
		this.qiqiu5 = t;
		t.source = "qiqiu1_png";
		t.visible = false;
		t.x = 127;
		t.y = 26;
		return t;
	};
	_proto.qiqiu6_i = function () {
		var t = new eui.Image();
		this.qiqiu6 = t;
		t.scaleX = -1;
		t.source = "qiqiu1_png";
		t.visible = false;
		t.x = 193;
		t.y = 26;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.source = "doctorUncle1_png";
		t.x = 74;
		t.y = 212;
		return t;
	};
	_proto.Nnvhai1_i = function () {
		var t = new eui.Image();
		this.Nnvhai1 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "";
		t.x = 2210;
		t.y = 826;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "lajitong_png";
		t.x = 3872;
		t.y = 1182;
		return t;
	};
	_proto.qiqiu2_i = function () {
		var t = new eui.Image();
		this.qiqiu2 = t;
		t.rotation = 304.34;
		t.source = "qiqiu1_png";
		t.x = 3604.67;
		t.y = 1161.28;
		return t;
	};
	_proto.guizi2_i = function () {
		var t = new eui.Image();
		this.guizi2 = t;
		t.source = "guizi2_png";
		t.visible = false;
		t.x = 3248;
		t.y = 481;
		return t;
	};
	_proto.qiqiu1_i = function () {
		var t = new eui.Image();
		this.qiqiu1 = t;
		t.rotation = 328.89;
		t.scaleX = -1;
		t.source = "qiqiu1_png";
		t.x = 3474;
		t.y = 924;
		return t;
	};
	_proto.guizi1_i = function () {
		var t = new eui.Image();
		this.guizi1 = t;
		t.source = "guizi1_png";
		t.x = 3248;
		t.y = 481;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "chuangwai_png";
		t.x = 336;
		t.y = 388;
		return t;
	};
	_proto.qiqiu3_i = function () {
		var t = new eui.Image();
		this.qiqiu3 = t;
		t.source = "qiqiu1_png";
		t.visible = false;
		t.x = 322.87;
		t.y = 601.15;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "window1_png";
		t.touchEnabled = false;
		t.x = 327.56;
		t.y = 371.81;
		return t;
	};
	_proto.curtainRightGroup_i = function () {
		var t = new eui.Group();
		this.curtainRightGroup = t;
		t.height = 540;
		t.width = 284;
		t.x = 320;
		t.y = 398;
		return t;
	};
	_proto.curtainLeftGroup_i = function () {
		var t = new eui.Group();
		this.curtainLeftGroup = t;
		t.height = 540;
		t.width = 284;
		t.x = 552;
		t.y = 372;
		return t;
	};
	return Days27ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days28ViewSkin.exml'] = window.Days28ViewSkin = (function (_super) {
	__extends(Days28ViewSkin, _super);
	function Days28ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L1","bg_M1","bg_R1","curtainRightGroup","curtainLeftGroup","baimao1","catsleep1","yigui2","zhengtou1","maoliang1","yigui1","zhengtou2","maoshangfang","heartGroup1","heartGroup2","maoGroup","xiangzi1","love","baimao2","girl_up","maoshuaidao","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days28ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this._Image7_i(),this._Image8_i(),this.curtainRightGroup_i(),this.curtainLeftGroup_i(),this._Image9_i(),this._Image10_i(),this.baimao1_i(),this.catsleep1_i(),this.yigui2_i(),this.zhengtou1_i(),this.maoliang1_i(),this.yigui1_i(),this.zhengtou2_i(),this.maoGroup_i(),this.xiangzi1_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this.love_i(),this.baimao2_i(),this.girl_up_i(),this.maoshuaidao_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L1_i(),this.bg_M1_i(),this.bg_R1_i()];
		return t;
	};
	_proto.bg_L1_i = function () {
		var t = new eui.Group();
		this.bg_L1 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M1_i = function () {
		var t = new eui.Group();
		this.bg_M1 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R1_i = function () {
		var t = new eui.Group();
		this.bg_R1 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chuangwai_png";
		t.x = 336;
		t.y = 388;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "window1_png";
		t.touchEnabled = false;
		t.x = 327.56;
		t.y = 371.81;
		return t;
	};
	_proto.curtainRightGroup_i = function () {
		var t = new eui.Group();
		this.curtainRightGroup = t;
		t.height = 540;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 284;
		t.x = 320;
		t.y = 398;
		return t;
	};
	_proto.curtainLeftGroup_i = function () {
		var t = new eui.Group();
		this.curtainLeftGroup = t;
		t.height = 540;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 284;
		t.x = 552;
		t.y = 372;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "saifa1_png";
		t.x = 550;
		t.y = 978;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "lajitong_png";
		t.x = 326;
		t.y = 1174;
		return t;
	};
	_proto.baimao1_i = function () {
		var t = new eui.Image();
		this.baimao1 = t;
		t.source = "baimao1_png";
		t.x = 716;
		t.y = 1008;
		return t;
	};
	_proto.catsleep1_i = function () {
		var t = new eui.Image();
		this.catsleep1 = t;
		t.source = "catsleep1_png";
		t.x = 2238;
		t.y = 282;
		return t;
	};
	_proto.yigui2_i = function () {
		var t = new eui.Image();
		this.yigui2 = t;
		t.source = "yigui2_png";
		t.visible = false;
		t.x = 2070;
		t.y = 358;
		return t;
	};
	_proto.zhengtou1_i = function () {
		var t = new eui.Image();
		this.zhengtou1 = t;
		t.source = "zhengtou2_png";
		t.x = 2248.5;
		t.y = 649.9;
		return t;
	};
	_proto.maoliang1_i = function () {
		var t = new eui.Image();
		this.maoliang1 = t;
		t.source = "maoliang1_png";
		t.x = 2202;
		t.y = 718;
		return t;
	};
	_proto.yigui1_i = function () {
		var t = new eui.Image();
		this.yigui1 = t;
		t.source = "yigui1_png";
		t.x = 2070;
		t.y = 358;
		return t;
	};
	_proto.zhengtou2_i = function () {
		var t = new eui.Image();
		this.zhengtou2 = t;
		t.source = "zhengtou2_png";
		t.visible = false;
		t.x = 2182.5;
		t.y = 1119.9;
		return t;
	};
	_proto.maoGroup_i = function () {
		var t = new eui.Group();
		this.maoGroup = t;
		t.visible = false;
		t.x = 2273;
		t.y = 304;
		t.elementsContent = [this.maoshangfang_i(),this.heartGroup1_i(),this.heartGroup2_i()];
		return t;
	};
	_proto.maoshangfang_i = function () {
		var t = new eui.Image();
		this.maoshangfang = t;
		t.bottom = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "maoshangfang_png";
		return t;
	};
	_proto.heartGroup1_i = function () {
		var t = new eui.Group();
		this.heartGroup1 = t;
		t.bottom = 2;
		t.height = 57;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.width = 64;
		t.x = -3;
		return t;
	};
	_proto.heartGroup2_i = function () {
		var t = new eui.Group();
		this.heartGroup2 = t;
		t.bottom = 2;
		t.height = 57;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.width = 64;
		t.x = 48;
		return t;
	};
	_proto.xiangzi1_i = function () {
		var t = new eui.Image();
		this.xiangzi1 = t;
		t.source = "xiangzi1_png";
		t.x = 1792;
		t.y = 1117;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "posters_love_png";
		t.x = 1850;
		t.y = 512;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "posters1_png";
		t.x = 1761;
		t.y = 424;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "posters2_png";
		t.x = 1742;
		t.y = 620;
		return t;
	};
	_proto.love_i = function () {
		var t = new eui.Image();
		this.love = t;
		t.source = "love_png";
		t.x = 1884;
		t.y = 532;
		return t;
	};
	_proto.baimao2_i = function () {
		var t = new eui.Image();
		this.baimao2 = t;
		t.source = "baimao1_png";
		t.visible = false;
		t.x = 1894;
		t.y = 1056;
		return t;
	};
	_proto.girl_up_i = function () {
		var t = new eui.Image();
		this.girl_up = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.source = "girl_up_png";
		t.visible = false;
		t.x = 2226;
		t.y = 452;
		return t;
	};
	_proto.maoshuaidao_i = function () {
		var t = new eui.Image();
		this.maoshuaidao = t;
		t.source = "maoshuaidao_png";
		t.visible = false;
		t.x = 2257;
		t.y = 1094;
		return t;
	};
	return Days28ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days29ViewSkin.exml'] = window.Days29ViewSkin = (function (_super) {
	__extends(Days29ViewSkin, _super);
	function Days29ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L0","bg_M0","bg_R0","maoGroup","cat_Angry","zhizhen","qiqiu2","qiqiu1","qiqiuGroup","maoIng","flyGroup","qiqiu_lotof","safe2","darts","safe1","gril_hero","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days29ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this._Image7_i(),this._Image8_i(),this.maoGroup_i(),this.cat_Angry_i(),this.zhizhen_i(),this.flyGroup_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this.qiqiu_lotof_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Image25_i(),this._Image26_i(),this.safe2_i(),this.darts_i(),this.safe1_i(),this.gril_hero_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L0_i(),this.bg_M0_i(),this.bg_R0_i()];
		return t;
	};
	_proto.bg_L0_i = function () {
		var t = new eui.Group();
		this.bg_L0 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M0_i = function () {
		var t = new eui.Group();
		this.bg_M0 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R0_i = function () {
		var t = new eui.Group();
		this.bg_R0 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "hospitalBg_png";
		t.x = 1842.85;
		t.y = 275;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "cheng_png";
		t.x = 1906.28;
		t.y = 657.46;
		return t;
	};
	_proto.maoGroup_i = function () {
		var t = new eui.Group();
		this.maoGroup = t;
		t.height = 128;
		t.width = 164;
		t.x = 2134;
		t.y = 1030;
		return t;
	};
	_proto.cat_Angry_i = function () {
		var t = new eui.Image();
		this.cat_Angry = t;
		t.source = "cat_Angry_png";
		t.visible = false;
		t.x = 2134;
		t.y = 1030;
		return t;
	};
	_proto.zhizhen_i = function () {
		var t = new eui.Image();
		this.zhizhen = t;
		t.anchorOffsetX = 12;
		t.anchorOffsetY = 44;
		t.rotation = 311;
		t.source = "zhizhen_png";
		t.x = 2379;
		t.y = 769;
		return t;
	};
	_proto.flyGroup_i = function () {
		var t = new eui.Group();
		this.flyGroup = t;
		t.visible = false;
		t.x = 1998.96;
		t.y = 633.56;
		t.elementsContent = [this.qiqiuGroup_i(),this.maoIng_i()];
		return t;
	};
	_proto.qiqiuGroup_i = function () {
		var t = new eui.Group();
		this.qiqiuGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.elementsContent = [this.qiqiu2_i(),this._Image9_i(),this.qiqiu1_i()];
		return t;
	};
	_proto.qiqiu2_i = function () {
		var t = new eui.Image();
		this.qiqiu2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 350.37;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "qiqiu2_png";
		t.x = 1.14;
		t.y = 0.02;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "qiqiu2_png";
		t.x = 56.12;
		t.y = -48.7;
		return t;
	};
	_proto.qiqiu1_i = function () {
		var t = new eui.Image();
		this.qiqiu1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 9.02;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "qiqiu2_png";
		t.x = 117.99;
		t.y = -50.48;
		return t;
	};
	_proto.maoIng_i = function () {
		var t = new eui.Image();
		this.maoIng = t;
		t.source = "maobeidiao_png";
		t.x = 146.1;
		t.y = 374.25;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "food2_png";
		t.x = 3344;
		t.y = 1050.55;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "food2_png";
		t.x = 3282;
		t.y = 1021.55;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "canned1_png";
		t.x = 3322;
		t.y = 1161;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "posters_green_png";
		t.x = 3794;
		t.y = 743;
		return t;
	};
	_proto.qiqiu_lotof_i = function () {
		var t = new eui.Image();
		this.qiqiu_lotof = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 393.68;
		t.source = "qiqiu_lotof_png";
		t.width = 298.23;
		t.x = 3703;
		t.y = 717.38;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "saifa1_png";
		t.x = 3997;
		t.y = 1056;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "posters_blue_png";
		t.x = 434.42;
		t.y = 228.76;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "posters_red_png";
		t.x = 847.44;
		t.y = 594.19;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "canned2_png";
		t.x = 533;
		t.y = 521;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "canned1_png";
		t.x = 856;
		t.y = 428;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "canned2_png";
		t.x = 894;
		t.y = 392;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "canned1_png";
		t.x = 934.5;
		t.y = 431;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "zhiwujia_png";
		t.x = 444;
		t.y = 535;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "desk_1_png";
		t.x = 299.93;
		t.y = 963.44;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "zhiwujia_png";
		t.x = 793.48;
		t.y = 442.08;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.source = "canned1_png";
		t.x = 357;
		t.y = 962;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.source = "canned1_png";
		t.x = 430;
		t.y = 966;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.source = "canned1_png";
		t.x = 390;
		t.y = 931;
		return t;
	};
	_proto.safe2_i = function () {
		var t = new eui.Image();
		this.safe2 = t;
		t.source = "safe2_png";
		t.visible = false;
		t.x = 525;
		t.y = 851;
		return t;
	};
	_proto.darts_i = function () {
		var t = new eui.Image();
		this.darts = t;
		t.rotation = 39.47;
		t.source = "darts_png";
		t.x = 675.34;
		t.y = 856.49;
		return t;
	};
	_proto.safe1_i = function () {
		var t = new eui.Image();
		this.safe1 = t;
		t.source = "safe1_png";
		t.x = 525;
		t.y = 851;
		return t;
	};
	_proto.gril_hero_i = function () {
		var t = new eui.Image();
		this.gril_hero = t;
		t.scaleX = -1;
		t.source = "gril_hero_png";
		t.visible = false;
		t.x = 1941;
		t.y = 742;
		return t;
	};
	return Days29ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days2ViewSkin.exml'] = window.Days2ViewSkin = (function (_super) {
	__extends(Days2ViewSkin, _super);
	function Days2ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L0","bg_M0","bg_R0","men1","men2","shizhen","fenzhen","zhongBtn","maoyan","jiandao1","zhengtou1","zhengtou2","guizi2","maobang","guizi1","xiangzi2","dashu","uncleGroup","xiangzi1","dun2","maochu","dun","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days2ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.bottom = 0;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this.men1_i(),this.men2_i(),this._Image7_i(),this.shizhen_i(),this.fenzhen_i(),this.zhongBtn_i(),this.maoyan_i(),this._Image8_i(),this.jiandao1_i(),this.zhengtou1_i(),this.zhengtou2_i(),this.guizi2_i(),this.maobang_i(),this.guizi1_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this.xiangzi2_i(),this.dashu_i(),this.uncleGroup_i(),this.xiangzi1_i(),this.dun2_i(),this.maochu_i(),this.dun_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L0_i(),this.bg_M0_i(),this.bg_R0_i()];
		return t;
	};
	_proto.bg_L0_i = function () {
		var t = new eui.Group();
		this.bg_L0 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M0_i = function () {
		var t = new eui.Group();
		this.bg_M0 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R0_i = function () {
		var t = new eui.Group();
		this.bg_R0 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.men1_i = function () {
		var t = new eui.Image();
		this.men1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "men1_png";
		t.x = 1703;
		t.y = 404;
		return t;
	};
	_proto.men2_i = function () {
		var t = new eui.Image();
		this.men2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "men2_png";
		t.visible = false;
		t.x = 1706;
		t.y = 404;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "zhong_png";
		t.x = 2247;
		t.y = 206;
		return t;
	};
	_proto.shizhen_i = function () {
		var t = new eui.Image();
		this.shizhen = t;
		t.anchorOffsetX = 11;
		t.anchorOffsetY = 9.5;
		t.source = "shizhen_png";
		t.x = 2377;
		t.y = 333;
		return t;
	};
	_proto.fenzhen_i = function () {
		var t = new eui.Image();
		this.fenzhen = t;
		t.anchorOffsetX = 6;
		t.anchorOffsetY = 82;
		t.source = "fenzhen_png";
		t.x = 2377;
		t.y = 329.5;
		return t;
	};
	_proto.zhongBtn_i = function () {
		var t = new eui.Image();
		this.zhongBtn = t;
		t.alpha = 0;
		t.source = "zhong_png";
		t.x = 2247;
		t.y = 206;
		return t;
	};
	_proto.maoyan_i = function () {
		var t = new eui.Image();
		this.maoyan = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "maoyan2_png";
		t.visible = false;
		t.x = 2352.0000000000005;
		t.y = 1056;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "saifa2_png";
		t.x = 2088;
		t.y = 764;
		return t;
	};
	_proto.jiandao1_i = function () {
		var t = new eui.Image();
		this.jiandao1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jiandao1_png";
		t.x = 2238;
		t.y = 846;
		return t;
	};
	_proto.zhengtou1_i = function () {
		var t = new eui.Image();
		this.zhengtou1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "zhengtou1_png";
		t.x = 2380;
		t.y = 776;
		return t;
	};
	_proto.zhengtou2_i = function () {
		var t = new eui.Image();
		this.zhengtou2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "zhengtou2_png";
		t.x = 2152.0000000000005;
		t.y = 791.0000000000001;
		return t;
	};
	_proto.guizi2_i = function () {
		var t = new eui.Image();
		this.guizi2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "guizi2_png";
		t.visible = false;
		t.x = 3180;
		t.y = 471;
		return t;
	};
	_proto.maobang_i = function () {
		var t = new eui.Image();
		this.maobang = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "maobang_png";
		t.x = 3314.0000000000005;
		t.y = 1073;
		return t;
	};
	_proto.guizi1_i = function () {
		var t = new eui.Image();
		this.guizi1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "guizi1_png";
		t.x = 3180;
		t.y = 471;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jiaoyin3_png";
		t.x = 3536;
		t.y = 1530;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jiaoyin3_png";
		t.x = 3670;
		t.y = 1536;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jiaoyin3_png";
		t.x = 3688.0000000000005;
		t.y = 1476.0000000000002;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jiaoyin3_png";
		t.x = 3782;
		t.y = 1472;
		return t;
	};
	_proto.xiangzi2_i = function () {
		var t = new eui.Image();
		this.xiangzi2 = t;
		t.source = "xiangzi2_png";
		t.visible = false;
		t.x = 3661;
		t.y = 1243;
		return t;
	};
	_proto.dashu_i = function () {
		var t = new eui.Image();
		this.dashu = t;
		t.source = "xdashu3_png";
		t.visible = false;
		t.x = 3591;
		t.y = 658;
		return t;
	};
	_proto.uncleGroup_i = function () {
		var t = new eui.Group();
		this.uncleGroup = t;
		t.height = 839;
		t.visible = false;
		t.width = 460;
		t.x = 3591;
		t.y = 658;
		return t;
	};
	_proto.xiangzi1_i = function () {
		var t = new eui.Image();
		this.xiangzi1 = t;
		t.height = 254;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xiangzi1_png";
		t.width = 320;
		t.x = 3661;
		t.y = 1243;
		return t;
	};
	_proto.dun2_i = function () {
		var t = new eui.Image();
		this.dun2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dun2_png";
		t.visible = false;
		t.x = 1946;
		t.y = 904.5;
		return t;
	};
	_proto.maochu_i = function () {
		var t = new eui.Image();
		this.maochu = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "maochu1_png";
		t.visible = false;
		t.x = 2343.5;
		t.y = 1130;
		return t;
	};
	_proto.dun_i = function () {
		var t = new eui.Image();
		this.dun = t;
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "dun1_png";
		t.visible = false;
		t.x = 2497.5;
		t.y = 984;
		return t;
	};
	return Days2ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days30ViewSkin.exml'] = window.Days30ViewSkin = (function (_super) {
	__extends(Days30ViewSkin, _super);
	function Days30ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L1","bg_M1","bg_R1","knife","xiangzi3","xiangzi2","xiangzi1","cat_package2","jiaodai","cat_package1","X_ray","xiangzi4","X_display","X_rayBtn","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days30ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this._Image7_i(),this.knife_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this.xiangzi3_i(),this.xiangzi2_i(),this.xiangzi1_i(),this.cat_package2_i(),this.jiaodai_i(),this.cat_package1_i(),this.X_ray_i(),this.xiangzi4_i(),this._Image14_i(),this.X_display_i(),this.X_rayBtn_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L1_i(),this.bg_M1_i(),this.bg_R1_i()];
		return t;
	};
	_proto.bg_L1_i = function () {
		var t = new eui.Group();
		this.bg_L1 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M1_i = function () {
		var t = new eui.Group();
		this.bg_M1 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R1_i = function () {
		var t = new eui.Group();
		this.bg_R1 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "food2_png";
		t.x = 924;
		t.y = 1022;
		return t;
	};
	_proto.knife_i = function () {
		var t = new eui.Image();
		this.knife = t;
		t.rotation = 60.29;
		t.source = "knife_png";
		t.x = 1039.32;
		t.y = 1097.5;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "food1_png";
		t.x = 996;
		t.y = 1062;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "hospitalBg_png";
		t.x = 1842;
		t.y = 276;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "hospitalDesk_png";
		t.x = 1703;
		t.y = 886;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "posters4_png";
		t.x = 787;
		t.y = 628;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "posters5_png";
		t.x = 715;
		t.y = 506;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "posters6_png";
		t.x = 966;
		t.y = 518;
		return t;
	};
	_proto.xiangzi3_i = function () {
		var t = new eui.Image();
		this.xiangzi3 = t;
		t.source = "xiangzi1_png";
		t.x = 573;
		t.y = 1119;
		return t;
	};
	_proto.xiangzi2_i = function () {
		var t = new eui.Image();
		this.xiangzi2 = t;
		t.source = "xiangzi1_png";
		t.x = 310;
		t.y = 1176;
		return t;
	};
	_proto.xiangzi1_i = function () {
		var t = new eui.Image();
		this.xiangzi1 = t;
		t.source = "xiangzi1_png";
		t.x = 393;
		t.y = 1013;
		return t;
	};
	_proto.cat_package2_i = function () {
		var t = new eui.Image();
		this.cat_package2 = t;
		t.source = "cat_package3_png";
		t.visible = false;
		t.x = 2242;
		t.y = 864;
		return t;
	};
	_proto.jiaodai_i = function () {
		var t = new eui.Image();
		this.jiaodai = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 216.48;
		t.source = "jiaodai_png";
		t.width = 164;
		t.x = 2327.5;
		t.y = 879.76;
		return t;
	};
	_proto.cat_package1_i = function () {
		var t = new eui.Image();
		this.cat_package1 = t;
		t.source = "cat_package1_png";
		t.x = 2242;
		t.y = 864;
		return t;
	};
	_proto.X_ray_i = function () {
		var t = new eui.Image();
		this.X_ray = t;
		t.source = "X_ray_png";
		t.x = 3220;
		t.y = 500;
		return t;
	};
	_proto.xiangzi4_i = function () {
		var t = new eui.Image();
		this.xiangzi4 = t;
		t.bottom = 856;
		t.horizontalCenter = 1370;
		t.source = "xiangzi3_png";
		t.visible = false;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "X_display_png";
		t.x = 3692;
		t.y = 482;
		return t;
	};
	_proto.X_display_i = function () {
		var t = new eui.Image();
		this.X_display = t;
		t.source = "X_cat_png";
		t.visible = false;
		t.x = 3776;
		t.y = 514;
		return t;
	};
	_proto.X_rayBtn_i = function () {
		var t = new eui.Image();
		this.X_rayBtn = t;
		t.source = "X_rayBtn_png";
		t.x = 3390;
		t.y = 537;
		return t;
	};
	return Days30ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days31ViewSkin.exml'] = window.Days31ViewSkin = (function (_super) {
	__extends(Days31ViewSkin, _super);
	function Days31ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L0","bg_M0","bg_R0","eyeGroup","fish_tank","fish","maoliang3","fish_bowl1","fish_bowl2","smokeGroup","guizi2","maoliang1","guizi1","fish_eggs","lajitong","maoliang2","dog","maochu2","dimian","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days31ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this.eyeGroup_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this.fish_tank_i(),this.fish_i(),this.maoliang3_i(),this.fish_bowl1_i(),this.fish_bowl2_i(),this.smokeGroup_i(),this.guizi2_i(),this.maoliang1_i(),this.guizi1_i(),this.fish_eggs_i(),this.lajitong_i(),this.maoliang2_i(),this.dog_i(),this.maochu2_i(),this.dimian_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L0_i(),this.bg_M0_i(),this.bg_R0_i()];
		return t;
	};
	_proto.bg_L0_i = function () {
		var t = new eui.Group();
		this.bg_L0 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M0_i = function () {
		var t = new eui.Group();
		this.bg_M0 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R0_i = function () {
		var t = new eui.Group();
		this.bg_R0 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.eyeGroup_i = function () {
		var t = new eui.Group();
		this.eyeGroup = t;
		t.height = 40;
		t.width = 58;
		t.x = 788;
		t.y = 1252;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "saifa1_png";
		t.x = 550;
		t.y = 980;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "posters4_png";
		t.x = 788;
		t.y = 630;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "posters5_png";
		t.x = 716;
		t.y = 506;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "posters6_png";
		t.x = 968;
		t.y = 518;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "hospitalBg_png";
		t.x = 1842;
		t.y = 276;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "hospitalDesk_png";
		t.x = 1704;
		t.y = 886;
		return t;
	};
	_proto.fish_tank_i = function () {
		var t = new eui.Image();
		this.fish_tank = t;
		t.source = "fish_tank_png";
		t.x = 2198;
		t.y = 842;
		return t;
	};
	_proto.fish_i = function () {
		var t = new eui.Image();
		this.fish = t;
		t.source = "fish_png";
		t.visible = false;
		t.x = 2330;
		t.y = 1002;
		return t;
	};
	_proto.maoliang3_i = function () {
		var t = new eui.Image();
		this.maoliang3 = t;
		t.source = "maoliang1_png";
		t.visible = false;
		t.x = 940;
		t.y = 1334;
		return t;
	};
	_proto.fish_bowl1_i = function () {
		var t = new eui.Image();
		this.fish_bowl1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 208.32;
		t.rotation = 360;
		t.source = "fish_bowl_png";
		t.visible = false;
		t.width = 157.81;
		t.x = 2281.5;
		t.y = 928.2;
		return t;
	};
	_proto.fish_bowl2_i = function () {
		var t = new eui.Image();
		this.fish_bowl2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 208.32;
		t.rotation = 360;
		t.source = "fish_bowl_png";
		t.visible = false;
		t.width = 157.81;
		t.x = 919.5;
		t.y = 1270.2;
		return t;
	};
	_proto.smokeGroup_i = function () {
		var t = new eui.Group();
		this.smokeGroup = t;
		t.height = 539;
		t.touchEnabled = false;
		t.width = 639;
		t.x = 2028;
		t.y = 692;
		return t;
	};
	_proto.guizi2_i = function () {
		var t = new eui.Image();
		this.guizi2 = t;
		t.source = "guizi2_png";
		t.x = 3277;
		t.y = 548;
		return t;
	};
	_proto.maoliang1_i = function () {
		var t = new eui.Image();
		this.maoliang1 = t;
		t.source = "maoliang1_png";
		t.x = 3478;
		t.y = 1196;
		return t;
	};
	_proto.guizi1_i = function () {
		var t = new eui.Image();
		this.guizi1 = t;
		t.source = "guizi1_png";
		t.visible = false;
		t.x = 3277;
		t.y = 548;
		return t;
	};
	_proto.fish_eggs_i = function () {
		var t = new eui.Image();
		this.fish_eggs = t;
		t.source = "fish_eggs_png";
		t.x = 3534;
		t.y = 814;
		return t;
	};
	_proto.lajitong_i = function () {
		var t = new eui.Image();
		this.lajitong = t;
		t.source = "lajitong_png";
		t.x = 3884;
		t.y = 1210;
		return t;
	};
	_proto.maoliang2_i = function () {
		var t = new eui.Image();
		this.maoliang2 = t;
		t.source = "maoliang2_png";
		t.visible = false;
		t.x = 4027;
		t.y = 1080;
		return t;
	};
	_proto.dog_i = function () {
		var t = new eui.Image();
		this.dog = t;
		t.source = "dogStop2_png";
		t.visible = false;
		t.x = 565;
		t.y = 1198;
		return t;
	};
	_proto.maochu2_i = function () {
		var t = new eui.Image();
		this.maochu2 = t;
		t.source = "maochu2_png";
		t.visible = false;
		t.x = 922;
		t.y = 1204;
		return t;
	};
	_proto.dimian_i = function () {
		var t = new eui.Rect();
		this.dimian = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 238;
		t.width = 304;
		t.x = 809;
		t.y = 1288;
		return t;
	};
	return Days31ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days32ViewSkin.exml'] = window.Days32ViewSkin = (function (_super) {
	__extends(Days32ViewSkin, _super);
	function Days32ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L1","bg_M1","bg_R1","guizi2","blowing1","guizi1","nozzle1","zhengtou1","cat_package1","cat_package2","dog_wet","mao1","maoBtn","shampoo","blowing2","wind2","blowing3","wind3","paopaoGroup","nozzle2","nozzle_water","curtainLeftGroup","curtainRightGroup","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days32ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this.guizi2_i(),this.blowing1_i(),this.guizi1_i(),this.nozzle1_i(),this._Image7_i(),this.zhengtou1_i(),this._Image8_i(),this._Image9_i(),this.cat_package1_i(),this.cat_package2_i(),this._Image10_i(),this._Image11_i(),this.dog_wet_i(),this.mao1_i(),this.maoBtn_i(),this.shampoo_i(),this.blowing2_i(),this.wind2_i(),this.blowing3_i(),this.wind3_i(),this.paopaoGroup_i(),this.nozzle2_i(),this.nozzle_water_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L1_i(),this.bg_M1_i(),this.bg_R1_i()];
		return t;
	};
	_proto.bg_L1_i = function () {
		var t = new eui.Group();
		this.bg_L1 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M1_i = function () {
		var t = new eui.Group();
		this.bg_M1 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R1_i = function () {
		var t = new eui.Group();
		this.bg_R1 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.guizi2_i = function () {
		var t = new eui.Image();
		this.guizi2 = t;
		t.scaleX = -1;
		t.source = "guizi2_png";
		t.x = 902;
		t.y = 548;
		return t;
	};
	_proto.blowing1_i = function () {
		var t = new eui.Image();
		this.blowing1 = t;
		t.source = "blowing_png";
		t.x = 570;
		t.y = 1098;
		return t;
	};
	_proto.guizi1_i = function () {
		var t = new eui.Image();
		this.guizi1 = t;
		t.scaleX = -1;
		t.source = "guizi1_png";
		t.visible = false;
		t.x = 902;
		t.y = 548;
		return t;
	};
	_proto.nozzle1_i = function () {
		var t = new eui.Image();
		this.nozzle1 = t;
		t.rotation = 30.56;
		t.source = "nozzle_png";
		t.x = 595.82;
		t.y = 859.48;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "saifa2_png";
		t.x = 1688;
		t.y = 878;
		return t;
	};
	_proto.zhengtou1_i = function () {
		var t = new eui.Image();
		this.zhengtou1 = t;
		t.source = "zhengtou1_png";
		t.x = 1816;
		t.y = 886;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "hospitalBg_png";
		t.x = 1842;
		t.y = 276;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "xiangzi1_png";
		t.x = 2296;
		t.y = 964;
		return t;
	};
	_proto.cat_package1_i = function () {
		var t = new eui.Image();
		this.cat_package1 = t;
		t.source = "cat_package1_png";
		t.x = 2354;
		t.y = 845;
		return t;
	};
	_proto.cat_package2_i = function () {
		var t = new eui.Image();
		this.cat_package2 = t;
		t.source = "cat_package3_png";
		t.visible = false;
		t.x = 2354;
		t.y = 845;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "bath_big_png";
		t.x = 3090;
		t.y = 1020;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "bath_snall_png";
		t.x = 3664;
		t.y = 1232;
		return t;
	};
	_proto.dog_wet_i = function () {
		var t = new eui.Image();
		this.dog_wet = t;
		t.source = "dog_wet_png";
		t.x = 3276;
		t.y = 828;
		return t;
	};
	_proto.mao1_i = function () {
		var t = new eui.Image();
		this.mao1 = t;
		t.source = "mao1_png";
		t.x = 3782;
		t.y = 1218;
		return t;
	};
	_proto.maoBtn_i = function () {
		var t = new eui.Rect();
		this.maoBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 210.91;
		t.width = 233.64;
		t.x = 3758;
		t.y = 1170;
		return t;
	};
	_proto.shampoo_i = function () {
		var t = new eui.Image();
		this.shampoo = t;
		t.source = "shampoo_png";
		t.x = 3578;
		t.y = 942;
		return t;
	};
	_proto.blowing2_i = function () {
		var t = new eui.Image();
		this.blowing2 = t;
		t.rotation = 281.66;
		t.source = "blowing_png";
		t.visible = false;
		t.x = 3499.56;
		t.y = 896.34;
		return t;
	};
	_proto.wind2_i = function () {
		var t = new eui.Image();
		this.wind2 = t;
		t.rotation = 317.4;
		t.source = "wind_png";
		t.visible = false;
		t.x = 3406;
		t.y = 948;
		return t;
	};
	_proto.blowing3_i = function () {
		var t = new eui.Image();
		this.blowing3 = t;
		t.rotation = 281.66;
		t.source = "blowing_png";
		t.visible = false;
		t.x = 3907.56;
		t.y = 1158.34;
		return t;
	};
	_proto.wind3_i = function () {
		var t = new eui.Image();
		this.wind3 = t;
		t.rotation = 317.4;
		t.source = "wind_png";
		t.visible = false;
		t.x = 3814;
		t.y = 1210;
		return t;
	};
	_proto.paopaoGroup_i = function () {
		var t = new eui.Group();
		this.paopaoGroup = t;
		t.height = 288;
		t.touchEnabled = false;
		t.width = 353;
		t.x = 3672;
		t.y = 1107;
		return t;
	};
	_proto.nozzle2_i = function () {
		var t = new eui.Image();
		this.nozzle2 = t;
		t.scaleY = -1;
		t.source = "nozzle_png";
		t.visible = false;
		t.x = 3884;
		t.y = 1226;
		return t;
	};
	_proto.nozzle_water_i = function () {
		var t = new eui.Image();
		this.nozzle_water = t;
		t.source = "nozzle_water_png";
		t.visible = false;
		t.x = 3796;
		t.y = 1134;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.scaleX = -1;
		t.touchEnabled = false;
		t.x = 3892.5;
		t.y = 216;
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this.curtainLeftGroup_i(),this.curtainRightGroup_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chuangwai_png";
		t.x = 16;
		t.y = 16;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "window1_png";
		t.touchEnabled = false;
		t.x = 7.559999999999945;
		t.y = -0.18999999999999773;
		return t;
	};
	_proto.curtainLeftGroup_i = function () {
		var t = new eui.Group();
		this.curtainLeftGroup = t;
		t.height = 540;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 284;
		t.x = 232;
		t.y = 0;
		return t;
	};
	_proto.curtainRightGroup_i = function () {
		var t = new eui.Group();
		this.curtainRightGroup = t;
		t.height = 540;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 284;
		t.x = 0;
		t.y = 26;
		return t;
	};
	return Days32ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days33ViewSkin.exml'] = window.Days33ViewSkin = (function (_super) {
	__extends(Days33ViewSkin, _super);
	function Days33ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L0","bg_M0","bg_R0","X_grey1","blowing","jiandao1","spray1","mao1","spray2","fog","cat_hairstyle1","cat_hairstyle2","cat_hairstyle3","XX_big1","XX_big2","XX_big3","curtainLeftGroup","curtainRightGroup","X_red","X_grey2","X_grey3","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days33ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this.X_grey1_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this.blowing_i(),this.jiandao1_i(),this.spray1_i(),this.mao1_i(),this.spray2_i(),this.fog_i(),this._Image18_i(),this.cat_hairstyle1_i(),this.cat_hairstyle2_i(),this.cat_hairstyle3_i(),this.XX_big1_i(),this.XX_big2_i(),this.XX_big3_i(),this._Group2_i(),this._Image21_i(),this._Image22_i(),this.X_red_i(),this.X_grey2_i(),this.X_grey3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L0_i(),this.bg_M0_i(),this.bg_R0_i()];
		return t;
	};
	_proto.bg_L0_i = function () {
		var t = new eui.Group();
		this.bg_L0 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M0_i = function () {
		var t = new eui.Group();
		this.bg_M0 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R0_i = function () {
		var t = new eui.Group();
		this.bg_R0 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "posters4_png";
		t.x = 678;
		t.y = 578;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "posters5_png";
		t.x = 606;
		t.y = 458;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "posters_special_png";
		t.x = 855;
		t.y = 464;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "xiangzi1_png";
		t.x = 690;
		t.y = 1088;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "xiangzi1_png";
		t.x = 556;
		t.y = 1139;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "xiangzi1_png";
		t.x = 619.65;
		t.y = 975.36;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "food2_png";
		t.x = 303.32;
		t.y = 1233.48;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "food1_png";
		t.x = 373.85;
		t.y = 1228.44;
		return t;
	};
	_proto.X_grey1_i = function () {
		var t = new eui.Image();
		this.X_grey1 = t;
		t.source = "X_grey_png";
		t.x = 902.63;
		t.y = 541.04;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "hospitalBg_png";
		t.x = 1843;
		t.y = 276;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "doctorUncle1_png";
		t.x = 2318.11;
		t.y = 587.47;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "desk_1_png";
		t.x = 1748.14;
		t.y = 1048.56;
		return t;
	};
	_proto.blowing_i = function () {
		var t = new eui.Image();
		this.blowing = t;
		t.rotation = 174.64;
		t.source = "blowing_png";
		t.x = 1965.23;
		t.y = 1155.72;
		return t;
	};
	_proto.jiandao1_i = function () {
		var t = new eui.Image();
		this.jiandao1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82.64;
		t.source = "jiandao1_png";
		t.width = 164.08;
		t.x = 1952.62;
		t.y = 1029.85;
		return t;
	};
	_proto.spray1_i = function () {
		var t = new eui.Image();
		this.spray1 = t;
		t.rotation = 293.67;
		t.source = "spray_png";
		t.x = 2294.19;
		t.y = 1091.3;
		return t;
	};
	_proto.mao1_i = function () {
		var t = new eui.Image();
		this.mao1 = t;
		t.bottom = 812;
		t.source = "mao1_png";
		t.x = 2116.44;
		return t;
	};
	_proto.spray2_i = function () {
		var t = new eui.Image();
		this.spray2 = t;
		t.source = "spray_png";
		t.visible = false;
		t.x = 2304;
		t.y = 940;
		return t;
	};
	_proto.fog_i = function () {
		var t = new eui.Image();
		this.fog = t;
		t.source = "fog_png";
		t.visible = false;
		t.x = 2148;
		t.y = 940;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "dialog_big_png";
		t.x = 1957.6;
		t.y = 448.04;
		return t;
	};
	_proto.cat_hairstyle1_i = function () {
		var t = new eui.Image();
		this.cat_hairstyle1 = t;
		t.source = "cat_hairstyle1_png";
		t.x = 2091.24;
		t.y = 477.61;
		return t;
	};
	_proto.cat_hairstyle2_i = function () {
		var t = new eui.Image();
		this.cat_hairstyle2 = t;
		t.source = "cat_hairstyle2_png";
		t.x = 1994.05;
		t.y = 645;
		return t;
	};
	_proto.cat_hairstyle3_i = function () {
		var t = new eui.Image();
		this.cat_hairstyle3 = t;
		t.source = "cat_hairstyle3_png";
		t.x = 2179;
		t.y = 633;
		return t;
	};
	_proto.XX_big1_i = function () {
		var t = new eui.Image();
		this.XX_big1 = t;
		t.source = "XX_big_png";
		t.visible = false;
		t.x = 2123.05;
		t.y = 510;
		return t;
	};
	_proto.XX_big2_i = function () {
		var t = new eui.Image();
		this.XX_big2 = t;
		t.source = "XX_big_png";
		t.visible = false;
		t.x = 2023.96;
		t.y = 651.81;
		return t;
	};
	_proto.XX_big3_i = function () {
		var t = new eui.Image();
		this.XX_big3 = t;
		t.source = "XX_big_png";
		t.visible = false;
		t.x = 2207;
		t.y = 657.6;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.scaleX = -1;
		t.touchEnabled = false;
		t.x = 3892.5;
		t.y = 400.86;
		t.elementsContent = [this._Image19_i(),this._Image20_i(),this.curtainLeftGroup_i(),this.curtainRightGroup_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chuangwai_png";
		t.x = 16;
		t.y = 16;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "window1_png";
		t.touchEnabled = false;
		t.x = 7.559999999999945;
		t.y = -0.18999999999999773;
		return t;
	};
	_proto.curtainLeftGroup_i = function () {
		var t = new eui.Group();
		this.curtainLeftGroup = t;
		t.height = 540;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 284;
		t.x = 232;
		t.y = 0;
		return t;
	};
	_proto.curtainRightGroup_i = function () {
		var t = new eui.Group();
		this.curtainRightGroup = t;
		t.height = 540;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 284;
		t.x = 0;
		t.y = 26;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "demu1_png";
		t.x = 3423.75;
		t.y = 952.83;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "dialog_smell_png";
		t.x = 3587.98;
		t.y = 986.58;
		return t;
	};
	_proto.X_red_i = function () {
		var t = new eui.Image();
		this.X_red = t;
		t.source = "X_red_png";
		t.x = 3612;
		t.y = 1003.04;
		return t;
	};
	_proto.X_grey2_i = function () {
		var t = new eui.Image();
		this.X_grey2 = t;
		t.source = "X_grey_png";
		t.visible = false;
		t.x = 3612.57;
		t.y = 998.59;
		return t;
	};
	_proto.X_grey3_i = function () {
		var t = new eui.Image();
		this.X_grey3 = t;
		t.source = "X_grey_png";
		t.visible = false;
		t.x = 1686;
		t.y = 1476;
		return t;
	};
	return Days33ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days34ViewSkin.exml'] = window.Days34ViewSkin = (function (_super) {
	__extends(Days34ViewSkin, _super);
	function Days34ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L1","bg_M1","bg_R1","curtainRightGroup","curtainLeftGroup","magnet1","magnetGroup","curtainRight1","baimao1","cat_package1","cat_package2","lock","lock_ring","desk_open","chuizi","desk_close","computer_close","computer_open","baimao2","keys1","uncle_check","keys2","uncleGroup","police","magnet2","dun4","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days34ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this._Image7_i(),this._Image8_i(),this.curtainRightGroup_i(),this.curtainLeftGroup_i(),this.magnetGroup_i(),this._Rect1_i(),this.curtainRight1_i(),this._Image10_i(),this._Image11_i(),this.baimao1_i(),this._Image12_i(),this._Image13_i(),this.cat_package1_i(),this.cat_package2_i(),this.lock_i(),this.lock_ring_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this.desk_open_i(),this.chuizi_i(),this.desk_close_i(),this.computer_close_i(),this.computer_open_i(),this.baimao2_i(),this.keys1_i(),this.uncleGroup_i(),this.police_i(),this.magnet2_i(),this.dun4_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L1_i(),this.bg_M1_i(),this.bg_R1_i()];
		return t;
	};
	_proto.bg_L1_i = function () {
		var t = new eui.Group();
		this.bg_L1 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M1_i = function () {
		var t = new eui.Group();
		this.bg_M1 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R1_i = function () {
		var t = new eui.Group();
		this.bg_R1 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chuangwai_png";
		t.x = 336;
		t.y = 388;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "window1_png";
		t.touchEnabled = false;
		t.x = 327.56;
		t.y = 371.81;
		return t;
	};
	_proto.curtainRightGroup_i = function () {
		var t = new eui.Group();
		this.curtainRightGroup = t;
		t.height = 540;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 284;
		t.x = 320;
		t.y = 398;
		return t;
	};
	_proto.curtainLeftGroup_i = function () {
		var t = new eui.Group();
		this.curtainLeftGroup = t;
		t.height = 540;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 284;
		t.x = 552;
		t.y = 372;
		return t;
	};
	_proto.magnetGroup_i = function () {
		var t = new eui.Group();
		this.magnetGroup = t;
		t.visible = false;
		t.x = 120;
		t.y = 583.5;
		t.elementsContent = [this._Image9_i(),this.magnet1_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "qiqiu1_png";
		t.top = 0;
		return t;
	};
	_proto.magnet1_i = function () {
		var t = new eui.Image();
		this.magnet1 = t;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "magnet1_png";
		t.x = -16;
		t.y = 308;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xf0ffff;
		t.height = 678;
		t.width = 254;
		t.x = 66;
		t.y = 342;
		return t;
	};
	_proto.curtainRight1_i = function () {
		var t = new eui.Image();
		this.curtainRight1 = t;
		t.source = "curtainRight1_png";
		t.visible = false;
		t.x = 320;
		t.y = 398;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "saifa1_png";
		t.x = 550;
		t.y = 980;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "lajitong_png";
		t.x = 326;
		t.y = 1176;
		return t;
	};
	_proto.baimao1_i = function () {
		var t = new eui.Image();
		this.baimao1 = t;
		t.source = "baimao1_png";
		t.x = 718;
		t.y = 1012;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "hospitalBg_png";
		t.x = 1842;
		t.y = 276;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "hospitalDesk_png";
		t.x = 1704;
		t.y = 885.5;
		return t;
	};
	_proto.cat_package1_i = function () {
		var t = new eui.Image();
		this.cat_package1 = t;
		t.source = "cat_package1_png";
		t.x = 2240;
		t.y = 862;
		return t;
	};
	_proto.cat_package2_i = function () {
		var t = new eui.Image();
		this.cat_package2 = t;
		t.source = "cat_package4_png";
		t.visible = false;
		t.x = 2240;
		t.y = 862;
		return t;
	};
	_proto.lock_i = function () {
		var t = new eui.Image();
		this.lock = t;
		t.source = "lock_png";
		t.x = 2412;
		t.y = 968;
		return t;
	};
	_proto.lock_ring_i = function () {
		var t = new eui.Image();
		this.lock_ring = t;
		t.source = "lock_ring_png";
		t.x = 2442;
		t.y = 982;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "posters4_png";
		t.x = 3452;
		t.y = 521.5;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "posters5_png";
		t.x = 3612;
		t.y = 449;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "X_display_png";
		t.x = 3692;
		t.y = 482;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "desk_2_png";
		t.x = 3292;
		t.y = 1004;
		return t;
	};
	_proto.desk_open_i = function () {
		var t = new eui.Image();
		this.desk_open = t;
		t.source = "desk_open_png";
		t.visible = false;
		t.x = 3488;
		t.y = 1126;
		return t;
	};
	_proto.chuizi_i = function () {
		var t = new eui.Image();
		this.chuizi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92.14;
		t.rotation = 301.42;
		t.source = "chuizi_png";
		t.width = 146.94;
		t.x = 3490.92;
		t.y = 1275.59;
		return t;
	};
	_proto.desk_close_i = function () {
		var t = new eui.Image();
		this.desk_close = t;
		t.source = "desk_close_png";
		t.x = 3488;
		t.y = 1126;
		return t;
	};
	_proto.computer_close_i = function () {
		var t = new eui.Image();
		this.computer_close = t;
		t.source = "computer_close_png";
		t.x = 3622;
		t.y = 858;
		return t;
	};
	_proto.computer_open_i = function () {
		var t = new eui.Image();
		this.computer_open = t;
		t.source = "computer_open_png";
		t.visible = false;
		t.x = 3622;
		t.y = 858;
		return t;
	};
	_proto.baimao2_i = function () {
		var t = new eui.Image();
		this.baimao2 = t;
		t.source = "baimao1_png";
		t.visible = false;
		t.x = 3398;
		t.y = 910;
		return t;
	};
	_proto.keys1_i = function () {
		var t = new eui.Image();
		this.keys1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "keys1_png";
		t.visible = false;
		t.x = 3602.64;
		t.y = 1257.62;
		return t;
	};
	_proto.uncleGroup_i = function () {
		var t = new eui.Group();
		this.uncleGroup = t;
		t.touchEnabled = false;
		t.visible = false;
		t.x = 3692;
		t.y = 842;
		t.elementsContent = [this.uncle_check_i(),this.keys2_i()];
		return t;
	};
	_proto.uncle_check_i = function () {
		var t = new eui.Image();
		this.uncle_check = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "uncle_check_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.keys2_i = function () {
		var t = new eui.Image();
		this.keys2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "keys2_png";
		t.x = 128;
		t.y = 458;
		return t;
	};
	_proto.police_i = function () {
		var t = new eui.Image();
		this.police = t;
		t.scaleX = -1;
		t.source = "police_png";
		t.visible = false;
		t.x = 3603.5;
		t.y = 762;
		return t;
	};
	_proto.magnet2_i = function () {
		var t = new eui.Image();
		this.magnet2 = t;
		t.rotation = 235.39;
		t.source = "magnet1_png";
		t.visible = false;
		t.x = 3764.03;
		t.y = 1471.53;
		return t;
	};
	_proto.dun4_i = function () {
		var t = new eui.Image();
		this.dun4 = t;
		t.scaleX = -1;
		t.source = "dun4_png";
		t.visible = false;
		t.x = 4192;
		t.y = 1198.5;
		return t;
	};
	return Days34ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days35ViewSkin.exml'] = window.Days35ViewSkin = (function (_super) {
	__extends(Days35ViewSkin, _super);
	function Days35ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L0","bg_M0","bg_R0","cat_package2","cat_package1","guizi2","Placard1","guizi1","slide","catsleep1","smooth_ground","tuopa1","stars","Placard2","Placard3","nvhai","tuopa2","huadao2","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days35ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this._Image7_i(),this._Image8_i(),this.cat_package2_i(),this.cat_package1_i(),this.guizi2_i(),this.Placard1_i(),this.guizi1_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i(),this._Image28_i(),this._Image29_i(),this.slide_i(),this._Image30_i(),this._Image31_i(),this._Image32_i(),this.catsleep1_i(),this._Image33_i(),this.smooth_ground_i(),this.tuopa1_i(),this.stars_i(),this.Placard2_i(),this.Placard3_i(),this.nvhai_i(),this.tuopa2_i(),this.huadao2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L0_i(),this.bg_M0_i(),this.bg_R0_i()];
		return t;
	};
	_proto.bg_L0_i = function () {
		var t = new eui.Group();
		this.bg_L0 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M0_i = function () {
		var t = new eui.Group();
		this.bg_M0 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R0_i = function () {
		var t = new eui.Group();
		this.bg_R0 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "hospitalBg_png";
		t.x = 1842;
		t.y = 276;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "hospitalDesk_png";
		t.x = 1704;
		t.y = 886;
		return t;
	};
	_proto.cat_package2_i = function () {
		var t = new eui.Image();
		this.cat_package2 = t;
		t.source = "cat_package3_png";
		t.visible = false;
		t.x = 2240;
		t.y = 863;
		return t;
	};
	_proto.cat_package1_i = function () {
		var t = new eui.Image();
		this.cat_package1 = t;
		t.source = "cat_package1_png";
		t.x = 2240;
		t.y = 863;
		return t;
	};
	_proto.guizi2_i = function () {
		var t = new eui.Image();
		this.guizi2 = t;
		t.source = "guizi2_png";
		t.visible = false;
		t.x = 3418;
		t.y = 548;
		return t;
	};
	_proto.Placard1_i = function () {
		var t = new eui.Image();
		this.Placard1 = t;
		t.source = "Placard1_png";
		t.x = 3604.01;
		t.y = 1070;
		return t;
	};
	_proto.guizi1_i = function () {
		var t = new eui.Image();
		this.guizi1 = t;
		t.source = "guizi1_png";
		t.x = 3418;
		t.y = 548;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "canned1_png";
		t.x = 3620;
		t.y = 900;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "canned1_png";
		t.x = 3620;
		t.y = 939;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "canned1_png";
		t.x = 3692;
		t.y = 950;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "canned2_png";
		t.x = 3665;
		t.y = 819;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "canned2_png";
		t.x = 3741;
		t.y = 825.01;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "canned2_png";
		t.x = 3741;
		t.y = 787.02;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "canned1_png";
		t.x = 856;
		t.y = 427;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "canned1_png";
		t.x = 856;
		t.y = 393.66;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "canned1_png";
		t.x = 934;
		t.y = 431;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "canned1_png";
		t.x = 934;
		t.y = 396;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "canned1_png";
		t.x = 934;
		t.y = 359;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "canned2_png";
		t.x = 494;
		t.y = 262;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "canned2_png";
		t.x = 561;
		t.y = 266;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "canned2_png";
		t.x = 632.18;
		t.y = 266;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "canned2_png";
		t.x = 583.07;
		t.y = 222.96;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.source = "zhiwujia_png";
		t.x = 470.92;
		t.y = 278.52;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.source = "zhiwujia_png";
		t.x = 794.37;
		t.y = 443.44;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.source = "posters1_png";
		t.x = 268.48;
		t.y = 708.96;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.source = "posters2_png";
		t.x = 263.48;
		t.y = 388.37;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.source = "posters_special2_png";
		t.x = 372.89;
		t.y = 682.92;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.source = "posters2_png";
		t.x = 490.89;
		t.y = 758.96;
		return t;
	};
	_proto.slide_i = function () {
		var t = new eui.Image();
		this.slide = t;
		t.source = "Slide_png";
		t.x = 407.96;
		t.y = 749.6;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.source = "food2_png";
		t.x = 473;
		t.y = 419.92;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.source = "food1_png";
		t.x = 543.89;
		t.y = 416.96;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.source = "zhiwujia_png";
		t.x = 443.77;
		t.y = 533.75;
		return t;
	};
	_proto.catsleep1_i = function () {
		var t = new eui.Image();
		this.catsleep1 = t;
		t.bottom = 1191;
		t.source = "catsleep1_png";
		t.x = 855.62;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.source = "zhiwujia_png";
		t.touchEnabled = false;
		t.x = 787.1;
		t.y = 684.67;
		return t;
	};
	_proto.smooth_ground_i = function () {
		var t = new eui.Image();
		this.smooth_ground = t;
		t.source = "smooth_ground_png";
		t.x = 110.1;
		t.y = 975.8;
		return t;
	};
	_proto.tuopa1_i = function () {
		var t = new eui.Image();
		this.tuopa1 = t;
		t.source = "tuopa_png";
		t.x = 3909;
		t.y = 895;
		return t;
	};
	_proto.stars_i = function () {
		var t = new eui.Image();
		this.stars = t;
		t.source = "stars_png";
		t.visible = false;
		t.x = 444;
		t.y = 1076;
		return t;
	};
	_proto.Placard2_i = function () {
		var t = new eui.Image();
		this.Placard2 = t;
		t.source = "Placard2_png";
		t.visible = false;
		t.x = 742;
		t.y = 1154;
		return t;
	};
	_proto.Placard3_i = function () {
		var t = new eui.Image();
		this.Placard3 = t;
		t.source = "Placard3_png";
		t.visible = false;
		t.x = 742;
		t.y = 1154;
		return t;
	};
	_proto.nvhai_i = function () {
		var t = new eui.Image();
		this.nvhai = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "";
		t.visible = false;
		t.x = 753.48;
		t.y = 390.91;
		return t;
	};
	_proto.tuopa2_i = function () {
		var t = new eui.Image();
		this.tuopa2 = t;
		t.source = "tuopa_png";
		t.visible = false;
		t.x = 270.5;
		t.y = 607.5;
		return t;
	};
	_proto.huadao2_i = function () {
		var t = new eui.Image();
		this.huadao2 = t;
		t.scaleX = -1;
		t.source = "huadao2_png";
		t.visible = false;
		t.x = 901.57;
		t.y = 805.5;
		return t;
	};
	return Days35ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days36ViewSkin.exml'] = window.Days36ViewSkin = (function (_super) {
	__extends(Days36ViewSkin, _super);
	function Days36ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L1","bg_M1","bg_R1","displayBox","cemian2","dun4","maojiao","smokeGroup","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days36ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this._Image7_i(),this.displayBox_i(),this.cemian2_i(),this._Image8_i(),this.dun4_i(),this.maojiao_i(),this.smokeGroup_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L1_i(),this.bg_M1_i(),this.bg_R1_i()];
		return t;
	};
	_proto.bg_L1_i = function () {
		var t = new eui.Group();
		this.bg_L1 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M1_i = function () {
		var t = new eui.Group();
		this.bg_M1 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R1_i = function () {
		var t = new eui.Group();
		this.bg_R1 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "answerSheet_png";
		t.x = 1784;
		t.y = 188;
		return t;
	};
	_proto.displayBox_i = function () {
		var t = new eui.Image();
		this.displayBox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 88.99;
		t.source = "displayBox_png";
		t.width = 88;
		t.x = 2386;
		t.y = 636;
		return t;
	};
	_proto.cemian2_i = function () {
		var t = new eui.Image();
		this.cemian2 = t;
		t.scaleX = -1;
		t.source = "cemian2_png";
		t.x = 2708;
		t.y = 497.5;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "hospitalDesk_png";
		t.x = 1704;
		t.y = 886;
		return t;
	};
	_proto.dun4_i = function () {
		var t = new eui.Image();
		this.dun4 = t;
		t.scaleX = -1;
		t.source = "dun4_png";
		t.visible = false;
		t.x = 2716.27;
		t.y = 874.59;
		return t;
	};
	_proto.maojiao_i = function () {
		var t = new eui.Image();
		this.maojiao = t;
		t.source = "maojiao_png";
		t.visible = false;
		t.x = 2304.73;
		t.y = 909.18;
		return t;
	};
	_proto.smokeGroup_i = function () {
		var t = new eui.Group();
		this.smokeGroup = t;
		t.height = 539;
		t.touchEnabled = false;
		t.width = 639;
		t.x = 2047.4;
		t.y = 703.5;
		return t;
	};
	return Days36ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days37ViewSkin.exml'] = window.Days37ViewSkin = (function (_super) {
	__extends(Days37ViewSkin, _super);
	function Days37ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L0","bg_M0","bg_R0","gloves","glovesBtn","binxiang2","keys_ice","binxiang1","cat_package2","cat_package1","lock","lock_ring","men2","men1","weibolu2","keys","weibolu1","shizhen","fenzhen","zhongBtn","girl","baoza","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days37ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this.gloves_i(),this._Image10_i(),this.glovesBtn_i(),this.binxiang2_i(),this.keys_ice_i(),this.binxiang1_i(),this._Image11_i(),this._Image12_i(),this.cat_package2_i(),this.cat_package1_i(),this.lock_i(),this.lock_ring_i(),this.men2_i(),this.men1_i(),this._Image13_i(),this.weibolu2_i(),this.keys_i(),this.weibolu1_i(),this._Image14_i(),this.shizhen_i(),this.fenzhen_i(),this.zhongBtn_i(),this.girl_i(),this.baoza_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L0_i(),this.bg_M0_i(),this.bg_R0_i()];
		return t;
	};
	_proto.bg_L0_i = function () {
		var t = new eui.Group();
		this.bg_L0 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M0_i = function () {
		var t = new eui.Group();
		this.bg_M0 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R0_i = function () {
		var t = new eui.Group();
		this.bg_R0 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "posters4_png";
		t.x = 786.6;
		t.y = 627.4;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "posters5_png";
		t.x = 714.05;
		t.y = 506.44;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "posters6_png";
		t.x = 966.44;
		t.y = 517.92;
		return t;
	};
	_proto.gloves_i = function () {
		var t = new eui.Image();
		this.gloves = t;
		t.source = "gloves_png";
		t.x = 745;
		t.y = 1002;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "saifa1_png";
		t.x = 757.33;
		t.y = 912.41;
		return t;
	};
	_proto.glovesBtn_i = function () {
		var t = new eui.Rect();
		this.glovesBtn = t;
		t.fillAlpha = 0;
		t.height = 106;
		t.width = 152;
		t.x = 745;
		t.y = 1002;
		return t;
	};
	_proto.binxiang2_i = function () {
		var t = new eui.Image();
		this.binxiang2 = t;
		t.source = "binxiang2_png";
		t.visible = false;
		t.x = 294;
		t.y = 1035;
		return t;
	};
	_proto.keys_ice_i = function () {
		var t = new eui.Image();
		this.keys_ice = t;
		t.source = "keys_ice_png";
		t.x = 357.48;
		t.y = 1169.44;
		return t;
	};
	_proto.binxiang1_i = function () {
		var t = new eui.Image();
		this.binxiang1 = t;
		t.source = "binxiang1_png";
		t.x = 294;
		t.y = 1035;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "hospitalBg_png";
		t.x = 1842.07;
		t.y = 276.01;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "hospitalDesk_png";
		t.x = 1703;
		t.y = 886;
		return t;
	};
	_proto.cat_package2_i = function () {
		var t = new eui.Image();
		this.cat_package2 = t;
		t.source = "cat_package4_png";
		t.visible = false;
		t.x = 2241;
		t.y = 863;
		return t;
	};
	_proto.cat_package1_i = function () {
		var t = new eui.Image();
		this.cat_package1 = t;
		t.source = "cat_package1_png";
		t.x = 2241;
		t.y = 863;
		return t;
	};
	_proto.lock_i = function () {
		var t = new eui.Image();
		this.lock = t;
		t.source = "lock_png";
		t.x = 2411.96;
		t.y = 967.86;
		return t;
	};
	_proto.lock_ring_i = function () {
		var t = new eui.Image();
		this.lock_ring = t;
		t.source = "lock_ring_png";
		t.x = 2442.48;
		t.y = 981.96;
		return t;
	};
	_proto.men2_i = function () {
		var t = new eui.Image();
		this.men2 = t;
		t.source = "men2_png";
		t.x = 3306;
		t.y = 403;
		return t;
	};
	_proto.men1_i = function () {
		var t = new eui.Image();
		this.men1 = t;
		t.source = "men1_png";
		t.x = 3306;
		t.y = 403;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "xiangzi1_png";
		t.x = 3510;
		t.y = 1112;
		return t;
	};
	_proto.weibolu2_i = function () {
		var t = new eui.Image();
		this.weibolu2 = t;
		t.source = "weibolu2_png";
		t.visible = false;
		t.x = 3428.93;
		t.y = 1024.96;
		return t;
	};
	_proto.keys_i = function () {
		var t = new eui.Image();
		this.keys = t;
		t.horizontalCenter = 1484;
		t.source = "keys_ice2_png";
		t.verticalCenter = 132;
		t.visible = false;
		return t;
	};
	_proto.weibolu1_i = function () {
		var t = new eui.Image();
		this.weibolu1 = t;
		t.source = "weibolu1_png";
		t.x = 3535;
		t.y = 1028;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "zhong_png";
		t.x = 3738.03;
		t.y = 204.99;
		return t;
	};
	_proto.shizhen_i = function () {
		var t = new eui.Image();
		this.shizhen = t;
		t.anchorOffsetX = 11;
		t.anchorOffsetY = 9.5;
		t.source = "shizhen_png";
		t.x = 3868.17;
		t.y = 332.08;
		return t;
	};
	_proto.fenzhen_i = function () {
		var t = new eui.Image();
		this.fenzhen = t;
		t.anchorOffsetX = 6;
		t.anchorOffsetY = 82;
		t.source = "fenzhen_png";
		t.x = 3868.17;
		t.y = 328.58;
		return t;
	};
	_proto.zhongBtn_i = function () {
		var t = new eui.Rect();
		this.zhongBtn = t;
		t.fillAlpha = 0;
		t.height = 254;
		t.width = 260;
		t.x = 3738.03;
		t.y = 204.99;
		return t;
	};
	_proto.girl_i = function () {
		var t = new eui.Image();
		this.girl = t;
		t.horizontalCenter = 1629;
		t.source = "gril_hero_png";
		t.visible = false;
		t.y = 820;
		return t;
	};
	_proto.baoza_i = function () {
		var t = new eui.Image();
		this.baoza = t;
		t.horizontalCenter = 1462;
		t.source = "baoza_png";
		t.verticalCenter = 136;
		t.visible = false;
		return t;
	};
	return Days37ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days38ViewSkin.exml'] = window.Days38ViewSkin = (function (_super) {
	__extends(Days38ViewSkin, _super);
	function Days38ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L1","bg_M1","bg_R1","food2","curtainRightGroup","curtainLeftGroup","gougutou1","magnetGroup","curtainRight1","lajitong","liefen2","maogroup","liefen1","posters","desk","dimian","maoliang2","dogStop2","gougutou2","dogGroup","maoliang1","chuizi1","zhengtou1","zhengtou2","maoliang3","mao1","maoliang4","chuizi2","maochu2","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days38ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this._Image7_i(),this.food2_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this.curtainRightGroup_i(),this.curtainLeftGroup_i(),this.magnetGroup_i(),this._Rect1_i(),this.curtainRight1_i(),this._Image12_i(),this.lajitong_i(),this.liefen2_i(),this.maogroup_i(),this.liefen1_i(),this.posters_i(),this._Image13_i(),this._Image14_i(),this.desk_i(),this.dimian_i(),this.maoliang2_i(),this.dogStop2_i(),this.dogGroup_i(),this.maoliang1_i(),this.chuizi1_i(),this.zhengtou1_i(),this.zhengtou2_i(),this.maoliang3_i(),this.mao1_i(),this.maoliang4_i(),this.chuizi2_i(),this.maochu2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L1_i(),this.bg_M1_i(),this.bg_R1_i()];
		return t;
	};
	_proto.bg_L1_i = function () {
		var t = new eui.Group();
		this.bg_L1 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M1_i = function () {
		var t = new eui.Group();
		this.bg_M1 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R1_i = function () {
		var t = new eui.Group();
		this.bg_R1 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "hospitalBg_png";
		t.x = 3233;
		t.y = 265.04;
		return t;
	};
	_proto.food2_i = function () {
		var t = new eui.Image();
		this.food2 = t;
		t.source = "food2_png";
		t.x = 3927.13;
		t.y = 906.4;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "saifa2_png";
		t.x = 3425.52;
		t.y = 888.96;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chuangwai_png";
		t.x = 336;
		t.y = 388;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "window1_png";
		t.touchEnabled = false;
		t.x = 327.56;
		t.y = 371.81;
		return t;
	};
	_proto.curtainRightGroup_i = function () {
		var t = new eui.Group();
		this.curtainRightGroup = t;
		t.height = 540;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 284;
		t.x = 320;
		t.y = 398;
		return t;
	};
	_proto.curtainLeftGroup_i = function () {
		var t = new eui.Group();
		this.curtainLeftGroup = t;
		t.height = 540;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 284;
		t.x = 552;
		t.y = 372;
		return t;
	};
	_proto.magnetGroup_i = function () {
		var t = new eui.Group();
		this.magnetGroup = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.x = 120;
		t.y = 583.5;
		t.elementsContent = [this._Image11_i(),this.gougutou1_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "qiqiu1_png";
		t.top = 0;
		return t;
	};
	_proto.gougutou1_i = function () {
		var t = new eui.Image();
		this.gougutou1 = t;
		t.rotation = 334.41;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gougutou_png";
		t.x = -65.78;
		t.y = 359.14;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xF0FFFF;
		t.height = 678;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 254;
		t.x = 66;
		t.y = 342;
		return t;
	};
	_proto.curtainRight1_i = function () {
		var t = new eui.Image();
		this.curtainRight1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "curtainRight1_png";
		t.visible = false;
		t.x = 320;
		t.y = 398;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "saifa1_png";
		t.x = 550;
		t.y = 980;
		return t;
	};
	_proto.lajitong_i = function () {
		var t = new eui.Image();
		this.lajitong = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "lajitong_png";
		t.x = 326;
		t.y = 1176;
		return t;
	};
	_proto.liefen2_i = function () {
		var t = new eui.Image();
		this.liefen2 = t;
		t.source = "liefen2_png";
		t.visible = false;
		t.x = 2074;
		t.y = 222;
		return t;
	};
	_proto.maogroup_i = function () {
		var t = new eui.Group();
		this.maogroup = t;
		t.height = 128;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 164;
		t.x = 2108;
		t.y = 305.37;
		return t;
	};
	_proto.liefen1_i = function () {
		var t = new eui.Image();
		this.liefen1 = t;
		t.source = "liefen1_png";
		t.x = 2074;
		t.y = 222;
		return t;
	};
	_proto.posters_i = function () {
		var t = new eui.Image();
		this.posters = t;
		t.source = "posters3_png";
		t.x = 2077.34;
		t.y = 257.67;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "posters1_png";
		t.x = 1978;
		t.y = 304;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "posters2_png";
		t.x = 2233.34;
		t.y = 419.01;
		return t;
	};
	_proto.desk_i = function () {
		var t = new eui.Image();
		this.desk = t;
		t.source = "desk_1_png";
		t.x = 1799;
		t.y = 819;
		return t;
	};
	_proto.dimian_i = function () {
		var t = new eui.Rect();
		this.dimian = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 365.45;
		t.width = 847.27;
		t.x = 1746.87;
		t.y = 1106.78;
		return t;
	};
	_proto.maoliang2_i = function () {
		var t = new eui.Image();
		this.maoliang2 = t;
		t.source = "maoliang1_png";
		t.visible = false;
		t.x = 2099;
		t.y = 1248;
		return t;
	};
	_proto.dogStop2_i = function () {
		var t = new eui.Image();
		this.dogStop2 = t;
		t.source = "dogStop2_png";
		t.visible = false;
		t.x = 1763.84;
		t.y = 1103.68;
		return t;
	};
	_proto.dogGroup_i = function () {
		var t = new eui.Group();
		this.dogGroup = t;
		t.height = 227;
		t.width = 389;
		t.x = 3259.44;
		t.y = 1183.23;
		t.elementsContent = [this.gougutou2_i()];
		return t;
	};
	_proto.gougutou2_i = function () {
		var t = new eui.Image();
		this.gougutou2 = t;
		t.source = "gougutou_png";
		t.visible = false;
		t.x = -34.85;
		t.y = 100.77;
		return t;
	};
	_proto.maoliang1_i = function () {
		var t = new eui.Image();
		this.maoliang1 = t;
		t.source = "maoliang1_png";
		t.x = 3601.08;
		t.y = 1321.52;
		return t;
	};
	_proto.chuizi1_i = function () {
		var t = new eui.Image();
		this.chuizi1 = t;
		t.source = "chuizi_png";
		t.x = 3525.4;
		t.y = 934.88;
		return t;
	};
	_proto.zhengtou1_i = function () {
		var t = new eui.Image();
		this.zhengtou1 = t;
		t.source = "zhengtou1_png";
		t.x = 3718;
		t.y = 900;
		return t;
	};
	_proto.zhengtou2_i = function () {
		var t = new eui.Image();
		this.zhengtou2 = t;
		t.source = "zhengtou2_png";
		t.x = 3494.04;
		t.y = 921.06;
		return t;
	};
	_proto.maoliang3_i = function () {
		var t = new eui.Image();
		this.maoliang3 = t;
		t.source = "maoliang3_png";
		t.visible = false;
		t.x = 2300;
		t.y = 779;
		return t;
	};
	_proto.mao1_i = function () {
		var t = new eui.Image();
		this.mao1 = t;
		t.scaleX = -1;
		t.source = "cat_happy_png";
		t.visible = false;
		t.x = 2310.28;
		t.y = 717.85;
		return t;
	};
	_proto.maoliang4_i = function () {
		var t = new eui.Image();
		this.maoliang4 = t;
		t.source = "maoliang2_png";
		t.visible = false;
		t.x = 423.64;
		t.y = 1045.88;
		return t;
	};
	_proto.chuizi2_i = function () {
		var t = new eui.Image();
		this.chuizi2 = t;
		t.anchorOffsetY = 111;
		t.source = "chuizi_png";
		t.visible = false;
		t.x = 1996.6;
		t.y = 356;
		return t;
	};
	_proto.maochu2_i = function () {
		var t = new eui.Image();
		this.maochu2 = t;
		t.source = "maochu2_png";
		t.visible = false;
		t.x = 2108;
		t.y = 305;
		return t;
	};
	return Days38ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days39ViewSkin.exml'] = window.Days39ViewSkin = (function (_super) {
	__extends(Days39ViewSkin, _super);
	function Days39ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L0","bg_M0","bg_R0","guizi2","mogu1","guizi1","jiaodai","zituan1","zituan2","zituan3","book","dimian","beam","goods","bomb","baoza","men2","poisoning1","men1","xiangzi1","angryGroup","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days39ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this.guizi2_i(),this.mogu1_i(),this.guizi1_i(),this.jiaodai_i(),this.zituan1_i(),this.zituan2_i(),this.zituan3_i(),this._Image7_i(),this.book_i(),this.dimian_i(),this._Image8_i(),this.beam_i(),this.goods_i(),this.bomb_i(),this.baoza_i(),this.men2_i(),this.poisoning1_i(),this.men1_i(),this.xiangzi1_i(),this.angryGroup_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L0_i(),this.bg_M0_i(),this.bg_R0_i()];
		return t;
	};
	_proto.bg_L0_i = function () {
		var t = new eui.Group();
		this.bg_L0 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M0_i = function () {
		var t = new eui.Group();
		this.bg_M0 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R0_i = function () {
		var t = new eui.Group();
		this.bg_R0 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.guizi2_i = function () {
		var t = new eui.Image();
		this.guizi2 = t;
		t.scaleX = -1;
		t.source = "guizi2_png";
		t.visible = false;
		t.x = 1124;
		t.y = 490;
		return t;
	};
	_proto.mogu1_i = function () {
		var t = new eui.Image();
		this.mogu1 = t;
		t.scaleX = -1;
		t.source = "mogu_1_png";
		t.x = 916.78;
		t.y = 1089.77;
		return t;
	};
	_proto.guizi1_i = function () {
		var t = new eui.Image();
		this.guizi1 = t;
		t.scaleX = -1;
		t.source = "guizi1_png";
		t.x = 1124;
		t.y = 490;
		return t;
	};
	_proto.jiaodai_i = function () {
		var t = new eui.Image();
		this.jiaodai = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 180;
		t.source = "jiaodai_png";
		t.width = 136.36;
		t.x = 367.74;
		t.y = 1179.26;
		return t;
	};
	_proto.zituan1_i = function () {
		var t = new eui.Image();
		this.zituan1 = t;
		t.source = "zituan_png";
		t.x = 393.59;
		t.y = 1195.43;
		return t;
	};
	_proto.zituan2_i = function () {
		var t = new eui.Image();
		this.zituan2 = t;
		t.source = "zituan_png";
		t.x = 356.65;
		t.y = 1246.37;
		return t;
	};
	_proto.zituan3_i = function () {
		var t = new eui.Image();
		this.zituan3 = t;
		t.source = "zituan_png";
		t.x = 434.82;
		t.y = 1238.17;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "lajitong_png";
		t.touchEnabled = false;
		t.x = 340.92;
		t.y = 1157.28;
		return t;
	};
	_proto.book_i = function () {
		var t = new eui.Image();
		this.book = t;
		t.source = "book_png";
		t.x = 713;
		t.y = 712;
		return t;
	};
	_proto.dimian_i = function () {
		var t = new eui.Rect();
		this.dimian = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 291.21;
		t.horizontalCenter = 0;
		t.width = 671.52;
		t.y = 1105;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "hospitalBg_png";
		t.x = 1804;
		t.y = 255;
		return t;
	};
	_proto.beam_i = function () {
		var t = new eui.Image();
		this.beam = t;
		t.source = "beam_png";
		t.x = 1870;
		t.y = -64;
		return t;
	};
	_proto.goods_i = function () {
		var t = new eui.Image();
		this.goods = t;
		t.horizontalCenter = 3.5;
		t.source = "poisoning_2_png";
		t.visible = false;
		t.y = 1119.44;
		return t;
	};
	_proto.bomb_i = function () {
		var t = new eui.Image();
		this.bomb = t;
		t.source = "bomb_png";
		t.visible = false;
		t.x = 2121.4;
		t.y = 1254.55;
		return t;
	};
	_proto.baoza_i = function () {
		var t = new eui.Image();
		this.baoza = t;
		t.horizontalCenter = -9;
		t.source = "baoza_png";
		t.verticalCenter = 235;
		t.visible = false;
		return t;
	};
	_proto.men2_i = function () {
		var t = new eui.Image();
		this.men2 = t;
		t.source = "men2_png";
		t.visible = false;
		t.x = 3365;
		t.y = 401;
		return t;
	};
	_proto.poisoning1_i = function () {
		var t = new eui.Image();
		this.poisoning1 = t;
		t.source = "poisoning_1_png";
		t.visible = false;
		t.x = 3336.64;
		t.y = 834.81;
		return t;
	};
	_proto.men1_i = function () {
		var t = new eui.Image();
		this.men1 = t;
		t.source = "men1_png";
		t.x = 3365;
		t.y = 401;
		return t;
	};
	_proto.xiangzi1_i = function () {
		var t = new eui.Image();
		this.xiangzi1 = t;
		t.bottom = 642;
		t.horizontalCenter = 1668;
		t.source = "xiangzi1_png";
		return t;
	};
	_proto.angryGroup_i = function () {
		var t = new eui.Group();
		this.angryGroup = t;
		t.height = 77;
		t.scaleY = -1;
		t.width = 99;
		t.x = 2231.97;
		t.y = 87.64;
		return t;
	};
	return Days39ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days3ViewSkin.exml'] = window.Days3ViewSkin = (function (_super) {
	__extends(Days3ViewSkin, _super);
	function Days3ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L1","bg_M1","bg_R1","guizi2","jiandao1","guizi1","dianzi","maoliang","maobang","zhengtou","mJiaoYin","yigui1","yigui2","catsleep","dun2","maochu","dun","fallfuhao","catFall","maoliang2","catUp","xiangzi1","xiangzi2","dashu","uncleGroup","dimian","dogStop","tiao","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days3ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this.guizi2_i(),this.jiandao1_i(),this.guizi1_i(),this.dianzi_i(),this.maoliang_i(),this._Image7_i(),this.maobang_i(),this.zhengtou_i(),this.mJiaoYin_i(),this.yigui1_i(),this.yigui2_i(),this.catsleep_i(),this.dun2_i(),this.maochu_i(),this.dun_i(),this.fallfuhao_i(),this.catFall_i(),this.maoliang2_i(),this.catUp_i(),this.xiangzi1_i(),this.xiangzi2_i(),this.dashu_i(),this.uncleGroup_i(),this.dimian_i(),this.dogStop_i(),this.tiao_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L1_i(),this.bg_M1_i(),this.bg_R1_i()];
		return t;
	};
	_proto.bg_L1_i = function () {
		var t = new eui.Group();
		this.bg_L1 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M1_i = function () {
		var t = new eui.Group();
		this.bg_M1 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R1_i = function () {
		var t = new eui.Group();
		this.bg_R1 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.guizi2_i = function () {
		var t = new eui.Image();
		this.guizi2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "guizi2_png";
		t.visible = false;
		t.x = 3387;
		t.y = 530;
		return t;
	};
	_proto.jiandao1_i = function () {
		var t = new eui.Image();
		this.jiandao1 = t;
		t.source = "jiandao1_png";
		t.x = 3539;
		t.y = 1170;
		return t;
	};
	_proto.guizi1_i = function () {
		var t = new eui.Image();
		this.guizi1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "guizi1_png";
		t.x = 3387;
		t.y = 530;
		return t;
	};
	_proto.dianzi_i = function () {
		var t = new eui.Image();
		this.dianzi = t;
		t.source = "zhengtou2_png";
		t.visible = false;
		t.x = 2270;
		t.y = 1160;
		return t;
	};
	_proto.maoliang_i = function () {
		var t = new eui.Image();
		this.maoliang = t;
		t.source = "maoliang1_png";
		t.x = 3650;
		t.y = 915;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "saifa2_png";
		t.x = 1644;
		t.y = 763.5;
		return t;
	};
	_proto.maobang_i = function () {
		var t = new eui.Image();
		this.maobang = t;
		t.source = "maobang_png";
		t.x = 1754;
		t.y = 806;
		return t;
	};
	_proto.zhengtou_i = function () {
		var t = new eui.Image();
		this.zhengtou = t;
		t.source = "zhengtou2_png";
		t.x = 1721.5;
		t.y = 810;
		return t;
	};
	_proto.mJiaoYin_i = function () {
		var t = new eui.Image();
		this.mJiaoYin = t;
		t.source = "jiaoyin2_png";
		t.x = 2338;
		t.y = 1013;
		return t;
	};
	_proto.yigui1_i = function () {
		var t = new eui.Image();
		this.yigui1 = t;
		t.source = "yigui1_png";
		t.x = 2206;
		t.y = 358;
		return t;
	};
	_proto.yigui2_i = function () {
		var t = new eui.Image();
		this.yigui2 = t;
		t.source = "yigui2_png";
		t.visible = false;
		t.x = 2206;
		t.y = 358;
		return t;
	};
	_proto.catsleep_i = function () {
		var t = new eui.Group();
		this.catsleep = t;
		t.height = 122;
		t.width = 156;
		t.x = 2386;
		t.y = 246;
		return t;
	};
	_proto.dun2_i = function () {
		var t = new eui.Image();
		this.dun2 = t;
		t.source = "dun2_png";
		t.visible = false;
		t.x = 1946;
		t.y = 904;
		return t;
	};
	_proto.maochu_i = function () {
		var t = new eui.Image();
		this.maochu = t;
		t.source = "maochu1_png";
		t.visible = false;
		t.x = 2340;
		t.y = 1128;
		return t;
	};
	_proto.dun_i = function () {
		var t = new eui.Image();
		this.dun = t;
		t.scaleX = -1;
		t.source = "dun1_png";
		t.visible = false;
		t.x = 2497;
		t.y = 984.5;
		return t;
	};
	_proto.fallfuhao_i = function () {
		var t = new eui.Image();
		this.fallfuhao = t;
		t.source = "suaidaofuhao_png";
		t.visible = false;
		t.x = 2268;
		t.y = 1114;
		return t;
	};
	_proto.catFall_i = function () {
		var t = new eui.Image();
		this.catFall = t;
		t.source = "maoshuaidao_png";
		t.visible = false;
		t.x = 2294;
		t.y = 1124;
		return t;
	};
	_proto.maoliang2_i = function () {
		var t = new eui.Image();
		this.maoliang2 = t;
		t.source = "maoliang1_png";
		t.visible = false;
		t.x = 2100;
		t.y = 1318;
		return t;
	};
	_proto.catUp_i = function () {
		var t = new eui.Image();
		this.catUp = t;
		t.source = "maoshangfang_png";
		t.visible = false;
		t.x = 2416;
		t.y = 306;
		return t;
	};
	_proto.xiangzi1_i = function () {
		var t = new eui.Image();
		this.xiangzi1 = t;
		t.scaleX = -1;
		t.source = "xiangzi1_png";
		t.x = 934;
		t.y = 1080;
		return t;
	};
	_proto.xiangzi2_i = function () {
		var t = new eui.Image();
		this.xiangzi2 = t;
		t.scaleX = -1;
		t.source = "xiangzi2_png";
		t.visible = false;
		t.x = 934;
		t.y = 1080;
		return t;
	};
	_proto.dashu_i = function () {
		var t = new eui.Image();
		this.dashu = t;
		t.scaleX = -1;
		t.source = "xdashu3_png";
		t.visible = false;
		t.x = 1004;
		t.y = 495;
		return t;
	};
	_proto.uncleGroup_i = function () {
		var t = new eui.Group();
		this.uncleGroup = t;
		t.height = 839;
		t.scaleX = -1;
		t.visible = false;
		t.width = 460;
		t.x = 1004;
		t.y = 495;
		return t;
	};
	_proto.dimian_i = function () {
		var t = new eui.Rect();
		this.dimian = t;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 321;
		t.width = 1080;
		t.x = 1620;
		t.y = 1096;
		return t;
	};
	_proto.dogStop_i = function () {
		var t = new eui.Image();
		this.dogStop = t;
		t.source = "dogStop2_png";
		t.visible = false;
		t.x = 1757.5;
		t.y = 1186;
		return t;
	};
	_proto.tiao_i = function () {
		var t = new eui.Image();
		this.tiao = t;
		t.source = "tiao2_png";
		t.visible = false;
		t.x = 2368;
		t.y = 487;
		return t;
	};
	return Days3ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days40ViewSkin.exml'] = window.Days40ViewSkin = (function (_super) {
	__extends(Days40ViewSkin, _super);
	function Days40ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L1","bg_M1","bg_R1","ATM","chuizi2","police1","doctorUncle","cat_package","phone","money_dialog","money_big","chuizi3","police2","desk_open","chuizi1","desk_close","money_mine","computer_close","computer_open","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days40ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this.ATM_i(),this.chuizi2_i(),this.police1_i(),this._Image7_i(),this.doctorUncle_i(),this._Image8_i(),this.cat_package_i(),this.phone_i(),this.money_dialog_i(),this.money_big_i(),this.chuizi3_i(),this.police2_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this.desk_open_i(),this.chuizi1_i(),this.desk_close_i(),this.money_mine_i(),this.computer_close_i(),this.computer_open_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L1_i(),this.bg_M1_i(),this.bg_R1_i()];
		return t;
	};
	_proto.bg_L1_i = function () {
		var t = new eui.Group();
		this.bg_L1 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M1_i = function () {
		var t = new eui.Group();
		this.bg_M1 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R1_i = function () {
		var t = new eui.Group();
		this.bg_R1 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.ATM_i = function () {
		var t = new eui.Image();
		this.ATM = t;
		t.source = "ATM_png";
		t.x = 623.47;
		t.y = 423.41;
		return t;
	};
	_proto.chuizi2_i = function () {
		var t = new eui.Image();
		this.chuizi2 = t;
		t.anchorOffsetY = 111;
		t.source = "chuizi_png";
		t.visible = false;
		t.x = 607.98;
		t.y = 554.15;
		return t;
	};
	_proto.police1_i = function () {
		var t = new eui.Image();
		this.police1 = t;
		t.scaleX = -1;
		t.source = "police_png";
		t.visible = false;
		t.x = 693;
		t.y = 622;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "hospitalBg_png";
		t.x = 1842.56;
		t.y = 275.48;
		return t;
	};
	_proto.doctorUncle_i = function () {
		var t = new eui.Image();
		this.doctorUncle = t;
		t.right = 1837;
		t.source = "doctorUncle1_png";
		t.y = 491;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "hospitalDesk_png";
		t.x = 1703;
		t.y = 885;
		return t;
	};
	_proto.cat_package_i = function () {
		var t = new eui.Image();
		this.cat_package = t;
		t.source = "cat_package1_png";
		t.x = 2241;
		t.y = 863;
		return t;
	};
	_proto.phone_i = function () {
		var t = new eui.Image();
		this.phone = t;
		t.source = "phone_png";
		t.x = 1807.88;
		t.y = 866.38;
		return t;
	};
	_proto.money_dialog_i = function () {
		var t = new eui.Image();
		this.money_dialog = t;
		t.source = "money_dialog_png";
		t.x = 1848.48;
		t.y = 459.31;
		return t;
	};
	_proto.money_big_i = function () {
		var t = new eui.Image();
		this.money_big = t;
		t.source = "money_big_png";
		t.visible = false;
		t.x = 654.18;
		t.y = 621.89;
		return t;
	};
	_proto.chuizi3_i = function () {
		var t = new eui.Image();
		this.chuizi3 = t;
		t.anchorOffsetY = 111;
		t.source = "chuizi_png";
		t.visible = false;
		t.x = 2160;
		t.y = 969;
		return t;
	};
	_proto.police2_i = function () {
		var t = new eui.Image();
		this.police2 = t;
		t.scaleX = -1;
		t.source = "police_png";
		t.visible = false;
		t.x = 2136;
		t.y = 699;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "posters4_png";
		t.x = 3452;
		t.y = 521.91;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "posters5_png";
		t.x = 3612;
		t.y = 448.98;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "X_display_png";
		t.x = 3692;
		t.y = 481;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "desk_2_png";
		t.x = 3292;
		t.y = 1004;
		return t;
	};
	_proto.desk_open_i = function () {
		var t = new eui.Image();
		this.desk_open = t;
		t.source = "desk_open_png";
		t.visible = false;
		t.x = 3488;
		t.y = 1120;
		return t;
	};
	_proto.chuizi1_i = function () {
		var t = new eui.Image();
		this.chuizi1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 91.11;
		t.rotation = 300.22;
		t.source = "chuizi_png";
		t.width = 145.27;
		t.x = 3491.74;
		t.y = 1273.31;
		return t;
	};
	_proto.desk_close_i = function () {
		var t = new eui.Image();
		this.desk_close = t;
		t.source = "desk_close_png";
		t.x = 3488;
		t.y = 1120;
		return t;
	};
	_proto.money_mine_i = function () {
		var t = new eui.Image();
		this.money_mine = t;
		t.source = "money_mine_png";
		t.x = 3418;
		t.y = 988;
		return t;
	};
	_proto.computer_close_i = function () {
		var t = new eui.Image();
		this.computer_close = t;
		t.source = "computer_close_png";
		t.x = 3622;
		t.y = 858;
		return t;
	};
	_proto.computer_open_i = function () {
		var t = new eui.Image();
		this.computer_open = t;
		t.source = "computer_open2_png";
		t.visible = false;
		t.x = 3622;
		t.y = 858;
		return t;
	};
	return Days40ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days4ViewSkin.exml'] = window.Days4ViewSkin = (function (_super) {
	__extends(Days4ViewSkin, _super);
	function Days4ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L0","bg_M0","bg_R0","shizhen","fenzhen","zhongBtn","binxiang2","frozenCat","binxiang1","weibolu2","maoGroup","searCat","seartGroup","frozenCat2","weibolu1","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this._Group1_i(),this.gameGroup_i()];
	}
	var _proto = Days4ViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = -1620;
		t.y = 0;
		t.elementsContent = [this.bg_L0_i(),this.bg_M0_i(),this.bg_R0_i()];
		return t;
	};
	_proto.bg_L0_i = function () {
		var t = new eui.Group();
		this.bg_L0 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M0_i = function () {
		var t = new eui.Group();
		this.bg_M0 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R0_i = function () {
		var t = new eui.Group();
		this.bg_R0 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this.shizhen_i(),this.fenzhen_i(),this.zhongBtn_i(),this.binxiang2_i(),this.frozenCat_i(),this.binxiang1_i(),this.weibolu2_i(),this.maoGroup_i(),this.searCat_i(),this.seartGroup_i(),this.frozenCat2_i(),this.weibolu1_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "xiangzi1_png";
		t.x = 2261.17;
		t.y = 895.73;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "zhong_png";
		t.x = 2030.34;
		t.y = 233.31;
		return t;
	};
	_proto.shizhen_i = function () {
		var t = new eui.Image();
		this.shizhen = t;
		t.anchorOffsetX = 11;
		t.anchorOffsetY = 9.5;
		t.source = "shizhen_png";
		t.x = 2160.34;
		t.y = 360.31;
		return t;
	};
	_proto.fenzhen_i = function () {
		var t = new eui.Image();
		this.fenzhen = t;
		t.anchorOffsetX = 6;
		t.anchorOffsetY = 82;
		t.source = "fenzhen_png";
		t.x = 2160.34;
		t.y = 356.81;
		return t;
	};
	_proto.zhongBtn_i = function () {
		var t = new eui.Image();
		this.zhongBtn = t;
		t.alpha = 0;
		t.source = "zhong_png";
		t.x = 2040.34;
		t.y = 243.31;
		return t;
	};
	_proto.binxiang2_i = function () {
		var t = new eui.Image();
		this.binxiang2 = t;
		t.source = "binxiang2_png";
		t.visible = false;
		t.x = 1874.26;
		t.y = 1063.02;
		return t;
	};
	_proto.frozenCat_i = function () {
		var t = new eui.Image();
		this.frozenCat = t;
		t.source = "frozenCat_png";
		t.x = 1944.26;
		t.y = 1189.12;
		return t;
	};
	_proto.binxiang1_i = function () {
		var t = new eui.Image();
		this.binxiang1 = t;
		t.source = "binxiang1_png";
		t.x = 1874.26;
		t.y = 1063.02;
		return t;
	};
	_proto.weibolu2_i = function () {
		var t = new eui.Image();
		this.weibolu2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weibolu2_png";
		t.visible = false;
		t.x = 2178.19;
		t.y = 813.27;
		return t;
	};
	_proto.maoGroup_i = function () {
		var t = new eui.Group();
		this.maoGroup = t;
		t.height = 64;
		t.visible = false;
		t.width = 82;
		t.x = 2349;
		t.y = 846;
		return t;
	};
	_proto.searCat_i = function () {
		var t = new eui.Image();
		this.searCat = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 73.43;
		t.source = "searCat_png";
		t.visible = false;
		t.width = 83.22;
		t.x = 2347.69;
		t.y = 843.66;
		return t;
	};
	_proto.seartGroup_i = function () {
		var t = new eui.Group();
		this.seartGroup = t;
		t.height = 79;
		t.visible = false;
		t.width = 96;
		t.x = 2339.67;
		t.y = 839.68;
		return t;
	};
	_proto.frozenCat2_i = function () {
		var t = new eui.Image();
		this.frozenCat2 = t;
		t.source = "frozenCat3_png";
		t.visible = false;
		t.x = 2337.04;
		t.y = 809.36;
		return t;
	};
	_proto.weibolu1_i = function () {
		var t = new eui.Image();
		this.weibolu1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weibolu1_png";
		t.x = 2284.19;
		t.y = 816.27;
		return t;
	};
	return Days4ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days5ViewSkin.exml'] = window.Days5ViewSkin = (function (_super) {
	__extends(Days5ViewSkin, _super);
	function Days5ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L0","bg_M0","bg_R0","maoyanGroup","maozhua","guizi2","guizi1","binxiang2","refrigeratorUncle1","refrigeratorUncle4","uncleGroup","binxiang1","zituan","lajitong","book","dimian","zituan2","maotiao","maojiao","zuo","dun1","pa","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days5ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this.maoyanGroup_i(),this.maozhua_i(),this._Image7_i(),this.guizi2_i(),this.guizi1_i(),this.binxiang2_i(),this.refrigeratorUncle1_i(),this.refrigeratorUncle4_i(),this.uncleGroup_i(),this.binxiang1_i(),this.zituan_i(),this.lajitong_i(),this.book_i(),this.dimian_i(),this.zituan2_i(),this.maotiao_i(),this.maojiao_i(),this.zuo_i(),this.dun1_i(),this.pa_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L0_i(),this.bg_M0_i(),this.bg_R0_i()];
		return t;
	};
	_proto.bg_L0_i = function () {
		var t = new eui.Group();
		this.bg_L0 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M0_i = function () {
		var t = new eui.Group();
		this.bg_M0 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R0_i = function () {
		var t = new eui.Group();
		this.bg_R0 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.maoyanGroup_i = function () {
		var t = new eui.Group();
		this.maoyanGroup = t;
		t.height = 21;
		t.width = 65;
		t.x = 2090;
		t.y = 1062;
		return t;
	};
	_proto.maozhua_i = function () {
		var t = new eui.Image();
		this.maozhua = t;
		t.source = "maozhua_png";
		t.visible = false;
		t.x = 2074;
		t.y = 1068;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "saifa2_png";
		t.x = 1680;
		t.y = 764;
		return t;
	};
	_proto.guizi2_i = function () {
		var t = new eui.Image();
		this.guizi2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "guizi2_png";
		t.visible = false;
		t.x = 3180;
		t.y = 471;
		return t;
	};
	_proto.guizi1_i = function () {
		var t = new eui.Image();
		this.guizi1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "guizi1_png";
		t.x = 3180;
		t.y = 471;
		return t;
	};
	_proto.binxiang2_i = function () {
		var t = new eui.Image();
		this.binxiang2 = t;
		t.source = "binxiang2_png";
		t.visible = false;
		t.x = 2294.26;
		t.y = 727.02;
		return t;
	};
	_proto.refrigeratorUncle1_i = function () {
		var t = new eui.Image();
		this.refrigeratorUncle1 = t;
		t.source = "refrigeratorUncle1_png";
		t.x = 2327;
		t.y = 762;
		return t;
	};
	_proto.refrigeratorUncle4_i = function () {
		var t = new eui.Image();
		this.refrigeratorUncle4 = t;
		t.source = "refrigeratorUncle4_png";
		t.visible = false;
		t.x = 2281;
		t.y = 497;
		return t;
	};
	_proto.uncleGroup_i = function () {
		var t = new eui.Group();
		this.uncleGroup = t;
		t.height = 542;
		t.visible = false;
		t.width = 298;
		t.x = 2281;
		t.y = 497;
		return t;
	};
	_proto.binxiang1_i = function () {
		var t = new eui.Image();
		this.binxiang1 = t;
		t.source = "binxiang1_png";
		t.x = 2294.26;
		t.y = 727.02;
		return t;
	};
	_proto.zituan_i = function () {
		var t = new eui.Image();
		this.zituan = t;
		t.source = "zituan_png";
		t.x = 3834;
		t.y = 1274;
		return t;
	};
	_proto.lajitong_i = function () {
		var t = new eui.Image();
		this.lajitong = t;
		t.source = "lajitong_png";
		t.x = 3778;
		t.y = 1164;
		return t;
	};
	_proto.book_i = function () {
		var t = new eui.Image();
		this.book = t;
		t.source = "book_png";
		t.x = 3353;
		t.y = 676;
		return t;
	};
	_proto.dimian_i = function () {
		var t = new eui.Rect();
		this.dimian = t;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 334;
		t.horizontalCenter = 0;
		t.width = 1080;
		t.y = 1099;
		return t;
	};
	_proto.zituan2_i = function () {
		var t = new eui.Image();
		this.zituan2 = t;
		t.anchorOffsetX = 43;
		t.anchorOffsetY = 38;
		t.height = 76;
		t.source = "zituan_png";
		t.visible = false;
		t.width = 86;
		t.x = 2125;
		t.y = 1156;
		return t;
	};
	_proto.maotiao_i = function () {
		var t = new eui.Image();
		this.maotiao = t;
		t.anchorOffsetX = 144;
		t.scaleX = -1;
		t.source = "maotiao_png";
		t.visible = false;
		t.x = 1981;
		t.y = 811;
		return t;
	};
	_proto.maojiao_i = function () {
		var t = new eui.Image();
		this.maojiao = t;
		t.scaleX = -1;
		t.source = "maojiao_png";
		t.visible = false;
		t.x = 2120;
		t.y = 792;
		return t;
	};
	_proto.zuo_i = function () {
		var t = new eui.Image();
		this.zuo = t;
		t.scaleX = -1;
		t.source = "girlzuo_png";
		t.visible = false;
		t.x = 1963;
		t.y = 565;
		return t;
	};
	_proto.dun1_i = function () {
		var t = new eui.Image();
		this.dun1 = t;
		t.scaleX = -1;
		t.source = "dun1_png";
		t.visible = false;
		t.x = 2017;
		t.y = 830;
		return t;
	};
	_proto.pa_i = function () {
		var t = new eui.Image();
		this.pa = t;
		t.scaleX = -1;
		t.source = "pa_png";
		t.x = 2033;
		t.y = 910;
		return t;
	};
	return Days5ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days6ViewSkin.exml'] = window.Days6ViewSkin = (function (_super) {
	__extends(Days6ViewSkin, _super);
	function Days6ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L1","bg_M1","bg_R1","zhengtou","dianzi","catsleep","muban2","maochu2","maochu","guandao3","guandao2","guandao1","guizi2","maobang","guizi1","jiantou","lajitong","maojiao","dun1","catFall","fallfuhao","dimian","qiang","xiangzi1","xiangzi2","dashu","uncleGroup","muban1","leftjiaotou","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days6ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this._Image7_i(),this.zhengtou_i(),this.dianzi_i(),this.catsleep_i(),this._Image8_i(),this.muban2_i(),this.maochu2_i(),this._Image9_i(),this.maochu_i(),this.guandao3_i(),this.guandao2_i(),this.guandao1_i(),this.guizi2_i(),this.maobang_i(),this.guizi1_i(),this.jiantou_i(),this.lajitong_i(),this.maojiao_i(),this.dun1_i(),this.catFall_i(),this.fallfuhao_i(),this.dimian_i(),this.qiang_i(),this.xiangzi1_i(),this.xiangzi2_i(),this.dashu_i(),this.uncleGroup_i(),this.muban1_i(),this.leftjiaotou_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L1_i(),this.bg_M1_i(),this.bg_R1_i()];
		return t;
	};
	_proto.bg_L1_i = function () {
		var t = new eui.Group();
		this.bg_L1 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M1_i = function () {
		var t = new eui.Group();
		this.bg_M1 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R1_i = function () {
		var t = new eui.Group();
		this.bg_R1 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "saifa2_png";
		t.x = 1644;
		t.y = 763.5;
		return t;
	};
	_proto.zhengtou_i = function () {
		var t = new eui.Image();
		this.zhengtou = t;
		t.source = "zhengtou2_png";
		t.x = 1721.5;
		t.y = 796;
		return t;
	};
	_proto.dianzi_i = function () {
		var t = new eui.Image();
		this.dianzi = t;
		t.source = "zhengtou2_png";
		t.visible = false;
		t.x = 2368.5;
		t.y = 1002;
		return t;
	};
	_proto.catsleep_i = function () {
		var t = new eui.Group();
		this.catsleep = t;
		t.height = 122;
		t.width = 156;
		t.x = 2074;
		t.y = 58;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "zhiwujia_png";
		t.x = 2019;
		t.y = 134;
		return t;
	};
	_proto.muban2_i = function () {
		var t = new eui.Image();
		this.muban2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 237.52;
		t.source = "muban_png";
		t.visible = false;
		t.width = 179.94;
		t.x = 2134;
		t.y = 220;
		return t;
	};
	_proto.maochu2_i = function () {
		var t = new eui.Image();
		this.maochu2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 125.07;
		t.source = "maochu2_png";
		t.visible = false;
		t.width = 104.67;
		t.x = 2102.17;
		t.y = 70.5;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "guandao4_png";
		t.x = 2098;
		t.y = 184;
		return t;
	};
	_proto.maochu_i = function () {
		var t = new eui.Image();
		this.maochu = t;
		t.source = "maochu1_png";
		t.visible = false;
		t.x = 2436;
		t.y = 1005;
		return t;
	};
	_proto.guandao3_i = function () {
		var t = new eui.Image();
		this.guandao3 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 64.5;
		t.height = 129;
		t.rotation = 90;
		t.source = "guandao3_png";
		t.width = 166;
		t.x = 2479;
		t.y = 597;
		return t;
	};
	_proto.guandao2_i = function () {
		var t = new eui.Image();
		this.guandao2 = t;
		t.anchorOffsetX = 112.5;
		t.anchorOffsetY = 83;
		t.height = 166;
		t.source = "guandao2_png";
		t.width = 225;
		t.x = 2321;
		t.y = 529;
		return t;
	};
	_proto.guandao1_i = function () {
		var t = new eui.Image();
		this.guandao1 = t;
		t.anchorOffsetX = 56.5;
		t.anchorOffsetY = 95;
		t.height = 190;
		t.rotation = -90;
		t.source = "guandao1_png";
		t.width = 113;
		t.x = 2503;
		t.y = 750;
		return t;
	};
	_proto.guizi2_i = function () {
		var t = new eui.Image();
		this.guizi2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "guizi2_png";
		t.visible = false;
		t.x = 3180;
		t.y = 471;
		return t;
	};
	_proto.maobang_i = function () {
		var t = new eui.Image();
		this.maobang = t;
		t.source = "maobang_png";
		t.x = 3316;
		t.y = 1053;
		return t;
	};
	_proto.guizi1_i = function () {
		var t = new eui.Image();
		this.guizi1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "guizi1_png";
		t.x = 3180;
		t.y = 471;
		return t;
	};
	_proto.jiantou_i = function () {
		var t = new eui.Image();
		this.jiantou = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 317.2;
		t.source = "jiantou2_png";
		t.width = 240.3;
		t.x = 3752;
		t.y = 1152;
		return t;
	};
	_proto.lajitong_i = function () {
		var t = new eui.Image();
		this.lajitong = t;
		t.source = "lajitong_png";
		t.x = 3779.15;
		t.y = 1164;
		return t;
	};
	_proto.maojiao_i = function () {
		var t = new eui.Image();
		this.maojiao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 125.35;
		t.source = "maojiao_png";
		t.visible = false;
		t.width = 130;
		t.x = 2431.5;
		t.y = 1009;
		return t;
	};
	_proto.dun1_i = function () {
		var t = new eui.Image();
		this.dun1 = t;
		t.scaleX = -1;
		t.source = "dun1_png";
		t.visible = false;
		t.x = 2550;
		t.y = 873.5;
		return t;
	};
	_proto.catFall_i = function () {
		var t = new eui.Image();
		this.catFall = t;
		t.source = "maoshuaidao_png";
		t.visible = false;
		t.x = 2408;
		t.y = 981.35;
		return t;
	};
	_proto.fallfuhao_i = function () {
		var t = new eui.Image();
		this.fallfuhao = t;
		t.source = "suaidaofuhao_png";
		t.visible = false;
		t.x = 2386.5;
		t.y = 970.5;
		return t;
	};
	_proto.dimian_i = function () {
		var t = new eui.Rect();
		this.dimian = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 352;
		t.width = 480;
		t.x = 2224;
		t.y = 978;
		return t;
	};
	_proto.qiang_i = function () {
		var t = new eui.Rect();
		this.qiang = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 258;
		t.width = 328;
		t.x = 2044;
		t.y = 186;
		return t;
	};
	_proto.xiangzi1_i = function () {
		var t = new eui.Image();
		this.xiangzi1 = t;
		t.source = "xiangzi1_png";
		t.x = 529.97;
		t.y = 1106.5;
		return t;
	};
	_proto.xiangzi2_i = function () {
		var t = new eui.Image();
		this.xiangzi2 = t;
		t.source = "xiangzi2_png";
		t.visible = false;
		t.x = 529.97;
		t.y = 1106.5;
		return t;
	};
	_proto.dashu_i = function () {
		var t = new eui.Image();
		this.dashu = t;
		t.source = "xdashu3_png";
		t.visible = false;
		t.x = 460;
		t.y = 522;
		return t;
	};
	_proto.uncleGroup_i = function () {
		var t = new eui.Group();
		this.uncleGroup = t;
		t.height = 839;
		t.visible = false;
		t.width = 460;
		t.x = 460;
		t.y = 522;
		return t;
	};
	_proto.muban1_i = function () {
		var t = new eui.Image();
		this.muban1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 237.52;
		t.source = "muban_png";
		t.width = 179.94;
		t.x = 448;
		t.y = 1116;
		return t;
	};
	_proto.leftjiaotou_i = function () {
		var t = new eui.Rect();
		this.leftjiaotou = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 162;
		t.width = 135;
		t.x = 1620;
		t.y = 1088;
		return t;
	};
	return Days6ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days7ViewSkin.exml'] = window.Days7ViewSkin = (function (_super) {
	__extends(Days7ViewSkin, _super);
	function Days7ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L0","bg_M0","bg_R0","openBtn1","guizi2","jiaodai","guizi1","openBtn2","book","catsleep","xiangzi4","dimian","tiao1","tiao2","xiangzi1","xiangzi2","dashu","uncleGroup","xiangzi3","tuopa","water2","water1","zhuzi","dian","openImg","closeImg","tuopa2","kaiguan2","kaiguan1","beidian","huadao","dun1","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days7ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this.openBtn1_i(),this.guizi2_i(),this.jiaodai_i(),this.guizi1_i(),this.openBtn2_i(),this.book_i(),this.catsleep_i(),this.xiangzi4_i(),this.dimian_i(),this.tiao1_i(),this.tiao2_i(),this.xiangzi1_i(),this.xiangzi2_i(),this.dashu_i(),this.uncleGroup_i(),this.xiangzi3_i(),this.tuopa_i(),this.water2_i(),this.water1_i(),this.zhuzi_i(),this.dian_i(),this.openImg_i(),this.closeImg_i(),this.tuopa2_i(),this.kaiguan2_i(),this.kaiguan1_i(),this.beidian_i(),this.huadao_i(),this.dun1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L0_i(),this.bg_M0_i(),this.bg_R0_i()];
		return t;
	};
	_proto.bg_L0_i = function () {
		var t = new eui.Group();
		this.bg_L0 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M0_i = function () {
		var t = new eui.Group();
		this.bg_M0 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R0_i = function () {
		var t = new eui.Group();
		this.bg_R0 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.openBtn1_i = function () {
		var t = new eui.Image();
		this.openBtn1 = t;
		t.source = "kaiguan1_png";
		t.x = 3546;
		t.y = 453;
		return t;
	};
	_proto.guizi2_i = function () {
		var t = new eui.Image();
		this.guizi2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "guizi2_png";
		t.visible = false;
		t.x = 3180;
		t.y = 471;
		return t;
	};
	_proto.jiaodai_i = function () {
		var t = new eui.Image();
		this.jiaodai = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 282.91;
		t.source = "jiaodai_png";
		t.width = 214.32;
		t.x = 3328.78;
		t.y = 980.21;
		return t;
	};
	_proto.guizi1_i = function () {
		var t = new eui.Image();
		this.guizi1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "guizi1_png";
		t.x = 3180;
		t.y = 471;
		return t;
	};
	_proto.openBtn2_i = function () {
		var t = new eui.Rect();
		this.openBtn2 = t;
		t.fillAlpha = 0;
		t.height = 55;
		t.width = 142;
		t.x = 3546;
		t.y = 453;
		return t;
	};
	_proto.book_i = function () {
		var t = new eui.Image();
		this.book = t;
		t.source = "book_png";
		t.x = 3352.28;
		t.y = 676.91;
		return t;
	};
	_proto.catsleep_i = function () {
		var t = new eui.Group();
		this.catsleep = t;
		t.height = 122;
		t.width = 156;
		t.x = 2372.47;
		t.y = 915.56;
		return t;
	};
	_proto.xiangzi4_i = function () {
		var t = new eui.Image();
		this.xiangzi4 = t;
		t.source = "xiangzi3_png";
		t.visible = false;
		t.x = 3624;
		t.y = 1141;
		return t;
	};
	_proto.dimian_i = function () {
		var t = new eui.Rect();
		this.dimian = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 378.33;
		t.width = 503.33;
		t.x = 3600;
		t.y = 1067;
		return t;
	};
	_proto.tiao1_i = function () {
		var t = new eui.Image();
		this.tiao1 = t;
		t.source = "tiao2_png";
		t.visible = false;
		t.x = 3641.41;
		t.y = 540.98;
		return t;
	};
	_proto.tiao2_i = function () {
		var t = new eui.Image();
		this.tiao2 = t;
		t.source = "tiao2_png";
		t.visible = false;
		t.x = 3659.01;
		t.y = 659.01;
		return t;
	};
	_proto.xiangzi1_i = function () {
		var t = new eui.Image();
		this.xiangzi1 = t;
		t.source = "xiangzi1_png";
		t.x = 531.33;
		t.y = 1107.33;
		return t;
	};
	_proto.xiangzi2_i = function () {
		var t = new eui.Image();
		this.xiangzi2 = t;
		t.source = "xiangzi2_png";
		t.visible = false;
		t.x = 531.33;
		t.y = 1107.33;
		return t;
	};
	_proto.dashu_i = function () {
		var t = new eui.Image();
		this.dashu = t;
		t.source = "xdashu3_png";
		t.visible = false;
		t.x = 461;
		t.y = 522;
		return t;
	};
	_proto.uncleGroup_i = function () {
		var t = new eui.Group();
		this.uncleGroup = t;
		t.height = 839;
		t.visible = false;
		t.width = 460;
		t.x = 461;
		t.y = 522;
		return t;
	};
	_proto.xiangzi3_i = function () {
		var t = new eui.Image();
		this.xiangzi3 = t;
		t.source = "xiangzi3_png";
		t.visible = false;
		t.x = 531.33;
		t.y = 1110.66;
		return t;
	};
	_proto.tuopa_i = function () {
		var t = new eui.Image();
		this.tuopa = t;
		t.source = "tuopa_png";
		t.x = 424.33;
		t.y = 914.64;
		return t;
	};
	_proto.water2_i = function () {
		var t = new eui.Image();
		this.water2 = t;
		t.source = "water2_png";
		t.x = 1859;
		t.y = 1068.08;
		return t;
	};
	_proto.water1_i = function () {
		var t = new eui.Image();
		this.water1 = t;
		t.source = "water1_png";
		t.x = 1591.65;
		t.y = 1053.08;
		return t;
	};
	_proto.zhuzi_i = function () {
		var t = new eui.Image();
		this.zhuzi = t;
		t.source = "zhuzi_png";
		t.x = 1755;
		t.y = 830;
		return t;
	};
	_proto.dian_i = function () {
		var t = new eui.Image();
		this.dian = t;
		t.source = "dian_png";
		t.x = 2125;
		t.y = 1041;
		return t;
	};
	_proto.openImg_i = function () {
		var t = new eui.Image();
		this.openImg = t;
		t.source = "close1_png";
		t.x = 1773;
		t.y = 859.65;
		return t;
	};
	_proto.closeImg_i = function () {
		var t = new eui.Image();
		this.closeImg = t;
		t.source = "open1_png";
		t.x = 1773;
		t.y = 845;
		return t;
	};
	_proto.tuopa2_i = function () {
		var t = new eui.Image();
		this.tuopa2 = t;
		t.source = "tuopa_png";
		t.visible = false;
		t.x = 1667.67;
		t.y = 716.3;
		return t;
	};
	_proto.kaiguan2_i = function () {
		var t = new eui.Image();
		this.kaiguan2 = t;
		t.source = "kaiguan2_png";
		t.visible = false;
		t.x = 1742.37;
		t.y = 780.34;
		return t;
	};
	_proto.kaiguan1_i = function () {
		var t = new eui.Image();
		this.kaiguan1 = t;
		t.source = "kaiguan1_png";
		t.visible = false;
		t.x = 1742.67;
		t.y = 780.26;
		return t;
	};
	_proto.beidian_i = function () {
		var t = new eui.Image();
		this.beidian = t;
		t.scaleX = -1;
		t.source = "beidian_png";
		t.visible = false;
		t.x = 2501;
		t.y = 683;
		return t;
	};
	_proto.huadao_i = function () {
		var t = new eui.Image();
		this.huadao = t;
		t.scaleX = -1;
		t.source = "huadao1_png";
		t.visible = false;
		t.x = 2458;
		t.y = 886;
		return t;
	};
	_proto.dun1_i = function () {
		var t = new eui.Image();
		this.dun1 = t;
		t.scaleX = -1;
		t.source = "dun1_png";
		t.visible = false;
		t.x = 2522.95;
		t.y = 708.68;
		return t;
	};
	return Days7ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days8ViewSkin.exml'] = window.Days8ViewSkin = (function (_super) {
	__extends(Days8ViewSkin, _super);
	function Days8ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L1","bg_M1","bg_R1","yigui2","chuizi","yigui1","liefen2","liefen1","chuizi2","catsleep","kissUncle","maojiao","diantong","huiqie","baixiong","xiongmao","guan","kai","hei","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days8ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this.yigui2_i(),this.chuizi_i(),this.yigui1_i(),this.liefen2_i(),this.liefen1_i(),this.chuizi2_i(),this.catsleep_i(),this.kissUncle_i(),this.maojiao_i(),this.diantong_i(),this.huiqie_i(),this.baixiong_i(),this.xiongmao_i(),this.guan_i(),this.kai_i(),this.hei_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L1_i(),this.bg_M1_i(),this.bg_R1_i()];
		return t;
	};
	_proto.bg_L1_i = function () {
		var t = new eui.Group();
		this.bg_L1 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M1_i = function () {
		var t = new eui.Group();
		this.bg_M1 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R1_i = function () {
		var t = new eui.Group();
		this.bg_R1 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.yigui2_i = function () {
		var t = new eui.Image();
		this.yigui2 = t;
		t.source = "yigui2_png";
		t.visible = false;
		t.x = 2096;
		t.y = 364;
		return t;
	};
	_proto.chuizi_i = function () {
		var t = new eui.Image();
		this.chuizi = t;
		t.source = "chuizi_png";
		t.x = 2255.5;
		t.y = 835;
		return t;
	};
	_proto.yigui1_i = function () {
		var t = new eui.Image();
		this.yigui1 = t;
		t.source = "yigui1_png";
		t.x = 2096;
		t.y = 364;
		return t;
	};
	_proto.liefen2_i = function () {
		var t = new eui.Image();
		this.liefen2 = t;
		t.source = "liefen2_png";
		t.visible = false;
		t.x = 1806;
		t.y = 540;
		return t;
	};
	_proto.liefen1_i = function () {
		var t = new eui.Image();
		this.liefen1 = t;
		t.source = "liefen1_png";
		t.x = 1806;
		t.y = 540;
		return t;
	};
	_proto.chuizi2_i = function () {
		var t = new eui.Image();
		this.chuizi2 = t;
		t.anchorOffsetY = 111;
		t.source = "chuizi_png";
		t.visible = false;
		t.x = 1740.91;
		t.y = 683.03;
		return t;
	};
	_proto.catsleep_i = function () {
		var t = new eui.Group();
		this.catsleep = t;
		t.height = 122;
		t.width = 156;
		t.x = 2082;
		t.y = 1284;
		return t;
	};
	_proto.kissUncle_i = function () {
		var t = new eui.Image();
		this.kissUncle = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 359.07;
		t.source = "kissUncle_png";
		t.visible = false;
		t.width = 296.29;
		t.x = 2011.86;
		t.y = 1138.5;
		return t;
	};
	_proto.maojiao_i = function () {
		var t = new eui.Image();
		this.maojiao = t;
		t.source = "maojiao_png";
		t.visible = false;
		t.x = 2088;
		t.y = 1294;
		return t;
	};
	_proto.diantong_i = function () {
		var t = new eui.Image();
		this.diantong = t;
		t.anchorOffsetX = 35;
		t.anchorOffsetY = -60;
		t.source = "diantong_png";
		t.x = 623;
		t.y = 1100;
		return t;
	};
	_proto.huiqie_i = function () {
		var t = new eui.Image();
		this.huiqie = t;
		t.source = "huiqie_png";
		t.x = 499;
		t.y = 1154;
		return t;
	};
	_proto.baixiong_i = function () {
		var t = new eui.Image();
		this.baixiong = t;
		t.source = "baixiong_png";
		t.x = 537;
		t.y = 1151.5;
		return t;
	};
	_proto.xiongmao_i = function () {
		var t = new eui.Image();
		this.xiongmao = t;
		t.source = "xiongmao_png";
		t.x = 620.5;
		t.y = 1202;
		return t;
	};
	_proto.guan_i = function () {
		var t = new eui.Image();
		this.guan = t;
		t.source = "kai_png";
		t.x = 966;
		t.y = 592;
		return t;
	};
	_proto.kai_i = function () {
		var t = new eui.Image();
		this.kai = t;
		t.source = "guan_png";
		t.visible = false;
		t.x = 966;
		t.y = 592;
		return t;
	};
	_proto.hei_i = function () {
		var t = new eui.Group();
		this.hei = t;
		t.alpha = 0.7;
		t.anchorOffsetX = 2160;
		t.anchorOffsetY = 2250;
		t.height = 4500;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.visible = false;
		t.width = 4320;
		t.x = 2160;
		t.y = 2500;
		t.elementsContent = [this._Image7_i(),this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "zhezhao_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillAlpha = 1;
		t.height = 2135;
		t.horizontalCenter = 0;
		t.width = 230;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 1;
		t.height = 4868;
		t.left = 0;
		t.verticalCenter = -184;
		t.width = 2045;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 1;
		t.height = 4872;
		t.right = 0;
		t.verticalCenter = -186;
		t.width = 2045;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 1;
		t.height = 2563;
		t.horizontalCenter = 0;
		t.width = 230;
		t.y = -428;
		return t;
	};
	return Days8ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/DaysView/Days9ViewSkin.exml'] = window.Days9ViewSkin = (function (_super) {
	__extends(Days9ViewSkin, _super);
	function Days9ViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_L0","bg_M0","bg_R0","men2","men1","maoGroup","mao1","safa","mao3","maojiao","shizhen","fenzhen","zhongBtn","diantong","mao2","guizi2","dianchi1","guizi1","diantongBtn","dianchi2","kai","guan","catsleep","ghostUncle","heiImage","heiRect","hei","gameGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = Days9ViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 4320;
		t.elementsContent = [this._Group1_i(),this.men2_i(),this.men1_i(),this.maoGroup_i(),this.mao1_i(),this.safa_i(),this.mao3_i(),this.maojiao_i(),this._Image7_i(),this.shizhen_i(),this.fenzhen_i(),this.zhongBtn_i(),this.diantong_i(),this.mao2_i(),this.guizi2_i(),this.dianchi1_i(),this.guizi1_i(),this.diantongBtn_i(),this.dianchi2_i(),this.kai_i(),this.guan_i(),this.catsleep_i(),this.ghostUncle_i(),this.hei_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_L0_i(),this.bg_M0_i(),this.bg_R0_i()];
		return t;
	};
	_proto.bg_L0_i = function () {
		var t = new eui.Group();
		this.bg_L0 = t;
		t.height = 1920;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.bg_M0_i = function () {
		var t = new eui.Group();
		this.bg_M0 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 495;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.bg_R0_i = function () {
		var t = new eui.Group();
		this.bg_R0 = t;
		t.height = 1920;
		t.right = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 490;
		t.scale9Grid = new egret.Rectangle(0,240,50,5);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ2_png";
		t.x = 0;
		t.y = 938;
		return t;
	};
	_proto.men2_i = function () {
		var t = new eui.Image();
		this.men2 = t;
		t.source = "men2_png";
		t.visible = false;
		t.x = 2251;
		t.y = 403;
		return t;
	};
	_proto.men1_i = function () {
		var t = new eui.Image();
		this.men1 = t;
		t.source = "men1_png";
		t.x = 2251;
		t.y = 403;
		return t;
	};
	_proto.maoGroup_i = function () {
		var t = new eui.Group();
		this.maoGroup = t;
		t.height = 128;
		t.width = 164;
		t.x = 2143;
		t.y = 898;
		return t;
	};
	_proto.mao1_i = function () {
		var t = new eui.Image();
		this.mao1 = t;
		t.source = "mao1_png";
		t.visible = false;
		t.x = 2143;
		t.y = 898;
		return t;
	};
	_proto.safa_i = function () {
		var t = new eui.Image();
		this.safa = t;
		t.source = "saifa2_png";
		t.x = 1653.79;
		t.y = 763.54;
		return t;
	};
	_proto.mao3_i = function () {
		var t = new eui.Image();
		this.mao3 = t;
		t.scaleX = -1;
		t.source = "mao1_png";
		t.visible = false;
		t.x = 2054.05;
		t.y = 803.04;
		return t;
	};
	_proto.maojiao_i = function () {
		var t = new eui.Image();
		this.maojiao = t;
		t.scaleX = -1;
		t.source = "maojiao_png";
		t.visible = false;
		t.x = 2039.05;
		t.y = 810.04;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "zhong_png";
		t.x = 1823.05;
		t.y = 343.89;
		return t;
	};
	_proto.shizhen_i = function () {
		var t = new eui.Image();
		this.shizhen = t;
		t.anchorOffsetX = 11;
		t.anchorOffsetY = 9.5;
		t.source = "shizhen_png";
		t.x = 1953.05;
		t.y = 470.89;
		return t;
	};
	_proto.fenzhen_i = function () {
		var t = new eui.Image();
		this.fenzhen = t;
		t.anchorOffsetX = 6;
		t.anchorOffsetY = 82;
		t.source = "fenzhen_png";
		t.x = 1953.05;
		t.y = 467.39;
		return t;
	};
	_proto.zhongBtn_i = function () {
		var t = new eui.Image();
		this.zhongBtn = t;
		t.alpha = 0;
		t.source = "zhong_png";
		t.x = 1823.05;
		t.y = 343.89;
		return t;
	};
	_proto.diantong_i = function () {
		var t = new eui.Image();
		this.diantong = t;
		t.anchorOffsetX = 35;
		t.anchorOffsetY = -60;
		t.rotation = 244.68;
		t.source = "diantong_png";
		t.x = 3345.97;
		t.y = 574.34;
		return t;
	};
	_proto.mao2_i = function () {
		var t = new eui.Image();
		this.mao2 = t;
		t.source = "mao1_png";
		t.visible = false;
		t.x = 3190;
		t.y = 1032.54;
		return t;
	};
	_proto.guizi2_i = function () {
		var t = new eui.Image();
		this.guizi2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "guizi2_png";
		t.visible = false;
		t.x = 3180;
		t.y = 471;
		return t;
	};
	_proto.dianchi1_i = function () {
		var t = new eui.Image();
		this.dianchi1 = t;
		t.source = "dianchi_png";
		t.x = 3388;
		t.y = 1114.54;
		return t;
	};
	_proto.guizi1_i = function () {
		var t = new eui.Image();
		this.guizi1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "guizi1_png";
		t.x = 3180;
		t.y = 471;
		return t;
	};
	_proto.diantongBtn_i = function () {
		var t = new eui.Rect();
		this.diantongBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 102;
		t.width = 250;
		t.x = 3356;
		t.y = 410;
		return t;
	};
	_proto.dianchi2_i = function () {
		var t = new eui.Image();
		this.dianchi2 = t;
		t.source = "dianchi_png";
		t.x = 1944;
		t.y = 444;
		return t;
	};
	_proto.kai_i = function () {
		var t = new eui.Image();
		this.kai = t;
		t.scaleX = -1;
		t.source = "guan_png";
		t.visible = false;
		t.x = 3964;
		t.y = 593;
		return t;
	};
	_proto.guan_i = function () {
		var t = new eui.Image();
		this.guan = t;
		t.scaleX = -1;
		t.source = "kai_png";
		t.x = 3964;
		t.y = 593;
		return t;
	};
	_proto.catsleep_i = function () {
		var t = new eui.Group();
		this.catsleep = t;
		t.height = 122;
		t.width = 156;
		t.x = 882;
		t.y = 1284;
		return t;
	};
	_proto.ghostUncle_i = function () {
		var t = new eui.Image();
		this.ghostUncle = t;
		t.source = "ghostUncle_png";
		t.visible = false;
		t.x = 252;
		t.y = 749.54;
		return t;
	};
	_proto.hei_i = function () {
		var t = new eui.Group();
		this.hei = t;
		t.alpha = 0.7;
		t.anchorOffsetX = 2160;
		t.anchorOffsetY = 2250;
		t.height = 4500;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.visible = false;
		t.width = 4320;
		t.x = 2160;
		t.y = 2500;
		t.elementsContent = [this.heiImage_i(),this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this.heiRect_i()];
		return t;
	};
	_proto.heiImage_i = function () {
		var t = new eui.Image();
		this.heiImage = t;
		t.horizontalCenter = 0;
		t.source = "zhezhao_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillAlpha = 1;
		t.height = 2135;
		t.horizontalCenter = 0;
		t.width = 230;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 1;
		t.height = 4925;
		t.left = 0;
		t.verticalCenter = -212.5;
		t.width = 2045;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 1;
		t.height = 4883.33;
		t.right = 0;
		t.verticalCenter = -191.5;
		t.width = 2045;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 1;
		t.height = 2501.67;
		t.horizontalCenter = 0;
		t.width = 230;
		t.y = -366.67;
		return t;
	};
	_proto.heiRect_i = function () {
		var t = new eui.Rect();
		this.heiRect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 1;
		t.height = 230;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 230;
		return t;
	};
	return Days9ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/GuideView/GuideViewSkin.exml'] = window.GuideViewSkin = (function (_super) {
	__extends(GuideViewSkin, _super);
	function GuideViewSkin() {
		_super.call(this);
		this.skinParts = ["backBtn0","backText0","mAnimRoot"];
		
		this.height = 2300;
		this.width = 1440;
		this._TweenGroup1_i();
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = GuideViewSkin.prototype;

	_proto._TweenGroup1_i = function () {
		var t = new egret.tween.TweenGroup();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 200;
		t.elementsContent = [this._Rect1_i(),this.backBtn0_i(),this.backText0_i(),this._Label1_i(),this._Image1_i(),this.mAnimRoot_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.height = 3377;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 499;
		t.width = 1440;
		return t;
	};
	_proto.backBtn0_i = function () {
		var t = new eui.Image();
		this.backBtn0 = t;
		t.anchorOffsetY = 0;
		t.height = 91.34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jiantou_png";
		t.x = 522;
		t.y = 901.8499999999999;
		return t;
	};
	_proto.backText0_i = function () {
		var t = new eui.Image();
		this.backText0 = t;
		t.anchorOffsetY = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "Back2_png";
		t.x = 302;
		t.y = 901.85;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 70;
		t.stroke = 3;
		t.strokeColor = 0x0f353b;
		t.text = "跳过";
		t.visible = false;
		t.x = 355.99999999999994;
		t.y = 912.52;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "tut_interface_png";
		t.x = -275.00000000000006;
		t.y = -376.99999999999994;
		return t;
	};
	_proto.mAnimRoot_i = function () {
		var t = new eui.Group();
		this.mAnimRoot = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 30;
		t.x = 117.99999999999994;
		t.y = 35.000000000000114;
		return t;
	};
	return GuideViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/LoadingView/LoadingViewProgressSkin.exml'] = window.LoadingViewProgressSkin = (function (_super) {
	__extends(LoadingViewProgressSkin, _super);
	function LoadingViewProgressSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 378;
	}
	var _proto = LoadingViewProgressSkin.prototype;

	return LoadingViewProgressSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/LoadingView/LoadingViewSkin.exml'] = window.LoadingViewSkin = (function (_super) {
	__extends(LoadingViewSkin, _super);
	var LoadingViewSkin$Skin5 = 	(function (_super) {
		__extends(LoadingViewSkin$Skin5, _super);
		function LoadingViewSkin$Skin5() {
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
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoadingViewSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login_dy_png";
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
		return LoadingViewSkin$Skin5;
	})(eui.Skin);

	function LoadingViewSkin() {
		_super.call(this);
		this.skinParts = ["bg","anitGroup","loadImg2","loadImg","progress","mVersion","mOtherRoot","mOppoProgress","mOppoRoot","_loginBtn","gameGroup"];
		
		this.height = 2300;
		this.width = 1440;
		this.elementsContent = [this.gameGroup_i()];
	}
	var _proto = LoadingViewSkin.prototype;

	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 200;
		t.elementsContent = [this.mOtherRoot_i(),this.mOppoRoot_i(),this._loginBtn_i()];
		return t;
	};
	_proto.mOtherRoot_i = function () {
		var t = new eui.Group();
		this.mOtherRoot = t;
		t.height = 200;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_i(),this._Image1_i(),this._Image2_i(),this.anitGroup_i(),this.loadImg2_i(),this.loadImg_i(),this._Label1_i(),this.progress_i(),this._Label2_i(),this.mVersion_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.alpha = 0.2;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jiazaizhong_png";
		t.visible = false;
		t.x = -65;
		t.y = -47.999999999999886;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "biaoti2_png";
		t.x = -261.00000000000006;
		t.y = -548;
		return t;
	};
	_proto.anitGroup_i = function () {
		var t = new eui.DataGroup();
		this.anitGroup = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 400.3899999999999;
		t.y = 631.8400000000001;
		return t;
	};
	_proto.loadImg2_i = function () {
		var t = new eui.Image();
		this.loadImg2 = t;
		t.anchorOffsetY = 17.5;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "load2_png";
		t.x = -93;
		t.y = -37.5;
		return t;
	};
	_proto.loadImg_i = function () {
		var t = new eui.Image();
		this.loadImg = t;
		t.anchorOffsetY = 17.5;
		t.fillMode = "clip";
		t.left = -93;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "load1_png";
		t.x = -93;
		t.y = -37.5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.stroke = 3;
		t.strokeColor = 0xffffff;
		t.text = "10%";
		t.textColor = 0x000000;
		t.visible = false;
		t.x = 73;
		t.y = -62.69;
		return t;
	};
	_proto.progress_i = function () {
		var t = new eui.BitmapLabel();
		this.progress = t;
		t.font = "az_fnt";
		t.horizontalCenter = 0.5;
		t.text = "10%";
		t.touchEnabled = false;
		t.y = -65;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 48;
		t.stroke = 3;
		t.strokeColor = 0xFFFFFF;
		t.text = "版本：v1.2.0";
		t.textColor = 0x000000;
		t.visible = false;
		t.x = 401;
		t.y = 580.31;
		return t;
	};
	_proto.mVersion_i = function () {
		var t = new eui.BitmapLabel();
		this.mVersion = t;
		t.font = "az_fnt";
		t.right = -465;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "v1.0";
		t.touchEnabled = false;
		t.y = 576;
		return t;
	};
	_proto.mOppoRoot_i = function () {
		var t = new eui.Group();
		this.mOppoRoot = t;
		t.height = 200;
		t.visible = false;
		t.width = 200;
		t.x = -10;
		t.y = -34;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.mOppoProgress_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.height = 2821.39;
		t.visible = false;
		t.width = 1658;
		t.x = -743;
		t.y = -1303.39;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 25;
		t.ellipseWidth = 25;
		t.fillColor = 0x444444;
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 562;
		t.x = -172.9999999999999;
		t.y = 850.42;
		return t;
	};
	_proto.mOppoProgress_i = function () {
		var t = new eui.Rect();
		this.mOppoProgress = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 25;
		t.ellipseWidth = 25;
		t.fillColor = 0xffbf0d;
		t.height = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 13;
		t.x = -173;
		t.y = 850.42;
		return t;
	};
	_proto._loginBtn_i = function () {
		var t = new eui.Button();
		this._loginBtn = t;
		t.label = "";
		t.x = -110;
		t.y = 213;
		t.skinName = LoadingViewSkin$Skin5;
		return t;
	};
	return LoadingViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/PropView/AnswerViewSkin.exml'] = window.AnswerViewSkin = (function (_super) {
	__extends(AnswerViewSkin, _super);
	function AnswerViewSkin() {
		_super.call(this);
		this.skinParts = ["btmTxt0","btmTxt1","btmTxt2","okImg","closeImg","okTxt","closeTxt"];
		
		this.height = 2300;
		this.width = 1440;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = AnswerViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.bottom = -270;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1080;
		t.elementsContent = [this._Image1_i(),this._Rect2_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.btmTxt0_i(),this.btmTxt1_i(),this.btmTxt2_i(),this.okImg_i(),this.closeImg_i(),this._Label1_i(),this.okTxt_i(),this.closeTxt_i(),this._Label2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 672.51;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "answerSheet_png";
		t.width = 790.4;
		t.y = 157.88;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseWidth = 34;
		t.fillAlpha = 1;
		t.fillColor = 0xa5d4b9;
		t.height = 300;
		t.horizontalCenter = -1;
		t.width = 777;
		t.y = 905.48;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 206;
		t.scale9Grid = new egret.Rectangle(31,34,125,124);
		t.source = "displayBox_png";
		t.width = 166;
		t.x = 216;
		t.y = 952;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 206;
		t.scale9Grid = new egret.Rectangle(31,34,125,124);
		t.source = "displayBox_png";
		t.width = 166;
		t.x = 458;
		t.y = 952;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 206;
		t.scale9Grid = new egret.Rectangle(31,34,125,124);
		t.source = "displayBox_png";
		t.width = 166;
		t.x = 700;
		t.y = 952;
		return t;
	};
	_proto.btmTxt0_i = function () {
		var t = new eui.BitmapLabel();
		this.btmTxt0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "darkGreen_fnt";
		t.horizontalCenter = -232.5;
		t.text = "6";
		t.y = 1001;
		return t;
	};
	_proto.btmTxt1_i = function () {
		var t = new eui.BitmapLabel();
		this.btmTxt1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "darkGreen_fnt";
		t.horizontalCenter = 5.5;
		t.text = "6";
		t.y = 1001;
		return t;
	};
	_proto.btmTxt2_i = function () {
		var t = new eui.BitmapLabel();
		this.btmTxt2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "darkGreen_fnt";
		t.horizontalCenter = 250.5;
		t.text = "6";
		t.y = 1001;
		return t;
	};
	_proto.okImg_i = function () {
		var t = new eui.Image();
		this.okImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 144.22;
		t.rotation = 360;
		t.source = "ok_png";
		t.width = 249;
		t.x = 655.5;
		t.y = 1352;
		return t;
	};
	_proto.closeImg_i = function () {
		var t = new eui.Image();
		this.closeImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 143.87;
		t.source = "yes_png";
		t.width = 249;
		t.x = 201;
		t.y = 1352;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 60;
		t.text = "确定";
		t.textColor = 0x1a3d42;
		t.visible = false;
		t.x = 730.5;
		t.y = 1394.11;
		return t;
	};
	_proto.okTxt_i = function () {
		var t = new eui.BitmapLabel();
		this.okTxt = t;
		t.font = "az_fnt";
		t.horizontalCenter = 243;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "ok";
		t.touchEnabled = false;
		t.y = 1386;
		return t;
	};
	_proto.closeTxt_i = function () {
		var t = new eui.BitmapLabel();
		this.closeTxt = t;
		t.font = "az_fnt";
		t.horizontalCenter = -211;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "close";
		t.touchEnabled = false;
		t.y = 1386;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 60;
		t.text = "取消";
		t.textColor = 0x1A3D42;
		t.visible = false;
		t.x = 265.5;
		t.y = 1393.94;
		return t;
	};
	return AnswerViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/PropView/ATMViewSkin.exml'] = window.ATMViewSkin = (function (_super) {
	__extends(ATMViewSkin, _super);
	function ATMViewSkin() {
		_super.call(this);
		this.skinParts = ["btmTxt0","btmTxt1","btmTxt2","btmTxt3","okImg","closeImg","okTxt","closeTxt"];
		
		this.height = 2300;
		this.width = 1440;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = ATMViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.bottom = -320;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1080;
		t.elementsContent = [this._Image1_i(),this._Rect2_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.btmTxt0_i(),this.btmTxt1_i(),this.btmTxt2_i(),this.btmTxt3_i(),this.okImg_i(),this.closeImg_i(),this._Label1_i(),this._Label2_i(),this.okTxt_i(),this.closeTxt_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 646.63;
		t.horizontalCenter = 0;
		t.source = "panel_png";
		t.width = 793.75;
		t.y = 173.27;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseWidth = 40;
		t.fillAlpha = 1;
		t.fillColor = 0x79bbe6;
		t.height = 303.34;
		t.horizontalCenter = 0;
		t.width = 779.1;
		t.y = 904.45;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 206;
		t.scale9Grid = new egret.Rectangle(31,34,125,124);
		t.source = "displayBox_png";
		t.width = 166;
		t.x = 172.02;
		t.y = 952;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 206;
		t.scale9Grid = new egret.Rectangle(31,34,125,124);
		t.source = "displayBox_png";
		t.width = 166;
		t.x = 360;
		t.y = 952;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 206;
		t.scale9Grid = new egret.Rectangle(31,34,125,124);
		t.source = "displayBox_png";
		t.width = 166;
		t.x = 548;
		t.y = 952;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 206;
		t.scale9Grid = new egret.Rectangle(31,34,125,124);
		t.source = "displayBox_png";
		t.width = 166;
		t.x = 735.33;
		t.y = 952;
		return t;
	};
	_proto.btmTxt0_i = function () {
		var t = new eui.BitmapLabel();
		this.btmTxt0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "darkGreen_fnt";
		t.horizontalCenter = -276.5;
		t.text = "6";
		t.y = 1001;
		return t;
	};
	_proto.btmTxt1_i = function () {
		var t = new eui.BitmapLabel();
		this.btmTxt1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "darkGreen_fnt";
		t.horizontalCenter = -92.5;
		t.text = "6";
		t.y = 1001;
		return t;
	};
	_proto.btmTxt2_i = function () {
		var t = new eui.BitmapLabel();
		this.btmTxt2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "darkGreen_fnt";
		t.horizontalCenter = 96.5;
		t.text = "6";
		t.y = 1001;
		return t;
	};
	_proto.btmTxt3_i = function () {
		var t = new eui.BitmapLabel();
		this.btmTxt3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "darkGreen_fnt";
		t.horizontalCenter = 286.5;
		t.text = "6";
		t.y = 1001;
		return t;
	};
	_proto.okImg_i = function () {
		var t = new eui.Image();
		this.okImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 144.22;
		t.rotation = 360;
		t.source = "ok_png";
		t.width = 249;
		t.x = 655.5;
		t.y = 1352;
		return t;
	};
	_proto.closeImg_i = function () {
		var t = new eui.Image();
		this.closeImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 143.87;
		t.source = "yes_png";
		t.width = 249;
		t.x = 201;
		t.y = 1352;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 60;
		t.text = "确定";
		t.textColor = 0x1A3D42;
		t.visible = false;
		t.x = 730.5;
		t.y = 1394.11;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 60;
		t.text = "取消";
		t.textColor = 0x1A3D42;
		t.visible = false;
		t.x = 265.5;
		t.y = 1393.94;
		return t;
	};
	_proto.okTxt_i = function () {
		var t = new eui.BitmapLabel();
		this.okTxt = t;
		t.font = "az_fnt";
		t.horizontalCenter = 243;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "ok";
		t.touchEnabled = false;
		t.y = 1386;
		return t;
	};
	_proto.closeTxt_i = function () {
		var t = new eui.BitmapLabel();
		this.closeTxt = t;
		t.font = "az_fnt";
		t.horizontalCenter = -211;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "close";
		t.touchEnabled = false;
		t.y = 1386;
		return t;
	};
	return ATMViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/PropView/MicroscopeViewSkin.exml'] = window.MicroscopeViewSkin = (function (_super) {
	__extends(MicroscopeViewSkin, _super);
	function MicroscopeViewSkin() {
		_super.call(this);
		this.skinParts = ["box","closeImg","closeTxt","xibao_1","xibao_2","xibao_3","xibao_4","xibao_5","xibao_6","xibao_7","xibao_8","xibao_9","xibao_10","xibao_11","xibao_12","xibao_13","gameGroup"];
		
		this.height = 2300;
		this.width = 1440;
		this.elementsContent = [this._Rect1_i(),this.gameGroup_i()];
	}
	var _proto = MicroscopeViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.bottom = -312;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1080;
		t.elementsContent = [this.box_i(),this.closeImg_i(),this._Label1_i(),this.closeTxt_i(),this.xibao_1_i(),this.xibao_2_i(),this.xibao_3_i(),this.xibao_4_i(),this.xibao_5_i(),this.xibao_6_i(),this.xibao_7_i(),this.xibao_8_i(),this.xibao_9_i(),this.xibao_10_i(),this.xibao_11_i(),this.xibao_12_i(),this.xibao_13_i(),this._Image1_i()];
		return t;
	};
	_proto.box_i = function () {
		var t = new eui.Rect();
		this.box = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xd2e7f3;
		t.height = 830.61;
		t.width = 871.52;
		t.x = 104;
		t.y = 545;
		return t;
	};
	_proto.closeImg_i = function () {
		var t = new eui.Image();
		this.closeImg = t;
		t.horizontalCenter = 0;
		t.source = "ok_png";
		t.y = 1412;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 2;
		t.size = 60;
		t.text = "关闭";
		t.textColor = 0x1a3d42;
		t.visible = false;
		t.y = 1450.44;
		return t;
	};
	_proto.closeTxt_i = function () {
		var t = new eui.BitmapLabel();
		this.closeTxt = t;
		t.font = "az_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "close";
		t.touchEnabled = false;
		t.y = 1442;
		return t;
	};
	_proto.xibao_1_i = function () {
		var t = new eui.Image();
		this.xibao_1 = t;
		t.height = 95;
		t.source = "xibao_1_png";
		t.width = 110;
		t.x = 376;
		t.y = 711;
		return t;
	};
	_proto.xibao_2_i = function () {
		var t = new eui.Image();
		this.xibao_2 = t;
		t.height = 94;
		t.source = "xibao_3_png";
		t.width = 109;
		t.x = 553;
		t.y = 697;
		return t;
	};
	_proto.xibao_3_i = function () {
		var t = new eui.Image();
		this.xibao_3 = t;
		t.height = 106;
		t.source = "xibao_5_png";
		t.width = 104;
		t.x = 229;
		t.y = 788;
		return t;
	};
	_proto.xibao_4_i = function () {
		var t = new eui.Image();
		this.xibao_4 = t;
		t.height = 117;
		t.source = "xibao_6_png";
		t.width = 129;
		t.x = 417;
		t.y = 852;
		return t;
	};
	_proto.xibao_5_i = function () {
		var t = new eui.Image();
		this.xibao_5 = t;
		t.height = 117;
		t.source = "xibao_6_png";
		t.width = 129;
		t.x = 333;
		t.y = 1003.53;
		return t;
	};
	_proto.xibao_6_i = function () {
		var t = new eui.Image();
		this.xibao_6 = t;
		t.height = 117;
		t.source = "xibao_6_png";
		t.width = 129;
		t.x = 182.5;
		t.y = 969;
		return t;
	};
	_proto.xibao_7_i = function () {
		var t = new eui.Image();
		this.xibao_7 = t;
		t.height = 117;
		t.source = "xibao_6_png";
		t.width = 129;
		t.x = 247;
		t.y = 1120.53;
		return t;
	};
	_proto.xibao_8_i = function () {
		var t = new eui.Image();
		this.xibao_8 = t;
		t.height = 117;
		t.source = "xibao_6_png";
		t.width = 129;
		t.x = 481.5;
		t.y = 1062.03;
		return t;
	};
	_proto.xibao_9_i = function () {
		var t = new eui.Image();
		this.xibao_9 = t;
		t.height = 80;
		t.source = "xibao_7_png";
		t.width = 91;
		t.x = 592;
		t.y = 929;
		return t;
	};
	_proto.xibao_10_i = function () {
		var t = new eui.Image();
		this.xibao_10 = t;
		t.height = 80;
		t.source = "xibao_7_png";
		t.width = 91;
		t.x = 607.5;
		t.y = 1062.03;
		return t;
	};
	_proto.xibao_11_i = function () {
		var t = new eui.Image();
		this.xibao_11 = t;
		t.height = 80;
		t.source = "xibao_7_png";
		t.width = 91;
		t.x = 590;
		t.y = 822;
		return t;
	};
	_proto.xibao_12_i = function () {
		var t = new eui.Image();
		this.xibao_12 = t;
		t.height = 80;
		t.source = "xibao_7_png";
		t.width = 91;
		t.x = 693;
		t.y = 1062.03;
		return t;
	};
	_proto.xibao_13_i = function () {
		var t = new eui.Image();
		this.xibao_13 = t;
		t.height = 80;
		t.source = "xibao_7_png";
		t.width = 91;
		t.x = 703;
		t.y = 830.5;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xianweijingmian1_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	return MicroscopeViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/PropView/PropViewSkin.exml'] = window.PropViewSkin = (function (_super) {
	__extends(PropViewSkin, _super);
	function PropViewSkin() {
		_super.call(this);
		this.skinParts = ["bg_M0","gameGroup","mgameGroup","rightImg","leftImg","stop","circle","X_blue","xBtn","help","mSkipBtn","dele","propBox","propGroup","imgJB","tishiTxt","mTimeTip","mTime","mpropGroup","mAdBg","mAdTips","txt1","txt2","mShipin","mAdRoot","txt3","txt4","imgClose1","imgClose2","btn1","btn2","mShare","groupShop","imgClose0","imgClose3","lbTip","groupTip","_tishi1Img","_tishi1Lb","mMFTxt1","_ads1Gp","_tishi1Gp","_tishi2Img","_tishi2Lb","_tishi3Img","mMFTxt2","_ads2Gp","_tishi2Gp","_tishi3Lb","mMFTxt3","_ads3Gp","_tishi3Gp","_okImg","imgClose5","_share","_tiShiWdGp","mPlay","mGuidGroup"];
		
		this.height = 2300;
		this.width = 1440;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = PropViewSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1080;
		t.elementsContent = [this._Group1_i(),this._Image3_i(),this.gameGroup_i(),this.mgameGroup_i(),this.rightImg_i(),this.leftImg_i(),this.stop_i(),this.xBtn_i(),this.help_i(),this.mSkipBtn_i(),this.dele_i(),this.propBox_i(),this.propGroup_i(),this.imgJB_i(),this._Label1_i(),this.tishiTxt_i(),this._Label2_i(),this.mTimeTip_i(),this._Label3_i(),this.mTime_i(),this.mpropGroup_i(),this.groupShop_i(),this.groupTip_i(),this._tiShiWdGp_i(),this.mGuidGroup_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.width = 4320;
		t.x = -1620;
		t.y = 0;
		t.elementsContent = [this.bg_M0_i()];
		return t;
	};
	_proto.bg_M0_i = function () {
		var t = new eui.Group();
		this.bg_M0 = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1440;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgT_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1390.5;
		t.scale9Grid = new egret.Rectangle(0,40,50,10);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bgZ1_png";
		t.width = 722;
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 591.67;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,13,1440,5);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jiemianup_png";
		t.y = -523.67;
		return t;
	};
	_proto.gameGroup_i = function () {
		var t = new eui.DataGroup();
		this.gameGroup = t;
		t.height = 1920;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.mgameGroup_i = function () {
		var t = new eui.Group();
		this.mgameGroup = t;
		t.height = 1920;
		t.touchEnabled = false;
		t.width = 1080;
		t.x = -180;
		t.y = 0;
		return t;
	};
	_proto.rightImg_i = function () {
		var t = new eui.Image();
		this.rightImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 135.26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jiantou_png";
		t.width = 87.67;
		t.x = 959.9999999999999;
		t.y = 1100;
		return t;
	};
	_proto.leftImg_i = function () {
		var t = new eui.Image();
		this.leftImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 135.26;
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "jiantou_png";
		t.width = 87.67;
		t.x = 119.99999999999979;
		t.y = 1100;
		return t;
	};
	_proto.stop_i = function () {
		var t = new eui.Image();
		this.stop = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "zanting_png";
		t.width = 100;
		t.x = 31.999999999999776;
		t.y = 1448;
		return t;
	};
	_proto.xBtn_i = function () {
		var t = new eui.Group();
		this.xBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 32;
		t.y = 1448;
		t.elementsContent = [this.circle_i(),this.X_blue_i()];
		return t;
	};
	_proto.circle_i = function () {
		var t = new eui.Image();
		this.circle = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "circle_png";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto.X_blue_i = function () {
		var t = new eui.Image();
		this.X_blue = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "X_blue_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.help_i = function () {
		var t = new eui.Image();
		this.help = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tishi_png";
		t.width = 100;
		t.x = 200;
		t.y = 1448;
		return t;
	};
	_proto.mSkipBtn_i = function () {
		var t = new eui.Image();
		this.mSkipBtn = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "skipBtn_png";
		t.width = 100;
		t.x = 374;	
		t.y = 1448;
		return t;
	};
	_proto.dele_i = function () {
		var t = new eui.Image();
		this.dele = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "lajitong1_png";
		t.x = 929.67;
		t.y = 1456;
		return t;
	};
	_proto.propBox_i = function () {
		var t = new eui.Image();
		this.propBox = t;
		t.height = 340;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wupinlan_png";
		t.width = 1024;
		t.x = 19;
		t.y = 1567;
		return t;
	};
	_proto.propGroup_i = function () {
		var t = new eui.DataGroup();
		this.propGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 262;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.width = 956;
		t.x = 64;
		t.y = 1603;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto.imgJB_i = function () {
		var t = new eui.Image();
		this.imgJB = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 97.03;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jinb-icon_png";
		t.width = 83;
		t.x = 96.5;
		t.y = 161;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 35;
		t.text = "X   2";
		t.textColor = 0x000000;
		t.visible = false;
		t.x = 194;
		t.y = 197;
		return t;
	};
	_proto.tishiTxt_i = function () {
		var t = new eui.BitmapLabel();
		this.tishiTxt = t;
		t.font = "az_fnt";
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "x2";
		t.touchEnabled = false;
		t.x = 195;
		t.y = 171;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 35;
		t.text = "时间:";
		t.textAlign = "right";
		t.textColor = 0x000000;
		t.visible = false;
		t.width = 179;
		t.x = 703;
		t.y = 197;
		return t;
	};
	_proto.mTimeTip_i = function () {
		var t = new eui.BitmapLabel();
		this.mTimeTip = t;
		t.font = "az_fnt";
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "time:";
		t.touchEnabled = false;
		t.x = 747;
		t.y = 183;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 35;
		t.text = "0秒";
		t.textColor = 0x000000;
		t.visible = false;
		t.x = 886;
		t.y = 197;
		return t;
	};
	_proto.mTime_i = function () {
		var t = new eui.BitmapLabel();
		this.mTime = t;
		t.font = "az_fnt";
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "12s";
		t.touchEnabled = false;
		t.x = 886;
		t.y = 183;
		return t;
	};
	_proto.mpropGroup_i = function () {
		var t = new eui.Group();
		this.mpropGroup = t;
		t.height = 1920;
		t.touchEnabled = false;
		t.width = 1080;
		t.x = -180;
		t.y = 0;
		return t;
	};
	_proto.groupShop_i = function () {
		var t = new eui.Group();
		this.groupShop = t;
		t.height = 1920;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Image4_i(),this.mAdBg_i(),this.mAdTips_i(),this.mAdRoot_i(),this._Image6_i(),this.txt3_i(),this.txt4_i(),this._Image7_i(),this.imgClose1_i(),this.imgClose2_i(),this.btn1_i(),this.btn2_i(),this.mShare_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.height = 3383;
		t.horizontalCenter = 0;
		t.width = 1440;
		t.y = -352;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 434;
		t.horizontalCenter = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "stop_png";
		t.verticalCenter = 0;
		t.width = 450;
		return t;
	};
	_proto.mAdBg_i = function () {
		var t = new eui.Image();
		this.mAdBg = t;
		t.anchorOffsetX = 351.5;
		t.anchorOffsetY = 63;
		t.height = 126;
		t.horizontalCenter = 4.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shezhi4_png";
		t.width = 703;
		t.y = 1117.83;
		return t;
	};
	_proto.mAdTips_i = function () {
		var t = new eui.Label();
		this.mAdTips = t;
		t.anchorOffsetX = 302.5;
		t.anchorOffsetY = 22.5;
		t.fontFamily = "Microsoft YaHei";
		t.size = 55;
		t.text = "播放激励视频获得魔法棒";
		t.textColor = 0x6a5034;
		t.visible = false;
		t.x = 544;
		t.y = 1117;
		return t;
	};
	_proto.mAdRoot_i = function () {
		var t = new eui.Group();
		this.mAdRoot = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 56.06;
		t.height = 112.12;
		t.width = 200;
		t.x = 545;
		t.y = 1107;
		t.elementsContent = [this.txt1_i(),this.txt2_i(),this._Image5_i(),this.mShipin_i()];
		return t;
	};
	_proto.txt1_i = function () {
		var t = new eui.Label();
		this.txt1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -197;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 60;
		t.text = "魔法棒";
		t.textColor = 0x6a5034;
		t.x = 21.000000000000057;
		t.y = 39.63000000000011;
		return t;
	};
	_proto.txt2_i = function () {
		var t = new eui.Label();
		this.txt2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 132;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 60;
		t.text = "X 60个 6元";
		t.textColor = 0x6a5034;
		t.x = 298;
		t.y = 41.13000000000011;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "til-icon_png";
		t.x = 7.5;
		t.y = 29.630000000000337;
		return t;
	};
	_proto.mShipin_i = function () {
		var t = new eui.Image();
		this.mShipin = t;
		t.source = "btn_shipin_png";
		t.visible = false;
		t.x = 294;
		t.y = 24;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 126;
		t.horizontalCenter = 14.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shezhi4_png";
		t.width = 703;
		t.y = 753.2;
		return t;
	};
	_proto.txt3_i = function () {
		var t = new eui.Label();
		this.txt3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -187;
		t.size = 60;
		t.text = "魔法棒";
		t.textColor = 0x6a5034;
		t.y = 788;
		return t;
	};
	_proto.txt4_i = function () {
		var t = new eui.Label();
		this.txt4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 142;
		t.size = 60;
		t.text = "X 1个 免费";
		t.textColor = 0x6a5034;
		t.y = 789.5;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "til-icon_png";
		t.x = 455;
		t.y = 778;
		return t;
	};
	_proto.imgClose1_i = function () {
		var t = new eui.Image();
		this.imgClose1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ok_png";
		t.x = 420.5;
		t.y = 1413.5;
		return t;
	};
	_proto.imgClose2_i = function () {
		var t = new eui.Label();
		this.imgClose2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 60;
		t.text = "确定";
		t.textColor = 0x1a3d42;
		t.x = 480;
		t.y = 1456;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new eui.Rect();
		this.btn1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 136;
		t.width = 736;
		t.x = 193;
		t.y = 751.5;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Rect();
		this.btn2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 136;
		t.width = 736;
		t.x = 170;
		t.y = 1059.83;
		return t;
	};
	_proto.mShare_i = function () {
		var t = new eui.Image();
		this.mShare = t;
		t.source = "share1_png";
		t.x = 687;
		t.y = 768;
		t.visible = false;
		return t;
	};
	_proto.groupTip_i = function () {
		var t = new eui.Group();
		this.groupTip = t;
		t.height = 1920;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this._Image8_i(),this.imgClose0_i(),this.imgClose3_i(),this.lbTip_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.height = 3351;
		t.horizontalCenter = 0;
		t.width = 1440;
		t.y = -190;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 434;
		t.horizontalCenter = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "stop_png";
		t.verticalCenter = 0;
		t.width = 450;
		return t;
	};
	_proto.imgClose0_i = function () {
		var t = new eui.Image();
		this.imgClose0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ok_png";
		t.x = 420.5;
		t.y = 1413.5;
		return t;
	};
	_proto.imgClose3_i = function () {
		var t = new eui.Label();
		this.imgClose3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 60;
		t.text = "确定";
		t.textColor = 0x1a3d42;
		t.x = 480;
		t.y = 1456;
		return t;
	};
	_proto.lbTip_i = function () {
		var t = new eui.Label();
		this.lbTip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 288;
		t.horizontalCenter = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 60;
		t.text = "没有魔法棒了";
		t.textAlign = "center";
		t.textColor = 0x313131;
		t.verticalAlign = "top";
		t.verticalCenter = 0;
		t.width = 770;
		return t;
	};
	_proto._tiShiWdGp_i = function () {
		var t = new eui.Group();
		this._tiShiWdGp = t;
		t.height = 1920;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 1080;
		t.elementsContent = [this._Rect3_i(),this._Image9_i(),this._tishi1Gp_i(),this._tishi2Gp_i(),this._tishi3Gp_i(),this._okImg_i(),this._Label10_i(),this.imgClose5_i(),this._share_i(),this._Image13_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.height = 3383;
		t.horizontalCenter = 0;
		t.width = 1440;
		t.y = -352;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 532;
		t.horizontalCenter = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "stop_png";
		t.verticalCenter = 0;
		t.width = 450;
		return t;
	};
	_proto._tishi1Gp_i = function () {
		var t = new eui.Group();
		this._tishi1Gp = t;
		t.height = 250;
		t.width = 701;
		t.x = 203;
		t.y = 519.38;
		t.elementsContent = [this._tishi1Img_i(),this._Label4_i(),this._tishi1Lb_i(),this._ads1Gp_i()];
		return t;
	};
	_proto._tishi1Img_i = function () {
		var t = new eui.Image();
		this._tishi1Img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shezhi4_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 60;
		t.text = "测试";
		t.textAlign = "center";
		t.textColor = 0x6A5034;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 619;
		t.x = 47;
		return t;
	};
	_proto._tishi1Lb_i = function () {
		var t = new eui.BitmapLabel();
		this._tishi1Lb = t;
		t.font = "az_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "12s`asdasda\nsdasd";
		t.touchEnabled = false;
		t.verticalCenter = -6;
		t.visible = false;
		t.width = 400;
		return t;
	};
	_proto._ads1Gp_i = function () {
		var t = new eui.Group();
		this._ads1Gp = t;
		t.horizontalCenter = -32;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image10_i(),this._Label5_i(),this.mMFTxt1_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "btn_shipin_png";
		t.touchEnabled = false;
		t.x = 44;
		t.y = 17;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 75;
		t.text = "免费提示1";
		t.textAlign = "center";
		t.textColor = 0x6A5034;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.visible = false;
		t.x = 196;
		t.y = 22;
		return t;
	};
	_proto.mMFTxt1_i = function () {
		var t = new eui.BitmapLabel();
		this.mMFTxt1 = t;
		t.font = "az_fnt";
		t.horizontalCenter = 84;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "Free tip 1";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._tishi2Gp_i = function () {
		var t = new eui.Group();
		this._tishi2Gp = t;
		t.height = 250;
		t.width = 701;
		t.x = 203;
		t.y = 820.2;
		t.elementsContent = [this._tishi2Img_i(),this._Label6_i(),this._tishi2Lb_i(),this._ads2Gp_i()];
		return t;
	};
	_proto._tishi2Img_i = function () {
		var t = new eui.Image();
		this._tishi2Img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shezhi4_png";
		t.touchEnabled = true;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 60;
		t.text = "测试测试测试测试测试测试测试";
		t.textAlign = "center";
		t.textColor = 0x6A5034;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 619;
		t.x = 47;
		return t;
	};
	_proto._tishi2Lb_i = function () {
		var t = new eui.BitmapLabel();
		this._tishi2Lb = t;
		t.font = "az_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "12s";
		t.touchEnabled = false;
		t.verticalCenter = -6;
		t.visible = false;
		t.width = 400;
		return t;
	};
	_proto._ads2Gp_i = function () {
		var t = new eui.Group();
		this._ads2Gp = t;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.verticalCenter = 0;
		t.x = 47;
		t.elementsContent = [this._tishi3Img_i(),this._Label7_i(),this.mMFTxt2_i()];
		return t;
	};
	_proto._tishi3Img_i = function () {
		var t = new eui.Image();
		this._tishi3Img = t;
		t.source = "btn_shipin_png";
		t.x = 44;
		t.y = 17;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 75;
		t.text = "免费提示2";
		t.textAlign = "center";
		t.textColor = 0x6A5034;
		t.verticalAlign = "middle";
		t.visible = false;
		t.x = 196;
		t.y = 22;
		return t;
	};
	_proto.mMFTxt2_i = function () {
		var t = new eui.BitmapLabel();
		this.mMFTxt2 = t;
		t.font = "az_fnt";
		t.horizontalCenter = 84;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "Free tip 2";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._tishi3Gp_i = function () {
		var t = new eui.Group();
		this._tishi3Gp = t;
		t.height = 250;
		t.width = 701;
		t.x = 203;
		t.y = 1121.69;
		t.elementsContent = [this._Image11_i(),this._Label8_i(),this._tishi3Lb_i(),this._ads3Gp_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shezhi4_png";
		t.touchEnabled = true;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 60;
		t.text = "测试测试测试测试测试测试测试";
		t.textAlign = "center";
		t.textColor = 0x6A5034;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 619;
		t.x = 47;
		return t;
	};
	_proto._tishi3Lb_i = function () {
		var t = new eui.BitmapLabel();
		this._tishi3Lb = t;
		t.font = "az_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "12s";
		t.touchEnabled = false;
		t.verticalCenter = -6;
		t.visible = false;
		t.width = 400;
		return t;
	};
	_proto._ads3Gp_i = function () {
		var t = new eui.Group();
		this._ads3Gp = t;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.verticalCenter = 0;
		t.x = 47;
		t.elementsContent = [this._Image12_i(),this._Label9_i(),this.mMFTxt3_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "btn_shipin_png";
		t.x = 44;
		t.y = 17;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 75;
		t.text = "免费提示3";
		t.textAlign = "center";
		t.textColor = 0x6A5034;
		t.verticalAlign = "middle";
		t.visible = false;
		t.x = 196;
		t.y = 22;
		return t;
	};
	_proto.mMFTxt3_i = function () {
		var t = new eui.BitmapLabel();
		this.mMFTxt3 = t;
		t.font = "az_fnt";
		t.horizontalCenter = 84;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "Free tip 3";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._okImg_i = function () {
		var t = new eui.Image();
		this._okImg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ok_png";
		t.x = 420.5;
		t.y = 1541.5;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 60;
		t.text = "确定";
		t.textColor = 0x1A3D42;
		t.touchEnabled = false;
		t.visible = false;
		t.x = 480;
		t.y = 1584;
		return t;
	};
	_proto.imgClose5_i = function () {
		var t = new eui.BitmapLabel();
		this.imgClose5 = t;
		t.font = "az_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "close";
		t.touchEnabled = false;
		t.y = 1576;
		return t;
	};
	_proto._share_i = function () {
		var t = new eui.Image();
		this._share = t;
		t.height = 139;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cat_qzhy_png";
		t.width = 334;
		t.x = 372;
		t.y = 1699;
		t.visible = false;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "xts_png";
		t.x = 47;
		t.y = 1835;
		t.visible = false;
		return t;
	};
	_proto.mGuidGroup_i = function () {
		var t = new eui.Group();
		this.mGuidGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 262;
		t.touchEnabled = false;
		t.width = 956;
		t.x = 64;
		t.y = 1603;
		t.elementsContent = [this.mPlay_i()];
		return t;
	};
	_proto.mPlay_i = function () {
		var t = new eui.Image();
		this.mPlay = t;
		t.height = 140;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shou_png";
		t.touchEnabled = false;
		t.width = 140;
		t.x = 10;
		t.y = -905;
		return t;
	};
	return PropViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/PropView/SafeViewSkin.exml'] = window.SafeViewSkin = (function (_super) {
	__extends(SafeViewSkin, _super);
	function SafeViewSkin() {
		_super.call(this);
		this.skinParts = ["btmTxt0","btmTxt1","btmTxt2","openImg","restImg","openTxt","restTxt"];
		
		this.height = 2300;
		this.width = 1440;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = SafeViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.height = 3697;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 200;
		t.elementsContent = [this._Image1_i(),this.btmTxt0_i(),this.btmTxt1_i(),this.btmTxt2_i(),this.openImg_i(),this.restImg_i(),this._Label1_i(),this._Label2_i(),this.openTxt_i(),this.restTxt_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 720.49;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "safe1_png";
		t.width = 1157.01;
		t.x = -479.00000000000006;
		t.y = -293;
		return t;
	};
	_proto.btmTxt0_i = function () {
		var t = new eui.BitmapLabel();
		this.btmTxt0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "darkGreen_fnt";
		t.horizontalCenter = -101.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "6";
		t.y = -65.99999999999989;
		return t;
	};
	_proto.btmTxt1_i = function () {
		var t = new eui.BitmapLabel();
		this.btmTxt1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "darkGreen_fnt";
		t.horizontalCenter = 109.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "6";
		t.y = -65.99999999999989;
		return t;
	};
	_proto.btmTxt2_i = function () {
		var t = new eui.BitmapLabel();
		this.btmTxt2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "darkGreen_fnt";
		t.horizontalCenter = 306.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "6";
		t.y = -65.99999999999989;
		return t;
	};
	_proto.openImg_i = function () {
		var t = new eui.Image();
		this.openImg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ok_png";
		t.x = 217.51000000000005;
		t.y = 467;
		return t;
	};
	_proto.restImg_i = function () {
		var t = new eui.Image();
		this.restImg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yes_png";
		t.x = -226.50000000000006;
		t.y = 467;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 56;
		t.text = "打开";
		t.textColor = 0x133535;
		t.visible = false;
		t.x = 284.37999999999994;
		t.y = 508;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 56;
		t.text = "取消";
		t.textColor = 0x133535;
		t.visible = false;
		t.x = -170.00000000000006;
		t.y = 508;
		return t;
	};
	_proto.openTxt_i = function () {
		var t = new eui.BitmapLabel();
		this.openTxt = t;
		t.font = "az_fnt";
		t.horizontalCenter = 243;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "ok";
		t.touchEnabled = false;
		t.y = 494;
		return t;
	};
	_proto.restTxt_i = function () {
		var t = new eui.BitmapLabel();
		this.restTxt = t;
		t.font = "az_fnt";
		t.horizontalCenter = -211;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "close";
		t.touchEnabled = false;
		t.y = 495;
		return t;
	};
	return SafeViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/PropView/StopPanelViewSkin.exml'] = window.StopPanelViewSkin = (function (_super) {
	__extends(StopPanelViewSkin, _super);
	function StopPanelViewSkin() {
		_super.call(this);
		this.skinParts = ["dayTxt","numTxt","ok","okTxt","rest","chapter"];
		
		this.height = 2300;
		this.width = 1440;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = StopPanelViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.height = 3475;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 200;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this.dayTxt_i(),this.numTxt_i(),this.ok_i(),this._Label2_i(),this.okTxt_i(),this.rest_i(),this.chapter_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 881;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "stop_png";
		t.width = 913;
		t.y = -340;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 120;
		t.text = "第      天";
		t.textAlign = "center";
		t.visible = false;
		t.x = -120;
		t.y = -239.9999999999999;
		return t;
	};
	_proto.dayTxt_i = function () {
		var t = new eui.BitmapLabel();
		this.dayTxt = t;
		t.font = "az_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 3;
		t.scaleY = 3;
		t.text = "day:1";
		t.touchEnabled = false;
		t.y = -241;
		return t;
	};
	_proto.numTxt_i = function () {
		var t = new eui.BitmapLabel();
		this.numTxt = t;
		t.font = "white_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "3";
		t.y = -232.57;
		return t;
	};
	_proto.ok_i = function () {
		var t = new eui.Image();
		this.ok = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ok_png";
		t.x = -20.000000000000057;
		t.y = 344;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 65;
		t.text = "确定";
		t.textColor = 0x133535;
		t.visible = false;
		t.x = 34.99999999999994;
		t.y = 382;
		return t;
	};
	_proto.okTxt_i = function () {
		var t = new eui.BitmapLabel();
		this.okTxt = t;
		t.font = "az_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "ok";
		t.touchEnabled = false;
		t.y = 373;
		return t;
	};
	_proto.rest_i = function () {
		var t = new eui.Image();
		this.rest = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "rest_png";
		t.x = -278.00000000000006;
		t.y = 124.00000000000011;
		return t;
	};
	_proto.chapter_i = function () {
		var t = new eui.Image();
		this.chapter = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chapter_png";
		t.x = 133.99999999999994;
		t.y = 124.00000000000011;
		return t;
	};
	return StopPanelViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/RankView/RankItemSkin.exml'] = window.RankItemSkin = (function (_super) {
	__extends(RankItemSkin, _super);
	function RankItemSkin() {
		_super.call(this);
		this.skinParts = ["mBgk","mRankPic","mIcon","mRank","mNickname","mScore","mPlay","mShare"];
		
		this.height = 230;
		this.width = 900;
		this.elementsContent = [this.mBgk_i(),this.mRankPic_i(),this.mIcon_i(),this.mRank_i(),this.mNickname_i(),this.mScore_i(),this.mPlay_i(),this.mShare_i()];
	}
	var _proto = RankItemSkin.prototype;

	_proto.mBgk_i = function () {
		var t = new eui.Image();
		this.mBgk = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 227;
		t.scale9Grid = new egret.Rectangle(112,73,19,214);
		t.source = "qiand_png";
		t.width = 898;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.mRankPic_i = function () {
		var t = new eui.Image();
		this.mRankPic = t;
		t.source = "rank_gold_png";
		t.x = 48;
		t.y = 47;
		return t;
	};
	_proto.mIcon_i = function () {
		var t = new eui.Image();
		this.mIcon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 123;
		t.width = 123;
		t.x = 279;
		t.y = 52;
		return t;
	};
	_proto.mRank_i = function () {
		var t = new eui.Label();
		this.mRank = t;
		t.anchorOffsetY = 0;
		t.height = 134;
		t.size = 123;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x492907;
		t.verticalAlign = "middle";
		t.width = 218;
		t.x = 30;
		t.y = 44;
		return t;
	};
	_proto.mNickname_i = function () {
		var t = new eui.Label();
		this.mNickname = t;
		t.anchorOffsetX = 0;
		t.height = 100;
		t.size = 50;
		t.text = "玩家名字";
		t.textAlign = "left";
		t.textColor = 0x492907;
		t.verticalAlign = "middle";
		t.width = 454;
		t.x = 425;
		t.y = 31;
		return t;
	};
	_proto.mScore_i = function () {
		var t = new eui.Label();
		this.mScore = t;
		t.anchorOffsetX = 0;
		t.height = 40;
		t.size = 40;
		t.text = "分数:123456";
		t.textAlign = "left";
		t.textColor = 0x492907;
		t.width = 457;
		t.x = 425;
		t.y = 133;
		return t;
	};
	_proto.mPlay_i = function () {
		var t = new eui.Image();
		this.mPlay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "mrplay_png";
		t.x = 276;
		t.y = 135;
		return t;
	};
	_proto.mShare_i = function () {
		var t = new eui.Image();
		this.mShare = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "mrshare_png";
		t.x = 276;
		t.y = 135;
		return t;
	};
	return RankItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/RankView/RankViewSkin.exml'] = window.RankViewSkin = (function (_super) {
	__extends(RankViewSkin, _super);
	var RankViewSkin$Skin6 = 	(function (_super) {
		__extends(RankViewSkin$Skin6, _super);
		function RankViewSkin$Skin6() {
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
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RankViewSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.fillMode = "scale";
			t.percentHeight = 100;
			t.right = 0;
			t.source = "jiantou_png";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RankViewSkin$Skin6;
	})(eui.Skin);

	function RankViewSkin() {
		_super.call(this);
		this.skinParts = ["mCloseBtn","mTittle","mRankRoot","_friendRankLb","mRankBg0","mRankLabel0","mFriendRankBtn","mFriendRoot","_allRankLb","mRankBg1","mRankLabel1","mAllRankBtn","mAllRoot","_backLb","_backBtn","_imgbackLb","mRankPic","mIcon","mRank","mNickname","mScore","mPlay","mShare","myRankG","unRank"];
		
		this.height = 2300;
		this.width = 1440;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = RankViewSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 200;
		t.elementsContent = [this.mCloseBtn_i(),this._Image1_i(),this.mTittle_i(),this._Scroller1_i(),this.mFriendRoot_i(),this.mAllRoot_i(),this._Group1_i(),this.myRankG_i(),this.unRank_i()];
		return t;
	};
	_proto.mCloseBtn_i = function () {
		var t = new eui.Rect();
		this.mCloseBtn = t;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.height = 3103;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1440;
		t.x = -620;
		t.y = -1050;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1730;
		t.source = "stop_png";
		t.width = 1102;
		t.x = -439;
		t.y = -623;
		return t;
	};
	_proto.mTittle_i = function () {
		var t = new eui.Label();
		this.mTittle = t;
		t.size = 73;
		t.text = "排行榜";
		t.textAlign = "center";
		t.textColor = 0x0f353b;
		t.visible = false;
		t.width = 260;
		t.x = -10;
		t.y = -562;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1198.42;
		t.skinName = "CommonScrollerViewSkin";
		t.width = 972;
		t.x = -334;
		t.y = -425;
		t.viewport = this.mRankRoot_i();
		return t;
	};
	_proto.mRankRoot_i = function () {
		var t = new eui.DataGroup();
		this.mRankRoot = t;
		t.percentHeight = 100;
		t.itemRendererSkinName = RankItemSkin;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 17;
		return t;
	};
	_proto.mFriendRoot_i = function () {
		var t = new eui.Group();
		this.mFriendRoot = t;
		t.height = 126;
		t.width = 200;
		t.x = -306;
		t.y = -521;
		t.elementsContent = [this._Image2_i(),this._friendRankLb_i(),this.mRankBg0_i(),this.mRankLabel0_i(),this.mFriendRankBtn_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(106,0,9,131);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "NO_png";
		t.width = 353;
		t.x = 78;
		t.y = -51;
		return t;
	};
	_proto._friendRankLb_i = function () {
		var t = new eui.Label();
		this._friendRankLb = t;
		t.size = 61;
		t.text = "好友排行";
		t.textColor = 0x0f353b;
		t.x = 139;
		t.y = -16;
		return t;
	};
	_proto.mRankBg0_i = function () {
		var t = new eui.Image();
		this.mRankBg0 = t;
		t.scale9Grid = new egret.Rectangle(105,0,5,130);
		t.source = "yes_png";
		t.visible = false;
		t.width = 353;
		t.x = 78;
		t.y = -51;
		return t;
	};
	_proto.mRankLabel0_i = function () {
		var t = new eui.Label();
		this.mRankLabel0 = t;
		t.size = 61;
		t.text = "好友排行";
		t.textColor = 0x470000;
		t.visible = false;
		t.x = 139;
		t.y = -16;
		return t;
	};
	_proto.mFriendRankBtn_i = function () {
		var t = new eui.Rect();
		this.mFriendRankBtn = t;
		t.fillAlpha = 0;
		t.height = 128;
		t.width = 342;
		t.x = 83;
		t.y = -42;
		return t;
	};
	_proto.mAllRoot_i = function () {
		var t = new eui.Group();
		this.mAllRoot = t;
		t.anchorOffsetX = 0;
		t.x = 128.31;
		t.y = -574.04;
		t.elementsContent = [this._Image3_i(),this._allRankLb_i(),this.mRankBg1_i(),this.mRankLabel1_i(),this.mAllRankBtn_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(106,0,9,131);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "NO_png";
		t.width = 353;
		t.x = 11.32;
		t.y = 0.51;
		return t;
	};
	_proto._allRankLb_i = function () {
		var t = new eui.Label();
		this._allRankLb = t;
		t.size = 61;
		t.text = "全国排行";
		t.textColor = 0x0F353B;
		t.x = 72.32;
		t.y = 35.51;
		return t;
	};
	_proto.mRankBg1_i = function () {
		var t = new eui.Image();
		this.mRankBg1 = t;
		t.scale9Grid = new egret.Rectangle(105,0,5,130);
		t.source = "yes_png";
		t.width = 353;
		t.x = 11.32;
		t.y = 0.51;
		return t;
	};
	_proto.mRankLabel1_i = function () {
		var t = new eui.Label();
		this.mRankLabel1 = t;
		t.size = 61;
		t.text = "全国排行";
		t.textColor = 0x470000;
		t.x = 72.32;
		t.y = 35.51;
		return t;
	};
	_proto.mAllRankBtn_i = function () {
		var t = new eui.Rect();
		this.mAllRankBtn = t;
		t.fillAlpha = 0;
		t.height = 128;
		t.width = 342;
		t.x = 16.32;
		t.y = 9.51;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 459;
		t.y = 1124;
		t.elementsContent = [this._backLb_i(),this._backBtn_i(),this._imgbackLb_i()];
		return t;
	};
	_proto._backLb_i = function () {
		var t = new eui.Label();
		this._backLb = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 70;
		t.stroke = 3;
		t.strokeColor = 0x0F353B;
		t.text = "返回";
		t.visible = false;
		t.x = 0;
		t.y = 10.67;
		return t;
	};
	_proto._backBtn_i = function () {
		var t = new eui.Button();
		this._backBtn = t;
		t.anchorOffsetX = 0;
		t.height = 92;
		t.label = "";
		t.width = 239.7;
		t.x = -8.16;
		t.y = 3.73;
		t.skinName = RankViewSkin$Skin6;
		return t;
	};
	_proto._imgbackLb_i = function () {
		var t = new eui.Image();
		this._imgbackLb = t;
		t.anchorOffsetY = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "Back2_png";
		t.x = -62;
		t.y = 2;
		return t;
	};
	_proto.myRankG_i = function () {
		var t = new eui.Group();
		this.myRankG = t;
		t.x = -331;
		t.y = 804;
		t.elementsContent = [this._Image4_i(),this.mRankPic_i(),this.mIcon_i(),this.mRank_i(),this.mNickname_i(),this.mScore_i(),this.mPlay_i(),this.mShare_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 227;
		t.scale9Grid = new egret.Rectangle(112,73,19,214);
		t.source = "qiand1_png";
		t.width = 898;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.mRankPic_i = function () {
		var t = new eui.Image();
		this.mRankPic = t;
		t.source = "rank_gold_png";
		t.x = 48;
		t.y = 47;
		return t;
	};
	_proto.mIcon_i = function () {
		var t = new eui.Image();
		this.mIcon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 123;
		t.width = 123;
		t.x = 270;
		t.y = 52;
		return t;
	};
	_proto.mRank_i = function () {
		var t = new eui.Label();
		this.mRank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 123;
		t.size = 123;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x492907;
		t.width = 224;
		t.x = 22;
		t.y = 52;
		return t;
	};
	_proto.mNickname_i = function () {
		var t = new eui.Label();
		this.mNickname = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.blendMode = "normal";
		t.height = 100;
		t.size = 50;
		t.text = "玩家名字 ";
		t.textAlign = "left";
		t.textColor = 0x492907;
		t.verticalAlign = "middle";
		t.width = 454.55;
		t.x = 431;
		t.y = 31;
		return t;
	};
	_proto.mScore_i = function () {
		var t = new eui.Label();
		this.mScore = t;
		t.anchorOffsetX = 0;
		t.height = 40;
		t.size = 40;
		t.text = "分数:123456";
		t.textAlign = "left";
		t.textColor = 0x492907;
		t.verticalAlign = "bottom";
		t.width = 457;
		t.x = 431;
		t.y = 132.68;
		return t;
	};
	_proto.mPlay_i = function () {
		var t = new eui.Image();
		this.mPlay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "mrplay_png";
		t.visible = false;
		t.x = 269;
		t.y = 138;
		return t;
	};
	_proto.mShare_i = function () {
		var t = new eui.Image();
		this.mShare = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "mrshare_png";
		t.x = 269;
		t.y = 138;
		return t;
	};
	_proto.unRank_i = function () {
		var t = new eui.Group();
		this.unRank = t;
		t.visible = false;
		t.x = -331.64;
		t.y = 804.87;
		t.elementsContent = [this._Image5_i(),this._Label1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 227;
		t.scale9Grid = new egret.Rectangle(112,73,19,214);
		t.source = "qiand1_png";
		t.width = 898;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 168.45;
		t.size = 71;
		t.text = "No Rank";
		t.textAlign = "center";
		t.textColor = 0x492907;
		t.verticalAlign = "middle";
		t.width = 841.61;
		t.x = 26.09;
		t.y = 31;
		return t;
	};
	return RankViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/SettingView/SettingViewSkin.exml'] = window.SettingViewSkin = (function (_super) {
	__extends(SettingViewSkin, _super);
	var SettingViewSkin$Skin7 = 	(function (_super) {
		__extends(SettingViewSkin$Skin7, _super);
		function SettingViewSkin$Skin7() {
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
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SettingViewSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.fillMode = "scale";
			t.percentHeight = 100;
			t.right = 0;
			t.source = "jiantou_png";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SettingViewSkin$Skin7;
	})(eui.Skin);

	function SettingViewSkin() {
		_super.call(this);
		this.skinParts = ["txt1","sider","imgClose1","imgClose2","txt2","txt3","_cdkGp","_backLb","_backGp","mMusicBtn","txt4","mMusicCheck","_soundBtn","_soundLb","_soundCheckImg"];
		
		this.height = 2300;
		this.width = 1440;
		this.elementsContent = [this._Rect1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i()];
	}
	var _proto = SettingViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.height = 3143;
		t.width = 1440;
		t.x = 0;
		t.y = -76;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 200;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.txt1_i(),this.sider_i(),this.imgClose1_i(),this.imgClose2_i(),this._cdkGp_i(),this._backGp_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 984;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "stop_png";
		t.width = 959;
		t.x = -379.00000000000006;
		t.y = -522;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "Set_png";
		t.x = 9;
		t.y = -408;
		return t;
	};
	_proto.txt1_i = function () {
		var t = new eui.Label();
		this.txt1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 80;
		t.text = "设置";
		t.textColor = 0x133535;
		t.visible = false;
		t.x = 20;
		t.y = -426.8;
		return t;
	};
	_proto.sider_i = function () {
		var t = new eui.HSlider();
		this.sider = t;
		t.height = 88;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 515;
		t.x = -40.00000000000006;
		t.y = 56.000000000000114;
		return t;
	};
	_proto.imgClose1_i = function () {
		var t = new eui.Image();
		this.imgClose1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ok_png";
		t.visible = false;
		t.x = -19.5;
		t.y = 566;
		return t;
	};
	_proto.imgClose2_i = function () {
		var t = new eui.Label();
		this.imgClose2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 60;
		t.text = "确定";
		t.textColor = 0x133535;
		t.visible = false;
		t.x = 39.99999999999994;
		t.y = 608.5;
		return t;
	};
	_proto._cdkGp_i = function () {
		var t = new eui.Group();
		this._cdkGp = t;
		t.visible = false;
		t.x = -271;
		t.y = -236.85;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._EditableText1_i(),this.txt2_i(),this.txt3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "NO_png";
		t.x = 596;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shezhi4_png";
		t.x = 230.6;
		t.y = 13.05;
		return t;
	};
	_proto._EditableText1_i = function () {
		var t = new eui.EditableText();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.prompt = "请输入兑换码...";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "";
		t.textColor = 0x2d2a27;
		t.verticalAlign = "middle";
		t.width = 292;
		t.x = 251.5;
		t.y = 25.85;
		return t;
	};
	_proto.txt2_i = function () {
		var t = new eui.Label();
		this.txt2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "兑换";
		t.textColor = 0x133535;
		t.x = 624.75;
		t.y = 20.85;
		return t;
	};
	_proto.txt3_i = function () {
		var t = new eui.Label();
		this.txt3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 60;
		t.stroke = 3;
		t.text = "兑换码";
		t.textColor = 0xefba7f;
		t.x = 0;
		t.y = 17.65;
		return t;
	};
	_proto._backGp_i = function () {
		var t = new eui.Group();
		this._backGp = t;
		t.x = 340.21;
		t.y = 506.06;
		t.elementsContent = [this._backLb_i(),this._Button1_i(),this._Image5_i()];
		return t;
	};
	_proto._backLb_i = function () {
		var t = new eui.Label();
		this._backLb = t;
		t.fontFamily = "SimSun";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 70;
		t.stroke = 3;
		t.strokeColor = 0x0F353B;
		t.text = "Back";
		t.visible = false;
		t.x = 0;
		t.y = 10.67;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.height = 92;
		t.label = "";
		t.width = 351.7;
		t.x = -120.16;
		t.y = 3.73;
		t.skinName = SettingViewSkin$Skin7;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "Back2_png";
		t.x = -66.21;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 483;
		t.y = 882;
		t.elementsContent = [this.mMusicBtn_i(),this.txt4_i(),this.mMusicCheck_i(),this._Image6_i()];
		return t;
	};
	_proto.mMusicBtn_i = function () {
		var t = new eui.Image();
		this.mMusicBtn = t;
		t.height = 148;
		t.source = "qiand1_png";
		t.width = 148;
		t.x = 270;
		t.y = 14;
		return t;
	};
	_proto.txt4_i = function () {
		var t = new eui.Label();
		this.txt4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 60;
		t.stroke = 3;
		t.text = "音乐";
		t.textColor = 0xe06f77;
		t.visible = false;
		t.x = 0;
		t.y = 62;
		return t;
	};
	_proto.mMusicCheck_i = function () {
		var t = new eui.Image();
		this.mMusicCheck = t;
		t.source = "gou_png";
		t.touchEnabled = false;
		t.x = 268;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "Music_png";
		t.touchEnabled = false;
		t.x = 4;
		t.y = 57;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 483;
		t.y = 1104;
		t.elementsContent = [this._soundBtn_i(),this._soundLb_i(),this._soundCheckImg_i(),this._Image7_i()];
		return t;
	};
	_proto._soundBtn_i = function () {
		var t = new eui.Image();
		this._soundBtn = t;
		t.height = 148;
		t.source = "qiand1_png";
		t.width = 148;
		t.x = 270;
		t.y = 14;
		return t;
	};
	_proto._soundLb_i = function () {
		var t = new eui.Label();
		this._soundLb = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 60;
		t.stroke = 3;
		t.text = "音效";
		t.textColor = 0xE06F77;
		t.visible = false;
		t.x = 0;
		t.y = 62;
		return t;
	};
	_proto._soundCheckImg_i = function () {
		var t = new eui.Image();
		this._soundCheckImg = t;
		t.source = "gou_png";
		t.touchEnabled = false;
		t.x = 268;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "Sound_png";
		t.touchEnabled = false;
		t.x = -2;
		t.y = 54;
		return t;
	};
	return SettingViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/ShopView/ShopBtnItemSkin.exml'] = window.ShopBtnItemSkin = (function (_super) {
	__extends(ShopBtnItemSkin, _super);
	function ShopBtnItemSkin() {
		_super.call(this);
		this.skinParts = ["nameTxt","propImg","propNumx","_coinImg","goldTxtx","propNum","goldTxt"];
		
		this.height = 126;
		this.width = 703;
		this.elementsContent = [this._Image1_i(),this.nameTxt_i(),this.propImg_i(),this.propNumx_i(),this._coinImg_i(),this.goldTxtx_i(),this._Rect1_i(),this.propNum_i(),this.goldTxt_i()];
	}
	var _proto = ShopBtnItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 126;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shezhi4_png";
		t.width = 703;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nameTxt_i = function () {
		var t = new eui.Label();
		this.nameTxt = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "魔法棒";
		t.textColor = 0x492907;
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 41;
		return t;
	};
	_proto.propImg_i = function () {
		var t = new eui.Image();
		this.propImg = t;
		t.height = 83;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "til-icon_png";
		t.width = 71;
		t.x = 70;
		t.y = 25;
		return t;
	};
	_proto.propNumx_i = function () {
		var t = new eui.Label();
		this.propNumx = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "X 30个";
		t.textColor = 0x492907;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 250;
		t.x = 156;
		return t;
	};
	_proto._coinImg_i = function () {
		var t = new eui.Image();
		this._coinImg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jinb-icon_png";
		t.x = 416;
		t.y = 30;
		return t;
	};
	_proto.goldTxtx_i = function () {
		var t = new eui.Label();
		this.goldTxtx = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "X5";
		t.textColor = 0x492907;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 175;
		t.x = 506;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.propNum_i = function () {
		var t = new eui.BitmapLabel();
		this.propNum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "az_fnt";
		t.height = 33;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "x30";
		t.width = 118;
		t.x = 156;
		t.y = 39;
		return t;
	};
	_proto.goldTxt_i = function () {
		var t = new eui.BitmapLabel();
		this.goldTxt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "az_fnt";
		t.height = 33;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "x5";
		t.width = 118;
		t.x = 504;
		t.y = 39;
		return t;
	};
	return ShopBtnItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/ShopView/ShopViewSkin.exml'] = window.ShopViewSkin = (function (_super) {
	__extends(ShopViewSkin, _super);
	var ShopViewSkin$Skin8 = 	(function (_super) {
		__extends(ShopViewSkin$Skin8, _super);
		function ShopViewSkin$Skin8() {
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
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopViewSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.fillMode = "scale";
			t.percentHeight = 100;
			t.right = 0;
			t.source = "jiantou_png";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShopViewSkin$Skin8;
	})(eui.Skin);

	function ShopViewSkin() {
		_super.call(this);
		this.skinParts = ["txt1","imgClose1","imgClose2","mVedioBtn","_coinImg","mVidioLabel1","mVidioLabel2","vidioRoot","mShareBtn","mShareLabel1","_coinImg0","mShareLabel2","shareRoot","propGroup","_backLb","_backGp"];
		
		this.height = 2300;
		this.width = 1440;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = ShopViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -910;
		t.fillAlpha = 0.5;
		t.height = 2600;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 1440;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 200;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.txt1_i(),this.imgClose1_i(),this.imgClose2_i(),this.vidioRoot_i(),this.shareRoot_i(),this.propGroup_i(),this._backGp_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 880;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "stop_png";
		t.width = 959;
		t.x = -379.00000000000006;
		t.y = -422;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "Shop_png";
		t.x = -24;
		t.y = -323;
		return t;
	};
	_proto.txt1_i = function () {
		var t = new eui.Label();
		this.txt1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 90;
		t.stroke = 3;
		t.strokeColor = 0x0f353b;
		t.text = "商店";
		t.textColor = 0xffffff;
		t.visible = false;
		t.x = 9.999999999999943;
		t.y = -341.95;
		return t;
	};
	_proto.imgClose1_i = function () {
		var t = new eui.Image();
		this.imgClose1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ok_png";
		t.visible = false;
		t.x = -19.5;
		t.y = 594;
		return t;
	};
	_proto.imgClose2_i = function () {
		var t = new eui.Label();
		this.imgClose2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 60;
		t.text = "确定";
		t.textColor = 0x0f353b;
		t.visible = false;
		t.x = 39.99999999999994;
		t.y = 636.5;
		return t;
	};
	_proto.vidioRoot_i = function () {
		var t = new eui.Group();
		this.vidioRoot = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 104;
		t.visible = false;
		t.width = 100;
		t.x = -287;
		t.y = -251;
		t.elementsContent = [this.mVedioBtn_i(),this._coinImg_i(),this.mVidioLabel1_i(),this.mVidioLabel2_i(),this._Image3_i()];
		return t;
	};
	_proto.mVedioBtn_i = function () {
		var t = new eui.Image();
		this.mVedioBtn = t;
		t.height = 126;
		t.source = "shezhi4_png";
		t.width = 703;
		t.x = 40;
		t.y = 32;
		return t;
	};
	_proto._coinImg_i = function () {
		var t = new eui.Image();
		this._coinImg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jinb-icon_png";
		t.x = 85.7;
		t.y = 60;
		return t;
	};
	_proto.mVidioLabel1_i = function () {
		var t = new eui.Label();
		this.mVidioLabel1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "X50";
		t.textColor = 0x492907;
		t.touchEnabled = false;
		t.x = 168;
		t.y = 70;
		return t;
	};
	_proto.mVidioLabel2_i = function () {
		var t = new eui.Label();
		this.mVidioLabel2 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "视频";
		t.textAlign = "center";
		t.textColor = 0x492907;
		t.touchEnabled = false;
		t.width = 162;
		t.x = 561;
		t.y = 70;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bofang_png";
		t.touchEnabled = false;
		t.x = 456;
		t.y = 45;
		return t;
	};
	_proto.shareRoot_i = function () {
		var t = new eui.Group();
		this.shareRoot = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.visible = false;
		t.x = -287;
		t.y = 123.36;
		t.elementsContent = [this.mShareBtn_i(),this.mShareLabel1_i(),this._coinImg0_i(),this.mShareLabel2_i(),this._Image4_i()];
		return t;
	};
	_proto.mShareBtn_i = function () {
		var t = new eui.Image();
		this.mShareBtn = t;
		t.height = 126;
		t.source = "shezhi4_png";
		t.width = 703;
		t.x = 40;
		t.y = 20;
		return t;
	};
	_proto.mShareLabel1_i = function () {
		var t = new eui.Label();
		this.mShareLabel1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "X2";
		t.textColor = 0x492907;
		t.touchEnabled = false;
		t.x = 184;
		t.y = 58;
		return t;
	};
	_proto._coinImg0_i = function () {
		var t = new eui.Image();
		this._coinImg0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "til-icon_png";
		t.x = 101.7;
		t.y = 41.94;
		return t;
	};
	_proto.mShareLabel2_i = function () {
		var t = new eui.Label();
		this.mShareLabel2 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "分享(5/5)";
		t.textAlign = "center";
		t.textColor = 0x492907;
		t.touchEnabled = false;
		t.width = 262;
		t.x = 475.12;
		t.y = 58;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "fenxiang_png";
		t.touchEnabled = false;
		t.x = 377.21;
		t.y = 33;
		return t;
	};
	_proto.propGroup_i = function () {
		var t = new eui.DataGroup();
		this.propGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 296.03;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 936.36;
		t.x = -368.0000000000001;
		t.y = -181.24;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 29;
		t.horizontalAlign = "center";
		return t;
	};
	_proto._backGp_i = function () {
		var t = new eui.Group();
		this._backGp = t;
		t.x = 340.21;
		t.y = 506.06;
		t.elementsContent = [this._backLb_i(),this._Button1_i(),this._Image5_i()];
		return t;
	};
	_proto._backLb_i = function () {
		var t = new eui.Label();
		this._backLb = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 70;
		t.stroke = 3;
		t.strokeColor = 0x0F353B;
		t.text = "返回";
		t.visible = false;
		t.x = 0;
		t.y = 10.67;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.height = 92;
		t.label = "";
		t.width = 310.91;
		t.x = -79.37;
		t.y = 3.73;
		t.skinName = ShopViewSkin$Skin8;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "Back2_png";
		t.x = -66;
		t.y = 0;
		return t;
	};
	return ShopViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/SignView/SignBtnItemSkin.exml'] = window.SignBtnItemSkin = (function (_super) {
	__extends(SignBtnItemSkin, _super);
	function SignBtnItemSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","daysTxt1","daysTxt","propImg1","propNum1x","propNum1","propGroup1","propImg2","propNum2x","propImg3","propNum3x","propNum2","propNum3","propGroup2","signTxtx","signTxt","zhezhao","gou"];
		
		this.height = 308;
		this.width = 214;
		this.elementsContent = [this.bgImg_i(),this.daysTxt1_i(),this.daysTxt_i(),this.propGroup1_i(),this.propGroup2_i(),this.signTxtx_i(),this.signTxt_i(),this.zhezhao_i(),this.gou_i()];
	}
	var _proto = SignBtnItemSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 308;
		t.horizontalCenter = 0;
		t.source = "qiand_png";
		t.verticalCenter = 0;
		t.width = 214;
		return t;
	};
	_proto.daysTxt1_i = function () {
		var t = new eui.Label();
		this.daysTxt1 = t;
		t.height = 53;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "第一天";
		t.textColor = 0x492907;
		t.visible = false;
		t.y = 53;
		return t;
	};
	_proto.daysTxt_i = function () {
		var t = new eui.BitmapLabel();
		this.daysTxt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "az_fnt";
		t.height = 45;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.text = "Day 1";
		t.width = 119;
		t.x = 34.5;
		t.y = 37;
		return t;
	};
	_proto.propGroup1_i = function () {
		var t = new eui.Group();
		this.propGroup1 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 33.5;
		t.visible = false;
		t.elementsContent = [this.propImg1_i(),this.propNum1x_i(),this.propNum1_i()];
		return t;
	};
	_proto.propImg1_i = function () {
		var t = new eui.Image();
		this.propImg1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 71;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "til-icon_png";
		t.width = 52;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.propNum1x_i = function () {
		var t = new eui.Label();
		this.propNum1x = t;
		t.size = 40;
		t.text = "X2";
		t.textColor = 0x492907;
		t.verticalCenter = 1;
		t.visible = false;
		t.x = 50.33;
		return t;
	};
	_proto.propNum1_i = function () {
		var t = new eui.BitmapLabel();
		this.propNum1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "az_fnt";
		t.height = 35;
		t.text = "x2";
		t.x = 50.33;
		t.y = 12;
		return t;
	};
	_proto.propGroup2_i = function () {
		var t = new eui.Group();
		this.propGroup2 = t;
		t.horizontalCenter = 0;
		t.top = 123;
		t.visible = false;
		t.elementsContent = [this.propImg2_i(),this.propNum2x_i(),this.propImg3_i(),this.propNum3x_i(),this.propNum2_i(),this.propNum3_i()];
		return t;
	};
	_proto.propImg2_i = function () {
		var t = new eui.Image();
		this.propImg2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 71;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "til-icon_png";
		t.width = 52;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.propNum2x_i = function () {
		var t = new eui.Label();
		this.propNum2x = t;
		t.size = 40;
		t.text = "X2";
		t.textColor = 0x492907;
		t.visible = false;
		t.x = 50.33;
		t.y = 8;
		return t;
	};
	_proto.propImg3_i = function () {
		var t = new eui.Image();
		this.propImg3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 71;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "til-icon_png";
		t.width = 52;
		t.x = 0;
		t.y = 70;
		return t;
	};
	_proto.propNum3x_i = function () {
		var t = new eui.Label();
		this.propNum3x = t;
		t.size = 40;
		t.text = "X2";
		t.textColor = 0x492907;
		t.visible = false;
		t.x = 50.33;
		t.y = 78;
		return t;
	};
	_proto.propNum2_i = function () {
		var t = new eui.BitmapLabel();
		this.propNum2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "az_fnt";
		t.height = 45;
		t.text = "x2";
		t.x = 56.5;
		t.y = 9;
		return t;
	};
	_proto.propNum3_i = function () {
		var t = new eui.BitmapLabel();
		this.propNum3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "az_fnt";
		t.height = 45;
		t.text = "x2";
		t.x = 56.5;
		t.y = 79;
		return t;
	};
	_proto.signTxtx_i = function () {
		var t = new eui.Label();
		this.signTxtx = t;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "未签到";
		t.textColor = 0x492907;
		t.visible = false;
		t.y = 239;
		return t;
	};
	_proto.signTxt_i = function () {
		var t = new eui.BitmapLabel();
		this.signTxt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "az_fnt";
		t.height = 45;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "   Sign in";
		t.visible = false;
		t.width = 224;
		t.x = 32.5;
		t.y = 251;
		return t;
	};
	_proto.zhezhao_i = function () {
		var t = new eui.Image();
		this.zhezhao = t;
		t.height = 308;
		t.horizontalCenter = 0;
		t.source = "mianbzz_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 214;
		return t;
	};
	_proto.gou_i = function () {
		var t = new eui.Image();
		this.gou = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 125;
		t.horizontalCenter = 0;
		t.source = "gou_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 128.33;
		return t;
	};
	return SignBtnItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/SignView/SignViewSkin.exml'] = window.SignViewSkin = (function (_super) {
	__extends(SignViewSkin, _super);
	var SignViewSkin$Skin9 = 	(function (_super) {
		__extends(SignViewSkin$Skin9, _super);
		function SignViewSkin$Skin9() {
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
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SignViewSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.fillMode = "scale";
			t.percentHeight = 100;
			t.right = 0;
			t.source = "jiantou_png";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SignViewSkin$Skin9;
	})(eui.Skin);

	function SignViewSkin() {
		_super.call(this);
		this.skinParts = ["mMask","signTxt","mTips","signGroup","okTxt0","okBtn","okTxt","mGou","mDoubleBtn","doubleTxt","_adsReceiveGp","_backLb","_imgbackBtn","_backBtn","_receiveLb","_imgreceiveLb1","_imgreceiveLb"];
		
		this.height = 2300;
		this.width = 1440;
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = SignViewSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1080;
		t.elementsContent = [this.mMask_i(),this._Image1_i(),this._Image2_i(),this.signTxt_i(),this.mTips_i(),this.signGroup_i(),this._Image3_i(),this.okTxt0_i(),this._Group1_i(),this._adsReceiveGp_i(),this._Group2_i(),this._receiveLb_i(),this._imgreceiveLb1_i(),this._imgreceiveLb_i()];
		return t;
	};
	_proto.mMask_i = function () {
		var t = new eui.Rect();
		this.mMask = t;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.height = 2990.67;
		t.horizontalCenter = 0;
		t.verticalCenter = 313.5;
		t.width = 1440;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 976;
		t.horizontalCenter = 0;
		t.source = "stop_png";
		t.width = 951.82;
		t.y = 346;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "Sign_png";
		t.y = 417;
		return t;
	};
	_proto.signTxt_i = function () {
		var t = new eui.Label();
		this.signTxt = t;
		t.height = 111;
		t.horizontalCenter = 0;
		t.size = 73;
		t.text = "签到";
		t.textColor = 0x0f353b;
		t.visible = false;
		t.y = 408;
		return t;
	};
	_proto.mTips_i = function () {
		var t = new eui.Label();
		this.mTips = t;
		t.horizontalCenter = 0;
		t.size = 52;
		t.text = "今日已签到";
		t.textColor = 0x0F353B;
		t.visible = false;
		t.y = 1230;
		return t;
	};
	_proto.signGroup_i = function () {
		var t = new eui.DataGroup();
		this.signGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 672;
		t.width = 938;
		t.x = 68;
		t.y = 542;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 14;
		t.paddingLeft = 21;
		t.verticalGap = 47;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "bofang_png";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 372;
		t.y = 1444;
		return t;
	};
	_proto.okTxt0_i = function () {
		var t = new eui.Label();
		this.okTxt0 = t;
		t.horizontalCenter = 0;
		t.size = 61;
		t.text = "确定";
		t.textColor = 0x0F353B;
		t.touchEnabled = false;
		t.visible = false;
		t.y = 1466;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 128;
		t.y = 1417.21;
		t.elementsContent = [this.okBtn_i(),this.okTxt_i(),this._Image4_i(),this.mGou_i(),this.mDoubleBtn_i()];
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Image();
		this.okBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 165;
		t.source = "btn_png";
		t.width = 847.26;
		t.x = 0;
		t.y = 14.79;
		return t;
	};
	_proto.okTxt_i = function () {
		var t = new eui.Label();
		this.okTxt = t;
		t.anchorOffsetX = 0;
		t.size = 58;
		t.text = "观看视频获得双倍奖励";
		t.textAlign = "center";
		t.textColor = 0x0f353b;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 624;
		t.x = 184;
		t.y = 68.79;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 112;
		t.source = "qiand1_png";
		t.width = 112;
		t.x = 61.51;
		t.y = 39;
		return t;
	};
	_proto.mGou_i = function () {
		var t = new eui.Image();
		this.mGou = t;
		t.source = "gou_png";
		t.x = 61.51;
		t.y = 0;
		return t;
	};
	_proto.mDoubleBtn_i = function () {
		var t = new eui.Rect();
		this.mDoubleBtn = t;
		t.fillAlpha = 0;
		t.height = 116;
		t.width = 121;
		t.x = 58;
		t.y = 37.79;
		return t;
	};
	_proto._adsReceiveGp_i = function () {
		var t = new eui.Group();
		this._adsReceiveGp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 185;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 491;
		t.y = 1386.71;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this.doubleTxt_i(),this._Image7_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.source = "btn_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 14.79;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "Double_png";
		t.x = 220;
		t.y = 79.79;
		return t;
	};
	_proto.doubleTxt_i = function () {
		var t = new eui.Label();
		this.doubleTxt = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 66;
		t.text = "多倍领取";
		t.textAlign = "center";
		t.textColor = 0x0F353B;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 13.5;
		t.visible = false;
		t.x = 185.5;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "JieMian1_json.btn_shipin_png";
		t.verticalCenter = 10;
		t.x = 81.51;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.touchChildren = true;
		t.touchEnabled = true;
		t.x = 819;
		t.y = 1648.27;
		t.elementsContent = [this._backLb_i(),this._imgbackBtn_i(),this._backBtn_i()];
		return t;
	};
	_proto._backLb_i = function () {
		var t = new eui.Label();
		this._backLb = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 70;
		t.stroke = 3;
		t.strokeColor = 0x0F353B;
		t.text = "返回";
		t.visible = false;
		t.x = 0;
		t.y = 10.67;
		return t;
	};
	_proto._imgbackBtn_i = function () {
		var t = new eui.Image();
		this._imgbackBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "Back2_png";
		t.x = -69;
		t.y = 2;
		return t;
	};
	_proto._backBtn_i = function () {
		var t = new eui.Button();
		this._backBtn = t;
		t.anchorOffsetX = 0;
		t.height = 92;
		t.label = "";
		t.width = 305.03;
		t.x = -73.49;
		t.y = 3.73;
		t.skinName = SignViewSkin$Skin9;
		return t;
	};
	_proto._receiveLb_i = function () {
		var t = new eui.Label();
		this._receiveLb = t;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 70;
		t.stroke = 3;
		t.strokeColor = 0x0f353b;
		t.text = "领取";
		t.textColor = 0xffffff;
		t.visible = false;
		t.x = 490;
		t.y = 1614;
		return t;
	};
	_proto._imgreceiveLb1_i = function () {
		var t = new eui.Image();
		this._imgreceiveLb1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "Get_png";
		t.visible = false;
		t.x = 500;
		t.y = 1619;
		return t;
	};
	_proto._imgreceiveLb_i = function () {
		var t = new eui.Group();
		this._imgreceiveLb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 185;
		t.horizontalCenter = 0;
		t.width = 491;
		t.y = 1358.71;
		t.elementsContent = [this._Image8_i(),this._BitmapLabel1_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.source = "btn_png";
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 14.79;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "az_fnt";
		t.height = 36.8;
		t.scaleX = 2.5;
		t.scaleY = 2.5;
		t.text = "Get";
		t.touchEnabled = false;
		t.width = 81.4;
		t.x = 143.75;
		t.y = 56.29;
		return t;
	};
	return SignViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/StartGameView/BgViewSkin.exml'] = window.BgViewSkin = (function (_super) {
	__extends(BgViewSkin, _super);
	function BgViewSkin() {
		_super.call(this);
		this.skinParts = ["zhuaGroup","_buttomImg","daysTxt","imgLevel","numTxt","jiaoyin","box","_bottomGp","anitGroup"];
		
		this.height = 2300;
		this.width = 1440;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = BgViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 200;
		t.elementsContent = [this._Rect1_i(),this.zhuaGroup_i(),this._Image1_i(),this._buttomImg_i(),this.daysTxt_i(),this.imgLevel_i(),this.numTxt_i(),this._bottomGp_i(),this.anitGroup_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xeeffff;
		t.height = 4500;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1873;
		return t;
	};
	_proto.zhuaGroup_i = function () {
		var t = new eui.DataGroup();
		this.zhuaGroup = t;
		t.height = 1920;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1080;
		t.x = -440.00000000000006;
		t.y = -860;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 329;
		t.scale9Grid = new egret.Rectangle(0,10,1440,15);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jiemianup_png";
		t.x = -620.0000000000001;
		t.y = -1120;
		return t;
	};
	_proto._buttomImg_i = function () {
		var t = new eui.Image();
		this._buttomImg = t;
		t.anchorOffsetY = 0;
		t.height = 1503.33;
		t.scale9Grid = new egret.Rectangle(80,13,480,79);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "diban_png";
		t.width = 1440;
		t.x = -620.0000000000001;
		t.y = 823;
		return t;
	};
	_proto.daysTxt_i = function () {
		var t = new eui.Label();
		this.daysTxt = t;
		t.fontFamily = "W12";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 130;
		t.text = "第      天";
		t.visible = false;
		t.x = -127;
		t.y = 35.000000000000114;
		return t;
	};
	_proto.imgLevel_i = function () {
		var t = new eui.Image();
		this.imgLevel = t;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(0,10,1440,15);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Level_png";
		t.visible = false;
		t.x = -119;
		t.y = -26;
		return t;
	};
	_proto.numTxt_i = function () {
		var t = new eui.BitmapLabel();
		this.numTxt = t;
		t.font = "white_fnt";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "2";
		t.visible = false;
		t.x = 251;
		t.y = -25;
		return t;
	};
	_proto._bottomGp_i = function () {
		var t = new eui.Group();
		this._bottomGp = t;
		t.x = 190;
		t.y = 709;
		t.elementsContent = [this.jiaoyin_i(),this.box_i()];
		return t;
	};
	_proto.jiaoyin_i = function () {
		var t = new eui.Image();
		this.jiaoyin = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jiaoyin2_png";
		t.visible = false;
		t.x = 0;
		t.y = 193;
		return t;
	};
	_proto.box_i = function () {
		var t = new eui.Image();
		this.box = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "zixiang_png";
		t.visible = false;
		t.x = 93;
		t.y = 0;
		return t;
	};
	_proto.anitGroup_i = function () {
		var t = new eui.DataGroup();
		this.anitGroup = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 400.39000000000004;
		t.y = 631.8400000000001;
		return t;
	};
	return BgViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/StartGameView/GameOverViewSkin.exml'] = window.GameOverViewSkin = (function (_super) {
	__extends(GameOverViewSkin, _super);
	function GameOverViewSkin() {
		_super.call(this);
		this.skinParts = ["chengjiu","chengjiu0","chapter","_helpImg","new","rest","overTxt","Txt","helpBtn","mCloseBtn","mCloseBtn2","_share","_tishi1Img","_tishi1Lb","mMFTxt1","_ads1Gp","_tishi1Gp","_tishi2Img","_tishi2Lb","_tishi3Img","mMFTxt2","_ads2Gp","_tishi2Gp","_tishi3Lb","mMFTxt3","_ads3Gp","_tishi3Gp","_okImg","imgClose","_tiShiWdGp"];
		
		this.height = 2300;
		this.width = 1440;
		this.elementsContent = [this._Rect1_i(),this._Group1_i(),this._tiShiWdGp_i(),this._Image6_i()];
	}
	var _proto = GameOverViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.height = 3350;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = -160;
		t.width = 200;
		t.elementsContent = [this._Image1_i(),this.chengjiu_i(),this.chengjiu0_i(),this.chapter_i(),this._helpImg_i(),this.new_i(),this.rest_i(),this._Label1_i(),this.overTxt_i(),this._Label2_i(),this.Txt_i(),this.helpBtn_i(),this.mCloseBtn_i(),this.mCloseBtn2_i(),this._share_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1136;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shoujikuang_png";
		t.width = 906;
		t.x = -353.00000000000006;
		t.y = -538.36;
		return t;
	};
	_proto.chengjiu_i = function () {
		var t = new eui.Image();
		this.chengjiu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 434;
		t.horizontalCenter = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "chengjiu1_png";
		t.width = 370;
		t.x = -397.00000000000006;
		t.y = -516.5;
		return t;
	};
	_proto.chengjiu0_i = function () {
		var t = new eui.Image();
		this.chengjiu0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "levelfailure_png";
		t.x = -387.00000000000006;
		t.y = -659.5;
		return t;
	};
	_proto.chapter_i = function () {
		var t = new eui.Image();
		this.chapter = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chapter_png";
		t.visible = false;
		t.x = 154;
		t.y = 701;
		return t;
	};
	_proto._helpImg_i = function () {
		var t = new eui.Image();
		this._helpImg = t;
		t.height = 139;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cat_qzhy_png";
		t.visible = false;
		t.width = 334;
		t.x = 154;
		t.y = 630;
		t.visible = false;
		return t;
	};
	_proto.new_i = function () {
		var t = new eui.Image();
		this.new = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "new2_png";
		t.x = 321.0299999999999;
		t.y = -478.41999999999996;
		return t;
	};
	_proto.rest_i = function () {
		var t = new eui.Image();
		this.rest = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "rest_png";
		t.x = -332.00000000000006;
		t.y = 629;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 70;
		t.text = "关卡失败";
		t.visible = false;
		t.x = -40.00000000000006;
		t.y = -618.09;
		return t;
	};
	_proto.overTxt_i = function () {
		var t = new eui.BitmapLabel();
		this.overTxt = t;
		t.font = "az_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "lost";
		t.visible = false;
		t.y = -622;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 45;
		t.text = "哦嚯嚯~惊不惊喜意不意外~~";
		t.visible = false;
		t.x = -187.00000000000003;
		t.y = 444;
		return t;
	};
	_proto.Txt_i = function () {
		var t = new eui.BitmapLabel();
		this.Txt = t;
		t.font = "az_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "lodasdasdasdasdasdasdasdasd";
		t.verticalCenter = 371;
		t.width = 400;
		return t;
	};
	_proto.helpBtn_i = function () {
		var t = new eui.Image();
		this.helpBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 131.37;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cat_ckts_png";
		t.width = 371.76;
		t.x = 170;
		t.y = 632;
		return t;
	};
	_proto.mCloseBtn_i = function () {
		var t = new eui.Image();
		this.mCloseBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "circle_png";
		t.visible = false;
		t.x = 492;
		t.y = -529;
		return t;
	};
	_proto.mCloseBtn2_i = function () {
		var t = new eui.Image();
		this.mCloseBtn2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "X_blue_png";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 517;
		t.y = -508;
		return t;
	};
	_proto._share_i = function () {
		var t = new eui.Image();
		this._share = t;
		t.height = 139;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cat_qzhy_png";
		t.width = 334;
		t.x = -72;
		t.y = 797;
		t.visible = false;
		return t;
	};
	_proto._tiShiWdGp_i = function () {
		var t = new eui.Group();
		this._tiShiWdGp = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1080;
		t.elementsContent = [this._Rect2_i(),this._Image2_i(),this._tishi1Gp_i(),this._tishi2Gp_i(),this._tishi3Gp_i(),this._okImg_i(),this._Label9_i(),this.imgClose_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.height = 3383;
		t.horizontalCenter = 0;
		t.width = 1440;
		t.y = -352;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 532;
		t.horizontalCenter = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "stop_png";
		t.verticalCenter = 0;
		t.width = 450;
		return t;
	};
	_proto._tishi1Gp_i = function () {
		var t = new eui.Group();
		this._tishi1Gp = t;
		t.height = 250;
		t.width = 701;
		t.x = 203;
		t.y = 519.38;
		t.elementsContent = [this._tishi1Img_i(),this._Label3_i(),this._tishi1Lb_i(),this._ads1Gp_i()];
		return t;
	};
	_proto._tishi1Img_i = function () {
		var t = new eui.Image();
		this._tishi1Img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shezhi4_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 60;
		t.text = "测试";
		t.textAlign = "center";
		t.textColor = 0x6A5034;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 619;
		t.x = 47;
		return t;
	};
	_proto._tishi1Lb_i = function () {
		var t = new eui.BitmapLabel();
		this._tishi1Lb = t;
		t.font = "az_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "Open the window and wait. There may be \nsome new discoveries";
		t.touchEnabled = false;
		t.verticalCenter = -6;
		t.visible = false;
		t.width = 400;
		return t;
	};
	_proto._ads1Gp_i = function () {
		var t = new eui.Group();
		this._ads1Gp = t;
		t.horizontalCenter = -32;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image3_i(),this._Label4_i(),this.mMFTxt1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "btn_shipin_png";
		t.touchEnabled = false;
		t.x = 44;
		t.y = 17;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 75;
		t.text = "免费提示1";
		t.textAlign = "center";
		t.textColor = 0x6A5034;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.visible = false;
		t.x = 196;
		t.y = 22;
		return t;
	};
	_proto.mMFTxt1_i = function () {
		var t = new eui.BitmapLabel();
		this.mMFTxt1 = t;
		t.font = "az_fnt";
		t.horizontalCenter = 84;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "Free tip 1";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._tishi2Gp_i = function () {
		var t = new eui.Group();
		this._tishi2Gp = t;
		t.height = 250;
		t.width = 701;
		t.x = 203;
		t.y = 820.2;
		t.elementsContent = [this._tishi2Img_i(),this._Label5_i(),this._tishi2Lb_i(),this._ads2Gp_i()];
		return t;
	};
	_proto._tishi2Img_i = function () {
		var t = new eui.Image();
		this._tishi2Img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shezhi4_png";
		t.touchEnabled = true;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 60;
		t.text = "测试测试测试测试测试测试测试";
		t.textAlign = "center";
		t.textColor = 0x6A5034;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 619;
		t.x = 47;
		return t;
	};
	_proto._tishi2Lb_i = function () {
		var t = new eui.BitmapLabel();
		this._tishi2Lb = t;
		t.font = "az_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "12s";
		t.touchEnabled = false;
		t.verticalCenter = -6;
		t.visible = false;
		t.width = 400;
		return t;
	};
	_proto._ads2Gp_i = function () {
		var t = new eui.Group();
		this._ads2Gp = t;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.verticalCenter = 0;
		t.x = 47;
		t.elementsContent = [this._tishi3Img_i(),this._Label6_i(),this.mMFTxt2_i()];
		return t;
	};
	_proto._tishi3Img_i = function () {
		var t = new eui.Image();
		this._tishi3Img = t;
		t.source = "btn_shipin_png";
		t.x = 44;
		t.y = 17;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 75;
		t.text = "免费提示2";
		t.textAlign = "center";
		t.textColor = 0x6A5034;
		t.verticalAlign = "middle";
		t.visible = false;
		t.x = 196;
		t.y = 22;
		return t;
	};
	_proto.mMFTxt2_i = function () {
		var t = new eui.BitmapLabel();
		this.mMFTxt2 = t;
		t.font = "az_fnt";
		t.horizontalCenter = 84;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "Free tip 2";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._tishi3Gp_i = function () {
		var t = new eui.Group();
		this._tishi3Gp = t;
		t.height = 250;
		t.width = 701;
		t.x = 203;
		t.y = 1121.69;
		t.elementsContent = [this._Image4_i(),this._Label7_i(),this._tishi3Lb_i(),this._ads3Gp_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shezhi4_png";
		t.touchEnabled = true;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 60;
		t.text = "测试测试测试测试测试测试测试";
		t.textAlign = "center";
		t.textColor = 0x6A5034;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 619;
		t.x = 47;
		return t;
	};
	_proto._tishi3Lb_i = function () {
		var t = new eui.BitmapLabel();
		this._tishi3Lb = t;
		t.font = "az_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "12s";
		t.touchEnabled = false;
		t.verticalCenter = -6;
		t.visible = false;
		t.width = 400;
		return t;
	};
	_proto._ads3Gp_i = function () {
		var t = new eui.Group();
		this._ads3Gp = t;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.verticalCenter = 0;
		t.x = 47;
		t.elementsContent = [this._Image5_i(),this._Label8_i(),this.mMFTxt3_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "btn_shipin_png";
		t.x = 44;
		t.y = 17;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 75;
		t.text = "免费提示3";
		t.textAlign = "center";
		t.textColor = 0x6A5034;
		t.verticalAlign = "middle";
		t.visible = false;
		t.x = 196;
		t.y = 22;
		return t;
	};
	_proto.mMFTxt3_i = function () {
		var t = new eui.BitmapLabel();
		this.mMFTxt3 = t;
		t.font = "az_fnt";
		t.horizontalCenter = 84;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "Free tip 3";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._okImg_i = function () {
		var t = new eui.Image();
		this._okImg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ok_png";
		t.x = 420.5;
		t.y = 1541.5;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 60;
		t.text = "确定";
		t.textColor = 0x1A3D42;
		t.touchEnabled = false;
		t.visible = false;
		t.x = 480;
		t.y = 1584;
		return t;
	};
	_proto.imgClose_i = function () {
		var t = new eui.BitmapLabel();
		this.imgClose = t;
		t.font = "az_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "close";
		t.touchEnabled = false;
		t.y = 1576;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "xts_png";
		t.x = 226;
		t.y = 1826;
		t.visible = false;
		return t;
	};
	return GameOverViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/StartGameView/GameWinViewSkin.exml'] = window.GameWinViewSkin = (function (_super) {
	__extends(GameWinViewSkin, _super);
	function GameWinViewSkin() {
		_super.call(this);
		this.skinParts = ["next0","winTxtx","winTxt","chapter","next","rest","_helpImg","win","winGroup","mTimex","mTime","mShareVideoOther","lhj_item0","lhj_item1","lhj_item2","lhj_ready","lhj_mask","lhj_k","lhj_g1","lhj_g2","lhj_play","laohuji","jbLabel","jb_G"];
		
		this.height = 2400;
		this.width = 1440;
		this.elementsContent = [this._Rect1_i(),this._Group5_i()];
	}
	var _proto = GameWinViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.height = 3314;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = -198;
		t.width = 200;
		t.elementsContent = [this.next0_i(),this.winTxtx_i(),this.winTxt_i(),this.chapter_i(),this.next_i(),this.rest_i(),this._helpImg_i(),this.winGroup_i(),this.mTimex_i(),this.mTime_i(),this.mShareVideoOther_i(),this.laohuji_i(),this._Image6_i(),this._Image7_i(),this.jbLabel_i(),this.jb_G_i()];
		return t;
	};
	_proto.next0_i = function () {
		var t = new eui.Image();
		this.next0 = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "Congratulations2_png";
		t.x = -287;
		t.y = -444.57;
		return t;
	};
	_proto.winTxtx_i = function () {
		var t = new eui.Label();
		this.winTxtx = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 150;
		t.text = "恭喜过关";
		t.visible = false;
		t.x = -200.00000000000006;
		t.y = -514;
		return t;
	};
	_proto.winTxt_i = function () {
		var t = new eui.BitmapLabel();
		this.winTxt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "az_fnt";
		t.height = 46;
		t.scaleX = 3;
		t.scaleY = 3;
		t.text = "Congratulations";
		t.visible = false;
		t.width = 328.68;
		t.x = -383.01;
		t.y = -502;
		return t;
	};
	_proto.chapter_i = function () {
		var t = new eui.Image();
		this.chapter = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chapter_png";
		t.x = -357.00000000000006;
		t.y = 612.43;
		return t;
	};
	_proto.next_i = function () {
		var t = new eui.Image();
		this.next = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "next_png";
		t.x = 167.99999999999994;
		t.y = 612.43;
		return t;
	};
	_proto.rest_i = function () {
		var t = new eui.Image();
		this.rest = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "rest_png";
		t.visible = false;
		t.x = -89;
		t.y = 804.43;
		return t;
	};
	_proto._helpImg_i = function () {
		var t = new eui.Image();
		this._helpImg = t;
		t.height = 139;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cat_fxhy_png";
		t.width = 334;
		t.x = -89;
		t.y = 805.88;
		return t;
	};
	_proto.winGroup_i = function () {
		var t = new eui.Group();
		this.winGroup = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = -440.00000000000006;
		t.y = -860;
		t.elementsContent = [this.win_i()];
		return t;
	};
	_proto.win_i = function () {
		var t = new eui.Image();
		this.win = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 0;
		t.x = 301;
		t.y = 520;
		return t;
	};
	_proto.mTimex_i = function () {
		var t = new eui.Label();
		this.mTimex = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 64;
		t.stroke = 1;
		t.strokeColor = 0xfc5a5a;
		t.text = "恭喜过关";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.visible = false;
		t.width = 702;
		t.x = -190.00000000000006;
		t.y = 519.33;
		return t;
	};
	_proto.mTime_i = function () {
		var t = new eui.BitmapLabel();
		this.mTime = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "az_fnt";
		t.height = 46;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "Time:20s";
		t.visible = false;
		t.width = 198;
		t.x = -91;
		t.y = 511.33;
		return t;
	};
	_proto.mShareVideoOther_i = function () {
		var t = new eui.Image();
		this.mShareVideoOther = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xts_png";
		t.visible = false;
		t.x = 350;
		t.y = 723.39;
		t.visible = false;
		return t;
	};
	_proto.laohuji_i = function () {
		var t = new eui.Group();
		this.laohuji = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 0;
		t.y = 26;
		t.elementsContent = [this._Rect2_i(),this.lhj_mask_i(),this.lhj_k_i(),this._Group4_i(),this.lhj_play_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.height = 164;
		t.width = 494;
		t.x = -171;
		t.y = 964;
		return t;
	};
	_proto.lhj_mask_i = function () {
		var t = new eui.Group();
		this.lhj_mask = t;
		t.height = 164;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 494;
		t.x = -171;
		t.y = 967;
		t.elementsContent = [this.lhj_item0_i(),this.lhj_item1_i(),this.lhj_item2_i(),this.lhj_ready_i()];
		return t;
	};
	_proto.lhj_item0_i = function () {
		var t = new eui.Group();
		this.lhj_item0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 160;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lhj_item1_i = function () {
		var t = new eui.Group();
		this.lhj_item1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 160;
		t.x = 165;
		t.y = 0;
		return t;
	};
	_proto.lhj_item2_i = function () {
		var t = new eui.Group();
		this.lhj_item2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 160;
		t.x = 330;
		t.y = 0;
		return t;
	};
	_proto.lhj_ready_i = function () {
		var t = new eui.Group();
		this.lhj_ready = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = -0.9999999999999432;
		t.y = -0.9999999999997726;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 160;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._BitmapLabel1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jinb-icon_png";
		t.x = 44;
		t.y = 22.88;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "til-icon_png";
		t.visible = false;
		t.x = 48;
		t.y = 22.88;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "az_fnt";
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "+15";
		t.y = 107;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 160;
		t.x = 166;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._BitmapLabel2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jinb-icon_png";
		t.x = 44;
		t.y = 22.88;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "til-icon_png";
		t.visible = false;
		t.x = 48;
		t.y = 22.88;
		return t;
	};
	_proto._BitmapLabel2_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "az_fnt";
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "+15";
		t.y = 107;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 160;
		t.x = 335;
		t.y = 0;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bofang_png";
		t.x = 30;
		t.y = 22.88;
		return t;
	};
	_proto.lhj_k_i = function () {
		var t = new eui.Image();
		this.lhj_k = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "laohuji1_png";
		t.x = -187;
		t.y = 944.88;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.lhj_g1_i(),this.lhj_g2_i()];
		return t;
	};
	_proto.lhj_g1_i = function () {
		var t = new eui.Image();
		this.lhj_g1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "laohuji2_png";
		t.x = 351;
		t.y = 897.88;
		return t;
	};
	_proto.lhj_g2_i = function () {
		var t = new eui.Image();
		this.lhj_g2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "laohuji3_png";
		t.visible = false;
		t.x = 351;
		t.y = 1043.88;
		return t;
	};
	_proto.lhj_play_i = function () {
		var t = new eui.Rect();
		this.lhj_play = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.fillColor = 0xFFFFFF;
		t.height = 164;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 300.06;
		t.x = 165.36;
		t.y = 963.9999999999999;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 97.03;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jinb-icon_png";
		t.width = 83;
		t.x = 334.5;
		t.y = -534;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 97.03;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "laohujix_png";
		t.width = 83;
		t.x = 416.5;
		t.y = -494;
		return t;
	};
	_proto.jbLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.jbLabel = t;
		t.font = "white_fnt";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "1";
		t.touchEnabled = false;
		t.x = 473.5;
		t.y = -508;
		return t;
	};
	_proto.jb_G_i = function () {
		var t = new eui.Group();
		this.jb_G = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 334.5;
		t.y = -534;
		return t;
	};
	return GameWinViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/StartGameView/LaoHuJiItemViewSkin.exml'] = window.StoryItemSkin = (function (_super) {
	__extends(StoryItemSkin, _super);
	function StoryItemSkin() {
		_super.call(this);
		this.skinParts = ["lhj_jb","lhj_tl","lhj_num"];
		
		this.height = 164;
		this.width = 160;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = StoryItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 160;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.lhj_jb_i(),this.lhj_tl_i(),this.lhj_num_i()];
		return t;
	};
	_proto.lhj_jb_i = function () {
		var t = new eui.Image();
		this.lhj_jb = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jinb-icon_png";
		t.x = 44;
		t.y = 22.88;
		return t;
	};
	_proto.lhj_tl_i = function () {
		var t = new eui.Image();
		this.lhj_tl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "til-icon_png";
		t.x = 48;
		t.y = 22.88;
		return t;
	};
	_proto.lhj_num_i = function () {
		var t = new eui.BitmapLabel();
		this.lhj_num = t;
		t.font = "az_fnt";
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "+5";
		t.y = 107;
		return t;
	};
	return StoryItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/StartGameView/SelectChaptersViewSkin.exml'] = window.SelectChaptersViewSkin = (function (_super) {
	__extends(SelectChaptersViewSkin, _super);
	function SelectChaptersViewSkin() {
		_super.call(this);
		this.skinParts = ["checkOneBtn","checkTwoBtn","backBtn","backBtn0","backText","_backGp","imgClose1","imgClose2","imgClose0","imgClose3","imgClose4","groupTip","levelNum"];
		
		this.height = 2300;
		this.width = 1440;
		this.elementsContent = [this._Group1_i(),this.levelNum_i(),this._Image2_i()];
	}
	var _proto = SelectChaptersViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 200;
		t.elementsContent = [this.checkOneBtn_i(),this.checkTwoBtn_i(),this._backGp_i(),this.groupTip_i()];
		return t;
	};
	_proto.checkOneBtn_i = function () {
		var t = new eui.Image();
		this.checkOneBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "check_one_png";
		t.x = -270.00000000000006;
		t.y = -366;
		return t;
	};
	_proto.checkTwoBtn_i = function () {
		var t = new eui.Image();
		this.checkTwoBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "check_two_png";
		t.x = -270.00000000000006;
		t.y = 224;
		return t;
	};
	_proto._backGp_i = function () {
		var t = new eui.Group();
		this._backGp = t;
		t.x = 339.52;
		t.y = 865.52;
		t.elementsContent = [this.backBtn_i(),this.backBtn0_i(),this.backText_i()];
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Image();
		this.backBtn = t;
		t.anchorOffsetY = 0;
		t.height = 91.34;
		t.rotation = 180;
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "jiantou_png";
		t.x = 152.02;
		t.y = 78.45;
		return t;
	};
	_proto.backBtn0_i = function () {
		var t = new eui.Image();
		this.backBtn0 = t;
		t.anchorOffsetY = 0;
		t.rotation = 180;
		t.scaleX = -1.5;
		t.scaleY = -1.5;
		t.source = "Back2_png";
		t.x = -76.98;
		t.y = -11.55;
		return t;
	};
	_proto.backText_i = function () {
		var t = new eui.Label();
		this.backText = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 70;
		t.text = "返回";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.groupTip_i = function () {
		var t = new eui.Group();
		this.groupTip = t;
		t.height = 1920;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 1080;
		t.x = -440.00000000000006;
		t.y = -860;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this.imgClose1_i(),this.imgClose2_i(),this.imgClose0_i(),this.imgClose3_i(),this.imgClose4_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.height = 2600;
		t.horizontalCenter = 0;
		t.width = 1440;
		t.y = -190;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 881;
		t.horizontalCenter = 0;
		t.source = "stop_png";
		t.verticalCenter = 0;
		t.width = 913;
		return t;
	};
	_proto.imgClose1_i = function () {
		var t = new eui.Image();
		this.imgClose1 = t;
		t.source = "ok_png";
		t.x = 225.72;
		t.y = 1139.5;
		return t;
	};
	_proto.imgClose2_i = function () {
		var t = new eui.Label();
		this.imgClose2 = t;
		t.fontFamily = "W12";
		t.horizontalCenter = -195;
		t.size = 60;
		t.text = "取消";
		t.textColor = 0x133535;
		t.y = 1182;
		return t;
	};
	_proto.imgClose0_i = function () {
		var t = new eui.Image();
		this.imgClose0 = t;
		t.source = "ok_png";
		t.x = 625;
		t.y = 1142.5;
		return t;
	};
	_proto.imgClose3_i = function () {
		var t = new eui.Label();
		this.imgClose3 = t;
		t.fontFamily = "W12";
		t.horizontalCenter = 205;
		t.size = 60;
		t.text = "确定";
		t.textColor = 0x133535;
		t.y = 1182;
		return t;
	};
	_proto.imgClose4_i = function () {
		var t = new eui.Label();
		this.imgClose4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "W12";
		t.height = 168;
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "是否开启第二章(恢复购买) 6元";
		t.textAlign = "center";
		t.textColor = 0x313131;
		t.width = 665;
		t.y = 838;
		return t;
	};
	_proto.levelNum_i = function () {
		var t = new eui.BitmapLabel();
		this.levelNum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "az_fnt";
		t.height = 42.64;
		t.horizontalCenter = 1;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "10/20";
		t.width = 118.48;
		t.y = 509.7;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "check_select_png";
		t.x = 429;
		t.y = 395;
		return t;
	};
	return SelectChaptersViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/StartGameView/StartGameViewSkin.exml'] = window.StartGameViewSkin = (function (_super) {
	__extends(StartGameViewSkin, _super);
	var StartGameViewSkin$Skin10 = 	(function (_super) {
		__extends(StartGameViewSkin$Skin10, _super);
		function StartGameViewSkin$Skin10() {
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
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartGameViewSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "qiandao_png";
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
		return StartGameViewSkin$Skin10;
	})(eui.Skin);

	var StartGameViewSkin$Skin11 = 	(function (_super) {
		__extends(StartGameViewSkin$Skin11, _super);
		function StartGameViewSkin$Skin11() {
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
						new eui.SetProperty("_Image1","source","freeCoinBtn_2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartGameViewSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "freeCoinBtn_png";
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
		return StartGameViewSkin$Skin11;
	})(eui.Skin);

	function StartGameViewSkin() {
		_super.call(this);
		this.skinParts = ["rateBtn","mShareBtn","startBtn","achieveBtn","optionBtn","pictureBtn","shopBtn","tipsBtn","mRankBtn","anitGroup","signBtn","_itemGp","mofabang","_downTimeBLb","nengliangBtn","jinbiBtn","mHeadIcon","mHeadK","mPower","mCoin","mNickName","mofabangTxt","bgBtn","mianfeiTxt","tiliBtn1","tiliTxt1","tiliBtn2","tiliTxt2","tiliGroup"];
		
		this.height = 2300;
		this.width = 1440;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = StartGameViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 200;
		t.elementsContent = [this._Image1_i(),this.rateBtn_i(),this.mShareBtn_i(),this.startBtn_i(),this.achieveBtn_i(),this.optionBtn_i(),this.pictureBtn_i(),this._itemGp_i(),this.mofabang_i(),this._downTimeBLb_i(),this.nengliangBtn_i(),this._Image4_i(),this._Image5_i(),this.jinbiBtn_i(),this._Image6_i(),this._Image7_i(),this.mHeadIcon_i(),this.mHeadK_i(),this.mPower_i(),this.mCoin_i(),this.mNickName_i(),this.mofabangTxt_i(),this.tiliGroup_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "biaoti2_png";
		t.x = -261.00000000000006;
		t.y = -548;
		return t;
	};
	_proto.rateBtn_i = function () {
		var t = new eui.Image();
		this.rateBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "rate2_png";
		t.visible = false;
		t.x = -445;
		t.y = 983.36;
		return t;
	};
	_proto.mShareBtn_i = function () {
		var t = new eui.Image();
		this.mShareBtn = t;
		t.source = "share_png";
		t.x = 557.09;
		t.y = -153;
		t.visible = false;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Image();
		this.startBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "start2_png";
		t.x = -110;
		t.y = 89;
		return t;
	};
	_proto.achieveBtn_i = function () {
		var t = new eui.Image();
		this.achieveBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chengjiu_png";
		t.x = -237.12000000000006;
		t.y = 463;
		return t;
	};
	_proto.optionBtn_i = function () {
		var t = new eui.Image();
		this.optionBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "option_png";
		t.x = 18.87999999999994;
		t.y = 463;
		return t;
	};
	_proto.pictureBtn_i = function () {
		var t = new eui.Image();
		this.pictureBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "manhua_png";
		t.x = 274.37999999999994;
		t.y = 463;
		return t;
	};
	_proto._itemGp_i = function () {
		var t = new eui.Group();
		this._itemGp = t;
		t.x = -473.94;
		t.y = 631.84;
		t.elementsContent = [this.shopBtn_i(),this.tipsBtn_i(),this.mRankBtn_i(),this._Image2_i(),this._Image3_i(),this.anitGroup_i(),this.signBtn_i()];
		return t;
	};
	_proto.shopBtn_i = function () {
		var t = new eui.Image();
		this.shopBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop2_png";
		t.width = 144;
		t.x = 204.94;
		t.y = 103.16;
		return t;
	};
	_proto.tipsBtn_i = function () {
		var t = new eui.Image();
		this.tipsBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tips2_png";
		t.width = 144;
		t.x = 408.94;
		t.y = 103.16;
		//t.visible = false;	/*禁止帮助按钮*/
		return t;
	};
	_proto.mRankBtn_i = function () {
		var t = new eui.Image();
		this.mRankBtn = t;
		t.source = "rankBtn_png";
		t.width = 144;
		t.x = 0;
		t.y = 103.16;
		t.visible = false;	/*禁止显示Rank按钮*/
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jiaoyin2_png";
		t.x = 747.94;
		t.y = 270.16;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "zixiang_png";
		t.x = 840.94;
		t.y = 77.16;
		return t;
	};
	_proto.anitGroup_i = function () {
		var t = new eui.DataGroup();
		this.anitGroup = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 958.33;
		t.y = 0;
		return t;
	};
	_proto.signBtn_i = function () {
		var t = new eui.Button();
		this.signBtn = t;
		t.label = "";
		t.x = 408.94;
		t.y = 103.16;
		t.skinName = StartGameViewSkin$Skin10;
		return t;
	};
	_proto.mofabang_i = function () {
		var t = new eui.Button();
		this.mofabang = t;
		t.anchorOffsetX = 58;
		t.anchorOffsetY = 75.5;
		t.label = "";
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.x = 500;
		t.y = 171;
		t.skinName = StartGameViewSkin$Skin11;
		return t;
	};
	_proto._downTimeBLb_i = function () {
		var t = new eui.BitmapLabel();
		this._downTimeBLb = t;
		t.font = "az_fnt";
		t.horizontalCenter = 402;
		t.text = "12:12";
		t.y = 245;
		return t;
	};
	_proto.nengliangBtn_i = function () {
		var t = new eui.Image();
		this.nengliangBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56.81;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shuzik_png";
		t.width = 203;
		t.x = -211.82;
		t.y = -699.01;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "til-icon_png";
		t.touchEnabled = false;
		t.width = 59.09;
		t.x = -227.27;
		t.y = -713.6;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "coinAddBtn_png";
		t.touchEnabled = false;
		t.x = -44.84;
		t.y = -692;
		return t;
	};
	_proto.jinbiBtn_i = function () {
		var t = new eui.Image();
		this.jinbiBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56.81;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shuzik_png";
		t.touchEnabled = false;
		t.width = 203;
		t.x = 91.69;
		t.y = -699.01;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "coinAddBtn_png";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 259.94;
		t.y = -692;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 64.33;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jinb-icon_png";
		t.touchEnabled = false;
		t.width = 64.33;
		t.x = 72.82;
		t.y = -704.65;
		return t;
	};
	_proto.mHeadIcon_i = function () {
		var t = new eui.Image();
		this.mHeadIcon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.horizontalCenter = -452.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon64_png";
		t.touchEnabled = false;
		t.verticalCenter = -790.5;
		t.width = 100;
		t.visible = false;	/*禁止显示*/
		return t;
	};
	_proto.mHeadK_i = function () {
		var t = new eui.Image();
		this.mHeadK = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 117;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "headk_png";
		t.touchEnabled = false;
		t.width = 117;
		t.x = -410.68;
		t.y = -749.01;
		t.visible = false; /*禁止显示*/
		return t;
	};
	_proto.mPower_i = function () {
		var t = new eui.Label();
		this.mPower = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = -197.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "5";
		t.textAlign = "center";
		t.textColor = 0x492907;
		t.touchEnabled = false;
		t.width = 115;
		t.x = -50;
		t.y = -690.5;
		return t;
	};
	_proto.mCoin_i = function () {
		var t = new eui.Label();
		this.mCoin = t;
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x492907;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 126;
		t.x = 134.16;
		t.y = -690.5;
		return t;
	};
	_proto.mNickName_i = function () {
		var t = new eui.Label();
		this.mNickName = t;
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "游客躲猫猫";
		t.textAlign = "center";
		t.textColor = 0x3a3a3a;
		t.touchEnabled = false;
		t.verticalAlign = "top";
		t.width = 256.33;
		t.x = -480.03;
		t.y = -630;
		t.visible = false;	/*禁止显示*/
		return t;
	};
	_proto.mofabangTxt_i = function () {
		var t = new eui.Label();
		this.mofabangTxt = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.stroke = 2;
		t.strokeColor = 0x1a2d1f;
		t.text = "免费";
		t.visible = false;
		t.x = 502;
		t.y = -486.68;
		return t;
	};
	_proto.tiliGroup_i = function () {
		var t = new eui.Group();
		this.tiliGroup = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1080;
		t.elementsContent = [this.bgBtn_i(),this.mianfeiTxt_i(),this.tiliBtn1_i(),this.tiliTxt1_i(),this._Image8_i(),this.tiliBtn2_i(),this.tiliTxt2_i(),this._Image9_i()];
		return t;
	};
	_proto.bgBtn_i = function () {
		var t = new eui.Rect();
		this.bgBtn = t;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.height = 2994;
		t.horizontalCenter = 0;
		t.verticalCenter = 290;
		t.width = 1440;
		return t;
	};
	_proto.mianfeiTxt_i = function () {
		var t = new eui.Label();
		this.mianfeiTxt = t;
		t.horizontalCenter = 0;
		t.size = 70;
		t.stroke = 3;
		t.strokeColor = 0x133535;
		t.text = "免费获得金币";
		t.y = 710;
		return t;
	};
	_proto.tiliBtn1_i = function () {
		var t = new eui.Image();
		this.tiliBtn1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 173.88;
		t.source = "btn_png";
		t.width = 418;
		t.x = 340.66;
		t.y = 876;
		return t;
	};
	_proto.tiliTxt1_i = function () {
		var t = new eui.Label();
		this.tiliTxt1 = t;
		t.size = 55;
		t.text = "金币+50";
		t.textColor = 0x0f353b;
		t.touchEnabled = false;
		t.x = 497.88;
		t.y = 936;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90.79;
		t.source = "fenxiang_png";
		t.touchEnabled = false;
		t.width = 92.61;
		t.x = 395.66;
		t.y = 917;
		t.visible = false; /*禁止显示*/
		return t;
	};
	_proto.tiliBtn2_i = function () {
		var t = new eui.Image();
		this.tiliBtn2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 173.88;
		t.source = "btn_png";
		t.visible = false;
		t.width = 418;
		t.x = 567.01;
		t.y = 879.06;
		return t;
	};
	_proto.tiliTxt2_i = function () {
		var t = new eui.Label();
		this.tiliTxt2 = t;
		t.size = 55;
		t.text = "体力+1";
		t.textColor = 0x0F353B;
		t.touchEnabled = false;
		t.visible = false;
		t.x = 751.5;
		t.y = 939.06;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90.79;
		t.source = "bofang_png";
		t.touchEnabled = false;
		t.visible = false;
		t.width = 92.61;
		t.x = 622.01;
		t.y = 920.06;
		return t;
	};
	return StartGameViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/StoryView/StoryItemSkin.exml'] = window.StoryItemSkin = (function (_super) {
	__extends(StoryItemSkin, _super);
	function StoryItemSkin() {
		_super.call(this);
		this.skinParts = ["imgIcon"];
		
		this.height = 550;
		this.width = 350;
		this.elementsContent = [this.imgIcon_i()];
	}
	var _proto = StoryItemSkin.prototype;

	_proto.imgIcon_i = function () {
		var t = new eui.Image();
		this.imgIcon = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "storymoren_png";
		t.verticalCenter = 0;
		return t;
	};
	return StoryItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/StoryView/StoryViewSkin.exml'] = window.StoryViewSkin = (function (_super) {
	__extends(StoryViewSkin, _super);
	function StoryViewSkin() {
		_super.call(this);
		this.skinParts = ["dgStory","txt1","backBtn","backBtn2","backText","groupMain","imgClose1","imgCloseBack","imgClose2","txt2","bimgClose2","groupNone","mStoryRoot","backBtn0","backText0","groupStory"];
		
		this.height = 2300;
		this.width = 1440;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = StoryViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 200;
		t.elementsContent = [this.groupMain_i(),this.groupNone_i(),this.groupStory_i()];
		return t;
	};
	_proto.groupMain_i = function () {
		var t = new eui.Group();
		this.groupMain = t;
		t.height = 1920;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1080;
		t.x = -440.00000000000006;
		t.y = -860;
		t.elementsContent = [this._Scroller1_i(),this.txt1_i(),this.backBtn_i(),this.backBtn2_i(),this._Image1_i(),this.backText_i()];
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1426;
		t.horizontalCenter = 0;
		t.skinName = "CommonScrollerViewSkin";
		t.width = 1050;
		t.y = 250;
		t.viewport = this.dgStory_i();
		return t;
	};
	_proto.dgStory_i = function () {
		var t = new eui.DataGroup();
		this.dgStory = t;
		t.itemRendererSkinName = StoryItemSkin;
		t.layout = this._TileLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 0;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto.txt1_i = function () {
		var t = new eui.Label();
		this.txt1 = t;
		t.fontFamily = "W12";
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "漫画故事";
		t.textColor = 0x32667f;
		t.visible = false;
		t.y = 158;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Image();
		this.backBtn = t;
		t.anchorOffsetY = 0;
		t.height = 91.34;
		t.rotation = 180;
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "jiantou_png";
		t.x = 979;
		t.y = 1853.85;
		return t;
	};
	_proto.backBtn2_i = function () {
		var t = new eui.Image();
		this.backBtn2 = t;
		t.anchorOffsetY = 0;
		t.rotation = 180;
		t.scaleX = -1.5;
		t.scaleY = -1.5;
		t.source = "Back2_png";
		t.x = 754;
		t.y = 1761.85;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.rotation = 180;
		t.scaleX = -1;
		t.scaleY = -1;
		t.source = "Comicstory_png";
		t.x = 370;
		t.y = 165.85;
		return t;
	};
	_proto.backText_i = function () {
		var t = new eui.Label();
		this.backText = t;
		t.fontFamily = "W12";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 70;
		t.stroke = 3;
		t.strokeColor = 0x0f353b;
		t.text = "返回";
		t.visible = false;
		t.x = 826;
		t.y = 1776.52;
		return t;
	};
	_proto.groupNone_i = function () {
		var t = new eui.Group();
		this.groupNone = t;
		t.height = 1920;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 1080;
		t.x = -440.00000000000006;
		t.y = -860;
		t.elementsContent = [this._Rect1_i(),this._Image2_i(),this.imgClose1_i(),this.imgCloseBack_i(),this.imgClose2_i(),this.txt2_i(),this.bimgClose2_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.height = 3014;
		t.horizontalCenter = 0;
		t.width = 1440;
		t.y = -190;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 881;
		t.horizontalCenter = 0;
		t.source = "stop_png";
		t.verticalCenter = 0;
		t.width = 913;
		return t;
	};
	_proto.imgClose1_i = function () {
		var t = new eui.Image();
		this.imgClose1 = t;
		t.source = "ok_png";
		t.x = 421;
		t.y = 1178;
		return t;
	};
	_proto.imgCloseBack_i = function () {
		var t = new eui.Image();
		this.imgCloseBack = t;
		t.horizontalCenter = 0;
		t.source = "Back_png";
		t.y = 1224;
		return t;
	};
	_proto.imgClose2_i = function () {
		var t = new eui.Label();
		this.imgClose2 = t;
		t.fontFamily = "W12";
		t.horizontalCenter = 1;
		t.size = 60;
		t.text = "确定";
		t.textColor = 0x0f353b;
		t.visible = false;
		t.y = 1220.5;
		return t;
	};
	_proto.txt2_i = function () {
		var t = new eui.Label();
		this.txt2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "W12";
		t.height = 392;
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "这个故事还没有收集到哦.看完三次提示可以跳过关卡呢.";
		t.textAlign = "center";
		t.textColor = 0x313131;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 512;
		t.y = 712.5;
		return t;
	};
	_proto.bimgClose2_i = function () {
		var t = new eui.BitmapLabel();
		this.bimgClose2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "az_fnt";
		t.height = 221;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "This story has not been collected yet. After three readings, you can skip the level.";
		t.width = 347.46;
		t.x = 208.21;
		t.y = 685.52;
		return t;
	};
	_proto.groupStory_i = function () {
		var t = new eui.Group();
		this.groupStory = t;
		t.height = 1920;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 1080;
		t.x = -440.00000000000006;
		t.y = -860;
		t.elementsContent = [this._Rect2_i(),this.mStoryRoot_i(),this.backBtn0_i(),this.backText0_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.height = 3122;
		t.horizontalCenter = 0;
		t.width = 1440;
		t.y = -190;
		return t;
	};
	_proto.mStoryRoot_i = function () {
		var t = new eui.Group();
		this.mStoryRoot = t;
		t.height = 2;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 2;
		return t;
	};
	_proto.backBtn0_i = function () {
		var t = new eui.Image();
		this.backBtn0 = t;
		t.anchorOffsetY = 0;
		t.height = 91.34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jiantou_png";
		t.x = 985.06;
		t.y = 1761.85;
		return t;
	};
	_proto.backText0_i = function () {
		var t = new eui.Label();
		this.backText0 = t;
		t.fontFamily = "W12";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 70;
		t.stroke = 3;
		t.strokeColor = 0x0f353b;
		t.text = "返回";
		t.x = 826;
		t.y = 1776.52;
		return t;
	};
	return StoryViewSkin;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/scene/LoadingSceneSkin.exml'] = window.LoadingSceneSkin = (function (_super) {
	__extends(LoadingSceneSkin, _super);
	function LoadingSceneSkin() {
		_super.call(this);
		this.skinParts = ["loadNum","groupPro"];
		
		this.height = 1730;
		this.width = 1080;
		this.elementsContent = [this._Rect1_i(),this.loadNum_i(),this._Image1_i(),this._Image2_i(),this.groupPro_i(),this._Image4_i()];
	}
	var _proto = LoadingSceneSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xFAF6F6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.loadNum_i = function () {
		var t = new eui.Label();
		this.loadNum = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 38;
		t.text = "0%";
		t.textColor = 0x0D0C0B;
		t.verticalCenter = 182;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 1101;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 919;
		return t;
	};
	_proto.groupPro_i = function () {
		var t = new eui.Group();
		this.groupPro = t;
		t.height = 24;
		t.scrollEnabled = true;
		t.width = 0;
		t.x = 226;
		t.y = 1124;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "";
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 278;
		return t;
	};
	return LoadingSceneSkin;
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
})(eui.Skin);