// x=10;
// y=20;
// if(y == 20){
//     console.log("A");
// }else if(y === "20"){
//     console.log("B");
// }else{
//     console.log("C");
// }

function alertMessage(){
    var userData = document.getElementById("inputBox").value;
    window.alert(userData);
}

function alertMessage1(){
    var userData1 = document.getElementById("inputBox1").value;
   document.getElementById("result").innerHTML ="hello "+userData1;
}

function alertMessage2(){
    var userData2 = document.getElementById("inputBox2").value;
    var userData3 = document.getElementById("inputBox3").value;
   document.getElementById("result").innerHTML ="hello "+userData2 +" , "+"Your age is "+userData3;
}

function alertMessage3(){
    var userData4 = document.getElementById("inputBox2").value;
    var userData5 = document.getElementById("inputBox3").value;
    var userGender = document.getElementById("inputb").value;
   document.getElementById("result").innerHTML ="hello "+userData4 +" , "+"Your age is "+userData5 +" , "+userGender;
}


