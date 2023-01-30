var icon1 = document.getElementsByClassName("icon1")[0];
var icon2 = document.getElementsByClassName("icon2")[0];
var responsive = document.getElementsByClassName("responsive")[0];
var leftNavbar = document.getElementsByClassName("left-nav-bar")[0];

icon1.addEventListener("click",()=>{
    icon1.classList.add("icon1Chg");
    icon2.classList.add("icon2Chg");

    leftNavbar.classList.add("left-nav-barChg");
})
icon2.addEventListener("click",()=>{
    icon1.classList.remove("icon1Chg");
    icon2.classList.remove("icon2Chg");

    leftNavbar.classList.remove("left-nav-barChg");
})