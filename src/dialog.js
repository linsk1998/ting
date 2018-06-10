define('dialog',['exports'],function(exports){
	function Dialog(){
		
	}
	Dialog.prototype.modal=function(){
		this.$modal=$('.modal').appendTo(document.body);
	};
	Dialog.prototype.close=function(){
		this.$modal.destroy();
		this.$modal=null;
	};
	Dialog.prototype.loading=function(show){
		if(!this.$modal){
			this.modal();
		}
		if(show===false){
			this.$modal.removeClass('modal-loading');
		}else{
			this.$modal.addClass('modal-loading');
		}
	};
	Dialog.prototype.msgBox=function(message,title,theme){
		title=title || "消息";
		if(!this.$modal){
			this.$modal=$('.modal.modal-center').appendTo(document.body);
		}else{
			this.$modal.addClass('modal-center').removeClass('modal-loading');
		}
		var me=this;
		var $closeBtn=$('a.close').attr('href',"javascript:void 0").append('×');
		var $dialog=$('.dialog');
		var $body=$('.dialog-body');
		var $confirmBtn=$('a.btn.btn-sm').attr('href',"javascript:void 0").append("确定");
		var icon;
		switch(theme){
			case 'success':
				icon='\uf058';
				break;
			case 'info':
				icon='\uf05a';
				break;
			case 'warning':
				icon='\uf06a';
				break;
			case 'danger':
				icon='\uf057';
				break;
		}
		switch(theme){
			case 'success':
			case 'info':
			case 'warning':
			case 'danger':
				$dialog.addClass('dialog-'+theme);
				$confirmBtn.addClass('btn-'+theme);
				$body.append($('i.fa.fa-3x.fa-pull-left.brand-'+theme).append(icon));
				$body.append($('p').append(message));
				break;
			case 'inverse':
			case 'primary':
				$dialog.addClass('dialog-'+theme);
				$confirmBtn.addClass('btn-'+theme);
				$body.append(message);
				break;
			default:
				$confirmBtn.addClass('btn-primary');
				$body.append(message);
		}
		this.$modal.addClass('.modal-center').append(
			$dialog.append(
				$('.dialog-header').append(
					$('span.dialog-title').append(title),
					$closeBtn
				),
				$body,
				$('.dialog-footer').attr('align',"right").append(
					$confirmBtn
				)
			).css({
				width:"400px",
				maxWidth:"90%"
			})
		);
		var close=this.close.bind(this);
		$confirmBtn.click(close);
		$closeBtn.click(close);
		this.$modal.appendTo(document.body)
	};
	Dialog.prototype.alert=function(message,title){
		title=title || "注意";
		if(!this.$modal){
			this.$modal=$('.modal.modal-center').appendTo(document.body);
		}else{
			this.$modal.addClass('modal-center').removeClass('modal-loading');
		}
		var me=this;
		var $closeBtn=$('a.close').attr('href',"javascript:void 0").append('×');
		var $confirmBtn=$('a.btn.btn-primary.btn-sm').attr('href',"javascript:void 0").append("确定");
		this.$modal.append(
			$('.dialog.dialog-primary').append(
				$('.dialog-header').append(
					$('span.dialog-title').append(title),
					$closeBtn
				),
				$('.dialog-body').append(message),
				$('.dialog-footer').attr('align',"right").append(
					$confirmBtn
				)
			).css({
				width:"400px",
				maxWidth:"90%"
			})
		);
		return new Promise(function(resolve, reject){
			$closeBtn.click(function(){
				me.close();
				reject();
			});
			$confirmBtn.click(function(){
				me.close();
				resolve();
			});
		});
	};
	Dialog.prototype.confirm=function(message,title){
		title=title || "请确认";
		if(!this.$modal){
			this.$modal=$('.modal.modal-center').appendTo(document.body);
		}else{
			this.$modal.addClass('modal-center').removeClass('modal-loading');
		}
		var me=this;
		var $closeBtn=$('a.close').attr('href',"javascript:void 0").append('×');
		var $yesBtn=$('a.btn.btn-info.btn-sm').attr('href',"javascript:void 0").append("是");
		var $noBtn=$('a.btn.btn-default.btn-sm').attr('href',"javascript:void 0").append("否");
		this.$modal.append(
			$('.dialog.dialog-info').append(
				$('.dialog-header').append(
					$('span.dialog-title').append(title),
					$closeBtn
				),
				$('.dialog-body').append(
					$("i.fa.fa-3x.fa-pull-left.brand-info").append('\uf059'),
					$('p').append(message)
				),
				$('.dialog-footer.btn-toolbar').attr('align',"right").append(
					$noBtn,$yesBtn
				)
			).css({
				width:"400px",
				maxWidth:"90%"
			})
		);
		return new Promise(function(resolve, reject){
			$closeBtn.click(function(){
				me.close();
				reject();
			});
			$yesBtn.click(function(){
				me.close();
				resolve(true);
			});
			$noBtn.click(function(){
				me.$modal.destroy();
				me.$modal=null;
				resolve(false);
			});
		});
	};
	Dialog.prototype.prompt=function(message,title){
		title=title || "输入";
		if(!this.$modal){
			this.$modal=$('.modal.modal-center').appendTo(document.body);
		}else{
			this.$modal.addClass('modal-center').removeClass('modal-loading');
		}
		var me=this;
		var $closeBtn=$('a.close').attr('href',"javascript:void 0").append('×');
		var $confirmBtn=$('a.btn.btn-primary.btn-sm').attr('href',"javascript:void 0").append("确认");
		var $input=$('input.form-control');
		this.$modal.append(
			$('.dialog').append(
				$('.dialog-header').append(
					$('span.dialog-title').append(title),
					$closeBtn
				),
				$('.dialog-body').append(
					$('p').append(message),
					$input
				),
				$('.dialog-footer.btn-toolbar').attr('align',"right").append(
					$confirmBtn
				)
			).css({
				width:"400px",
				maxWidth:"90%"
			})
		);
		return new Promise(function(resolve, reject){
			$closeBtn.click(function(){
				me.close();
				reject();
			});
			$confirmBtn.click(function(){
				me.close();
				resolve($input.val());
			});
		});
	};
	exports.Dialog=Dialog;
});
