import { NgModule } from '@angular/core';

// import angular material modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatListModule,
     MatTableModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatIconModule,
     MatToolbarModule],
  exports: [BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatListModule,
     MatTableModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatIconModule,
     MatToolbarModule],
})
export class CustomMaterialModule { }

