var line = document.getElementsByClassName("lines")[0];
var line1 = document.getElementsByClassName("line1")[0];
var line2 = document.getElementsByClassName("line2")[0];
var line3 = document.getElementsByClassName("line3")[0];
var glass = document.getElementsByClassName("glass")[0];
var responsive = document.getElementsByClassName("responsive")[0];

line.addEventListener("click",()=>{
if(line.classList.contains("newclass")){
    line1.classList.remove("line1Chg");
    line2.classList.remove("line2Chg");
    line3.classList.remove("line3Chg");
    line.classList.remove("newclass");
    glass.classList.remove("glassOpa");
    responsive.classList.remove("resChg");
}else{
    line1.classList.add("line1Chg");
    line2.classList.add("line2Chg");
    line3.classList.add("line3Chg");
    line.classList.add("newclass");
    glass.classList.add("glassOpa");
    responsive.classList.add("resChg");
}

    
})