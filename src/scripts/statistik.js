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

  // fungsi showResponseMessage default parameter message check koneksi internet
  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };

  const renderCountryList = (countries) => {
    const selectCountryElement = document.querySelector("#country-select");
    selectCountryElement.innerHTML = "";

    countries.forEach((country) => {
      selectCountryElement.innerHTML += `
        <option>${country.name}</option>
      `;
    });
  };

  const renderGlobalStat = (confirmed, recovered, deaths, lastUpdate) => {
    const textConfirmedElement = document.querySelector("#global-positive");
    const textDeathElement = document.querySelector("#global-death");
    const textRecoverElement = document.querySelector("#global-recover");
    const textDateLastUpdateElement = document.querySelector(
      "#date-last-update"
    );

    const confirmedNumber = new Intl.NumberFormat().format(confirmed.value);
    const deathNumber = new Intl.NumberFormat().format(deaths.value);
    const recoverNumber = new Intl.NumberFormat().format(recovered.value);

    textDateLastUpdateElement.innerHTML = `
      ${moment(lastUpdate).format("dddd, MMMM Do YYYY, h:mm:ss a")}
    `;

    textConfirmedElement.innerHTML = `
      <h1>${confirmedNumber}</h1>
      <span>Terjangkit</span>
    `;

    textDeathElement.innerHTML = `
      <h1>${deathNumber}</h1>
      <span>Meninggal</span>
    `;

    textRecoverElement.innerHTML = `
      <h1>${recoverNumber}</h1>
      <span>Sembuh</span>
    `;
  };

  getCountry();
  getGlobalStat();
}

export default ambilStatistik;
