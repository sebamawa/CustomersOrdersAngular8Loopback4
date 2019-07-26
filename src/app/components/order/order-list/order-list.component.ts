import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/order';
import { DateFormating } from 'src/app/utility/utility-methods-dates';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[];
  loading: boolean;

  constructor(
      private orderService: OrderService
  ) { }

  getOrders(): void {
      this.orderService.getOrders()
          .subscribe(
                orders => {
                    this.orders = orders;
                    this.loading = false;
                    console.log(orders);
                },
                err => {
                    this.loading = false;
                    alert('Error en listado de orders');
                }
          );
  }

  getOrderDateFormated(dateOrderString): string {
    return DateFormating.getDateFormated(dateOrderString, 'es');
}

  ngOnInit() {
      this.getOrders();
  }

}
