$(document).ready(function () {
	
	$(window).scroll(function () {
	  
	    if ($(window).scrollTop() > 130) {
	        $(".J-HdHead").fadeIn();
	        $(".J-HdHead").css("z-index","99999");
	    }
	    else if ($(window).scrollTop() <= 130) {
	        $(".J-HdHead").fadeOut();
	    }
	});
});