$(function () {
    setInterval(function () {
        $(".slide ul").animate({ left: -1200 }, 2000, function () {
            $(".slide li").eq(0).appendTo($(".slide ul"));
            $(".slide ul").css({ left: 0 });
        });
    }, 2000);

    $(".nav li").mouseover(function () {
        $(".nav_bg").stop().slideDown();
        $(".lnb").stop().slideDown();
    });

    $(".nav li").mouseleave(function () {
        $(".nav_bg").stop().slideUp();
        $(".lnb").stop().slideUp();
    });

    $(".layerpopup").click(function () {
        $(".layer_bg").show();
        $(".layer").show();
    });

    $(".layer a").click(function () {
        $(".layer_bg").hide();
        $(".layer").hide();
    });
});