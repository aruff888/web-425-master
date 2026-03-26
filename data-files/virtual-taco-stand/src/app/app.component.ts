import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="wrapper">

      <!-- Header -->
      <header class="banner">
        <img
          src="/assets/VirtualTacoStand.png"
          alt="Website banner for Virtual Taco Stand"
          class="banner-img"
        />
      </header>

      <!-- Main Content -->
      <main class="main-content">

        <!-- Navigation -->
        <nav class="navbar">
          <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Order</a></li>
            <li><a href="#">Daily Specials</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </nav>

        <!-- Routed Content -->
        <section class="content">
          <router-outlet></router-outlet>
        </section>

      </main>

      <!-- Footer -->
      <footer class="footer">
        <nav class="footer-nav">
          <a routerLink="/">Home</a> |
          <a href="#">Menu</a> |
          <a href="#">Order</a> |
          <a href="#">Daily Specials</a> |
          <a href="#">Feedback</a>
        </nav>
        <p>&copy; 2024 Virtual Taco Stand</p>
      </footer>

    </div>
  `,
  styles: [`
    .wrapper {
      text-align: center;
      font-family: Arial, sans-serif;
    }

    .banner-img {
      width: 100%;
      max-height: 200px;
      object-fit: cover;
    }

    .navbar ul {
      list-style: none;
      padding: 0;
    }

    .navbar li {
      display: inline;
      margin: 0 10px;
    }

    .navbar a {
      text-decoration: none;
      font-weight: bold;
    }

    .footer {
      margin-top: 20px;
      font-size: 0.9em;
    }
  `]
})
export class AppComponent {}
