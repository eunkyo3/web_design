$(function(){
    let current = 0;
    setInterval(function(){
        let next = (current+1)%3;
        $(".slide ul li").eq(current).fadeOut();
        $(".slide ul li").eq(next).fadeIn();
        current = next;
    }, 2000);


    $(".title_box h2").eq(1).click(function(){
        $(".title_box h2").eq(0).removeClass("on");
        $(".title_box h2").eq(1).addClass("on");

        $(".notice_box").hide();
        $(".gallery_box").show();
    });
    
    $(".title_box h2").eq(0).click(function(){
        $(".title_box h2").eq(1).removeClass("on");
        $(".title_box h2").eq(0).addClass("on");

        $(".notice_box").show();
        $(".gallery_box").hide();
    });

    $(".layerpopup").click(function(){
        $(".popup").show();
        $(".popup a").click(function(){
            $(".popup").hide();         
        });
    });
});