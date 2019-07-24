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
// var timing = setInterval(function () {
//     $(".rightBtn").click();
// }, 3000);
//
// $("#btn a, #btnNum a").hover(
//     function () {
//         clearInterval(timing);
//     }, function () {
//         timing = setInterval(function () {
//             $(".rightBtn").click();
//         }, 2000);
//     });
//
$("#btnNum a:eq(0)").on("click", function () {
    var pos = $("#sliderList li[class='slider1']").position().left;
    $("#sliderList").stop().animate({marginLeft: -pos})
});
$("#btnNum a:eq(1)").on("click", function () {
    var pos1 = $("#sliderList li[class='slider2']").position().left;
    $("#sliderList").stop().animate({marginLeft: -pos})
});