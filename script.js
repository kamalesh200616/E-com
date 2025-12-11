document.addEventListener("DOMContentLoaded", () => {
  console.log("Static Web App is running!");

  // Show a welcome message in the console
  const hero = document.querySelector(".hero p");
  hero.textContent = "Browse our products and enjoy seamless cloud deployment 🚀";

  // Add click event to all "Add to Cart" buttons
  const buttons = document.querySelectorAll(".product-card button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const productName = button.parentElement.querySelector("h2").textContent;
      alert(`${productName} added to cart!`);
    });
  });

  // Highlight product card on hover (extra visual feedback)
  const cards = document.querySelectorAll(".product-card");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "none";
    });
  });
});
