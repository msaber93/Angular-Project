import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private isLoggedSubject: BehaviorSubject<boolean>;
  constructor() {
    this.isLoggedSubject = new BehaviorSubject<boolean> (false);
  }

  login(userName: string, password: string) {
    // call login API, and get Access token
    let userToken = "23456789";
    localStorage.setItem("token", userToken);
    this.isLoggedSubject.next(true);
  }

  logout() {
    localStorage.removeItem("token");
    this.isLoggedSubject.next(false);
  }

  get isUserLogged(): boolean {
    return localStorage.getItem("token") ? true : false;
  }

  isUserLoggedSubject() {
    return this.isLoggedSubject;
  }
}
