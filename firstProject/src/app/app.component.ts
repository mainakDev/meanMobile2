import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postCreated = [];
  
  onPostAdded(post){
    this.postCreated.push(post);
    console.log(this.postCreated);
  }
  
}
