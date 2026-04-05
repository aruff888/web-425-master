import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Service, ServiceItem } from '../service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="services">
      <h1>Our Services</h1>
      <p>Here are the services we offer:</p>

      <ul>
        @for (service of services; track service.id) {
          <li>
            <a [routerLink]="['/service', service.id]">
              {{ service.name }}
            </a>
          </li>
        }
      </ul>
    </section>
  `,
  styles: [`
    .services {
      max-width: 600px;
      margin: 0 auto;
      text-align: center;
    }

    h1 {
      margin-bottom: 10px;
    }

    p {
      margin-bottom: 15px;
      color: #555;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      margin: 10px 0;
    }

    a {
      text-decoration: none;
      color: #007bff;
      font-weight: 500;
    }

    a:hover {
      text-decoration: underline;
    }
  `]
})
export class ServicesComponent {
  services: ServiceItem[] = [];

  constructor() {
    const service = new Service();
    this.services = service.getServices();
  }
}
