import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    title: 'Home page',
  },
  {
    path: 'cart',
    component: ShoppingCartComponent,
    title: 'Shopping Cart',
  },
  {
    path: 'user',
    component: UserComponent,
    title: 'User',
  },
  {
    path: 'fav',
    component: FavouritesComponent,
    title: 'Home page',
  },
];
