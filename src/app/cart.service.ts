import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  items = [];
  constructor() { }

  // Add to cart
  addToCart(product) {
    this.items.push(product);
  }

  // Get items
  getItems() {
    return this.items;
  }

  // Clear the cart
  clearCart() {
    this.items = [];
    return this.items;
  }

}