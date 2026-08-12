
$(function(){
	$(document).on("click","[data-toggle=collapse]",function(e){
		var $this=$(this);
		var target=$this.attr("data-target");
		if(target){
			var $target=$(target);
			var parent = $this.attr("data-parent");
			if(parent){
				if($target.hasClass("show")) {
					$target.removeClass("show");
					$this.removeClass("collapsed");
				} else {
					$(parent).find(".collapse").each(function(){
						var $this=$(this);
						$this.removeClass("show");
					})
					$target.addClass("show");
					$this.addClass("collapsed");
				}
			} else {
				$target.toggleClass("show");
				$this.toggleClass("collapsed");
			}
		}
	});
	$(document).on("click","[data-toggle=collapsible]",function(e){
		var $this=$(this);
		var target=$this.attr("data-target");
		if(target){
			var $target=$(target);
			var parent = $target.attr("data-parent");
			if(parent){
				if($target.hasClass("hide")) {
					$target.removeClass("hide");
					$this.removeClass("collapsed");
				} else {
					$(parent).find(".collapsible").each(function(){
						var $this=$(this);
						if($this.attr("data-parent")==parent) {
							$this.removeClass("hide");
						}
					})
					$target.addClass("hide");
				}
			} else {
				$target.toggleClass("hide");
			}
		}
	});
	$(document).on("click",".accordion-button",function(e){
		var $this=$(this);
		var target=$this.attr("data-target");
		if(target) return;
		var $item = $this.closest(".accordion-item");
		if($item.hasClass("accordion-collapsed")){
			$item.siblings().addClass("accordion-collapsed");
			$item.removeClass("accordion-collapsed");
		} else {
			$item.addClass("accordion-collapsed");
		}
	});
	$(document).on("click",".sidebar a,.sidebar .sidebar-icon",function(e){
		var $this=$(this);
		var $li=$this.parent();
		$li.toggleClass("sidebar-item-collapsed");
		if($li.children(".sidebar-collapsible").length === 0) {
			$this.closest(".sidebar").find("li").removeClass("active");
			$li.addClass("active");
		}
	});
	$(document).on("mousedown",function(e){
		$(".sidebar-collapsed ul.sidebar-submenu").each(function(){
			if(!this.contains(e.target)){
				$(this).closest("li").addClass("sidebar-item-collapsed");
			}
		});
	});
	$(document).on("click",".dropdown .dropdown-toggle",function(e){
		$(this).closest(".dropdown").toggleClass("open");
	});
	$(document).on("mousedown",function(e){
		$(".dropdown.open").each(function(){
			if(!this.contains(e.target)){
				$(this).removeClass("open");
			}
		});
	});
	$(document).on("click",".alert-dismissible .close",function(e){
		var dismiss = $(this).attr("data-dismiss");
		if(!dismiss){
			$(this).closest(".alert-dismissible").remove();
		}
	});
	$(document).on('click',"[data-dismiss]",function(e){
		var dismiss=this.getAttribute("data-dismiss");
		if(dismiss){
			$(this).parents("[role="+dismiss+"]").hide();
		}
	});
	$(document).on('click',".navbar-toggle",function(e){
		var $this=$(this);
		var target=$this.attr("data-target");
		if(target) return;
		var $dropdown = $(this.parentNode).siblings(".navbar-responsive-dropdown");
		if($dropdown.hasClass("show")){
			$dropdown.removeClass("show").addClass("hide");
		} else {
			$dropdown.addClass("show").removeClass("hide");
		}
	});
	$(document).on('click',"[role=tabbable]>.nav>li",function(e){
		$(this.parentNode).children().removeClass("active");
		var index=$(this).index();
		var $content=$(this.parentNode.parentNode).children(".tabs-content");
		$(this).addClass("active");
		$content.children().removeClass("active");
		$content.children(".tabs-pane").eq(index).addClass("active");
	});
	$(document).on('click',"[role=presentation]",function(e){
		if(e.target.tagName=="A") {
			e.preventDefault();
		}
		var $this=$(this);
		if($this.hasClass("active")) return;
		var $target=$(e.target);
		var target = $target.attr("data-target") || $target.attr("href");
		if(target){
			$this.siblings().removeClass("active");
			$this.addClass("active");
		}
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
	$(document).on('click',".tree-expander",function(e){
		$(this).parent().toggleClass("tree-collapsed");
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
	$('[role=carousel]').each(function() {
		var $carousel = $(this);
		var timer = null;
		var AUTO_PLAY_INTERVAL = 5000;

		// Get all carousel items
		function getItems() {
			return $carousel.find('.carousel-inner').children('.carousel-item, .item');
		}

		// Smooth scroll using setInterval with easing
		function smoothScroll(ele, to, duration) {
			duration = duration || 300;
			var begin = ele.scrollLeft;
			var startTime = new Date().getTime();
			var scrollTimer = setInterval(function() {
				var elapsed = new Date().getTime() - startTime;
				var progress = Math.min(elapsed / duration, 1);
				// ease-out cubic
				var eased = 1 - Math.pow(1 - progress, 3);
				ele.scrollLeft = begin + (to - begin) * eased;
				if (progress >= 1) {
					clearInterval(scrollTimer);
				}
			}, 16);
		}

		// Reset auto-play timer
		function resetTimer() {
			if (timer) clearTimeout(timer);
			timer = setTimeout(next, AUTO_PLAY_INTERVAL);
		}

		// Pause auto-play
		function pauseTimer() {
			if (timer) {
				clearTimeout(timer);
				timer = null;
			}
		}

		// Set active item by index (with loop-around)
		function setIndex(index) {
			var $items = getItems();
			var count = $items.length;
			if (count === 0) return;

			// Normalize index with wrap-around
			index = ((index % count) + count) % count;

			// Update indicators
			$carousel.find('.carousel-indicators').children().removeClass('active').eq(index).addClass('active');

			// Update items
			$items.removeClass('active');
			var $target = $items.eq(index);
			$target.addClass('active');

			// Scroll inner container
			smoothScroll($target.parent()[0], $target[0].offsetLeft);

			// Resume auto-play
			resetTimer();
		}

		// Go to next item
		function next() {
			var $items = getItems();
			var index = $items.filter('.active').index();
			setIndex((index + 1) % $items.length);
		}

		// Go to previous item
		function prev() {
			var $items = getItems();
			var count = $items.length;
			var index = $items.filter('.active').index();
			setIndex((index - 1 + count) % count);
		}

		// ==================== Event bindings ====================

		// Indicator click
		$carousel.on('click', '.carousel-indicators li', function() {
			var index = $(this).index();
			if (index >= 0) {
				setIndex(index);
			}
		});

		// Prev button (support both .carousel-control-prev and .carousel-control .left)
		$carousel.on('click', '.carousel-control-prev, .carousel-control .left', function() {
			prev();
		});

		// Next button (support both .carousel-control-next and .carousel-control .right)
		$carousel.on('click', '.carousel-control-next, .carousel-control .right', function() {
			next();
		});

		// Pause auto-play on hover
		$carousel.on('mouseenter', function() { pauseTimer(); });
		$carousel.on('mouseleave', function() { resetTimer(); });

		// Touch support
		if ('ontouchstart' in window) {
			var touchState = null;
			var inner = $carousel.find('.carousel-inner')[0];
			if (inner) {
				inner.addEventListener('touchstart', function(e) {
					touchState = {
						startX: e.touches[0].pageX,
						startY: e.touches[0].pageY,
						startLeft: inner.scrollLeft,
						moved: false
					};
					pauseTimer();
				}, false);

				inner.addEventListener('touchmove', function(e) {
					if (!touchState) return;
					var dx = e.touches[0].pageX - touchState.startX;
					var dy = e.touches[0].pageY - touchState.startY;

					if (Math.abs(dx) > Math.abs(dy)) {
						e.preventDefault();
						touchState.moved = true;
					}
					inner.scrollLeft = touchState.startLeft - dx;
				}, false);

				inner.addEventListener('touchend', function(e) {
					if (!touchState) return;
					var endX = e.changedTouches[0].pageX;
					var dx = touchState.startX - endX;
					var threshold = inner.offsetWidth * 0.2;

					if (touchState.moved && Math.abs(dx) > threshold) {
						dx > 0 ? next() : prev();
					} else {
						// Snap back to current item
						var $active = getItems().filter('.active');
						smoothScroll(inner, $active.length ? $active[0].offsetLeft : touchState.startLeft, 200);
						resetTimer();
					}
					touchState = null;
				}, false);
			}
		}

		// Initialize auto-play
		resetTimer();
	});
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
(function(){
	function getCookie(name){
		var arr=document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
		if(arr != null) return decodeURIComponent(arr[2]); return null;
	}
	function setCookie(name,value){
		document.cookie=name+'='+encodeURIComponent(value)+'; path=/;';
	}
	function getLastScript() {
		var scripts = document.getElementsByTagName('SCRIPT');
		return scripts[scripts.length - 1];
	}
	function setDark(dark){
		if(dark){
			document.documentElement.className = "dark";
			setCookie('dark','1');
		}else{
			document.documentElement.className = "light";
			setCookie('dark','0');
		}
	}
	var dark = getCookie('dark')=='1';
	if(dark){
		document.documentElement.className = "dark";
	} else {
		document.documentElement.className = "light";
	}
	window.initDarkLi = function() {
		var script = getLastScript();
		var ul = $(script).prev();
		var $dropdown;
		var $icon;
		var $lightLi;
		var $lightCheck;
		var $darkLi;
		var $darkCheck;
		ul.append(
			$dropdown=$('<li class="dropdown"></li>').append(
				$('<a class="dropdown-toggle px-2" href="javascript:void 0"></a>').append(
					$icon=$('<i class="icon-fw icon-lg fa"></i>').text(dark?'\uf186':'\uf185'),
					$('<span class="fa">&#xf0d7;</span>')
				),
				$('<ul class="dropdown-menu dropdown-menu-right" style="min-width: 140px;"></ul>').append(
					$lightLi=$('<li></li>').addClass(dark?'':'active').append(
						$('<a href="javascript:void 0" class="dropdown-item"></a>').append(
							$lightCheck=$('<span class="pull-right text-muted">✓</span>').addClass(dark?'hide':''),
							$('<i class="icon-fw icon-left fa text-muted">&#xf185;</i>'),
							'白天模式'
						).click(function() {
							setDark(false);
							$icon.text('\uf185');
							$darkCheck.addClass('hide');
							$lightCheck.removeClass('hide');
							$darkLi.removeClass('active');
							$lightLi.addClass('active');
							$dropdown.removeClass('open');
						})
					),
					$darkLi=$('<li></li>').addClass(dark?'active':'').append(
						$('<a href="javascript:void 0" class="dropdown-item"></a>').append(
							$darkCheck=$('<span class="pull-right text-muted">✓</span>').addClass(dark?'':'hide'),
							$('<i class="icon-fw icon-left fa text-muted">&#xf186;</i>'),
							'黑夜模式'
						).click(function() {
							setDark(true);
							$icon.text('\uf186');
							$lightCheck.addClass('hide');
							$darkCheck.removeClass('hide');
							$lightLi.removeClass('active');
							$darkLi.addClass('active');
							$dropdown.removeClass('open');
						})
					)
				)
			)
		);
	}
})();
