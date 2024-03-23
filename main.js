import "./style.css";

import viteLogo from "/vite.svg";

window.addEventListener("load", async () => {
  const response = await fetch(
    `https://652bdb8ed0d1df5273eecf9b.mockapi.io/products`
  );
  const products = await response.json();
  const productDiv = document.querySelector("#products");
  let productsHTML = "";
  for (let i = 0; i < products.length; i++) {
    productsHTML += `<div class="card">
      <img src=${products[i].imageURL}/>
      </div>`;
  }
  productDiv.innerHTML = productsHTML;
});
