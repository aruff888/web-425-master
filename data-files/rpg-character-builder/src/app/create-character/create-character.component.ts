import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Character } from './create-character.interface';

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent {

  characters: Character[] = [];

  model: Character = {
    id: 0,
    name: '',
    gender: '',
    class: ''
  };

  generateId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  addCharacter(): void {
    const newCharacter: Character = {
      id: this.generateId(),
      name: this.model.name,
      gender: this.model.gender,
      class: this.model.class
    };

    this.characters.push(newCharacter);
    this.resetForm();
  }

  resetForm(): void {
    this.model = {
      id: 0,
      name: '',
      gender: '',
      class: ''
    };
  }
}
