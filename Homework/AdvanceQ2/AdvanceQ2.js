var clicked = 0;
var players = document.getElementsByClassName("yoichi")[0];
var orgImg = players.src;
var orgPlayerName = document.getElementsByClassName("aboutN")[0].innerHTML;
var orgPlayerAge = document.getElementsByClassName("aboutA")[0].innerHTML;
var orgPlayerPosition = document.getElementsByClassName("aboutP")[0].innerHTML;
var orgPlayerSalary = document.getElementsByClassName("aboutS")[0].innerHTML;
var orgPlayerSpeed = document.getElementsByClassName("s1")[0].innerHTML;
var orgPlayerOffense = document.getElementsByClassName("s2")[0].innerHTML;
var orgPlayerShoot = document.getElementsByClassName("s3")[0].innerHTML;
var orgPlayerDribble = document.getElementsByClassName("s4")[0].innerHTML;
var orgPlayerDeffense = document.getElementsByClassName("s5")[0].innerHTML;
var orgPlayerPass = document.getElementsByClassName("s6")[0].innerHTML;
var aryImg = [
  {
    Name: "Name - Gin Gagamaru",
    Salary: "$10Million Yen",
    Age: "Age - 18",
    Position: "Position - GoalKeeper",
    Pic: "./img/Gin_Gagamaru.png",
    speed: "A",
    offense: "A",
    shoot: "A",
    dribble: "B",
    deffense: "S",
    pass: "A",
  },
  {
    Name: "Name - Baro",
    Salary: "$20Million Yen",
    Age: "Age - 18",
    Position: "Position - Striker",
    Pic: "./img/baro.png",
    speed: "B",
    offense: "B",
    shoot: "S",
    dribble: "A",
    deffense: "A",
    pass: "C",
  },
  {
    Name: "Name -MeguruBachira",
    Salary: "$32Million Yen",
    Age: "Age - 17",
    Position: "Position - Mid-laner",
    Pic: "./img/Meguru_Bachira.png",
    speed: "A",
    offense: "B",
    shoot: "B",
    dribble: "S",
    deffense: "B",
    pass: "S",
  },
  {
    Name: "Name - Seishiro Nagi",
    Salary: "$40Million Yen",
    Age: "Age - 17",
    Position: "Position - Striker",
    Pic: "./img/Seishiro_Nagi.png",
    speed: "A",
    offense: "B",
    shoot: "S",
    dribble: "A",
    deffense: "B",
    pass: "B",
  },
];
function prev() {
  if (clicked === 0) {
    players.src = orgImg;

    document.getElementsByClassName("s1")[0].innerHTML = orgPlayerSpeed;
    document.getElementsByClassName("s2")[0].innerHTML = orgPlayerOffense;
    document.getElementsByClassName("s3")[0].innerHTML = orgPlayerShoot;
    document.getElementsByClassName("s4")[0].innerHTML = orgPlayerDribble;
    document.getElementsByClassName("s5")[0].innerHTML = orgPlayerDeffense;
    document.getElementsByClassName("s6")[0].innerHTML = orgPlayerPass;
    document.getElementsByClassName("aboutN")[0].innerHTML = orgPlayerName;
    document.getElementsByClassName("aboutA")[0].innerHTML = orgPlayerAge;
    document.getElementsByClassName("aboutP")[0].innerHTML = orgPlayerPosition;
    document.getElementsByClassName("aboutS")[0].innerHTML = orgPlayerSalary;
    return;
  }
  clicked -= 1;

  document.getElementsByClassName("s1")[0].innerHTML = aryImg[clicked].speed;
  document.getElementsByClassName("s2")[0].innerHTML = aryImg[clicked].offense;
  document.getElementsByClassName("s3")[0].innerHTML = aryImg[clicked].shoot;
  document.getElementsByClassName("s4")[0].innerHTML = aryImg[clicked].dribble;
  document.getElementsByClassName("s5")[0].innerHTML = aryImg[clicked].deffense;
  document.getElementsByClassName("s6")[0].innerHTML = aryImg[clicked].pass;
  document.getElementsByClassName("aboutN")[0].innerHTML = aryImg[clicked].Name;
  document.getElementsByClassName("aboutA")[0].innerHTML = aryImg[clicked].Age;
  document.getElementsByClassName("aboutP")[0].innerHTML =
    aryImg[clicked].Position;
  document.getElementsByClassName("aboutS")[0].innerHTML =
    aryImg[clicked].Salary;
  players.src = aryImg[clicked].Pic;
}

function next() {
  if (clicked === aryImg.length) {
    return;
  }
  players.src = aryImg[clicked].Pic;
  document.getElementsByClassName("s1")[0].innerHTML = aryImg[clicked].speed;
  document.getElementsByClassName("s2")[0].innerHTML = aryImg[clicked].offense;
  document.getElementsByClassName("s3")[0].innerHTML = aryImg[clicked].shoot;
  document.getElementsByClassName("s4")[0].innerHTML = aryImg[clicked].dribble;
  document.getElementsByClassName("s5")[0].innerHTML = aryImg[clicked].deffense;
  document.getElementsByClassName("s6")[0].innerHTML = aryImg[clicked].pass;
  document.getElementsByClassName("aboutN")[0].innerHTML = aryImg[clicked].Name;
  document.getElementsByClassName("aboutA")[0].innerHTML = aryImg[clicked].Age;
  document.getElementsByClassName("aboutP")[0].innerHTML =
    aryImg[clicked].Position;
  document.getElementsByClassName("aboutS")[0].innerHTML =
    aryImg[clicked].Salary;
  clicked += 1;
}
