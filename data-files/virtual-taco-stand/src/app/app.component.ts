import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="sign-in-container">
      <h1>Hello, {{ title }}</h1>

      <p class="sign-in-error" *ngIf="errorMessage">
        {{ errorMessage }}
      </p>
    </div>
  `,
  styles: [`
    /* your styles */
  `]
})
export class AppComponent {
  title = 'virtual-taco-stand';
  errorMessage = '';
}
