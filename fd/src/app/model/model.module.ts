

import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";

import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";

import { Cart } from "./cart.model";

@NgModule({
 providers: [ProductRepository, StaticDataSource, Cart, Order, OrderRepository]
})
export class ModelModule { }