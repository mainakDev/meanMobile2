import { Component } from "@angular/core";

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})


export class PostCreateComponent{
    newPost:string = 'No Content'; // This is the User's post
    enteredValue:string = '';
    addPost(){
        // this.newPost = 'User\'s post';
        // console.dir(postInput.value);
        this.newPost = this.enteredValue;

    }
}
