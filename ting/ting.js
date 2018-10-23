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
		$(this.parentNode).toggleClass("open");
	});
	function closeDropdown(e){
		$(".open[role=dropdown]>.dropdown-toggle",document).each(function(){
			if(this!=this.parentNode && !this.contains(e.target)){
				$(this.parentNode).removeClass("open");
			}
		});
	}
	$(document).on("click",closeDropdown);
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
		var $siblings=$(this.parentNode).children().removeClass("active");
		var index=$(this).index();
		var $content=$(this.parentNode.parentNode).children(".tab-content");
		$content.children(".active").removeClass("active");
		$(this).addClass("active");
		$content.children(".tab-pane").eq(index).addClass("active");
	});
	$(document).on('click',"[role=sidebar-nav]>.sidebar-nav-header",function(e){
		var $this=$(this);
		var $next=$this.next(".sidebar-nav-body");
		if(!$this.hasClass('expanded')){
			var $parent=$this.parent();
			$parent.children(".expanded").removeClass("expanded");
			$parent.children(".sidebar-nav-body").addClass('collapsed');
			
			$this.addClass('expanded');
			$next.removeClass('collapsed');
		}
	});
	
});
$(function(){
	var timer=setTimeout(autoNext,5000);
	function setIndex($carousel,index){
		$carousel.find(".carousel-indicators").each(function(){
			$(this).children("li").removeClass("active").eq(index).addClass("active");
		});
		var $inner=$carousel.find(".carousel-inner");
		$inner.each(function(){
			var $items=$(this).children(".item");
			var ele=$items[index];
			if(ele){
				scroll(this,ele.offsetLeft);
				$items.removeClass("active");
				$(ele).addClass("active");
			}
		});
		clearTimeout(timer);
		timer=setTimeout(autoNext,5000);
	}
	$(document).on('click',"[role=carousel] .carousel-indicators>li",function(e){
		var $this=$(this);
		var index=$this.index('li');
		if(index>=0){
			var $carousel=$this.parentsUntil("[role=carousel]").last().parent();
			setIndex($carousel,index);
		}
	});
	$(document).on('click',"[role=carousel] .carousel-control>.left",function(e){
		var $this=$(this);
		var $carousel=$this.parentsUntil("[role=carousel]").last().parent();
		var index=$carousel.find('.carousel-inner>.item.active').index(".item");
		if(index>0){
			index--;
			setIndex($carousel,index);
		}
	});
	$(document).on('click',"[role=carousel] .carousel-control>.right",function(e){
		var $this=$(this);
		var $carousel=$this.parentsUntil("[role=carousel]").last().parent();
		var $items=$carousel.find('.carousel-inner>.item');
		var index=$items.filter(".active").index(".item");
		if(index<$items.length-1){
			index++;
			setIndex($carousel,index);
		}
	});
	function scroll(ele,to){
		var count=18;
		var begin=ele.scrollLeft;
		var i=1;
		var timer=setInterval(function(){
			if(i<count){
				ele.scrollLeft=begin+(to-begin)*line(i/count);
			}else{
				ele.scrollLeft=to;
				clearInterval(timer);
			}
			i++;
		},50/3);
	}
	function line(rate){
		//return rate;
		return rate+(1-rate)*rate*0.8;
	}
	function autoNext(){
		$("div[role=carousel]",document).each(function(){
			var $carousel=$(this);
			var $items=$carousel.find('.carousel-inner>.item');
			var index=$items.filter(".active").index(".item");
			if(index<$items.length-1){
				index++;
				setIndex($carousel,index);
			}else{
				setIndex($carousel,0);
			}
		});
	}
	
	var startX;
	var startLeft;
	if(document.addEventListener) {
		$(document).on('touchstart',"[role=carousel] .carousel-inner",function(e){
			startX=e.touches[0].pageX;
			startLeft=this.scrollLeft;
			clearTimeout(timer);
		});
		$(document).on('touchmove',"[role=carousel] .carousel-inner",function(e){
			this.scrollLeft=startX-e.touches[0].pageX+startLeft;
		});
		$(document).on('touchend',"[role=carousel] .carousel-inner",function(e){
			var endX=e.changedTouches[0].pageX;
			if(Math.abs(startLeft-this.scrollLeft)/this.offsetWidth>0.2){
				var $this=$(this);
				var $carousel=$this.parentsUntil("[role=carousel]").last().parent();
				var index=$carousel.find('.carousel-inner>.item.active').index(".item");
				if(startX>endX){
					index++;
				}else if(startX<endX){
					index--;
				}
				setIndex($carousel,index);
			}else{
				scroll(this,startLeft);
				timer=setTimeout(autoNext,5000);
			}
		});
	}
});
$(function(){
	function setScrollBarPoi(e){
		var ch=this.clientHeight,sh=this.scrollHeight,st=this.scrollTop;
		if(ch>0 && sh>ch){
			var $this=$(this);
			var scrollBar=$this.data("scrollBar");
			if(!scrollBar){
				scrollBar=document.createElement('div');
				scrollBar.className="scrollBar";
				document.body.appendChild(scrollBar);
				$this.data("scrollBar",scrollBar);
			}
			var ra=ch/sh;
			var th=Math.round(ch*ra);
			var mh=5;
			if(th<mh){
				th=mh;
				ra=(ch-mh)/(sh-ch);
			}
			var tt=Math.round(st*ra);
			var oh=parseInt($(scrollBar).css('height'));
			scrollBar.style.height=(oh-scrollBar.offsetHeight+th)+'px';
			var offset=$this.offset();
			scrollBar.style.left=(offset.left+this.clientLeft+this.clientWidth-scrollBar.offsetWidth)+'px';
			scrollBar.style.top=(offset.top+this.clientTop+tt)+'px';
		}
	}
	function endScroll(e){
		var $this=$(this);
		var scrollBar=$this.data("scrollBar");
		if(scrollBar){
			scrollBar.parentNode.removeChild(scrollBar);
			$this.data("scrollBar",null);
		}
	}
	if('ontouchstart' in document){
		for (var i=0;i<document.styleSheets.length;i++) {
			var rules=document.styleSheets[i].cssRules;
			if(!rules){
				rules=document.styleSheets[i].rules;
			}
			for(var j=0;j<rules.length;j++){
				var rule=rules[j];
				if(rule.selectorText==".scroller"){
					rule.style.overflowY="auto";
				}
			}
		}
		document.addEventListener('scroll',function(e){
			if(e.target==document){
				return ;
			}
			var me=Sky.matches(e.target, "[role=scroller]", this);
			if(me){
				return setScrollBarPoi.call(me,e);
			}
		},true);
	}else{
		$(document).on('mouseenter',"[role=scroller]",setScrollBarPoi);
		$(document).on('wheel',function(e){
			var target=e.target;
			do{
				var wheelDelta = e.wheelDelta;
				if(target.getAttribute('role')=="scroller"){
					var ch=target.clientHeight,sh=target.scrollHeight,st=target.scrollTop;
					if(ch>0 && sh>ch){
						if(wheelDelta>0) {
							if(st>0){
								target.scrollTop=st-=e.wheelDelta;
								setScrollBarPoi.call(target);
								e.preventDefault();
								e.stopPropagation();
								return false;
							}
						}else{
							var maxScrollTop=sh-ch;
							if(maxScrollTop>st){
								st=st-e.wheelDelta;
								target.scrollTop=st=Math.min(st,maxScrollTop);
								setScrollBarPoi.call(target);
								e.preventDefault();
								e.stopPropagation();
								return false;
							}
						}
					}
				}
				target=target.parentNode;
			}while(target && target!=document);
		});
		$(document).on('mouseleave',"[role=scroller]",endScroll);
	}
});