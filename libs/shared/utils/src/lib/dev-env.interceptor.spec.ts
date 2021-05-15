import { TestBed } from '@angular/core/testing';

import { DevEnvInterceptor } from './dev-env.interceptor';

describe('DevEnvInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DevEnvInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: DevEnvInterceptor = TestBed.inject(DevEnvInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
