import { Injectable } from "@angular/core";
import { Post } from "./post.model"
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class PostService{
    //injecting httpclient
    constructor(private http:HttpClient) {}
    private postUpdated = new Subject<Post[]>() //generic
    private posts: Post[] = [] 
    postData: Post[] = []
    getPosts(){
        this.http.get<{message: string, postData: Post[]}>('http://localhost:3000/api/posts/')
        .subscribe((data) => {
            this.postData = data.postData;
            this.postUpdated.next([...this.postData])
        })
        // return [...this.posts]; //spread operator to copy contents from posts array
    }

    getPostUpdateListener(){
        return this.postUpdated.asObservable();
    }

    addPost(title: string, content: string){
        const post: Post  = {
            id: null,
            title: title,
            content: content
        }
        this.posts.push(post)
        this.postUpdated.next([...this.posts])
    }
}