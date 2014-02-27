<<<<<<< HEAD


$(function(){
  $('.dropdown').hover(
    function(){
      $(this).addClass('open');
    },
    function(){
      $(this).removeClass('open');
    }
=======
$(function(){
    $('.dropdown').hover(
      function(){
        $(this).addClass('open');
      },
      function(){
        $(this).removeClass('open');
      }
>>>>>>> b13a697f42e8734396cf42eeacfea957475d3eb7
    );
});

<<<<<<< HEAD

$(function(){
  $('.dropdown favorite').hover(
    function(){
      $(this).addClass('open');
    },
    function(){
      $(this).removeClass('open');
    }
=======
$(function(){
    $('.dropdown favorite').hover(
      function(){
        $(this).addClass('open');
      },
      function(){
        $(this).removeClass('open');
      }
>>>>>>> b13a697f42e8734396cf42eeacfea957475d3eb7
    );
});

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

  $("#input").click(function(){
    $(".iconfont").hide();
  });

});

