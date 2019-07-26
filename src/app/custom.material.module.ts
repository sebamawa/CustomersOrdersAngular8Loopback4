import { NgModule } from '@angular/core';

// import angular material modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatNativeDateModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  imports: [BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatListModule,
     MatTableModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatIconModule,
     MatToolbarModule, MatDatepickerModule, MatNativeDateModule],
  exports: [BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatListModule,
     MatTableModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatIconModule,
     MatToolbarModule, MatDatepickerModule],
  providers: [MatNativeDateModule],
})
export class CustomMaterialModule { }

