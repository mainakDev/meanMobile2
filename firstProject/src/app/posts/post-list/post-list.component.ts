import { Component, Input, OnDestroy, OnInit} from "@angular/core";
import { Post } from "../post.model";
import { PostService } from "../post.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit{ //lifecycle hook
    constructor(public postService: PostService){}
    private postSub: Subscription;
    // @Input() posts: Post[] = [];   
    posts: Post[] = [];   

    ngOnInit(){ //whenever a component is created
        this.postService.getPosts()
        this.postSub = this.postService.getPostUpdateListener()
        .subscribe((allPosts: Post[]) => {
            this.posts = allPosts;
        })
    }
}