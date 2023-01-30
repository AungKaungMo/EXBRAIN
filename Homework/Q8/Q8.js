//Calculate(1)
function calculate() {
  var fn = parseFloat(document.getElementById("firstNumber").value);
  var sn = parseFloat(document.getElementById("secondNumber").value);
  var op = document.getElementById("operators").value;

  switch (op) {
    case "+":
      document.getElementById("result").innerHTML = fn + sn;
      break;
    case "-":
      document.getElementById("result").innerHTML = fn - sn;
      break;
    case "*":
      document.getElementById("result").innerHTML = fn * sn;
      break;
    case "/":
      document.getElementById("result").innerHTML = fn / sn;
      break;
    case "%":
      document.getElementById("result").innerHTML = fn % sn;
      break;
  }
}

//Calculate(2)
function multiply() {
  document.getElementById("result1").innerHTML ="";
  var num = document.getElementById("num").value;
  var times = document.getElementById("times").value;
  for (var i = 1; i <= times; i++) {
    document.getElementById("result1").innerHTML +=
      num + " x " + i + " = " + num * i + "<br>";
  }
}
