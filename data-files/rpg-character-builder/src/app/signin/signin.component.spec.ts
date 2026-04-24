import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin.component';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { of } from 'rxjs';

describe('SigninComponent (TDD Tests)', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let authService: AuthService;
  let cookieService: CookieService;
  let router: Router;

  beforeEach(async () => {

    const authServiceMock = {
      signin: jasmine.createSpy('signin'),
      getAuthState: jasmine.createSpy('getAuthState').and.returnValue(of(false))
    };

    const cookieServiceMock = {
      set: jasmine.createSpy('set'),
      get: jasmine.createSpy('get'),
      check: jasmine.createSpy('check')
    };

    const routerMock = {
      navigate: jasmine.createSpy('navigate')
    };

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, SigninComponent],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: CookieService, useValue: cookieServiceMock },
        { provide: Router, useValue: routerMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;

    authService = TestBed.inject(AuthService);
    cookieService = TestBed.inject(CookieService);
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  // ----------------------------------------
  // TEST 1
  // ----------------------------------------
  it('should set cookie and authState to true on successful sign in', () => {

    (authService.signin as jasmine.Spy).and.returnValue(true);

    component.signinForm.setValue({
      email: 'test@test.com',
      password: 'password1'
    });

    component.onSubmit();

    expect(authService.signin).toHaveBeenCalled();
    expect(cookieService.set).toHaveBeenCalled();
  });

  // ----------------------------------------
  // TEST 2
  // ----------------------------------------
  it('should NOT set cookie and authState true on unsuccessful sign in', () => {

    (authService.signin as jasmine.Spy).and.returnValue(false);

    component.signinForm.setValue({
      email: 'wrong@test.com',
      password: 'wrongpass'
    });

    component.onSubmit();

    expect(authService.signin).toHaveBeenCalled();
    expect(cookieService.set).not.toHaveBeenCalled();
  });

  // ----------------------------------------
  // TEST 3
  // ----------------------------------------
  it('should call signin method on form submission', () => {

    (authService.signin as jasmine.Spy).and.returnValue(true);

    component.signinForm.setValue({
      email: 'test@test.com',
      password: 'password1'
    });

    component.onSubmit();

    expect(authService.signin).toHaveBeenCalledWith(
      'test@test.com',
      'password1'
    );
  });

});
