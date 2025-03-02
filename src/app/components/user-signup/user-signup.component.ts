import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './user-signup.component.html',
  styleUrl: './user-signup.component.scss',
})
export class UserSignupComponent implements OnInit {
  signupform: any;
  firstName = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    this.CustomValidatorfn,
  ]);
  lastName = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    this.CustomValidatorfn,
  ]);
  gender = new FormControl('', [Validators.required]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);
  language = new FormControl('E', [Validators.required]);
  iAgree = new FormControl(false);
  constructor(private routes: Router) {}
  ngOnInit(): void {
    this.signupform = new FormGroup({
      firstName: this.firstName,
      lname: this.lastName,
      gender: this.gender,
      password: this.password,
      language: this.language,
      iAgree: this.iAgree,
    });
  }

  signup() {
    console.log(this.signupform.value);
  }
  CustomValidatorfn(control: AbstractControl) {
    const words = ['bc', 'mc', 'kutta', 'kamina'];
    let list = (control.value as string).split(' ');
    let isInvalidword = false;
    for (let i of list) {
      if (words.includes(i)) {
        isInvalidword = true;
      }
    }
    if (isInvalidword) {
      return { isInvalidword: true };
    } else {
      return null;
    }
  }
  back() {
    this.routes.navigateByUrl('/userlogin');
  }
}
