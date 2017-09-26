import { Injectable } from '@angular/core';
import { Http, Response ,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

@Injectable()

export class TechnologyService {
   constructor(private http: Http) {

  }
 //https://crossorigin.me/
  
  getTechnologyListdetails() {
        return this.http.get('http://localhost:8000/getechnologies')
            .map(this.extractData)
            .catch(this.handleError);
    }
  getTechnoQAList(data:any){
   return this.http.post('http://localhost:8000/gettechnoloyQA',{qid:data})
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
}