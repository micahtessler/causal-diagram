
import { PatternService } from './pattern.service';


import deathFromAbove from './patterns/deathFromAbove.json'
import earlyDouble from './patterns/earlyDouble.json'
import feed from './patterns/feed.json'
import fourCount from './patterns/fourCount.json'
import lateDouble from './patterns/lateDouble.json'
import leftCastle from './patterns/leftCastle.json'
import leftDoubles from './patterns/leftDoubles.json'
import rightCastle from './patterns/rightCastle.json'
import rightTriple from './patterns/rightTriple.json'
import selfTriple from './patterns/selfTriple.json'
import TenClubThreeCountTriangle from './patterns/TenClubThreeCountTriangle.json'
import threeCount from './patterns/threeCount.json'
import threeCountWith441 from './patterns/threeCountWith441.json'
import TriangleThing from './patterns/TriangleThing.json'
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
});
