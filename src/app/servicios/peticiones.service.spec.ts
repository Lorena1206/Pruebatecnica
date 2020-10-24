import { TestBed } from '@angular/core/testing';

import { PeticionesService } from './peticiones.service';

describe('PeticionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeticionesService = TestBed.get(PeticionesService);
    expect(service).toBeTruthy();
  });
});
