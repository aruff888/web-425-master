import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

export interface User {
  empId: number;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Hardcoded users array used for this assignment's authentication check.
  private users: User[] = [
    { empId: 1, email: 'test@demo.com', password: 'password123' }
  ];

  // Tracks whether the user is currently authenticated.
  private authState = new BehaviorSubject<boolean>(false);

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) {}

  // Returns the authentication state as an observable for AppComponent.
  getAuthState() {
    return this.authState.asObservable();
  }

  // Checks the users array and signs in the user if the credentials match.
  signin(email: string, password: string): boolean {
    const user = this.users.find(
      u => u.email === email && u.password === password
    );

    if (user) {
      this.cookieService.set('session_user', user.email);
      this.authState.next(true);
      return true;
    }

    this.authState.next(false);
    return false;
  }

  // Clears cookies, resets authentication state, and redirects to signin.
  signout(): void {
    this.cookieService.deleteAll();
    this.authState.next(false);
    this.router.navigate(['/signin']);
  }
}
