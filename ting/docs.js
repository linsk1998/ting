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
		document.getElementById("cssTheme").href=Sky.getAbsPath("../theme/"+theme+"/"+s+".css",base);
	};
	global.changeSkin=function(s){
		skin=s;
		document.getElementById("cssTheme").href=Sky.getAbsPath("../theme/"+theme+"/"+s+".css",base);
	};
})(this);