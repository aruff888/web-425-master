import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn = false;
  userEmail = '';

  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {

    this.authService.getAuthState().subscribe(state => {
      this.isLoggedIn = state;

      if (state && this.cookieService.check('session_user')) {
        const user = JSON.parse(this.cookieService.get('session_user'));
        this.userEmail = user.email;
      } else {
        this.userEmail = '';
      }
    });

    // restore session after refresh
    if (this.cookieService.check('session_user')) {
      this.authService['authState'].next(true);
    }
  }

  signout(): void {
    this.authService.signout();
  }
}
