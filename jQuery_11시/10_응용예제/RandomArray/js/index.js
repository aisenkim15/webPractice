for (var n = 1; n <= 100; n++) {
    // 1-6
    var index = Math.ceil(Math.random() * 6);
    // 30-100
    var size = Math.ceil(Math.random() * 70) + 30;
    console.log(size);
    // 0-800
    var posX = Math.ceil(Math.random() * 1820);
    var posY = Math.ceil(Math.random() * 850);
    var opacity = Math.ceil(Math.random() * 0.6)+0.3;

    var $img = $("<img src='star" + index + ".png'>").css("width", size);
    var $star = $('<div></div>').append($img).css({left: posX, top: posY, opacity: opacity})
    $("#container").append($star);
}