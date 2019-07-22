
$(document).ready(function () {
    var ht = $("#header").height();
    $("#header a").on("click", function () {
        // var nextPage = $("#content1").position().top;
        $("html, body").stop().animate({scrollTop: ht});
    });
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= ht) {
            $("#gnb").css({position: "fixed"}).addClass("effect");
        } else {
            $("#gnb").css({position: "absolute"}).removeClass("effect");
        }

    })
    $("#gnb li").on("click", function () {
        var idName = $(this).children('a').attr("href");
        var pos = $(idName).position().top;
        $("html, body"). animate({scrollTop: pos});
        return false;
    })
});
