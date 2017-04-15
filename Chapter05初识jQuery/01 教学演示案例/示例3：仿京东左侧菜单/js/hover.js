$(document).ready(function () {
    /**一级内容悬浮**/
    $("li").mouseover(function () {
        $(this).css({"background": "orange"});
        $(this).children("div").show();
    }).mouseout(function () {
        $(this).css({"background": "#C81623"});
        $(this).children("div").hide();
    });
});