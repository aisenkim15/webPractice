$(".rightBtn").on("click", function () {
    $("#sliderList").animate({marginLeft: "-100%"}, function () {
        $(this).stop().append($(">li:first", this)).css({marginLeft: 0});
    });
})
$(".leftBtn").on("click", function () {
    $("#sliderList").prepend($("#sliderList li:last")).css({marginLeft: "-100 %"})
        .stop().animate({marginLeft: 0});

});

// 자동슬라이더
var timing = setInterval(function () {
    $(".rightBtn").click();
}, 3000);

$("#btn a, #btnNum a").hover(
    function () {
        clearInterval(timing);
    }, function () {
        timing = setInterval(function () {
            $(".rightBtn").click();
        }, 2000);
    });


$("#btnNum a:eq(0)").on("click", function () {
    var pos = $("#sliderList li[class='slider1']").position().left;
    $("#sliderList").animate({marginLeft: -pos}, function () {
        $(this).append($(".slider2")).append($(".slider3"));
        $(this).css({marginLeft: 0})
    })
});
$("#btnNum a:eq(1)").on("click", function () {
    var pos = $("#sliderList li[class='slider2']").position().left;
    $("#sliderList").animate({marginLeft: -pos}, function () {
        $(this).append($(".slider3")).append($(".slider1"));
        $(this).css({marginLeft:0});
    })
});
$("#btnNum a:eq(2)").on("click", function () {
    var pos = $("#sliderList li[class='slider3']").position().left;
    $("#sliderList").animate({marginLeft: -pos}, function () {
        $(this).append($(".slider1")).append($(".slider2"));
        $(this).css({marginLeft:0});
    })
});

var secondNum = 0;
var thirdNum = 0;
$("#btnNum a").on("click", function () {
    var num = $(this).index()+1;
    var pos = $("#sliderList .slider" + num).position().left;
    if(num === 1){
        secondNum = 2;
        thirdNum = 3;
    }
    if(num === 2){
        secondNum = 3;
        thirdNum = 1;
    }
    if(num === 3) {
        secondNum = 1;
        thirdNum = 2;
    }
    console.log(num);
    console.log(typeof (num));

    $("#sliderList").animate({marginLeft: -pos}, function () {
        $(this).append($(".slider" + secondNum)).append($(".slider" + thirdNum));
        $(this).css({marginLeft: 0})
    })
});