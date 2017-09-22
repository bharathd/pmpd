import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ProjectComponent }  from './project.component';
import { ProjectRouting } from './project.routing';
import { Routes, RouterModule } from '@angular/router';


@NgModule({
  imports:      [ BrowserModule, ProjectRouting,FormsModule , HttpModule],
  declarations: [ ProjectComponent ],
  bootstrap:    [ ProjectComponent ],
 
})
export class ProjectModule { }
