var a,p1,p2,p3,p4,p5,p6,p7,p8;
var mine, com;
var b,b1,b2,b3,b4,b5,b6,b7,b8;
var dis = false;
var clicked1 =0
var cScores = 0;
var yScores = 0;
var display = false;
prepare();
computer();

function prepare(){
    
    for(var i=1; i<3; i++){
        rand1 = Math.floor(Math.random() * 6 + 1);
        rand2 = Math.floor(Math.random() * 6 + 1);
        mine = rand1+""+rand2;
        if(i == 1){
            a = mine;
            p1 = (rand1 - 1)+""+ (rand2 - 1);
            p2 = (rand1 - 1)+""+ (rand2);
            p3 = (rand1 - 1)+""+ (rand2 + 1);
            p4 = (rand1) +""+ (rand2 - 1);
            p5 = (rand1) +""+ (rand2 + 1);
            p6 = (rand1 + 1)+""+ (rand2 - 1);
            p7 = (rand1 + 1)+""+ (rand2);
            p8 = (rand1 + 1)+""+ (rand2 + 1);
        }else{
            b = "c"+mine;
            b1 = "c"+(rand1 - 1)+ (rand2 - 1);
            b2 = "c"+(rand1 - 1)+ (rand2);
            b3 = "c"+(rand1 - 1)+ (rand2 + 1);
            b4 = "c"+(rand1) + (rand2 - 1);
            b5 = "c"+(rand1) + (rand2 + 1);
            b6 = "c"+(rand1 + 1)+ (rand2 - 1);
            b7 = "c"+(rand1 + 1)+ (rand2);
            b8 = "c"+(rand1 + 1)+ (rand2 + 1);
        }
        
    }
        }

function clicking(obj){
   
    if(dis == false){
        
   if(obj.id === a){
     document.getElementById(a).style.backgroundColor = "red";
     document.getElementById(a).innerText = "💣";
    gameOver();
    document.getElementById("lose").play();
   
   }else if(obj.id === p1 ||
    obj.id === p2 ||
    obj.id === p3 ||
    obj.id === p4 ||
    obj.id === p5 ||
    obj.id === p6 ||
    obj.id === p7 ||
    obj.id === p8
    ){
        document.getElementById(obj.id).style.backgroundColor = "yellow";
        document.getElementById("dangerous").play();
        document.getElementById(obj.id).onclick=null;
        obj.setAttribute("class","cell inactive");
        cScores += 10;
        document.getElementsByClassName("comScore")[0].innerHTML = "Scores : "+cScores;
       
    }
    else{
        document.getElementById(obj.id).style.backgroundColor ="green";
        document.getElementById("correct").play();
        obj.setAttribute("class","cell inactive");
       document.getElementById(obj.id).onclick=null;
       
        cScores += 10;
        document.getElementsByClassName("comScore")[0].innerHTML = "Scores : "+cScores;
        
    }

    if(document.getElementsByClassName("inactive").length == 35){
        document.getElementById(obj.id).style.backgroundColor = "green"
        document.getElementById(obj.id).innerText = "Win";
        document.getElementById("win").play();
        gameWin();
        document.getElementsByClassName("comScore")[0].innerHTML = "Scores : "+cScores;
    }
     setTimeout(() => {
       computer();
        }, 1000);
}

}
function gameOver(){
    dis = true;
    for(var i=0; i<36 ; i++){
        document.getElementsByClassName("cell")[i].style.backgroundColor = "red";
    }
    
    document.getElementById("32").innerText ="G";
    document.getElementById("33").innerText ="A";
    document.getElementById("34").innerText ="M";
    document.getElementById("35").innerText ="E";
    document.getElementById("42").innerText ="O";
    document.getElementById("43").innerText ="V";
    document.getElementById("44").innerText ="E";
    document.getElementById("45").innerText ="R";
    document.getElementsByClassName("table2")[0].style.display = "block";

}

function gameWin(){
    dis = true;
    for(var i=0; i<36 ; i++){
        document.getElementsByClassName("cell")[i].style.backgroundColor = "green";
    }
    document.getElementById("32").innerText ="G";
    document.getElementById("33").innerText ="A";
    document.getElementById("34").innerText ="M";
    document.getElementById("35").innerText ="E";
    document.getElementById("42").innerText ="W";
    document.getElementById("43").innerText ="I";
    document.getElementById("44").innerText ="N";
    document.getElementById("45").innerText ="!";
    document.getElementsByClassName("table2")[0].style.display = "block";
}

 function computer(){   
     var comx = Math.floor(Math.random() * 6 + 1);
     var comy = Math.floor(Math.random() * 6 + 1);
     com = comx +""+comy;
     if(document.getElementById(com).classList.contains("inactive") == false){
        document.getElementById(com).click();
     }else{
        computer();
     }
      }

function comClicking(obj1){
  
     if(display == false){
        
    if(obj1.id === b){
      document.getElementById(b).style.backgroundColor = "red";
      document.getElementById(b).innerText = "💣";
     document.getElementById("lose").play();
     gameOver1();
   
    }else if(obj1.id === b1 ||
     obj1.id === b2 ||
     obj1.id === b3 ||
     obj1.id === b4 ||
     obj1.id === b5 ||
     obj1.id === b6 ||
     obj1.id === b7 ||
     obj1.id === b8
     ){
         document.getElementById(obj1.id).style.backgroundColor = "yellow";
         document.getElementById("dangerous").play();
         document.getElementById(obj1.id).onclick=null;
         yScores += 10;
         document.getElementsByClassName("yourScore")[0].innerHTML = "Scores : "+yScores;
       
     }
     else{
         document.getElementById(obj1.id).style.backgroundColor ="green";
         document.getElementById("correct").play();
        document.getElementById(obj1.id).onclick=null;
         yScores += 10;
         document.getElementsByClassName("yourScore")[0].innerHTML = "Scores : "+yScores;        
     }
        
     clicked1 +=1;

     if(clicked1 == 35){
         document.getElementById(obj1.id).style.backgroundColor = "green"
         document.getElementById(obj1.id).innerText = "Win";
         document.getElementById("win").play();
         document.getElementsByClassName("yourScore")[0].innerHTML += "Scores : "+yScores;
         gameWin1();
     }
    }
   
}
    function gameOver1(){
        display = true;
        for(var i=0; i<36 ; i++){
            document.getElementsByClassName("cell1")[i].style.backgroundColor = "red";
        }
        
        document.getElementById("c32").innerText ="G";
        document.getElementById("c33").innerText ="A";
        document.getElementById("c34").innerText ="M";
        document.getElementById("c35").innerText ="E";
        document.getElementById("c42").innerText ="O";
        document.getElementById("c43").innerText ="V";
        document.getElementById("c44").innerText ="E";
        document.getElementById("c45").innerText ="R";
        checkWinLose();
    }
    
    function gameWin1(){
        display = true;
        for(var i=0; i<36 ; i++){
            document.getElementsByClassName("cell1")[i].style.backgroundColor = "green";
        }
        document.getElementById("c32").innerText ="G";
        document.getElementById("c33").innerText ="A";
        document.getElementById("c34").innerText ="M";
        document.getElementById("c35").innerText ="E";
        document.getElementById("c42").innerText ="W";
        document.getElementById("c43").innerText ="I";
        document.getElementById("c44").innerText ="N";
        document.getElementById("c45").innerText ="!";
        checkWinLose();
    }
function checkWinLose(){
    if(display = true){
        document.getElementsByClassName("presult")[0].innerHTML = "<b>Your Scores : </b>"+yScores;
        document.getElementsByClassName("cresult")[0].innerHTML = "<b>Computer's Scores : </b>"+cScores;
        if(yScores > cScores){
            document.getElementsByClassName("winner")[0].innerHTML = "<b>You win</b>";
        }else if(yScores < cScores){
            document.getElementsByClassName("winner")[0].innerHTML = "<b>Computer win</b>";
        }else{
            document.getElementsByClassName("winner")[0].innerHTML = "<b>Draw</b>";
        }
    }
}