// app.routes.ts
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import {HomeComponent } from './home/home.component';
import {ProjectComponent } from './project/project.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
   { path: 'home' , component: HomeComponent,
     children: [
        { path: '', component: HomeComponent },
        { path: 'project/:id', component: ProjectComponent },
    ] }
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);