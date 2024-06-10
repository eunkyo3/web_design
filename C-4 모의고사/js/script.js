$(function(){
    setInterval(function(){
        $('.slide ul').animate({left: -800}, 1000, function(){
            $('.slide ul').eq(0).appendTo($('.slide ul'));
            $('.slide ul').css({left: 0});
        });
    }, 2000);
});