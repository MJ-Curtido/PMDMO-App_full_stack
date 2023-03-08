import { TestBed } from '@angular/core/testing';

import { InterceptadorService } from './interceptador.service';

describe('InterceptadorService', () => {
  let service: InterceptadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
