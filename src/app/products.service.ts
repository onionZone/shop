import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  readonly baseUrl = 'https://fakestoreapi.com/products';

  async getProducts(): Promise<IProduct[]> {
    const data = await fetch(this.baseUrl);
    return (await data.json()) ?? [];
  }
}
