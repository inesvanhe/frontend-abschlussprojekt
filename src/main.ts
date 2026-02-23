import "./style.css";
import { products } from "./products";
import { addToCart, getTotal, getCart } from "./calculator";

function renderCart(): void {
  const cartItems = document.getElementById("cart-items");
  const total = document.getElementById("total");

  if (!cartItems || !total) return;

  cartItems.innerHTML = "";

  for (const product of getCart()) {
    const li = document.createElement("li");
    li.textContent = `${product.name} - ${product.price} €`;
    cartItems.appendChild(li);
  }

  total.textContent = getTotal().toString();
}

const buttons = document.querySelectorAll("button[data-id]");

for (const button of buttons) {
  button.addEventListener("click", () => {
    const id = Number(button.getAttribute("data-id"));
    const product = products.find((p) => p.id === id);

    if (product) {
      addToCart(product);
      renderCart();
    }
  });
}
