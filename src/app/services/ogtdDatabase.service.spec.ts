import { TestBed, inject } from '@angular/core/testing';

import { OGTDDatabaseService } from './ogtdDatabase.service';

describe('ogtdDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OGTDDatabaseService]
    });
  });

  it('should be created', inject([OGTDDatabaseService], (service: OGTDDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
