import { Component ,Input, Output, EventEmitter } from '@angular/core';
import {Observable,Subscription} from 'rxjs/Rx';
import { LoginService } from './login.service';
import { Routes ,Router,ActivatedRoute,CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras} from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: `./login.html`,
   providers: [LoginService]
})

export class LoginComponent  { 
  
  constructor(
        private loginService: LoginService,private router: Router,
        ){
     let sessionId = 123456789;

    // Set our navigation extras object
    // that contains our global query params and fragment
    let navigationExtras: NavigationExtras = {
      queryParams: { 'session_id': sessionId },
      fragment: 'anchor'
    };
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
    
        console.log(this.value);
       this.username=this.value[0].username;
        if(response.length>0)
        this.router.navigate(['home',{cell:this.value[0].USER_NAME}]);
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
