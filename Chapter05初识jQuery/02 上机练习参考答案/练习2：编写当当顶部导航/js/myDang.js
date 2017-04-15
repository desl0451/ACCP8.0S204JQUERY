/**
 * Created by zongjuan.wang on 2016/6/7.
 */
$(document).ready(function(){
    $("a").mouseover(function () {
        $("#menu").css({"border":"1px solid #EE7304"});
        $("#menu-ul").css({"display":"block"});
    }).mouseout(function () {
        $("#menu").css({"border":"0px"});
        $("#menu-ul").css({"display":"none"});
    });
});