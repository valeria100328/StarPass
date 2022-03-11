import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciertosCategoriaComponent } from './conciertos-categoria.component';

describe('ConciertosCategoriaComponent', () => {
  let component: ConciertosCategoriaComponent;
  let fixture: ComponentFixture<ConciertosCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConciertosCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConciertosCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
