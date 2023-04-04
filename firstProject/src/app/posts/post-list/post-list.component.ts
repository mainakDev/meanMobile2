import { Component, Input, OnInit} from "@angular/core";
import { Post } from "../post.model";
import { PostService } from "../post.service";

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit{
    constructor(public postService: PostService){}
    
    // @Input() posts: Post[] = [];   
    posts: Post[] = [];   

    ngOnInit(){
        this.posts = this.postService.getPosts()
    }
}