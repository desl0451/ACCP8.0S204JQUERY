/**
 * Created by Administrator on 2017/4/14.
 */
function adv_close() {
    document.getElementById("close").style.display="none";
    document.getElementById("float").style.display="none";
}
var adverTop;
var adverLeft;
var adverObj;
var imgTop;
var imgLeft;
function inix() {
    adverObj=document.getElementById("close");
    imgObj=document.getElementById("float");
    if(adverObj.currentStyle){ //在IE浏览器下需要使用currentStyle来获取样式的属性值
        adverTop=parseInt(adverObj.currentStyle.top);
        adverLeft=parseInt(adverObj.currentStyle.left);
    }else{//firefox,opera,safari,chrome浏览器
        adverTop=parseInt(document.defaultView.getComputedStyle(adverObj,null).top);
        adverLeft=parseInt(document.defaultView.getComputedStyle(adverObj,null).left);
    }
    if(imgObj.currentStyle){
        imgTop=parseInt(imgObj.currentStyle.top);
        imgLeft=parseInt(imgObj.currentStyle.left);
    }else{
        imgTop=parseInt(document.defaultView.getComputedStyle(imgObj,null).top);
        imgLeft=parseInt(document.defaultView.getComputedStyle(imgObj,null).left);
    }
}
function move() {
    var sTop=parseInt(document.documentElement.scrollTop|| document.body.scrollTop);
    var sLeft=parseInt(document.documentElement.scrollLeft|| document.body.scrollLeft);
    var iTop=parseInt(document.documentElement.scrollTop|| document.body.scrollTop);
    var iLeft=parseInt(document.documentElement.scrollLeft|| document.body.scrollLeft);
    adverObj.style.top=adverTop+sTop+"px";
    adverObj.style.left=adverLeft+sLeft+"px";
    imgObj.style.top=imgTop+sTop+"px";
    imgObj.style.left=imgLeft+sLeft+"px";
}
window.onload=inix;
window.onscroll=move;