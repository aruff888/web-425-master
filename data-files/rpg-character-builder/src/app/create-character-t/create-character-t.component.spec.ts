import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterTComponent } from './create-character-t.component';

describe('CreateCharacterTComponent', () => {
  let component: CreateCharacterTComponent;
  let fixture: ComponentFixture<CreateCharacterTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCharacterTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
