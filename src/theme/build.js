var fs=require("fs");
var ejs=require('../lib/ejs');
var Color=require('../lib/Color');
var config=require('../config');
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
var template1 = fs.readFileSync(__dirname+'/default.css', 'utf-8');
var template2 = fs.readFileSync(__dirname+'/bootstrap.css', 'utf-8');
var template3 = fs.readFileSync(__dirname+'/material.css', 'utf-8');
config.theme=require('./teal');
fs.writeFileSync(__dirname+'/default/teal.css', ejs.render(template1,config), 'utf-8');
fs.writeFileSync(__dirname+'/bootstrap/teal.css', ejs.render(template2,config), 'utf-8');
fs.writeFileSync(__dirname+'/material/teal.css', ejs.render(template3,config), 'utf-8');
config.theme=require('./red');
fs.writeFileSync(__dirname+'/default/red.css', ejs.render(template1,config), 'utf-8');
fs.writeFileSync(__dirname+'/bootstrap/red.css', ejs.render(template2,config), 'utf-8');
fs.writeFileSync(__dirname+'/material/red.css', ejs.render(template3,config), 'utf-8');
config.theme=require('./indigo');
fs.writeFileSync(__dirname+'/default/indigo.css', ejs.render(template1,config), 'utf-8');
fs.writeFileSync(__dirname+'/bootstrap/indigo.css', ejs.render(template2,config), 'utf-8');
fs.writeFileSync(__dirname+'/material/indigo.css', ejs.render(template3,config), 'utf-8');
config.theme=require('./blue');
fs.writeFileSync(__dirname+'/default/blue.css', ejs.render(template1,config), 'utf-8');
fs.writeFileSync(__dirname+'/bootstrap/blue.css', ejs.render(template2,config), 'utf-8');
fs.writeFileSync(__dirname+'/material/blue.css', ejs.render(template3,config), 'utf-8');
config.theme=require('./purple');
fs.writeFileSync(__dirname+'/default/purple.css', ejs.render(template1,config), 'utf-8');
fs.writeFileSync(__dirname+'/bootstrap/purple.css', ejs.render(template2,config), 'utf-8');
fs.writeFileSync(__dirname+'/material/purple.css', ejs.render(template3,config), 'utf-8');
config.theme=require('./brown');
fs.writeFileSync(__dirname+'/default/brown.css', ejs.render(template1,config), 'utf-8');
fs.writeFileSync(__dirname+'/bootstrap/brown.css', ejs.render(template2,config), 'utf-8');
fs.writeFileSync(__dirname+'/material/brown.css', ejs.render(template3,config), 'utf-8');