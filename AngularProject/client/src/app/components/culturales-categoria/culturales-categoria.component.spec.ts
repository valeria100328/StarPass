import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalesCategoriaComponent } from './culturales-categoria.component';

describe('CulturalesCategoriaComponent', () => {
  let component: CulturalesCategoriaComponent;
  let fixture: ComponentFixture<CulturalesCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulturalesCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturalesCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
