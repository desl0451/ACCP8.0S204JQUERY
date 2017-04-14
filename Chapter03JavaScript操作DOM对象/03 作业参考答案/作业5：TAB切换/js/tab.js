/**
 * Created by zongjuan.wang on 2016/7/14.
 */


function chgtt(d1)	{
    //设当前显示层
   var number;
   if(Number(d1)){
       number=d1;
   }else{
       number=1;
   }
   for(var i=1;i<=3;i++){
       if(i==number){
            document.getElementById("book"+i).style.display="block";
            document.getElementById("bg"+i).className="bg";
       }else{
           document.getElementById("book"+i).style.display="none";
           document.getElementById("bg"+i).className="nobg";
       }
   }
}
window.onLoad=chgtt() ;