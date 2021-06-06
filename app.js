"use strict";

//select Elements
const numberOfConfirmed = document.querySelector(".number-confirmed");
const numberOfRecovered = document.querySelector(".number-recovered");
const numberOfDeath = document.querySelector(".number-death");
const countryFlag = document.querySelector(".flag");

// return country flag
const getFlag = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0].flag);
      return data[0].flag;
    });
};

const getInfo = function (country) {
  fetch(`https://covid-19-data.p.rapidapi.com/country?name=${country}`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "cac15a225bmshd823d9b87677022p1b06b9jsn288fef545a57",
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      countryFlag.src = `${getFlag(data[0].country)}`;
      numberOfConfirmed.innerText = data[0].confirmed;
      numberOfRecovered.innerText = data[0].recovered;
      numberOfDeath.innerText = data[0].deaths;
      getFlag(data[0].country);
    })
    .catch((err) => {
      console.error(err);
    });
  // ---------------
};

getInfo("usa");
