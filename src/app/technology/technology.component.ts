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
  technoinfo: any;
  technoinfo1:any;
  public data:any;
  technoqa:any
  technologylist:any;
  constructor(private _routeParams:  ActivatedRoute,private homeService: HomeService,private technologyservice: TechnologyService,private router: Router
        ) {
  }
 ngOnInit() {
       this.technoinfo=this._routeParams.url;
         // this.getprojects();
   this.getTechnologyList();
   this.technoinfo1=true;
    this.technoinfo = this._routeParams.params.subscribe(params => {
  
       this.id = +params['id']; // (+) converts string 'id' to a number
this.technoinfo1=this.id;
      
      if(!this.id){
      this.technoinfo1=false;
       
      }
           this.getTechnoQAList()
    });
   
  }

  getTechnologyList(){
        this.homeService.getTechnologyList().subscribe((response:any) => { // <---
        this.technologylist = response;
        
    }, (err:any) => { // <---
        console.log(err);
    }
  );
  }
  getTechnoQAList() {
        this.technologyservice.getTechnoQAList(this.technoinfo1).subscribe((response:any) => { // <---
        this.technoqa = response;
        
    }, (err:any) => { // <---
        console.log(err);
    }
  );


  }
 }
