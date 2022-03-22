import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalesCategoriaComponent } from './festivales-categoria.component';

describe('FestivalesCategoriaComponent', () => {
  let component: FestivalesCategoriaComponent;
  let fixture: ComponentFixture<FestivalesCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FestivalesCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivalesCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
