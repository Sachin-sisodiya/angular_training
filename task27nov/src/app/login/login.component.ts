import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  @Input() registeredUser: { name: string; email: string; password: string } | null = null;
  @Output() loginSuccess = new EventEmitter<void>();
  @Output() loginFailure = new EventEmitter<void>();
  @Output() signUpRedirect = new EventEmitter<void>();

  // Called when the user submits the login form
  onLoginSubmit(): void {
    if (this.email && this.password) {
      // Check if the entered credentials match the registered user
      if (this.registeredUser && this.registeredUser.email === this.email && this.registeredUser.password === this.password) {
        this.loginSuccess.emit();  // Emit event when login is successful
      } else {
        this.loginFailure.emit();  // Emit event when login fails
        alert('Invalid email or password!');
      }
    } else {
      alert('Please fill all fields');
    }
  }

  // Triggered when the user clicks the "Sign Up" link
  onSignUpClick(): void {
    this.signUpRedirect.emit();  // Emit event to redirect to the Sign-Up page
  }
}
