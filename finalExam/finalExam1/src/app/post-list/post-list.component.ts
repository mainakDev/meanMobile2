import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';
import { Post } from '../post.model'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  constructor(public postService: PostService){}

  private postSub: Subscription;
  posts: Post[] = [];
  
  ngOnInit(): void {
    this.postService.getPosts()
    this.postSub = this.postService.getPostUpdateListener()
    .subscribe((allPosts: Post[]) => {
      this.posts = allPosts;
    })
  }

}
