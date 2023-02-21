import { TestBed } from '@angular/core/testing';

import { IniciadoGuardGuard } from './iniciado-guard.guard';

describe('IniciadoGuardGuard', () => {
  let guard: IniciadoGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IniciadoGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
