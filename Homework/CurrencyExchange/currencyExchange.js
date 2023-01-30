$(document).ready(function () {
  let currencyTwo,
    currencyOne,
    inputValue,
    currencyValue = 0;
  // let inputValue;
  a();
  function a() {
    fetch(
      "https://v6.exchangerate-api.com/v6/d8f69837fcf888883af3ac30/latest/USD"
    )
      .then((res) => res.json())
      .then((data) => {
        for (const key in data.conversion_rates) {
          $("#currencyExchangeValueOne").append(
            `<option value="${key}">${key}</option>`
          );
          $("#currencyExchangeValueTwo").append(
            `<option value="${key}">${key}</option>`
          );
        }
      });
  }

  $("#inputValue").keyup(function (e) {
    inputValue = e.target.value;
  });
  $("#currencyExchangeValueOne").change(currency);
  $("#currencyExchangeValueTwo").change(currency);

  function currency() {
    currencyOne = $("#currencyExchangeValueOne").val();
    currencyTwo = $("#currencyExchangeValueTwo").val();
    fetch(
      `https://v6.exchangerate-api.com/v6/d8f69837fcf888883af3ac30/latest/${currencyOne}`
    )
      .then((res) => res.json())
      .then((data) => {
        currencyValue = data.conversion_rates[currencyTwo];
        //OR
        // currencyValue = parseInt(data.conversion_rates[currencyTwo]);
      });
  }

  $("#exChange").click(function () {
    if (currencyOne == currencyTwo || inputValue == "") {
      return;
    } else {
      $("#showValues").text(
        inputValue +
          " " +
          currencyOne +
          " = " +
          currencyValue * inputValue +
          " " +
          currencyTwo
      );
    }
  });
});
          ////////////////////////  Answer //////


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