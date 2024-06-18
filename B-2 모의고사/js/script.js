$(function () {
    $(".gnb li a").mouseover(function () {
        $(".bg").show();
        $(".lnb").show();
    });

    $(".gnb li a").mouseleave(function () {
        $(".bg").hide();
        $(".lnb").hide();
    });

    setInterval(function () {
        $(".slide ul").delay(1500);
        $(".slide ul").animate({ top: -300 }, 2000, function () {
            $(".slide li").eq(0).appendTo($(".slide ul"));
            $(".slide ul").css({ top: 0 });
        });
    }, 3000);

    $(".layerpopup").click(function () {
        $(".modal").show();
        $(".layer a").click(function () {
            $(".modal").hide();
        });
    });
});