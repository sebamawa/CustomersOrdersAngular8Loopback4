import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header-footer/header/header.component';

import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerDetailComponent } from './components/customer/customer-detail/customer-detail.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';

// custom module angular material
import { CustomMaterialModule } from './custom.material.module';
import { OrderListComponent } from './components/order/order-list/order-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    HeaderComponent,
    CustomerDetailComponent,
    CustomerCreateComponent,
    OrderListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    // custom module angular material
    CustomMaterialModule,

    // routes
    RouterModule.forRoot([
        { path: '', component: CustomerListComponent },
        { path: 'customers/customers-create', component: CustomerCreateComponent },
        { path: 'customers/:customerId', component: CustomerDetailComponent },

        // orders
        { path: 'orders', component: OrderListComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
