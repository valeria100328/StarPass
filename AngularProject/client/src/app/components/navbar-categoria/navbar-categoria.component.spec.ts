import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCategoriaComponent } from './navbar-categoria.component';

describe('NavbarCategoriaComponent', () => {
  let component: NavbarCategoriaComponent;
  let fixture: ComponentFixture<NavbarCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
