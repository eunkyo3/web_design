$(function(){
    setInterval(function(){
        $(".slide ul").animate({top:-400}, function(){
            $(".slide li").eq(0).appendTo($(".slide ul"));
            $(".slide ul").css({top:0});
        });
    }, 3000);

    $(".title_box h2").eq(1).click(function(){
        $(".gallery").show();
        $(".notice").hide();

        $(".title_box h2").eq(1).addClass("on");
        $(".title_box h2").eq(0).removeClass();
    });
    $(".title_box h2").eq(0).click(function(){
        $(".gallery").hide();
        $(".notice").show();

        $(".title_box h2").eq(0).addClass("on");
        $(".title_box h2").eq(1).removeClass();
    });

    $(".notice li").eq(0).click(function(){
        $(".popup").show();
    });
    $(".popup li").click(function(){
        $(".popup").hide();
    });
});