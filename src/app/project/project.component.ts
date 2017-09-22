import { Component,Input, Output, EventEmitter } from '@angular/core';
import {Observable,Subscription} from 'rxjs/Rx';
import { ProjectService } from './project.service';
import {  Routes , Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'project-page',
  templateUrl: `./project.html`,
   providers: [ProjectService]
})
export class ProjectComponent  { 
    id: any;
  projectinfo:any;
  constructor(private _routeParams:  ActivatedRoute,private homeService: ProjectService,private router: Router
        ) {
    debugger;
this.projectinfo=_routeParams.url;
  
  this.getprojects();
  }


  getprojects() {
console.log(this.projectinfo._value[1].path);

  }
 }
