import { TestBed } from '@angular/core/testing';

import { ThumbnailCarouselService } from './thumbnail-carousel.service';

describe('ThumbnailCarouselService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThumbnailCarouselService = TestBed.get(ThumbnailCarouselService);
    expect(service).toBeTruthy();
  });
});
