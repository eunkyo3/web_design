$(function(){
    $(".nav>ul>li").mouseover(function(){
        $(".nav>ul>li>ul>li").stop().show();
    });
});

$(function(){
    $(".nav>ul>li").mouseleave(function(){
        $(".nav>ul>li>ul>li").stop().hide();
    });
});

$(function(){
    let currentIndex = 0;
    let currentCount = $(".slideImg").length;
    
    setInterval(function(){
        currentIndex = currentIndex % currentCount;
        let slideposition = currentIndex * (-1200) + "px";
        currentIndex++;
        $(".slideList").animate({left: slideposition}, 300);
    }, 2000);
});

$(function(){
    $(".tab1 a").eq(0).click(function(){
        $(".layer").show();
    });

    $(".layer a").click(function(){
        $(".layer").hide();
    });

    $(".tab_btn ul li a").eq(0).click(function(){
        $(".tab2 img").hide();
        $(".tab1").show();

        $(".tab_btn ul li ").eq(0).addClass("active");
        $(".tab_btn ul li ").eq(1).removeClass();
    });

    $(".tab_btn ul li a").eq(1).click(function(){
        $(".tab2 img").show();
        $(".tab1").hide();

        $(".tab_btn ul li ").eq(1).addClass("active");
        $(".tab_btn ul li ").eq(0).removeClass();
    });
});