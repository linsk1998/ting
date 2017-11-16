var fs=require("fs");
var ejs=require('./lib/ejs');
var Color=require('./lib/Color');
var config=require('./config');
config.fontAwesome="http://cdn.bootcss.com/font-awesome/4.6.3/fonts";
config.theme=require('./theme/teal');
config.quirk=false;
config.size=function(s,p){
	if(this.quirk){
		return s;
	}else{
		return s-p;
	}
};
config.lighten=function(col,amount){
	return new Color(color).lighten(amount).toHex();
};
config.darken=function(color,amount){
	return new Color(color).darken(amount).toHex();
};
config.mix=function(color1,color2){
	return Color.mix(new Color(color1),new Color(color2)).toHex();
};
var template = fs.readFileSync(__dirname+'/ting/ting.ejs.css', 'utf-8');
var fileContent = ejs.render(template,config);
fs.writeFileSync(__dirname+'/ting/ting.css', fileContent, 'utf-8');
config.quirk=true;
fileContent = ejs.render(template,config);
fs.writeFileSync(__dirname+'/ting/ting-quirks.css', fileContent, 'utf-8');