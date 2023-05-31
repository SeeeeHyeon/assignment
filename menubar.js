
const bars = document.querySelector(".fas");
const menu = document.querySelector("#menu");

function onClick() {
  menu.classList.toggle("hidden");
}

bars.addEventListener("click", onClick)