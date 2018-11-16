import { Injectable } from '@angular/core';
import { Pattern } from './model/Pattern';

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

@Injectable({
  providedIn: 'root'
})
export class PatternService {

  public patterns = [
    deathFromAbove,
    earlyDouble,
    feed,
    fourCount,
    lateDouble,
    leftCastle,
    leftDoubles,
    rightCastle,
    rightTriple,
    selfTriple,
    TenClubThreeCountTriangle,
    threeCount,
    threeCountWith441,
    TriangleThing,
  ]

  public selectedPattern: Pattern = null;

  constructor() { }
}
