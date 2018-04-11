
(function(window,undefined){
	function Color(r, g, b, a){
		if(!(this instanceof Color)){
			return new Color(r, g, b, a);
		}
		var color;
		var args=arguments.length;
		if(b==undefined){
			a = g || 1;
			if(Number.isInteger(r)){
				g = (r & 0xFF00) / 0x100;
				b =  r & 0xFF;
				r =  r >>> 0x10;
				this.rgb=new Array(r,g,b);
				this.alpha=a;
			}else if(r instanceof Color){
				this.rgb=r.rgb.slice(0,3);
				this.alpha=r.alpha;
			}else{
				color=Color.parse(r);
				this.rgb=color.rgb.slice(0,3);
				this.alpha=a;
			}
		}else{
			a = a || 1;
			this.rgb=new Array(Math.round(r),Math.round(g),Math.round(b));
			this.alpha=a;
		}
	}
	Color.names={red:0xff0000,green:0x008000,blue:0x0000ff,magenta:0xff00ff,yellow:0xffff00,chocolate:0xd2691e,black:0x000000,aquamarine:0x7fffd4,lime:0x00ff00,fuchsia:0xff00ff,brass:0xb0a000,azure:0xf0ffff,brown:0xa52a2a,bronze:0xb0000e,deeppink:0xff1493,aliceblue:0xf0f8ff,gray:0x808080,copper:0xc000e0,coral:0xff7f50,feldspar:0xfed0a0,orange:0xffa500,orchid:0xda70d6,pink:0xffc0cb,plum:0xdda0dd,quartz:0x00a000,purple:0x800080,antiquewith:0xa00000,blanchedalmond:0xffebcd,blueviolet:0x8a2be2,beige:0xf5f5dc,burlywood:0xdeb887,bisque:0xffe4c4,cadetblue:0x5f9ea0,saddlebrown:0x8b4513,royalblue:0x4169e1,rosybrown:0xbc8f8f,orengered:0x0e0eed,olivedrab:0x6b8e23,powderblue:0xb0e0e6,peachpuff:0xffdab9,papayawhip:0xffefd5,paleturquoise:0xafeeee,palevioletred:0xdb7093,palegreen:0x98fb98,navyblue:0xa0b0e0,navajowhite:0xffdead,palegodenrod:0xa00d00,violetred:0x00e0ed,yellowgreen:0x9acd32,tomato:0xff6347,turquoise:0x40e0d0,thistle:0xd8bfd8,springgreen:0x00ff7f,steelblue:0x4682b4,salmon:0xfa8072,scarlet:0xca0e00,sienna:0xa0522d,silver:0xc0c0c0,tan:0xd2b48c,violet:0xee82ee,snow:0xfffafa,chartreuse:0x7fff00,firebrick:0xb22222,gold:0xffd700,khaki:0xf0e68c,mediumslateblue:0x7b68ee,mediumvioletred:0xc71585,oldlace:0xfdf5e6,maroom:0x0a0000,goldenrod:0xdaa520,wheat:0xf5deb3,whitesmoke:0xf5f5f5,moccasin:0xffe4b5,mistyrose:0xffe4e1,mintcream:0xf5fffa,midnightblue:0x191970,dimgray:0x696969,darksalmon:0xe9967a,slategray:0x708090,skyblue:0x87ceeb,seashell:0xfff5ee,seagreen:0x2e8b57,sandybrown:0xf4a460,mediumturquoise:0x48d1cc,navy:0x000080,mediumspringgreen:0x00fa9a,mediumseagreen:0x3cb371,mediumpurpul:0xed0000,peru:0xcd853f,mediumorchid:0xba55d3,mediumblue:0x0000cd,mediumaquamarine:0x66cdaa,maroon:0x800000,limegreen:0x32cd32,lightyellow:0xffffe0,lightsteelblue:0xb0c4de,lightslateblue:0x0000b0,lightslategray:0x778899,lightskyblue:0x87cefa,inen:0x00e000,lightseagreen:0x20b2aa,lightsalmon:0xffa07a,lightpink:0xffb6c1,lightgray:0x0000a0,lightgreen:0x90ee90,lightgodenrodyellow:0x00dee0,indianred:0xcd5c5c,lavender:0xe6e6fa,lightblue:0xadd8e6,lavenderblush:0xfff0f5,lightcoral:0xf08080,lightcyan:0xe0ffff,lightgodenrod:0x00ded0,hotpink:0xff69b4,greenyellow:0xadff2f,lemonchiffon:0xfffacd,lawngreen:0x7cfc00,deepskyblue:0x00bfff,honeydew:0xf0fff0,golenrod:0x00e00d,forestgreen:0x228b22,gostwhite:0x00000e,gainsboro:0xdcdcdc,dodgerblue:0x1e90ff,darkturquoise:0x00ced1,darkslateblue:0x483d8b,darkslategray:0x2f4f4f,darkseagreen:0x8fbc8f,darkred:0x8b0000,darkorchid:0x9932cc,darkorenge:0xda000e,darkviolet:0x9400d3,floralwhite:0xfffaf0,cyan:0x00ffff,bisque:0xffe4c4,cornsilk:0xfff8dc,darkolivegreen:0x556b2f,darkgoldenrod:0xb8860b,darkblue:0x00008b,darkcyan:0x008b8b,darkgreen:0x006400,darkhaki:0xda0000,ivory:0xfffff0,darkmagenta:0x8b008b,darkgray:0xa9a9a9,cornfloewrblue:0xc000b0};
	Color.parse=function(str){
		str=str.toLowerCase();
		var r, g, b, a=1;
		var arr;
		if(arr=str.match(/^#[0-9a-z]{3}$/)){
			r=str.substr(1,1);
			r=parseInt(r,16);
			g=str.substr(2,2);
			g=parseInt(g,16);
			b=str.substr(3,3);
			b=parseInt(b,16);
			return new Color(r, g, b);
		}else if(arr=str.match(/^#[0-9a-z]{6}$/)){
			r=str.substr(1,2);
			r=parseInt(r,16);
			g=str.substr(3,2);
			g=parseInt(g,16);
			b=str.substr(5,2);
			b=parseInt(b,16);
			return new Color(r, g, b);
		}else if(arr=str.match(/^\s*(rgba?|hsla?)\s*\(([^\)]+)\)\s*$/)){
			var type=arr[1];
			var args=arr[2].split(",");
			switch(type){
				case "rgba":
					a=parsePercent(args[3]);
				case "rgb":
					r=parseInt(args[0]);
					g=parseInt(args[1]);
					b=parseInt(args[2]);
					return new Color(r, g, b, a);
				case "hsla":
					a=parsePercent(args[3]);
				case "hsl":
					r=parseInt(arr[1]);//h
					g=parsePercent(arr[2]);//g
					b=parsePercent(arr[3]);//l
					arr=Color.HSLtoRGB([r,g,b]);
					return new Color(arr[0], arr[1], arr[2], a);
			}
		}else if(str in Color.names){
			return new Color(Color.names[str]);
		}
		return NaN;
	};
	function parsePercent(n){
		if(n.indexOf){
			if(n.indexOf("%")<0){
				return parseFloat(n);
			}else{
				return parseFloat(n)/100;
			}
		}
		return n;
	}
	// RGB to HSL and HSL to RGB code from
	// https://github.com/less/less.js
	Color.RGBtoHSL=function(rgb){
		var r=rgb[0]/255, g=rgb[1]/255,	b=rgb[2]/255;
		var max=Math.max(r,g,b), min=Math.min(r,g,b);
		var h,s,l=(max+min)/2,d=max-min;
		if(max===min){
			h=s=0;
		}else{
			s=l>0.5?d/(2-max-min):d/(max+min);
			switch(max){
				case r:
					h=(g-b)/d+(g<b?6:0);
					break;
				case g:
					h=(b-r)/d+2;
					break;
				case b:
					h=(r-g)/d+4;
					break;
			}
			h/=6;
		}
		return [h*360,s,l];
	};
	Color.HSLtoRGB=function(hsl){
		var h=hsl[0], s=hsl[1], l=hsl[2];
		var m1, m2;
		function hue(h){
			h=h<0?h+1:(h>1?h-1:h);
			if(h*6<1){
				return m1+(m2-m1)*h*6;
			}else if(h*2<1){
				return m2;
			}else if(h*3<2){
				return m1+(m2-m1)*(2/3-h)*6;
			}else{
				return m1;
			}
		}
		h=(parseFloat(h)%360)/360;
		s=clamp(parseFloat(s));
		l=clamp(parseFloat(l));
		m2=l<=0.5?l*(s+1):l+s-l*s;
		m1=l*2-m2;
		return [hue(h+1/3)*255, hue(h)*255, hue(h-1/3)*255];
	};
	Color.rgb=function(r,g,b){
		return new Color(r,g,b);
	};
	Color.rgba=function(r,g,b,a){
		return new Color(r,g,b,a);
	};
	Color.hsl=function(h,s,l){
		var rgb=Color.HSLtoRGB([h,s,l]);
		return new Color(rgb[0],rgb[1],rgb[2]);
	};
	Color.hsla=function(h,s,l,a){
		var rgb=Color.HSLtoRGB([h,s,l]);
		return new Color(rgb[0],rgb[1],rgb[2],a);
	};

	Color.prototype.equals=function(color){
		if(!color) return false;
		var mine=this.rgb;
		var its=color.rgb;
		return mine[0]==its[0] && mine[1]==its[1] && mine[2]==its[2] && mine[3]==its[3] && mine.alpha==its.alpha;
	};
	Color.prototype.toHSL=function(){
		return Color.RGBtoHSL(this.rgb);
	};
	Color.prototype.toHSLA=function(){
		var c=Color.RGBtoHSL(this.rgb);
		c.alpha=this.alpha;
		return c;
	};
	Color.prototype.valueOf=function(){
		var channels = this.rgb;
		return (
			//((255-Math.round(channels[3]*256)+1) * 0x1000000) |
			(channels[0] * 0x10000) |
				(channels[1] * 0x100  ) |
				channels[2]
			);
	};
	Color.prototype.toHexString=function(){
		return "#"+this.valueOf().toString(16).padStart(6,"0");
	};
	Color.prototype.toRGBAString=function(){
		return "rgba("+this.rgb+")";
	};
	Color.prototype.toString=function(){
		if(this.alpha==1){
			return this.toHexString();
		}else{
			return this.toRGBAString();
		}
	};
	function clamp(val) {
		return Math.min(1, Math.max(0, val));
	}
	Color.prototype.lighten=function( amount, relative) {
		amount=parsePercent(amount);
		var hsl=this.toHSL();
		var l=hsl[2];
		if(relative){
			l+=l*amount/100;
		}else{
			l+=amount;
		}
		l=clamp(l);
		return Color.hsla(hsl[0],hsl[1],l,this.alpha);
	};
	Color.prototype.darken=function( amount, method){
		amount=parsePercent(amount);
		return this.lighten( -amount, method);
	};
	Color.prototype.saturate=function(amount,relative){
		amount=parsePercent(amount);
		var hsl=this.toHSL();
		var s=hsl[1];
		if(relative){
			s+=s*amount/100;
		}else{
			s+=amount;
		}
		s=clamp(s);
		return Color.hsla(hsl[0],s,hsl[2],this.alpha);
	};
	Color.prototype.desaturate=function(amount,relative){
		amount=parsePercent(amount);
		return this.saturate( -amount, relative);
	};
	Color.mix=function( color1, color2, weight) {
		if(!weight){
			weight=.5;
		}
		if(weight>1){
			weight=weight/100;
		}
		var p=weight;
		return new Color(avg(color1.rgb[0],color2.rgb[0],p), avg(color1.rgb[1],color2.rgb[1],p),avg(color1.rgb[2],color2.rgb[2],p), avg(color1.alpha,color2.alpha,p));
	};
	function avg(v1,v2,w1){
		var w2=1-w1;
		return v1*w1+v2*w2;
	}
	Color.prototype.spin=function(amount){
		amount=parsePercent(amount);
		var hsl=this.toHSL();
		var hue=(hsl[0]+amount)%360;
		var h=hue<0?360+hue:hue;
		return Color.hsla(h,hsl[1],hsl[2]);
	};
	if(typeof module=="object"){
		module.exports=Color;
	}else{
		window.Color=Color;
	}
})(this);