import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router,){
    this.username = 'pedro';
    this.password = '123';
  }

username: string;
password: string;

login(){
console.log(this.username);
console.log(this.password);
this.router.navigate(['/home/Dashboard']);
}

}
