import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  isHovered = false;
  products: any[] = [
    {
      name: 'iPhone 15',
      price: 999,
      color: 'Pink',
      pImage: 'iphone15.jpg',
      inStock: 5,
      discount: 10,
      cartCount: 0,
    },
    {
      name: 'iPhone 14',
      price: 799,
      color: 'Purple',
      pImage: 'iphone14.jpg',
      inStock: 3,
      discount: 15,
      cartCount: 0,
    },
    {
      name: 'iPhone 13',
      price: 699,
      color: 'Black',
      pImage: 'iphone13.jpg',
      inStock: 0,
      discount: 20,
      cartCount: 0,
    },
  ];

  getDiscountedPrice(product: any) {
    return product.price - (product.price * product.discount) / 100;
  }

  incrementCart(product: any) {
    if (product.cartCount < product.inStock) {
      product.cartCount++;
    }
  }

  decrementCart(product: any) {
    if (product.cartCount > 0) {
      product.cartCount--;
    }
  }
}
