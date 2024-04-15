$(function(){
    $(".nav>ul>li").mouseover(function(){
        $(".nav>ul>li").find(".submenu").stop().slideDown(200);
    });
});

$(function(){
    $(".nav>ul>li").mouseleave(function(){
        $(".nav>ul>li").find(".submenu").stop().slideUp(200);
    });
});