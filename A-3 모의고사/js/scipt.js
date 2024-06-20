$(function(){
    let current = 0;
    setInterval(function(){
        $(".slide ul").delay(2000);
        let index = (current+1)%3;
        $(".slide ul").find("li").eq(current).fadeOut();
        $(".slide ul").find("li").eq(index).fadeIn();
        current = index;
    }, 2000);

    $(".slide ul").animate(function(){
        $(".slide li").eq(0).appendTo("slide ul");
        $(".slide ul").css({left: -1200});
    }, 2000);

    $(".title_box ul li").eq(1).click(function(){
        $(".title_box ul li h2 a").eq(0).removeClass("active");
        $(".title_box ul li h2 a").eq(1).addClass("active");

        $(".notice").hide();
        $(".gallery img").show();
    });

    $(".title_box ul li").eq(0).click(function(){
        $(".title_box ul li h2 a").eq(1).removeClass("active");
        $(".title_box ul li h2 a").eq(0).addClass("active");

        $(".notice").show();
        $(".gallery img").hide();
    });

    $(".layerpopup").click(function(){
        $(".layer").show();

        $(".layer a").click(function(){
            $(".layer").hide();
        });
    })
});