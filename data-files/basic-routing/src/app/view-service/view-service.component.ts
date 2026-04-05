import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Service, ServiceItem } from '../service';

@Component({
  selector: 'app-view-service',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="service-details" *ngIf="serviceItem">
      <h1>Service Details</h1>
      <p>Here are the details of the selected service:</p>

      <ul>
        <li><strong>ID:</strong> {{ serviceItem.id }}</li>
        <li><strong>Name:</strong> {{ serviceItem.name }}</li>
      </ul>

      <a routerLink="/services" class="back-link">← Back to Services</a>
    </section>
  `,
  styles: [`
    .service-details { max-width: 600px; margin: 0 auto; text-align: center; }
    h1 { margin-bottom: 10px; }
    p { margin-bottom: 15px; color: #555; }
    ul { list-style: none; padding: 0; }
    li { margin: 8px 0; font-size: 16px; }
    .back-link { display: inline-block; margin-top: 15px; text-decoration: none; color: #007bff; font-weight: 500; }
    .back-link:hover { text-decoration: underline; }
  `]
})
export class ViewServiceComponent {
  serviceItem!: ServiceItem;
  serviceId!: number;

  constructor(private route: ActivatedRoute) {
    this.serviceId = Number(this.route.snapshot.paramMap.get('id'));
    const service = new Service();
    this.serviceItem = service.getService(this.serviceId);
  }
}
