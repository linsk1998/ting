function clamp(val) {
    return Math.min(1, Math.max(0, val));
}
Color.parseHSL=function(hsl) {
        var m1, m2,h=hsl.h,s=hsl.s,l=hsl.l;
        function hue(h) {
            h = h < 0 ? h + 1 : (h > 1 ? h - 1 : h);
            if (h * 6 < 1) {
                return m1 + (m2 - m1) * h * 6;
            }
            else if (h * 2 < 1) {
                return m2;
            }
            else if (h * 3 < 2) {
                return m1 + (m2 - m1) * (2 / 3 - h) * 6;
            }
            else {
                return m1;
            }
        }
        h = (parseFloat(h) % 360) / 360;
        s = clamp(parseFloat(s)); l = clamp(parseFloat(l));
        m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        m1 = l * 2 - m2;
        return new Color(hue(h + 1 / 3) * 255, hue(h) * 255, hue(h - 1 / 3) * 255);
}
function Color(color,g,b){
	var arr;
	this.rgb=[];
	var r,g,b;
	if(typeof color=="number" && typeof b=="number"){
		this.rgb[0]=color;
		this.rgb[1]=g;
		this.rgb[2]=b;
	}else{
		color=color.toUpperCase();
		if(arr=color.match(/^#([A-Z0-9]{2})([A-Z0-9]{2})([A-Z0-9]{2})$/)){
			this.rgb[0]=parseInt(arr[1],16);
			this.rgb[1]=parseInt(arr[2],16);
			this.rgb[2]=parseInt(arr[3],16);
		}else if(arr=color.match(/^#([A-Z0-9]{1})([A-Z0-9]{1})([A-Z0-9]{1})$/)){
			r=parseInt(arr[1],16);
			g=parseInt(arr[2],16);
			b=parseInt(arr[3],16);
			this.rgb[0]=r*r;
			this.rgb[1]=g*g;
			this.rgb[2]=b*b;
		}
	}
}
Color.prototype.toHSL = function () {
    var r = this.rgb[0] / 255,
        g = this.rgb[1] / 255,
        b = this.rgb[2] / 255;

    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2, d = max - min;

    if (max === min) {
        h = s = 0;
    } else {
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2;               break;
            case b: h = (r - g) / d + 4;               break;
        }
        h /= 6;
    }
    return { h: h * 360, s: s, l: l };
};
Color.prototype.lighten=function ( amount, method) {
	var hsl = this.toHSL();
	var arr;
	if(typeof amount=="string"){
		if(arr=amount.match(/^(\-?\d+)%$/)){
			amount=parseFloat(arr[1])/100;
		}
	}
	if (typeof method !== "undefined" && method.value === "relative") {
		hsl.l +=  hsl.l * amount.value / 100;
	}
	else {
		hsl.l += amount;
	}
	hsl.l = clamp(hsl.l);
	return Color.parseHSL(hsl);
};
Color.prototype.darken=function( amount, method){
	return this.lighten( -amount, method);
};
Color.prototype.toString=function(){
	return "rgb("+this.rgb[0]+","+this.rgb[1]+","+this.rgb[2]+")";
};
Color.prototype.toHex=function(){
	function clamp(v, max) {
		return Math.min(Math.max(v, 0), max);
	}
    return '#' + this.rgb.map(function (c) {
        c = clamp(Math.round(c), 255);
        return (c < 16 ? '0' : '') + c.toString(16);
    }).join('');
};
Color.mix=function (color1, color2, weight) {
	if (!weight) {
		weight = 50;
	}
	var p = weight / 100.0;
	var w1 = p;
	var w2 = 1 - w1;
	return new Color(color1.rgb[0] * w1 + color2.rgb[0] * w2, color1.rgb[1] * w1 + color2.rgb[1] * w2,color1.rgb[2] * w1 + color2.rgb[2] * w2);
};
module.exports=Color;