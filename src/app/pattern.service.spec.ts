
import { PatternService } from './pattern.service';

import feed from './patterns/feed.json';
import fourCount from './patterns/fourCount.json';
import TenClubThreeCountTriangle from './patterns/TenClubThreeCountTriangle.json';

import { Pattern } from './model/Pattern';

describe('PatternService', () => {
  let service: PatternService;
  beforeEach(() => {
    service = new PatternService();
  }
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('clubCount', () => {
    it('should calculate the correct number of clubs in 4 count', () => {
      const count = service.clubCount(fourCount as Pattern);
      expect(count).toEqual(6);
    });
    it('should calculate the correct number of clubs in 4 count', () => {
      const count = service.clubCount(TenClubThreeCountTriangle as Pattern);
      expect(count).toEqual(10);
    });

    it('should calculate the correct number of clubs in 4 count', () => {
      const count = service.clubCount(feed as Pattern);
      expect(count).toEqual(9);
    });
  });

  describe('addPattern', () => {
    beforeEach(() => {
      service.patterns = [
        fourCount as Pattern
      ];
    });
    it('should add a new pattern', () => {
      const newPattern = <Pattern>TenClubThreeCountTriangle;
      service.addPattern(newPattern);
      expect(service.patterns.length).toEqual(2);
      expect(service.patterns[1]).toEqual(newPattern);
    });

    it('should replace an existing pattern', () => {
      service.patterns.push(feed as Pattern);
      const newPattern = <Pattern>TenClubThreeCountTriangle;
      newPattern.name = feed.name;
      service.addPattern(newPattern);
      expect(service.patterns.length).toEqual(2);
      expect(service.patterns[1]).toEqual(newPattern);
    });
  });
});
