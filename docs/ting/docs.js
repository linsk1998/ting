// JavaScript Document
(function(global){
	var base=Sky.getCurrentPath();
	var theme='default',skin;
	global.changeTheme=function(t){
		theme=t;
		var s=skin;
		if(typeof s=="undefined"){
			switch(theme){
				case 'bootstrap':
					s="indigo";
				break;
				case 'material':
					s="blue";
				break;
				default:
					s="teal";
			}
		}
		document.getElementById("cssTheme").href=new URL("../theme/"+theme+"/"+s+".css",base).href;
	};
	global.changeSkin=function(s){
		skin=s;
		document.getElementById("cssTheme").href=new URL("../theme/"+theme+"/"+s+".css",base).href;
	};
})(this);