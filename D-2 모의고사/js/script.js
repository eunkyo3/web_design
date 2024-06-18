$(function(){
    setInterval(function(){
        $(".slide ul").animate({left: -100+"%"}, 1000, function(){
            $(".slide li").eq(0).appendTo($(".slide ul"));
            $(".slide ul").css({left: 0});
        })
    }, 2000);

    $(".layerpopup").click(function(){
        $(".layer_bg").show();
        $(".layer").show();
    });

    $(".layer a").click(function(){
        $(".layer_bg").hide();
        $(".layer").hide();
    });
});