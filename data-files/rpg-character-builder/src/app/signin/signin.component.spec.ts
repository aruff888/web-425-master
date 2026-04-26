import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninComponent } from './signin.component';
import { AuthService } from '../auth.service';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    authService = jasmine.createSpyObj('AuthService', ['signin']);
    router = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [SigninComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: AuthService, useValue: authService },
        { provide: Router, useValue: router }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set cookie and authState to true on successful sign in', () => {
    authService.signin.and.returnValue(true);

    component.form.setValue({
      email: 'test@demo.com',
      password: 'password123'
    });

    component.onSubmit();

    expect(authService.signin).toHaveBeenCalledWith('test@demo.com', 'password123');
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should not set cookie and authState to true on unsuccessful sign in', () => {
    spyOn(window, 'alert');
    authService.signin.and.returnValue(false);

    component.form.setValue({
      email: 'wrong@test.com',
      password: 'wrong123'
    });

    component.onSubmit();

    expect(authService.signin).toHaveBeenCalledWith('wrong@test.com', 'wrong123');
    expect(router.navigate).not.toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalled();
  });

  it('should call signin method on form submission', () => {
    authService.signin.and.returnValue(true);

    component.form.setValue({
      email: 'test@demo.com',
      password: 'password123'
    });

    component.onSubmit();

    expect(authService.signin).toHaveBeenCalled();
  });
});
