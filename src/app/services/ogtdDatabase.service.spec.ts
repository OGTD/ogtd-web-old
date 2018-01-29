import { TestBed, inject } from '@angular/core/testing';

import { OGTDDexieService } from './ogtdDatabase.service';

describe('ogtdDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OGTDDexieService]
    });
  });

  it('should be created', inject([OGTDDexieService], (service: OGTDDexieService) => {
    expect(service).toBeTruthy();
  }));
});
