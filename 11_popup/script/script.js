$(function(){
    $(".nav>ul>li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200);
    });

    $(".nav>ul>li").mouseleave(function(){
        $(this).find(".submenu").stop().slideUp(200);
    });

    let currentIndex = 0;

    setInterval(function(){
        if(currentIndex < 2){
            currentIndex++;
        } else {
            currentIndex = 0;
        }

        let slidePosition = currentIndex * (-300)+"px";

        $(".slideList").animate({top:slidePosition}, 400)
    }, 3000);

    // layer Popup
    $(".layerPopup").click(function(){
        $(".layer").css("display", "block");
        $(".layer_bg").show();
    
    });
    $(".layer .close").click(function(){
        $(".layer").css("display", "none");
        $(".layer_bg").hide();
    
    });
});