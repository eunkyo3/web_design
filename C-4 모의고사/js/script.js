$(function () {
    setInterval(function () {
        $('.slide ul').animate({ left: -800 }, 1000, function () {
            $('.slide li').eq(0).appendTo($('.slide ul'));
            $('.slide ul').css({ left: 0 });
        });
    }, 2000);

    $('.notice li').eq(0).click(function () {
        $('.modal').show();
    });

    $('.popup a').click(function () {
        $('.modal').hide();
    });
});