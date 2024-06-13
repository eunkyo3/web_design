$(function(){
    $(".gnb>li").mouseover(function(){
        $(this).find(".lnb").stop().slideDown();
    });

    // $("title_box").eq(1).click(function(){
    //     $("title_box").eq(1).addClass(".active");
    // });


    $(".title_box ul li").eq(1).click(function(){
        $(".title_box ul li h2 a").eq(0).removeClass(".active");
        $(".title_box ul li h2 a").eq(1).addClass(".active");
    });


    $(".layerpopup").click(function(){
        $(".layer").show();

        $(".layer a").click(function(){
            $(".layer").hide();
        });
    })
});