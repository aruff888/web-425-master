import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home">
      <h2>Welcome to the RPG Character Builder</h2>

      <img src="https://images.unsplash.com/photo-1605902711622-cfb43c4437d1" alt="Fantasy warrior">
      <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e" alt="Mage character">
      <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420" alt="RPG world">

      <p>
        Welcome to the RPG Character Builder, your ultimate destination for creating,
        customizing, and managing unique characters for your favorite role-playing games.
        Whether you are a seasoned adventurer or just beginning your journey into fantasy
        worlds, this application gives you the tools you need to bring your imagination to life.
      </p>

      <p>
        In this application, you can design characters with distinct classes, abilities,
        and backstories. Choose from powerful warriors, stealthy rogues, wise mages,
        or create your own hybrid class. Every character you build becomes part of your
        growing collection, allowing you to experiment with different playstyles and strategies.
      </p>

      <p>
        The RPG Character Builder is designed to be both fun and intuitive. With a clean
        interface and engaging visuals, you can easily navigate through options and
        customize every detail of your character. From selecting weapons and armor to
        defining personality traits and story arcs, the possibilities are endless.
      </p>

      <p>
        This project is not just about building characters—it’s about storytelling.
        Each character you create has the potential to be part of an epic adventure.
        Imagine crafting heroes that explore dangerous dungeons, battle mythical creatures,
        and uncover hidden treasures. Your creativity is the only limit.
      </p>

      <p>
        Start building today and bring your RPG ideas to life. Whether you're preparing
        for a tabletop campaign or just having fun, the RPG Character Builder is your
        gateway to endless adventures.
      </p>
    </div>
  `,
  styles: [`
    .home {
      text-align: center;
    }

    img {
      width: 30%;
      margin: 10px;
      border-radius: 10px;
    }

    p {
      margin: 15px 0;
      line-height: 1.6;
    }
  `]
})
export class HomeComponent {}
