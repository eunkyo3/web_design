$(function(){
    //menu
    $(".nav>ul>li").mouseover(function(){
        $(".submenu").stop().slideDown(200);
    });
    $(".nav>ul>li").mouseleave(function(){
        $(".submenu").stop().slideUp(200);
    });

    //slide
    let currentIndex = 0;

    setInterval(function(){
        currentIndex = currentIndex % 3;
        let slidePosition = currentIndex * (-300) + "px";
        $(".slideList").animate({top:slidePosition}, 400);
        currentIndex++;
    }, 3000);

    //tabMenu
    let tabBtn = $(".tab_btn>ul>li");
    let tabCont = $(".tab_cont>div");

    tabCont.hide().eq(0).show();

    tabBtn.click(function(e){
        e.preventDefault();

        let target = $(this);
        let index = target.index();

        tabBtn.removeClass("active");
        target.addClass("active");
        tabCont.hide().eq(index).show();
    });

    // layerPopup
    $(".layerPopup").click(function(){
        $(".layer_bg").show();
        $(".layer").show();
    });

    $(".layer .close").click(function(){
        $(".layer_bg").hide();
        $(".layer").hide();
    });
});