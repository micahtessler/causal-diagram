import { Injectable } from '@angular/core';
import { Throw } from './model/Throw';
import { PatternService } from './pattern.service';
import { Position } from './model/Position';
declare const SVG:any; //SVG inmported in angular.json
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiagramService {


  readonly CIRCLE_RADIUS = 40;
  readonly X_MARGIN = 50;
  readonly BEAT_WIDTH = 100;
  readonly Y_MARGIN = 75;
  readonly BEAT_HEIGHT = 125;
  readonly CIRCLE_CORNER_ANGLE = Math.PI / 4;
  readonly CIRCLE_CORNER_X = (Math.round((Math.cos(this.CIRCLE_CORNER_ANGLE) * this.CIRCLE_RADIUS) * 100) / 100);
  readonly CIRCLE_CORNER_Y = (Math.round((Math.sin(this.CIRCLE_CORNER_ANGLE) * this.CIRCLE_RADIUS) * 100) / 100);

  diagramWidth: number;
  diagramHeight: number;
  public div: HTMLDivElement;

  public divObs: Subject<HTMLDivElement> = new Subject();
  constructor(private patternService: PatternService) {
    this.divObs.subscribe((div) => {
      this.div = div;
      this.drawSVG();
    });
  }

  drawSVG() {
    if (this.div == null) {
      return;
    }
    this.div.innerHTML='';
    if(this.patternService.selectedPattern == null) {
      return;
    }

    const draw = SVG(this.div);


    this.diagramWidth = this.BEAT_WIDTH * this.patternService.selectedPattern.beats.length;
    this.diagramHeight = this.BEAT_HEIGHT * (this.patternService.selectedPattern.jugglerCount + 1);

    draw.viewbox(0, 0, this.diagramWidth, this.diagramHeight);
    const bgRect = draw.rect(this.diagramWidth,  this.diagramHeight);
    bgRect.addClass('causalBgRect');


    //create arrow heads
    const defs = draw.defs();
    const arrowMarker = this.initArrow(defs);


    const borderWest = draw.line(0, 0, 0, this.diagramHeight);
    borderWest.addClass('causal_border');
    borderWest.id('causal_border_west');


    const borderEast = draw.line(this.diagramWidth, 0, this.diagramWidth, this.diagramHeight);
    borderEast.addClass('causal_border');
    borderEast.id('causal_border_east');


    const borderNorth = draw.line(0, 1, this.diagramWidth, 1);
    borderNorth.addClass('causal_border');
    borderNorth.id('causal_border_north');


    const borderSouth = draw.line(0, this.diagramHeight, this.diagramWidth, this.diagramHeight);
    borderSouth.addClass('causal_border');
    borderSouth.id('causal_border_south');

    this.patternService.selectedPattern.beats.forEach((beat, i) => {
      this.drawCircles(draw, i, beat.throws);
    });
    this.patternService.selectedPattern.beats.forEach((beat, i) => {
      this.drawThrows(draw, i, beat.throws, arrowMarker, borderEast, borderWest);
    });


    return draw;
  }

  getBeatDiff(throwObj: Throw): number {
    return throwObj.throwHeight - 2;
  }

  getBeatPosition(beatNb: number, jugglerNb: number): Position {
    return new Position(
      beatNb * this.BEAT_WIDTH + this.X_MARGIN,
      jugglerNb * this.BEAT_HEIGHT + this.Y_MARGIN
    );
  }

  getCircleUpperLeft(center: Position): Position {
    return new Position(
      center.x - this.CIRCLE_CORNER_X,
      center.y - this.CIRCLE_CORNER_Y
    );
  }
  getCircleUpperRight(center: Position): Position {
    return new Position(
      center.x + this.CIRCLE_CORNER_X,
      center.y - this.CIRCLE_CORNER_Y
    );
  }
  getCircleLowerLeft(center: Position): Position {
    return new Position(
      center.x - this.CIRCLE_CORNER_X,
      center.y + this.CIRCLE_CORNER_Y
    );
  }
  getCircleLowerRight(center: Position): Position {
    return new Position(
      center.x + this.CIRCLE_CORNER_X,
      center.y + this.CIRCLE_CORNER_Y
    );
  }
  getCircleLeft(center: Position): Position {
    return new Position(
      center.x - this.CIRCLE_RADIUS,
      center.y
    );
  }
  getCircleRight(center: Position): Position {
    return new Position(
      center.x + this.CIRCLE_RADIUS,
      center.y
    );
  }
  getCircleTop(center: Position): Position {
    return new Position(
      center.x,
      center.y - this.CIRCLE_RADIUS
    );
  }
  getCircleBottom(center: Position): Position {
    return new Position(
      center.x,
      center.y + this.CIRCLE_RADIUS
    );
  }

  drawCircles(draw, beatNb: number, throws: Array<Throw>): void {
    throws.forEach((throwObj) => {
      const pos = this.getBeatPosition(beatNb, throwObj.sourceJuggler);
      //create the circle
      const circle = draw.circle();

      circle.radius(this.CIRCLE_RADIUS);
      circle.cx(pos.x);
      circle.cy(pos.y);
      circle.id('causal_beat_' + beatNb + '_juggler_' + throwObj.sourceJuggler);
      circle.addClass('causal_beat_circle');

      const text = draw.text(throwObj.sourceHand);
      text.x(pos.x - 10);
      text.y(pos.y - 30);
      text.id('causal_beat_label_' + beatNb + '_juggler_' + throwObj.sourceJuggler);
      text.addClass('causal_beat_label')
      text.font({
        family: 'sans-serif'
        , size: '35'
      });
    });
  }

  drawThrows(draw, beatNb: number, throws: Array<Throw>, arrowMarker: any, borderEast, borderWest): void {
    for (let j = 0; j < throws.length; j++) {
      //TODO: need a better ID system for throws (multiplexes...)
      const id = 'throw_' + beatNb + '_' + throws[j].sourceJuggler;

      if (this.isLineInDiagram(throws[j])) {
        this.drawThrowLine(draw, id, throws[j], beatNb, arrowMarker, borderEast, borderWest);
      } else {
        //this is a curve for a self throw (not 1 or 3)
        this.drawSelfCurve(draw, id, throws[j], beatNb, arrowMarker, borderEast, borderWest);
      }
    }
  }
  initArrow(defs) {
    const arrowMarker = defs.marker(5, 5, function (add) {
      const path = add.path('M0,0 L0,3 L4.5,1.5 z');
      path.addClass('causal_arrow');
    });
    arrowMarker.ref(0, 1.5);
    arrowMarker.id('arrowMarker');
    return arrowMarker;
  }

  isLineInDiagram(throwObj: Throw): boolean {
    if (throwObj.sourceJuggler != throwObj.targetJuggler) {
      return true;
    } else {
      const beatDiff = (throwObj.throwHeight - 2);
      return (beatDiff === 1);
    }
  }

  drawThrowLine(draw, id: string, throwObj: Throw, beatNb: number, arrowMarker: any, borderEast, borderWest): void {
    const beat1Pos = this.getBeatPosition(beatNb, throwObj.sourceJuggler);

    const beatDiff = this.getBeatDiff(throwObj);
    const beat2Nb = beatNb + beatDiff;
    const beat2Pos = this.getBeatPosition(beat2Nb, throwObj.targetJuggler);
    let straightThrow = false;
    let upThrow = false;
    let startPos;
    let endPos;

    if (throwObj.sourceJuggler === throwObj.targetJuggler) {
      straightThrow = true;
      //if (beatDiff === 1) {
      startPos = this.getCircleRight(beat1Pos);
      endPos = this.getCircleLeft(beat2Pos);
    } else {
      //this must be a positive height
      if (throwObj.sourceJuggler > throwObj.targetJuggler) {
        upThrow = true;
        startPos = this.getCircleUpperRight(beat1Pos);
        endPos = this.getCircleLowerLeft(beat2Pos);
      } else {
        startPos = this.getCircleLowerRight(beat1Pos);
        endPos = this.getCircleUpperLeft(beat2Pos);
      }
    }
    const line = draw.line(startPos.x, startPos.y, endPos.x, endPos.y);
    line.addClass('causal_pass_line');
    line.id(id);
    line.marker('end', arrowMarker);

    const intersectionPoint = this.getLineIntersection(line, borderEast);

    if (intersectionPoint != null) {
      //wrapping around right diagram edge

      //remove the marker
      line.marker('end', 0, 0, () => { });
      line.plot(startPos.x, startPos.y, intersectionPoint.x, intersectionPoint.y);

      //create a new line starting from the edge of the screen.
      //Beat2Nb is negative, so add beats
      const newBeat2Nb = beat2Nb % this.patternService.selectedPattern.beats.length;
      const newBeat2Pos = this.getBeatPosition(newBeat2Nb, throwObj.targetJuggler);
      if (straightThrow) {
        endPos = this.getCircleLeft(newBeat2Pos);
      } else if (upThrow) {
        endPos = this.getCircleLowerLeft(newBeat2Pos);
      } else {
        endPos = this.getCircleUpperLeft(newBeat2Pos);
      }
      const newId = id + '_A';
      const line2 = draw.line(0, intersectionPoint.y, endPos.x, endPos.y);
      line2.addClass('causal_pass_line');
      line2.id(newId);
      line2.marker('end', arrowMarker);
    }
  }

  drawSelfCurve(draw, id: string, throwObj: Throw, beatNb: number, arrowMarker: any, borderEast, borderWest): void {
    const beat1Pos = this.getBeatPosition(beatNb, throwObj.sourceJuggler);
    const beatDiff = this.getBeatDiff(throwObj);
    const beat2Nb = beatNb + beatDiff;
    const beat2Pos = this.getBeatPosition(beat2Nb, throwObj.targetJuggler);

    let startPos;
    let endPos;
    let radiusX;
    let radiusY;
    const rotation = 0;
    const largeArcFlag = 0;
    const sweepFlag = 1;

    if (beatDiff === -2) {
      //backwards
      startPos = this.getCircleLowerLeft(beat1Pos);
      endPos = this.getCircleLowerRight(beat2Pos);
      radiusX = 100;
      radiusY = 100;
    } else if (beatDiff === -1) {
      startPos = this.getCircleBottom(beat1Pos);
      endPos = this.getCircleBottom(beat2Pos);
      radiusX = 100;
      radiusY = 100;
    } else if (beatDiff === 0) {
      startPos = this.getCircleUpperLeft(beat1Pos);
      endPos = this.getCircleUpperRight(beat2Pos);
      radiusX = 20;
      radiusY = 30;
    } else {
      startPos = this.getCircleUpperRight(beat1Pos);
      endPos = this.getCircleUpperLeft(beat2Pos);
      radiusX = 100 * (beatDiff - 1);
      radiusY = 100 * (beatDiff - 1);
    }

    let pathStr = 'm ' + startPos.x + ' ' + startPos.y + ' A ' + radiusX + ' ' + radiusY + ' ' + rotation + ' ' + largeArcFlag + ' ' + sweepFlag + ' ' + endPos.x + ' ' + endPos.y;
    const path = draw.path(pathStr);
    path.addClass('causal_pass_line');
    path.fill('transparent');
    path.id(id);
    path.marker('end', arrowMarker);
    let intersectionPoint = this.getLineIntersection(path, borderEast);

    if (intersectionPoint != null) {
      //wrapping around right diagram edge
      //remove the marker
      path.marker('end', 0, 0, () => { });

      pathStr = 'm ' + startPos.x + ' ' + startPos.y + ' A ' + radiusX + ' ' + radiusY + ' ' + rotation + ' ' + largeArcFlag + ' ' + sweepFlag + ' ' + intersectionPoint.x + ' ' + intersectionPoint.y;
      path.plot(pathStr);

      const newBeat2Nb = beat2Nb % this.patternService.selectedPattern.beats.length;
      const newBeat2Pos = this.getBeatPosition(newBeat2Nb, throwObj.targetJuggler);
      //has to be forwards
      endPos = this.getCircleUpperLeft(newBeat2Pos);
      const newId = id + '_A';
      pathStr = 'm ' + 0 + ' ' + intersectionPoint.y + ' A ' + radiusX + ' ' + radiusY + ' ' + rotation + ' ' + largeArcFlag + ' ' + sweepFlag + ' ' + endPos.x + ' ' + endPos.y;
      const path2 = draw.path(pathStr);
      path2.addClass('causal_pass_line');
      path2.fill('transparent');
      path2.id(newId);
      path2.marker('end', arrowMarker);
    }

    intersectionPoint = this.getLineIntersection(path, borderWest);

    if (intersectionPoint != null) {
      //wrapping around right diagram edge
      //remove the marker
      path.marker('end', 0, 0, () => { });

      pathStr = 'm ' + startPos.x + ' ' + startPos.y + ' A ' + radiusX + ' ' + radiusY + ' ' + rotation + ' ' + largeArcFlag + ' ' + sweepFlag + ' ' + intersectionPoint.x + ' ' + intersectionPoint.y;
      path.plot(pathStr);

      //create a new line starting from the edge of the screen.
      let newBeat2Nb = beat2Nb;
      while (newBeat2Nb < 0) {
        newBeat2Nb += this.patternService.selectedPattern.beats.length;
      }
      const newBeat2Pos = this.getBeatPosition(newBeat2Nb, throwObj.targetJuggler);
      //has to be backwards
      endPos = this.getCircleLowerRight(newBeat2Pos);
      const newId = id + '_A';
      pathStr = 'm ' + this.diagramWidth + ' ' + intersectionPoint.y + ' A ' + radiusX + ' ' + radiusY + ' ' + rotation + ' ' + largeArcFlag + ' ' + sweepFlag + ' ' + endPos.x + ' ' + endPos.y;
      const path2 = draw.path(pathStr);
      path2.addClass('causal_pass_line');
      path2.fill('transparent');
      path2.id(newId);
      path2.marker('end', arrowMarker);
    }

  }

  getLineIntersection(lineOrPath: any, line) {
    if (line == null) return null;
    const intersectionPoints = lineOrPath.intersectsLine(line);
    if (intersectionPoints != null) {
      if (intersectionPoints.length != null) {
        if (intersectionPoints.length > 0) {
          return intersectionPoints[0];
        } else {
          return null;
        }
      } else {
        return intersectionPoints;
      }
    } else {
      return null;
    }
  }
}
