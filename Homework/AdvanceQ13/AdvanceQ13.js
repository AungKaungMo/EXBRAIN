const correctMark = document.getElementsByClassName("correctMark")[0];
const wrongMark = document.getElementsByClassName("wrongMark")[0];
const timming = document.getElementsByClassName("timming")[0];
const typeText = document.getElementsByClassName("typeText")[0];
const userTypeText = document.getElementsByClassName("userTypeText")[0];
const getScores = document.getElementsByClassName("getScores")[0];
const replay = document.getElementsByClassName("replay")[0];
let time = 30;
let play = true;
let userPress, keyText;
let corectCount = (wrongCount = Scores = 0);
let typeTextArray = [];

function countingTime() {
  let countTime = setInterval(() => {
    time--;
    timming.innerText = time;
    if (time == 0) {
      clearInterval(countTime);
      play = false;
      end();
    }
  }, 1000);
}

function randomText() {
  for (let i = 0; i < 8; i++) {
    let keycode = Math.floor(Math.random() * (122 - 97 + 1) + 97);
    keyText = String.fromCharCode(keycode);
    typeText.innerHTML += `<span class="key">${keyText}</span>`;
    typeTextArray.push(keyText);
  }
  //   console.log(typeTextArray);
}

randomText();
countingTime();
const key = document.getElementsByClassName("key");
let i = 0;

window.addEventListener("keyup", (e) => {
  userPress = e.key;

  if (play) {
    if (typeTextArray[i] == userPress) {
      key[i].style.color = "green";
      i++;
    } else {
      key[i].style.color = "red";
      typeText.classList.add("mistake");
      i++;
    }

    if (i == typeTextArray.length) {
      if (typeText.classList.contains("mistake")) {
        // console.log("wrong");
        typeText.classList.add("typeTextWrong");
        setTimeout(() => {
          typeText.classList.remove("typeTextWrong");
          wrongCount++;
          wrongMark.innerText = wrongCount;
          Scores -= 10;
          getScores.innerText = Scores;
        }, 600);
      } else {
        typeText.classList.add("typeTextCorrect");
        // console.log("correct");
        setTimeout(() => {
          typeText.classList.remove("typeTextCorrect");
          corectCount++;
          correctMark.innerText = corectCount;
          Scores += 10;
          getScores.innerText = Scores;
        }, 600);
      }
      typeText.innerHTML = "";
      i = 0;
      typeText.classList.remove("mistake");
      typeTextArray = [];
      randomText();
    }
  }
});

function end() {
  document.getElementsByClassName("card")[0].style.display = "none";
  document.getElementsByClassName("endingDisplay")[0].style.display = "block";
  document.getElementsByClassName("correctWords")[0].innerText = corectCount;
  document.getElementsByClassName("wrongWords")[0].innerText = wrongCount;
  document.getElementsByClassName("scoreCount")[0].innerText = Scores;
}
replay.addEventListener("click", () => {
  corectCount = wrongCount = Scores = 0;
  time = 31;
  play = true;
  typeTextArray = [];
  document.getElementsByClassName("card")[0].style.display = "block";
  document.getElementsByClassName("endingDisplay")[0].style.display = "none";
  document.getElementsByClassName("correctWords")[0].innerText = corectCount;
  document.getElementsByClassName("wrongWords")[0].innerText = wrongCount;
  document.getElementsByClassName("scoreCount")[0].innerText = Scores;
  correctMark.innerText = corectCount;
  wrongMark.innerText = wrongCount;
  getScores.innerText = Scores;
  typeText.innerHTML = "";
  countingTime();
  randomText();
});
