$(function(){
    $("#nav>ul>li").hover(function(){
            $(this).find(".submenu").stop().slideDown(200);
    }, function(){
        $(this).find(".submenu").stop().slideUp(200);
    });

    let current = 0;

    setInterval(function() {
        
        let next = (current+1)%3;

        $(".slideList").find("div").eq(current).fadeOut();
        $(".slideList").find("div").eq(next).fadeIn();
    }, 3000);

    $(".layerPopup").click(function(){
        $(".layer").show();
        $(".layer_bg").show();
    });

    $(".layer .close").click(function(){
        $(".layer").hide();
        $(".layer_bg").hide();
    });
});


