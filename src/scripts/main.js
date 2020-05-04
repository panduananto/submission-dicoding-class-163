const mainNav = document.getElementById("navbar-menu");
const navBarToggle = document.getElementById("navbar-toggler");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});

const pencegahanListElement = document.querySelector("#pencegahanList-column");

pencegahanListElement.innerHTML = "";

for (let pencegahanItem of pencegahan) {
  let title = pencegahanItem.title;
  let description = pencegahanItem.description;
  let image = pencegahanItem.image;
  let alt = pencegahanItem.alt;

  let pencegahanElement = document.createElement("div");
  pencegahanElement.setAttribute("class", "pencegahan-row");

  let pencegahanTextElement = document.createElement("div");
  pencegahanTextElement.setAttribute("class", "pencegahan-text");

  pencegahanTextElement.innerHTML = "<h2>" + title + "</h2>";
  pencegahanTextElement.innerHTML += "<p>" + description + "</p>";

  pencegahanElement.appendChild(pencegahanTextElement);

  pencegahanElement.innerHTML +=
    '<img src="' + image + '" alt="' + alt + '"class="pencegahan-image">';

  pencegahanListElement.appendChild(pencegahanElement);
}