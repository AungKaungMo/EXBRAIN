var num1, num2 , times , scores;
scores = 0;
times =0;

function start(){
    document.getElementById("start").setAttribute("class","startbtn activeBtnColor");
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("stop").setAttribute("class","btnStop activeBtnStopColor");
    document.getElementById("btn1").setAttribute("class","btn1 btn1ChangeColor");
    document.getElementById("btn2").setAttribute("class","btn2 btn2ChangeColor");
    quiz();
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = false;
    scores = 0;
   
}
function stop(){
    document.getElementById("start").setAttribute("class","startbtn btnColor");
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("stop").setAttribute("class","btnStop btnStopColor");
    document.getElementById("num1").innerHTML="";
    document.getElementById("num2").innerHTML="";

    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = true;

    document.getElementById("result").innerHTML += "Your scores : " + scores + "<br>";
    document.getElementById("getScore").innerHTML =0;
    
}
function quiz(){
     num1 = Math.floor(Math.random() * 100);
     num2 = Math.floor(Math.random() * 100);
    
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;
}
function check1(){
     
   if(num1 > num2){
    scores +=10;
     document.getElementById("getScore").innerHTML = scores;
   }else{
    scores -=10;
    document.getElementById("getScore").innerHTML = scores;
   }
   times +=1;
   document.getElementById("getTime").innerHTML = times;
   quiz();

}
function check2(){
    if(num2 > num1){
        scores +=10;
        document.getElementById("getScore").innerHTML = scores;
    }else{
        scores -=10;
        document.getElementById("getScore").innerHTML = scores;
    }
    times +=1;
    document.getElementById("getTime").innerHTML = times;
   quiz();
}
