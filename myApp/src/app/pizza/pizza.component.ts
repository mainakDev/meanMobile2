import { Component, OnInit } from '@angular/core';

import { Login } from '../pizza.model';


@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})



export class PizzaComponent{
    enteredPizza: string = '';
    enteredUserName: string = '';
    enteredPassword: string = '';
    loginSucces : boolean = false;

    loginCredential: Login[] = [{
      userName: 'Michael Scott',
      password: '12345' 
    },{
      userName: 'Dwight Shrute',
      password: 'password'
    }];

    pizzaArray = [{
      pizzaName: 'Marghareita',
      price: 135
    },{
      pizzaName: 'Farmhouse',
      price: 180
    }];

    onAddedToCart(){
      alert('Pizza added to cart');
    }
    
    onLogin(){
      this.loginCredential.forEach(cred => {
        if(cred.userName === this.enteredUserName && cred.password === this.enteredPassword){
          // alert('Login Successful');
          this.loginSucces = true;
        } else{
          alert('Login Unsuccessful');
        }
      });

    }

}
