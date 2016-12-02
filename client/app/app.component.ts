/* * * ./app/comments/app.component.ts * * */
// Imports
import { Component,OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Survey } from './survey';
import {CommentService} from './comment.service';


// Component decorator
@Component({
    selector: 'comment-list',
    templateUrl: 'app/app.component.html',
    
});
// Component class
export class CommentListComponent implements OnInit{
    
    // Constructor with injected service
    constructor(
        private commentService: CommentService
        ){}
    // Local properties
    comments: Comment[];
    // Input properties
   

    loadComments(){
        // Get all comments
         this.commentService.getComments()
                           .subscribe(
                               comments => this.comments = comments, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }

    ngOnInit(){
            // Load comments
            this.loadComments()
    }
    

 }

export class AppComponent { 
    title = 'SURVEY SCHEDULER LIST';
}
