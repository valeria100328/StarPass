import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeatroCategoriaComponent } from './teatro-categoria.component';

describe('TeatroCategoriaComponent', () => {
  let component: TeatroCategoriaComponent;
  let fixture: ComponentFixture<TeatroCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeatroCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeatroCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
