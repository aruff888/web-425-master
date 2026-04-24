import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

export interface User {
  empId: number;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // a. Users array
  private users: User[] = [
    { empId: 1, email: 'test@test.com', password: 'password1' },
    { empId: 2, email: 'admin@rpg.com', password: 'admin123' }
  ];

  // b. Auth state (single source of truth)
  private authState = new BehaviorSubject<boolean>(false);

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) {
    // 🔑 Restore session on refresh
    if (this.cookieService.check('session_user')) {
      this.authState.next(true);
    }
  }

  // c. Observable auth state
  getAuthState() {
    return this.authState.asObservable();
  }

  // d. Sign in method
  signin(email: string, password: string): boolean {

    const user = this.users.find(
      u => u.email === email && u.password === password
    );

    if (user) {
      this.cookieService.set('session_user', JSON.stringify(user));
      this.authState.next(true);
      return true;
    }

    this.authState.next(false);
    return false;
  }

  // e. Sign out method
  signout(): void {
    this.cookieService.delete('session_user');
    this.authState.next(false);
    this.router.navigate(['/signin']);
  }

  // f. Authentication check (clean + consistent)
  isAuthenticated(): boolean {
    return this.authState.value;
  }
}
