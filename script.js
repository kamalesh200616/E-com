document.addEventListener("DOMContentLoaded", () => {
  console.log("App loaded");

  // Demo product data (replace with API calls later)
  const products = [
    { id: "p1", name: "Laptop", price: 75000, img: "https://via.placeholder.com/200" },
    { id: "p2", name: "Smartphone", price: 25000, img: "https://via.placeholder.com/200" },
    { id: "p3", name: "Headphones", price: 3500, img: "https://via.placeholder.com/200" }
  ];

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
