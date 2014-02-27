$(function(){
    $('.dropdown').hover(
      function(){
        $(this).addClass('open');
      },
      function(){
        $(this).removeClass('open');
      }
    );
  });

$(function(){
    $('.dropdown favorite').hover(
      function(){
        $(this).addClass('open');
      },
      function(){
        $(this).removeClass('open');
      }
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

	$("button").click(function()
	{
		$(".Qr-code").hide();
	});

});

