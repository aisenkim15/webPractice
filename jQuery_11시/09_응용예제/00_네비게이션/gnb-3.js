$(".sub").hide();

$(".menu li").hover(
    function () {
        $(this).children('.sub').slideDown();
    },
    function () {
        $(this).children('.sub').slideUp();
    }
);
