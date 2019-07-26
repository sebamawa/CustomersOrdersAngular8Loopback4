import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';
import { OrderService } from 'src/app/services/order.service';
import { DateFormating } from 'src/app/utility/utility-methods-dates';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  @Input() customer2: Customer;
  customer;
  ordersByCustomer;

  constructor(
      private route: ActivatedRoute,
      private customerService: CustomerService,
      private orderService: OrderService
  ) { }

  // GET customer by id
  getCustomer(): void {
      const id = +this.route.snapshot.paramMap.get('customerId');
      // console.log(id);
      this.customerService.getCustomer(id)
          .subscribe(customer => {
              this.customer = customer;
              // console.log(customer);
          });
  }

  deleteCustomer(customer: Customer): void {
      const id = +this.route.snapshot.paramMap.get('customerId');
      // console.log(id);
      this.customerService.deleteCustomer(id).subscribe();
      console.log('Cliente borrado');
  }

  getOrdersByCustomer() {
      const id = +this.route.snapshot.paramMap.get('customerId');
      this.orderService.getOrdersByCustomer(id)
            .subscribe(data => {
                console.log(data);
                this.ordersByCustomer = data;
            });
  }

  getOrderDateFormated(dateOrderString): string {
      return DateFormating.getDateFormated(dateOrderString, 'es');
  }

  ngOnInit() {
      this.getCustomer();
      this.getOrdersByCustomer();
  }

}
