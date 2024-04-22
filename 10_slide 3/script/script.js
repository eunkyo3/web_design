$(function(){
    $(".nav>ul>li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200);
    });

    $(".nav>ul>li").mouseleave(function(){
        $(this).find(".submenu").stop().slideUp(200);
    });

    // 슬라이드 쇼

    $(".slideList").children("div:gt(0)").hide();
    // gt : 현재요소 이후

    let current = 0;

    setInterval(function(){
        let next = (current + 1) % 3;

        $(".slideList").find("div").eq(current).fadeOut();
        $(".slideList").find("div").eq(next).fadeIn();
    
        current = next;
    }, 3000);

});