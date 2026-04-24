import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d).+$')
        ]
      ]
    });
  }

  get f() {
    return this.signinForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.signinForm.invalid) {
      return;
    }

    const email = this.signinForm.value.email;
    const password = this.signinForm.value.password;

    if (this.authService.signin(email, password)) {
      this.router.navigate(['/dashboard']); // or home page
    } else {
      alert('Authentication failed. Please check your email and password.');
    }
  }
}