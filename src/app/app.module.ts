import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { LoginComponent }  from './login/login.component';
import { HomeModule } from './home/home.module';
import { ProjectModule } from './project/project.module';
import { routing } from './ app.routes';


@NgModule({
  imports:      [ BrowserModule, FormsModule , HttpModule, routing,HomeModule,ProjectModule ],
  declarations: [ AppComponent, LoginComponent ],
  bootstrap:    [ AppComponent ],
 
})
export class AppModule { }
