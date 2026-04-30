import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  email = '';

  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.authService.getAuthState().subscribe(isAuth => {
      this.isLoggedIn = isAuth;

      if (isAuth) {
        this.email = this.cookieService.get('session_user');
      } else {
        this.email = '';
      }
    });
  }

  signout(): void {
    this.authService.signout();
  }
}
