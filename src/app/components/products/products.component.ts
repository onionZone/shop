import { Component, inject } from '@angular/core';
import { ProductsService } from '../../products.service';
import { ProductComponent } from '../product/product.component';
import { IProduct } from '../../product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.sass',
})
export class ProductsComponent {
  productsList: IProduct[] = [];
  productsService: ProductsService = inject(ProductsService);

  constructor() {
    this.productsService.getProducts().then((productsList: IProduct[]) => {
      this.productsList = productsList;
    });
  }
}
