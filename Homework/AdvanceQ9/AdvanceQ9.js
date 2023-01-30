const Start = document.querySelector(".start-btn");
const StartDiv = document.querySelector(".start");
const SecondGroup = document.querySelector(".sec-gp");
const ChooseColorGp = document.querySelector(".choose-color-gp");
const userChooseColor = document.querySelector(".user-choose-color");
const submit = document.querySelector(".submit");
const ChoosePlayers = document.querySelector(".ChoosePlayers");
const computer = document.querySelector(".comp");
const TwoPlayer = document.querySelector(".TwoPlayer");
const PlayTwoPlayer = document.querySelector(".two-player-game");

let dataColor1;
let dataColor2;
let click1 = false;
let click2 = false;

Start.addEventListener("click", () => {
  StartDiv.classList.add("startChg");
  SecondGroup.style.display = "block";
});

function Choose1(choOne) {
  if (click1 == false) {
    dataColor1 = choOne.getAttribute("data-color");
    choOne.classList.add("choose-circle-active");
    click1 = true;
  }

  if (click1 == true && click2 == true) {
    userChooseColor.classList.add("userColorChooseChg");
  }
}

function Choose2(obj) {
  if (click2 == false) {
    dataColor2 = obj.getAttribute("data-color");
    obj.classList.add("choose-circle-active");
    click2 = true;
  }
  if (click1 == true && click2 == true) {
    userChooseColor.classList.add("userColorChooseChg");
  }
}

submit.addEventListener("click", () => {
  SecondGroup.style.display = "none";
  ChoosePlayers.classList.add("ChoosePlayersChg");
});

let userClick = false;

TwoPlayer.addEventListener("click", () => {
  PlayTwoPlayer.style.display = "block";
  ChoosePlayers.classList.remove("ChoosePlayersChg");
  userClick = true;
});

computer.addEventListener("click", () => {
  PlayTwoPlayer.style.display = "block";
  ChoosePlayers.classList.remove("ChoosePlayersChg");
  // userClick = false;
});

//Bingo Game Start

let r0 = [0, 0, 0, 0];
let r1 = [0, 0, 0, 0];
let r2 = [0, 0, 0, 0];
let r3 = [0, 0, 0, 0];

let player1 = 1;
let player2 = 2;
let click = true;
let finished = false;
let current = player1;
var done = 0;
let rc;
let comrc;

function change(cir) {
  rc = cir.id;
  let splitRc = rc.split(",");
  let row = Number(splitRc[0]);
  let column = Number(splitRc[1]);

  if (finished == false) {
    switch (row) {
      case 0:
        if (r0[column] != 0) {
          break;
        }
        r0[column] = current;
        click = true;
        break;
      case 1:
        if (r1[column] != 0) {
          break;
        }
        r1[column] = current;
        click = true;
        break;
      case 2:
        if (r2[column] != 0) {
          break;
        }
        r2[column] = current;
        click = true;
        break;
      case 3:
        if (r3[column] != 0) {
          break;
        }
        r3[column] = current;
        click = true;
        break;
    }

    if (userClick == true) {
      if (click == true) {
        cir.style.transform = "scaleY(-1)";
        if (current == player1) {
          cir.style.backgroundColor = dataColor1;
          current = player2;
          document.getElementById("turn").innerText = "Player2's turn";
          document.getElementById("turn").style.color = dataColor2;
          done += 1;
          // console.log(done);
          click = false;
        } else {
          cir.style.backgroundColor = dataColor2;
          current = player1;
          document.getElementById("turn").innerText = "Player1's turn";
          document.getElementById("turn").style.color = dataColor1;
          done += 1;
          // console.log(done);
          click = false;
        }
      }
    } else {
      cir.style.transform = "scaleY(-1)";
      cir.style.backgroundColor = dataColor1;
      document.getElementById("turn").innerText = "Computer's turn";
      document.getElementById("turn").style.color = dataColor2;
      document.getElementById(cir.id).classList.add("active");

      current = player2;
      document.getElementById(cir.id).onclick = null;

      checkWinLose();

      if (finished == false) {
        computerPlaying();
        const computerRC = document.getElementById(comrc);
        setTimeout(() => {
          computerRC.style.transform = "scaleY(-1)";
          computerRC.style.backgroundColor = dataColor2;
          document.getElementById("turn").innerText = "Player1's turn";
          document.getElementById("turn").style.color = dataColor1;
          computerRC.classList.add("active");

          current = player1;
          computerRC.onclick = null;
        }, 500);
      }
      done += 2;
    }
  }
  checkWinLose();
}
function one() {
  document.getElementById("win").innerText = "Player'1 win";
  document.getElementById("win").style.color = dataColor1;
  finished = true;
}
function two() {
  if (userClick == true) {
    document.getElementById("win").innerText = "Player'2 win";
  } else {
    document.getElementById("win").innerText = "Computer's win";
  }
  document.getElementById("win").style.color = dataColor2;
  finished = true;
}
function checkWinLose() {
  //horizontal
  if (horizontal(player1) == true) {
    one();
  } else if (horizontal(player2) == true) {
    two();
  }

  //vertical
  if (vertical(player1) == true) {
    one();
  } else if (vertical(player2) == true) {
    two();
  }

  //diagonal
  if (diagonal(player1) == true) {
    one();
  } else if (diagonal(player2) == true) {
    two();
  }

  //Draw
  if (
    done == 16 &&
    vertical(player1) == false &&
    vertical(player2) == false &&
    diagonal(player1) == false &&
    diagonal(player2) == false &&
    horizontal(player1) == false &&
    horizontal(player2) == false
  ) {
    
    setTimeout(() => {
      document.getElementById("win").innerText = "Draw";
    document.getElementById("win").style.color = "red";
    }, 800);
    
    finished = true;
  }
}

function vertical(player) {
  for (let i = 0; i < 4; i++) {
    if (
      r0[i] == player &&
      r1[i] == player &&
      r2[i] == player &&
      r3[i] == player
    ) {
      return true;
    }
  }
  return false;
}

function diagonal(player) {
  if (
    (r0[0] == player &&
      r1[1] == player &&
      r2[2] == player &&
      r3[3] == player) ||
    (r0[3] == player && r1[2] == player && r2[1] == player && r3[0] == player)
  ) {
    return true;
  }
  return false;
}

//to accpect r0,r1,r2,r3 array
function rowCheck(rowNumber, player) {
  // r0[0] r0[1] r0[2] r0[3]
  // r1[0] r1[1] r1[2] r1[3]
  // r2[0] r2[1] r2[2] r2[3]
  // r3[0] r3[1] r3[2] r3[3]
  let time = 0;
  for (let i = 0; i < 4; i++) {
    if (rowNumber[i] == player) {
      time++;
      // return true;
    }
  }
  if (time == 4) {
    return true;
  }
  return false;
}
function horizontal(player) {
  if (rowCheck(r0, player)) {
    return true;
  } else if (rowCheck(r1, player)) {
    return true;
  } else if (rowCheck(r2, player)) {
    return true;
  } else if (rowCheck(r3, player)) {
    return true;
  }
  return false;
}

function computerPlaying() {
  let comRowNumber = Math.floor(Math.random() * 4 + 0);
  let comColNumber = Math.floor(Math.random() * 4 + 0);
  // console.log("ramR" + comColNumber)
  // console.log("ramC" + comRowNumber)

  comrc = comRowNumber + "," + comColNumber;

  if (
    document.getElementById(comrc).classList.contains("active") == false ||
    document.getElementById(rc).classList.contains("active") == false
  ) {
    switch (comRowNumber) {
      case 0:
        r0[comColNumber] = current;
        break;
      case 1:
        r1[comColNumber] = current;
        break;
      case 2:
        r2[comColNumber] = current;
        break;
      case 3:
        r3[comColNumber] = current;
        break;
    }
  } else {
    computerPlaying();
  }
}
