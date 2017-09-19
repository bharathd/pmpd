import { Component,Input, Output, EventEmitter } from '@angular/core';
import {Observable,Subscription} from 'rxjs/Rx';
import { LoginService } from './login.service';
import { Routes ,Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: `./login.html`,
   providers: [LoginService]
})
export class LoginComponent  { 
  
  constructor(
        private loginService: LoginService,private router: Router,
        ){
     this.router = router;
  }
  public model: any = {};
    loading = false;
    returnUrl: string;
  username: string;
 password: string;
 value: any;
  user:any;

  login(){

//this.loginService.sample().subscribe(posts =>
//            this.value = posts,
//   this.router.navigate(['/home']),
//            error => this.username = <any>error);
//    console.log(this.value)
    
      this.loginService.sample(this.model).subscribe((response) => { // <---
        this.value = response;
        debugger;
        if(response.length>0)
        this.router.navigate(['home']);
        else
          this.loading=true;
    }, (err) => { // <---
        console.log(err);
    }
  );
 
  }
//    login() {
//        this.loading = true;
//        this.loginService.sample(this.model.username, this.model.password).subscribe(
//                data => {
//                    this.router.navigate([this.returnUrl]);
//                },
//                error => {
//                    this.alertService.error(error);
//                    this.loading = false;
//                })
//    }
 }
