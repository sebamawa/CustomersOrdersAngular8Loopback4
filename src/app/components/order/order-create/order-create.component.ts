import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { FormBuilder } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {

  orderFormModel;
  customers;

  constructor(
      private orderService: OrderService,
      private customerService: CustomerService,
      private formBuilder: FormBuilder
  ) {
      // form controls to form model
      this.orderFormModel = this.formBuilder.group({
          date: '',
          customerId: 0,
          description: '',
          total: ''
      });
   }

   createOrder(orderFormData): void {
      console.log(orderFormData);

      // parse string customerId (buscar hacerlo desde la view)
      let customerId: number = parseInt(orderFormData.customerId, 10);
      console.log(customerId);
      orderFormData.customerId = customerId;

      this.orderService.addOrder(orderFormData)
          .subscribe(order => {
              console.log('Order agregada');
              this.orderFormModel.reset();
          });
   }

   getCustomers(): void {
      this.customerService.getCustomers()
          .subscribe(
              customers => {
                  this.customers = customers;
              });
   }

  ngOnInit() {
      this.getCustomers();
  }

}
