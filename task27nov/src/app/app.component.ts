import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isRegistered: boolean = false;
  isLoggedIn: boolean = false;
  isLoginSuccess: boolean = false;

  // Store the registered user's data
  registeredUser: { name: string; email: string; password: string } | null = null;

  // Event when registration is successful
  onRegisterSuccess(userData: { name: string; email: string; password: string }): void {
    this.registeredUser = userData;
    this.isRegistered = true;
    console.log('User Registered:', this.registeredUser);
  }

  // Event when login is successful
  onLoginSuccess(): void {
    this.isLoggedIn = true;
    this.isLoginSuccess = true;
    console.log('Login Successful');
  }

  // Event when login fails
  onLoginFailure(): void {
    this.isLoginSuccess = false;
    console.log('Login Failed');
  }

  // Event to handle redirection to Sign-up page
  onSignUpRedirect(): void {
    this.isRegistered = false;
    this.isLoggedIn = false;
    this.isLoginSuccess = false;
    console.log('Redirecting to Sign Up');
  }

  // Log out the user
  onLogout(): void {
    this.isLoggedIn = false;
    this.isRegistered = false;
    this.isLoginSuccess = false;
    this.registeredUser = null;
    console.log('Logged out');
  }
}
