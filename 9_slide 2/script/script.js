$(function(){
    $(".nav>ul>li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200);
    });

    $(".nav>ul>li").mouseleave(function(){
        $(this).find(".submenu").stop().slideUp(200);
    });

    let slideCount = $(".slideImg").length;

    let currentIndex = 0;

    setInterval(function(){
        if(currentIndex < slideCount-1){
            currentIndex++;
        } else {
            currentIndex = 0;
        }

        let slidePosition = currentIndex * (-1200)+"px";

        $(".slideList").animate({left:slidePosition}, 400)
    }, 3000);

});