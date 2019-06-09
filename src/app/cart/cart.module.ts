import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { GridComponent } from './components/grid/grid.component';

@NgModule({
  declarations: [ GridComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
