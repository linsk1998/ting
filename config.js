var Color=require('./lib/color');

var success=Color.parse("#5cb85c");
var info=Color.parse("#5bc0de");
var warning=Color.parse("#f0ad4e");
var danger=Color.parse("#d9534f");


success.text=Color.parse("#3c763d");
success.bg=Color.parse("#dff0d8");
success.border=success.bg.spin(-0.1).darken(0.05);

info.text=Color.parse("#31708f");
info.bg=Color.parse("#d9edf7");
info.border=info.bg.spin(-0.1).darken(0.05);

warning.text=Color.parse("#8a6d3b");
warning.bg=Color.parse("#fcf8e3").darken(0.05);
warning.border=warning.text.lighten(0.45);

danger.text=Color.parse("#a94442");
danger.bg=Color.parse("#f2dede");
danger.border=danger.bg.spin(-0.1).darken(0.05);

exports.$success=success;
exports.$info=info;
exports.$warning=warning;
exports.$danger=danger;
exports.$teal=Color(0x009688);
exports.$blue=Color(0x2196F3);
exports.$indigo=Color(0x337ab7);
exports.$purple=Color(0x6f5499);
exports.$red=Color(0xC5020D);
exports.$brown=Color(0x795548);

exports.fontAwesome="fonts";//图标CDN
exports.fontSizeBase='14px';//基础文字大小
exports.modalAlpha=0.4;//模不透明度
