import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Login } from 'src/app/core/model/utils/login.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)

  })

  constructor(private router: Router, private api: ApiService){
    
  }
  ngOnInit(): void {
   
  }

  
  onLogin() {
    const formValue = this.loginForm.value;
    const loginData: Login = {
      username: formValue.username ?? undefined,
      password: formValue.password ?? undefined
    };

    this.api.loginByApi(loginData).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/home/Dashboard']);
      },
      error => {
        // Manejar errores aquí si es necesario
        console.error(error);
      }
    );
  }


// login(){

// this.router.navigate(['/home/Dashboard']);
// }

}
