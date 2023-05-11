import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from 'src/app/Services/user-auth.service';



@Component({
  selector: 'app-User-Login',
  templateUrl: `./User-Login.component.html`,
  styleUrls: ['./User-Login.component.css']
})
export class UserLoginComponent implements OnInit {
  isUserLogged: boolean = false;
  constructor(private authServices: UserAuthService) { }

  ngOnInit() {
    this.isUserLogged = this.authServices.isUserLogged;
  }

  login() {
    this.authServices.login("Username", "Password");
    this.isUserLogged = this.authServices.isUserLogged;
  }

  logout() {
    this.authServices.logout();
    this.isUserLogged = this.authServices.isUserLogged;
  }






}
