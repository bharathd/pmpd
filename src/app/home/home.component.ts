import { Component,Input, Output, EventEmitter } from '@angular/core';
import {Observable,Subscription} from 'rxjs/Rx';
import { HomeService } from './home.service';
import {  Routes , Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'home-page',
  templateUrl: `./home.html`,
   providers: [HomeService]
})
export class HomeComponent  { 
    id: any;
  constructor(private _routeParams:  ActivatedRoute,private homeService: HomeService,private router: Router
        ) {
this.username=_routeParams.snapshot.url[0].parameters;
  
  this.getprojects();
    this.getTechnologyList();
  }
 
username:any;
 Userid: any;
  projectlist: any;
technologylist:any;
  getprojects() {
    this.Userid = 1;
        this.homeService.getProjectList(this.Userid).subscribe((response:any) => { // <---
        this.projectlist = response;
        
    }, (err:any) => { // <---
        console.log(err);
    }
  );


  }
  getTechnologyList(){
    this.Userid = 1;
        this.homeService.getTechnologyList().subscribe((response:any) => { // <---
        this.technologylist = response;
        
    }, (err:any) => { // <---
        console.log(err);
    }
  );
  }
 }
