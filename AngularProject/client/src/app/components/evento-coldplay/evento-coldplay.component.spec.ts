import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoColdplayComponent } from './evento-coldplay.component';

describe('EventoColdplayComponent', () => {
  let component: EventoColdplayComponent;
  let fixture: ComponentFixture<EventoColdplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoColdplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoColdplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
