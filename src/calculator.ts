import type { Product } from "./products";

let cart: Product[] = [];

export function addToCart(product: Product): void {
  cart.push(product);
}

export function getTotal(): number {
  let total = 0;

  for (const item of cart) {
    total += item.price;
  }

  return total;
}

export function getCart(): Product[] {
  return cart;
}
