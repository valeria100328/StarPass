import { TestBed } from '@angular/core/testing';

import { BoletaVipService } from './boleta-vip.service';

describe('BoletaVipService', () => {
  let service: BoletaVipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoletaVipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
