import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { GridComponent } from './components/grid/grid.component';

const routes: Routes = [{
  path: '',
  component: WrapperComponent
},
{
  path: 'cart',
  component: GridComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
