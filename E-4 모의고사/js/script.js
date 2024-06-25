$(function(){
    setInterval(function(){
        $(".slide ul").animate({left: -100 + "%"}, 2000, function(){
            $(".slide li").eq(0).appendTo($(".slide ul"));
            $(".slide ul").delay(2000);
            $(".slide ul").css({left: 0});
        });
    }, 2000);

    $(".layerpopup").click(function(){
        $(".modal").show();
        $(".layer a").click(function(){
            $(".modal").hide();
        });
    })
});