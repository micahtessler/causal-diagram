import { Injectable } from '@angular/core';
import { Pattern } from './model/Pattern';
import { Beat } from './model/Beat';
import { Throw } from './model/Throw';
import { PatternService } from './pattern.service';
import { Position } from './model/Position';
import SVG from 'svg.js';

@Injectable({
  providedIn: 'root'
})
export class DiagramService {

  constructor(private patternService: PatternService) { }

  readonly CIRCLE_RADIUS = 40;
  readonly X_MARGIN = 50;
  readonly BEAT_WIDTH = 100;
  readonly Y_MARGIN = 75;
  readonly BEAT_HEIGHT = 125;
  readonly CIRCLE_CORNER_ANGLE = Math.PI / 4;
  readonly CIRCLE_CORNER_X = (Math.round((Math.cos(this.CIRCLE_CORNER_ANGLE) * this.CIRCLE_RADIUS) * 100) / 100);
  readonly CIRCLE_CORNER_Y = (Math.round((Math.sin(this.CIRCLE_CORNER_ANGLE) * this.CIRCLE_RADIUS) * 100) / 100);

  drawSVG(div: HTMLDivElement): SVG.Doc {

    const draw = SVG(div);


    const diagramWidth = this.BEAT_WIDTH * this.patternService.selectedPattern.beats.length;
    const diagramHeight = this.BEAT_HEIGHT * (this.patternService.selectedPattern.jugglerCount + 1);

    draw.viewbox(0, 0, diagramWidth, diagramHeight);

    //create arrow heads
    const defs = draw.defs();
    const arrowMarker = this.initArrow(defs);


    const borderWest = draw.line(0, 0, 0, diagramHeight);
    borderWest.addClass("causal_border");
    borderWest.id("causal_border_west");


    const borderEast = draw.line(diagramWidth, 0, diagramWidth, diagramHeight);
    borderEast.addClass("causal_border");
    borderEast.id("causal_border_east");


    const borderNorth = draw.line(0, 1, diagramWidth, 1);
    borderNorth.addClass("causal_border");
    borderNorth.id("causal_border_north");


    const borderSouth = draw.line(0, diagramHeight, diagramWidth, diagramHeight);
    borderSouth.addClass("causal_border");
    borderSouth.id("causal_border_south");

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

  drawCircles(draw: SVG.Doc, beatNb: number, throws: Array<Throw>): void {
    throws.forEach((throwObj) => {
      const pos = this.getBeatPosition(beatNb, throwObj.sourceJuggler);
      //console.log("Drawing throw "+j+" at "+beatX+","+beatY);
      //create the circle
      const circle = draw.circle();

      circle.radius(this.CIRCLE_RADIUS);
      circle.cx(pos.x);
      circle.cy(pos.y);
      circle.id("causal_beat_" + beatNb + "_juggler_" + throwObj.sourceJuggler);
      circle.addClass("causal_beat_circle");

      const text = draw.text(throwObj.sourceHand);
      text.x(pos.x - 10);
      text.y(pos.y - 30);
      text.id("causal_beat_label_" + beatNb + "_juggler_" + throwObj.sourceJuggler);
      text.addClass("causal_beat_label")
      text.font({
        family: 'sans-serif'
        , size: "35"
      });
    });
  }

  drawThrows(draw: SVG.Doc, beatNb: number, throws: Array<Throw>, arrowMarker: any, borderEast: SVG.Line, borderWest: SVG.Line): void {
    for (let j = 0; j < throws.length; j++) {
      //TODO: need a better ID system for throws (multiplexes...)
      const id = "throw_" + beatNb + "_" + throws[j].sourceJuggler;

      if (this.isLineInDiagram(throws[j])) {
        this.drawThrowLine(draw, id, throws[j], beatNb, arrowMarker, borderEast, borderWest);
      } else {
        //this is a curve for a self throw (not 1 or 3)
        this.drawSelfCurve(draw, id, throws[j], beatNb, arrowMarker, borderEast, borderWest);
      }
    }
  }
  initArrow(defs: any): any {
    //TODO: not implemented
    return null;
  }

  isLineInDiagram(throwObj: Throw): boolean {
    //TODO: not implemented
    return true;
  }

  drawThrowLine(draw: SVG.Doc, id: string, throwObj: Throw, beatNb: number, arrowMarker: any, borderEast: SVG.Line, borderWest: SVG.Line): void {
    //TODO: not implemented
  }
  
  drawSelfCurve(draw: SVG.Doc, id: string, throwObj: Throw, beatNb: number, arrowMarker: any, borderEast: SVG.Line, borderWest: SVG.Line): void {
    //TODO: not implemented
  }
}
