import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'angular2-datatable';
import { AppComponent }  from './app.component';
import { LoginComponent }  from './login/login.component';
import { HomeModule } from './home/home.module';
import { ProjectModule } from './project/project.module';
import { TechnologyModule } from './technology/technology.module';
import { routing } from './ app.routes';
import { DataFilterPipe }   from './project/data-filter.pipe';


@NgModule({
  imports:      [ BrowserModule, FormsModule , HttpModule, routing,HomeModule,ProjectModule,DataTableModule,TechnologyModule ],
  declarations: [ AppComponent, LoginComponent,DataFilterPipe ],
  bootstrap:    [ AppComponent ],
 
})
export class AppModule { }
