import { TestBed } from '@angular/core/testing';

import { InfoUsuarioService } from './info-usuario.service';

describe('InfoUsuarioService', () => {
  let service: InfoUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
