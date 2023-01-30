const gameDetails = document.getElementsByClassName("gameDetails");
const minions = document.getElementsByClassName("minions");
const start = document.getElementById("start");
const flipTime = document.getElementById("flipTime");
const refresh = document.getElementById("refresh");
let img1, img2, first, second, interval;
let click = (nextClick = gameStart = false);
let total = (flip = 0);
let sec = 60;

refresh.addEventListener("click", () => {
  start.style.display = "block";
  refresh.style.display = "none";
  clearInterval(interval);
  sec = 60;
  document.getElementById("timeOver").innerText = sec + " S";
  first = second = img1 = img2 = "";
  flip = total = 0;
  flipTime.innerText = flip;
  gameStart = click = false;
  document.getElementById("check").innerText = "FIND US";
  for (let i = 0; i < gameDetails.length; i++) {
    gameDetails[i].classList.remove("gameDetailsFlip");
  }
});
start.addEventListener("click", () => {
  shuffle();
  refresh.style.display = "block";
  start.style.display = "none";

  for (let i = 0; i < gameDetails.length; i++) {
    gameDetails[i].classList.add("gameDetailsFlip");
  }
  interval = setInterval(() => {
    sec--;

    document.getElementById("timeOver").innerText = sec + " S";

    if (sec == 0) {
      checkWinLose();
      clearInterval(interval);
    }
    if (sec == 50) {
      for (let i = 0; i < gameDetails.length; i++) {
        gameDetails[i].classList.remove("gameDetailsFlip");
        gameDetails[i].classList.remove("pointerEvent");
        gameStart = true;
      }
    }
  }, 1000);
});
for (let i = 0; i < gameDetails.length; i++) {
  gameDetails[i].addEventListener("click", function handler() {
    if (gameStart) {
      if (nextClick) {
        return;
      } //does not allow triple click

      gameDetails[i].classList.add("gameDetailsFlip");
      document.getElementById("clickSound").play();
      if (!click) {
        click = true;
        img1 = minions[i].src;
        first = i;
        flip++;
        flipTime.innerText = flip;
      } else {
        click = false;
        img2 = minions[i].src;
        second = i;
        flip++;
        flipTime.innerText = flip;
        if (img1 == img2) {
          // console.log(first,second)
          gameDetails[first].classList.add("pointerEvent");
          gameDetails[second].classList.add("pointerEvent");
          nextClick = true;

          setTimeout(() => {
            document.getElementById("correctSound").play();
            minions[first].classList.add("correct");
            minions[second].classList.add("correct");
            nextClick = false;
           
          }, 550);

          setTimeout(() => {
            minions[first].classList.remove("correct");
            minions[second].classList.remove("correct");
          }, 900);
          total++;
          checkWinLose();
        } else {
          nextClick = true;
          setTimeout(() => {
            document.getElementById("wrongSound").play();
            minions[first].classList.add("wrong");
            minions[second].classList.add("wrong");
          }, 550);

          setTimeout(() => {
            gameDetails[first].classList.remove("gameDetailsFlip");
            gameDetails[second].classList.remove("gameDetailsFlip");

            minions[first].classList.remove("wrong");
            minions[second].classList.remove("wrong");

            nextClick = false;
          }, 900);
        }
      }
    }
  });
}

function checkWinLose() {
  if ((sec == 0 && total == 8) || total == 8) {
    document.getElementById("check").innerText = "You Win!";
    document.getElementById("gameWinSound").play();
    gameStart = false;
    clearInterval(interval);
  } else if (sec == 0 && total < 8) {
    document.getElementById("check").innerText = "You Lose!";
    document.getElementById("gameLoseSound").play();
    gameStart = false;
  }
}

function shuffle() {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  let i = 0;

  let includeNumber = [];

  while (i < array.length) {
    let randomNumber = Math.floor(Math.random() * array.length);
    if (!includeNumber.includes(randomNumber)) {
      includeNumber.push(randomNumber);

      let cardImg = `./img/minion${array[randomNumber]}.png`;
      minions[i].src = cardImg;

      i++;
    }
  }
}

//let randomImg = array.sort(()=>Math.random() - 0.5);
//console.log(randomImg);
