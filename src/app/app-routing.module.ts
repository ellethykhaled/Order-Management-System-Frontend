import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './guards/auth.guard';
import { ProductFormComponent } from './components/Forms/product-form/product-form.component';
import { AdminFormComponent } from './components/Forms/admin-form/admin-form.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CategoryFormComponent } from './components/Forms/category-form/category-form.component';
import { SellingSummaryComponent } from './components/purchase-components/selling-summary/selling-summary.component';
import { SellingDetailsComponent } from './components/purchase-components/selling-details/selling-details.component';
import { BuyingSummaryComponent } from './components/purchase-components/buying-summary/buying-summary.component';
import { BuyingDetailsComponent } from './components/purchase-components/buying-details/buying-details.component';
import { BuyingOrderComponent } from './components/purchase-components/buying-order/buying-order.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  { path: 'products/edit/:id', component: ProductFormComponent },
  { path: 'products/add', component: ProductFormComponent },
  { path: 'category/add', component: CategoryFormComponent },
  { path: 'admins/edit/:id', component: AdminFormComponent },
  { path: 'admins/add', component: AdminFormComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'selling/summary', component: SellingSummaryComponent },
  { path: 'selling/details', component: SellingDetailsComponent },
  { path: 'buying/summary', component: BuyingSummaryComponent },
  { path: 'buying/details', component: BuyingDetailsComponent },
  { path: 'buying/submit-order', component: BuyingOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
