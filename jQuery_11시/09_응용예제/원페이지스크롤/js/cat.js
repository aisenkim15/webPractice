$(document).ready(function() {
    $("#gnb li").on("click", function(e) {
        var pagePos = $($(this).children('a').attr('href')).position().top;
        $("html, body").animate({ scrollTop: pagePos });

        $("#gnb li").removeClass('on');
        $(this).addClass('on');

        e.preventDefault();
    });
    $("section").on("mousewheel", function(event, delta) {

        // 휠을 올렸을 경우
        if ( delta > 0  ){
            var prev = $(this).prev().position().top;
            $("html, body").stop().animate({ scrollTop: prev });

            var prevIndex = $(this).index();
            if (prevIndex < 2) {
                prevIndex = 2;
            } else {
                $("#gnb li").removeClass("on");
                $("#gnb li:eq(" + (prevIndex-2) +  ")").addClass("on");
            }
        }
        // 휠을 내렸을 경우
        else if ( delta < 0  ) {

            var next = $(this).next().position().top;
            $("html, body").stop().animate({ scrollTop: next });

            var nextIndex = $(this).index();
            if ( nextIndex > 2 ) {
                nextIndex = 2;
            } else{
                $("#gnb li").removeClass('on');
                $("#gnb li:eq(" + nextIndex + ")").addClass();
            }

        }
    })

})