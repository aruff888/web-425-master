import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, CookieService]
    });

    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return false for invalid login', () => {
    const result = service.signin('wrong@test.com', 'wrongpass');
    expect(result).toBeFalse();
  });

  it('should return true for valid login', () => {
    const result = service.signin('test@test.com', 'password1');
    expect(result).toBeTrue();
  });
});
