"use strict";

import API_KEY from "./API.js";
import currencyCodes from "./currencyCodes.js";

const $HTML = document;

let fromDropDown = $HTML.querySelector("#fromCurrencySelect");
let toDropDown = $HTML.querySelector("#toCurrencySelect");
let amount = $HTML.querySelector("#amount");
let convertBtn = $HTML.querySelector("#convertBtn");
let result = $HTML.querySelector("#result");

const API = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

currencyCodes.forEach((currency) => {
  let option = $HTML.createElement("option");

  option.value = currency;
  option.text = currency;

  fromDropDown.add(option);
});

currencyCodes.forEach((currency) => {
  let option = $HTML.createElement("option");

  option.value = currency;
  option.text = currency;

  toDropDown.add(option);
});

fromDropDown.value = "RUB";
toDropDown.value = "UZS";

let convertCurrency = () => {
  let amountValue = amount.value;
  let fromCurrency = fromDropDown.value;
  let toCurrency = toDropDown.value;

  if (amountValue.length != 0) {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => {
        let fromExchangeRate = data.conversion_rates[fromCurrency];
        let toExchangeRate = data.conversion_rates[toCurrency];

        let convertedAmount = (amountValue / fromExchangeRate) * toExchangeRate;

        result.innerHTML = `${amountValue} ${fromCurrency} = ${convertedAmount.toFixed(
          2
        )} ${toCurrency}`;
      });
  } else {
    console.log("Iltimos qiymat kiriting");
  }
};

convertBtn.addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);


// ==================================================== //
//                                                      //
//  BU WEB SITE QURBONOV JONIBEK TOMONIDAN TAYORLANGAN  //
//                                                      //
// ==================================================== //