import { OrderLineItemDto, Product } from './../../interfaces/product';
import { OrderService } from './../../services/order.service';
import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/interfaces/cartItem';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit{
  cartItems: CartItem[];
constructor(private _CartService:ShoppingCartService,private _OrderService:OrderService, private router: Router){}
  ngOnInit(): void {
    //this._CartService.getCartItems();
    this.cartItems=this._CartService.getCartItems();
    console.log(this.cartItems)
    
  }
  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.product.price*item.product.quantity, 0);
  }
 placeOrder(Items:any){
  this._OrderService.placeOrder(Items).subscribe((response)=>{
    console.log(response);
    this._CartService.clearCart();
    this.router.navigate(["\home"])
  })

 }


}
