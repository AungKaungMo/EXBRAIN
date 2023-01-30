const randomText = document.getElementsByClassName("randomText");

let userPressValue;
let orgValue ;

function randomKey(){
    for(let i=0; i < randomText.length; i++){
        let keycode = Math.floor(Math.random() * (122 - 97 + 1) + 97);
        randomText[i].innerText = String.fromCharCode(keycode);
       
    }

}
console.log(screen.availHeight)
if(document.getElementsByClassName("ballonText")[0].clientHeight > screen.height){
    console.log("welcome");
   }
shuffle();
randomKey();
window.addEventListener("keyup",(e)=>{
     userPressValue = e.key;
     
     for(let i=0; i<randomText.length; i++){
        console.log(randomText[i].innerHTML);
        console.log(document.getElementsByClassName("ballonText")[0].getBoundingClientRect())
        // console.log(document.getElementsByClassName("balloonContainer")[0].getBoundingClientRect()) ;
       
        if(randomText[i].innerHTML == userPressValue){
            console.log("true");
            document.getElementsByClassName("ballonText")[i].style.opacity = "0";
        };
     };
  
});
function shuffle(){
    const imgArray = ["./img/blue balloon.png", "./img/purpleBalloon.png", "./img/yellowBalloon.png", "./img/pinkBalloon.png", "./img/orangeBalloon.png", "./img/greenBallono.png", "./img/cyanBallon.png", "./img/redBalloon.png"];
    let i = 0;

    let includeNumber = [];
  
    while (i < imgArray.length) {
        let smth = document.getElementsByClassName("imageBallon")[i].getAttribute("data-time");
      let randomNumber = Math.floor(Math.random() * imgArray.length);
      if (!includeNumber.includes(randomNumber)) {
        includeNumber.push(randomNumber);
  
      
      
        setTimeout(() => {
            let keycode = Math.floor(Math.random() * (122 - 97 + 1) + 97);
            randomText[i].innerText = String.fromCharCode(keycode);
            document.getElementsByClassName("imageBallon")[i].src = imgArray[randomNumber];
            document.getBoundingClientRect("ballonText")[i].style.opacity = "1";
        }, smth * 3000);
        i++;

      }
    }

}

// for(let i=0; i<randomText.length ; i++){
//    let smth = document.getElementsByClassName("imageBallon")[i].getAttribute("data-time");
//    setInterval(() => {
//         console.log("hi"+smth)
//         randomKey();
//         shuffle()
//         document.getElementsByClassName("balloonText")[i].style.opacity = "1";
//    }, smth * 9000);

// }
// setInterval(() => {
//     randomKey();
//     shuffle();
//     for(let i = 0; i< randomText.length; i++){
//         document.getElementsByClassName("ballonText")[i].style.opacity = "1";
//     }
// }, 8600);
// setInterval(() => {
//     randomKey();
//     shuffle();
//     for(let i = 0; i< randomText.length; i++){
//         document.getElementsByClassName("ballonText")[i].style.opacity = "1";
//     }
// }, 7500);

