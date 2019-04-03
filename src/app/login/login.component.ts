import { Component, OnInit } from '@angular/core';
import { Auth } from './../auth';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth: Auth = new Auth();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault()
    const target = event.target
    if(this.auth.username && this.auth.password) {
      this.authService.getUserDetails(this.auth.username, this.auth.password)
        .subscribe(data => {
          if(data.success){
            this.authService.setLoggedIn(true)
            this.router.navigate(['users'])
          } else {
            window.alert(data.message)
          }
        }
          , error => console.log(error));
    } else {
      window.alert("Ingrese el Usuario y Contraseña")
    }

  }
}
