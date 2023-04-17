import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rest-component',
  templateUrl: './rest-component.component.html',
  styleUrls: ['./rest-component.component.css']
})
export class RestComponentComponent implements OnInit {
  userData: any = [];
  constructor(private http: HttpClient) {
    this.getUsers()
  }

  ngOnInit(): void {
  }

  getUsers(){
    this.http.get("https://reqres.in/api/users?page=2").subscribe(res => {
      console.log(res);
      this.userData = res['data'];
    })
  }

}
