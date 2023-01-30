var mine;
var p1,p2,p3,p4,p5,p6,p7,p8;
var dis = false;
var num = 36;
var clicked=0;
prepare();

function prepare(){
    var x = Math.floor(Math.random() * 6 + 1);
    var y = Math.floor(Math.random() * 6 + 1);
    mine = x +""+ y;

    p1 = (x - 1) +""+ (y -1);
    p2 = (x - 1) +""+ (y);
    p3 = (x - 1) +""+ (y +1);
    p4 = (x) +""+ (y -1);
    p5 = (x) +""+ (y +1);
    p6 = (x + 1)+""+(y -1);
    p7 = (x + 1)+""+(y)
    p8 = (x + 1)+""+(y+1);
  
   
}
function clicking(obj){
    
    if(dis == false){
   if(obj.id === mine){
     document.getElementById(mine).style.backgroundColor = "red";
     document.getElementById(mine).innerText = "BOOM!";
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
        document.getElementById(obj.id).onclick = null;
    }
    
    else{
        document.getElementById(obj.id).style.backgroundColor ="green";
        document.getElementById("correct").play();
        document.getElementById(obj.id).onclick = null;
    }
    clicked +=1;

    if(clicked == 35){
        document.getElementById(obj.id).style.backgroundColor = "green"
        document.getElementById(obj.id).innerText = "Win";
        document.getElementById("win").play();
        gameWin();
    }
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
}