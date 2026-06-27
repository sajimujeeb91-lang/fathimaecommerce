import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Product } from './pages/product/product';
import { Contact } from './pages/contact/contact';
import { Details } from './pages/details/details';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'product', component: Product },
  { path: 'contact', component: Contact },
  { path: 'details/:id',component: Details }
];