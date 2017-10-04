import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'angular2-datatable';
import { AppComponent }  from './app.component';
import { LoginComponent }  from './login/login.component';
import { HomeModule } from './home/home.module';
import { ProjectModule } from './project/project.module';
import { AddProjectModule } from './project/addproject/newproject.module';
import { TechnologyModule } from './technology/technology.module';
import { EmployeeModule } from './employee/employee.module';
import { routing } from './ app.routes';
import { DataFilterPipe }   from './project/data-filter.pipe';
import { YourSharedService } from './app.service';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

@NgModule({
  imports:      [ AddProjectModule,BrowserModule, FormsModule , HttpModule, routing,HomeModule,ProjectModule,DataTableModule,TechnologyModule,EmployeeModule,MultiselectDropdownModule],
  declarations: [ AppComponent, LoginComponent,DataFilterPipe ],
  bootstrap:    [ AppComponent ],

})
export class AppModule { }
