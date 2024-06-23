$(function () {
    $(".gnb li").mouseover(function () {
        $(".bg").stop().slideDown();
        $(".lnb").stop().slideDown();
    });
    $(".gnb li").mouseleave(function () {
        $(".bg").stop().slideUp();
        $(".lnb").stop().slideUp();
    });

    $(".layerpopup").click(function () {
        $(".modal").show();
        $(".layer a").click(function () {
            $(".modal").hide();
        })
    });

    setInterval(function () {
        $(".slide ul").animate({ left: -100 + "%" }, 2000, function () {
            $(".slide li:first").appendTo($(".slide ul"));
            $(".slide ul").css({ left: 0 });
        });
    }, 4000);

    $(".tab_btn li").eq(1).click(function () {
        $(".tab_btn li a").eq(0).removeClass();
        $(".tab_btn li a").eq(1).addClass("on");

        $(".notice").hide();
        $(".gallery").show();
    });

    $(".tab_btn li").eq(0).click(function () {
        $(".tab_btn li a").eq(1).removeClass();
        $(".tab_btn li a").eq(0).addClass("on");

        $(".notice").show();
        $(".gallery").hide();
    });
});