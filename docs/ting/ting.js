
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
		var $content=$(this.parentNode.parentNode).children(".tabs-content");
		$content.children(".active").removeClass("active");
		$(this).addClass("active");
		$content.children(".tabs-pane").eq(index).addClass("active");
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
	$(document).on('click',"[role=tree] .tree-caret",function(e){
		$(this).parent().toggleClass("collapse");
	});
	if(document.addEventListener){
		$(document).on('click',"[role=radio]>label",function(e){
			if(this!=e.target) return ;
			var $this=$(this);
			if(!$this.hasClass('disabled')){
				var name=$this.children("input[type=radio]").prop('name');
				$this.parents("form").find("input").filter(function(){
					return this.name==name;
				}).prop('checked',false).parent().removeClass("checked");
				$this.addClass("checked").children("input").prop('checked',true);
			}
		});
		$(document).on('click',"[role=checkbox]>label",function(e){
			if(this!=e.target) return ;
			var $this=$(this);
			if(!$this.hasClass('disabled')){
				if($this.hasClass('checked')){
					$this.removeClass('checked').children("input").prop('checked',false);
				}else{
					$this.addClass('checked').children("input").prop('checked',true);
				}
			}
		});
	}
});
$(function(){
	var timer=setTimeout(autoNext,5000);
	function setIndex($carousel,index){
		$carousel.find(".carousel-indicators").each(function(){
			$(this).children().removeClass("active").eq(index).addClass("active");
		});
		var $inner=$carousel.find(".carousel-inner");
		$inner.each(function(){
			var $items=$(this).children();
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
	$(document).on('click',"[role=carousel] .carousel-control-prev",function(e){
		var $this=$(this);
		var $carousel=$this.parentsUntil("[role=carousel]").last().parent();
		var index=$carousel.find('.carousel-inner>.active').index();
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
	$(document).on('click',"[role=carousel] .carousel-control-next",function(e){
		var $this=$(this);
		var $carousel=$this.parentsUntil("[role=carousel]").last().parent();
		var $items=$carousel.find('.carousel-inner>*');
		var index=$items.filter(".active").index();
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
$(function() {
	if('popover' in document.body) {
		$(document).on('mousedown',function(e) {
			$("[popover]").each(function() {
				if(!this.contains(e.target)) {
					this.hidePopover();
				}
			});
		});
	} else {
		$(document).on('click',"[popovertarget]",function(e) {
			var popoverTargetId = $(this).attr('popovertarget');
			var $popoverTarget = $(document.getElementById(popoverTargetId));
			$popoverTarget.css('display', 'block');
		});
		$(document).on('mouseenter',"[interestfor]",function(e) {
			var popoverTargetId = $(this).attr('interestfor');
			var $popoverTarget = $(document.getElementById(popoverTargetId));
			$popoverTarget.css('display', 'block');
		});
		$(document).on('click',"[popovertargetaction=hide]",function(e) {
			var popoverTargetId = $(this).attr('popovertarget');
			var $popoverTarget = $(document.getElementById(popoverTargetId));
			$popoverTarget.css('display', 'none');
		});
		$(document).on('mousedown',function(e) {
			if($(e.target).is('[interestfor],[interestfor] *')) return;
			$("[popover]").each(function() {
				if(!this.contains(e.target)) {
					$(this).css('display', 'none');
				}
			});
		});
	}
});
