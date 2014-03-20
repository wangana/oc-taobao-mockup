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

	$("#attr-searchtab").mouseover(function(){
		$("#attr-searchtab").css("background-color"," #f5f5f5");
		$("#attr-searchtab-h").css("background-color"," #ffffff");
	});
	$("#attr-searchtab").mouseout(function(){
		$("#attr-searchtab").css("background-color","#ffffff");
		$("#attr-searchtab-h").css("background-color","#f5f5f5");
	});
	$("#attr-searchtab").click(function(){
		if ($(this).hasClass("attr-shop")){
			$("#attr-searchtab a").html('<a href="#">宝贝</a>');
			$("#attr-searchtab-h a").html('<a href="#">店铺<b class="caret"></b></a>');
			$(this).removeClass("attr-shop").addClass("item");
		}else{
			$("#attr-searchtab a").html('<a href="#">店铺</a>');
			$("#attr-searchtab-h a").html('<a href="#">宝贝<b class="caret"></b></a>');
			$(this).removeClass("item").addClass("attr-shop");
		}
	});

	$("#attr-input").on("focus", function(){
		$(".glyphicon-search").hide();
	});

	$("#attr-input").on("blur", function(){
		if($(this).val()==''){
			$(".glyphicon-search").show();
		}else{
			$(".glyphicon-search").hide();
		}   
	});

});