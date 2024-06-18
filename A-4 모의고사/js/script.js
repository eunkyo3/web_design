$(function(){

    let current = 0;
    setInterval(function() {
        let next = (current + 1) % 3;
        $(".slide li").eq(current).fadeOut(1000);
        $(".slide li").eq(next).fadeIn(1000);
        current = next;
    }, 2000);

    $(".gnb li a").mouseover(function(){
        $(".bg").show();
        $(".lnb").show();
    });

    $(".gnb li a").mouseleave(function(){
        $(".bg").hide();
        $(".lnb").hide();
    });


    $(".layerpopup").click(function(){
        $(".modal").show();
    });

    $(".layer a").click(function(){
        $(".modal").hide();
    }); 
});