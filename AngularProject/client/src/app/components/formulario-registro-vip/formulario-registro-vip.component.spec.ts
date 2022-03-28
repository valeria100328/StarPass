import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRegistroVipComponent } from './formulario-registro-vip.component';

describe('FormularioRegistroVipComponent', () => {
  let component: FormularioRegistroVipComponent;
  let fixture: ComponentFixture<FormularioRegistroVipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioRegistroVipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioRegistroVipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
