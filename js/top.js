$(document).ready(function () {
	$("body").attr("id", "top");

	var tpHtml = "<div id='topcontrol' style=' display:none; position: fixed; bottom: 30px; right: 20px; cursor: pointer;' title='返回顶部'><a style='background: url(./img/d1.jpg) no-repeat scroll 0 0 transparent;color: #FFFFFF;display: inline-block;font-size: 0;height: 54px;text-decoration: none;width: 54px;' href='#top'> </a></div>";
	
	$("body").append(tpHtml);
	
	$(window).scroll(function () {
	  
	    if ($(window).scrollTop() > 300) {
	        $("#topcontrol").fadeIn();
	    }
	    else if ($(window).scrollTop() == 0) {
	        $("#topcontrol").fadeOut();
	    }
	});

	$("#topcontrol").click(function () {
	    $(this).fadeOut();
	});
});


