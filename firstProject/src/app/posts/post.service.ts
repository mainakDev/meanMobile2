import { Injectable } from "@angular/core";
import { Post } from "./post.model"
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
// angular pipes & rxjs pipes are different
// Array.map() & rxjs map() iterates over data from our APP(Observable data)
// [1,2,3,4]
@Injectable({providedIn: 'root'})
export class PostService{
    //injecting httpclient
    constructor(private http:HttpClient) {}
    private postUpdated = new Subject<Post[]>() //generic
    private posts: Post[] = [] 
    postData: Post[] = []
    getPosts(){
        this.http.get<{message: string, posts: any}>('http://localhost:3000/api/posts/')
        .pipe(map((postData) => {
            return postData.posts.map((post) => {
                return{
                    title: post.title,
                    content: post.content,
                    id : post._id
                }
            });
        }))
        .subscribe((data) => {
            this.posts = data;
            this.postUpdated.next([...this.posts])
        })
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
        this.http.post<{message: string, postId: string}>('http://localhost:3000/api/posts/', post)
        .subscribe(data => {
            const id = data.postId;
            post.id = id;
            this.posts.push(post);
            this.postUpdated.next([...this.posts])
        })
    }

    deletePost(postId: string){
        this.http.delete('http://localhost:3000/api/posts/'+postId)
        .subscribe(() => {
            const updatedPosts = this.posts.filter(post => post.id != postId);
            this.posts = updatedPosts;
            this.postUpdated.next([...this.posts]);
        })
    }
}