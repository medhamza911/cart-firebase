import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { GridComponent } from './components/grid/grid.component';

@NgModule({
  declarations: [WrapperComponent, GridComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
