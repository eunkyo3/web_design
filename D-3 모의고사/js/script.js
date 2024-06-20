$(function(){
    let current = 0;
    setInterval(function(){
        let next = (current+1)%3;
        $(".slide li").eq(current).fadeOut(2000);
        $(".slide li").delay(1000);
        $(".slide li").eq(next).fadeIn(2000);
        current = next;
    }, 2000);

    $(".tab_btn li").eq(1).click(function(){
        $(".tab_btn li a h2").eq(0).removeClass();
        $(".tab_btn li a h2").eq(1).addClass("on");

        $(".notice").hide();
        $(".gallery").show();
    });

    $(".tab_btn li").eq(0).click(function(){
        $(".tab_btn li a h2").eq(1).removeClass();
        $(".tab_btn li a h2").eq(0).addClass("on");

        $(".notice").show();
        $(".gallery").hide();
    });

    $(".layerpopup").click(function(){
        $(".modal").show();
        $(".layer a").click(function(){
            $(".modal").hide();
        });
    });

});