import { Component,Input, Output, EventEmitter } from '@angular/core';
import {Observable,Subscription} from 'rxjs/Rx';
import { EmployeeService } from './employee.service';

import {  Routes , Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'employee-page',
  templateUrl: `./employee.html`,
   providers: [EmployeeService]
})
export class EmployeeComponent  {
    data: any;
      filteredData:any;
  technoinfo: any;
  technoinfo1:any;
  technoqa:any;
  id:any;
  technologylist:any;
  constructor(private _routeParams:  ActivatedRoute,private employeeservice: EmployeeService,private router: Router
        ) {
  }
 ngOnInit() {
       this.technoinfo=this._routeParams.url;
         // this.getprojects();
   this.getEmployeeList();
   this.technoinfo1=true;
    this.technoinfo = this._routeParams.params.subscribe(params => {

       this.id = +params['id']; // (+) converts string 'id' to a number
this.technoinfo1=this.id;

      if(!this.id){
      this.technoinfo1=false;

      }

    });

  }

  getEmployeeList(){
        this.employeeservice.getEmployeeListData().subscribe((response:any) => { // <---
        this.data = response;
this.filteredData = this.data;
    }, (err:any) => { // <---
        console.log(err);
    }
  );
  }
  private sortByWordLength = (a:any) => {
       return a.name.length;
   }
  public updateData(query:string) {
     console.log(query);
     debugger;
     if(query) {
     //this.filteredData = _.filter(this.data, (a)=>a.EMPLOYEE_NAME.indexOf(query)>=0);
     } else {
       this.filteredData = this.data;
     }
   }
 }
