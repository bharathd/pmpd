import { Component,Input, Output, EventEmitter } from '@angular/core';
import {Observable,Subscription} from 'rxjs/Rx';
import { ProjectService } from './project.service';
import {  Routes , Router, ActivatedRoute } from '@angular/router';
import { DataFilterPipe }   from './data-filter.pipe';

@Component({
  selector: 'project-page',
  templateUrl: `./project.html`,
   providers: [ProjectService]
})
export class ProjectComponent  { 
    id: any;
  projectinfo:any;
  projectinfo1:any;
  public data:any;
  constructor(private _routeParams:  ActivatedRoute,private projectservice: ProjectService,private router: Router
        ) {
  }
 ngOnInit() {
       this.projectinfo=this._routeParams.url;
          this.getprojects();
   this.projectinfo1=true;
    this.projectinfo = this._routeParams.params.subscribe(params => {
      debugger;
       this.id = +params['id']; // (+) converts string 'id' to a number
this.projectinfo1=this.id;
      if(!this.id){
      this.projectinfo1=false;
      }
     
    });
  }

  getprojects() {
        this.projectservice.getProjectListdetails().subscribe((response:any) => { // <---
        this.data = response;
        
    }, (err:any) => { // <---
        console.log(err);
    }
  );
  }
 }
