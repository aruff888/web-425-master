import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

/* =========================
   Root Component
========================= */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="container">
      <header>
        <h1>{{ title }}</h1>
      </header>

      <nav>
        <ul>
          <li><a routerLink="/services">Our Services</a></li>
          <li><a routerLink="/about">About Us</a></li>
          <li><a routerLink="/contact">Contact Us</a></li>
        </ul>
      </nav>

      <main>
        <router-outlet></router-outlet>
      </main>

      <footer>
        &copy; {{ year }} {{ title }} <br />
        Professor Krasso
      </footer>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      width: 75%;
      margin: 0 auto;
      font-family: Arial, sans-serif;
    }

    header {
      background-color: #000;
      color: #fff;
      padding: 12px;
      text-align: center;
    }

    nav {
      background-color: #f8f8f8;
      padding: 10px;
      text-align: center;
      border-bottom: 1px solid #ddd;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      display: inline-block;
      margin: 0 12px;
    }

    a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
    }

    a:hover {
      text-decoration: underline;
    }

    main {
      flex: 1;
      padding: 16px;
    }

    footer {
      margin-top: 20px;
      padding: 10px;
      background-color: #000;
      color: #fff;
      text-align: center;
    }
  `]
})
export class AppComponent {
  title: string = 'Basic Routing Example';
  year: number = new Date().getFullYear();
}

/* =========================
   About Component
========================= */
@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="about">
      <h1>About Us</h1>
      <p>Here is some information about us:</p>
      <ul>
        <li>Founded in 2001</li>
        <li>Located in Anytown, USA</li>
      </ul>
    </section>
  `,
  styles: [`
    .about {
      max-width: 600px;
      margin: 0 auto;
    }

    h1 {
      margin-bottom: 10px;
    }

    ul {
      padding-left: 20px;
      list-style-type: disc;
    }
  `]
})
export class AboutComponent {}
