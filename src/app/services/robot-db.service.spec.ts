import { TestBed } from '@angular/core/testing';

import { RobotDBService } from './robot-db.service';

describe('RobotDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RobotDBService = TestBed.get(RobotDBService);
    expect(service).toBeTruthy();
  });
});
