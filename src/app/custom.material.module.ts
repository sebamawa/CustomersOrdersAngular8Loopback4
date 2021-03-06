import { NgModule } from '@angular/core';

// import angular material modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  imports: [BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatListModule,
     MatTableModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatIconModule,
     MatToolbarModule, MatDatepickerModule, MatNativeDateModule, MatDialogModule,
     MatPaginatorModule],
  exports: [BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatListModule,
     MatTableModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatIconModule,
     MatToolbarModule, MatDatepickerModule, MatDialogModule,
     MatPaginatorModule],

  // setting para date picker de angular material
  providers: [MatNativeDateModule, {provide: MAT_DATE_LOCALE, useValue: 'es'}],

  //declarations: [MatPaginator]
})
export class CustomMaterialModule { }

