$(function(){
    // slide
    setInterval(function(){
        $(".slide ul").animate({top: -900}, function(){
            $(".slide li").eq(0).appendTo($(".slide ul"));
            $(".slide ul").css({top: 0});
        });
    }, 3000);

    // popup
    $(".notice li").eq(0).click(function(){
        $(".modal").show();
    });
    $(".notice a").click(function(){
        $(".modal").hide();
    });
});