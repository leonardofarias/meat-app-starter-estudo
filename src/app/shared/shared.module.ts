import { NgModule, ModuleWithProviders } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart-service";
import { OrderService } from "app/order/order.service";
import { RestaurantsService } from "app/restaurants/restaurant.service";


@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent, 
        CommonModule, FormsModule, ReactiveFormsModule]
})

export class Sharedmodule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: Sharedmodule,
            providers:[ShoppingCartService, OrderService,RestaurantsService]
        }
    }
}