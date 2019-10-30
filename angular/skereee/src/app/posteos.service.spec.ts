import { TestBed } from '@angular/core/testing';

import { PosteosService } from './posteos.service';

describe('PosteosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PosteosService = TestBed.get(PosteosService);
    expect(service).toBeTruthy();
  });
});
