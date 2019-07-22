import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common//http';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

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
}  // end class
