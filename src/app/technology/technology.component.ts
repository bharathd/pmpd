import { Component,Input, Output, EventEmitter } from '@angular/core';
import {Observable,Subscription} from 'rxjs/Rx';
import { TechnologyService } from './technology.service';
import { HomeService } from '../home/home.service';
import {  Routes , Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'technology-page',
  templateUrl: `./technology.html`,
   providers: [TechnologyService]
})
export class TechnologyComponent  { 
    id: any;
  projectinfo:any;
  projectinfo1:any;
  public data:any;
  technologylist:any;
  constructor(private _routeParams:  ActivatedRoute,private homeService: HomeService,private projectservice: TechnologyService,private router: Router
        ) {
  }
 ngOnInit() {
       this.projectinfo=this._routeParams.url;
         // this.getprojects();
   this.getTechnologyList();
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

  getTechnologyList(){
        this.homeService.getTechnologyList().subscribe((response:any) => { // <---
        this.technologylist = response;
        debugger;
    }, (err:any) => { // <---
        console.log(err);
    }
  );
  }
 }
