import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoginPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Check if the current route is login on app initialization
    this.updateHeaderFooterVisibility();

    // Listen to route changes and update header/footer visibility accordingly
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateHeaderFooterVisibility();
      }
    });
  }

  private updateHeaderFooterVisibility(): void {
    // Update isLoginPage flag based on the current route
    this.isLoginPage = this.router.url === '/login';
  }
}
