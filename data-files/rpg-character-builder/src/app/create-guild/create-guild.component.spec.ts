import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateGuildComponent } from './create-guild.component';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CreateGuildComponent, // standalone component
        ReactiveFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // ✅ TEST 1
  it('should create a guild when the form is valid', () => {
    component.guildForm.setValue({
      guildName: 'Dragon Slayers',
      description: 'Elite warriors',
      type: 'Competitive',
      acceptTerms: true,
      notificationPreference: 'Email'
    });

    component.onSubmit();

    expect(component.guilds.length).toBe(1);
  });

  // ✅ TEST 2
  it('should not create a guild when the form is invalid', () => {
    component.guildForm.setValue({
      guildName: '',
      description: '',
      type: '',
      acceptTerms: false,
      notificationPreference: ''
    });

    component.onSubmit();

    expect(component.guilds.length).toBe(0);
  });

  // ✅ TEST 3
  it('should require acceptTerms to be checked', () => {
    component.guildForm.setValue({
      guildName: 'Test Guild',
      description: 'Test Description',
      type: 'Casual',
      acceptTerms: false, // ❗ important
      notificationPreference: 'SMS'
    });

    component.onSubmit();

    expect(component.guilds.length).toBe(0);
  });
});
