$("#gnb li").click(function (e) {
    var idName = $(this).children("a").attr("href");
    var pos = $(idName).position().top;
    $("html, body").stop().animate({scrollTop: pos}, 1000);
    e.preventDefault();
});

$("section").each(function () {
    $(window).on("scroll", function () {
        var $bg = $(this);
        $(window).on('scroll', function () {
            var yPos = $(window).scrollTop() / $bg.data('speed');
            var bgPos= "50% " + -yPos + "px";
            $bg.css({backgroundPositionY: yPos + "px"})
        });
    })
})

// $(window).on('scroll', function () {
//     $("#section1").css({backgroundPosition: "50% - 200px"})
// })