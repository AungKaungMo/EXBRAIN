var chgphone1 = document.getElementsByClassName("chgphone1")[0];
var chgphone2 = document.getElementsByClassName("chgphone2")[0];
var chgphone3 = document.getElementsByClassName("chgphone3")[0];
var chgphone4 = document.getElementsByClassName("chgphone4")[0];
var card = document.getElementsByClassName("card")[0];

function chg(obj) {
  document.getElementById("im").style.display = "none";
  if (obj.id == "1") {
    chgphone1.classList.add("chgphone1js");
    chgphone2.classList.remove("chgphone2js");
    chgphone3.classList.remove("chgphone3js");
    chgphone4.classList.remove("chgphone4js");
  } else if (obj.id == "2") {
    chgphone2.classList.add("chgphone2js");
    chgphone1.classList.remove("chgphone1js");
    chgphone3.classList.remove("chgphone3js");
    chgphone4.classList.remove("chgphone4js");
  } else if (obj.id == "3") {
    chgphone3.classList.add("chgphone3js");
    chgphone1.classList.remove("chgphone1js");
    chgphone2.classList.remove("chgphone2js");
    chgphone4.classList.remove("chgphone4js");
  } else {
    chgphone4.classList.add("chgphone4js");
    chgphone1.classList.remove("chgphone1js");
    chgphone2.classList.remove("chgphone2js");
    chgphone3.classList.remove("chgphone3js");
  }
}
function back(smth) {
  document.getElementsByClassName("card")[0].style.opacity = "1";
  if (smth.id == "home1") {
    document.getElementsByClassName("product-container")[0].style.opacity = "0";
    document
      .getElementsByClassName("product-container")[0]
      .classList.remove("product-container-shirt-chg");
  } else if (smth.id == "home2") {
    document.getElementsByClassName(
      "product-container-shirt"
    )[0].style.opacity = "0";
    document
      .getElementsByClassName("product-container-shirt")[0]
      .classList.remove("product-container-shirt-chg");
  } else {
    document.getElementsByClassName(
      "product-container-phone"
    )[0].style.opacity = "0";
    chgphone1.classList.remove("chgphone1js");
    chgphone2.classList.remove("chgphone2js");
    chgphone3.classList.remove("chgphone3js");
    chgphone4.classList.remove("chgphone4js");
    document.getElementById("im").style.display = "block";
    document
      .getElementsByClassName("product-container-phone")[0]
      .classList.remove("product-container-shirt-chg");
  }
}
function rightchg(r) {
  document.getElementsByClassName("card")[0].style.opacity = "0";

  if (r.id == "right1") {
    document.getElementsByClassName("product-container")[0].style.opacity = "1";
    document
      .getElementsByClassName("product-container")[0]
      .classList.add("product-container-shirt-chg");
  } else if (r.id == "right2") {
    document.getElementsByClassName(
      "product-container-shirt"
    )[0].style.opacity = "1";
    document
      .getElementsByClassName("product-container-shirt")[0]
      .classList.add("product-container-shirt-chg");
  } else {
    document.getElementsByClassName(
      "product-container-phone"
    )[0].style.opacity = "1";
    document
      .getElementsByClassName("product-container-phone")[0]
      .classList.add("product-container-shirt-chg");
  }
}
