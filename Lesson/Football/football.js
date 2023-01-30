// let rate1 = ""; 
// let rate2 = ""; 
// $(document).ready(function () {
//     initLoad("USD","s1");
//     initLoad("MMK","s2");

//     $("#i1").keyup(function () {
//         let to = $("#s2 option:selected").text();
//         $("#i2").val($(this).val() * Number(rate1[to]));
//     })

//     $("#i2").keyup(function () {
//         let to = $("#s1 option:selected").text();
//         $("#i1").val($(this).val() * $(this).val());
//     })

//     $("#s1").change(() => selectedItem("s1"));
//     $("#s2").change(() => selectedItem("s2"))
// });

// function selectedItem(select) {
//     let base = $(#${select} option:selected).text();
//     $("#i1").val(0);
//     $("#i2").val(0);
//     initLoad(base, select);
// }

// function initLoad(base,select) {
//     fetch(https://v6.exchangerate-api.com/v6/a9b038ecfd62e662b6614c1d/latest/${base})
//         .then(res => res.json())
//         .then(data => {
//             (select == "s1") ?
//                 rate1 = data.conversion_rates :
//                 rate2 = data.conversion_rates;
//             for (const key in data.conversion_rates) 
//                 $(#${select}).append(<option value="${data.conversion_rates[key]}">${key}</option>)
//     })
// }
// let contient = document.getElementById("continent");
// let country = document.getElementById("country");
// let max = document.getElementById("max");
// let min = document.getElementById("min");
// let search = document.getElementById("search");

// contient.addEventListener("change", function () {
//     fetch(https://app.sportdataapi.com/api/v1/soccer/countries?apikey=85c94400-2803-11ec-a03c-a7b8300dc340&continent=${this.value})
//         .then(res => res.json())
//         .then(data => {
//             $("#country").empty();
//             for (const key in data.data) {
//                 $("#country").append(
//                     <option value="${data.data[key].country_id}">${data.data[key].name}</option>
//                 )
//             }
//         })
//         .catch(err => {
//             console.log(err);
//         })
// })


// search.addEventListener("click", function () {
//     fetch(`https://app.sportdataapi.com/api/v1/soccer/players?
//     apikey=85c94400-2803-11ec-a03c-a7b8300dc340&country_id=${country.value}&max_age=${max.value}&min_age=${min.value}`)
//         .then(res => res.json())
//         .then(response => {
//             let no = 1;
//             $(".add").remove();
//             for (const key in response.data) {
//                 $("#table").append(
//                     `
//                      <tr class="add">
//                         <td>${no++}</td>
//                         <td>${response.data[key].firstname} ${response.data[key].lastname}</td>
//                         <td>${response.data[key].age}</td>
//                         <td>${response.data[key].birthday}</td>
//                         <td>${response.data[key].height}</td>
//                         <td>${response.data[key].player_id}</td>
//                         <td>${response.data[key].weight}</td>
//                     </tr>`
//                 );
//             }
//         })
// })
// //key pyg boh lo add
