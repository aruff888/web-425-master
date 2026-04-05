import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, NgIf], // <-- add NgIf here
  template: `
    <div class="sign-in-container">
      ...
      <p class="sign-in-error" *ngIf="errorMessage">{{ errorMessage }}</p>
    </div>
  `,
  styles: [`
    /* your styles */
  `]
})
export class AppComponent {
  errorMessage: string = '';
}
