import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface MenuItem {
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="menu-wrapper">
      <h1>Our Menu</h1>
      <p class="menu-description">
        Explore our selection of handcrafted tacos, made with fresh ingredients
        and bold flavors.
      </p>

      <ul class="menu-container">
        <li *ngFor="let item of menu" class="menu-item">
          <div class="card">
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
            <p class="price">{{ item.price | currency }}</p>
          </div>
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .menu-wrapper {
      padding: 20px;
      text-align: center;
    }

    .menu-description {
      margin-bottom: 20px;
      color: #555;
    }

    .menu-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      list-style: none;
      padding: 0;
    }

    .menu-item {
      flex: 0 1 calc(33.33% - 20px);
      margin: 10px;
    }

    .card {
      padding: 20px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      height: 100%;
    }

    .price {
      font-weight: bold;
      margin-top: 10px;
    }
  `]
})
export class MenuComponent {
  menu: MenuItem[] = [
    {
      name: 'Carnitas Taco',
      description: 'Slow-cooked pork with cilantro, onions, and salsa.',
      price: 3.25
    },
    {
      name: 'Queso Birria Taco',
      description: 'Cheesy birria with consomé for dipping.',
      price: 3.50
    },
    {
      name: 'Al Pastor Taco',
      description: 'Marinated pork with pineapple and onions.',
      price: 3.25
    },
    {
      name: 'Tacos de Lengua',
      description: 'Tender beef tongue with cilantro and onions.',
      price: 3.50
    },
    {
      name: 'Chicken Taco',
      description: 'Grilled chicken with lettuce and salsa.',
      price: 3.25
    },
    {
      name: 'Fish Taco',
      description: 'Crispy fish with cabbage slaw and sauce.',
      price: 3.25
    },
    {
      name: 'Veggie Taco',
      description: 'Grilled veggies with beans and cheese.',
      price: 3.25
    },
    {
      name: 'Chorizo Taco',
      description: 'Spicy sausage with onions and cilantro.',
      price: 3.25
    }
  ];
}
