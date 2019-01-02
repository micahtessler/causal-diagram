import { DiagramService } from './diagram.service';

import { PatternService } from './pattern.service';
import fourCount from './patterns/fourCount.json';
import { Pattern } from './model/Pattern';
import { Throw } from './model/Throw';
import { tick } from '@angular/core/src/render3';


describe('DiagramService', () => {   
  let service: DiagramService;
  let patternService: PatternService;
  let div: HTMLDivElement;
  let draw;

  beforeEach(() => {
    patternService = {
      patterns: [],
      selectedPattern: fourCount as Pattern,
      clubCount: jasmine.createSpy()
    };
    service = new DiagramService(patternService);
  });

  it('should be created', () => {

    expect(service).toBeTruthy();
  });

  describe('divObs', () => {
    it("should set the div and draw the SVG", () => {
      spyOn(service, 'drawSVG');
      let div = document.createElement('div');
      div.setAttribute('id', 'foobar');
      service.divObs.observers[0].next(div);
    });
  })

  describe('beatDiff', function () {
    let throwObj: Throw;

    beforeEach(function () {
      throwObj = {
        sourceJuggler: 0,
        sourceHand: 'R',
        targetJuggler: 0,
        throwHeight: 3
      };
    });

    describe('drawSVG', () => {
      let pattern: Pattern;
      let totalBeats: number;
      let totalJugglers: number;


      beforeEach(async () => {

        totalBeats = 3;
        totalJugglers = 3;

        pattern = {
          name: 'Test',
          jugglerCount: totalJugglers,
          beats: []
        };
        for (let i = 0; i < totalBeats; i++) {
          let beat = {
            throws: []
          };
          pattern.beats.push(beat);
          for (let j = 0; j < totalJugglers; j++) {
            let throwObj = {
              sourceJuggler: j,
              sourceHand: 'R',
              targetJuggler: j,
              throwHeight: 3
            };
            beat.throws.push(throwObj);
          }
        }
        patternService.selectedPattern = pattern;

        //clear the page...
        div = document.createElement('div');
        //service.div = div;
        service.divObs.next(div);
        service.divObs.toPromise();

        draw = null;
        spyOn(service, 'drawCircles');
        spyOn(service, 'drawThrows');
        spyOn(service, 'initArrow').and.returnValue(
          {
            id: 'fooArrow'
          }
        );
      });

      it('should draw the diagram correctly', function () {
        draw = service.drawSVG();

        let mySvg = div.firstChild as SVGElement;

        let viewWidth = service.BEAT_WIDTH * totalBeats;
        let viewHeight = service.BEAT_HEIGHT * (totalJugglers + 1);

        expect(mySvg.getAttribute('viewBox')).toEqual('0 0 ' + viewWidth + ' ' + viewHeight);

        expect(service.drawCircles['calls'].count()).toEqual(totalBeats);
        for (let i = 0; i < totalBeats; i++) {
          expect(service.drawCircles['calls'].argsFor(i)).toEqual(
            [
              draw, i, pattern.beats[i].throws
            ]
          );

        }
        expect(service.drawThrows['calls'].count()).toEqual(totalBeats);
        for (let i = 0; i < totalBeats; i++) {
          expect(service.drawThrows['calls'].argsFor(i).slice(0, 4)).toEqual(
            [
              draw, i, pattern.beats[i].throws,
              { id: 'fooArrow' }
            ]
          );

        }

      });
    });

    it('should calculate beat diff', function () {
      for (let i = 0; i < 20; i++) {
        throwObj.throwHeight = i;
        let diff = service.getBeatDiff(throwObj);
        expect(diff).toEqual(i - 2);
      }
    });
  });

  describe('getBeatPosition', () => {
    let circle_corner_adj;
    let totalBeats;
    let totalJugglers;
    beforeEach(function () {
      totalBeats = 20;
      totalJugglers = 20;
      circle_corner_adj = (Math.round((Math.cos(service.CIRCLE_CORNER_ANGLE) * service.CIRCLE_RADIUS) * 100) / 100);
    });
    it('should calculate beat position', () => {
      for (let beat = 0; beat < 20; beat++) {
        for (let juggler = 0; juggler < 20; juggler++) {
          let pos = service.getBeatPosition(beat, juggler);
          expect(pos.x).toEqual(beat * 100 + 50);
          expect(pos.y).toEqual(juggler * 125 + 75);
        }
      }
    });

    describe('Circle edge positions', () => {
      it('should  calculate upper left', function () {
        for (let beat = 0; beat < totalBeats; beat++) {
          for (let juggler = 0; juggler < totalJugglers; juggler++) {
            let pos = service.getBeatPosition(beat, juggler);
            let posX = service.getCircleUpperLeft(pos);

            expect(posX.x).toEqual(beat * 100 + 50 - circle_corner_adj);
            expect(posX.y).toEqual(juggler * 125 + 75 - circle_corner_adj);
          }
        }
      });

      it('should  calculate upper right', function () {
        for (let beat = 0; beat < totalBeats; beat++) {
          for (let juggler = 0; juggler < totalJugglers; juggler++) {
            let pos = service.getBeatPosition(beat, juggler);
            let posX = service.getCircleUpperRight(pos);
            expect(posX.x).toEqual(beat * 100 + 50 + circle_corner_adj);
            expect(posX.y).toEqual(juggler * 125 + 75 - circle_corner_adj);
          }
        }
      });

      it('should  calculate lower left', function () {
        for (let beat = 0; beat < totalBeats; beat++) {
          for (let juggler = 0; juggler < totalJugglers; juggler++) {
            let pos = service.getBeatPosition(beat, juggler);
            let posX = service.getCircleLowerLeft(pos);
            expect(posX.x).toEqual(beat * 100 + 50 - circle_corner_adj);
            expect(posX.y).toEqual(juggler * 125 + 75 + circle_corner_adj);
          }
        }
      });

      it('should  calculate lower right', function () {
        for (let beat = 0; beat < totalBeats; beat++) {
          for (let juggler = 0; juggler < totalJugglers; juggler++) {
            let pos = service.getBeatPosition(beat, juggler);
            let posX = service.getCircleLowerRight(pos);
            expect(posX.x).toEqual(beat * 100 + 50 + circle_corner_adj);
            expect(posX.y).toEqual(juggler * 125 + 75 + circle_corner_adj);
          }
        }
      });

      it('should  calculate right', function () {
        for (let beat = 0; beat < totalBeats; beat++) {
          for (let juggler = 0; juggler < totalJugglers; juggler++) {
            let pos = service.getBeatPosition(beat, juggler);
            let posX = service.getCircleRight(pos);
            expect(posX.x).toEqual(beat * 100 + 50 + service.CIRCLE_RADIUS);
            expect(posX.y).toEqual(juggler * 125 + 75);
          }
        }
      });

      it('should  calculate left', function () {
        for (let beat = 0; beat < totalBeats; beat++) {
          for (let juggler = 0; juggler < totalJugglers; juggler++) {
            let pos = service.getBeatPosition(beat, juggler);
            let posX = service.getCircleLeft(pos);
            expect(posX.x).toEqual(beat * 100 + 50 - service.CIRCLE_RADIUS);
            expect(posX.y).toEqual(juggler * 125 + 75);
          }
        }
      });

      it('should  calculate top ', function () {
        for (let beat = 0; beat < totalBeats; beat++) {
          for (let juggler = 0; juggler < totalJugglers; juggler++) {
            let pos = service.getBeatPosition(beat, juggler);
            let posX = service.getCircleTop(pos);
            expect(posX.x).toEqual(beat * 100 + 50);
            expect(posX.y).toEqual(juggler * 125 + 75 - service.CIRCLE_RADIUS);
          }
        }
      });

      it('should  calculate bottom ', function () {
        for (let beat = 0; beat < totalBeats; beat++) {
          for (let juggler = 0; juggler < totalJugglers; juggler++) {
            let pos = service.getBeatPosition(beat, juggler);
            let posX = service.getCircleBottom(pos);
            expect(posX.x).toEqual(beat * 100 + 50);
            expect(posX.y).toEqual(juggler * 125 + 75 + service.CIRCLE_RADIUS);
          }
        }
      });
    });
  });

  describe('drawCircles', function () {
    let throws;
    let totalBeats;
    let totalJugglers;
    let drawSpy;
    let circleSpy;
    let textSpy;
    beforeEach(function () {
      totalBeats = 3;
      totalJugglers = 3;
      throws = [];
      for (let i = 0; i < totalJugglers; i++) {
        const throwObj = {
          sourceJuggler: i,
          sourceHand: (i % 2 == 0) ? 'R' : 'L',
          targetJuggler: i,
          throwHeight: 3
        };
        throws.push(throwObj);
      }
      drawSpy = {};
      circleSpy = {};
      textSpy = {};
      drawSpy.circle = jasmine.createSpy().and.returnValue(circleSpy);
      drawSpy.text = jasmine.createSpy().and.returnValue(textSpy);
      circleSpy.radius = jasmine.createSpy();
      circleSpy.cx = jasmine.createSpy();
      circleSpy.cy = jasmine.createSpy();
      circleSpy.id = jasmine.createSpy();
      circleSpy.addClass = jasmine.createSpy();
      textSpy.x = jasmine.createSpy();
      textSpy.y = jasmine.createSpy();
      textSpy.id = jasmine.createSpy();
      textSpy.addClass = jasmine.createSpy();
      textSpy.font = jasmine.createSpy();
    });

    it('shouldDrawCirlesCorrectly', function () {
      for (let beat = 0; beat < totalBeats; beat++) {
        service.drawCircles(drawSpy, beat, throws);
      }
      expect(drawSpy.circle.calls.count()).toEqual(totalBeats * totalJugglers);
      for (let beat = 0; beat < totalBeats; beat++) {
        for (let juggler = 0; juggler < totalJugglers; juggler++) {
          const pos = service.getBeatPosition(beat, juggler);
          expect(circleSpy.radius.calls.argsFor(beat * totalJugglers + juggler)).
            toEqual([service.CIRCLE_RADIUS]);
          expect(circleSpy.cx.calls.argsFor(beat * totalJugglers + juggler)).
            toEqual([pos.x]);
          expect(circleSpy.cy.calls.argsFor(beat * totalJugglers + juggler)).
            toEqual([pos.y]);
          expect(circleSpy.id.calls.argsFor(beat * totalJugglers + juggler)).
            toEqual(['causal_beat_' + beat + '_juggler_' + juggler]);
          expect(circleSpy.addClass.calls.argsFor(beat * totalJugglers + juggler)).
            toEqual(['causal_beat_circle']);
        }
      }

    });

    it('shouldDrawTextCorrectly', function () {
      for (let beat = 0; beat < totalBeats; beat++) {
        service.drawCircles(drawSpy, beat, throws);
      }
      expect(drawSpy.text.calls.count()).toEqual(totalBeats * totalJugglers);

      for (let beat = 0; beat < totalBeats; beat++) {
        for (let juggler = 0; juggler < totalJugglers; juggler++) {
          const pos = service.getBeatPosition(beat, juggler);
          expect(drawSpy.text.calls.argsFor(beat * totalJugglers + juggler)).
            toEqual([throws[juggler].sourceHand]);
          expect(textSpy.x.calls.argsFor(beat * totalJugglers + juggler)).
            toEqual([pos.x - 10]);
          expect(textSpy.y.calls.argsFor(beat * totalJugglers + juggler)).
            toEqual([pos.y - 30]);
          expect(textSpy.id.calls.argsFor(beat * totalJugglers + juggler)).
            toEqual(['causal_beat_label_' + beat + '_juggler_' + juggler]);
          expect(textSpy.addClass.calls.argsFor(beat * totalJugglers + juggler)).
            toEqual(['causal_beat_label']);
          expect(textSpy.font.calls.argsFor(beat * totalJugglers + juggler)).
            toEqual([{
              family: 'sans-serif'
              , size: '35'
            }]);

        }
      }
    });

  });

  describe('drawThrows', () => {
    let drawSpy, arrowMarker, throws, borderEast, borderWest;
    beforeEach(() => {
      drawSpy = {
        id: 'draw'
      };
      spyOn(service, 'drawThrowLine');
      spyOn(service, 'drawSelfCurve');
      spyOn(service, 'isLineInDiagram').and.callFake((throwObj) => {
        return throwObj.sourceJuggler != throwObj.targetJuggler;
      });

      arrowMarker = {
        id: 'foo'
      };
      borderEast = {
        id: 'east'
      };
      borderWest = {
        id: 'west'
      };
    });

    it('should draw the right passes', () => {

      throws = [];
      for (let i = 0; i < 3; i++) {
        const throwObj = {
          sourceJuggler: i,
          sourceHand: (i % 2 == 0) ? 'R' : 'L',
          targetJuggler: i,
          throwHeight: 3
        };
        throws.push(throwObj);
      }
      throws[0].targetJuggler = 1;
      throws[1].targetJuggler = 0;
      service.drawThrows(drawSpy, 6, throws, arrowMarker, borderEast, borderWest);
      expect(service.isLineInDiagram['calls'].count()).toEqual(3);
      for (let i = 0; i < 3; i++) {
        expect(service.isLineInDiagram['calls'].argsFor(i)).toEqual([throws[i]]);
      }
      expect(service.drawThrowLine['calls'].count()).toEqual(2);
      expect(service.drawThrowLine['calls'].argsFor(0)).
        toEqual([drawSpy, 'throw_6_0', throws[0], 6, arrowMarker, borderEast, borderWest]);
      expect(service.drawThrowLine['calls'].argsFor(1)).
        toEqual([drawSpy, 'throw_6_1', throws[1], 6, arrowMarker, borderEast, borderWest]);
      expect(service.drawSelfCurve['calls'].count()).toEqual(1);
      expect(service.drawSelfCurve['calls'].argsFor(0)).
        toEqual([drawSpy, 'throw_6_2', throws[2], 6, arrowMarker, borderEast, borderWest]);

    });
  });

  describe('initArrow', () => {
    let arrowSpy, defsSpy, addSpy, pathSpy;
    beforeEach(() => {
      arrowSpy = {
        ref: jasmine.createSpy(),
        id: jasmine.createSpy()
      }
      defsSpy = {
        marker: jasmine.createSpy().and.returnValue(arrowSpy)
      };
      pathSpy = {
        addClass: jasmine.createSpy()
      }
      addSpy = {
        path: jasmine.createSpy().and.returnValue(pathSpy)
      }
    });

    it('should create the arrow', () => {
      const retVal = service.initArrow(defsSpy);
      expect(defsSpy.marker['calls'].argsFor(0)[0]).toEqual(5);
      expect(defsSpy.marker['calls'].argsFor(0)[1]).toEqual(5);

      expect(retVal).toEqual(arrowSpy);
      expect(arrowSpy.ref).toHaveBeenCalledWith(0, 1.5);
      expect(arrowSpy.id).toHaveBeenCalledWith('arrowMarker');

      const addFn = defsSpy.marker['calls'].argsFor(0)[2];
      addFn(addSpy);
      expect(addSpy.path).toHaveBeenCalledWith('M0,0 L0,3 L4.5,1.5 z');
      expect(pathSpy.addClass).toHaveBeenCalledWith('causal_arrow');
    });
  });
  describe('draw throws', function () {
    let throws;
    let totalBeats;
    let totalJugglers;
    let throwObj;
    let drawSpy;
    let arrowMarker;
    let borderEast;
    let borderWest;
    let lineSpy;
    let lineSpy2;
    let pathSpy;
    let pathSpy2;

    beforeEach(function () {
      totalBeats = 3;
      totalJugglers = 3;
      throwObj = {
        sourceJuggler: 0,
        sourceHand: 'R',
        targetJuggler: 0,
        throwHeight: 3
      };
      lineSpy = {
        addClass: jasmine.createSpy(),
        id: jasmine.createSpy(),
        marker: jasmine.createSpy(),
        plot: jasmine.createSpy()
      };
      lineSpy2 = {
        addClass: jasmine.createSpy(),
        id: jasmine.createSpy(),
        marker: jasmine.createSpy(),
        plot: jasmine.createSpy()
      };
      pathSpy = {
        addClass: jasmine.createSpy(),
        id: jasmine.createSpy(),
        marker: jasmine.createSpy(),
        plot: jasmine.createSpy(),
        fill: jasmine.createSpy()
      };
      pathSpy2 = {
        addClass: jasmine.createSpy(),
        id: jasmine.createSpy(),
        marker: jasmine.createSpy(),
        plot: jasmine.createSpy(),
        fill: jasmine.createSpy()
      };
      drawSpy = {
        linesCount: 0,
        pathsCount: 0,
        line: jasmine.createSpy().and.callFake(() => {
          if (drawSpy.linesCount == 0) {
            drawSpy.linesCount++;
            return lineSpy;
          } else {
            drawSpy.linesCount++;
            return lineSpy2;
          }
        }),
        path: jasmine.createSpy().and.callFake(() => {
          if (drawSpy.pathsCount == 0) {
            drawSpy.pathsCount++;
            return pathSpy;
          } else {
            drawSpy.pathsCount++;
            return pathSpy2;
          }
        }),
      };
      arrowMarker = {
        id: 'arrow'
      };
      borderEast = {
        id: 'east'
      };
      borderWest = {
        id: 'west'
      };
      spyOn(service, 'getLineIntersection').and.returnValue(null);
    });

    describe('isLineInDiagram', function () {

      it('should calculate if a throw is a line or curve for passes', function () {
        throwObj.targetJuggler = 1;
        for (let height = 0; height < 20; height++) {
          throwObj.throwHeight = height;
          expect(service.isLineInDiagram(throwObj)).toBe(true);
        }
      });
      it('should calculate if a throw is a line or curve for 0', function () {
        throwObj.targetJuggler = 0;
        throwObj.throwHeight = 0;
        expect(service.isLineInDiagram(throwObj)).toBe(false);
      });

      it('should calculate if a throw is a line or curve for 1', function () {
        throwObj.targetJuggler = 0;
        throwObj.throwHeight = 1;
        expect(service.isLineInDiagram(throwObj)).toBe(false);
      });

      it('should calculate if a throw is a line or curve for 2', function () {
        throwObj.targetJuggler = 0;
        throwObj.throwHeight = 2;
        expect(service.isLineInDiagram(throwObj)).toBe(false);
      });

      it('should calculate if a throw is a line or curve for 3', function () {
        throwObj.targetJuggler = 0;
        throwObj.throwHeight = 3;
        expect(service.isLineInDiagram(throwObj)).toBe(true);
      });

      it('should calculate if a throw is a line or curve for large selfs', function () {
        throwObj.targetJuggler = 0;
        for (let height = 4; height < 20; height++) {
          throwObj.throwHeight = height;
          expect(service.isLineInDiagram(throwObj)).toBe(false);
        }
      });
    });

    describe('drawThrowLine', () => {
      beforeEach(function () {

      });

      it('should draw 3 self', function () {
        const id = 'foobar';
        const pos1 = service.getBeatPosition(0, 0);
        const pos2 = service.getBeatPosition(1, 0);
        service.drawThrowLine(drawSpy, id, throwObj, 0, arrowMarker, borderEast, borderWest);

        const start = service.getCircleRight(pos1);
        const end = service.getCircleLeft(pos2);
        expect(drawSpy.line).toHaveBeenCalledWith(start.x, start.y, end.x, end.y);
        expect(lineSpy.addClass).toHaveBeenCalledWith('causal_pass_line');
        expect(lineSpy.id).toHaveBeenCalledWith(id);
        expect(lineSpy.marker).toHaveBeenCalledWith('end', arrowMarker);
        expect(lineSpy.plot).not.toHaveBeenCalled();

      });

      it('should draw pass down', function () {
        const id = 'foobar';
        throwObj.targetJuggler = 1;
        const pos1 = service.getBeatPosition(0, 0);
        const pos2 = service.getBeatPosition(1, 1);
        service.drawThrowLine(drawSpy, id, throwObj, 0, arrowMarker, borderEast, borderWest);
        const start = service.getCircleLowerRight(pos1);
        const end = service.getCircleUpperLeft(pos2);
        expect(drawSpy.line).toHaveBeenCalledWith(start.x, start.y, end.x, end.y);
        expect(lineSpy.addClass).toHaveBeenCalledWith('causal_pass_line');
        expect(lineSpy.id).toHaveBeenCalledWith(id);
        expect(lineSpy.marker).toHaveBeenCalledWith('end', arrowMarker);
        expect(lineSpy.plot).not.toHaveBeenCalled();
      });

      it('should draw pass up', function () {
        const id = 'foobar';
        throwObj.sourceJuggler = 1;
        const pos1 = service.getBeatPosition(0, 1);
        const pos2 = service.getBeatPosition(1, 0);
        service.drawThrowLine(drawSpy, id, throwObj, 0, arrowMarker, null, null);
        const start = service.getCircleUpperRight(pos1);
        const end = service.getCircleLowerLeft(pos2);
        expect(drawSpy.line).toHaveBeenCalledWith(start.x, start.y, end.x, end.y);
        expect(lineSpy.addClass).toHaveBeenCalledWith('causal_pass_line');
        expect(lineSpy.id).toHaveBeenCalledWith(id);
        expect(lineSpy.marker).toHaveBeenCalledWith('end', arrowMarker);
        expect(lineSpy.plot).not.toHaveBeenCalled();
      });

      describe('wrapping', function () {
        beforeEach(function () {
          //3 beats wide
          patternService.selectedPattern =
            {
              name: 'ignore',
              jugglerCount: 2,
              beats: [{ throws: [] }, { throws: [] }, { throws: [] }]
            };
        });
        it('should split up straight throw', function () {

          const id = 'foobar';
          throwObj.sourceJuggler = 0;
          const pos1 = service.getBeatPosition(2, 0);
          const posX = service.getBeatPosition(3, 0);
          service.getLineIntersection['and'].returnValue({ x: 300, y: pos1.y });

          service.drawThrowLine(drawSpy, id, throwObj, 2, arrowMarker, borderEast, borderWest);

          const start = service.getCircleRight(pos1);
          const end = {
            x: 300,
            y: pos1.y
          };
          const endOffScreen = service.getCircleLeft(posX);

          expect(drawSpy.line.calls.argsFor(0)).toEqual([start.x, start.y, endOffScreen.x, endOffScreen.y]);
          expect(lineSpy.addClass).toHaveBeenCalledWith('causal_pass_line');
          expect(lineSpy.id).toHaveBeenCalledWith(id);
          expect(lineSpy.marker.calls.argsFor(0)).toEqual(['end', arrowMarker]);
          expect(lineSpy.marker.calls.argsFor(1).splice(0, 3)).toEqual(['end', 0, 0]);
          expect(lineSpy.plot).toHaveBeenCalledWith(start.x, start.y, end.x, end.y);

          const pos2 = service.getBeatPosition(0, 0);
          const fullEnd = service.getCircleLeft(pos2);
          expect(drawSpy.line.calls.argsFor(1)).toEqual([0, end.y, fullEnd.x, fullEnd.y]);
          expect(lineSpy2.addClass).toHaveBeenCalledWith('causal_pass_line');
          expect(lineSpy2.id).toHaveBeenCalledWith(id + '_A');
          expect(lineSpy2.marker).toHaveBeenCalledWith('end', arrowMarker);

        });

        it('should split up up pass', function () {
          const id = 'foobar';
          throwObj.sourceJuggler = 1;
          throwObj.targetJuggler = 0;
          const pos1 = service.getBeatPosition(2, 1);
          const posX = service.getBeatPosition(3, 0);
          service.getLineIntersection['and'].returnValue({ x: 300, y: 137.5 });


          service.drawThrowLine(drawSpy, id, throwObj, 2, arrowMarker, borderEast, borderWest);

          const start = service.getCircleUpperRight(pos1);
          const end = {
            x: 300,
            y: 137.5
          };
          const endOffScreen = service.getCircleLowerLeft(posX);

          expect(drawSpy.line.calls.argsFor(0)).toEqual([start.x, start.y, endOffScreen.x, endOffScreen.y]);
          expect(lineSpy.addClass).toHaveBeenCalledWith('causal_pass_line');
          expect(lineSpy.id).toHaveBeenCalledWith(id);
          expect(lineSpy.marker.calls.argsFor(0)).toEqual(['end', arrowMarker]);
          expect(lineSpy.marker.calls.argsFor(1).splice(0, 3)).toEqual(['end', 0, 0]);
          expect(lineSpy.plot).toHaveBeenCalledWith(start.x, start.y, end.x, end.y);


          const pos2 = service.getBeatPosition(0, 0);
          const fullEnd = service.getCircleLowerLeft(pos2);
          expect(drawSpy.line.calls.argsFor(1)).toEqual([0, end.y, fullEnd.x, fullEnd.y]);
          expect(lineSpy2.addClass).toHaveBeenCalledWith('causal_pass_line');
          expect(lineSpy2.id).toHaveBeenCalledWith(id + '_A');
          expect(lineSpy2.marker).toHaveBeenCalledWith('end', arrowMarker);
        });

        it('should split up down pass', function () {
          const id = 'foobar';
          throwObj.sourceJuggler = 0;
          throwObj.targetJuggler = 1;
          const pos1 = service.getBeatPosition(2, 0);
          const posX = service.getBeatPosition(3, 1);
          service.getLineIntersection['and'].returnValue({ x: 300, y: 137.5 });


          service.drawThrowLine(drawSpy, id, throwObj, 2, arrowMarker, borderEast, borderWest);

          const start = service.getCircleLowerRight(pos1);
          const end = {
            x: 300,
            y: 137.5
          };
          const endOffScreen = service.getCircleUpperLeft(posX);

          expect(drawSpy.line.calls.argsFor(0)).toEqual([start.x, start.y, endOffScreen.x, endOffScreen.y]);
          expect(lineSpy.addClass).toHaveBeenCalledWith('causal_pass_line');
          expect(lineSpy.id).toHaveBeenCalledWith(id);
          expect(lineSpy.marker.calls.argsFor(0)).toEqual(['end', arrowMarker]);
          expect(lineSpy.marker.calls.argsFor(1).splice(0, 3)).toEqual(['end', 0, 0]);
          expect(lineSpy.plot).toHaveBeenCalledWith(start.x, start.y, end.x, end.y);


          const pos2 = service.getBeatPosition(0, 1);
          const fullEnd = service.getCircleUpperLeft(pos2);
          expect(drawSpy.line.calls.argsFor(1)).toEqual([0, end.y, fullEnd.x, fullEnd.y]);
          expect(lineSpy2.addClass).toHaveBeenCalledWith('causal_pass_line');
          expect(lineSpy2.id).toHaveBeenCalledWith(id + '_A');
          expect(lineSpy2.marker).toHaveBeenCalledWith('end', arrowMarker);
        });
      });
    });
    describe('selfCurve', function () {
      beforeEach(function () {

      });
      it('should draw self 2', function () {
        const id = 'foobar';
        throwObj.throwHeight = 2;
        const pos1 = service.getBeatPosition(0, 0);
        const pos2 = service.getBeatPosition(0, 0);
        service.drawSelfCurve(drawSpy, id, throwObj, 0, arrowMarker, borderEast, borderWest);

        const start = service.getCircleUpperLeft(pos1);
        const end = service.getCircleUpperRight(pos2);

        const expectedPath =
          'm ' + start.x + ' ' + start.y + ' A 20 30 0 0 1 ' + end.x + ' ' + end.y;
        expect(drawSpy.path).toHaveBeenCalledWith(expectedPath);
        expect(pathSpy.addClass).toHaveBeenCalledWith('causal_pass_line');
        expect(pathSpy.id).toHaveBeenCalledWith(id);
        expect(pathSpy.marker).toHaveBeenCalledWith('end', arrowMarker);
        expect(pathSpy.fill).toHaveBeenCalledWith('transparent');
        expect(pathSpy.plot).not.toHaveBeenCalled();
      });

      it('should draw self 0', function () {
        const id = 'foobar';
        throwObj.throwHeight = 0;
        const pos1 = service.getBeatPosition(2, 0);
        const pos2 = service.getBeatPosition(0, 0);
        service.drawSelfCurve(drawSpy, id, throwObj, 2, arrowMarker, borderEast, borderWest);

        const start = service.getCircleLowerLeft(pos1);
        const end = service.getCircleLowerRight(pos2);

        const expectedPath =
          'm ' + start.x + ' ' + start.y + ' A 100 100 0 0 1 ' + end.x + ' ' + end.y;
        expect(drawSpy.path).toHaveBeenCalledWith(expectedPath);
        expect(pathSpy.addClass).toHaveBeenCalledWith('causal_pass_line');
        expect(pathSpy.id).toHaveBeenCalledWith(id);
        expect(pathSpy.marker).toHaveBeenCalledWith('end', arrowMarker);
        expect(pathSpy.fill).toHaveBeenCalledWith('transparent');
        expect(pathSpy.plot).not.toHaveBeenCalled();
      });

      it('should draw self 1', function () {
        const id = 'foobar';
        throwObj.throwHeight = 1;
        const pos1 = service.getBeatPosition(1, 0);
        const pos2 = service.getBeatPosition(0, 0);
        service.drawSelfCurve(drawSpy, id, throwObj, 1, arrowMarker, borderEast, borderWest);

        const start = service.getCircleBottom(pos1);
        const end = service.getCircleBottom(pos2);

        const expectedPath =
          'm ' + start.x + ' ' + start.y + ' A 100 100 0 0 1 ' + end.x + ' ' + end.y;
        expect(drawSpy.path).toHaveBeenCalledWith(expectedPath);
        expect(pathSpy.addClass).toHaveBeenCalledWith('causal_pass_line');
        expect(pathSpy.id).toHaveBeenCalledWith(id);
        expect(pathSpy.marker).toHaveBeenCalledWith('end', arrowMarker);
        expect(pathSpy.fill).toHaveBeenCalledWith('transparent');
        expect(pathSpy.plot).not.toHaveBeenCalled();
      });

      it('should draw self 6', function () {
        const id = 'foobar';
        throwObj.throwHeight = 6;
        const pos1 = service.getBeatPosition(0, 0);
        const pos2 = service.getBeatPosition(4, 0);
        service.drawSelfCurve(drawSpy, id, throwObj, 0, arrowMarker, borderEast, borderWest);

        const start = service.getCircleUpperRight(pos1);
        const end = service.getCircleUpperLeft(pos2);

        const expectedPath =
          'm ' + start.x + ' ' + start.y + ' A 300 300 0 0 1 ' + end.x + ' ' + end.y;
        expect(drawSpy.path).toHaveBeenCalledWith(expectedPath);
        expect(pathSpy.addClass).toHaveBeenCalledWith('causal_pass_line');
        expect(pathSpy.id).toHaveBeenCalledWith(id);
        expect(pathSpy.marker).toHaveBeenCalledWith('end', arrowMarker);
        expect(pathSpy.fill).toHaveBeenCalledWith('transparent');
        expect(pathSpy.plot).not.toHaveBeenCalled();
      });
      describe('wrapping', function () {

        beforeEach(function () {
          //3 beats wide
          patternService.selectedPattern =
            {
              name: 'ignore',
              jugglerCount: 2,
              beats: [{ throws: [] }, { throws: [] }, { throws: [] }]
            };
        });

        describe('wrap eastern border', function () {
          it('should split up self throw', function () {
            const id = 'foobar';
            throwObj.sourceJuggler = 0;
            throwObj.targetJuggler = 0;
            throwObj.throwHeight = 4;
            const pos1 = service.getBeatPosition(1, 0);
            const posX = service.getBeatPosition(3, 0);
            service.getLineIntersection['and'].callFake((path, border) => {
              if (border.id === 'east') {
                return { x: 300, y: 29.910105658160088 };
              } else {
                return null;
              }
            });

            service.drawSelfCurve(drawSpy, id, throwObj, 1, arrowMarker, borderEast, borderWest);


            const start = service.getCircleUpperRight(pos1);
            const end = {
              x: 300,
              y: 29.910105658160088
            };
            const endOffScreen = service.getCircleUpperLeft(posX);

            const expectedPath0 =
              'm ' + start.x + ' ' + start.y + ' A 100 100 0 0 1 ' + endOffScreen.x + ' ' + endOffScreen.y;
            const expectedPath1 =
              'm ' + start.x + ' ' + start.y + ' A 100 100 0 0 1 ' + end.x + ' ' + end.y;

            expect(drawSpy.path.calls.argsFor(0)).toEqual([expectedPath0]);
            expect(pathSpy.addClass).toHaveBeenCalledWith('causal_pass_line');
            expect(pathSpy.id).toHaveBeenCalledWith(id);
            expect(pathSpy.marker.calls.argsFor(0).splice(0, 3)).toEqual(['end', arrowMarker]);
            expect(pathSpy.fill).toHaveBeenCalledWith('transparent');
            expect(pathSpy.plot).toHaveBeenCalledWith(expectedPath1);
            expect(pathSpy.marker.calls.argsFor(1).splice(0, 3)).toEqual(['end', 0, 0]);


            const pos2 = service.getBeatPosition(0, 0);

            const start2 = {
              x: 0,
              y: end.y
            };
            const end2 = service.getCircleUpperLeft(pos2);
            const expectedPath2 =
              'm ' + start2.x + ' ' + start2.y + ' A 100 100 0 0 1 ' + end2.x + ' ' + end2.y;
            expect(drawSpy.path.calls.argsFor(1)).toEqual([expectedPath2]);
            expect(pathSpy2.addClass).toHaveBeenCalledWith('causal_pass_line');
            expect(pathSpy2.id).toHaveBeenCalledWith(id + '_A');
            expect(pathSpy2.marker).toHaveBeenCalledWith('end', arrowMarker);
            expect(pathSpy.fill).toHaveBeenCalledWith('transparent');

          });
        });
        describe('wrap western border', function () {
          it('should split up self throw', function () {
            service.diagramWidth = 300;
            const id = 'foobar';
            throwObj.sourceJuggler = 0;
            throwObj.targetJuggler = 0;
            throwObj.throwHeight = 0;
            const pos1 = service.getBeatPosition(1, 0);
            const posX = service.getBeatPosition(-1, 0);
            service.getLineIntersection['and'].callFake((path, border) => {
              if (border.id === 'west') {
                return {x: 0, y: 120.08989069607223};
              } else {
                return null;
              }
            });
            service.drawSelfCurve(drawSpy, id, throwObj, 1, arrowMarker, borderEast, borderWest);

            const start = service.getCircleLowerLeft(pos1);
            const end = {
              x: 0,
              y: 120.08989069607223
            };
            const endOffScreen = service.getCircleLowerRight(posX);

            const expectedPath0 =
              'm ' + start.x + ' ' + start.y + ' A 100 100 0 0 1 ' + endOffScreen.x + ' ' + endOffScreen.y;
            const expectedPath1 =
              'm ' + start.x + ' ' + start.y + ' A 100 100 0 0 1 ' + end.x + ' ' + end.y;
            expect(drawSpy.path.calls.argsFor(0)).toEqual([expectedPath0]);
            expect(pathSpy.addClass).toHaveBeenCalledWith('causal_pass_line');
            expect(pathSpy.id).toHaveBeenCalledWith(id);
            expect(pathSpy.marker.calls.argsFor(0).splice(0, 3)).toEqual(['end', arrowMarker]);
            expect(pathSpy.fill).toHaveBeenCalledWith('transparent');
            expect(pathSpy.plot).toHaveBeenCalledWith(expectedPath1);
            expect(pathSpy.marker.calls.argsFor(1).splice(0, 3)).toEqual(['end', 0, 0]);

            const pos2 = service.getBeatPosition(2, 0);

            const start2 = {
              x: 300,
              y: end.y
            };
            const end2 = service.getCircleLowerRight(pos2);
            const expectedPath2 =
              'm ' + start2.x + ' ' + start2.y + ' A 100 100 0 0 1 ' + end2.x + ' ' + end2.y;
            expect(drawSpy.path.calls.argsFor(1)).toEqual([expectedPath2]);
            expect(pathSpy2.addClass).toHaveBeenCalledWith('causal_pass_line');
            expect(pathSpy2.id).toHaveBeenCalledWith(id + '_A');
            expect(pathSpy2.marker).toHaveBeenCalledWith('end', arrowMarker);
            expect(pathSpy.fill).toHaveBeenCalledWith('transparent');

          });
        });
      });
    });
  });
  describe('getLineIntersection', () => {
    let lineOrPath, line, intersectionPoint;


    beforeEach(() => {
      intersectionPoint = {x: 3, y: 4};
      lineOrPath = {
        id: 'lineOrPath',
        intersectsLine: jasmine.createSpy().and.returnValue(intersectionPoint)
      };

      line = {
        id: 'line'
      };
    });

    it('should return null if no line', () => {
      const retVal = service.getLineIntersection(lineOrPath, null);
      expect(retVal).toEqual(null);
    });
    it('should return null if no intersection', () => {
      lineOrPath.intersectsLine.and.returnValue(null);
      const retVal = service.getLineIntersection(lineOrPath, line);
      expect(retVal).toEqual(null);
    });
    it('should return a single point if there is one intersection', () => {
      const retVal = service.getLineIntersection(lineOrPath, line);
      expect(retVal).toEqual(intersectionPoint);
    });
    it('should return the first point single point if there are multiple points', () => {
      lineOrPath.intersectsLine.and.returnValue([intersectionPoint, {x: 7, y: 8}]);
      const retVal = service.getLineIntersection(lineOrPath, line);
      expect(retVal).toEqual(intersectionPoint);
    });
    it('should return null if there 0 points', () => {
      lineOrPath.intersectsLine.and.returnValue([]);
      const retVal = service.getLineIntersection(lineOrPath, line);
      expect(retVal).toEqual(null);
    });
  });
});

