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
  // displayedColumns: string[] = ['name', 'telephone']; // para angular mat-table
  loading: boolean;

  constructor(
      private customerService: CustomerService,
  ) {
        // console.log('Instancia de customer-list');
        this.loading = true;
   }

  private getCustomers(): void {
      this.customerService.getCustomers()
          .subscribe(
              customers => {
                this.customers = customers;
                this.auxCustomers = this.customers;
                this.loading = false;
          },
            err => {
              this.loading = false;
              alert('Error en la consulta');
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



