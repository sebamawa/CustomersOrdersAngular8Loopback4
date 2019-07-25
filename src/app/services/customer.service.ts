import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common//http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { HeaderRowOutlet } from '@angular/cdk/table';

// para post http (add customer)
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrlApi: string = 'http://localhost:3000';

  constructor(
      private http: HttpClient,
  ) { }

  getCustomers(): Observable<Customer[]> {
      const urlCustomers = `${this.baseUrlApi}/customers`;
      return this.http.get<Customer[]>(urlCustomers);
        //   .pipe(
        //       // catchError()
        // );
  }

  addCustomer(customer: Customer): Observable<Customer> {
      const urlCustomers = `${this.baseUrlApi}/customers`;
      return this.http.post<Customer>(urlCustomers, customer, httpOptions).pipe();
          // tap
          // catchError()
      // );
  }

  // GET: customer by id
  getCustomer(id: number): Observable<Customer> {
      const urlCustomer = `${this.baseUrlApi}/customers/${id}`;
      return this.http.get<Customer>(urlCustomer).pipe(
          //tap(),
          //catchError()
      );
  }

  // DELETE: delete the customer from the server
  deleteCustomer(customer: Customer | number): Observable<Customer> {
      console.log('delete customer from service');
      const id = typeof customer === 'number' ? customer : customer.id;
      const urlDeleteCustomer = `${this.baseUrlApi}/customers/${id}`;

      return this.http.delete<Customer>(urlDeleteCustomer, httpOptions).pipe(
          // tap(_, '')
          //catchError()
      );
  }

}  // end class

// addCustomerLavadero(customer: Customer): Observable<Customer> {

//   // loopback
//   const url_post_customer = "http://localhost:3000/customers";
//   return this.http.post<Customer>(url_post_customer, customer, httpOptions).pipe(
//       // tap((newCustomer: Customer) => this.log(`Added customer: ${newCustomer}`)),
//       catchError(this.handleError<Customer>('addCustomerLavadero'))
//   );
// }
