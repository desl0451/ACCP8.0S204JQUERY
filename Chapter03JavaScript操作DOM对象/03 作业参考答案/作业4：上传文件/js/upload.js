/**
 * Created by 小宝 on 2016/7/14.
 */


function add() {
    var newNode = document.getElementById("upload").cloneNode(true);  //复制第一行
    var oldNode = document.getElementById("up");
    oldNode.parentNode.insertBefore(newNode, oldNode);
}
