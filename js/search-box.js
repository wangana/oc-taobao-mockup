$(document).ready(function()
{
	$(".but-code").mouseover(function(){
		$(".but-code").css("background-color","#ff4500");
	});
	$(".but-code").mouseout(function(){
		$(".but-code").css("background-color","#ffffff");
	});

	$(".but-code").click(function()
	{
		$(".Qr-code").hide();
	});


  $("#searchtab").mouseover(function(){
    $("#searchtab").css("background-color"," #f5f5f5");
    $("#searchtab-h").css("background-color"," #ffffff");
  });
  $("#searchtab").mouseout(function(){
    $("#searchtab").css("background-color","#ffffff");
    $("#searchtab-h").css("background-color","#f5f5f5");
  });
  $("#searchtab").click(function(){
    if ($(this).hasClass("shop")){
      $("#searchtab a").html('<a href="#">宝贝</a>');
      $("#searchtab-h a").html('<a href="#">店铺<b class="caret"></b></a>');
      $(this).removeClass("shop").addClass("item");
    }else{
      $("#searchtab a").html('<a href="#">店铺</a>');
      $("#searchtab-h a").html('<a href="#">宝贝<b class="caret"></b></a>');
      $(this).removeClass("item").addClass("shop");
    }
  });

  $("#input").on("focus", function(){
    $(".glyphicon-search").hide();
  });

  $("#input").on("blur", function(){
    // alert($(this).val());
    if($(this).val()==''){
      $(".glyphicon-search").show();
    }else{
      $(".glyphicon-search").hide();
    }   
  });

});

