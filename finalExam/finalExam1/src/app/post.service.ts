import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../app/post.model';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class PostService{

    constructor(private http: HttpClient){}

    private postUpdated = new Subject<Post[]>(); //object to store all the posts
    private posts : Post[] = []; //
    postData: Post[] = [];

    getPosts(){
        this.http.get<{message: string, postData: Post[]}>('http://localhost:3000/api/posts')
        .subscribe((data) => {
            this.postData = data.postData;
            this.postUpdated.next([...this.postData]);
        })
    }

    getPostUpdateListener(){
        return this.postUpdated.asObservable();
    }

    addPost(title: string, content: string){
        const post: Post = {
            id: null,
            title: title,
            content: content
        }
        this.http.post<{message: string, posts: Post[]}>('http://localhost:3000/api/posts', post)
        .subscribe(data => {
            this.postData.push(post);
            this.postUpdated.next([...this.postData]);
        })
    }
}