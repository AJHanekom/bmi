import { TestBed } from '@angular/core/testing';

import { WizzardService } from './wizzard.service';

describe('WizzardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WizzardService = TestBed.get(WizzardService);
    expect(service).toBeTruthy();
  });
});
