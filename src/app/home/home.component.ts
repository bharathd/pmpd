import { Component,Input, Output, EventEmitter } from '@angular/core';
import {Observable,Subscription} from 'rxjs/Rx';
import { HomeService } from './home.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'home-page',
  templateUrl: `./home.html`,
   providers: [HomeService]
})
export class HomeComponent  { 
  
  constructor(
        private homeService: HomeService
        ){}
  username : string;
 password : string;
 value: any;

  login(){
 
this.homeService.sample().subscribe(posts =>
            this.value = posts,
            error => this.username = <any>error);
    console.log(this.value)
  
     
  }
 }
