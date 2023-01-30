var p1,p2,p3,p4,p5,p6,p7,p8;
var b1,b2,b3,b4,b5,b6,b7,b8;
var dis = false;
var mine;
var a,b;
var clicked = 0;
var rand1,rand2;
prepare();

function start(){
    document.getElementById("start").style.display = "none";
    document.getElementById("tab").style.display = "block";
    document.getElementById("stop").style.display = "block";
}
function stop(){
    document.getElementById("stop").style.display = "none";
    document.getElementById("tab").style.display = "none";
    document.getElementById("start").style.display = "block";
}

function prepare(){
    
for(var i=1; i<3; i++){
    rand1 = Math.floor(Math.random() * 8 + 1);
    rand2 = Math.floor(Math.random() * 8 + 1);
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
        b = mine;
        b1 = (rand1 - 1)+""+ (rand2 - 1);
        b2 = (rand1 - 1)+""+ (rand2);
        b3 = (rand1 - 1)+""+ (rand2 + 1);
        b4 = (rand1) +""+ (rand2 - 1);
        b5 = (rand1) +""+ (rand2 + 1);
        b6 = (rand1 + 1)+""+ (rand2 - 1);
        b7 = (rand1 + 1)+""+ (rand2);
        b8 = (rand1 + 1)+""+ (rand2 + 1);
    }
    
}
    }

function chose(obj){
    if(dis == false){
    if(obj.id == a || obj.id == b){
        document.getElementById(obj.id).style.backgroundColor = "red";
        document.getElementById(obj.id).style.backgroundColor = "red";
        document.getElementById(obj.id).innerText = "💣";
        document.getElementById(obj.id).innerText = "💣";
       gameOver();
       document.getElementById("lose").play();
    }else if(obj.id === p1 ||
        obj.id === p2 ||
        obj.id === p3 ||
        obj.id === p4 ||
        obj.id === p5 ||
        obj.id === p6 ||
        obj.id === p7 ||
        obj.id === p8 ||
        obj.id === b1 ||
        obj.id === b2 ||
        obj.id === b3 ||
        obj.id === b4 ||
        obj.id === b5 ||
        obj.id === b6 ||
        obj.id === b7 ||
        obj.id === b8 
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
        if(clicked == 62){
            document.getElementById(obj.id).style.backgroundColor = "green"
            document.getElementById(obj.id).innerText = "Win";
            document.getElementById("win").play();
           gameWin();
        }
    }
}  
    function gameOver(){
        dis = true;
        for(var i=0; i<64 ; i++){
            document.getElementsByClassName("allInOne")[i].style.backgroundColor = "red";
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
        for(var i=0; i<64 ; i++){
            document.getElementsByClassName("allInOne")[i].style.backgroundColor = "green";
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