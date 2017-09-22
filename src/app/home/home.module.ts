import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HomeComponent }  from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { routing } from '../ app.routes';

@NgModule({
  imports:      [ BrowserModule, FormsModule , HttpModule,routing],
  exports: [RouterModule],
  declarations: [ HomeComponent ],
  bootstrap:    [ HomeComponent ],
 
})
export class HomeModule { }
