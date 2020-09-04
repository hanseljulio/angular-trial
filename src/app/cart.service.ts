import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {
  items = [];
  constructor(
    private http: HttpClient

  ) { }

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

  // Get shipping prices from assets/shipping.json
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}