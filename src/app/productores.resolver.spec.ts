import { TestBed } from '@angular/core/testing';

import { ProductoresResolver } from './productores.resolver';

describe('ProductoresResolver', () => {
  let resolver: ProductoresResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductoresResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
