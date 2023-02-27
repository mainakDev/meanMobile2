import { Component } from "@angular/core";

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class PostListComponent{
    // posts = [
    //     {title: 'first', content: 'first content'},
    //     {title: 'second', content: 'second content'},
    //     {title: 'third', content: 'third content'}
    // ];
    posts = [];
}