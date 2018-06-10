
var $=function(){
	return $.overload(arguments,this);
};
(function(){
	var rules=[];
	function ckeck(ckeckFunc,index){
		return ckeckFunc(this[index]);
	}
	function compare(x, y){//比较函数
		return x.checks.length-y.checks.length;
	}
	$.overload=function(checks,func,target){
		if(target){
			rules.push({
				'checks':checks,
				'func':func,
				'target':target
			});
			rules.sort(compare);
		}else{
			var args=checks;
			var thisVal=func;
			var i=rules.length;
			while(i--){
				var rule=rules[i];
				if(args.callee===rule.func){
					if(rule.checks.length>=args.length){
						if(rule.checks.every(ckeck,args)){
							return rule.target.apply(thisVal,args);
						}
					}
				}
			}
			return $;
		}
	};
})();
$.isArray=function(a){
	return Array.isArray(a);
};
$.isDate=function(obj){
	return Object.prototype.toString.call(obj)==='[object Date]';
};
$.isRegExp=function(obj){
	return Object.prototype.toString.call(obj)==='[object RegExp]';
};
$.isString=function(obj){
	return Object.prototype.toString.call(obj)==='[object String]';
};
$.isFunction=function(obj){
	return Object.prototype.toString.call(obj)==='[object Function]';
};
$.isNumber=function(obj){
	return Object.prototype.toString.call(obj)==='[object Number]';
};
$.is=function(obj,Clazz){
	obj=Object(obj);
	return obj instanceof Clazz;
};
$.isObject=function(obj){
	var type=typeof obj;
	if(type!=="object"){
		return false;
	}
	type=Object.prototype.toString.call(obj);
	switch(type){
		case '[object String]':
		case '[object Number]':
		case '[object Function]':
		case '[object Boolean]':
			return false;
	}
	return true;
};
$.isDefined=function(obj){
	return obj!==void 0;
};
$.isPlainObject=function(obj){
	var key;
	if(typeof obj !=="object"){
		return false;
	}
	if(obj.toString()!=='[object Object]'){
		return false;
	}
	var hasOwn=Object.prototype.hasOwnProperty;
	try{
		if(obj.constructor && obj.constructor!=Object){
			return false;
		}
	}catch(e){
		return false;
	}
	for( key in obj ){
		if(!hasOwn.call(obj,key)){
			return false;
		}
	}
	return true;
};
$.isArrayLike=function(obj){
	var length=obj.length;
	if(typeof length !="number" || length<0 || isNaN(length) || Math.ceil(length)!=length){
		return false;
	}
	return true;
};
$.isNumeric=function(obj){
	var n=parseFloat(obj);
	return !isNaN(n);
};
if(this.HTMLElement){
	$.isElement=function(obj){
		return obj instanceof HTMLElement;
	};
}else{
	$.isElement=function(obj){
		return obj?obj.nodeType===1:false;
	};
}
$.isDocument=function(obj){
	return obj===document;
};
var Sky=$;
Sky.support={};
(function(){
	var userAgent = navigator.userAgent.toLowerCase();
	Sky.browser={
		version:(userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [])[1],
		webkit:/webkit/.test( userAgent ),
		opera:/opera/.test( userAgent ),
		msie:/msie/.test( userAgent ) && !/opera/.test( userAgent ),
		firefox:/firefox/.test( userAgent ),
		safari:/safari/.test( userAgent ),
		chrome:/chrome/.test( userAgent ),
		android:/android/.test( userAgent ),
		ios:/(iphone|ipad|ipod)/.test( userAgent ),
		mobile:/mobile/.test( userAgent ),
		quirks:(document.compatMode == 'BackCompat')
	};
	var ie="ActiveXObject" in window;
	Sky.browser.ie5=ie&&!document.compatMode;//ie5及以下
	Sky.browser.ie6=ie&&!!document.compatMode&&!window.XMLHttpRequest;
	Sky.browser.ie7=ie&&!!window.XMLHttpRequest&&!document.querySelector;
	Sky.browser.ie8=ie&&!!document.querySelector&&!document.addEventListener;
	Sky.browser.ie9=ie&&!!document.addEventListener&&!window.atob;
	Sky.browser.ie10=ie&&!!window.atob&&!!window.attachEvent;
	Sky.browser.ie11=ie&&!!window.atob&&!window.attachEvent;
	if(Sky.browser.ie11){
		Sky.browser.ie=11;
	}else if(ie){
		Sky.browser.ie=parseInt(Sky.browser.version);
	}
})();
Sky.noop=function(){};

if(!({toString:null}).propertyIsEnumerable('toString')){
	Sky.dontEnums=["toString","toLocaleString","valueOf","hasOwnProperty", "isPrototypeOf","propertyIsEnumerable"];
	Sky.forIn=function(obj,fn){
		for(var key in obj) {
			if(!(obj instanceof Object)){
				if(key.startsWith("__") || key=="constructor"){
					continue ;
				}
			}
			if(fn.call(obj,obj[key],key)===false){
				return false;
			}
		}
		var nonEnumIdx=Sky.dontEnums.length;
		var proto=Object.getPrototypeOf(obj);
		//遍历nonEnumerableProps数组
		while(nonEnumIdx--){
			var prop=Sky.dontEnums[nonEnumIdx];
			if(prop in obj && obj[prop]!==proto[prop]){
				if(fn.call(obj,obj[prop],prop)===false){
					return false;
				}
			}
		}
		return true;
	};
	Sky.forOwn=function(obj,fn){
		var type=typeof obj;
		if(type=="unknow"){
			return true;
		}
		if(type!="object"){
			obj=Object(obj);
		}
		for(var key in obj) {
			if(!(obj instanceof Object)){
				if(key.startsWith("__") || key=="constructor"){
					continue ;
				}
			}
			if(Sky.hasOwn(obj,key)){
				if(fn.call(obj,obj[key],key)===false){
					return false;
				}
			}
		}
		for(var i=0;i<Sky.dontEnums.length;i++){
			var prop=Sky.dontEnums[i];
			if(Sky.hasOwn(obj,prop)){
				if(fn.call(obj,obj[prop],prop)===false){
					return false;
				}
			}
		}
		return true;
	};
	Sky.hasOwn=function(obj,key){
		if(!(key in obj)){
			return false;
		}
		var value=obj[key];
		if(typeof obj=="object" && !(obj instanceof Object)){
			if(Sky.isFunction(value)){
				return true;
			}
			return false;
		}
		return Object.prototype.hasOwnProperty.call(obj,key);
	};
}else{
	Sky.forIn=function(obj,fn){
		for(var key in obj) {
			if(fn.call(obj,obj[key],key)===false){
				return false;
			}
		}
		return true;
	};
	Sky.forOwn=function(obj,fn){
		for(var key in obj) {
			if(Object.prototype.hasOwnProperty.call(obj,key)){
				if(fn.call(obj,obj[key],key)===false){
					return false;
				}
			}
		}
		return true;
	};
	Sky.hasOwn=function(obj,key){
		return Object.prototype.hasOwnProperty.call(obj,key);
	};
}
Sky.getCookie=function(name){
	var arr=document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
	if(arr != null) return decodeURIComponent(arr[2]); return null;
};
Sky.setCookie=function(name,value){
	var path="/";
	var seconds;
	var domain;
	var expires;
	if(arguments.length>2){
		for(var i=2;i<arguments.length;i++){
			if(Sky.isNumber(arguments[i])){
				seconds=arguments[i];
			}else if(Sky.isString(arguments[i])){
				if(arguments[i].indexOf(".")>=0){
					domain=arguments[i];
				}else if(arguments[i].indexOf("/")>=0){
					path=arguments[i];
				}
			}
		}
	}
	if(value==null || seconds<=0) {
		value='';
		seconds=-2592000;
	}
	if(!isNaN(seconds)){
		expires=new Date();
		expires.setTime(expires.getTime() + seconds * 1000);
	}
	document.cookie=name+'='+encodeURIComponent(value)
		+(expires?'; expires='+expires.toGMTString():'')
		+'; path='+path
		+(domain?'; domain='+domain:'');
};
Sky.support.VBScript=false;
if(window.execScript){
	window.execScript([
		'Function alert(msg)',
		'msgbox msg',
		'End Function' //去除弹窗的图标
	].join('\n'), 'VBScript');
	if(typeof alert=="unknown"){
		Sky.support.VBScript=true;
	}
}
//开头补零
Sky.pad=function(value,width,chars){
	if(!chars){chars=" ";}
	if(Sky.isNumber(value)){
		chars="0";
	}
	value+='';
	return value.padStart(width,chars);
};
//清除HTML代码
Sky.escapeHtml=function(str) {
	return str.replace(/&/g,'&amp;')
		.replace(/</g,'&lt;')
		.replace(/>/g,'&gt;');
};
Sky.escapeAttribute=function(str,quot){
	var esc=Sky.escapeHtml(str);
	if(!quot || quot=='"'){
		return esc.replace(/"/g,'&quot;');
	}else{
		return esc.replaceAll(quot.charAt(0),'&#'+quot.charCodeAt(0)+";");
	}
};
(function(){
	var div=document.createElement('div');
	var htmlEscapes={
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#39;',
		'`': '&#96;'
	};
	Sky.escape=function(text){
		return text.replace(/[&<>"'`]/g,function(i){
			return htmlEscapes[i];
		});
	};
	Sky.unescape=function(html){
		div.innerHTML=html;
		return div.innerText || div.textContent ;
	};
})();
Sky.escapeString=function(str) {//from lodash
	var rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
	rx_escapable.lastIndex = 0;
	return rx_escapable.test(str)
		? str.replace(rx_escapable, function(a) {
		var meta = {
			"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r": "\\r",	"\"": "\\\"","\\": "\\\\"
		};
		var c = meta[a];
		return typeof c === "string"
			? c
			: "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
	}): str;
};
Sky.escapeRegExp=function(str){//from lodash
	if(str){
		var reRegExpChars = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g;
		reRegExpChars.lastIndex = 0;
		return (reRegExpChars.test(str))
			? str.replace(reRegExpChars, function(chr, leadingChar, whitespaceChar) {
			if (leadingChar) {
				var regexpEscapes = {
					'0': 'x30', '1': 'x31', '2': 'x32', '3': 'x33', '4': 'x34',
					'5': 'x35', '6': 'x36', '7': 'x37', '8': 'x38', '9': 'x39',
					'A': 'x41', 'B': 'x42', 'C': 'x43', 'D': 'x44', 'E': 'x45', 'F': 'x46',
					'a': 'x61', 'b': 'x62', 'c': 'x63', 'd': 'x64', 'e': 'x65', 'f': 'x66',
					'n': 'x6e', 'r': 'x72', 't': 'x74', 'u': 'x75', 'v': 'x76', 'x': 'x78'
				};
				chr = regexpEscapes[chr];
			} else if (whitespaceChar) {
				var stringEscapes = {
					'\\': '\\',
					"'": "'",
					'\n': 'n',
					'\r': 'r',
					'\u2028': 'u2028',
					'\u2029': 'u2029'
				};
				chr = stringEscapes[chr];
			}
			return '\\' + chr;
		})
			: str;
	}
	return "(?:)";
};
if(!Object.create){
	Object.create=function(proto){
		function F(){}
		F.prototype = proto;
		return new F();
	};
}
if(!Object.keys){
	Object.keys=function(obj){
		var result=[];
		Sky.forOwn(obj,function(value,key){
			result.push(key);
		});
		return result;
	};
}
if(!Object.assign){
	Object.assign=function(target, varArgs){
		if(target==null){
			throw 'Cannot convert undefined or null to object';
		}
		var to=Object(target);
		for(var i=1;i<arguments.length;i++){
			var obj=arguments[i];
			if(obj!=null){
				Sky.forOwn(obj,function(v,k){
					to[k]=v;
				});
			}
		}
	};
}
if(!Object.getPrototypeOf){
	if('__proto__' in Sky){
		Object.getPrototypeOf=function(object){
			return object.__proto__;
		};
	}else{
		Object.getPrototypeOf=function(object){
			var constructor=object.constructor;
			if(Sky.isFunction(constructor)){
				if(object!=constructor.prototype){
					return constructor.prototype;
				}else if('superclass' in constructor){
					return constructor.superclass.prototype;
				}
			}
			console.warn("cannot find Prototype");
			return Object.prototype;
		};
	}
}
Sky.support.defineProperty=!!Object.defineProperty && !!document.addEventListener;
if(Sky.support.__defineSetter__){
	Sky.support.defineProperty=true;
	if (!Object.defineProperty) {
		Object.defineProperty=function(obj, prop, descriptor){
			if(descriptor.get) obj.__defineGetter__(prop,descriptor.get);
			if(descriptor.set) obj.__defineSetter__(prop,descriptor.set);
		};
	}
}
if(!Array.from){
	Array.from=function(arrayLike, mapFn, thisArg){
		var arr=Array.prototype.slice.call(arrayLike);
		if(mapFn){
			arr=arr.map( mapFn, thisArg);
		}
		return arr;
	};
}
if(!Array.isArray){
	Array.isArray=function(obj){
		return Object.prototype.toString.call(obj)==='[object Array]';
	};
}
//判断一个元素在数组中的位置
if(!Array.prototype.indexOf){
	Array.prototype.indexOf=function(e,fromIndex){
		fromIndex=isNaN(fromIndex)?0:fromIndex;
		for(var i=fromIndex,j;i<this.length; i++){
			j=this[i];
			if(j===e){return i;}
		}
		return -1;
	};
}
if(!Array.prototype.lastIndexOf){
	Array.prototype.lastIndexOf = function(e, fromIndex) {
		fromIndex=isNaN(fromIndex)?this.length-1:fromIndex;
		for (var i=fromIndex,j; i<this.length; i--) {
			j=this[i];
			if(j===e){return i;}
		}
		return -1;
	};
}
if(!Array.prototype.findIndex){
	Array.prototype.findIndex = function(callback, thisArg) {
		for(var i=0,j; i<this.length; i++){
			j=this[i];
			var r=callback.call(thisArg,j,i,this);
			if(r){
				return i;
			}
		}
		return -1;
	};
}
if(!Array.prototype.find){
	Array.prototype.find = function(callback, thisArg) {
		var i=this.findIndex(callback, thisArg);
		if(i>=0){
			return this[i];
		}
	};
}
//遍历数组
if(!Array.prototype.forEach){
	Array.prototype.forEach =function(callback, thisArg){
		for(var i=0,j; i<this.length; i++){
			j=this[i];
			callback.call(thisArg,j,i,this);
		}
	};
}
if(!Array.prototype.map){
	Array.prototype.map = function(fn, context) {
		var arr = [];
		for (var k = 0, length = this.length; k < length; k++) {
			arr.push(fn.call(context, this[k], k, this));
		}
		return arr;
	};
}
if(!Array.prototype.filter){
	Array.prototype.filter = function(fn, context) {
		var arr = [];
		for (var k = 0, length = this.length; k < length; k++) {
			fn.call(context, this[k], k, this) && arr.push(this[k]);
		}
		return arr;
	};
}
if(!Array.prototype.some){
	Array.prototype.some = function(fn, context) {
		var passed = false;
		for (var k = 0, length = this.length; k < length; k++) {
			if (passed === true) break;
			passed = !!fn.call(context, this[k], k, this);
		}
		return passed;
	};
}
if(!Array.prototype.every){
	Array.prototype.every = function(fn, context) {
		var passed = true;
		for (var k = 0, length = this.length; k < length; k++) {
			if (passed === false) break;
			passed = !!fn.call(context, this[k], k, this);
		}
		return passed;
	};
}

(function(){
	/** 时间对象的格式化; **/
	/* eg:format="%Y-%m-%d %H:%M:%S"; */
	function pad2(number) {
		if(number<10){
			return '0'+number;
		}
		return number;
	}
	if (!Date.prototype.toLocaleFormat) {//部分浏览器支持
		Date.prototype.toLocaleFormat = function(format) {
			var Y=this.getFullYear();
			var M=pad2(this.getMonth()+1);
			var D=pad2(this.getDate());
			var h=pad2(this.getHours());
			var m=pad2(this.getMinutes());
			var s=pad2(this.getSeconds());
			var o={
				"%x":Y+"/"+M+"/"+D,
				"%X":h+":"+m+":"+s,
				"%Y":Y,
				"%y":Sky.pad(this.getYear()%100,2),
				"%m":M,
				"%e":this.getDate(),
				"%d":D,
				"%H":h,
				"%i":Sky.pad(this.getHours()%12,2),
				"%M":m,
				"%S":s,
				"%p":this.getHours()%12>1?"PM":"AM",
				"%%":"%"
			};
			o["%T"]=o["%X"];
			return format.replace(/%[xXTYymedHiMSp%]/g,function(word){
				for(var k in o){
					if(k==word){
						return o[k];
					}
				}
				return word;
			});
		};
	}
	if (!Date.prototype.toISOString){//部分浏览器支持
		Date.prototype.toISOString = function() {
			return this.getUTCFullYear()+
				'-'+pad2(this.getUTCMonth()+1)+
				'-'+pad2( this.getUTCDate() ) +
				'T'+pad2( this.getUTCHours() ) +
				':'+pad2( this.getUTCMinutes() ) +
				':'+pad2( this.getUTCSeconds() ) +
				'.'+Sky.pad(this.getUTCMilliseconds(),3)+'Z';
		};
	}
})();
if(!Date.prototype.toJSON){
	Date.prototype.toJSON=Date.prototype.toISOString;
}
if(new Date().toLocaleString().match(/[a-z]/i)){//谷歌浏览器，360用谷歌内核，会显示成英文(未考虑语言环境)
	Date.prototype.toLocaleString = function() {
		return this.toLocaleFormat("%Y-%m-%d %H:%M:%S");
	};
	Date.prototype.toLocaleDateString = function() {
		return this.toLocaleFormat("%Y-%m-%d");
	};
	Date.prototype.toLocaleTimeString = function() {
		return this.toLocaleFormat("%H:%M:%S");
	};
}
if(!Date.now){
	Date.now=function(){
		return new Date().getTime();
	};
}
//删除左右两端的空格
if(!String.prototype.trim){
	String.prototype.trim=function() {
		return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,'');
	};
}
if(!String.prototype.startsWith){
	String.prototype.startsWith=function(prefix,position){
		position=position?position:0;
		return this.slice(position, prefix.length) === prefix;
	};
}
if(!String.prototype.endsWith){
	String.prototype.endsWith=function(prefix,position){
		var length=prefix.length;
		position=position<length?position:this.length;
		return this.slice(position-length, position) === prefix;
	};
}
if(!String.prototype.includes) {
	String.prototype.includes = function(search, start) {
		if(typeof start!=='number'){
			start=0;
		}
		if(start+search.length>this.length){
			return false;
		}else{
			return this.indexOf(search, start)!==-1;
		}
	};
}
if(!String.prototype.repeat){
	String.prototype.repeat=function(count){
		if(count<0){
			throw 'RangeError repeat count must be non-negative';
		}
		if(count==Number.POSITIVE_INFINITY){
			throw 'RangeError repeat count must be less than infinity';
		}
		return new Array(count+1).join(this);
	};
}
if(!String.prototype.padStart){
	String.prototype.padStart=function(targetLength,padString){
		var x=targetLength-this.length;
		if(x<0) return this+"";
		if(!padString) padString=" ";
		return padString.repeat(Math.ceil(x/padString.length)).substr(0,x)+this;
	};
}
if(!String.prototype.padEnd){
	String.prototype.padEnd=function(targetLength,padString){
		var x=targetLength-this.length;
		if(x<0) return this+"";
		if(!padString) padString=" ";
		return this+padString.repeat(Math.ceil(x/padString.length)).substr(0,x);
	};
}
String.prototype.replaceAll=function(reallyDo, replaceWith, ignoreCase) {
	return this.replace(new RegExp(Sky.escapeRegExp(reallyDo), (ignoreCase ? "gi": "g")), replaceWith);
};
Math.log2 = Math.log2 || function(n){ return Math.log(n) / Math.log(2); };
Number.isNaN=Number.isNaN || function(value){
	return typeof value === "number" && isNaN(value);
};
Number.isInteger=Number.isInteger || function(value){
	return typeof value === "number" &&	isFinite(value) &&	Math.floor(value) === value;
};
if(!Function.prototype.bind){
	Function.prototype.bind=function(context){
		var self=this,args=Array.prototype.slice.call(arguments,1);
		return function(){
			return self.apply(context,args.concat(Array.from(arguments)));
		};
	};
}
if(!this.Map){
	Map=function(){
		this.items=[];
		this.size=0;
	};
	Map.prototype.clear=function(){
		this.items.splice(0,this.items.length);
		this.size=0;
	};
	Map.prototype["delete"]=function(key){
		var i=this.items.findIndex(function(item){
			return item[0]===key;
		});
		if(i>=0){
			var r=this.items[i];
			this.items.splice(i,1);
			this.size=this.items.length;
			return r;
		}
		return false;
	};
	Map.prototype.forEach=function(callbackfn,thisArg){
		for(var i=0,j;i<this.size; i++){
			j=this.items[i];
			callbackfn.call(thisArg,j[0],j[1],i,this);
		}
	};
	Map.prototype.get=function(key){
		var r=this.items.find(function(item){
			return item[0]===key;
		});
		if(r){
			return r[1];
		}
	};
	Map.prototype.has=function(key){
		return this.items.some(function(item){
			return item[0]===key;
		});
	};
	Map.prototype.set=function(key,value){
		var r=this.items.find(function(item){
			return item[0]===key;
		});
		if(r){
			r[1]=value;
		}else{
			this.items.push([key,value]);
		}
		this.size=this.items.length;
		return this;
	};
}
if(!Map.prototype.remove){
	Map.prototype.remove=Map.prototype['delete'];
}
if(!this.Set){
	Set=function(){
		this.items=[];
		this.size=0;
	};
	Set.prototype.has=function(value){
		return this.items.indexOf(value)>=0;
	};
	Set.prototype.add=function(value){
		if(!this.has(value)){
			this.items.push(value);
			this.size=this.items.length;
		}
	};
	Set.prototype['delete']=function(value){
		var i=this.items.indexOf(value);
		if(i>=0){
			this.items.splice(i,1);
			this.size=this.items.length;
			return true;
		}
		return false;
	};
	Set.prototype.clear=function(){
		this.items.splice(0,this.items.length);
		this.size=0;
	};
	Set.prototype.forEach=function(callback,thisArg){
		for(var i=0,j;i<this.size; i++){
			j=this.items[i];
			callback.call(thisArg,j,j,this);
		}
	};
	Set.prototype.toArray=function(){
		return this.items.slice(0);
	};
}
if(!Set.prototype.remove){
	Set.prototype.remove=Set.prototype['delete'];
}
if(!Set.prototype.toArray){
	Set.prototype.toArray=function(){
		var a=[];
		this.forEach(function(item){
			a.push(item);
		});
		return a;
	};
}
if(!Set.prototype.addAll){
	Set.prototype.addAll=function(data){
		if(data.forEach){
			data.forEach(function(item){
				this.add(item);
			},this);
		}
		return this;
	};
}
if(!Set.prototype.removeAll){
	Set.prototype.removeAll=function(data){
		if(data.forEach){
			data.forEach(function(item){
				this.remove(item);
			},this);
		}
		return this;
	};
}
if(!Set.prototype.retainAll){
	Set.prototype.retainAll=function(data){
		this.forEach(function(item){
			if(data.has){
				if(!data.has(item)) this.remove(item);
			}else if(data.indexOf){
				if(data.indexOf(item)<0) this.remove(item);
			}
		},this);
		return this;
	};
}
if(!Set.prototype.toArray){
	Set.prototype.toArray=function(){
		var r=[];
		this.forEach(function(item){
			r.push(item);
		});
		return r;
	};
}
if(!this.console){
	console={};
	if(this.Debug){
		console.log=console.info=console.error=console.warn=function(data){
			window.status=data;
			Debug.writeln(data);
		};
	}else{
		console.log=console.info=console.error=console.warn=function(data){
			window.status=data;
		};
	}
}
Sky.support.JSON=true;
if(!this.JSON){
	Sky.support.JSON=false;
	JSON={
		'stringify':function(obj){
			switch(obj){
				case null:
					return "null";
				case false:
				case true:
					return obj;
					break;
				default:
					var type=Object.prototype.toString.call(obj);
					switch(type){
						case '[object String]':
							return '"'+Sky.escapeString(obj)+'"';
						case '[object Number]':
							return isNaN(obj)?"null":obj.toString();
						case '[object Array]':
							return "["+obj.map(JSON.stringify).join(",")+"]";
						default:
							if(Sky.isFunction(obj.toJSON)){
								return JSON.stringify(obj.toJSON());
							}
							var items=[];
							Sky.forOwn(function(value,key){
								if(value!==void 0){
									if(!Sky.isFunction(value)){
										items.push('"'+Sky.escapeString(k)+'":'+JSON.stringify(value));
									}
								}
							});
							return "{"+items.join(",")+"}";
					}
			}
		},
		'parse':function(str){
			return eval('('+str+')');
		}
	};
}
Sky.support.DOMParser=true;
if(!this.DOMParser){
	Sky.support.DOMParser=false;
	DOMParser=function(){};
	DOMParser.prototype.parseFromString=function(xmlStr){
		var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async = "false";
		xmlDoc.loadXML(xmlStr);
		return xmlDoc;
	};
}
Sky.support.XMLHttpRequest=true;
if(!this.XMLHttpRequest){
	Sky.support.XMLHttpRequest=false;
	XMLHttpRequest=function(){
		if(XMLHttpRequest.progid){
			return new ActiveXObject(XMLHttpRequest.progid);
		}
		var versions=["Microsoft.XMLHTTP","MSXML2.XMLHTTP","Msxml2.XMLHTTP.5.0"];
		var i=versions.length;
		while(i--){
			try{
				var progid=versions[i];
				var request=new ActiveXObject(progid);
				if(request){
					XMLHttpRequest.progid=progid;
					return request;
				}
			}catch(e){}
		}
	};
}
if(!this.URLSearchParams){
	URLSearchParams=function(paramsString){
		this._data=new Array();
		if(paramsString){
			if(paramsString.indexOf("?")==0){
				paramsString=paramsString.substr(1,paramsString.length-1);
			}
			var pairs=paramsString.split("&");
			for(var i=0;i<pairs.length;i++){
				var arr=pairs[i].split("=");
				if(arr.length==2){
					this._data.push([arr[0],arr[1]]);
				}else if(arr.length>2){
					var key=arr[0];
					arr.shift();
					this._data.push(key,arr.join("="));
				}
			}
		}
	};
	URLSearchParams.prototype.append=function(key,value){
		this._data.push([key,value]);
	};
	URLSearchParams.prototype.get=function(key){
		var item=this._data.find(function(item){
			return item[0]==key;
		});
		if(item) return item[1];
		return null;
	};
	URLSearchParams.prototype.getAll=function(key){
		return this._data.filter(function(item){
			return item[0]==key;
		}).map(function(item){
			return item[1];
		});
	};
	URLSearchParams.prototype.set=function(key,value){
		var item=this._data.find(function(item){
			return item[0]==key;
		});
		if(item){
			item[1]=value;
		}else{
			this.append(key,value);
		}
	};
	URLSearchParams.prototype['delete']=function(key){
		this._data=this._data.filter(function(item){
			return item[0]!=key;
		});
	};
	URLSearchParams.prototype.has=function(key){
		return this._data.some(function(item){
			return item[0]==key;
		});
	};
	URLSearchParams.prototype.toString=function(key){
		return this._data.map(function(item){
			return encodeURIComponent(item[0])+"="+encodeURIComponent(item[1]);
		}).join("&");
	};
}
if(!URLSearchParams.prototype.remove){
	URLSearchParams.prototype.remove=URLSearchParams.prototype['delete'];
}
if(!URLSearchParams.prototype.sort){
	URLSearchParams.prototype.sort=function(key){
		return this._data.sort(function(a,b){
			return a[0] > b[0];
		});
	};
}
document.head=document.getElementsByTagName("head")[0];
/** 判断一个节点后代是否包含另一个节点 **/
if(this.Node && Node.prototype && !Node.prototype.contains){
	Node.prototype.contains=function(arg){
		return !!(this.compareDocumentPosition(arg) & 16);
	}
}
if(!document.contains){
	document.contains=function(ele){
		var i,arr=document.all;
		for(i=0;i<arr.length;i++){
			if(arr[i]===ele){
				return true;
			}
		}
		return false;
	};
}
if(this.HTMLElement && !document.head.children) {
	HTMLElement.prototype.__defineGetter__("children", function() {
		var a=[];
		for(var i=0; i<this.childNodes.length; i++){
			var n=this.childNodes[i];
			if(n.nodeType==1){
				a.push(n);
			}
		}
		return a;
	});
}
if(!window.execScript){
	window.execScript=function(script,lang) {
		if(lang && lang.toUpperCase().indexOf("VB")>=0){
			return ;
		}
		window["eval"].call( window,script);
	};
}

var StringBuilder;
if(!-[1,]){//ie6-8
	StringBuilder=function() {
		this._source=new Array();
	};
	StringBuilder.prototype.append = function(str){
		this._source.push(str);
	}
	StringBuilder.prototype.toString = function(){
		return this._source.join("");
	}
}else{
	StringBuilder=function() {
		this._source="";
	};
	StringBuilder.prototype.append = function(str){
		this._source+=str;
	}
	StringBuilder.prototype.toString = function(){
		return this._source;
	}
}
function DateFormat(pattern){
	this.pattern=pattern;
}
DateFormat.prototype.format=function(date){
	return this.pattern.replace(/yyyy/g,date.getFullYear())
		.replace(/yy/g,Sky.pad(date.getYear()%100,2))
		.replace(/MM/g,Sky.pad(date.getMonth()+1,2))
		.replace(/M/g,date.getMonth()+1)
		.replace(/dd/g,Sky.pad(date.getDate(),2))
		.replace(/d/g,date.getDate())
		.replace(/HH/g,Sky.pad(date.getHours(),2))
		.replace(/H/g,date.getHours())
		.replace(/hh/g,date.getHours()<13?date.getHours():Sky.pad(date.getHours()%12,2))
		.replace(/h/g,date.getHours()<13?date.getHours():(date.getHours()%12))
		.replace(/mm/g,Sky.pad(date.getMinutes(),2))
		.replace(/m/g,date.getMinutes())
		.replace(/ss/g,Sky.pad(date.getSeconds(),2))
		.replace(/s/g,date.getSeconds())
		.replace(/a{1,3}/g,date.getHours()%12>1?"PM":"AM")
		.replace(/S{3}/g,Sky.pad(date.getMilliseconds(),3));
};
DateFormat.prototype.parse=function(dateString){
	var reg1=/(yyyy|yy|MM|M|dd|d|HH|H|hh|h|mm|m|ss|s|aaa|a|SSS)/g;
	var keys=this.pattern.match(reg1);
	if(!keys){
		return dateString;
	}
	var reg2Text=Sky.escapeRegExp(this.pattern).replace(reg1,function(word){
		if(word=="a"){
			return "(PM|AM)";
		}
		return "(\\d{"+word.length+"})";
	});
	reg2Text="^"+reg2Text+"$";
	var reg2=new RegExp(reg2Text);
	var values=dateString.match(reg2);
	if(!values) throw "ParseException";
	var date=new Date();
	var a12=false;
	var h12=false;
	for(var i=0;i<keys.length;i++){
		var key=keys[i];
		var value;
		if(!key.startsWith("a")){
			value=parseInt(values[i+1]);
			switch(key){
				case "yyyy":
					date.setFullYear(value);
					break;
				case "yy":
					date.setYear(value+Math.floor(date.getYear()/100)*100);
					break;
				case "MM":
				case "M":
					date.setMonth(value-1);
					break;
				case "dd":
				case "d":
					date.setDate(value);
					break;
				case "HH":
				case "H":
					date.setHours(value);
					h12=false;
					break;
				case "hh":
				case "h":
					h12=true;
					if(a12 && value<12){
						date.setHours(value+12);
					}else{
						date.setHours(value);
					}
					break;
				case "mm":
				case "m":
					date.setMinutes(value);
					break;
				case "ss":
				case "s":
					date.setSeconds(value);
					break;
				case "SSS":
					date.setMilliseconds(value);
					break;
				default:
			}
		}else{
			value=values[i+1];
			if(value=="PM" || value=="下午"){
				a12=true;
				if(h12){
					var h=date.getHours();
					if(h<12){
						date.setHours(h+12);
					}
				}
			}
		}
	}
	return date;
};
DateFormat.format=function(date){
	return date.toLocaleFormat("%Y/%m/%d %H:%M:%S");
};
DateFormat.parse=function(str){
	var d=new Date(str);
	if(isNaN(d)){
		d=new Date(str.replace(/\-/g,"/"));
		if(isNaN(d)){
			throw "ParseException";
		}
	}
	return d;
};
if(!this.Promise){
	(function(global){
		var PENDING = 'pending';
		var SEALED = 'sealed';
		var FULFILLED = 'fulfilled';
		var REJECTED = 'rejected';

// async calls
		var asyncSetTimer = typeof setImmediate !== 'undefined' ? setImmediate : setTimeout;
		var asyncQueue = [];
		var asyncTimer;

		function asyncFlush(){
			// run promise callbacks
			for (var i = 0; i < asyncQueue.length; i++)
				asyncQueue[i][0](asyncQueue[i][1]);
			// reset async asyncQueue
			asyncQueue = [];
			asyncTimer = false;
		}
		function asyncCall(callback, arg){
			asyncQueue.push([callback, arg]);
			if (!asyncTimer){
				asyncTimer = true;
				asyncSetTimer(asyncFlush, 0);
			}
		}
		function invokeResolver(resolver, promise) {
			function resolvePromise(value) {
				resolve(promise, value);
			}
			function rejectPromise(reason) {
				reject(promise, reason);
			}
			try {
				resolver(resolvePromise, rejectPromise);
			} catch(e) {
				console.error(e);
				rejectPromise(e);
			}
		}
		function invokeCallback(subscriber){
			var owner = subscriber.owner;
			var settled = owner.state_;
			var value = owner.data_;
			var callback = subscriber[settled];
			var promise = subscriber.then;
			if (typeof callback === 'function'){
				settled = FULFILLED;
				try {
					value = callback(value);
				} catch(e) {
					console.error(e);
					reject(promise, e);
				}
			}
			if (!handleThenable(promise, value)){
				if (settled === FULFILLED)
					resolve(promise, value);

				if (settled === REJECTED)
					reject(promise, value);
			}
		}
		function handleThenable(promise, value) {
			var resolved;
			try {
				if (promise === value)
					throw new TypeError('A promises callback cannot return that same promise.');

				if (value && (typeof value === 'function' || typeof value === 'object')){
					var then = value.then;  // then should be retrived only once
					if (typeof then === 'function'){
						then.call(value, function(val){
							if (!resolved){
								resolved = true;
								if (value !== val)
									resolve(promise, val);
								else
									fulfill(promise, val);
							}
						}, function(reason){
							if (!resolved){
								resolved = true;
								reject(promise, reason);
							}
						});
						return true;
					}
				}
			} catch (e) {
				if (!resolved)
					reject(promise, e);
				return true;
			}
			return false;
		}
		function resolve(promise, value){
			if (promise === value || !handleThenable(promise, value))
				fulfill(promise, value);
		}
		function fulfill(promise, value){
			if (promise.state_ === PENDING){
				promise.state_ = SEALED;
				promise.data_ = value;
				asyncCall(publishFulfillment, promise);
			}
		}
		function reject(promise, reason){
			if (promise.state_ === PENDING){
				promise.state_ = SEALED;
				promise.data_ = reason;

				asyncCall(publishRejection, promise);
			}
		}
		function publish(promise) {
			var callbacks = promise.then_;
			promise.then_ = undefined;
			for (var i = 0; i < callbacks.length; i++) {
				invokeCallback(callbacks[i]);
			}
		}
		function publishFulfillment(promise){
			promise.state_ = FULFILLED;
			publish(promise);
		}
		function publishRejection(promise){
			promise.state_ = REJECTED;
			publish(promise);
		}
		function Promise(resolver){
			if (typeof resolver !== 'function')
				throw new TypeError('Promise constructor takes a function argument');
			if (this instanceof Promise === false)
				throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
			this.then_ = [];
			invokeResolver(resolver, this);
		}
		Promise.prototype = {
			constructor: Promise,
			state_: PENDING,
			then_: null,
			data_: undefined,
			then: function(onFulfillment, onRejection){
				var subscriber = {
					owner: this,
					then: new this.constructor(Sky.noop),
					fulfilled: onFulfillment,
					rejected: onRejection
				};
				if (this.state_ === FULFILLED || this.state_ === REJECTED){
					// already resolved, call callback async
					asyncCall(invokeCallback, subscriber);
				}else{
					this.then_.push(subscriber);
				}
				return subscriber.then;
			}
		};
		global.Promise=Promise;
	})(this);
	Promise.all=function(promises){
		if (!Sky.isArray(promises)) {
			throw new TypeError('You must pass an array to all.');
		}
		return new Promise(function(resolve,reject){
			if(promises.length==0) return resolve(new Array());
			var result=new Array(promises.length);
			var c=0;
			promises.forEach(function(one,index){
				if(one instanceof Promise){
					one.then(function(data){
						c++;
						result[index]=data;
						if(c>=promises.length){
							resolve(result);
						}
					},function(data){
						reject(data);
					});
				}else{
					c++;
					result[index]=one;
					if(c>=promises.length){
						resolve(result);
					}
				}
			});
		});
	};
	Promise.race=function(promises){
		if (!Array.isArray(promises)) {
			throw new TypeError('You must pass an array to all.');
		}
		return new Promise(function(resolve,reject){
			promises.forEach(function(one){
				one.then(function(){
					resolve();
				},function(){
					reject();
				});
			});
		});
	};
	Promise.resolve=function(arg){
		return new Promise(function(resolve,reject){
			resolve(arg)
		});
	};
	Promise.reject=function(arg){
		return Promise(function(resolve,reject){
			reject(arg)
		});
	};
}/* 这个polyfill只适合解析URL，
 * URL对象创建后，属性修改，其他属性不会变化
 * 如果需要的话，用scenario文件夹的那个polyfill
  * */
try{
	if(new URL(location.href).href){
		Sky.support.URL=true;
	}else{
		Sky.support.URL=false;
	}
}catch(e){
	Sky.support.URL=false;
}
if(!Sky.support.URL){
	URL=function(relativePath, absolutePath){
		var path,arr;
		var pattern=/^[a-zA-Z]+:/;
		if(arr=relativePath.match(pattern)){
			this.href=relativePath;
			this.protocol=arr[0];
			path=relativePath.replace(pattern,"");
			pattern=/^\/*([^\/]+)/;
			var host=path.match(pattern)[1];
			path=path.replace(pattern,"");
			arr=host.split("@");
			if(arr.length>1){
				this.host=arr[1];
				arr=arr[0].split(":");
				if(arr.length>1){
					this.username=arr[0];
					this.password=arr[1];
				}else{
					this.username=arr[0];
				}
			}else{
				this.username="";
				this.password="";
				this.host=host;
			}
		}else if(absolutePath){
			var absInfo=absolutePath.indexOf?new URL(absolutePath):absolutePath;
			this.protocol=absInfo.protocol;
			this.hostname=absInfo.hostname;
			this.host=absInfo.host;
			this.origin=absInfo.origin;
			this.port=absInfo.port;
			this.username=absInfo.username || "";
			this.password=absInfo.password || "";
			this.pathname=absInfo.pathname;
			if(relativePath.startsWith("/")){
				path=relativePath;
			}else if(relativePath.startsWith("../")){
				path=absInfo.pathname+relativePath;
				pattern=/[^\/]+\/\.\.\//;
				while(pattern.test(path)){
					path=path.replace(pattern,"");
				}
				path=path.replace(/^(\/\.\.)+/,"");
			}else{
				if(relativePath.startsWith("#")){
					this.search=absInfo.search;
					this.hash=relativePath;
					this.href=absInfo.href.replace(/#.*$/,this.hash);
					return ;
				}else if(relativePath.startsWith("?")){
					path=absInfo.pathname+relativePath;
				}else{
					path=absInfo.pathname.replace(/[^\/]*$/,"")+relativePath.replace(/^\.\//,"");
				}
			}
		}else{
			throw "SYNTAX_ERROR";
		}
		pattern=/^[^#]*/;
		this.hash=path.replace(pattern,"");
		arr=path.match(pattern);
		path=arr[0];
		pattern=/^[^\?]*/;
		this.search=path.replace(pattern,"");
		arr=path.match(pattern);
		this.pathname=arr[0];

		pattern=/(.*):(\d+)$/;
		arr=this.host.match(pattern);
		this.port="";
		if(arr){
			this.hostname=arr[1];
			if(arr[2]!="80"){
				this.port=arr[2];
			}
		}else{
			this.hostname=this.host;
		}
		this.origin=this.protocol+"//"+this.host;
		var user=this.username;
		if(user){
			if(this.password){
				user+=":"+this.password;
			}
			user+="@";
		}
		this.href=this.protocol+"//"+user+this.host+this.pathname+this.search+this.hash;
	};
}
Sky.support.localStorage=true;
if(!this.localStorage){
	Sky.support.localStorage=false;
	localStorage=new function(){
		var ele=document.createElement("localStorage");
		if(ele.addBehavior){
			ele.addBehavior("#default#userData");
			document.head.appendChild(ele);
			this.getItem=function(key){
				ele.load("localStorage");
				return ele.getAttribute(key);
			};
			this.setItem=function(key,value){
				ele.setAttribute(key,value+"");
				ele.save("localStorage");
			};
			this.removeItem=function(key){
				ele.removeAttribute(key);
				ele.save("localStorage");
			};
		}
	}();
}
Sky.support.sessionStorage=true;
if(!this.sessionStorage){
	Sky.support.sessionStorage=false;
	sessionStorage=new function(){
		var ele=document.createElement("sessionStorage");
		var sessionId=Sky.getCookie("JSESSIONID");
		if(!sessionId){
			sessionId=Math.random()+"";
			Sky.setCookie("JSESSIONID",sessionId);
		}
		if(ele.addBehavior){
			ele.addBehavior("#default#userData");
			var head=document.documentElement.firstChild;
			head.appendChild(ele);
			this.getItem=function(key){
				ele.load(sessionId);
				return ele.getAttribute(key);
			};
			this.setItem=function(key,value){
				ele.setAttribute(key,value+"");
				ele.save(sessionId);
			};
			this.removeItem=function(key){
				ele.removeAttribute(key);
				ele.save(sessionId);
			};
		}
	}();
}
Sky.ajax=function(options){
	var targetUrl=options.url;
	var success=options.success;
	var error=options.error;
	var dataType=options.dataType?options.dataType:'auto';
	var complete=options.complete;
	var xhr=new XMLHttpRequest();
	if(options.timeout) xhr.timeout=options.timeout;
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 ) {
			if(xhr.status == 200 || xhr.status==0){//本地访问为0
				var returnType=xhr.getResponseHeader("Content-Type");
				if(dataType=="auto" && returnType){
					if(returnType.match(/\/json/i)){
						dataType="JSON";
					}else if(returnType.match(/\/xml/i)){
						dataType="XML";
					}
				}
				if(dataType.toUpperCase() == 'XML') {
					if(!xhr.responseXML || !xhr.responseXML.lastChild || xhr.responseXML.lastChild.localName == 'parsererror') {
						if(error) error.call(xhr,xhr.responseText);
					} else {
						success.call(xhr,xhr.responseXML.lastChild);
					}
				}else if(dataType.toUpperCase() == 'JSON') {
					var data;
					try {
						data=JSON.parse(xhr.responseText);
					}catch(err) {
						if(error) error.call(xhr,xhr.responseText);
					}
					if(data) success.call(xhr,data);
				}else{
					success.call(xhr,xhr.responseText);
				}
			}else if(error){
				error.call(xhr,xhr.responseText);
			}
			if(complete) complete.call(xhr,xhr.responseText);
		}
	};
	if(options.type && options.type.toUpperCase()=="POST"){
		var contentType=options.contentType;
		var data=options.data;
		xhr.open('POST', targetUrl,options.async!==false);
		xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		if(data){
			if(Sky.isPlainObject(data) || data instanceof Map){
				xhr.setRequestHeader('Content-Type',contentType || 'application/x-www-form-urlencoded');
				xhr.send(Sky.buildQuery(data));
			}else{//字符串 ， 二进制流 ， 文件等
				if(contentType){
					contentType && xhr.setRequestHeader('Content-Type',contentType);
				}else if(Sky.isString(data)){
					xhr.setRequestHeader('Content-Type','text/plain');
				}
				xhr.send(data);
			}
		}else{
			xhr.send(null);
		}
	}else{
		xhr.open('GET',targetUrl,options.async!==false);
		xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		xhr.send(null);
	}
};
Sky.get=function(targetUrl,success,datatype,error){
	Sky.ajax({
		'url' : targetUrl,
		'type' : "GET",
		'dataType' : datatype,
		'success' : success,
		'error' : error
	});
};
Sky.ajax.get=function(targetUrl,datatype){
	return new Promise(function(resolve, reject){
		Sky.ajax({
			'url' : targetUrl,
			'type' : "GET",
			'dataType' : datatype,
			'success' : function(){
				resolve();
			},
			'error' : function(){
				reject();
			}
		});
	});
};
Sky.post=function(targetUrl,data,success,datatype,error){
	Sky.ajax({
		'url' : targetUrl,
		'type' : "POST",
		'data' : data,
		'dataType' : datatype,
		'success' : success,
		'error' : error
	});
};
Sky.ajax.post=function(targetUrl,data,dataType,contentType){
	return new Promise(function(resolve, reject){
		Sky.ajax({
			'url' : targetUrl,
			'type' : "POST",
			'data' : data,
			'dataType' : dataType,
			'contentType':contentType,
			'success' : function(){
				resolve();
			},
			'error' : function(){
				reject();
			}
		});
	});
};
Sky.getJSONP=function(url, callback){
	var cbname="cb"+Sky.id();
	if(url.indexOf("=?")!=-1){
		url=url.replace("=?","="+cbname);
	}else{
		url+=cbname;
	}
	var script=document.createElement("script");
	if(document.addEventListener()){
		window[cbname]=function(response){
			try{
				callback(response);
			}finally{
				delete window[cbname];
				script.parentNode.removeChild(script);
			}
		};
	}else{
		window[cbname]=function(response){
			try{
				callback(response);
			}finally{
				window[cbname]=undefined;
				script.parentNode.removeChild(script);
			}
		};
	}
	script.src=url;
	document.body.appendChild(script);
};
Sky.getScript=function(src,func,charset){
	var script=document.createElement('script');
	if(!charset){charset="UTF-8"};
	script.charset=charset;
	script.src=src;
	script.async=true;
	if(func){
		var event='onreadystatechange';
		if(event in script){
			script.attachEvent(event,function(){
				if(script.readyState=='loaded'){
					document.head.appendChild(script);
				}else if(script.readyState=='complete'){
					script.detachEvent(event,arguments.callee);
					var evt=window.event;
					//evt.target=evt.currentTarget=evt.srcElement;
					func.call(script,evt);
				}
			});
		}else{
			if('onafterscriptexecute' in script){
				script.onafterscriptexecute=func;
			}else{
				script.onload=func;
			}
			document.head.appendChild(script);
		}
	}else{
		document.head.appendChild(script);
	}
	return script;
};
(function(){
	Sky.support.getCurrentPath=true;
	Sky.support.getCurrentScript=true;
	if("currentScript" in document){//最新浏览器
		Sky.getCurrentScript=function(){
			return document.currentScript;
		};
	}else{
		var currentScript;
		Sky.getCurrentScript=function(){//IE
			var nodes=document.getElementsByTagName('SCRIPT');
			var i=nodes.length;
			while(i--){
				var node=nodes[i];
				if(node.readyState==="interactive") {
					return node;
				}
			}
		};
		currentScript=Sky.getCurrentScript();
		if(!currentScript){//非IE的低版本
			try{
				throw new Error('get stack');
			}catch(e){
				var stackHandler={
					'stack':[
						/^@(.*):\d+$/,// Firefox
						/^\s+at (.*):\d+:\d+$/,//Chrome
						/^\s+at [^\(]*\((.*):\d+:\d+\)$/ //IE11
					],
					'stacktrace':[
						/\(\) in\s+(.*?\:\/\/\S+)/m//opera
					]
				};
				var stackResult=handleStack(e,stackHandler);
				if(stackResult){
					Sky.getCurrentPath=function(){
						try{
							throw new Error('get stack');
						}catch(e){
							var arr=getLastStack(e[stackResult.name]).match(stackResult.pattern);
							if(arr && arr[1]!=location.href){
								return arr[1];
							}
						}
					};
					//同时加载多个相同的js会有问题
					Sky.support.getCurrentScript=false;
					Sky.getCurrentScript=function(){
						var nodes=(Sky.isReady?document.head:document).getElementsByTagName('SCRIPT');
						var i=nodes.length;
						var currentPath=Sky.getCurrentPath();
						if(currentPath){
							while(i--){
								var node=nodes[i];
								if(new URL(node.src,location).href==currentPath) {
									return node;
								}
							}
						}else{
							return nodes[nodes.length-1];
						}
					};
				}else{//同时加载多个js会有问题
					Sky.support.getCurrentScript=false;
					Sky.support.getCurrentPath=false;
					Sky.getCurrentScript=function(){
						var nodes=(Sky.isReady?document.head:document).getElementsByTagName('SCRIPT');
						return nodes[nodes.length-1];
					};
				}
			}
		}
	}
	if(!Sky.getCurrentPath){
		Sky.getCurrentPath=function(){
			var currentScript=Sky.getCurrentScript();
			return new URL(currentScript.src,location).href;
		};
	}
	function getLastStack(stack){
		var stacks=stack.trim().split("\n");;
		return stacks[stacks.length-1];
	}
	function handleStack(e,stackHandler){
		for(var name in stackHandler){
			var stacks=e[name];
			if(stacks){
				var patterns=stackHandler[name];
				var stack=getLastStack(stacks);
				var i=patterns.length;
				while(i--){
					var pattern=patterns[i];
					if(pattern.test(stack)){
						return {'name':name,'pattern':pattern};
					}
				}
			}
		}
	}
})();
Sky.later=function(fn){
	setTimeout(fn,0);
};
Sky.clearSelect="getSelection" in window ? function(){
	window.getSelection().removeAllRanges();
} : function(){
	document.selection.empty();
};
Sky.addFavorite=function(sURL, sTitle){
	try{
		window.external.addFavorite(sURL, sTitle);
	}catch (e){
		try{
			window.sidebar.addPanel(sTitle, sURL, "");
		}catch (e){
			if(Sky.browser.moblie){
				alert("请点击菜单上的“☆”加入收藏");
			}else{
				alert("\u52a0\u5165\u6536\u85cf\u5931\u8d25\uff0c\u8bf7\u4f7f\u7528Ctrl+D\u8fdb\u884c\u6dfb\u52a0");
			}
		}
	}
};
Sky.setHome=function(ele,url){
	ele.onclick=function(){
		try{
			this.style.behavior='url(#default#homepage)';
			this.setHomePage(url);
			return false;
		}catch(e){
			if('netscape' in window){
				try{
					netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
				}catch(e){
					alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
					return false;
				}
			}
		}
	};
};
Sky.copyToClipboard=function(txt){
	if(window.clipboardData){
		try{
			window.clipboardData.setData("Text",txt);
			return ;
		}catch(e){
		}
	}
	var tip=Sky.browser.moblie?"长按复制到剪贴板：":"Ctrl+C复制到剪贴板：";
	prompt(tip,txt);
};
//document.getElementById("text").select();
//document.execCommand("copy",false,null);
//获取字符串占位长度
Sky.strlen=function(str){
	var len=0;
	for(var i = 0; i < str.length; i++){
		if (str.charCodeAt(i) > 127 || str.charCodeAt(i) < 0){
			len+=2;
		}else{
			len++;
		}
	}
	return len;
};
//截取字符串占位长度
Sky.trunc=function(str,len,replaceStr){
	var relen=Sky.strlen(replaceStr);
	if(relen>len){
		for (var i = relen.length-1; i >= 0; i--){
			if (relen.charCodeAt(i) > 127 || relen.charCodeAt(i) < 0){
				len-=2;
			}else{
				len--;
			}
			if(len<0){
				i++;
				return replaceStr.substr(i,replaceStr.length-i);
			}
		}
	}else{
		len-=relen;
		var p=0;
		for (var i = 0; i < str.length; i++){
			if (str.charCodeAt(i) > 127 || str.charCodeAt(i) < 0){
				p+=2;
			}else{
				p++;
			}
			if(p>len){
				return str.substring(0,i)+replaceStr;
			}
		}
		return str;
	}
};
Sky.parseQuery=function(str){
	var arr;
	if(str.indexOf('?')!=-1){
		arr=str.split("?");
		str=arr[arr.length-1];
	}
	var o = new Object();
	var strs = str.split("&");
	for(var i = 0; i < strs.length; i ++) {
		arr=strs[i].split("=");
		if(arr.length!=2) break ;
		var key=arr[0],value=decodeURIComponent(arr[1]),name,k,v;
		if(arr=key.match(/(.*)\[\]$/)){
			name=arr[1];
			v=o[name];
			if(!v){
				o[name]=v=[];
			}
			v.push(value);
		}else if(arr=key.match(/(.*)\[([^\]]+)\]$/)){
			name=arr[1];
			k=arr[2];
			v=o[name];
			if(!v){
				o[name]=v={};
			}
			v[k]=value;
		}else{
			o[key]=value;
		}
	}
	return o;
};
Sky.buildQuery=function(obj){
	var s='';
	if(obj instanceof Map){
		obj.forEach(fn);
	}else{
		Sky.forOwn(obj,fn);
	}
	function fn(value,key){
		if(value.toJSON) value=value.toJSON();
		if(value.forEach){
			value.forEach(function(value){
				s=s+key+'[]='+encodeURIComponent(value)+'&';
			});
		}else if(Sky.isObject(value)){
			Sky.forOwn(value,function(v,k){
				s=s+key+'['+k+']='+encodeURIComponent(v)+'&';
			});
		}else{
			s=s+key+'='+encodeURIComponent(value)+'&';
		}
	}
	return s.substring(0,s.length-1);
};
Sky.extend=function(){//扩展对象
	var args=arguments;
	if(args.length==0) return;
	if(args.length==1) return args[0];
	var temp=args[0]==true?args[1]:args[0]; //调用复制对象方法
	for (var n=args[0]==true?2:1;n<args.length;n++){
		for(var i in args[n]){
			if(Sky.hasOwn(args[n],i)){
				if(args[n][i]!=null && args[0]==true && Sky.isObject(args[n][i]) && Sky.isObject(temp[i])){
					temp[i]=Sky.extend(true,temp[i],args[n][i]);
					//temp[i] = args[n][i];
				}else{
					temp[i] = args[n][i];
				}
			}
		}
	}
	return temp;
};
Sky.apply=function(obj,config){
	console.warn("Deprecated. use Object.assign");
	Sky.forIn(config,function(v,k){
		obj[k]=v;
	});
	return obj;
};
Sky.applyIf=function(obj,config){
	Sky.forIn(config,function(v,k){
		if(!(k in obj)){
			obj[k]=v;
		}
	});
	return obj;
};
Sky.times=function(n,iteratee,thisArg){
	if(n<1){
		return [];
	}
	var index = -1,
		result = Array(n);
	while (++index < n) {
		result[index] = iteratee.apply(this,thisArg);
	}
	return result;
};
Sky.findIndex=function(arr,key,value){
	for(var i=0; i<arr.length; i++){
		if(arr[i][key]===value){return i;}
	}
	return -1;
};
Sky.findLastIndex=function(arr,key,value){
	for(var i=arr.length-1; i>=0; i--){
		if(arr[i][key]===value){return i;}
	}
	return -1;
};
Sky.find=function(arr,key,value){
	for(var i=0; i<arr.length; i++){
		if(arr[i][key]===value){return arr[i];}
	}
};
Sky.findLast=function(arr,key,value){
	for(var i=arr.length-1; i>=0; i--){
		if(arr[i][key]===value){return value;}
	}
};
Sky.shuffle=function(arr){
	var copyArr=arr.slice();
	var ubound=arr.length-1;
	for(var i=0; i<ubound; i++){
		var r=Sky.random(0,ubound);
		var tmp=copyArr[r];
		copyArr[r]=copyArr[i];
		copyArr[i]=tmp;
	}
	return copyArr;
};
Sky.sortBy=function(arr,key){
	return arr.sort(function(a,b){
		return a[key] > b[key];
	});
};
Sky.pluck=function(arr,key){
	return arr.map(function(item){
		return item[key];
	});
};
Sky.sortedIndex=function(arr,value){
	for(var i=0; i<arr.length; i++){
		if(arr[i]>=value){
			return i;
		}
	}
	return arr.length;
};
Sky.sortedLastIndex=function(arr,value){
	for(var i=arr.length-1; i>=0; i--){
		if(arr[i]<=value){
			return i+1;
		}
	}
};
(function(){
	var uid=0;
	Sky.id=function(check) {
		uid++;
		var id=Date.now()+"_"+uid;
		if(check){
			if(Sky.byId(id)){
				return Sky.id(check);
			}
		}
		return id;
	};
	var defaultNextSequence;
	var sequenceMap=new Map();
	Sky.nextSequence=function(arg1,arg2){
		if(Sky.isString(arg1)){
			var s=sequenceMap.get(arg1);
			if(Sky.isDefined(s)){
				s++;
			}else{
				if(Sky.isNumber(arg2)){
					s=arg2
				}else{
					s=1;
				}
			}
			sequenceMap.set(arg1,s);
			return s;
		}else{
			if(Sky.isDefined(defaultNextSequence)){
				defaultNextSequence++;
			}else{
				if(Sky.isNumber(arg1)){
					defaultNextSequence=arg1
				}else{
					defaultNextSequence=1;
				}
			}
			return defaultNextSequence;
		}
	};
})();
/* ceil floor round */
(function(){
	function createRound(methodName) {
		var func = Math[methodName];
		return function(number, precision) {
			precision = precision === undefined ? 0 : (+precision || 0);
			if (precision) {
				precision =Math.pow(10,precision);
				return func(number * precision) / precision;
			}
			return func(number);
		};
	}
	Sky.round=createRound('round');
	Sky.floor=createRound('floor');
	Sky.ceil=createRound('ceil');
})();
Sky.random=function(a,b){
	var length=b-a+1;
	return Math.floor(Math.random()*length)+a;
};
Sky.UUID=function() {
	return new Promise(function(resolve, reject){
		var d=new Date().getTime();
		var uuid='xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){
			var r=(d+Math.random()*16)%16|0;
			d=Math.floor(d/16);
			return (c=='x'?r:(r&0x3|0x8)).toString(16);
		});
		resolve(uuid);
	});
};
(function(){
	Sky.isReady=false;
	var p=new Promise(function(resolve, reject){
		if(document.addEventListener){
			document.addEventListener("DOMContentLoaded",function(){
				Sky.isReady=true;
				resolve();
			},false);
		}else if(window==window.top){
			(function() {
				try{
					document.documentElement.doScroll('left');
					Sky.isReady=true;
					resolve();
				}catch(e){
					setTimeout(arguments.callee, 0);
				}
			})();
		}else{
			document.attachEvent("onreadystatechange",function(){
				if(document.readyState === "complete") {
					document.detachEvent("onreadystatechange", arguments.callee);
					Sky.isReady=true;
					resolve();
				}
			});
		}
	});
	Sky.ready=function(callback){
		if(callback && !Sky.isReady){
			p.then(callback);
		}
		return p;
	};
})();

Sky.byId=function(id){
	return document.getElementById(id);
};
Sky.hasClass=function(obj,cls){
	if(!obj) return false;
	return obj.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
};
Sky.addClass=function(obj,cls){
	if(!Sky.hasClass(obj,cls)) obj.className=obj.className.trim()+" "+cls;
};
Sky.removeClass=function(obj,cls){
	if(Sky.hasClass(obj,cls)){
		var reg = new RegExp('(\\s+|^)'+cls+'(\\s+|$)');
		obj.className=obj.className.replace(reg,' ');
	}
};
Sky.toggleClass=function(obj,cls){
	if(Sky.hasClass(obj,cls)){
		var reg = new RegExp('(\\s+|^)'+cls+'(\\s+|$)');
		obj.className=obj.className.replace(reg,' ');
	}else{
		obj.className=obj.className.trim()+" "+cls;
	}
};
Sky.getElementStyle=function(el, prop){
	if(el.currentStyle){//IE
		return el.currentStyle[prop] || el.style[prop];
	}else if(window.getComputedStyle){//非IE
		var propprop = prop.replace (/([A-Z])/g, "-$1");
		propprop = propprop.toLowerCase();
		var style=window.getComputedStyle(el,null);
		return style[prop] || style.getPropertyValue(propprop) || el.style[prop];
	}
	return '';
};
//获取元素位置
Sky.getPageTop=function(e){
	var offset;
	if(e.getBoundingClientRect){
		offset=e.getBoundingClientRect().top;
		offset+=Math.max(document.documentElement.scrollTop,document.body.scrollTop);
		if(Sky.browser.ie7 && !Sky.browser.quirks){
			//ie7会比正常多两个像素，因为ie7有个边框，我不知道怎么去掉，其他ie浏览器可以使用html{border:0 none;},知道怎么处理的朋友和我说下吧
			offset-=2;
		}
	}else{
		offset=e.offsetTop;
		if(e.offsetParent!=null) offset+=Sky.getPageTop(e.offsetParent);
	}
	return offset;
};
Sky.getPageLeft=function(e){
	var offset;
	if(e.getBoundingClientRect){
		offset=e.getBoundingClientRect().left;
		offset+=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft);
		if(Sky.browser.ie7 && !Sky.browser.quirks){
			offset-=2;
		}
	}else{
		offset=e.offsetLeft;
		if(e.offsetParent!=null) offset+=Sky.getPageLeft(e.offsetParent);
	}
	return offset;
};
Sky.getNextElement=function(element){
	var e = element.nextSibling;
	if(e == null){ return null;}
	if(e.nodeType==1){
		return e;
	}else{
		return Sky.getNextElement(e);
	}
};
Sky.getPrevElement=function(element){
	var e = element.previousSibling;
	if(e == null){ return null;}
	if(e.nodeType==1){
		return e;
	}else{
		return Sky.getPrevElement(e);
	}
};
Sky.getFormData=function(form){
	if(Sky.isString(form)){
		form=document.forms[form];
	}
	if(form.tagName.toUpperCase()!="FORM"){
		throw "form is not exit";
	}
	var o={};
	for(var i=0; i<form.length; i++){
		var input=form[i];
		if(input.name){
			var arr,name,value;
			switch (input.type) {
				case "checkbox":
					if(input.checked){
						if(arr=input.name.match(/(.*)\[\]$/)){
							name=arr[1];
							value=o[name];
							if(!value){
								o[name]=value=[];
							}
							if(input.value){
								value.push(input.value);
							}else{
								value.push("on");
							}
						}else if(arr=input.name.match(/(.*)\[([^\]]+)\]$/)){
							name=arr[1];
							var key=arr[2];
							value=o[name];
							if(!value){
								o[name]=value={};
							}
							if(input.value){
								value[key]=input.value;
							}else{
								value[key]="on";
							}
						}else{
							o[input.name]=input.value;
						}
					}
					break;
				case "radio":
					if(input.checked){
						o[input.name]=input.value;
					}
					break;
				default:
					o[input.name]=input.value;
			}
		}
	}
	return o;
};
Sky.setFormData=function(form,data){
	if(Sky.isString(form)){
		form=document.forms[form];
	}
	if(form.tagName.toUpperCase()!="FORM"){
		throw "form is not exit";
	}
	for(var i=0; i<form.length; i++){
		var input=form[i];
		if(input.name){
			var arr,name,value;
			switch (input.type) {
				case "checkbox":
					if(data){
						if(arr=input.name.match(/(.*)\[\]$/)){
							name=arr[1];
							if(name in data){
								value=data[name];
								if(value.split) value=value.split(",");
								if(value.indexOf && value.indexOf(input.value)>=0){
									input.checked=true;
								}else{
									input.checked=false;
								}
							}
						}else if(arr=input.name.match(/(.*)\[([^\]]+)\]$/)){
							name=arr[1];
							if(name in data){
								var key=arr[2];
								value=data[name];
								if(value && value[key]){
									input.value=value[key];
									input.checked=true;
								}else{
									input.checked=false;
								}
							}
						}else{
							if(input.name in data){
								value=data[input.name];
								if(value){
									input.value=value;
									input.checked=true;
								}else{
									input.checked=false;
								}
							}
						}
					}else{
						input.checked=false
					}
					break;
				case "radio":
					if(data){
						if(input.name in data){
							input.checked=data[input.name]==input.value;
						}
					}else{
						input.checked=false
					}
					break;
				default:
					if(data){
						if(input.name in data){
							input.value=data[input.name];
						}
					}else{
						input.value="";
					}
			}
		}
	}
};
Sky.clearFormData=function(form){
	if(Sky.isString(form)){
		form=document.forms[form];
	}
	if(form.tagName.toUpperCase()!="FORM"){
		throw "form is not exit";
	}
	for(var i=0; i<form.length; i++){
		var input=form[i];
		switch (input.type) {
			case "checkbox":
			case "radio":
				input.checked=false;
				break;
			default:
				input.value="";
		}
	}
};
if(document.getElementsByClassName){
	Sky.getElementsByClassName=function(e,className){
		return Array.from(e.getElementsByClassName(className));
	};
}else{
	Sky.getElementsByClassName=function(e,className){
		var result=[];
		var nodes= e.getElementsByTagName("*");
		for(var i=0;i<nodes.length;i++){
			if(Sky.hasClass(nodes[i],className)){
				result.push(nodes[i]);
			}
		}
		return result;
	};
}
(function(){
	function parseNodeSelector(selector){
		var result={};
		var reg=/^([a-zA-Z0-9_\-]+)/;
		var arr=selector.match(reg);
		if(arr){
			result.tagName=arr[1];
		}
		result.classNames=[];
		reg=/\.([a-zA-Z0-9_\-]+)/g;
		while(arr=reg.exec(selector)){
			result.classNames.push(arr[1]);
		}
		arr=selector.match(/#([a-zA-Z0-9_\-]+)/);
		if(arr){
			result.id=arr[1];
		}
		result.attribute={};
		reg=/\[([a-zA-Z0-9_\-]+)='?([a-zA-Z0-9_\-]+)'?\]/g;
		while(arr=reg.exec(selector)){
			result.attribute[arr[1]]=arr[2];
		}
		reg=/\[([a-zA-Z0-9_\-]+)\]/g;
		while(arr=reg.exec(selector)){
			result.attribute[arr[1]]=null;
		}
		return result;
	}
	function matchesInfo(element, nodeInfo){
		if(nodeInfo.tagName && nodeInfo.tagName.toLocaleUpperCase()!=element.tagName.toLocaleUpperCase()) return false;
		if(nodeInfo.id && nodeInfo.id!=element.id) return false;
		for(var i=0;i<nodeInfo.classNames.length;i++){
			if(!Sky.hasClass(element,nodeInfo.classNames[i])){
				return false;
			}
		}
		for(var key in nodeInfo.attribute){
			var value=nodeInfo.attribute[key];
			if(value===null){
				if(!element.hasAttribute(key)) return false;
			}else{
				if(element.getAttribute(key)!=value) return false;
			}
		}
		return true;
	}
	if(document.querySelectorAll){
		Sky.querySelector=function(selector,e){
			if(!e || e===document){
				return Array.from(document.querySelectorAll(selector));
			}else{
				var noId=false;
				if(!e.id){
					e.id="SKY"+Sky.nextSequence();
					noId=true;
				}
				var r=Array.from(document.querySelectorAll("#"+e.id+" "+selector));
				if(noId){
					e.removeAttribute('id');
				}
				return r;
			}
		};
	}else{
		Sky.querySelector=function(selector,ancestor){
			ancestor=ancestor || document;
			var arr,node,result;
			arr=selector.match(/^#([a-zA-Z0-9_\-]+)$/);
			if(arr){
				result=new Array();
				node=document.getElementById(arr[1]);
				if(node && (ancestor==document || ancestor.contains(node))){
					result.push(node);
				}
				return result;
			}
			arr=selector.match(/^\.([a-zA-Z0-9_\-]+)$/);
			if(arr){
				return Sky.getElementsByClassName(ancestor,arr[1]);
			}
			selector=formatSelector(selector.replace(/\s+,\s+/g,","));
			return queryAndConcat(ancestor,selector);
		};
	}
	function formatSelector(selector){
		return selector.replace(/\s+>\s+/g,">").replace(/\s+/g," ").trim();
	}
	function queryAndConcat(ancestor,selector){
		var arr=selector.split(",");
		if(arr.length==1){
			return querySelector(ancestor,arr[0]);
		}
		var nodes=[];
		var i=arr.length;
		while(i--){
			selector=arr[i];
			arr=arr.concat(querySelector(ancestor,selector));
		}
		return nodes;
	}
	function parseSeriesSelector(selector){
		return selector.split(">").map(parseNodeSelector);
	}
	function queryById(ancestor,nodeInfo){
		var node=document.getElementById(nodeInfo.id);
		if(node && ancestor.contains(node)){
			if(matchesInfo(node,nodeInfo)){
				return node;
			}
		}
		return null;
	}
	function parseSelector(selector){
		var arr=selector.split(" ");
		return arr.map(parseSeriesSelector);
	}
	function querySelector(ancestor,selector){
		var rels=parseSelector(selector);
		if(rels[0].length==1){
			var first=rels[0][0];
			if(first.id){
				first=queryById(ancestor,first);
				if(first){
					rels.shift();
					return queryByRel(first,rels);
				}
			}
		}
		return queryByRel(ancestor,rels);
	}
	function queryByRel(ancestor,rels){
		var lastGroup=rels[rels.length-1];
		var lastInfo=lastGroup[lastGroup.length-1];
		var lasts;
		if(lastInfo.tagName){
			lasts=ancestor.getElementsByTagName(lastInfo.tagName);
		}else{
			lasts=ancestor.getElementsByTagName("*");
		}
		var result=[];
		for(var i=0;i<lasts.length;i++){
			var ele=lasts[i];
			if(checkRels(ancestor,rels,ele)){
				result.push(ele);
			}
		}
		return result;
	}
	function checkRels(ancestor,rels,ele){
		var i=rels.length-1;
		var series=rels[i];
		var next=checkSeries(ancestor,ele,series);
		if(!next){
			return false;
		}
		if(i<=0){
			return true;
		}
		return !!matches(next,rels,ancestor,i-1);
	}
	function checkSeries(ancestor,ele,series){
		var j=series.length;
		while(j--){
			var nodeInfo=series[j];
			if(matchesInfo(ele,nodeInfo)){
				ele=ele.parentNode;
				if(j>0 && ele===ancestor){
					return null;
				}
			}else{
				return null;
			}
		}
		return ele;
	}
	function matches(ele, rels, ancestor,i){
		var next,first=null;
		while(i>=0){
			var series=rels[i];
			next=checkSeries(ancestor,ele,series);
			if(next){
				if(!first){
					first=ele;
				}
				ele=next;
				i--;
				continue ;
			}
			if(ele===document.body){
				return false;
			}
			ele=ele.parentNode;
			if(ele===ancestor){
				return false;
			}
		}
		return first;
	}
	/**
	 * 向上匹配，匹配成功返回匹配到的元素，没有比配到返回null
	 * **/
	Sky.matches=function(ele, selector, ancestor){
		ancestor=ancestor || document;
		var rels=parseSelector(formatSelector(selector));
		return matches(ele, rels, ancestor,rels.length-1);
	};
	Sky.matchesSelector=function(ele, selector, ancestor){
		ancestor=ancestor || document;
		if(ancestor==document){
			if(ele.matches){
				return ele.matches(selector);
			}else if(ele.matchesSelector){
				return ele.matchesSelector(selector);
			}else if(ele.msMatchesSelector){
				return ele.msMatchesSelector(selector);
			}else if(ele.mozMatchesSelector){
				return ele.mozMatchesSelector(selector);
			}
		}
		var rels=parseSelector(formatSelector(selector));
		return checkRels(ancestor,rels,ele);
	};
	Sky.createSelector=function(selector){
		var nodeInfo=parseNodeSelector(selector);
		var tagName=nodeInfo.tagName || "div";
		var node=document.createElement(tagName);
		if(nodeInfo.classNames.length) node.className=nodeInfo.classNames.join(" ");
		nodeInfo.id && (node.id=nodeInfo.id);
		for(var key in nodeInfo.attribute){
			node.setAttribute(key,nodeInfo.attribute[key]);
		}
		var arr=selector.match(/:content\((.*)\)$/);
		if(arr){
			node.appendChild(document.createTextNode(arr[1]));
		}
		return node;
	};
})();
(function(window){
	if(document.addEventListener){
		Sky.attachEvent=function(obj, evt, func){
			obj.addEventListener(evt, func, false);
		};
		Sky.detachEvent=function(obj, evt, func){
			obj.removeEventListener(evt, func, false);
		};
		Sky.fireEvent=function(e,eventName){
			var ev=document.createEvent('Event');
			ev.initEvent(eventName, false, false);
			e.dispatchEvent(ev);
		};
	}else{
		Sky.attachEvent=function(obj, evt, func){
			obj.attachEvent( 'on'+evt, func);
		};
		Sky.detachEvent=function(obj, evt, func){
			obj.detachEvent('on'+evt, func);
		};
		Sky.fireEvent=function(e,eventName){
			e.fireEvent("on"+eventName);
		};
	}
	function stopPropagation(){
		this.cancelBubble=true;
	}
	function preventDefault(){
		this.returnValue=false;
	}
	var eventMap=new Map();
	var proxyMap=new Map();
	proxyMap.addEvent=function(ele,evt,proxyHandle){
		var handles=this.get(ele);
		if(!handles){
			handles=new Array();
			this.set(ele,handles);
		}
		handles.push(proxyHandle);
		Sky.attachEvent(ele,evt,proxyHandle);
	};
	proxyMap.removeEvent=function(ele,evt,func,selector){
		var proxyList=this.get(ele);
		if(!proxyList) return ;
		var arr=proxyList.filter(function(handle){
			if(evt){
				if(handle.event!=evt){
					return true;
				}
			}
			if(selector){
				if(handle.selector!=selector){
					return true;
				}
			}
			if(func){
				if(handle.target!=func){
					return true;
				}
			}
			Sky.detachEvent(ele,evt,handle);
			return false;
		});
		this.set(ele,arr);
	};
	Sky.addEvent=function(ele, evt, func){
		evt=evt.toLowerCase();
		var events=eventMap.get(ele);
		if(!events){
			events={};
			eventMap.set(ele,events);
		}
		var handles=events[evt];
		if(!handles){
			handles=new Set();
			events[evt]=handles;
		}
		if(!handles.has(func)){
			handles.add(func);
			if(evt in Sky.event.fix){
				Sky.event.fix[evt].attachEvent(ele,evt,func);
			}else if(ele.addEventListener){
				Sky.attachEvent(ele,evt,func);
			}else{
				var proxyHandle=function(e){
					e=e || window.event;
					e.target=e.srcElement;
					e.currentTarget=ele;
					e.relatedTarget=e.toElement || e.fromElement;
					e.stopPropagation=stopPropagation;
					e.preventDefault=preventDefault;
					return func.call(ele,e);
				};
				proxyHandle.target=func;
				proxyHandle.element=ele;
				proxyHandle.event=evt;
				proxyMap.addEvent(ele,evt,proxyHandle);
			}
		}
	};
	Sky.removeEvent=function(ele, evt, func) {
		var events=eventMap.get(ele);
		if(!events) return ;
		if(evt){
			var handles=events[evt];
			if(!handles) return ;
			if(func){
				handles['delete'](func);
				if(evt in Sky.event.fix){
					Sky.event.fix[evt].detachEvent(ele,evt,func);
				}else if(ele.removeEventListener){
					ele.removeEventListener(evt, func, false);
				}else{
					proxyMap.removeEvent(ele, evt, func);
				}
			}else{
				handles.forEach(function(func){
					Sky.removeEvent(ele, evt, func);
				});
			}
		}else{
			for(evt in events){
				Sky.removeEvent(ele, evt);
			}
		}
	};
	Sky.trigger=function(ele, evt){
		var events=eventMap.get(ele);
		if(!events) return ;
		var handles=events[evt];
		if(!handles) return ;
		if('on'+evt in ele){
			Sky.fireEvent(ele, evt);
		}else{
			handles.forEach(function(func){
				var e={};
				e.target=ele;
				e.currentTarget=ele;
				e.relatedTarget=ele;
				e.stopPropagation=stopPropagation;
				e.preventDefault=preventDefault;
				try{
					func.call(ele,e);
				}catch(e){
					console.error(e);
				}
			});
		}
	};
	Sky.event={};
	Sky.event.fix={};
	if(!("onmouseenter" in document) && !Sky.browser.ie){
		Sky.event.fix.mouseenter={
			attachEvent:function(ele, evt, func){
				var proxyHandle=function(e){
					var target= e.target;
					var related=e.relatedTarget;
					if(!related || (related!==ele && !ele.contains(related)) ){
						return func.call(ele, e);
					}
				};
				proxyHandle.target=func;
				proxyHandle.element=ele;
				proxyHandle.event=evt;
				proxyMap.addEvent(ele,"mouseover",proxyHandle);
			},
			detachEvent:function(ele, evt, func){
				proxyMap.removeEvent(ele, evt, func);
			}
		};
	}
	if(!("onmouseleave" in document) && !Sky.browser.ie){
		Sky.event.fix.mouseleave={
			attachEvent:function(ele, evt, func){
				var proxyHandle=function(e){
					var target=e.target;
					var related=e.relatedTarget;
					if(!related || (related!==ele && !ele.contains(related)) ){
						return func.call(ele, e);
					}
				};
				proxyHandle.target=func;
				proxyHandle.element=ele;
				proxyHandle.event=evt;
				proxyMap.addEvent(ele,"mouseout",proxyHandle);
			},
			detachEvent:function(ele, evt, func){
				proxyMap.removeEvent(ele, evt, func);
			}
		};
	}
	if(Sky.browser.ie9){
		Sky.event.fix.input={
			attachEvent:function(ele, evt, func){
				Sky.attachEvent(ele,'change',func);
				Sky.attachEvent(ele,'selectionchange',func);
				Sky.attachEvent(ele,'keyup',func);
				Sky.attachEvent(ele,'input',func);
			},
			detachEvent:function(ele, evt, func){
				Sky.detachEvent(ele,'change',func);
				Sky.detachEvent(ele,'selectionchange',func);
				Sky.detachEvent(ele,'keyup',func);
				Sky.detachEvent(ele,'input',func);
			}
		};
	}else if(document.attachEvent){
		Sky.event.fix.input={
			attachEvent:function(ele, evt, func){
				var proxyHandle=function(e){
					e=e || window.event;
					if(e.propertyName=='value'){
						if(!e.srcElement.disabled && !e.srcElement.readOnly){
							e.target=e.srcElement;
							e.currentTarget=ele;
							e.stopPropagation=stopPropagation;
							e.preventDefault=preventDefault;
							return func.call(ele,e);
						}
					};
				};
				proxyMap.addEvent(ele,"propertychange",proxyHandle);
			},
			detachEvent:function(ele, evt, func){
				proxyMap.removeEvent(ele, evt, func);
			}
		};
	}
	Sky.delegate=function(ele,evt,selector,func){
		var proxyHandle=function(e){
			e=e || window.event;
			e.target || (e.target=e.srcElement);
			e.stopPropagation || (e.stopPropagation=stopPropagation);
			e.preventDefault || (e.preventDefault=preventDefault);
			e.currentTarget || (e.currentTarget=ele);
			var me=Sky.matches(e.target, selector, ele);
			if(me){
				var related;
				switch(evt){
					case 'mouseleave':
						related=e.relatedTarget || e.toElement;
						break;
					case 'mouseenter':
						related=e.relatedTarget || e.fromElement;
						break;
					default:
						return func.call(me,e);
				}
				if(!related || (related!==me && !me.contains(related)) ){
					return func.call(me, e);
				}
			}
		};
		proxyHandle.target=func;
		proxyHandle.element=ele;
		proxyHandle.selector=selector;
		proxyHandle.event=evt;
		switch(evt){
			case 'mouseleave':
				proxyMap.addEvent(ele,'mouseout',proxyHandle);
				break;
			case 'mouseenter':
				proxyMap.addEvent(ele,'mouseover',proxyHandle);
				break;
			default:
				proxyMap.addEvent(ele,evt,proxyHandle);
		}
	};
	Sky.undelegate=function(ele,evt,selector,func){
		proxyMap.removeEvent(ele, evt, func, selector);
	};
})(this);
(function(){
	var Batch=function(){ Array.call(this);};
	Batch.prototype=Sky.fn={
		constructor: Batch,
		length: 0,
		indexOf:Array.prototype.indexOf,
		push:Array.prototype.push,
		splice:Array.prototype.splice,
		forEach:Array.prototype.forEach
	};
	Sky.ele=function(ele){
		var nodes=new Batch();
		if(ele){
			nodes.push(ele);
		}
		return nodes;
	};
	Sky.query=function(selector,doc){
		var nodes=new Batch();
		var arr=Sky.querySelector(selector,doc);
		for(var i=0;i<arr.length;i++){
			nodes.push(arr[i]);
		}
		return nodes;
	};
	Sky.create=function(selector){
		var nodes=new Batch();
		var arr=selector.split(",");
		for(var i=0;i<arr.length;i++){
			nodes.push(Sky.createSelector(arr[i]));
		}
		return nodes;
	};
	Sky.fn.children=function(selector){
		var nodes=new Batch();
		this.forEach(function(ele){
			var children=ele.children;
			for(var i=0; i<children.length; i++){
				var child=children[i];
				if(nodes.indexOf(child)<0){
					if(selector && !Sky.matchesSelector(child,selector)){
						continue ;
					}
					nodes.push(child);
				}
			}
		});
		return nodes;
	};
	Sky.fn.find=function(selector){
		var nodes=new Batch();
		this.forEach(function(ele){
			var children=Sky.querySelector(selector,ele);
			for(var i=0; i<children.length; i++){
				var child=children[i];
				if(nodes.indexOf(child)<0){
					nodes.push(child);
				}
			}
		});
		return nodes;
	};
	Sky.fn.parent=function(){
		var nodes=new Batch();
		this.forEach(function(ele){
			var parent=ele.parentNode;
			if(parent && nodes.indexOf(parent)<0){
				nodes.push(parent);
			}
		});
		return nodes;
	};
	Sky.fn.parents=function(selector){
		var nodes=new Batch();
		this.forEach(function(ele){
			var parent=ele;
			while((parent=parent.parentNode) && parent!=document){
				if(nodes.indexOf(parent)<0){
					if(selector && !Sky.matchesSelector(parent,selector)){
						continue ;
					}
					nodes.push(parent);
				}
			};
		});
		return nodes;
	};
	Sky.fn.parentsUntil=function(selector){
		var nodes=new Batch();
		this.forEach(function(ele){
			var parent=ele;
			while(parent=parent.parentNode){
				if(nodes.indexOf(parent)<0){
					nodes.push(parent);
					if(Sky.matchesSelector(parent,selector)) break ;
				}
			};
		});
		return nodes;
	};

	Sky.fn.siblings=function(selector){
		return this.parent().children(selector);
	};
	Sky.fn.nextAll=function(selector){
		var nodes=new Batch();
		this.forEach(function(ele){
			var brother=ele;
			while(brother=Sky.getNextElement(brother)){
				if(nodes.indexOf(brother)<0){
					if(selector && !Sky.matchesSelector(brother,selector)){
						continue ;
					}
					nodes.push(parent);
				}
			}
		});
		return nodes;
	};
	Sky.fn.prevAll=function(selector){
		var nodes=new Batch();
		this.forEach(function(ele){
			var brother=ele;
			while(brother=Sky.getPrevElement(brother)){
				if(nodes.indexOf(brother)<0){
					if(selector && !Sky.matchesSelector(brother,selector)){
						continue ;
					}
					nodes.push(parent);
				}
			}
		});
		return nodes;
	};
	Sky.fn.prev=function(selector){
		var nodes=new Batch();
		this.forEach(function(ele){
			var brother=Sky.getPrevElement(ele);
			if(brother){
				if(nodes.indexOf(brother)<0){
					if(selector && !Sky.matchesSelector(brother,selector)){
						return ;
					}
					nodes.push(parent);
				}
			}
		});
		return nodes;
	};
	Sky.fn.next=function(selector){
		var nodes=new Batch();
		this.forEach(function(ele){
			var brother=Sky.getNextElement(ele);
			if(brother){
				if(nodes.indexOf(brother)<0){
					if(selector && !Sky.matchesSelector(brother,selector)){
						return ;
					}
					nodes.push(parent);
				}
			}
		});
		return nodes;
	};
	Sky.fn.nextUntil=function(selector){
		var nodes=new Batch();
		this.forEach(function(ele){
			var brother=ele;
			while(brother=Sky.getNextElement(brother)){
				if(nodes.indexOf(brother)<0){
					nodes.push(brother);
					if(Sky.matchesSelector(brother,selector)) break ;
				}
			};
		});
		return nodes;
	};
	Sky.fn.prevUntil=function(selector){
		var nodes=new Batch();
		this.forEach(function(ele){
			var brother=ele;
			while(brother=Sky.getPrevElement(brother)){
				if(nodes.indexOf(brother)<0){
					nodes.push(brother);
					if(Sky.matchesSelector(brother,selector)) break ;
				}
			};
		});
		return nodes;
	};
	Sky.fn.first=function(){
		if(this.length){
			var nodes=new Batch();
			nodes.push(this[0]);
			return nodes;
		}
		return this;
	};
	Sky.fn.last=function(){
		if(this.length){
			var nodes=new Batch();
			nodes.push(this[this.length-1]);
			return nodes;
		}
		return this;
	};
	Sky.fn.eq=function(index){
		var nodes=new Batch();
		nodes.push(this[index]);
		return nodes;
	};
	Sky.fn.filter=function(selector){
		var nodes=new Batch();
		this.forEach(function(ele){
			if(Sky.matchesSelector(ele,selector)){
				nodes.push(ele );
			}
		});
		return nodes;
	};
	Sky.fn.not=function(selector){
		var nodes=new Batch();
		this.forEach(function(ele){
			if(!Sky.matchesSelector(ele,selector)){
				nodes.push(ele );
			}
		});
		return nodes;
	};
})();
Sky.fn.each=function(callback){
	this.forEach(function(item,index){
		callback.call(item,index);
	});
	return this;
};
Sky.fn.appendTo=function(parent){
	if(!parent) return this;
	if('append' in parent && parent.length>0){
		parent=parent[0];
	}
	if("appendChild" in parent){
		this.forEach(function(ele){
			parent.appendChild(ele);
		});
	}
	return this;
};
Sky.fn.append=function(){
	var args=Array.from(arguments);
	args.forEach(function(sub){
		if(!sub) return ;
		if(Sky.isString(sub) || Sky.isNumber(sub)){
			return this.each(function(){
				var tn=document.createTextNode(sub);
				this.appendChild(tn);
			});
		}else if(sub.appendTo){
			sub.appendTo(this);
			return this;
		}else if(this.length){
			this[0].appendChild(sub);
		}
	},this);
	return this;
};
Sky.fn.prepend=function(sub){
	if(Sky.isString(sub)){
		this.forEach(function(parent){
			var tn=document.createTextNode(sub);
			if(parent.childNodes.length){
				parent.insertBefore(tn,parent.firstChild);
			}else{
				parent.appendChild(tn);
			}
		});
	}else if(this.length){
		var parent=this[0];
		if(sub.each){
			sub.each(function(){
				if(parent.childNodes.length){
					parent.insertBefore(this,parent.firstChild);
				}else{
					parent.appendChild(this);
				}
			});
		}else{
			parent.appendChild(sub);
		}
	}
	return this;
};
Sky.fn.before=function(sub){
	var me=this;
	if(Sky.isString(sub)){
		this.forEach(function(dom){
			var tn=document.createTextNode(sub);
			var parent=dom.parentNode;
			if(parent){
				parent.insertBefore(tn,dom);
			}
		});
	}else if(this.length){
		var parent=this[0].parentNode;
		if(parent){
			if(sub.each){
				sub.each(function(dom){
					parent.insertBefore(this,me[0]);
				});
			}else{
				parent.insertBefore(sub);
			}
		}
	}
	return this;
};
Sky.fn.after=function(sub){
	if(Sky.isString(sub)){
		this.forEach(function(dom){
			var tn=document.createTextNode(sub);
			var parent=dom.parentNode;
			if(parent){
				if(dom.nextSibling){
					parent.insertBefore(tn,dom.nextSibling);
				}else{
					parent.appendChild(tn);
				}
			}
		});
	}else if(this.length){
		var dom=this[0];
		var parent=dom.parentNode;
		if(parent){
			if(sub.each){
				sub.each(function(){
					if(dom.nextSibling){
						parent.insertBefore(this,dom.nextSibling);
					}else{
						parent.appendChild(this);
					}
				});
			}else{
				if(dom.nextSibling){
					parent.insertBefore(sub,dom.nextSibling);
				}else{
					parent.appendChild(sub);
				}
			}
		}
	}
	return this;
};
Sky.fn.addClass=function(className){
	this.forEach(function(dom){
		Sky.addClass(dom,className);
	});
	return this;
};
Sky.fn.removeClass=function(className){
	this.forEach(function(dom){
		Sky.removeClass(dom,className);
	});
	return this;
};
Sky.fn.toggleClass=function(className){
	this.forEach(function(dom){
		Sky.toggleClass(dom,className);
	});
	return this;
};
Sky.fn.hasClass=function(className){
	for(var i=0;i<this.length;i++){
		if(Sky.hasClass(this[i],className)){
			return true;
		}
	}
	return false;
};
if(document.addEventListener){
	Sky.support.cssFloat="cssFloat";
}else{
	Sky.support.cssFloat="styleFloat";
}
Sky.fn.css=function(name,value){
	if(Sky.isString(name)){
		name=name.replace(/\-\w/g,function(str){
			return str.toUpperCase();
		});
		if(value){
			if(name=="float"){
				name=Sky.support.cssFloat;
			}
			this.forEach(function(ele){
				ele.style[name]=value;
			});
		}else if(Sky.isString(name)){
			this.forEach(function(ele){
				ele.style.cssText=name;
			});
		}
	}else{
		this.forEach(function(ele){
			Sky.forOwn(name,function(value,key){
				if(key=="float"){
					key=Sky.support.cssFloat;
				}
				ele.style[key]=value;
			});
		});
	}
	return this;
};
Sky.fn.prop=function(key,value){
	if(value!==undefined){
		for(var i=0;i<this.length;i++){
			this[i][key]=value;
		}
		return this;
	}else{
		if(this.length>0){
			return this[0][key];
		}
	}
};
Sky.fn.attr=function(key,value){
	switch(key.toLowerCase()){
		case "class":
			console.error("'XXX.prop(\"className\")' XXX.addClass(\""+Sky.escapeString(value)+"\") is recommended");
			return this.prop("className",value);
		case "style":
			console.error("'XXX.css(\""+Sky.escapeString(value)+"\")' is recommended");
			return this.css(value);
	}
	if(value!==undefined){
		for(var i=0;i<this.length;i++){
			this[i].setAttribute(key,value);
		}
		return this;
	}else{
		if(this.length>0){
			return this[0].getAttribute(key);
		}
	}
};
Sky.fn.removeAttr=function(key){
	switch(key.toLowerCase()){
		case "class":
			console.error("'XXX.prop(\"className\",\"\")' is recommended");
			return this.prop("className","");
		case "style":
			console.error("'XXX.css(\"\")' is recommended");
			return this.css("");
	}
	for(var i=0;i<this.length;i++){
		this[i].removeAttribute(key);
	}
	return this;
};
Sky.fn.html=function(value){
	if(value){
		this.empty();
	}
	return this.prop("innerHTML",value);
};
Sky.fn.text=function(value){
	var node,tag;
	if(value!=undefined){
		for(var i=0;i<this.length;i++){
			node=this[i];
			tag=node.tagName.toUpperCase();
			switch(tag){
				case "TEXTAREA":
				case "INPUT":
				case "SELECT":
					break;
				default:
					node.innerHTML=Sky.escapeHtml(value);
			}
		}
		return this;
	}else{
		if(this.length>0){
			node=this[0];
			if('textContent' in node){
				return node.textContent;
			}
			return node.innerText;
		}
	}
};
Sky.fn.val=function(value){
	return this.prop("value",value);
};

Sky.domData=new Map();
Sky.fn.data=function(key,value){
	var node;
	if(value!==undefined){//set
		for(var i=0;i<this.length;i++){
			node=this[i];
			var data=Sky.domData.get(node);
			if(!Sky.isDefined(data)) data={};
			data[key]=value;
			Sky.domData.set(node,data);
		}
		return this;
	}else{//get
		if(this.length>0){
			node=this[0];
			var data=Sky.domData.get(node);
			value=data[key];
			if(value!==undefined){
				return value;
			}
			var attr="data-"+key;
			if(node.hasAttribute(attr)){
				value=node.getAttribute(attr);
				return value;
			}
		}
	}
};
Sky.fn.removeData=function(key,value){
	this.forEach(function(node){
		Sky.domData["delete"](node);
	});
	return this;
};
Sky.fn.hide=function(){
	return this.css("display","none");
};
Sky.fn.show=function(){
	return this.css("display","");
};
Sky.fn.remove=function(selector){
	var r=this;
	if(selector){
		r=this.filter(selector);
	}
	r.forEach(function(item){
		var parent=item.parentNode;
		if(parent) parent.removeChild(item);
	});
	return this;
};
Sky.fn.destroy=function(){
	var $children=this.children();
	if($children.length) $children.destroy();
	this.forEach(function(dom){
		var parent=dom.parentNode;
		var data=Sky.domData.get(dom);
		Sky.domData["delete"](dom);
		Sky.detachEvent(dom);
		for(var prop in dom){
			if(prop.startsWith("on")) dom[prop]=null;
		}
		if(parent) parent.removeChild(dom);
	});
	this.splice(0,this.length);
	return this;
};
Sky.fn.empty=function(){
	this.children().destroy();
	return this.prop("innerHTML",'');
};

Sky.fn.bind=function(evt,func){
	this.forEach(function(ele){
		Sky.attachEvent(ele,evt,func);
	});
	return this;
};
Sky.fn.unbind=function(evt,func){
	this.forEach(function(ele){
		Sky.detachEvent(ele,evt,func);
	});
	return this;
};
Sky.fn.fire=function(evt){
	this.forEach(function(ele){
		Sky.fireEvent(ele,evt);
	});
	return this;
};
Sky.fn.on=function(evt,selector,func){
	if(func){
		return this.delegate(evt,selector,func);
	}
	func=selector;
	this.forEach(function(ele){
		Sky.addEvent(ele,evt,func);
	});
	return this;
};
Sky.fn.delegate=function(selector,evt,func){
	this.forEach(function(ele){
		Sky.delegate(ele,evt,selector,func);
	});
	return this;
};
Sky.fn.undelegate=function(selector,evt,func){
	return this.forEach(function(ele){
		Sky.undelegate(ele,evt,selector,func);
	});
	return this;
};
Sky.fn.off=function(evt,arg2,arg3){
	var selector,func;
	if(Sky.isString(arg2)){
		selector=arg2;
		if(Sky.isFunction(arg3)){
			func=arg3;
		}
	}else if(Sky.isFunction(arg2)){
		func=arg2;
	}
	this.forEach(function(ele){
		Sky.undelegate(ele,evt,selector,func);
	});
	return this;
};
Sky.fn.trigger=function(event){
	this.forEach(function(dom){
		Sky.trigger(dom,event);
	});
	return this;
};
Sky.fn.mouseenter=function(func){
	return this.each(function(){
		Sky.addEvent(this,"mouseenter",func);
	});
};
Sky.fn.mouseleave=function(func){
	return this.each(function(){
		Sky.addEvent(this,"mouseleave",func);
	});
};
Sky.fn.click=function(callback){
	if(callback){
		return this.on('click',callback);
	}
	return this.each(function(){
		this.click();
	});
};
if("ontouchstart" in document){
	Sky.fn.tap=function(callback){
		var lastTouchTime;
		return this.on("touchstart",function(e){
			lastTouchTime=Date.now();
		}).on("touchend",function(e){
			if(Date.now()-lastTouchTime<200){
				callback.call(this,e);
			}
		});
	};
}else{
	Sky.fn.tap=Sky.fn.click;
}
Sky.fn.input=function(func){
	return this.each(function(){
		Sky.addEvent(this,"input",func);
	});
};

$.overload([$.isString,$.isDocument],$,Sky.query);
$.overload([$.isString,$.isElement],$,Sky.query);
$.overload([$.isElement],$,Sky.ele);
$.overload([$.isDocument],$,Sky.ele);

$.overload([$.isFunction],$,function(callback){
	if(Sky.isReady){
		setTimeout(callback,0);
	}else{
		Sky.ready(callback);
	}
});

$.overload([$.isString],$,function(selector){
	if(selector.startsWith('#') || selector.includes(" ") || selector.includes(">")){
		return Sky.query(selector);
	}else{
		return Sky.create(selector);
	}
});
var define,require,Module;
(function(window){
	window.Module=Module;
	Module.base=Sky.getCurrentPath();
	var commentRegExp=/\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/mg;
	var cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g;
	var Status={
		LOADING:0,//正在加载script
		DEFINED:1,//已定义
		DEPENDING:2,//正在加载依赖
		COMPLETE:3//完成
	};
	var cache={};
	var rules=[];
	var shim={};
	var queue=[];
	function Module(name){
		this.status=Status.LOADING;
		this.name=name;
		var me=this;
		this.promise=new Promise(function(resolve, reject){
			var delay=null;
			me.resolve=function(exports){
				if(exports!==void 0){
					me.exports=exports;
				}
				if(delay){
					delay(resolve, reject);
				}else{
					resolve(me.exports);
				}
			};
			me.reject=reject;
			me.delay=function(fn){
				delay=fn;
			};
		});
		this.promise.then(function(){
			me.status=Status.COMPLETE;
		});
	}
	/*
	全局变量中的require
	 */
	require=function(deps,callback,onerror){
		var promises=deps.map(getDepsPromise,false);
		Promise.all(promises).then(function(data){
			callback.apply(this,data);
		},onerror);
	};
	function getDepsPromise(dep){
		switch(dep){
			case 'require':
				return this.require || (this.require=getRequire.bind(this));
			case 'exports':
				return this.exports=new Object();
			case 'module':
				return this;
		}
		if(dep instanceof Promise){
			return dep;
		}else if(dep instanceof Module){
			return dep.promise;
		}else{
			var module=nameToModule(dep,this);
			if(module.status==Status.DEFINED){
				module.load();
			}
			return module.promise;
		}
	}
	function getRequire(dep){
		var module=nameToModule(dep,this);
		if(module.status==Status.COMPLETE){
			return module.exports;
		}
		throw new Error("unsupport sync, module("+dep+") must loaded before");
	}
	/**
	 * 根据字符串查找模块
	 * */
	function nameToModule(name,from){
		var module;
		var i=rules.length;
		while(i--){
			var rule=rules[i];
			module=rule(name,from);
			if(module){
				break ;
			}
		}
		return module;
	}
	Module.prototype.init=function(src){
		var me=this;
		this.url=new URL(src,location);
		if(Sky.support.getCurrentScript){
			this.script=Sky.getScript(src,handleLast);
		}else{
			this.script=Sky.getScript(src,handleQueue);
		}
		this.script.amd=this;
		this.script.onerror=handleError;
	};
	function handleError(message,url,line){
		var module=this.amd;
		module.reject({'message':message,'url':url,'line':line});
	};
	function handleQueue(){
		var module=this.amd;
		if(queue.length){
			var i=queue.length;
			while(i--){
				var mod=queue[i];
				if(mod.name==module.name){
					module.define(mod.deps,mod.initor);
					queue.length=0;
					return ;
				}
			}
			var lastModule=queue[queue.length-1];
			module.define(lastModule.deps,lastModule.initor);
			queue.length=0;
		}else{
			useShim(module);
		}
	}
	function handleLast(){
		var module=this.amd;
		if(module.status==Status.LOADING){
			useShim(module);
		}else if(module.status<Status.DEPENDING){
			module.define(module.deps,module.initor);
		}
	}
	function useShim(module){
		if(Object.prototype.hasOwnProperty.call(shim,module.name)){
			module.resolve(window[shim[module.name]]);
		}else{
			console.error("No module found in script");
		}
	}
	Module.prototype.define=function(deps,initor){
		if(Sky.isFunction(initor)){
			this.initor=initor;
			this.deps=deps;
			this.load();
		}else{
			this.resolve(initor);
		}
	};
	/*
	加载依赖
	 */
	Module.prototype.load=function(){
		var me=this;
		if(this.deps && this.deps.length){
			me.status=Status.DEPENDING;//加载依赖
			var promises=this.deps.map(getDepsPromise,this);
			Promise.all(promises).then(function(data){
				me.resolve(me.initor.apply(me,data));
			});
		}else{
			me.resolve(me.initor());
		}
	};
	Module.define=function(name,deps,initor){
		var module;
		if(name){
			module=Module.getCache(name);
			var selfIndex=-1;
			if(module && deps){
				selfIndex=deps.indexOf(name);
				if(selfIndex>=0){
					deps[selfIndex]=module;
				}
			}
			if(!module || selfIndex>=0 || module.status>=Status.DEPENDING){
				module=new Module(name);
				module.deps=deps;
				module.initor=initor;
				module.status=Status.DEFINED;
				Module.setCache(name,module);
			}else if(module.status==Status.LOADING){
				module.deps=deps;
				module.initor=initor;
				module.define(module.deps,module.initor);
			}else{
				module.deps=deps;
				module.initor=initor;
			}
		}
		if(Sky.support.getCurrentScript){
			var script=Sky.getCurrentScript();
			if(script.amd){
				module=script.amd;
				if(module.status<=Status.DEFINED){
					module.deps=deps;
					module.initor=initor;
					module.status=Status.DEFINED;
					if(module.name==name){
						module.define(deps,initor);
					}
				}
			}
		}else{
			var lastModule=new Object();
			lastModule.deps=deps;
			lastModule.initor=initor;
			queue.push(lastModule);
		}
	};
	/*
	 define(data);
	 define(initor);
	 define(deps,initor);
	 define(name,deps,initor);
	 */
	define=function(arg1,arg2,arg3){
		switch(arguments.length){
			case 1:
				if(Sky.isFunction(arg1)){
					var deps=new Array();
					switch(arg1.length){
						case 3:
							deps.unshift('module');
						case 2:
							deps.unshift('exports');
						case 1:
							deps.unshift('require');
							break ;
					}
					arg1.toString().replace(commentRegExp,commentReplace).replace(cjsRequireRegExp,function(match,dep){
						deps.push(dep);//CMD
					});
					Module.define(null,deps,arg1);
				}else{
					Module.define(null,null,arg1);
				}
				break;
			case 2:
				Module.define(null,arg1,arg2);
				break;
			case 3:
				Module.define(arg1,arg2,arg3);
		}
	};
	Module.getCache=function(key){
		if(Object.prototype.hasOwnProperty.call(cache,key)){
			return cache[key];
		}
		return null;
	};
	Module.setCache=function(key,value){
		cache[key]=value;
	};
	Module.config=function(rule){
		rules.push(rule);
	};
	Module.shim=function(key,value){
		shim[key]=value;
	};
	function commentReplace(match, singlePrefix) {
		return singlePrefix || '';
	}
})(this);
(function(){
	var paths={};
	Module.config(function(name,from){
		var module,url;
		if(name.match(/^(\/|\.|\w+:)/)){//模块名称是路径
			url=new URL(name,from && from.url || location);
			module=Module.getCache(url.href);
			if(module){
				return module;
			}
			module=new Module();
			Module.setCache(url.href,module);
			module.init(url.href);
		}else{
			module=Module.getCache(name);
			if(module){
				return module;
			}
			if(Object.prototype.hasOwnProperty.call(paths,name)){
				url=new URL(paths[name],Module.base);
			}else{
				url=new URL(name+".js",Module.base);
			}
			module=new Module(name);
			Module.setCache(name,module);
			Module.setCache(url.href,module);
			module.init(url.href);
		}
		return module;
	});
	Module.path=function(name,path){
		paths[name]=path;
	};
})();