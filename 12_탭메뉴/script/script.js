$(function(){
    $(".nav>ul>li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200);
    });
});

$(function(){
    $(".nav>ul>li").mouseleave(function(){
        $(this).find(".submenu").stop().slideUp(200);
    });

    let tabBtn = $(".tab_btn>ul>li");
    let tabCont = $(".tab_cont>div");

    tabCont.hide().eq(0).show();

    tabBtn.click(function(e){
        e.preventDefault();

        let target = $(this);
        let index = target.index();

        tabBtn.removeClass("active");
        target.addClass("active");
        tabCont.css("display", "none");
        tabCont.eq(index).css("display", "block");
    });
});