import { Injectable } from '@angular/core';
import { Throw } from './model/Throw';
import { Pattern } from './model/Pattern';
import { PatternService } from './pattern.service';
import { Position } from './model/Position';
import { Subject } from 'rxjs';
import { SVG } from '@svgdotjs/svg.js'
import { Beat } from './model/Beat';


@Injectable({
  providedIn: 'root'
})
export class DiagramService {


  readonly CIRCLE_RADIUS = 40;
  readonly ZIP_RADIUS = 20;
  readonly ZIP_Y_OFFSET = 30;
  readonly ZIP_X_OFFSET = 0;
  readonly X_MARGIN = 50;
  readonly BEAT_WIDTH = 100;
  readonly Y_MARGIN = 75;
  readonly BEAT_HEIGHT = 125;
  readonly CIRCLE_CORNER_ANGLE = Math.PI / 4;
  readonly CIRCLE_CORNER_X = (Math.round((Math.cos(this.CIRCLE_CORNER_ANGLE) * this.CIRCLE_RADIUS) * 100) / 100);
  readonly CIRCLE_CORNER_Y = (Math.round((Math.sin(this.CIRCLE_CORNER_ANGLE) * this.CIRCLE_RADIUS) * 100) / 100);
  readonly ZIP_CIRCLE_CORNER_X = (Math.round((Math.sin(this.CIRCLE_CORNER_ANGLE) * this.ZIP_RADIUS) * 100) / 100);
  readonly ZIP_CIRCLE_CORNER_Y = (Math.round((Math.sin(this.CIRCLE_CORNER_ANGLE) * this.ZIP_RADIUS) * 100) / 100);

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
    this.div.innerHTML = '';
    if (this.patternService.selectedPattern == null) {
      return;
    }

    const draw = SVG().addTo(this.div);

    const beatsToDraw = this.patternService.selectedPattern.beats.concat(this.patternService.selectedPattern.beats);

    this.diagramWidth = this.BEAT_WIDTH * beatsToDraw.length;
    this.diagramHeight = this.BEAT_HEIGHT * (this.patternService.selectedPattern.jugglerCount + 1);

    draw.viewbox(0, 0, this.diagramWidth, this.diagramHeight);
    //clip the image
    let clip = draw.clip();
    clip.id('svgClip');
    const clipRec = draw.rect(this.diagramWidth, this.diagramHeight);
    clip.add(clipRec);
    clipRec.x(0);
    clipRec.y(0);
    draw.clipWith(clip);

    const bgRect = draw.rect(this.diagramWidth, this.diagramHeight);
    bgRect.addClass('causalBgRect');




    // create arrow heads
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


    beatsToDraw.forEach((beat, i) => {
      this.drawCircles(draw, i, beat.throws, arrowMarker);
    });
    beatsToDraw.forEach((beat, i) => {
      this.drawThrows(draw, i, beat.throws, arrowMarker, beatsToDraw);
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

  getZipReceivePosition(beatNb: number, jugglerNb: number): Position {
    return new Position(
      beatNb * this.BEAT_WIDTH + this.X_MARGIN - this.ZIP_X_OFFSET,
      jugglerNb * this.BEAT_HEIGHT + this.Y_MARGIN - this.ZIP_Y_OFFSET
    );
  }

  getZipThrowPosition(beatNb: number, jugglerNb: number): Position {
    return new Position(
      beatNb * this.BEAT_WIDTH + this.X_MARGIN + this.ZIP_X_OFFSET,
      jugglerNb * this.BEAT_HEIGHT + this.Y_MARGIN + this.ZIP_Y_OFFSET
    );
  }

  getCircleUpperLeft(center: Position, radius = this.CIRCLE_RADIUS): Position {
    const cornerAdj = (Math.round((Math.cos(this.CIRCLE_CORNER_ANGLE) * radius) * 100) / 100);
    return new Position(
      center.x - cornerAdj,
      center.y - cornerAdj
    );
  }
  getCircleUpperRight(center: Position, radius = this.CIRCLE_RADIUS): Position {
    const cornerAdj = (Math.round((Math.cos(this.CIRCLE_CORNER_ANGLE) * radius) * 100) / 100);
    return new Position(
      center.x + cornerAdj,
      center.y - cornerAdj
    );
  }
  getCircleLowerLeft(center: Position, radius = this.CIRCLE_RADIUS): Position {
    const cornerAdj = (Math.round((Math.cos(this.CIRCLE_CORNER_ANGLE) * radius) * 100) / 100);
    return new Position(
      center.x - cornerAdj,
      center.y + cornerAdj
    );
  }
  getCircleLowerRight(center: Position, radius = this.CIRCLE_RADIUS): Position {
    const cornerAdj = (Math.round((Math.cos(this.CIRCLE_CORNER_ANGLE) * radius) * 100) / 100);
    return new Position(
      center.x + cornerAdj,
      center.y + cornerAdj
    );
  }
  getCircleLeft(center: Position, radius = this.CIRCLE_RADIUS): Position {
    return new Position(
      center.x - radius,
      center.y
    );
  }
  getCircleRight(center: Position, radius = this.CIRCLE_RADIUS): Position {
    return new Position(
      center.x + radius,
      center.y
    );
  }
  getCircleTop(center: Position, radius = this.CIRCLE_RADIUS): Position {
    return new Position(
      center.x,
      center.y - radius
    );
  }
  getCircleBottom(center: Position, radius = this.CIRCLE_RADIUS): Position {
    return new Position(
      center.x,
      center.y + radius
    );
  }

  drawCircles(draw, beatNb: number, throws: Array<Throw>, arrowMarker: any): void {
    throws.forEach((throwObj) => {
      if (throwObj.zip) {
        this.drawZipCircles(draw, beatNb, throwObj, arrowMarker);
      } else {
        this.drawNormalCircle(draw, beatNb, throwObj);
      }
    });
  }

  private drawNormalCircle(draw, beatNb: number, throwObj: Throw): void {
    const pos = this.getBeatPosition(beatNb, throwObj.sourceJuggler);
    // create the circle
    const circle = draw.circle();

    circle.radius(this.CIRCLE_RADIUS);
    circle.cx(pos.x);
    circle.cy(pos.y);
    circle.id('causal_beat_' + beatNb + '_juggler_' + throwObj.sourceJuggler);
    circle.addClass('causal_beat_circle');

    const text = draw.text(throwObj.sourceHand);
    text.x(pos.x - this.getTextXOffset(throwObj.sourceHand));
    text.y(pos.y - 30);
    text.id('causal_beat_label_' + beatNb + '_juggler_' + throwObj.sourceJuggler);
    text.addClass('causal_beat_label');
    text.font({
      family: 'sans-serif'
      , size: '35'
    });
  }

  private getOtherHand(hand: string) {
    if (hand === 'R') {
      return 'L';
    } else {
      return 'R';
    }
  }

  private getTextXOffset(hand: string): number {
    if (hand === 'R') {
      return 12;
    } else {
      return 10;
    }
  }

  private drawZipCircles(draw, beatNb: number, throwObj: Throw, arrowMarker: any): void {
    const pos0 = this.getZipReceivePosition(beatNb, throwObj.sourceJuggler);

    // create the top (receiving circle)
    const circleTop = draw.circle();
    circleTop.radius(this.ZIP_RADIUS);
    circleTop.cx(pos0.x);
    circleTop.cy(pos0.y);
    circleTop.id('causal_beat_' + beatNb + '_juggler_' + throwObj.sourceJuggler + '_0');
    circleTop.addClass('causal_beat_circle');

    const textTop = draw.text(this.getOtherHand(throwObj.sourceHand));
    textTop.x(pos0.x - this.getTextXOffset(this.getOtherHand(throwObj.sourceHand)));
    textTop.y(pos0.y - 30);
    textTop.id('causal_beat_label_' + beatNb + '_juggler_' + throwObj.sourceJuggler + '_0');
    textTop.addClass('causal_beat_label');
    textTop.font({
      family: 'sans-serif'
      , size: '35'
    });

    const pos1 = this.getZipThrowPosition(beatNb, throwObj.sourceJuggler);
    // create the bottom (receiving circle)
    const circleBottom = draw.circle();
    circleBottom.radius(this.ZIP_RADIUS);
    circleBottom.cx(pos1.x);
    circleBottom.cy(pos1.y);
    circleBottom.id('causal_beat_' + beatNb + '_juggler_' + throwObj.sourceJuggler + '_1');
    circleBottom.addClass('causal_beat_circle');

    const textBottom = draw.text(throwObj.sourceHand);
    textBottom.x(pos1.x - this.getTextXOffset(throwObj.sourceHand));
    textBottom.y(pos1.y - 30);
    textBottom.id('causal_beat_label_' + beatNb + '_juggler_' + throwObj.sourceJuggler + '_1');
    textBottom.addClass('causal_beat_label');
    textBottom.font({
      family: 'sans-serif'
      , size: '35'
    });

    // zip line between the circles
    const startPos = this.getCircleBottom(pos0, this.ZIP_RADIUS);
    const endPos = this.getCircleTop(pos1, this.ZIP_RADIUS);
    const line = draw.line(startPos.x, startPos.y, endPos.x, endPos.y);
    line.addClass('causal_pass_line');
    line.marker('end', arrowMarker);
  }

  drawThrows(draw, beatNb: number, throws: Array<Throw>, arrowMarker: any, beatsToDraw: Array<Beat>): void {
    for (let j = 0; j < throws.length; j++) {
      // TODO: need a better ID system for throws (multiplexes...)
      const id = 'throw_' + beatNb + '_' + throws[j].sourceJuggler;
      const targetThrow = this.getTargetThrow(beatNb, throws[j], beatsToDraw);
      if (this.isLineInDiagram(throws[j])) {
        this.drawThrowLine(draw, id, throws[j], beatNb, arrowMarker,  targetThrow);
      } else {
        // this is a curve for a self throw (not 1 or 3)
        this.drawSelfCurve(draw, id, throws[j], beatNb, arrowMarker, targetThrow);
      }
    }
  }

  getTargetThrow(startBeat: number, sourceThrow: Throw, beats: Array<Beat>): Throw {
    let targetBeatNumber = (startBeat + sourceThrow.throwHeight - 2);

    const targetBeat = beats[targetBeatNumber % beats.length].throws.find((t) => {
      return (t.sourceJuggler === sourceThrow.targetJuggler);
    });
    return targetBeat;
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
    if (throwObj.sourceJuggler !== throwObj.targetJuggler) {
      return true;
    } else {
      const beatDiff = (throwObj.throwHeight - 2);
      return (beatDiff === 1);
    }
  }

  drawThrowLine(draw, id: string, throwObj: Throw, beatNb: number, arrowMarker: any, targetThrow: Throw): void {
    let beat1Pos = this.getBeatPosition(beatNb, throwObj.sourceJuggler);
    let beat1Radius = this.CIRCLE_RADIUS;
    if (throwObj.zip) {
      beat1Pos = this.getZipThrowPosition(beatNb, throwObj.sourceJuggler);
      beat1Radius = this.ZIP_RADIUS;
    }

    const beatDiff = this.getBeatDiff(throwObj);
    const beat2Nb = beatNb + beatDiff;
    let beat2Pos = this.getBeatPosition(beat2Nb, throwObj.targetJuggler);
    let beat2Radius = this.CIRCLE_RADIUS;
    if (targetThrow.zip) {
      beat2Pos = this.getZipReceivePosition(beat2Nb, throwObj.targetJuggler);
      beat2Radius = this.ZIP_RADIUS;
    }
    let straightThrow = false;
    let upThrow = false;
    let startPos;
    let endPos;

    if (throwObj.sourceJuggler === throwObj.targetJuggler) {
      straightThrow = true;
      startPos = this.getCircleRight(beat1Pos, beat1Radius);
      endPos = this.getCircleLeft(beat2Pos, beat2Radius);
    } else {
      // this must be a positive height
      if (throwObj.sourceJuggler > throwObj.targetJuggler) {
        upThrow = true;
        startPos = this.getCircleUpperRight(beat1Pos, beat1Radius);
        endPos = this.getCircleLowerLeft(beat2Pos, beat2Radius);
      } else {
        startPos = this.getCircleLowerRight(beat1Pos, beat1Radius);
        endPos = this.getCircleUpperLeft(beat2Pos, beat2Radius);
      }
    }
    const line = draw.line(startPos.x, startPos.y, endPos.x, endPos.y);
    line.addClass('causal_pass_line');
    line.id(id);
    if (endPos.x < this.diagramWidth) {
      line.marker('end', arrowMarker);
    }

  }

  drawSelfCurve(draw, id: string, throwObj: Throw, beatNb: number, arrowMarker: any, targetThrow: Throw): void {
    let beat1Pos = this.getBeatPosition(beatNb, throwObj.sourceJuggler);
    let beat1Radius = this.CIRCLE_RADIUS;
    if (throwObj.zip) {
      beat1Pos = this.getZipThrowPosition(beatNb, throwObj.sourceJuggler);
      beat1Radius = this.ZIP_RADIUS;
    }
    const beatDiff = this.getBeatDiff(throwObj);
    const beat2Nb = beatNb + beatDiff;
    let beat2Pos = this.getBeatPosition(beat2Nb, throwObj.targetJuggler);
    let beat2Radius = this.CIRCLE_RADIUS;
    if (targetThrow.zip) {
      beat2Pos = this.getZipReceivePosition(beat2Nb, throwObj.targetJuggler);
      beat2Radius = this.ZIP_RADIUS;
    }

    let startPos;
    let endPos;
    let radiusX;
    let radiusY;
    const rotation = 0;
    const largeArcFlag = 0;
    const sweepFlag = 1;

    if (beatDiff === -2) {
      // backwards throw
      startPos = this.getCircleLowerLeft(beat1Pos, beat1Radius);
      endPos = this.getCircleLowerRight(beat2Pos, beat2Radius);
      radiusX = 100;
      radiusY = 100;
    } else if (beatDiff === -1) {
      startPos = this.getCircleBottom(beat1Pos, beat1Radius);
      endPos = this.getCircleBottom(beat2Pos, beat2Radius);
      radiusX = 100;
      radiusY = 100;
    } else if (beatDiff === 0) {
      startPos = this.getCircleUpperLeft(beat1Pos, beat1Radius);
      endPos = this.getCircleUpperRight(beat2Pos, beat2Radius);
      radiusX = 20;
      radiusY = 30;
    } else {
      startPos = this.getCircleUpperRight(beat1Pos, beat1Radius);
      endPos = this.getCircleUpperLeft(beat2Pos, beat2Radius);
      radiusX = 100 * (beatDiff - 1);
      radiusY = 100 * (beatDiff - 1);
    }

    let pathStr = 'm ' + startPos.x + ' ' + startPos.y + ' A ' + radiusX + ' ' +
      radiusY + ' ' + rotation + ' ' + largeArcFlag + ' ' + sweepFlag + ' ' + endPos.x + ' ' + endPos.y;
    const path = draw.path(pathStr);
    path.addClass('causal_pass_line');
    path.fill('transparent');
    path.id(id);
    if (endPos.x > 0 && endPos.x < this.diagramWidth) {
      path.marker('end', arrowMarker);
    }
  }
}
