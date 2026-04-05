import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="contact">
      <h1>Contact Us</h1>
      <p>Here is our contact information:</p>
      <ul>
        <li><strong>Phone:</strong> 555-555-5555</li>
        <li><strong>Email:</strong> support&#64;me.com</li>
      </ul>
    </section>
  `,
  styles: [`
    .contact {
      max-width: 600px;
      margin: 0 auto;
      text-align: center;
    }

    h1 { margin-bottom: 10px; }
    p { margin-bottom: 15px; color: #555; }
    ul { list-style: none; padding: 0; }
    li { margin: 8px 0; font-size: 16px; }
    strong { color: #000; }
  `]
})
export class ContactComponent {}
