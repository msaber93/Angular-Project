import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {
  userRegisterForm : FormGroup;

  constructor() {
    this.userRegisterForm = new FormGroup ({
      fullName: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]{3,}')]),
      email: new FormControl(''),
      phoneNo: new FormControl(''),
      address: new FormGroup({
        city : new FormControl(''),
        postalCode : new FormControl(''),
        street : new FormControl(''),
      }),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
    })
  }

  get fullName() {
    return this.userRegisterForm.get('fullName');
  }

  

}
