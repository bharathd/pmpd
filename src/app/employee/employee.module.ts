import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EmployeeComponent }  from './employee.component';

import { Routes, RouterModule } from '@angular/router';
import { DataTableModule } from 'angular2-datatable';

@NgModule({
  imports:      [ BrowserModule,FormsModule , HttpModule,DataTableModule],
  declarations: [ EmployeeComponent ],
  bootstrap:    [ EmployeeComponent ],

})
export class EmployeeModule { }
