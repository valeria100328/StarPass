import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoCompraSeleccionComponent } from './proceso-compra-seleccion.component';

describe('ProcesoCompraSeleccionComponent', () => {
  let component: ProcesoCompraSeleccionComponent;
  let fixture: ComponentFixture<ProcesoCompraSeleccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesoCompraSeleccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesoCompraSeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
