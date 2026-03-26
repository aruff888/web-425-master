import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <h1>Virtual Taco Stand</h1>
      <h2>Located in the heart of downtown!</h2>

      <p>
        We specialize in authentic, home-style Mexican cooking. Our menu ranges
        from Tacos Al Pastor to our famous Birria Tacos. We also offer a variety
        of daily specials that are sure to satisfy your taste buds. We're open
        24 hours a day, 7 days a week—stop by anytime!
      </p>

      <p>
        Planning a party? We cater! Give us a call and we’ll be happy to help
        with all your catering needs.
      </p>

      <div class="highlights-container">

        <div class="highlight">
          <img
            src="/assets/Downtown.png"
            alt="Downtown area with buildings and cars"
          />
          <p>
            Discover the heart of downtown flavor at our taco stand! Fresh,
            vibrant, and bursting with authentic Mexican cuisine, our tacos are
            a must-try. Every bite tells a story of tradition and taste.
          </p>
        </div>

        <div class="highlight">
          <img
            src="/assets/Stand.png"
            alt="Taco vendor serving customers at a stand"
          />
          <p>
            Welcome to our vibrant taco stand, where every bite is a fiesta!
            Watch our skilled vendor craft delicious tacos fresh to order,
            serving up bold flavors with a smile. Experience the energy,
            authenticity, and passion behind every plate.
          </p>
        </div>

        <div class="highlight">
          <img
            src="/assets/Tacos.png"
            alt="Three tacos served side by side"
          />
          <p>
            Feast your eyes on our trio of tacos—a vibrant tribute to authentic
            Mexican cuisine. Each taco is crafted with fresh ingredients and
            bold flavors that transport you straight to Mexico. Perfect for
            sharing (or enjoying solo), every bite is a celebration of tradition
            and taste.
          </p>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
      font-family: Arial, sans-serif;
      line-height: 1.6;
    }

    h1 {
      text-align: center;
      margin-bottom: 10px;
    }

    h2 {
      text-align: center;
      margin-bottom: 20px;
      font-weight: normal;
      color: #555;
    }

    .highlights-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 20px;
      margin-top: 30px;
    }

    .highlight {
      text-align: center;
      flex: 0 1 calc(33.333% - 20px);
      box-sizing: border-box;
    }

    .highlight img {
      max-width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 8px;
    }

    .highlight p {
      margin-top: 10px;
    }
  `]
})
export class HomeComponent {}
