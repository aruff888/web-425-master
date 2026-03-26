import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <header class="header">
      <h1>RPG Character Builder</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">Characters</a>
        <a href="#">Classes</a>
        <a href="#">About</a>
      </nav>
    </header>

    <main class="main-content">
      <router-outlet></router-outlet>
    </main>

    <footer class="footer">
      <nav>
        <a href="#">Home</a>
        <a href="#">Characters</a>
        <a href="#">Classes</a>
        <a href="#">About</a>
      </nav>
      <p>© 2026 RPG Character Builder</p>
    </footer>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Roboto&family=Cinzel&display=swap');

    body {
      margin: 0;
    }

    .header {
      background: #1e1e2f;
      color: white;
      padding: 20px;
      text-align: center;
      font-family: 'Orbitron', sans-serif;
    }

    nav a {
      margin: 0 15px;
      color: #00d4ff;
      text-decoration: none;
      font-family: 'Roboto', sans-serif;
    }

    nav a:hover {
      text-decoration: underline;
    }

    .main-content {
      padding: 20px;
      background: #f4f4f4;
      min-height: 70vh;
      font-family: 'Cinzel', serif;
    }

    .footer {
      background: #1e1e2f;
      color: white;
      text-align: center;
      padding: 15px;
      font-family: 'Roboto', sans-serif;
    }
  `]
})
export class AppComponent {}
