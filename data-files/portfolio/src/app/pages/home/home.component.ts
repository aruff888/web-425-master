import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name = 'Amanda Ruff';

  intro = `I am a passionate web development student focused on building modern,
  responsive applications using Angular, TypeScript, and best practices like
  Test-Driven Development (TDD).`;

  bucketList = [
    'Become a professional full-stack developer',
    'Build and deploy my own SaaS application',
    'Contribute to an open-source project',
    'Travel internationally and work remotely',
    'Continuously learn new technologies'
  ];
}
