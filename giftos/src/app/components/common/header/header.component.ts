import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Check if user data is present in localStorage
    const user = JSON.parse(localStorage.getItem('userdata') || '{}');
    if (user && user.username) {
      this.username = user.username;  // Display the logged-in user's username
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userdata');
    this.username = null;
    this.router.navigate(['/login']);  // Redirect to the login page after logout
  }
}
