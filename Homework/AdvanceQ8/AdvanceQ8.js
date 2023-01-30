var inputKeybordStyle = document.getElementsByClassName(
  "input-keybord-style"
)[0];
var userInputNumber = document.getElementById("user-input-number");
var inputValue;
var inp;

function clicking(obj) {
  var smth = "";

  if (document.getElementById("cap").checked) {
    smth = obj.innerHTML.toUpperCase();
  } else {
    smth = obj.innerHTML.toLowerCase();
  }
  if (obj.id == "space") {
    smth = " ";
  }
  inputKeybordStyle.innerHTML += smth;
  // var sm = obj.id;
  // inputKeybordStyle.innerHTML += sm;
  inp = inputKeybordStyle.innerHTML;
}

userInputNumber.addEventListener("keyup", (e) => {
  inputValue = e.target.value;
  // var x =inputValue.charCodeAt(0);
  // console.log(x)
});

function forChange(fun) {
  var a = userInputNumber.value;

  if (fun.id === "11") {
    // var x =inputValue.charCodeAt(0);

    if (userInputNumber.value == "") {
      swal("", "Fill the number first!", "error");
    } else if (inp.length < inputValue) {
      swal("", "Try Again!", "error");
    } else {
      swal("Answer!", inp.charAt(inputValue).toString(), "success");
    }
  } else if (fun.id === "12") {
    if (userInputNumber.value == "") {
      swal("", "Fill the number first!", "error");
    } else if (inp.length < inputValue) {
      swal("", inp.charCodeAt(inputValue).toString(), "error");
    } else {
      swal("Answer!", inp.charCodeAt(inputValue).toString(), "success");
    }
  } else if (fun.id === "13") {
    swal("Answer!", inp.toUpperCase(), "success");
  } else if (fun.id === "14") {
    swal("Answer!", inp.toLowerCase(), "success");
  } else if (fun.id === "15") {
    swal("Answer!", inp.trim(), "success");
  } else if (fun.id === "16") {
    if (userInputNumber.value == "") {
      swal("", "Fill the number first!", "error");
    } else if (!inp.includes(inputValue)) {
      swal("", a.toString() + " is not included", "error");
    } else {
      swal("Answer!", inp.includes(inputValue).toString(), "success");
    }
  } else if (fun.id === "17") {
    if (userInputNumber.value == "") {
      swal("", "Fill the number first!", "error");
    } else if (inp.includes(inputValue)) {
      swal("Answer!", inp.indexOf(inputValue).toString(), "success");
    } else {
      swal("", a.toString() + " is not included", "error");
    }
  } else if (fun.id === "18") {
    if (userInputNumber.value == "") {
      swal("", "Fill the number first!", "error");
    } else if (inp.includes(inputValue)) {
      swal("Answer!", inp.lastIndexOf(inputValue).toString(), "success");
    } else {
      swal("", a.toString() + " is not included", "error");
    }
  } else if (fun.id === "19") {
    if (userInputNumber.value == "") {
      swal("", "Fill the number first!", "error");
    } else if (!inp.startsWith(inputValue)) {
      swal("", "False", "error");
    } else {
      swal("Answer!", "True", "success");
    }
  } else {
    if (userInputNumber.value == "") {
      swal("", "Fill the number first!", "error");
    } else if (!inp.endsWith(inputValue)) {
      swal("", "False", "error");
    } else {
      swal("Answer!", "True", "success");
    }
  }
}

document.getElementById("nth").addEventListener("click", () => {
  inputKeybordStyle.innerHTML = "";
  userInputNumber.value = "";
});
