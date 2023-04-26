import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  constructor(public postService: PostService){}

  addPost(postData: NgForm){
    if(postData.invalid){
      return;
    }
    this.postService.addPost(postData.value.title, postData.value.content)
    postData.resetForm();
  }
}
