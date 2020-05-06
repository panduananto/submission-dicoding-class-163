const moment = require("moment");

function ambilStatistik() {
  const baseURL = "https://covid19.mathdro.id/api";

  const getCountry = () => {
    fetch(`${baseURL}/countries`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderCountryList(responseJson.countries);
        }
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  const getGlobalStat = () => {
    fetch(`${baseURL}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderGlobalStat(
            responseJson.confirmed,
            responseJson.recovered,
            responseJson.deaths,
            responseJson.lastUpdate
          );
        }
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  const getCountryStat = (keyword) => {
    let countrySelect = keyword;
    console.log(countrySelect);
    fetch(`${baseURL}/countries/${countrySelect}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.error) {
          renderErrorCountry(responseJson.error);
        } else {
          renderCountryStat(
            responseJson.confirmed,
            responseJson.recovered,
            responseJson.deaths,
            responseJson.lastUpdate
          );
        }
      })
      .catch((error) => {
        renderErrorCountry(error);
      });
  };

  // fungsi showResponseMessage default parameter message check koneksi internet
  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };

  const renderErrorCountry = (error = "Check your internet connection") => {
    const searchBarContainerElement = document.querySelector(
      ".search-bar-container"
    );

    const containerError = document.createElement("div");
    containerError.className = "no-country";
    containerError.innerHTML = `
      <h3>${error.message}</h3>
    `;

    searchBarContainerElement.appendChild(containerError);

    setTimeout(function () {
      containerError.remove();
    }, 2000);
  };

  const renderCountryList = (countries) => {
    const selectCountryElement = document.querySelector("#country-select");
    selectCountryElement.innerHTML = "";

    countries.forEach((country) => {
      selectCountryElement.innerHTML += `
        <option value="${country.name}">${country.name}</option>
      `;
    });
  };

  const renderGlobalStat = (confirmed, recovered, deaths, lastUpdate) => {
    const textGlobalConfirmedElement = document.querySelector(
      "#global-positive"
    );
    const textGlobalDeathElement = document.querySelector("#global-death");
    const textGlobalRecoverElement = document.querySelector("#global-recover");
    const textGlobalDateLastUpdateElement = document.querySelector(
      "#date-last-update-global"
    );

    const confirmedGlobalNumber = new Intl.NumberFormat().format(
      confirmed.value
    );
    const deathGlobalNumber = new Intl.NumberFormat().format(deaths.value);
    const recoverGlobalNumber = new Intl.NumberFormat().format(recovered.value);

    textGlobalDateLastUpdateElement.innerHTML = `
      ${moment(lastUpdate).format("dddd, MMMM Do YYYY, h:mm:ss a")}
    `;

    textGlobalConfirmedElement.innerHTML = `
      <h1>${confirmedGlobalNumber}</h1>
      <span>Terjangkit</span>
    `;

    textGlobalDeathElement.innerHTML = `
      <h1>${deathGlobalNumber}</h1>
      <span>Meninggal</span>
    `;

    textGlobalRecoverElement.innerHTML = `
      <h1>${recoverGlobalNumber}</h1>
      <span>Sembuh</span>
    `;
  };

  const renderCountryStat = (confirmed, recovered, deaths, lastUpdate) => {
    const textCountryConfirmedElement = document.querySelector(
      "#country-positve"
    );
    const textCountryDeathElement = document.querySelector("#country-death");
    const textCountryRecoverElement = document.querySelector(
      "#country-recover"
    );
    const textCountryDateLastUpdateElement = document.querySelector(
      "#date-last-update-country"
    );

    const confirmedCountryNumber = new Intl.NumberFormat().format(
      confirmed.value
    );
    const deathCountryNumber = new Intl.NumberFormat().format(deaths.value);
    const recoverCountryNumber = new Intl.NumberFormat().format(
      recovered.value
    );

    textCountryDateLastUpdateElement.innerHTML = `
      ${moment(lastUpdate).format("dddd, MMMM Do YYYY, h:mm:ss a")}
    `;

    textCountryConfirmedElement.innerHTML = `
      <h1>${confirmedCountryNumber}</h1>
      <span>Terjangkit</span>
    `;

    textCountryDeathElement.innerHTML = `
      <h1>${deathCountryNumber}</h1>
      <span>Meninggal</span>
    `;

    textCountryRecoverElement.innerHTML = `
      <h1>${recoverCountryNumber}</h1>
      <span>Sembuh</span>
    `;
  };

  getCountry();
  getGlobalStat();

  const countrySelectElement = document.getElementById("country-select");

  countrySelectElement.addEventListener("change", function () {
    getCountryStat(this.value);
  });
}

export default ambilStatistik;
