import { Component, EventEmitter, Output} from "@angular/core";
import { NgForm } from "@angular/forms";

import { Post } from '../post.model';
import { PostService } from "../post.service";

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent{
    title: string = '';
    content: string = '';

    constructor(public postService: PostService){}
    // @Output() postCreated = new EventEmitter<Post>(); //generic
    addPost(postForm: NgForm){ 
        if(postForm.invalid){return;}
        this.postService.addPost(postForm.value.title,postForm.value.content)
        // this.postCreated.emit(post);
        postForm.resetForm();   
    }
}