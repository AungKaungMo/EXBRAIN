const imgArray = [
  "./img/blue balloon.png",
  "./img/purpleBalloon.png",
  "./img/yellowBalloon.png",
  "./img/pinkBalloon.png",
  "./img/orangeBalloon.png",
  "./img/greenBallono.png",
  "./img/cyanBallon.png",
  "./img/redBalloon.png",
];
const balloonContainer = document.getElementsByClassName("balloonContainer")[0];
function shuffle() {
  let i = 0;
  let j = 1;
  let includeNumber = [];

  while (i <= imgArray.length * 9) {
    let randomNumber = Math.floor(Math.random() * imgArray.length);
    if (i == imgArray.length * j) {
      includeNumber = [];
      j++;
    }

    if (!includeNumber.includes(randomNumber)) {
      includeNumber.push(randomNumber);
      let randomDelay = Math.random() * 17 + "s";
      let balloonContainerDetails = document.createElement("div");
      balloonContainerDetails.classList.add("ballonText");
      balloonContainerDetails.style.animationDelay = randomDelay;
      console.log(balloonContainerDetails.value);
      let balloonImg = document.createElement("img");
      balloonImg.classList.add("imageBallon");
      let balloontext = document.createElement("p");
      balloontext.classList.add("randomText");
      balloonContainerDetails.append(balloonImg, balloontext);
      balloonContainer.append(balloonContainerDetails);
      balloonImg.src = imgArray[randomNumber];
      i++;
    }
  }
}
shuffle();

const randomText = document.getElementsByClassName("randomText");
const balloonText = document.getElementsByClassName("ballonText");

function randomKey() {
  for (let i = 0; i < randomText.length; i++) {
    let keycode = Math.floor(Math.random() * (122 - 97 + 1) + 97);
    randomText[i].innerText = String.fromCharCode(keycode);
  }
}
randomKey();

window.addEventListener("keyup", (e) => {
  userPressValue = e.key;

  for (let i = 0; i < randomText.length; i++) {
    if (randomText[i].innerHTML == userPressValue) {
      document.getElementsByClassName("ballonText")[i].style.opacity = "0";
    };
  }
  if (userPressValue == " ") {
    for (let i = 0; i < balloonText.length; i++) {
      document.getElementsByClassName("ballonText")[i].style.display = "none";
    }
    shuffle();
    randomKey();
  }
});
