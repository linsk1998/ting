(function() {
	var html5Styles,unknownElements;
	try {
		var a = document.createElement('a');
		a.innerHTML = '<xyz></xyz>';
		//if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
		html5Styles = ('hidden' in a);

		unknownElements=a.childNodes.length == 1 || (function() {
		  // assign a false positive if unable to shiv
		  (document.createElement)('a');
		  var frag = document.createDocumentFragment();
		  return (
			typeof frag.cloneNode == 'undefined' ||
			typeof frag.createDocumentFragment == 'undefined' ||
			typeof frag.createElement == 'undefined'
		  );
		}());
		'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video'
		.split(" ").forEach(function(tag){
			document.createElement(tag);
		});
	} catch(e) {
	  // assign a false positive if detection fails => unable to shiv
	  html5Styles=true;
	  unknownElements=true;
	}
	Sky.support.html5Styles=html5Styles;
	Sky.support.unknownElements=unknownElements;
}());


$(function(){
	$(document).on("click","[role=dropdown]>.dropdown-toggle",function(e){
		$(this.parentNode).addClass("open");
	});
	$(document).on("mousedown",function(e){
		$(".open[role=dropdown]>ul.dropdown-menu",document).each(function(){
			if(!this.contains(e.target)){
				$(this.parentNode).removeClass("open");
			}
		});
	});
	$(document).on('click',"[data-dismiss]",function(e){
		var dismiss=this.getAttribute("data-dismiss");
		if(dismiss){
			$(this).parents("[role="+dismiss+"]").hide();
		}
	});
	$(document).on('click',"[role=navbar] button.navbar-toggle",function(e){
		$(this.parentNode).siblings(".navbar-collapse").toggleClass("collapse");
	}); 
	$(document).on('click',"[role=tabbable]>.nav>li",function(e){
		var siblings=Array.from(this.parentNode.children);
		var index=siblings.indexOf(this);
		var $tabbable=$(this.parentNode.parentNode);
		$tabbable.find(".active").removeClass("active");
		$(this).addClass("active");
		$tabbable.find(".tab-pane").eq(index).addClass("active");
	});
});
$(function(){
	$(document).on('click',"[role=carousel] .carousel-indicators>li",function(e){
		var $this=$(this);
		$this.siblings('li').removeClass("active");
		$this.addClass("active");
		var index=$this.index();
		var $inner=$this.parent().siblings(".carousel-inner");
		$inner.children(".item").removeClass("active").eq(index).addClass("active");
	});
});