import { TestBed } from '@angular/core/testing';

import { CognitoUtilsService } from './cognito-utils.service';

describe('CognitoUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CognitoUtilsService = TestBed.get(CognitoUtilsService);
    expect(service).toBeTruthy();
  });
});
