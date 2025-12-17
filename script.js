document.addEventListener("DOMContentLoaded", () => {
  console.log("App loaded");
  
fetch("https://<your-function-app>.azurewebsites.net/api/getProducts")
  .then(res => res.json())
  .then(products => {
    const productList = document.getElementById("product-list");

    products.forEach(p => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="https://via.placeholder.com/200">
        <h2>${p.name}</h2>
        <p class="price">₹${p.price}</p>
        <button>Add to Cart</button>
      `;
      productList.appendChild(card);
    });
  });


  // Render products if on products.html
  const productList = document.getElementById("product-list");
  if (productList) {
    products.forEach(p => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <h2>${p.name}</h2>
        <p class="price">₹${p.price}</p>
        <button data-id="${p.id}">Add to Cart</button>
      `;
      productList.appendChild(card);
    });

    // Add to cart
    productList.addEventListener("click", e => {
      if (e.target.tagName === "BUTTON") {
        const id = e.target.dataset.id;
        const product = products.find(p => p.id === id);
        let cart = JSON.parse(localStorage.getItem("cart") || "[]");
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
      }
    });
  }

  // Render cart if on cart.html
  const cartItems = document.querySelector("#cart-items ul");
  if (cartItems) {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cartItems.innerHTML = cart.map(item => `<li>${item.name} - ₹${item.price}</li>`).join("");
  }
});
