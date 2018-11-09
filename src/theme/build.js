var fs=require("fs");
var ejs=require('../../lib/ejs');
var Color=require('../../lib/Color');
var config=require('../../config');
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
var template1 = fs.readFileSync(__dirname+'/default.css', 'utf-8');
var template2 = fs.readFileSync(__dirname+'/bootstrap.css', 'utf-8');
var template3 = fs.readFileSync(__dirname+'/material.css', 'utf-8');
config.theme=require('./teal');
fs.writeFileSync(__dirname+'/../../theme/default/teal.css', ejs.render(template1,config), 'utf-8');
fs.writeFileSync(__dirname+'/../../theme/bootstrap/teal.css', ejs.render(template2,config), 'utf-8');
fs.writeFileSync(__dirname+'/../../theme/material/teal.css', ejs.render(template3,config), 'utf-8');
config.theme=require('./red');
fs.writeFileSync(__dirname+'/../../theme/default/red.css', ejs.render(template1,config), 'utf-8');
fs.writeFileSync(__dirname+'/../../theme/bootstrap/red.css', ejs.render(template2,config), 'utf-8');
fs.writeFileSync(__dirname+'/../../theme/material/red.css', ejs.render(template3,config), 'utf-8');
config.theme=require('./indigo');
fs.writeFileSync(__dirname+'/../../theme/default/indigo.css', ejs.render(template1,config), 'utf-8');
fs.writeFileSync(__dirname+'/../../theme/bootstrap/indigo.css', ejs.render(template2,config), 'utf-8');
fs.writeFileSync(__dirname+'/../../theme/material/indigo.css', ejs.render(template3,config), 'utf-8');
config.theme=require('./blue');
fs.writeFileSync(__dirname+'/../../theme/default/blue.css', ejs.render(template1,config), 'utf-8');
fs.writeFileSync(__dirname+'/../../theme/bootstrap/blue.css', ejs.render(template2,config), 'utf-8');
fs.writeFileSync(__dirname+'/../../theme/material/blue.css', ejs.render(template3,config), 'utf-8');
config.theme=require('./purple');
fs.writeFileSync(__dirname+'/../../theme/default/purple.css', ejs.render(template1,config), 'utf-8');
fs.writeFileSync(__dirname+'/../../theme/bootstrap/purple.css', ejs.render(template2,config), 'utf-8');
fs.writeFileSync(__dirname+'/../../theme/material/purple.css', ejs.render(template3,config), 'utf-8');
config.theme=require('./brown');
fs.writeFileSync(__dirname+'/../../theme/default/brown.css', ejs.render(template1,config), 'utf-8');
fs.writeFileSync(__dirname+'/../../theme/bootstrap/brown.css', ejs.render(template2,config), 'utf-8');
fs.writeFileSync(__dirname+'/../../theme/material/brown.css', ejs.render(template3,config), 'utf-8');