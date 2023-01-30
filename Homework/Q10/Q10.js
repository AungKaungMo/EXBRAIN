var times=0 , scores=0, correctAnswer;

function start(){
    document.getElementById("start").setAttribute("class","startbtn activeBtnColor");
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("stop").setAttribute("class","btnStop activeBtnStopColor");
    document.getElementsByClassName("btn1")[0].setAttribute("class","btn1 btn1ChangeColor");
    document.getElementsByClassName("btn1")[1].setAttribute("class","btn1 btn1ChangeColor");
    document.getElementsByClassName("btn1")[2].setAttribute("class","btn1 btn1ChangeColor");
    document.getElementsByClassName("btn1")[0].disabled = false;
    document.getElementsByClassName("btn1")[1].disabled = false;
    document.getElementsByClassName("btn1")[2].disabled = false;
    scores = 0;
    times = 0;
    quiz();   
    
}
function stop(){
    document.getElementById("start").setAttribute("class","startbtn btnColor");
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("stop").setAttribute("class","btnStop btnStopColor");
    document.getElementsByClassName("btn1")[0].setAttribute("class","btn1 btn1Color");
    document.getElementsByClassName("btn1")[1].setAttribute("class","btn1 btn1Color");
    document.getElementsByClassName("btn1")[2].setAttribute("class","btn1 btn1Color");
    document.getElementsByClassName("btn1")[0].disabled = true;
    document.getElementsByClassName("btn1")[1].disabled = true;
    document.getElementsByClassName("btn1")[2].disabled = true;
    document.getElementById("answer1").innerHTML = "";
    document.getElementById("answer2").innerHTML = "";
    document.getElementById("answer3").innerHTML = "";
 
    document.getElementById("Addition").innerHTML="=";
    document.getElementById("result").innerHTML += "Your scores : " + scores + "<br>";
    document.getElementById("getScore").innerHTML= 0;
    document.getElementById("getTime").innerHTML = 0;
    
}
function quiz(){
    var randNum1 = Math.floor(Math.random() * 100);
    var randNum2 = Math.floor(Math.random() * 100);
    correctAnswer = randNum1 + randNum2;

   document.getElementById("Addition").innerHTML = randNum1 +" + "+ randNum2 +" = ";

   
   var answer1 = Math.floor(Math.random() * 100);
   var answer2 = Math.floor(Math.random() * 100);
   var answer3 = Math.floor(Math.random() * 100);
   document.getElementById("answer1").innerHTML = answer1;
   document.getElementById("answer2").innerHTML = answer2;
   document.getElementById("answer3").innerHTML = answer3;

   var randomIndex = Math.floor(Math.random() * (4 - 1) + 1);

   var correctAnswerIndex = "answer" + randomIndex;
   document.getElementById(correctAnswerIndex).innerHTML = correctAnswer;
}
function check(obj){
 
if(obj.innerText == correctAnswer){
    scores += 10;
    document.getElementById("getScore").innerHTML = scores;
}else{
    scores -= 10;
    document.getElementById("getScore").innerHTML = scores;
}

    times +=1;
    document.getElementById("getTime").innerHTML = times;
    quiz();
}

