import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header class="header">
      <h1>RPG Character Builder</h1>
      <nav>
        <a routerLink="/signin">Sign In</a>
        <a routerLink="/players">Players</a>
        <a routerLink="/create-character">Create Character</a>
        <a routerLink="/create-guild">Create Guild</a>
        <a routerLink="/character-faction">Faction</a>
      </nav>
    </header>

    <main class="main-content">
      <router-outlet></router-outlet>
    </main>

    <footer class="footer">
      <nav>
        <a routerLink="/signin">Sign In</a>
        <a routerLink="/players">Players</a>
        <a routerLink="/create-character">Create Character</a>
        <a routerLink="/create-guild">Create Guild</a>
        <a routerLink="/character-faction">Faction</a>
      </nav>
      <p>© 2026 RPG Character Builder</p>
    </footer>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Roboto&family=Cinzel&display=swap');

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
