var delay = 200;
var allCateTimer = null;

$('div#nav > ul > li').hover(function(ev){
	
	var $this = this;
	
	allCateTimer = setTimeout(function(){
		var bottomHeight = document.documentElement.clientHeight - ev.clientY;
		if(bottomHeight <= 250){
			$($this).addClass('over').find('div.submenubox').addClass('submenuboxBottom').removeClass('disn');
		}else{
			$($this).addClass('over').find('div.submenubox').removeClass('submenuboxBottom').removeClass('disn');
		}
		
		//兼容IE6隐藏所有select 元素
		$("select").each(function(){
			if($(this).css('visibility') != 'hidden'){
				$(this).addClass('menuVisible').css('visibility', 'hidden');
			}
		});
		
		if($($this).find("div.subcate").size()<= 0){
			async_topMenu($this);
		}
	}, delay);
	
},function(){
	
	var $this = this;
	if(allCateTimer){
		clearTimeout(allCateTimer);
	}
	allCateTimer = setTimeout(function(){ 
		$($this).removeClass('over').find('div.submenubox').addClass('disn');}, delay);
	}
	
);