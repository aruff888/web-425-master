import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    fixture.detectChanges();
  });

  it('should create PlayersComponent', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should display a list of characters', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const items = compiled.querySelectorAll('.character-item');

    expect(items.length).toBe(10);
  });
});
