

import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";

import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";

import { Cart } from "./cart.model";
import { RestDataSource } from "./rest.datasource";
import { AuthService } from "./auth.service";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
    imports:[HttpClientModule],
    providers: [ProductRepository, StaticDataSource, Cart, Order, OrderRepository,
        { provide: StaticDataSource, useClass: RestDataSource, },
        RestDataSource, AuthService]
})
export class ModelModule { }