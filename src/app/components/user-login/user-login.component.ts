import { Component } from '@angular/core';
import { UserSignupComponent } from '../user-signup/user-signup.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { Usermodel } from '../../models/userinterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss',
})
export class UserLoginComponent {
  /**
   *
   */
  User: Usermodel = {
    username: '',
    password: '',
  };
  constructor(private activateroutes: Router) {}
  onSubmit(loginfrm: any) {
    console.log(loginfrm);
    if (loginfrm.username == 'yogesh' && loginfrm.password == '1234') {
      this.activateroutes.navigateByUrl('userhome');
    } else {
      alert('Invalid user');
    }
  }
}
