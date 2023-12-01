import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { Cart } from './model/cart.model';
import { CheckoutComponent } from './store/checkout.component';

const routes: Routes = [
// {path :"store", component:StoreComponent},
// {path : "cart", component : Cart},
// {path : "checkout", component : CheckoutComponent},
// {path :"*", redirectTo :"/store"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
