/**
 * Created by Administrator on 2017/4/10.
 */
function post() {
    document.getElementById("post").style.display = "block";
}

function postSuccess() {
    document.getElementById("post").style.display = "none";

    var title = document.getElementById("title").value;//标题
    var sec = document.getElementById("sec").value;//分类
    var content = document.getElementById("content").value;//内容

    var rand = Math.floor(Math.random() * 4);     //创建随机数
    var tou = new Array("tou01.jpg", "tou02.jpg", "tou03.jpg", "tou04.jpg");
    // <li>
    //     <div>
    //     <img src="images/tou01.jpg" alt="">
    //     </div>
    //     <h1>嘿嘿</h1>
    //     <p><span>北京时间</span></p>
    // </li>
    var createNode = document.createElement("li");//创建li节点
    var divNode = document.createElement("div");
    createNode.appendChild(divNode);

    var tutu = document.createElement("img");     //创建图片
    tutu.setAttribute("src", "images/" + tou[rand]);//随机图片
    divNode.appendChild(tutu);

    var titleH1 = document.createElement("h1");//创建H1
    titleH1.innerHTML = title;
    createNode.appendChild(titleH1);

    var newP = document.createElement("p"); //创建一个新的p节点元素
    var secName = document.createElement("span");
    var secSelect = document.getElementById("sec").value;  //获取版块
    secName.innerHTML = "版块：" + secSelect;    //把版块内容放到span中
    var myDate = new Date();
    var currentDate = myDate.getFullYear() + "-" + parseInt(myDate.getMonth() + 1) + "-" + myDate.getDate() + " " + myDate.getHours() + ":" + myDate.getMinutes();
    var timeSpan = document.createElement("span");
    timeSpan.innerHTML = "发表时间：" + currentDate;
    newP.appendChild(secName);
    newP.appendChild(timeSpan);

    createNode.appendChild(newP);
    var postList = document.getElementById("postList");
    postList.insertBefore(createNode, postList.firstChild);


    //清空
    document.getElementById("title").value="";
    document.getElementById("sec").value="请选择版块";
    document.getElementById("content").value="";

}