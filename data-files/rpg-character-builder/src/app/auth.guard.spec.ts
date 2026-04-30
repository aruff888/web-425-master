import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let cookieService: CookieService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        CookieService,
        {
          provide: Router,
          useValue: { navigate: jasmine.createSpy('navigate') }
        }
      ]
    });

    guard = TestBed.inject(AuthGuard);
    cookieService = TestBed.inject(CookieService);
    router = TestBed.inject(Router);
  });

  it('should allow access when authenticated', () => {
    spyOn(cookieService, 'check').and.returnValue(true);

    expect(guard.canActivate()).toBeTrue();
  });

  it('should deny access and redirect when not authenticated', () => {
    spyOn(cookieService, 'check').and.returnValue(false);

    expect(guard.canActivate()).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/signin']);
  });
});
