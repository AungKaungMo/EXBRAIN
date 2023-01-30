const randomBox = document.getElementById("randomBox");
const solution = document.getElementById("solution");
const winLose = document.getElementById("winLose");
const total = document.getElementById("total");
const acceptArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const box = document.getElementsByClassName("box");
let randomText = Math.floor(Math.random() * 100);
let solutionTotal;
let t = 0;
function loading() {
  randomBox.innerText = randomText;
  window.addEventListener("keyup", function checkingKey(e) {
    let userPressKey = e.key;
    if (acceptArray.includes(userPressKey)) {
      for (let i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = "#495579";
      }
      document.getElementById(`${userPressKey}`).style.backgroundColor =
        "green";
      solution.innerHTML +=
        solution.innerHTML == "" ? userPressKey : "+" + userPressKey;
      solutionTotal = Number(userPressKey);

      t += solutionTotal;
      total.innerText = t;
      if (total.innerText == randomText) {
        winLose.innerText = "Correct";
        winLose.style.color = "green";
        this.window.removeEventListener("keyup", checkingKey);
      } else if (t > randomText) {
        winLose.innerText = "You are wrong";
        winLose.style.color = "red";
        this.window.removeEventListener("keyup", checkingKey);
      }
    } else {
      return;
    }
  });
}
document.getElementById("replay").addEventListener("click", () => {
  location.reload();
});

///////////////Sayar Code


// if (!finished && !isNaN(e.key)) {
//     equation.innerHTML += (equation.innerHTML == "") ? e.key : "+" + e.key;
//     result.innerHTML = Number(result.innerHTML) + Number(e.key);

//     if (result.innerHTML == randomNum.innerHTML) {
//         gameStatus.innerHTML = "You Are Correct!";
//         finished = true;
//     }
//     else if (Number(result.innerHTML) > Number(randomNum.innerHTML)) {
//         gameStatus.innerHTML = "You Are Wrong!";
//         finished = true;
//     }
// }
