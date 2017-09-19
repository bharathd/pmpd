import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { LoginComponent }  from './login/login.component';
import { routing, appRoutingProviders } from './ app.routes';


@NgModule({
  imports:      [ BrowserModule, FormsModule , HttpModule, routing ],
  declarations: [ AppComponent, LoginComponent ],
  bootstrap:    [ AppComponent ],
 
})
export class AppModule { }
