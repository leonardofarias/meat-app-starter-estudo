import { NgModule, ModuleWithProviders } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart-service";
import { OrderService } from "app/order/order.service";
import { RestaurantsService } from "app/restaurants/restaurant.service";
import { SnackbarComponent } from 'app/shared/messages/snackbar/snackbar.component';
import { NotificationService } from "./messages/notification.service";
import { LoginService } from "app/security/login/login.service";
import { LoggedInGuard } from "app/security/loggedin.guard";
import { LeaveOrderGuard } from "app/order/leave-order.guard";
import { AuthInterceptor } from "app/security/login/auth.interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";


@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent, 
        CommonModule, FormsModule, ReactiveFormsModule, SnackbarComponent]
})

export class Sharedmodule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: Sharedmodule,
            providers:[ ShoppingCartService, 
                        OrderService,
                        RestaurantsService, 
                        NotificationService,
                        LoginService,
                        LoggedInGuard,
                        LeaveOrderGuard,
                        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}]
        }
    }
}