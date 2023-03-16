import { Component, EventEmitter, Output} from "@angular/core";
import { Post } from '../post.model';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent{
    title: string = '';
    content: string = '';
    @Output() postCreated = new EventEmitter();
    addPost(){
        const post: Post = {
            title: this.title,
            content: this.content
        };
        this.postCreated.emit(post);
    }
}
