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
	$(document).on("click",function(e){
		$.getElementsByClassName(document,"dropdown-menu").forEach(function(ele){
			var parent=ele.parentNode;
			while(parent && parent!=document){
				$.removeClass(parent,"open");
				parent=parent.parentNode;
			};
		});
		var cur=e.target;
		var parent=cur.parentNode;
		while(parent && parent!=document){
			if(parent.getAttribute("role")=="dropdown" && !$.hasClass(cur,"dropdown-menu")){
				$.addClass(parent,"open");
			}else if($.hasClass(cur,"navbar-toggle")){
				$(cur).parents("[role=navbar]").find(".navbar-collapse").toggleClass("collapse");
			}
			var dismiss=cur.getAttribute("data-dismiss");
			if(dismiss){
				$(cur).parents("[role="+dismiss+"]").hide();
			}
			cur=parent;
			parent=cur.parentNode;
		}
	});
});
Sky.attachEvent(window,"load",function(e){
	$("[role=carousel]",document).each(function(){
		var $this=$(this);
		var innerItems=$(this).find(".carousel-inner .item");
		var indicatorsItems=$(this).find(".carousel-indicators li");
		var index=0;
		swith(index);
		function autoNext(){
			index++;
			if(index>=innerItems.length){
				index=0;
			}
			swith(index);
		}
		var t=setInterval(autoNext,5000);
		$this.mouseenter(function(){
			clearInterval(t);
			t=0;
		});
		$this.mouseleave(function(){
			if(!t){
				t=setInterval(autoNext,5000);
			}
		});
		$this.find(".carousel-control .left").click(function(){
			index--;
			if(index<0){
				index=innerItems.length-1;
			}
			swith(index);
		});
		$this.find(".carousel-control .right").click(function(){
			index++;
			if(index>=innerItems.length){
				index=0;
			}
			swith(index);
		});
		indicatorsItems.each(function(index){
			$(this).click(function(){
				swith(index);
			});
		});
		function swith(i){
			index=i;
			for(var i=0;i<innerItems.length;i++){
				if(index==i){
					Sky.addClass(innerItems[i],"active");
				}else{
					Sky.removeClass(innerItems[i],"active");
				}
			}
			for(var i=0;i<indicatorsItems.length;i++){
				if(index==i){
					Sky.addClass(indicatorsItems[i],"active");
				}else{
					Sky.removeClass(indicatorsItems[i],"active");
				}
			}
			innerItems[index].parentNode.appendChild(innerItems[index]);
		}
	});
});