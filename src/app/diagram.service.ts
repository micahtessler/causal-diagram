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

  drawSVG(div: HTMLDivElement): void {
    
    const draw = SVG(div);


    const diagramWidth = this.BEAT_WIDTH * this.patternService.selectedPattern.beats.length;
    const diagramHeight = this.BEAT_HEIGHT * (this.patternService.selectedPattern.jugglerCount + 1);

    draw.viewbox(0, 0, diagramWidth, diagramHeight);

    //create arrow heads
    var defs = draw.defs();
    var arrowMarker = this.initArrow(defs);


    var borderWest = draw.line(0, 0, 0, diagramHeight);
    borderWest.addClass("causal_border");
    borderWest.id("causal_border_west");


    var borderEast = draw.line(diagramWidth, 0, diagramWidth, diagramHeight);
    borderEast.addClass("causal_border");
    borderEast.id("causal_border_east");


    var borderNorth = draw.line(0, 1, diagramWidth, 1);
    borderNorth.addClass("causal_border");
    borderNorth.id("causal_border_north");


    var borderSouth = draw.line(0, diagramHeight, diagramWidth, diagramHeight);
    borderSouth.addClass("causal_border");
    borderSouth.id("causal_border_south");

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

  drawCircles(draw: any, beatNb: number, throws: Array<Throw>): void {

  }

  drawThrows(draw: any, beatNb: number, throws: Array<Throw>, arrowMarker: any): void {

  }
  initArrow(defs: any): any {
    return null;
  }
}
