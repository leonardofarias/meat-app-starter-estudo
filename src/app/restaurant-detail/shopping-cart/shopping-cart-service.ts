import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";
import { PreActivation } from "@angular/router/src/router";
import { Injectable } from "@angular/core";
import { NotificationService } from "app/shared/messages/notification.service";

@Injectable()
export class ShoppingCartService {
    
    constructor(private notificationService: NotificationService){

    }

    items: CartItem[] = []

    clear(){
        this.items = []
    }

    addItem(item:MenuItem){
        let foundItem = this.items.find((mItem)=> mItem.menuItem.id === item.id)
        if(foundItem){
            this.increaseQty(foundItem)
        }else{
            this.items.push(new CartItem(item))
        }
        this.notificationService.notify(`Você adicionou o item ${item.name}`)
    }

    increaseQty(item: CartItem){
        item.quantity += 1;
    }

    decreaseQty(item: CartItem){
        item.quantity -= 1;
        if(item.quantity === 0){
            this.removeItem(item)
        }
    }
    
    removeItem(item:CartItem){
        this.items.splice(this.items.indexOf(item),1)
        this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`)
    }

    total(): number{
        // no map troca o objeto item pelo valor do item
        // no reduce adiciona o valor anterior o novo valor
        return this.items
            .map(item => item.value())
            .reduce((prev,value) => prev + value, 0);
    }

}