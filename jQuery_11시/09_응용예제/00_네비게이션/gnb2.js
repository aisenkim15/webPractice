$("#gnb ul").hide();

$("#gnb li").hover(
    function(){
        $(this).children('ul').stop().fadeIn();
    },
    function(){
        $(this).children('ul').stop().fadeOut();
    }
);