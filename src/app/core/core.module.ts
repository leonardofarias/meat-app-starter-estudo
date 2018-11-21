import { NgModule } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart-service";
import { OrderService } from "app/order/order.service";
import { RestaurantsService } from "app/restaurants/restaurant.service";

@NgModule({
    providers:[ShoppingCartService, OrderService,RestaurantsService]
})

export class CoreModule{}