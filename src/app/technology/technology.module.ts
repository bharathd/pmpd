import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TechnologyComponent }  from './technology.component';
import { ProjectRouting } from './technology.routing';
import { Routes, RouterModule } from '@angular/router';
import { DataTableModule } from 'angular2-datatable';

@NgModule({
  imports:      [ BrowserModule, ProjectRouting,FormsModule , HttpModule,DataTableModule],
  declarations: [ TechnologyComponent ],
  bootstrap:    [ TechnologyComponent ],
 
})
export class TechnologyModule { }
