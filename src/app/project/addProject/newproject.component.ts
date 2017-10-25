import { Component,Input, Output, EventEmitter,OnInit } from '@angular/core';
import {Observable,Subscription} from 'rxjs/Rx';
import { NewprojectService } from './newproject.service';
import {  Routes , Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../employee/employee.service';
import { IMultiSelectOption,IMultiSelectTexts  } from 'angular-2-dropdown-multiselect';
import {AddProject } from "./newproject.model";
@Component({
  selector: 'addproject-page',
  templateUrl: `./newproject.html`,
   providers: [NewprojectService,EmployeeService]
})
export class AddProjectComponent implements OnInit {
    optionsModel: number[];
    myOptions: IMultiSelectOption[];
  rawjson:[];
    id: any;
  projectinfo:any;
  projectinfo1:any;
  public data:any;
  childproject:any;
  public addproject :any[];
  addproject= new AddProject(); 
  // Settings configuration
// Default selection
optionsModel: number[];

// Settings configuration
mySettings: IMultiSelectSettings = {
    enableSearch: true,
   
    buttonClasses: 'btn btn-default btn-block',
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: true
};

// Text configuration
myTexts: IMultiSelectTexts = {
    checkAll: 'Select all',
    uncheckAll: 'Unselect all',
    checked: 'item selected',
    checkedPlural: 'items selected',
    searchPlaceholder: 'Find',
    searchEmptyResult: 'Nothing found...',
    searchNoRenderText: 'Type in search box to see results...',
    defaultTitle: 'Select',
    allSelected: 'All selected',
};




  constructor(private employeeservice: EmployeeService,private _routeParams:  ActivatedRoute,private projectservice: NewprojectService,private router: Router
        ) {
  }
 ngOnInit() {
   this.getEmployeeList();
       this.projectinfo=this._routeParams.url;
       this.getprojects();
       this.projectinfo1 = true;
       this.projectinfo = this._routeParams.params.subscribe(params => {
       this.id = params['id']; // (+) converts string 'id' to a number
       this.projectinfo1 = this.id;
      

    });
 

  }
 onChange(e) {
        console.log(this.optionsModel);
    }
    getEmployeeList(){
        this.employeeservice.getEmployeeListData().subscribe((response:any) => { // <---
        debugger;
          this.rawjson=[]
          for(let i=0;i<response.length;i++){
          this.rawjson.push({id:response[i].EMPLOYEE_ID,name:response[i].EMPLOYEE_NAME})
          }
          this.myOptions=this.rawjson;
    }, (err:any) => { // <---
        console.log(err);
    }
  );
  }
  submitv(){
   this.projectservice.addprojectdetails(this.addproject).subscribe((response:any) => { // <---
        this.data = response;
 this.router.navigate(['/home']);
    }, (err:any) => { // <---
        console.log(err);
    }
  };
  getprojects() {
        this.projectservice.getProjectListdetails().subscribe((response:any) => { // <---
        this.data = response;

    }, (err:any) => { // <---
        console.log(err);
    }
  );
  }
 }
