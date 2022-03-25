import { TestBed } from '@angular/core/testing';

import { BoletaGeneralService } from './boleta-general.service';

describe('BoletaGeneralService', () => {
  let service: BoletaGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoletaGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
