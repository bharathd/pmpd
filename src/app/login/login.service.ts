import { Injectable } from '@angular/core';
import { Http, Response ,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

import { Book } from './login_model';
@Injectable()

export class LoginService {
   constructor(private http: Http) {

  }
 //https://crossorigin.me/
  
   sample(loginvsd:any):Observable<Book[]> {
    
        return this.http.post('http://localhost:8000/messages',{uid:loginvsd.username,pwd:loginvsd.password})
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res:Response) {
        let body = res.json();
      
        return body || [];
    }

    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
  
//    sample() {
//      console.log("in the service");
//       var url = "http://localhost:8000/users";
//    const headers: Headers = new Headers();
//
//  console.log("asd");
//   headers.append('Access-Control-Allow-Origin', '*');
//    let options = new RequestOptions({ headers: headers });
//    return this.http.get('http://localhost:8000/users').map((response) => {
//        // some response manipulation
//        return response.json();
//      })
//      .toPromise();
//  }
//     private extractData(res: Response) {
//       
//     console.log("in the exact data")
//  let body = res.json();
//        return body;
//    }
//    private handleErrorObservable (error: Response | any) {
//  console.error(error.message || error);
//  return Observable.throw(error.message || error);
//    }
//  private handleErrorPromise (error: Response | any) {
//  console.error(error.message || error);
//  return Promise.reject(error.message || error);
//    }
//  
//   login(username: string, password: string) {
//        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
//            .map((response: Response) => {
//                // login successful if there's a jwt token in the response
//                let user = response.json();
//                if (user && user.token) {
//                    // store user details and jwt token in local storage to keep user logged in between page refreshes
//                    localStorage.setItem('currentUser', JSON.stringify(user));
//                }
//            });
//    }
//  sample(as:any){
//     var url = "http://localhost:8000/users";
//    const headers: Headers = new Headers();
//   headers.append('Accept', 'application/json');
//  console.log("asd");
//   headers.append('Access-Control-Allow-Origin', '*');
//    let options = new RequestOptions({ headers: headers });
////    this.http.get(url, options).toPromise().then(function(info){
////        console.log(info);
////    });
//  return this.http.get('http://localhost:8000/users',options);
//  }
  
}