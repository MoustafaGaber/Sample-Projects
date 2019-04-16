import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { MyorderComponent } from './myorder/myorder.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';


const routes: Routes = 
[
  {path: '' , component : ProductsComponent},
  {path: 'products' , component : ProductsComponent},
  {path: 'orders' , component : MyorderComponent},
  {path: 'shopping' , component : ShoppingCartComponent},
  {path: 'admin/orders' , component : AdminOrdersComponent},
  {path: 'admin/products' , component : AdminProductComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
