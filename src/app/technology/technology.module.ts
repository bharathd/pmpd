import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TechnologyComponent }  from './technology.component';
import { ProjectRouting } from './technology.routing';
import { Routes, RouterModule } from '@angular/router';
import {AccordionModule} from 'ng2-accordion';

@NgModule({
  imports:      [ AccordionModule,BrowserModule, ProjectRouting,FormsModule , HttpModule],
  declarations: [ TechnologyComponent ],
  bootstrap:    [ TechnologyComponent ],
 
})
export class TechnologyModule { }
