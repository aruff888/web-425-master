import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaseGuildComponent } from './crease-guild.component';

describe('CreaseGuildComponent', () => {
  let component: CreaseGuildComponent;
  let fixture: ComponentFixture<CreaseGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreaseGuildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaseGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
