import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuComponent } from './menu/menu.component';

describe('AppComponent (Standalone)', () => {
  beforeEach(async () => {
    const activatedRouteStub = {
      snapshot: {
        paramMap: {
          get: () => 'staticValue',
        },
      },
      queryParams: of({}),
    };

    const routes: Routes = [
      { path: 'menu', component: MenuComponent }
    ];

    await TestBed.configureTestingModule({
      imports: [
        AppComponent, // ✅ REQUIRED for standalone
        MenuComponent, // ✅ if standalone
        RouterTestingModule.withRoutes(routes)
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'virtual-taco-stand' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('virtual-taco-stand');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent)
      .toContain('Hello, virtual-taco-stand');
  });

  it('should have correct route for Menu Component', () => {
    const router = TestBed.inject(Router);
    const route = router.config.find(r => r.path === 'menu');
    expect(route).toBeDefined();

    if (route) {
      expect(route.component).toBe(MenuComponent);
    }
  });
});
