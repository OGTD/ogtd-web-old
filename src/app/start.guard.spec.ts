import { TestBed, async, inject } from '@angular/core/testing';

import { StartGuard } from './start.guard';

// TODO make tests
xdescribe('StartGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StartGuard]
    });
  });

  it('should ...', inject([StartGuard], (guard: StartGuard) => {
    expect(guard).toBeTruthy();
  }));
});

