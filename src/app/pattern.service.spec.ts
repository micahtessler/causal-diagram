
import { PatternService } from './pattern.service';

describe('PatternService', () => {
  let service: PatternService;
  beforeEach(() => {
    service = new PatternService();
  }
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
