$(function(){
    $(".gnb > li > a").mosueover(function(){
        $(".lnb").stop().slideDown();
    });

    $("title_box").eq(1).click(function(){
        $("title_box").eq(1).addClass(".active");
    });
});