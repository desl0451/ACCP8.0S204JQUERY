/**
 * Created by 王涛 on 2017/4/7.
 */
function close_plan() {
    window.close();
}

function collection() {
    var flag = confirm("移入收藏后,将不在购物车显示,是否继续操作?");
    if (flag == true) {
        alert("移入收藏成功!");
    }
}
function del() {
    var flag = confirm("确定要删除吗?");
    if (flag == true) {
        alert("删除成功!");
    }
}
function accounts() {
    var flag = confirm("您本次购买的商品信息如下：\n\n商品名称：白岩松：白说、岛上书店；\n商品数量：2件；\n商品总计：46.00；\n运费：0元；\n\n请确认以上信息是否有误！！！");
    if (flag) {
        alert("您的订单已提交");
    }
}
function total() {
    var prices = document.getElementsByName("price");
    var count = document.getElementsByName("amount");
    var sum = 0;
    for (var i = 0; i < prices.length; i++) {
        sum += prices[i].value * count[i].value;
    }
    document.getElementById("totalPrice").innerHTML = "￥" + sum;
}
function minus(num) {
    var prices = document.getElementsByName("price")[num].value;
    var count = parseInt(document.getElementsByName("amount")[num].value) - 1;
    if (count < 1) {
        alert("不能再减了，再减就没有啦！");
    }
    else {
        document.getElementsByName("amount")[num].value = count;
        var totals = parseFloat(prices * count);
        document.getElementById("price" + num).innerHTML = "¥" + totals;
        total();
    }
}
function plus(num) {
    var prices = document.getElementsByName("price")[num].value;
    var count = parseInt(document.getElementsByName("amount")[num].value) + 1;
    document.getElementsByName("amount")[num].value = count;
    var totals = parseFloat(prices * count);
    document.getElementById("price" + num).innerHTML = "¥" + totals;
    total();
}
total();