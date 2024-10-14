const search_bar = document.getElementById("search_bar");
const container = document.getElementById("container");

async function fetchApiData() {
    const url = "https://restcountries.com/v3.1/all";
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    data.forEach((val) => {
        createCard(val);
  });
}

fetchApiData();

function createCard(data) {
    const cart = document.createElement("div");
    cart.classList.add("cart");
    cart.innerHTML = `<div class="country-info">
    <img src="${data.flags.svg}" alt="" />
    <h2>${data.name.common}</h2>
    <p><span> Capital: </span>${data.capital}</p>
    <p><span> Region:</span> ${data.region}</p>
    <p><span> Currencies: </span>${data.currencies}</p>
    <p><span> Population: </span>${data.population}</p>
    </div>`;
    container.appendChild(cart);
}

search_bar.addEventListener("input", (e) => {
    const searchitem = e.target.value;
    const cart = document.querySelectorAll(".cart");
    cart.forEach((val) => {
        if (val.innerText.toLowerCase().includes(searchitem.toLowerCase())) {
        val.style.display = "block";
        } else {
        val.style.display = "none";
        }
    });
});
