import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/order';
import { DateFormating } from 'src/app/utility/utility-methods-dates';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator'

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[];
  loading: boolean;
  // columnas de el grid para mostrar en el template
  displayedColumns: string[] = ['date', 'customerId', 'description', 'total'];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
      private orderService: OrderService
  ) { }

  getOrders(): void {
      this.orderService.getOrders()
          .subscribe(
                orders => {
                    this.orders = orders;
                    this.loading = false;
                    // console.log(orders);
                    this.dataSource = new MatTableDataSource(this.orders);
                    console.log(`Data source: ${this.dataSource}`);
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

  // filtro para orders
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
      this.getOrders();
  }

}
