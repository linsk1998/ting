function getStyle(sname){
	for (var i=0;i<document.styleSheets.length;i++) {
		var rules;
		if (document.styleSheets[i].cssRules) {
			rules = document.styleSheets[i].cssRules;
		} else {
			rules = document.styleSheets[i].rules;
		}
		for (var j=0;j<rules.length;j++) {
			if(rules[j].selectorText){
				var selectorTexts=rules[j].selectorText.replace(/::/g,":").split(",");
				for(var k=0;k<selectorTexts.length;k++){
					if (selectorTexts[k].trim() == sname) {
						return rules[j].style;
					}
				}
			}
		}
	}
};
function getCode($wrap){
	var $icons=$wrap.find("i.fa");
	var arr=[];
	$icons.each(function(){
		var className=this.className.replace(/fa/,"").trim();
		var style=getStyle("."+className+":before");
		var content=style.content;
		var code=content.replace("'","").charCodeAt(0);
		arr.push({code:code,className:className});
	});
	arr.sort(function(a,b){
		return a.code-b.code;
	});
	arr=arr.map(function(item){
		var code=item.code.toString(16);
		var className=item.className;
		return '<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6"><i class="fa fa-fw">&#x'+code+';</i>'+className+'<span class="text-muted">(&amp;#x'+code+';)</span></div>';
	});
	console.log(arr.join('\n'));
}
//getCode($("#transportation"))
function getAllName(){
	var data={};
	$.query(".fa").each(function(){
		var next=this.nextSibling;
		var name=next.data;
		var code=this.firstChild.data.charCodeAt(0);
		if((name in data) && data[name]!==code){
			console.log(name+" is extis");
		}
		data[name]=code;
	});
	console.log(JSON.stringify(data));
}

var data={"glass":61440,"music":61441,"search":61442,"envelope":61443,"heart":61444,"star":61445,"star-empty":61446,"user":61447,"film":61448,"ok":61452,"remove":61453,"close":61453,"zoom-in":61454,"zoom-out":61456,"power-off":61457,"off":61457,"signal":61458,"cog":61459,"gear":61459,"trash":61460,"home":61461,"clock":61463,"time":61463,"road":61464,"save":61465,"inbox":61468,"refresh":61473,"lock":61475,"flag":61476,"headphones":61477,"volume-off":61478,"volume-down":61479,"volume-up":61480,"qrcode":61481,"barcode":61482,"tag":61483,"tags":61484,"book":61485,"bookmark":61486,"print":61487,"camera":61488,"video-camera":61501,"picture":61502,"photo":61502,"image":61502,"pencil":61504,"map-marker":61505,"adjust":61506,"tint":61507,"edit":61508,"share":61509,"check":61510,"move":61511,"plus-sign":61525,"minus-sign":61526,"error-sign":61527,"remove-sign":61527,"ok-sign":61528,"question-sign":61529,"info-sign":61530,"crosshairs":61531,"remove-circle":61532,"ok-circle":61533,"ban":61534,"turn-right":61540,"plus":61543,"minus":61544,"asterisk":61545,"exclamation-sign":61546,"gift":61547,"leaf":61548,"fire":61549,"eye":61550,"eye-slash":61552,"warning":61553,"plane":61554,"calendar":61555,"random":61556,"comment":61557,"magnet":61558,"retweet":61561,"shopping-cart":61562,"folder":61563,"folder-close":61563,"folder-open":61564,"bar-chart":61568,"camera-retro":61571,"key":61572,"cogs":61573,"comments":61574,"thumbs-up":61575,"thumbs-down":61576,"star-half":61577,"heart-empty":61578,"sign-out":61579,"thumb-tack":61581,"external-link":61582,"sign-in":61584,"trophy":61585,"open":61587,"lemon":61588,"phone":61589,"bookmark-empty":61591,"phone-sign":61592,"unlock":61596,"credit-card":61597,"rss":61598,"hdd":61600,"bullhorn":61601,"bell-empty":61602,"certificate":61603,"globe":61612,"wrench":61613,"tasks":61614,"filter":61616,"briefcase":61617,"group":61632,"cloud":61634,"flask":61635,"navicon":61641,"reorder":61641,"magic":61648,"truck":61649,"money":61654,"sort":61660,"sort-down":61661,"sort-up":61662,"envelope-alt":61664,"gavel":61667,"dashboard":61668,"comment-alt":61669,"comments-alt":61670,"bolt":61671,"sitemap":61672,"umbrella":61673,"lightbulb":61675,"exchange":61676,"cloud-download":61677,"cloud-upload":61678,"suitcase":61682,"bell":61683,"coffee":61684,"cutlery":61685,"building":61687,"fighter-jet":61691,"beer":61692,"desktop":61704,"laptop":61705,"tablet":61706,"mobile":61707,"quote-left":61709,"quote-right":61710,"spinner":61712,"reply":61714,"turn-left":61714,"smile":61720,"frown":61721,"meh":61722,"gamepad":61723,"keyboard":61724,"flag-white":61725,"flag-checkered":61726,"terminal":61728,"code":61729,"reply-all":61730,"star-half-empty":61731,"location-arrow":61732,"crop":61733,"code-fork":61734,"question":61736,"info":61737,"exclamation":61738,"eraser":61741,"puzzle-piece":61742,"microphone":61744,"microphone-slash":61745,"shield":61746,"calendar-empty":61747,"fire-extinguisher":61748,"rocket":61749,"anchor":61757,"unlock-alt":61758,"bullseye":61760,"ellipsis":61761,"ellipsis-v":61762,"rss-sign":61763,"ticket":61765,"level-up":61768,"level-down":61769,"pencil-sign":61771,"ex-link-sign":61772,"share-sign":61773,"compass":61774,"sort-alpha-asc":61789,"sort-alpha-desc":61790,"sort-amount-asc":61792,"sort-amount-desc":61793,"sort-numeric-asc":61794,"sort-numeric-desc":61795,"female":61826,"male":61827,"sun":61829,"moon":61830,"archive":61831,"bug":61832,"wheelchair":61843,"space-shuttle":61847,"envelope-sign":61849,"university":61852,"bank":61852,"institution":61852,"graduation-cap":61853,"mortar-board":61853,"language":61867,"fax":61868,"child":61870,"paw":61872,"spoon":61873,"cube":61874,"cubes":61875,"recycle":61880,"tree":61883,"database":61888,"circle-notch":61902,"paper-plane":61912,"send":61912,"paper-plane-alt":61913,"history":61914,"circle-thin":61915,"sliders":61918,"share-alt":61920,"share-alt-sign":61921,"bomb":61922,"soccer":61923,"tty":61924,"binoculars":61925,"plug":61926,"newspaper":61930,"wifi":61931,"calculator":61932,"bell-slash":61942,"bell-slash-o":61943,"trash-alt":61944,"copyright":61945,"at":61946,"eyedropper":61947,"paint-brush":61948,"birthday-cake":61949,"area-chart":61950,"pie-chart":61952,"line-chart":61953,"toggle-off":61956,"toggle-on":61957,"bicycle":61958,"bus":61959,"cc":61962,"cart-plus":61975,"cart-down":61976,"diamond":61977,"ship":61978,"user-secret":61979,"motorcycle":61980,"street-view":61981,"heartbeat":61982,"server":62003,"user-add":62004,"user-remove":62005,"bed":62006,"hotel":62006,"battery":62016,"battery-4":62016,"battery-3":62017,"battery-2":62018,"battery-1":62019,"battery-0":62020,"battery-empty":62020,"mouse-pointer":62021,"i-cursor":62022,"object-group":62023,"object-ungroup":62024,"sticky-note":62025,"sticky-note-empty":62026,"clone":62029,"balance-scale":62030,"hourglass-0":62032,"hourglass-1":62033,"hourglass-2":62034,"hourglass-3":62035,"hourglass":62036,"trademark":62044,"registered":62045,"creative-commons":62046,"television":62060,"tv":62060,"calendar-plus":62065,"calendar-minus":62066,"calendar-times":62067,"calendar-check":62068,"industry":62069,"map-pin":62070,"map-signs":62071,"map-alt":62072,"map":62073,"commenting":62074,"commenting-alt":62075,"credit-card-alt":62083,"shopping-bag":62096,"shopping-basket":62097,"hashtag":62098,"bluetooth":62099,"bluetooth-b":62100,"percent":62101,"universal-access":62106,"wheelchair-alt":62107,"question-circle":62108,"blind":62109,"fullscreen":61618,"resize-vertical":61565,"resize-horizontal":61566,"download":61466,"upload":61467,"for":61838,"back":61840,"chevron-left":61523,"chevron-right":61524,"chevron-up":61559,"chevron-down":61560,"arrow-left":61536,"arrow-right":61537,"arrow-up":61538,"arrow-down":61539,"hand-right":61604,"hand-left":61605,"hand-up":61606,"hand-down":61607,"sign-left":61608,"sign-right":61609,"sign-up":61610,"sign-down":61611,"caret-down":61655,"caret-up":61656,"caret-left":61657,"caret-right":61658,"angle-double-left":61696,"angle-double-right":61697,"angle-double-up":61698,"angle-double-down":61699,"angle-left":61700,"angle-right":61701,"angle-up":61702,"angle-down":61703,"toggle-down":61776,"toggle-up":61777,"toggle-right":61778,"toggle-left":61841,"long-down":61813,"long-up":61814,"long-left":61815,"long-right":61816,"file":61462,"file-text":61686,"file-alt":61787,"file-text-alt":61788,"file-pdf":61889,"file-word":61890,"file-excel":61891,"file-powerpoint":61892,"file-photo":61893,"file-image":61893,"file-picture":61893,"file-archive":61894,"file-zip":61894,"file-sound":61895,"file-audio":61895,"file-movie":61896,"file-video":61896,"file-code":61897,"thumbs-up-alt":61796,"thumbs-down-alt":61797,"hand-grab":62037,"hand-rock":62037,"hand-stop":62038,"hand-paper":62038,"hand-scissors":62039,"hand-lizard":62040,"hand-spock":62041,"hand-pointer":62042,"hand-peace":62043,"play-circle":61469,"step-backward":61512,"fast-backward":61513,"backward":61514,"play":61515,"pause":61516,"stop":61517,"forward":61518,"fast-forward":61520,"step-forward":61521,"eject":61522,"expand":61541,"compress":61542,"play-sign":61764,"youtube-play":61802,"pause-sign":62091,"pause-circle":62092,"stop-sign":62093,"stop-circle":62094,"unchecked":61590,"disc":61713,"circle":61708,"dot-circle":61842,"square":61590,"minus-square":61767,"plus-square":61846,"check-square":61510,"ambulance":61689,"car":61881,"cab":61882,"taxi":61882,"train":62008,"subway":62009,"th-large":61449,"th":61450,"th-list":61451,"rotate-right":61470,"repeat":61470,"list-alt":61474,"font":61489,"bold":61490,"italic":61491,"text-height":61492,"text-width":61493,"align-left":61494,"align-center":61495,"align-right":61496,"align-justify":61497,"list":61498,"outdent":61499,"dedent":61499,"indent":61500,"chain":61633,"link":61633,"cut":61636,"scissors":61636,"files":61637,"copy":61637,"paperclip":61638,"disk":61639,"floppy":61639,"list-ul":61642,"list-ol":61643,"strikethrough":61644,"underline":61645,"table":61646,"columns":61659,"undo":61666,"rotate-left":61666,"clipboard":61674,"paste":61674,"chain-broken":61735,"unlink":61735,"superscript":61739,"subscript":61740,"header":61916,"paragraph":61917,"twitter-sign":61569,"facebook-sign":61570,"linkedin-sign":61580,"github-sign":61586,"twitter":61593,"facebook":61594,"github":61595,"pinterest":61650,"pinterest-sign":61651,"google-plus-sign":61652,"google-plus":61653,"linkedin":61665,"github-alt":61715,"maxcdn":61750,"html5":61755,"css3":61756,"btc":61786,"bitcoin":61786,"youtube-sign":61798,"youtube":61799,"dropbox":61803,"stack-overflow":61804,"instagram":61805,"apple":61817,"windows":61818,"android":61819,"linux":61820,"dribbble":61821,"skype":61822,"foursquare":61824,"trello":61825,"vk":61833,"weibo":61834,"renren":61835,"pagelines":61836,"stack-exchange":61837,"vimeo-sign":61844,"slack":61848,"wordpress":61850,"openid":61851,"yahoo":61854,"google":61856,"delicious":61861,"digg":61862,"drupal":61865,"joomla":61866,"steam":61878,"steam-sign":61879,"spotify":61884,"deviantart":61885,"soundcloud":61886,"vine":61898,"codepen":61899,"jsfiddle":61900,"git-sign":61906,"git":61907,"tencent-weibo":61909,"qq":61910,"weixin":61911,"twitch":61928,"yelp":61929,"paypal":61933,"google-wallet":61934,"cc-visa":61936,"cc-mastercard":61937,"cc-amex":61939,"cc-paypal":61940,"lastfm":61954,"lastfm-sign":61955,"simplybuilt":61973,"skyatlas":61974,"pinterest-p":62001,"whatsapp":62002,"medium":62010,"opencart":62013,"expeditedssl":62014,"cc-jcb":62027,"cc-diners-club":62028,"gg":62048,"gg-circle":62049,"tripadvisor":62050,"odnoklassniki":62051,"get-pocket":62053,"wikipedia-w":62054,"safari":62055,"chrome":62056,"firefox":62057,"opera":62058,"ie":62059,"500px":62062,"amazon":62064,"houzz":62076,"vimeo":62077,"black-tie":62078,"fonticons":62080,"reddit-alien":62081,"edge":62082,"codiepie":62084,"modx":62085,"fort-awesome":62086,"usb":62087,"product-hunt":62088,"mixcloud":62089,"scribd":62090,"gitlab":62102,"wpbeginner":62103,"wpforms":62104,"envira":62105,"fa":62132,"font-awesome":62132};

var fs=require("fs");
var fileContent=[];
for(var name in data){
	fileContent.push('.fa-'+name+':before{ content:"\\'+data[name].toString(16)+'";}');
}
for(var name in data){
	fileContent.push('.fa-'+name+"{ *zoom:expression(this.runtimeStyle['zoom']='1',this.innerHTML='&#x"+data[name].toString(16)+";')}");
}
fs.writeFileSync(__dirname+'/ting/font-awesome.css', fileContent.join("\n"), 'utf-8');
fileContent=[];
fileContent.push(Object.keys(data).map(function(item){
	return '.icon-'+item;
}).join(","));
fileContent.push('{ display:inline-block; font-family:FontAwesome; font-style:normal; font-weight:normal; -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;}');
for(var name in data){
	fileContent.push('.icon-'+name+':before{ content:"\\'+data[name].toString(16)+'";}');
}
for(var name in data){
	fileContent.push('.icon-'+name+"{ *zoom:expression(this.runtimeStyle['zoom']='1',this.innerHTML='&#x"+data[name].toString(16)+";')}");
}
fs.writeFileSync(__dirname+'/ting/icons.css', fileContent.join("\n"), 'utf-8');