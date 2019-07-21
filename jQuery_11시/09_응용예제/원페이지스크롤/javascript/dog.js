$(document).ready(function () {
    $("#gnb li").on("click", function () {
        var pagePos = $($(this).children('a').attr('href')).position().top;
        $("html, body").animate({scrollTop: pagePos});
        e.preventDefault();
    });
    $("section").on("mousewheel", function (event, delta) {
        if (delta > 0) {
            var prev = $(this).prev().position().top;
            $("html,body").animate({scrollTop: prev})

            var prevIndex = $(this).index
        }
        else if(delta < 0){
            var next = $(this).next().position().top;
            $("html, body").animate({scrollTop: $("#dog2").position().top});

            var nextIndex = $(this).index();
            if (nextIndex > 2) {
                nextIndex =2;
            }
        }
    });
});
