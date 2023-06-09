import { TestBed } from '@angular/core/testing';

import { ContentCardService } from './content-card.service';

describe('ContentCardService', () => {
  let service: ContentCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
