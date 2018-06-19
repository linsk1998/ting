if(!String.prototype.padStart){
	String.prototype.padStart=function(targetLength,padString){
		var x=targetLength-this.length;
		if(x<0) return this+"";
		if(!padString) padString=" ";
		return padString.repeat(Math.ceil(x/padString.length)).substr(0,x)+this;
	};
}
var fs=require("fs");
var ejs=require('./lib/ejs');
var Color=require('./lib/Color');
var config=require('./config');

config.theme=require('./src/theme/indigo');

config.quirk=false;
config.size=function(s,p){
	if(this.quirk){
		return s;
	}else{
		return s-p;
	}
};
config.Color=Color;
config.lighten=function(color,amount){
	if(color.lighten){ return color.lighten(amount).toString();}
	return new Color(color).lighten(amount);
};
config.darken=function(color,amount){
	if(color.darken){ return color.darken(amount).toString();}
	return new Color(color).darken(amount);
};
config.mix=function(color1,color2){
	return Color.mix(new Color(color1),new Color(color2));
};
config.spin=function(color,amount){
	if(color.spin){ return color.spin(amount);}
	return new Color(color).spin(amount);
};
var mods=[
	"core.ejs.css",
	"icons.css",
	"grid.ejs.css",
	"button.ejs.css",
	"table.ejs.css",
	"form.ejs.css",
	"breadcrumb.ejs.css",
	"nav.ejs.css",
	"alert.ejs.css",
	"pagination.ejs.css",
	"label.ejs.css",
	"list-group.ejs.css",
	"panel.ejs.css",
	"media.ejs.css",
	"well.ejs.css",
	"jumbotron.ejs.css",
	"navbar.ejs.css",
	"input-group.ejs.css",
	"dropdown.ejs.css",
	"modal.ejs.css",
	"dialog.ejs.css",
	"carousel.ejs.css",
	"datatable.ejs.css",
	"animation.css",
	"utilities.ejs.css"
];
var out=[];
mods.forEach(function(path){
	var template = fs.readFileSync(__dirname+'/src/'+path, 'utf-8');
	var fileContent = ejs.render(template,config);
	out.push(fileContent);
});
fs.writeFileSync(__dirname+'/ting/ting.css', out.join("\n"), 'utf-8');
config.quirk=true;
out=[];
mods.forEach(function(path){
	var template = fs.readFileSync(__dirname+'/src/'+path, 'utf-8');
	var fileContent = ejs.render(template,config);
	out.push(fileContent);
});
fs.writeFileSync(__dirname+'/ting/ting-quirks.css', out.join("\n"), 'utf-8');

//out=[];
//out.push(fs.readFileSync(__dirname+'/src/html5.js','utf-8'));
//out.push(fs.readFileSync(__dirname+'/src/role.js','utf-8'));
//out+=fs.readFileSync(__dirname+'/src/dialog.js','utf-8');
//fs.writeFileSync(__dirname+'/ting/ting.js', out.join("\n"), 'utf-8');