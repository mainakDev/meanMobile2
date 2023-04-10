import { Injectable } from "@angular/core";
import { Post } from "./post.model"
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class PostService{
    private postUpdated = new Subject<Post[]>() //generic
    private posts: Post[] = [] 
    getPosts(){
        return [...this.posts]; //spread operator to copy contents from posts array
    }

    getPostUpdateListener(){
        return this.postUpdated.asObservable();
    }

    addPost(title: string, content: string){
        const post: Post  = {
            title: title,
            content: content
        }
        this.posts.push(post)
        this.postUpdated.next([...this.posts])
    }
}