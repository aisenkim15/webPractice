$(document).ready(function () {
   $(".subMenuWrap > ul ").on("mouseenter", function () {
        $("#header").stop().animate({height: 300});
   })
    $("#header").on("mouseleave", function () {
        $("#header").stop().animate({height: 80});
    })
});
