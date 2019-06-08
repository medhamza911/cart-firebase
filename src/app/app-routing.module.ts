import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartModule } from './cart/cart.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CartModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
