import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';

describe('AuthService', () => {
  let service: AuthService;
  let cookieService: CookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthService, CookieService]
    });

    service = TestBed.inject(AuthService);
    cookieService = TestBed.inject(CookieService);

    cookieService.deleteAll();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return false for invalid login', () => {
    const result = service.signin('wrong@test.com', 'wrongpass');
    expect(result).toBeFalse();
  });

  it('should return true for valid login', () => {
    const result = service.signin('test@demo.com', 'password123');
    expect(result).toBeTrue();
  });

  it('should set session_user cookie on valid login', () => {
    service.signin('test@demo.com', 'password123');

    expect(cookieService.check('session_user')).toBeTrue();
    expect(cookieService.get('session_user')).toBe('test@demo.com');
  });
});
