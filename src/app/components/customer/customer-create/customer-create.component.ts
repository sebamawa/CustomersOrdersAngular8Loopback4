import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerFormModel;

  constructor(
      private customerService: CustomerService,
      private formBuilder: FormBuilder
  ) {
      // form controls to form model customer
      this.customerFormModel = this.formBuilder.group({
          name: '',
          telephone: '',
          address: ''
      });
   }

   createCustomer(customerFormData): void {
     console.log(customerFormData);
      this.customerService.addCustomer(customerFormData)
          .subscribe(customer => {
              console.log('Cliente agregado');
          });
   }

  ngOnInit() {
  }

}
