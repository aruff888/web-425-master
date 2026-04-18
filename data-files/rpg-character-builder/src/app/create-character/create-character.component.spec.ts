import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, CreateCharacterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // ✅ Test 1
  it('should generate a random character ID between 1 and 1000 with no decimals', () => {
    const id = component.generateId();
    expect(id).toBeGreaterThanOrEqual(1);
    expect(id).toBeLessThanOrEqual(1000);
    expect(Number.isInteger(id)).toBeTrue();
  });

  // ✅ Test 2
  it('should add a character with correct customization', () => {
    component.model = {
      id: 0,
      name: 'Aragorn',
      gender: 'Male',
      class: 'Warrior'
    };

    component.addCharacter();

    expect(component.characters.length).toBe(1);
    expect(component.characters[0].name).toBe('Aragorn');
    expect(component.characters[0].gender).toBe('Male');
    expect(component.characters[0].class).toBe('Warrior');
  });

  // ✅ Test 3
  it('should reset all form fields after resetForm is called', () => {
    component.model = {
      id: 123,
      name: 'Test',
      gender: 'Male',
      class: 'Mage'
    };

    component.resetForm();

    expect(component.model.name).toBe('');
    expect(component.model.gender).toBe('');
    expect(component.model.class).toBe('');
  });
});
