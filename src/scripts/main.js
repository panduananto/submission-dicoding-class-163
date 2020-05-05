import "./component/pencegahan-list/pencegahan-list.js";
import pencegahan from "./pencegahan-data.js";
import ambilStatistik from "./statistik.js";

const mainNav = document.getElementById("navbar-menu");
const navBarToggle = document.getElementById("navbar-toggler");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});

const pencegahanListContainer = document.querySelector(
  "#pencegahan-list-container"
);

const pencegahanListElement = document.createElement("pencegahan-list");
pencegahanListElement.pencegahanMany = pencegahan;

pencegahanListContainer.appendChild(pencegahanListElement);

ambilStatistik();