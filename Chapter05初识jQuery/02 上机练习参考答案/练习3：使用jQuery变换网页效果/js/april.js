/**
 * Created by 小宝 on 2016/6/7.
 */
$(document).ready(function () {
    $("#book h1").click(function () {
        $(this).addClass("title");
        $(this).next().css("color", "green");
    })
});