import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPagoVipComponent } from './formulario-pago-vip.component';

describe('FormularioPagoVipComponent', () => {
  let component: FormularioPagoVipComponent;
  let fixture: ComponentFixture<FormularioPagoVipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPagoVipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPagoVipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
