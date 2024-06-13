$(function(){

    setInterval(function(){
        $(".slide ul").animate({top: -300}, 1000, function(){
            $(".slide li").eq(0).appendTo(".slide ul");
            $(".slide ul").css({top: 0});
        });
    },2000);

    $(".layerpopup").click(function(){
        $(".layer").show();
        $(".layer a").click(function(){
            $(".layer").hide();
        });
    });
});