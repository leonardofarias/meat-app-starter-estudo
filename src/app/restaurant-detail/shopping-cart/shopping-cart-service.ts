import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";
import { PreActivation } from "@angular/router/src/router";

export class ShoppingCartService {
    
    items: CartItem[] = []

    clear(){
        this.items = []
    }

    addItem(item:MenuItem){
        let foundItem = this.items.find((mItem)=> mItem.menuItem.id === item.id)
        if(foundItem){
            foundItem.quantity = foundItem.quantity + 1
        }else{
            this.items.push(new CartItem(item))
        }
    }

    removeItem(item:CartItem){
        this.items.splice(this.items.indexOf(item),1)
    }

    total(): number{
        // no map troca o objeto item pelo valor do item
        // no reduce adiciona o valor anterior o novo valor
        return this.items
            .map(item => item.value())
            .reduce((prev,value) => prev + value, 0);
    }

}