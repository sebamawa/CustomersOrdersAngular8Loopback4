import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {

  orderFormModel;

  constructor(
      private orderService: OrderService,
      private formBuilder: FormBuilder
  ) {
      // form controls to form model
      this.orderFormModel = this.formBuilder.group({
          date: '',
          customerId: 0,
          description: '',
          total: 0
      });
   }

   createOrder(orderFormData): void {
      console.log(orderFormData);
      this.orderService.addOrder(orderFormData)
          .subscribe(order => {
              console.log('Order agregada');
          });
   }

  ngOnInit() {
  }

}
