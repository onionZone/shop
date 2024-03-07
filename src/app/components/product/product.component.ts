import { Component, Input } from '@angular/core';
import { IProduct } from '../../product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.sass',
})
export class ProductComponent {
  @Input() product!: IProduct;
}
