(function(){
	function getCookie(name){
		var arr=document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
		if(arr != null) return decodeURIComponent(arr[2]); return null;
	}
	function setCookie(name,value){
		document.cookie=name+'='+encodeURIComponent(value)+'; path=/;';
	}
	window.getCookie = getCookie;
	window.setCookie = setCookie;
	function getLastScript() {
		var scripts = document.getElementsByTagName('SCRIPT');
		return scripts[scripts.length - 1];
	}
	window.getLastScript = getLastScript;
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
				$('<a class="px-2" href="javascript:void 0"></a>').append(
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
