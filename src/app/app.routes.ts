import { Routes } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'userlogin',
    pathMatch: 'full',
  },
  {
    path: 'userlogin',
    loadComponent: () =>
      import('./components/user-login/user-login.component').then(
        (p) => p.UserLoginComponent
      ),
  },
  {
    path: 'usersignup',
    loadComponent: () =>
      import('./components/user-signup/user-signup.component').then(
        (p) => p.UserSignupComponent
      ),
  },
  {
    path: 'userhome',
    loadComponent: () =>
      import('./components/user-home/user-home.component').then(
        (p) => p.UserHomeComponent
      ),
  },
];
