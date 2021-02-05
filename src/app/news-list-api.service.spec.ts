import { TestBed } from '@angular/core/testing';

import { NewsListAPIService } from './news-list-api.service';

describe('NewsListAPIService', () => {
  let service: NewsListAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsListAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
