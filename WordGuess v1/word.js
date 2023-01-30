const levelArray = [
  {
    ImgOne: "./img/L1(1).jpg",
    ImgTwo: "./img/L1(2).jpg",
    ImgThree: "./img/L1(3).jpg",
    ImgFour: "./img/L1(4).jpg",
    answer: "SUN",
  },
  {
    ImgOne: "./img/L2(1).jpg",
    ImgTwo: "./img/L2(2).jpg",
    ImgThree: "./img/L2(3).jpg",
    ImgFour: "./img/L2(4).jpg",
    answer: "MOTHER",
  },
  {
    ImgOne: "./img/L3(1).jpg",
    ImgTwo: "./img/L3(2).jpg",
    ImgThree: "./img/L3(3).jpg",
    ImgFour: "./img/L3(4).jpg",
    answer: "MIRROR",
  },
  {
    ImgOne: "./img/L4(1).jpg",
    ImgTwo: "./img/L4(2).jpg",
    ImgThree: "./img/L4(3).jpg",
    ImgFour: "./img/L4(4).jpg",
    answer: "SUIT",
  },
  {
    ImgOne: "./img/L5(1).jpg",
    ImgTwo: "./img/L5(2).jpg",
    ImgThree: "./img/L5(3).jpg",
    ImgFour: "./img/L5(4).jpg",
    answer: "DEPRESSION",
  },
  {
    ImgOne: "./img/L6(1).jpg",
    ImgTwo: "./img/L6(2).jpg",
    ImgThree: "./img/L6(3).jpg",
    ImgFour: "./img/L6(4).jpg",
    answer: "EXCHANGE",
  },
];
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const deleteWord = document.getElementById("delete");
const hint = document.getElementById("hint");
const keyBtn = document.getElementsByClassName("keyBtn");
const nextLevel = document.getElementById("nextLevel");
const bottomContainer = document.getElementsByClassName("bottom-Container")[0];
let clickId;
let answerBoxIndex = 0;
let boxValue = "";
let characterNum = [];
let hintTime = (coins = level = r = 0);
let playerLevel = 2;
let randomKey = [];
let cloneAnswer = [];
function randomCalculating() {
  //protect the real answer
  cloneAnswer = [...levelArray[level].answer];

  let needWordLength = levelArray[level].answer.length;

  while (r < 19 - needWordLength) {
    let randomWords = Math.random() * (90 - 65) + 65;
    let randomCode = String.fromCharCode(randomWords);
    // if(!randomKey.includes(randomCode)){
    randomKey.push(randomCode);
    r++;
    // }
  }
  for (let i = 0; i < cloneAnswer.length; i++) {
    randomKey.push(cloneAnswer[i]);
  }
  randomKey = randomKey.sort(() => Math.random() - 0.5);
  // console.log(randomKey);
}
randomCalculating();
function prepare() {
  image1.src = levelArray[level].ImgOne;
  image2.src = levelArray[level].ImgTwo;
  image3.src = levelArray[level].ImgThree;
  image4.src = levelArray[level].ImgFour;

  const createDiv2 = document.createElement("div");
  createDiv2.classList.add("blankSpace");
  const createButton2 = document.createElement("div");
  createButton2.classList.add("showButton");

  for (let i = 0; i < levelArray[level].answer.length; i++) {
    const createDiv = document.createElement("div");
    createDiv.classList.add("answerBox");
    createDiv2.append(createDiv);
    bottomContainer.append(createDiv2);
  }

  for (let i = 0; i < randomKey.length; i++) {
    const createButton = document.createElement("button");
    createButton.setAttribute("id", i);
    createButton.classList.add("keyBtn");
    createButton.classList.add(randomKey[i]);
    createButton.innerText = randomKey[i];
    createButton2.append(createButton);
    bottomContainer.append(createButton2);

    document.getElementById(`${i}`).addEventListener("click", (e) => {
      // console.log(e.target.innerText)
      document.getElementById("clicking").play();
      clickId = e.target.id;
      document.getElementById(clickId).style.display = "none";
      document.getElementsByClassName("answerBox")[answerBoxIndex].innerText =
        e.target.innerText;
      boxValue += e.target.innerText;
      //    console.log(boxValue)
      characterNum.push(clickId);
      // console.log(characterNum);

      if (levelArray[level].answer.length - 1 == answerBoxIndex) {
        if (level == levelArray.length - 1) {
          document
            .getElementsByClassName("finishBox")[0]
            .classList.add("winBoxShow");
            document.getElementById("win").play();
            deleteWord.classList.add("noEffect");
            hint.classList.add("noEffect");
            for (let i = 0; i < keyBtn.length; i++) {
              keyBtn[i].classList.add("noEffect");
            }
          return;
        }
        if (levelArray[level].answer == boxValue) {
          // console.log("same")
          lopping("lime","correct");
          document.getElementById("win").play();
          document
            .getElementById("pass").innerText = "Level " + (playerLevel - 1) + " pass";
          document
            .getElementsByClassName("winBox")[0]
            .classList.add("winBoxShow");
          deleteWord.classList.add("noEffect");
          hint.classList.add("noEffect");
          coins += 10;
          document.getElementById("getCoins").innerText = 10 + " coins";
      
        } else {
          document.getElementById("clickWrong").play();
          lopping("red","wrong");
        }
        for (let i = 0; i < keyBtn.length; i++) {
          keyBtn[i].classList.add("noEffect");
        }
      }
      answerBoxIndex++;
    });
  }

  hint.addEventListener("click", () => {
    document.getElementById("clicking").play();
    if (hintTime == levelArray[level].answer.length) {
      return;
    }
    if (coins >= 20) {
      document.getElementsByClassName(
        levelArray[level].answer[hintTime]
      )[0].style.background = "lime";
      hintTime++;
      coins -= 20;
      document.getElementById("showCoins").innerText = coins + " coins";
    }
  });
}
nextLevel.addEventListener("click", () => {
  level++;
  document.getElementById("currentLevel").innerText = "Level : " + playerLevel;
  playerLevel++;
  document.getElementById("showCoins").innerText = coins + " coins";

  // console.log(level);
  reset();
  randomCalculating();
  prepare();
});
document.getElementById("reply").addEventListener("click", () => {
  location.reload();
});
prepare();

deleteWord.addEventListener("click", () => {
  if (answerBoxIndex <= 0) {
    return;
  }
  lopping("black");
  document.getElementsByClassName("answerBox")[answerBoxIndex - 1].innerText =
    "";
  document.getElementById(characterNum[characterNum.length - 1]).style.display =
    "inline-block";
  characterNum.pop();
  boxValue = boxValue.slice(0, -1);
  answerBoxIndex = 0 ? answerBoxIndex : answerBoxIndex - 1;
  // console.log(answerBoxIndex)
  for (let i = 0; i < keyBtn.length; i++) {
    keyBtn[i].classList.remove("noEffect");
  }
});
function lopping(color,state) {
  for (let i = 0; i < levelArray[level].answer.length; i++) {
    document.getElementsByClassName("answerBox")[i].style.background = color;
    document.getElementsByClassName("answerBox")[i].classList.add(state);
    if(color == "black"){
      document.getElementsByClassName("answerBox")[i].classList.remove("wrong");
      document.getElementsByClassName("answerBox")[i].classList.remove("correct");
    }
  }
}
function reset() {
  boxValue = "";
  answerBoxIndex = 0;
  characterNum = [];
  image1.src = "";
  image2.src = "";
  image3.src = "";
  image4.src = "";
  cloneAnswer = [];
  randomKey = [];
  r = 0;

  document.getElementsByClassName("blankSpace")[0].remove();
  document.getElementsByClassName("showButton")[0].remove();
  document.getElementsByClassName("winBox")[0].classList.remove("winBoxShow");
  deleteWord.classList.remove("noEffect");
  hint.classList.remove("noEffect");
}
