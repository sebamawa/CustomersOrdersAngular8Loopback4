import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../models/order';
import { Observable } from 'rxjs';

// para post http (add order)
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

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

  addOrder(order: Order): Observable<Order> {
      console.log(order);
      const urlOrders = `${this.baseUrlApi}/orders`;
      return this.http.post<Order>(urlOrders, order, httpOptions).pipe();
  }
}
