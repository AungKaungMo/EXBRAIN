function Go(){
   for(var i=0; i<8; i++){
    document.getElementsByClassName("box")[i].style.display = "inline-block";
   document.getElementsByClassName("go")[0].style.display = "none";
  setTimeout(() => {
    document.getElementById("1").innerText="L";
    document.getElementById("1").setAttribute("class","hov");
  }, 1000);
  setTimeout(() => {
    document.getElementById("2").innerText="O";
    document.getElementById("2").setAttribute("class","hov");
  }, 2000);
  setTimeout(() => {
    document.getElementById("3").innerText="A";
    document.getElementById("3").setAttribute("class","hov");
  }, 3000);
  setTimeout(() => {
    document.getElementById("4").innerText="D";
    document.getElementById("4").setAttribute("class","hov");
  }, 4500);
  setTimeout(() => {
    document.getElementById("5").innerText="I";
    document.getElementById("5").setAttribute("class","hov");
  }, 6000);
  setTimeout(() => {
    document.getElementById("6").innerText="N";
    document.getElementById("6").setAttribute("class","hov");
  }, 7500);
  setTimeout(() => {
    document.getElementById("7").innerText="G";
    document.getElementById("7").setAttribute("class","hov");
  }, 8500);
}}