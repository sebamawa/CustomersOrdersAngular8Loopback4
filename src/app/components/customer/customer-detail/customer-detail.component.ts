import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  @Input() customer2: Customer;
  customer;

  constructor(
      private route: ActivatedRoute,
      private customerService: CustomerService
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
      console.log(id);
      this.customerService.deleteCustomer(id).subscribe();
      console.log('Cliente borrado');
  }

  ngOnInit() {
      this.getCustomer();
  }

}
