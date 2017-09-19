import { Component,Input, Output, EventEmitter } from '@angular/core';
import {Observable,Subscription} from 'rxjs/Rx';
import { LoginService } from './login.service';

@Component({
  selector: 'login-page',
  templateUrl: `./login.html`,
   providers: [LoginService]
})
export class LoginComponent  { 
  
  constructor(
        private loginService: LoginService
        ){}
  username : string;
 password : string;
 value: any;

  login(){
 
this.loginService.sample().subscribe(posts =>
            this.value = posts,
            error => this.username = <any>error);
    console.log(this.value)
  
     
  }
 }
