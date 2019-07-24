import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common//http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

// para post http (add customer)
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
      private http: HttpClient,
  ) { }

  getCustomers(): Observable<Customer[]> {
      const urlCustomers = 'http://localhost:3000/customers';
      return this.http.get<Customer[]>(urlCustomers);
        //   .pipe(
        //       // catchError()
        // );
  }

  addCustomer(customer: Customer): Observable<Customer> {
      const urlCustomers = 'http://localhost:3000/customers';
      return this.http.post<Customer>(urlCustomers, customer, httpOptions).pipe();
          // tap
          // catchError()
      // );
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
