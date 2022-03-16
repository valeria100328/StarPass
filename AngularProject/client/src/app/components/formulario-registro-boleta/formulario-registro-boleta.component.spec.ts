import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRegistroBoletaComponent } from './formulario-registro-boleta.component';

describe('FormularioRegistroBoletaComponent', () => {
  let component: FormularioRegistroBoletaComponent;
  let fixture: ComponentFixture<FormularioRegistroBoletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioRegistroBoletaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioRegistroBoletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
