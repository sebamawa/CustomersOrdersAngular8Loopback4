import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

	baseUrlApi = 'http://localhost:3000';

  constructor(
      private http: HttpClient
	) { }

	getOrders() {
			const urlOrders = `${this.baseUrlApi}/orders`;
			return this.http.get<Order[]>(urlOrders).pipe(
					// tap(),
					// catcError()
			);
  }

  getOrdersByCustomer(idCustomer: number) {
      const url = `${this.baseUrlApi}/customers/${idCustomer}/orders`;

      return this.http.get<any>(url).pipe(
          // tap(),
          // catchError()
      );
  }
}
