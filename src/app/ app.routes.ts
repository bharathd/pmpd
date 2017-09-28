// app.routes.ts
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import {HomeComponent } from './home/home.component';
import {ProjectComponent } from './project/project.component';
import { TechnologyComponent }  from './technology/technology.component';
import { EmployeeComponent }  from './employee/employee.component';
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
    
   { path: 'home' , component: HomeComponent,
     children: [
     { path: '', component: ProjectComponent },
        { path: 'project', component: ProjectComponent },
        { path: 'techno', component: TechnologyComponent },
        { path: 'project/:id', component: ProjectComponent },
        { path: 'techno/:id', component: TechnologyComponent },
        { path: 'employee', component: EmployeeComponent },
    ] }
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);