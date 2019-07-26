$(".rightBtn").on("click", function () {
    // $("#sliderList li").removeClass("on");
    $("#sliderList li:eq(1)").addClass('on')
        .css({opacity: 0})
        .animate({opacity: 1}, 600, function () {
            $("#sliderList").append($("#sliderList li:first"));
            $("#sliderList :last").removeClass("on");
        });

});

// $(".rightBtn").on("click",function () {
//     $("#sliderList li:first").fadeOut(600, function () {
//         $("#sliderList").append($(this));
//         $("#sliderList li:last").css({display: "block", zIndex: 0})
//     });
// });

$(".leftBtn").on("click", function () {
    $("#sliderList li:eq(2)").addClass("on").css({opacity: 0}).animate({opacity:1}, 600, function () {
        $("#sliderList").prepend($("#sliderList li:last"));
        $("#sliderList li:eq(1)").removeClass('on');
    })
});

$("#btnNum a:eq(0)").on("click", function () {
    if ( $("#sliderList .slider1").hasClass("on") ) {
        $("#btnNum a:eq(1)").off("click");
    }else {
        $("#sliderList .slider1").addClass('on').css({opacity: 0}).animate({opacity: 1}, 600, function () {
            $("#sliderList li").not($(this)).removeClass('on');
            $("#sliderList").append($("#sliderList .slider2"))
                .append($("#sliderList .slider3"));
        });
    }
});

$("#btnNum a:eq(1)").on("click", function () {
    if ($("#sliderList .slider2").hasClass("on")  ) {
        $("#btnNum a:eq(1)").off("click");
    }else {
        $("#sliderList .slider2").addClass('on').css({opacity: 0}).animate({opacity: 1}, 600, function () {
            $("#sliderList li").not($(this)).removeClass('on');
            $("#sliderList").append($("#sliderList .slider1"))
                .append($("#sliderList .slider3"))
        });
    }
});

$("#btnNum a:eq(2)").on("click", function () {
    if ( $("#sliderList .slider3").hasClass("on")  ) {
        $("#btnNum a:eq(2)").off("click")
    } else {
        $("#sliderList .slider3").addClass('on').css({opacity: 0}).animate({opacity: 1}, 600, function () {
            $("#sliderList li").not($(this)).removeClass('on');
            $("#sliderList").append($("#sliderList .slider1"))
                .append($("#sliderList .slider2"))
        });
    }
});