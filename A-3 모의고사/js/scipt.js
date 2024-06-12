$(function () {
    $(".gnb li").mosueover(function () {
        $(".lnb li").stop().slideDown();
    });

    $("title_box").eq(1).click(function () {
        $("title_box").eq(1).addClass(".active");
    });
});