/* * * ./app/comments/services/comment.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Component, OnInit }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Survey }           from './survey';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommentService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
     private commentsUrl = 'http://localhost:8031/api/Survey/GetSurveys';
    // private commentsUrl = 'http://578f454de2fa491100415d08.mockapi.io/api/Comment'; 
     
     // Fetch all existing comments
     getComments() : Observable<Comment[]>{
         // ...using get request
         return this.http.get(this.commentsUrl)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
     }

    
}
