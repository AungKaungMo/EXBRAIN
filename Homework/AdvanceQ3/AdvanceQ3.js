var login = document.getElementsByClassName("Login")[0];
var register = document.getElementsByClassName("register")[0];
var signIn = document.getElementsByClassName("sign-in")[0];
var signUp = document.getElementsByClassName("sign-up")[0];
var form = document.getElementsByClassName("form")[0];
var x = document.getElementsByClassName("close")[0];
function reg() {
  register.classList.add("registerChg");
  login.classList.add("loginChg");
  signIn.classList.add("loginBtnColor");
  signUp.classList.add("registerBtnColor");
}
function log() {
  login.classList.remove("loginChg");
  register.classList.remove("registerChg");
  signIn.classList.remove("loginBtnColor");
  signUp.classList.remove("registerBtnColor");
}
function sign() {
  form.classList.add("closeChg");

  x.addEventListener("click", () => {
    form.classList.remove("closeChg");
  });
}
