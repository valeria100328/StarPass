import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoRataBlancaComponent } from './evento-rata-blanca.component';

describe('EventoRataBlancaComponent', () => {
  let component: EventoRataBlancaComponent;
  let fixture: ComponentFixture<EventoRataBlancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoRataBlancaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoRataBlancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
