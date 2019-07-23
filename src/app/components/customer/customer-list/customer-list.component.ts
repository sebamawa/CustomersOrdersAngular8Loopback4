import { Component, OnInit } from '@angular/core';
// import { Customer } from 'src/app/models/customer';
import { Customer } from '../../../models/customer';
// import { CustomerService } from 'src/app/services/customer.service';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];
  auxCustomers: Customer[];
  displayedColumns: string[] = ['name', 'telephone'];

  constructor(
      private customerService: CustomerService,
  ) {
        console.log('Instancia de customer-list');
   }

  private getCustomers(): void {
      this.customerService.getCustomers()
          .subscribe(
              customers => {
                this.customers = customers;
                this.auxCustomers = this.customers;
              }
          );
  }

  applyFlter(filterValue: string) {
    this.auxCustomers = this.auxCustomers.filter(res => res.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()));
    if (filterValue === '') {
        this.auxCustomers = this.customers;
    }
  }

  ngOnInit() {
      this.getCustomers();
  }
}



