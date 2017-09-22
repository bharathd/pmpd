import { Injectable } from '@angular/core';
import { Http, Response ,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

@Injectable()

export class ProjectService {
   constructor(private http: Http) {

  }
 //https://crossorigin.me/
  
    sample(loginvsd:any) {
    
        return this.http.post('http://localhost:8000/messages',{uid:loginvsd.username,pwd:loginvsd.password})
            .map(this.extractData)
            .catch(this.handleError);
    }
  getProjectList(data:any) {
        return this.http.post('http://localhost:8000/getprojectlist',{uid:data})
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