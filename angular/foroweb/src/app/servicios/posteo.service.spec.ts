import { TestBed } from '@angular/core/testing';

import { PosteoService } from './posteo.service';

describe('PosteoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PosteoService = TestBed.get(PosteoService);
    expect(service).toBeTruthy();
  });
});
