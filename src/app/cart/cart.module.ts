import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { WrapperComponent } from './components/wrapper/wrapper.component';

@NgModule({
  declarations: [WrapperComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
