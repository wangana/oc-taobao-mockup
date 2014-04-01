var delay = 200;
var allCateTimer = null;

$('div#nav > ul > li').hover(function(ev){
	
	var _this = this;
	
	allCateTimer = setTimeout(function(){
		var bottomHeight = document.documentElement.clientHeight - ev.clientY;
		if(bottomHeight <= 250){
			$(_this).addClass('over').find('div.submenubox').addClass('submenuboxBottom').removeClass('disn');
		}else{
			$(_this).addClass('over').find('div.submenubox').removeClass('submenuboxBottom').removeClass('disn');
		}
		
		//兼容IE6隐藏所有select 元素
		$("select").each(function(){
			if($(this).css('visibility') != 'hidden'){
				$(this).addClass('menuVisible').css('visibility', 'hidden');
			}
		});
		
		if($(_this).find("div.subcate").size()<= 0){
			async_topMenu(_this);
		}
	}, delay);
	
},function(){
	
	var _this = this;
	if(allCateTimer){
		clearTimeout(allCateTimer);
	}
	allCateTimer = setTimeout(function(){ 
		$(_this).removeClass('over').find('div.submenubox').addClass('disn');}, delay);
	}
	
);