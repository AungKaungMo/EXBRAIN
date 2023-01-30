// function divClick(divBox){
//     if(divBox == 1){
//         var a = document.getElementById("box1").innerText;
//     }else{
//         var a = document.getElementById("box2").innerText;
//     }
//     alert(a)
// }

function divClick(divBox){
    console.log(divBox.innerText);
}

function mOver(obj){
    obj.innerHTML = "welcome";
    obj.style.backgroundColor = "green";
}
function mOut(obj){
    obj.innerHTML = "Thank You";
    obj.style.backgroundColor = "blue";
}
function mDown(obj){
    obj.innerHTML = "Down";
    obj.style.backgroundColor = "violet";
}
function mUp(obj){
    obj.innerHTML = "Up";
    obj.style.backgroundColor = "teal";
}
function myFunction(obj){
    document.getElementById("demo").innerHTML =obj.value;
}
function myFunction(obj){
    document.getElementById("demo").innerHTML =obj.value;
}


//keyUp
//1. set input Data 
//2. myFunction()

//keyDown
//1. myFunction()
//2. set input Data




