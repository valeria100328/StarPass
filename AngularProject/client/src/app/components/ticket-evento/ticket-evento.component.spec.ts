import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketEventoComponent } from './ticket-evento.component';

describe('TicketEventoComponent', () => {
  let component: TicketEventoComponent;
  let fixture: ComponentFixture<TicketEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketEventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
