import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoDualipaComponent } from './evento-dualipa.component';

describe('EventoDualipaComponent', () => {
  let component: EventoDualipaComponent;
  let fixture: ComponentFixture<EventoDualipaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoDualipaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoDualipaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
