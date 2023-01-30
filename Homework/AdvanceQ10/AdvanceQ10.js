const days = document.getElementsByClassName("day");

const inputYear = document.getElementById("inputYear");
const inputMonth = document.getElementById("inputMonth");
const inputDay = document.getElementById("inputDay");
const currentInputMonth = document.getElementById("currentInputMonth");
const currentInputYear = document.getElementById("currentInputYear");
const currentInputDay = document.getElementById("currentInputDay");
let valueYear;
let valueMonth;
let valueDay;
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const offDays = ["2022/2/5", "2000/12/1", "2023/5/13", "1990/6/11"];
let count = 1;

inputYear.addEventListener("keyup", (e) => {
  valueYear = e.target.value;
  if (valueYear.length > 4) {
    inputYear.value = valueYear.slice(0, 4);
  }
});
inputMonth.addEventListener("keyup", (e) => {
  valueMonth = e.target.value;
  if (valueMonth > 12) {
    inputMonth.value = 12;
  }
});
inputDay.addEventListener("keyup", (e) => {
  valueDay = e.target.value;
});

function calendar() {
  count = 1;
  // days[offDayIndex].classList.remove("off");
  let currentTime = new Date(valueYear, valueMonth);

  currentInputMonth.innerHTML = months[currentTime.getMonth()];
  currentInputYear.innerHTML = valueYear;
  currentInputDay.innerHTML = weekday[currentTime.getDay()];

  currentTime.setDate(1);
  let startDay = currentTime.getDay();

  // console.log(startDay)

  currentTime.setMonth(currentTime.getMonth() + 1);
  currentTime.setDate(0);
  let endDate = currentTime.getDate();

  for (let blankFill = 0; blankFill < startDay; blankFill++) {
    days[blankFill].innerHTML = "";
  }

  for (let fill = startDay; fill < 35; fill++) {
    if (count <= endDate) {
      days[fill].innerHTML = count;
      let a = valueYear.toString() + "/" + valueMonth.toString() + "/" + count;

      if (valueDay == count) {
        days[fill].classList.add("inpDay");
      } else {
        days[fill].classList.remove("inpDay");
      }
      if (offDays.includes(a)) {
        days[fill].classList.add("off");
      } else {
        days[fill].classList.remove("off");
      }

      count++;
    } else {
      days[fill].innerHTML = "";
      count++;
    }
  }

  //   console.log(offAry.includes("2022/5/2"));
}
