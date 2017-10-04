import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AddProjectComponent }  from './newproject.component';
import { Routes, RouterModule } from '@angular/router';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

@NgModule({
  imports:      [ BrowserModule,FormsModule , HttpModule,MultiselectDropdownModule],
  declarations: [ AddProjectComponent ],
  bootstrap:    [ AddProjectComponent ],
 
})
export class AddProjectModule { }
