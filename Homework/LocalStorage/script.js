document.getElementsByClassName("moode")[0].addEventListener("click", () => {
  document.body.classList.toggle("dark");
  let value = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", value);
});
if (localStorage.getItem("theme") == "dark") {
  document.body.classList.add("dark");
}
let array = ["name", "email", "phone", "address"];
document.getElementById("saveBtn").addEventListener("click", () => {
  for (let i = 0; i < array.length; i++) {
    localStorage.setItem(array[i], document.getElementById(array[i]).value);
  }
});
window.addEventListener("load", () => {
  for (let i = 0; i < array.length; i++) {
    document.getElementById(array[i]).value = localStorage.getItem(array[i]);
  }
});
