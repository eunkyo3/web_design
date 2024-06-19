$(function(){
    let current = 0;
    setInterval(function(){
        let next = (current+1)%3;
        $(".slide ul li").eq(current).fadeOut(1000);
        $(".slide ul li").eq(next).fadeIn(1000);
        current = next;
    }, 2000);

    $(".tab_btn li").eq(1).click(function(){
        $(".tab_btn li h2 a").eq(0).removeClass("on");
        $(".tab_btn li h2 a").eq(1).addClass("on");

        $(".notice").hide();
        $(".gallery").show();
    });

    $(".tab_btn li").eq(0).click(function(){
        $(".tab_btn li h2 a").eq(1).removeClass("on");
        $(".tab_btn li h2 a").eq(0).addClass("on");

        $(".notice").show();
        $(".gallery").hide();
    });

    $(".layerpopup").click(function(){
        $(".modal").show();
        $(".layer a").click(function(){
            $(".modal").hide();
        });
    });
})