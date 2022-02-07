
$(function(){ 

    $(".washingcare_btn").on("click",function(){
        $(".background").fadeIn();
    });
    $(".close_btn").on("click",function(){
        $(".background").fadeOut();
    });
    
    var div = $(".modal");
    div.css("position", "absolute");
    div.css("top", Math.max(0, (($(window).height() - div.outerHeight()) / 2) + $(window).scrollTop()) + "px");
    div.css("left", Math.max(0, (($(window).width() - div.outerWidth()) / 2) + $(window).scrollLeft()) + "px");

  });


