const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
const priceTag = document.querySelector("h1");
const spanTag = document.querySelector("span");
let currency = "USD";

const checkPrice = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      priceTag.innerHTML = data.bpi[currency].rate_float.toFixed(1);
    });
};

checkPrice();

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    currency = link.getAttribute("data-currency");
    checkPrice();

    navLinks.forEach((link) => link.classList.remove("selected"));
    link.classList.add("selected");

    spanTag.innerHTML = currency;
  });
});

setInterval(() => checkPrice(), 60000);
