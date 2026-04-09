import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Character {
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  class: 'Warrior' | 'Mage' | 'Rogue';
  faction: string;
  startingLocation: string;
  funFact: string;
}

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent {

  characters: Character[] = [
    { name: 'Thorn', gender: 'Male', class: 'Warrior', faction: 'Iron Brotherhood', startingLocation: 'Ironhold', funFact: 'Defeated a dragon alone.' },
    { name: 'Lyra', gender: 'Female', class: 'Mage', faction: 'Arcane Order', startingLocation: 'Starfall', funFact: 'Reverses spells.' },
    { name: 'Shade', gender: 'Other', class: 'Rogue', faction: 'Shadow Guild', startingLocation: 'Nightport', funFact: 'Never seen.' },
    { name: 'Kael', gender: 'Male', class: 'Warrior', faction: 'Stone Guard', startingLocation: 'Grimwall', funFact: 'Never loses duels.' },
    { name: 'Mira', gender: 'Female', class: 'Mage', faction: 'Crystal Circle', startingLocation: 'Lumina', funFact: 'Speaks to elements.' },
    { name: 'Vex', gender: 'Other', class: 'Rogue', faction: 'Silent Fang', startingLocation: 'Duskhaven', funFact: 'Master thief.' },
    { name: 'Orin', gender: 'Male', class: 'Warrior', faction: 'Iron Brotherhood', startingLocation: 'Ironhold', funFact: 'Forged his own sword.' },
    { name: 'Selene', gender: 'Female', class: 'Mage', faction: 'Moon Order', startingLocation: 'Lunaris', funFact: 'Draws power from moon.' },
    { name: 'Nyx', gender: 'Other', class: 'Rogue', faction: 'Night Blades', startingLocation: 'Shadowfen', funFact: 'Moves unseen.' },
    { name: 'Borin', gender: 'Male', class: 'Warrior', faction: 'Mountain Clan', startingLocation: 'Stonepeak', funFact: 'Strongest in the realm.' }
  ];
}
