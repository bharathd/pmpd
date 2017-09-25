import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {HomeComponent } from '../home/home.component';
const usersRoutes: Routes = [
  
      { path: '', component: HomeComponent },
     
   
  
];


export const ProjectRouting = RouterModule.forChild(usersRoutes);