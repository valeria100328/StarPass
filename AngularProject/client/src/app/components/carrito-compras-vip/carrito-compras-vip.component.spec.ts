import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoComprasVipComponent } from './carrito-compras-vip.component';

describe('CarritoComprasVipComponent', () => {
  let component: CarritoComprasVipComponent;
  let fixture: ComponentFixture<CarritoComprasVipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoComprasVipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoComprasVipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
