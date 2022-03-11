import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeportesCategoriaComponent } from './deportes-categoria.component';

describe('DeportesCategoriaComponent', () => {
  let component: DeportesCategoriaComponent;
  let fixture: ComponentFixture<DeportesCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeportesCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeportesCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
