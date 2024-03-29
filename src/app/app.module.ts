import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { MatIconModule } from '@angular/material/icon';
import { ProductFormComponent } from './components/Forms/product-form/product-form.component';
import { AdminsTableComponent } from './components/admins-table/admins-table.component';
import { AdminFormComponent } from './components/Forms/admin-form/admin-form.component';
import { CustomerHomePageComponent } from './components/customer-home-page/customer-home-page.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryFormComponent } from './components/Forms/category-form/category-form.component';
import { BuyingDetailsComponent } from './components/purchase-components/buying-details/buying-details.component';
import { BuyingSummaryComponent } from './components/purchase-components/buying-summary/buying-summary.component';
import { SellingDetailsComponent } from './components/purchase-components/selling-details/selling-details.component';
import { SellingSummaryComponent } from './components/purchase-components/selling-summary/selling-summary.component';
import { BuyingOrderComponent } from './components/purchase-components/buying-order/buying-order.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductsListComponent,
    ProductFormComponent,
    AdminsTableComponent,
    AdminFormComponent,
    CustomerHomePageComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    CategoriesListComponent,
    CategoryFormComponent,
    SellingSummaryComponent,
    SellingDetailsComponent,
    BuyingSummaryComponent,
    BuyingDetailsComponent,
    BuyingOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSelectModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
