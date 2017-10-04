import { Component,Input, Output, EventEmitter,OnInit } from '@angular/core';
import {Observable,Subscription} from 'rxjs/Rx';
import { NewprojectService } from './newproject.service';
import {  Routes , Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'addproject-page',
  templateUrl: `./newproject.html`,
   providers: [NewprojectService]
})
export class AddProjectComponent implements OnInit {
    optionsModel: number[];
    myOptions: IMultiSelectOption[];
    id: any;
  projectinfo:any;
  projectinfo1:any;
  public data:any;
  childproject:any;
  constructor(private _routeParams:  ActivatedRoute,private projectservice: NewprojectService,private router: Router
        ) {
  }
 ngOnInit() {
   this.myOptions = [
            { id: 1, name: 'Option 1' },
            { id: 2, name: 'Option 2' },
            { id: 3, name: 'Option 3' },
            { id: 4, name: 'Option 4' },
            { id: 5, name: 'Option 5' },
            { id: 6, name: 'Option 6' },
        ];
       this.projectinfo=this._routeParams.url;
       this.getprojects();
       this.projectinfo1 = true;
       this.projectinfo = this._routeParams.params.subscribe(params => {
       this.id = params['id']; // (+) converts string 'id' to a number
       this.projectinfo1 = this.id;
      if(this.projectinfo1.search('_')==1){
      let childnode=this.projectinfo1.split('_');
        this.childproject = childnode[1];
        this.projectinfo1 = childnode[0];
      }
         else{
       this.childproject = false;
      }
      if(!this.id) {
      this.projectinfo1 = false;
      }

    });
  }
 onChange() {
        console.log(this.optionsModel);
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
