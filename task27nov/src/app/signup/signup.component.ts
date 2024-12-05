import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  @Output() registerSuccess = new EventEmitter<{ name: string; email: string; password: string }>();

  onSubmit(): void {
    if (this.name && this.email && this.password) {
      // Emit data to the parent component when registration is successful
      this.registerSuccess.emit({ name: this.name, email: this.email, password: this.password });
      console.log('User Registered:', { name: this.name, email: this.email });
    } else {
      alert('Please fill all the fields');
    }
  }
}
