import { DiagramService } from './diagram.service';

import { PatternService } from './pattern.service';
import fourCount from './patterns/fourCount.json';
import { Pattern } from './model/Pattern';
import { Throw } from './model/Throw';
import { Beat } from './model/Beat';


function getOtherHand(hand: string): string {
  if (hand === 'R') {
    return 'L';
  } else {
    return 'R';
  }
}

function getTextXOffset(hand: string): number {
  if (hand === 'R') {
    return 12;
  } else {
    return 10;
  }
}

describe('DiagramService', () => {
  let service: DiagramService;
  let patternService: PatternService;
  let div: HTMLDivElement;
  let draw;

  beforeEach(() => {
    patternService = {
      patterns: [],
      selectedPattern: fourCount as Pattern,
      clubCount: jasmine.createSpy(),
      addPattern: jasmine.createSpy()
    };
    service = new DiagramService(patternService);
  });

  it('should be created', () => {

    expect(service).toBeTruthy();
  });

  describe('divObs', () => {
    it('should set the div and draw the SVG', () => {
      spyOn(service, 'drawSVG');
      const newDiv = document.createElement('div');
      newDiv.setAttribute('id', 'foobar');
      service.divObs.observers[0].next(newDiv);
    });
  });

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
          const beat = {
            throws: []
          };
          pattern.beats.push(beat);
          for (let j = 0; j < totalJugglers; j++) {
            const thr = {
              sourceJuggler: j,
              sourceHand: 'R',
              targetJuggler: j,
              throwHeight: 3
            };
            beat.throws.push(thr);
          }
        }
        patternService.selectedPattern = pattern;

        // clear the page...
        div = document.createElement('div');
        // service.div = div;
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

        const mySvg = div.firstChild as SVGElement;

        const beatsToDraw = patternService.selectedPattern.beats.concat(patternService.selectedPattern.beats);

        const viewWidth = service.BEAT_WIDTH * totalBeats * 2;
        const viewHeight = service.BEAT_HEIGHT * (totalJugglers + 1);

        expect(mySvg.getAttribute('viewBox')).toEqual('0 0 ' + viewWidth + ' ' + viewHeight);

        expect(service.drawCircles['calls'].count()).toEqual(totalBeats*2);
        for (let i = 0; i < totalBeats; i++) {
          expect(service.drawCircles['calls'].argsFor(i)).toEqual(
            [
              draw, i, pattern.beats[i].throws,
              { id: 'fooArrow' }
            ]
          );

        }
        expect(service.drawThrows['calls'].count()).toEqual(totalBeats*2);
        for (let i = 0; i < totalBeats; i++) {
          expect(service.drawThrows['calls'].argsFor(i).slice(0, 4)).toEqual(
            [
              draw, i, pattern.beats[i].throws,
              { id: 'fooArrow' }
            ]
          );
          expect(service.drawThrows['calls'].argsFor(i)[4]).toEqual(beatsToDraw);
        }

      });
    });

    it('should calculate beat diff', function () {
      for (let i = 0; i < 20; i++) {
        throwObj.throwHeight = i;
        const diff = service.getBeatDiff(throwObj);
        expect(diff).toEqual(i - 2);
      }
    });
  });

  describe('getBeatPosition', () => {
    let circle_corner_adj;
    let zip_corner_adj;
    beforeEach(function () {
      circle_corner_adj = (Math.round((Math.cos(service.CIRCLE_CORNER_ANGLE) * service.CIRCLE_RADIUS) * 100) / 100);
      zip_corner_adj = (Math.round((Math.cos(service.CIRCLE_CORNER_ANGLE) * service.ZIP_RADIUS) * 100) / 100);
    });
    it('should calculate beat position', () => {
      for (let beat = 0; beat < 20; beat++) {
        for (let juggler = 0; juggler < 20; juggler++) {
          const pos = service.getBeatPosition(beat, juggler);
          expect(pos.x).toEqual(beat * 100 + 50);
          expect(pos.y).toEqual(juggler * 125 + 75);
        }
      }
    });

    it('should calculate zip receive position', () => {
      for (let beat = 0; beat < 20; beat++) {
        for (let juggler = 0; juggler < 20; juggler++) {
          const pos = service.getZipReceivePosition(beat, juggler);
          expect(pos.x).toEqual(beat * 100 + 50 - service.ZIP_X_OFFSET);
          expect(pos.y).toEqual(juggler * 125 + 75 - service.ZIP_Y_OFFSET);
        }
      }
    });

    it('should calculate zip throw position', () => {
      for (let beat = 0; beat < 20; beat++) {
        for (let juggler = 0; juggler < 20; juggler++) {
          const pos = service.getZipThrowPosition(beat, juggler);
          expect(pos.x).toEqual(beat * 100 + 50 + service.ZIP_X_OFFSET);
          expect(pos.y).toEqual(juggler * 125 + 75 + service.ZIP_Y_OFFSET);
        }
      }
    });

    describe('Circle edge positions', () => {
      it('should  calculate upper left', function () {
        const beat = 7;
        const juggler = 5;

        let pos = service.getBeatPosition(beat, juggler);
        let posX = service.getCircleUpperLeft(pos);
        expect(posX.x).toEqual(beat * 100 + 50 - circle_corner_adj);
        expect(posX.y).toEqual(juggler * 125 + 75 - circle_corner_adj);

        pos = service.getBeatPosition(beat, juggler);
        posX = service.getCircleUpperLeft(pos, service.ZIP_RADIUS);
        expect(posX.x).toEqual(beat * 100 + 50 - zip_corner_adj);
        expect(posX.y).toEqual(juggler * 125 + 75 - zip_corner_adj);
      });

      it('should  calculate upper right', function () {
        const beat = 7;
        const juggler = 5;

        let pos = service.getBeatPosition(beat, juggler);
        let posX = service.getCircleUpperRight(pos);
        expect(posX.x).toEqual(beat * 100 + 50 + circle_corner_adj);
        expect(posX.y).toEqual(juggler * 125 + 75 - circle_corner_adj);

        pos = service.getBeatPosition(beat, juggler);
        posX = service.getCircleUpperRight(pos, service.ZIP_RADIUS);
        expect(posX.x).toEqual(beat * 100 + 50 + zip_corner_adj);
        expect(posX.y).toEqual(juggler * 125 + 75 - zip_corner_adj);
      });

      it('should  calculate lower left', function () {
        const beat = 7;
        const juggler = 5;

        let pos = service.getBeatPosition(beat, juggler);
        let posX = service.getCircleLowerLeft(pos);
        expect(posX.x).toEqual(beat * 100 + 50 - circle_corner_adj);
        expect(posX.y).toEqual(juggler * 125 + 75 + circle_corner_adj);

        pos = service.getBeatPosition(beat, juggler);
        posX = service.getCircleLowerLeft(pos, service.ZIP_RADIUS);
        expect(posX.x).toEqual(beat * 100 + 50 - zip_corner_adj);
        expect(posX.y).toEqual(juggler * 125 + 75 + zip_corner_adj);
      });

      it('should  calculate lower right', function () {
        const beat = 7;
        const juggler = 5;

        let pos = service.getBeatPosition(beat, juggler);
        let posX = service.getCircleLowerRight(pos);
        expect(posX.x).toEqual(beat * 100 + 50 + circle_corner_adj);
        expect(posX.y).toEqual(juggler * 125 + 75 + circle_corner_adj);

        pos = service.getBeatPosition(beat, juggler);
        posX = service.getCircleLowerRight(pos, service.ZIP_RADIUS);
        expect(posX.x).toEqual(beat * 100 + 50 + zip_corner_adj);
        expect(posX.y).toEqual(juggler * 125 + 75 + zip_corner_adj);
      });

      it('should  calculate right', function () {
        const beat = 7;
        const juggler = 5;

        let pos = service.getBeatPosition(beat, juggler);
        let posX = service.getCircleRight(pos);
        expect(posX.x).toEqual(beat * 100 + 50 + service.CIRCLE_RADIUS);
        expect(posX.y).toEqual(juggler * 125 + 75);

        pos = service.getBeatPosition(beat, juggler);
        posX = service.getCircleRight(pos, service.ZIP_RADIUS);
        expect(posX.x).toEqual(beat * 100 + 50 + service.ZIP_RADIUS);
        expect(posX.y).toEqual(juggler * 125 + 75);
      });

      it('should  calculate left', function () {
        const beat = 7;
        const juggler = 5;

        let pos = service.getBeatPosition(beat, juggler);
        let posX = service.getCircleLeft(pos);
        expect(posX.x).toEqual(beat * 100 + 50 - service.CIRCLE_RADIUS);
        expect(posX.y).toEqual(juggler * 125 + 75);

        pos = service.getBeatPosition(beat, juggler);
        posX = service.getCircleLeft(pos, service.ZIP_RADIUS);
        expect(posX.x).toEqual(beat * 100 + 50 - service.ZIP_RADIUS);
        expect(posX.y).toEqual(juggler * 125 + 75);
      });

      it('should  calculate top ', function () {
        const beat = 7;
        const juggler = 5;

        let pos = service.getBeatPosition(beat, juggler);
        let posX = service.getCircleTop(pos);
        expect(posX.x).toEqual(beat * 100 + 50);
        expect(posX.y).toEqual(juggler * 125 + 75 - service.CIRCLE_RADIUS);

        pos = service.getBeatPosition(beat, juggler);
        posX = service.getCircleTop(pos, service.ZIP_RADIUS);
        expect(posX.x).toEqual(beat * 100 + 50);
        expect(posX.y).toEqual(juggler * 125 + 75 - service.ZIP_RADIUS);
      });

      it('should  calculate bottom ', function () {
        const beat = 7;
        const juggler = 5;

        let pos = service.getBeatPosition(beat, juggler);
        let posX = service.getCircleBottom(pos);
        expect(posX.x).toEqual(beat * 100 + 50);
        expect(posX.y).toEqual(juggler * 125 + 75 + service.CIRCLE_RADIUS);

        pos = service.getBeatPosition(beat, juggler);
        posX = service.getCircleBottom(pos, service.ZIP_RADIUS);
        expect(posX.x).toEqual(beat * 100 + 50);
        expect(posX.y).toEqual(juggler * 125 + 75 + service.ZIP_RADIUS);
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
    let lineSpy;
    beforeEach(function () {
      totalBeats = 3;
      totalJugglers = 3;
      throws = [];
      for (let i = 0; i < totalJugglers; i++) {
        const throwObj = {
          sourceJuggler: i,
          sourceHand: (i % 2 === 0) ? 'R' : 'L',
          targetJuggler: i,
          throwHeight: 3
        };
        throws.push(throwObj);
      }
      drawSpy = {};
      circleSpy = {};
      textSpy = {};
      lineSpy = {};
      drawSpy.circle = jasmine.createSpy().and.returnValue(circleSpy);
      drawSpy.text = jasmine.createSpy().and.returnValue(textSpy);
      drawSpy.line = jasmine.createSpy().and.returnValue(lineSpy);
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
      lineSpy.addClass = jasmine.createSpy();
      lineSpy.marker = jasmine.createSpy();
    });

    it('shouldDrawCirlesCorrectly', function () {
      for (let beat = 0; beat < totalBeats; beat++) {
        service.drawCircles(drawSpy, beat, throws, {});
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
        service.drawCircles(drawSpy, beat, throws, {});
      }
      expect(drawSpy.text.calls.count()).toEqual(totalBeats * totalJugglers);

      for (let beat = 0; beat < totalBeats; beat++) {
        for (let juggler = 0; juggler < totalJugglers; juggler++) {
          const pos = service.getBeatPosition(beat, juggler);
          expect(drawSpy.text.calls.argsFor(beat * totalJugglers + juggler)).
            toEqual([throws[juggler].sourceHand]);
          expect(textSpy.x.calls.argsFor(beat * totalJugglers + juggler)).
            toEqual([pos.x - getTextXOffset(throws[juggler].sourceHand)]);
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

    it('should draw zip circles correcly', () => {
      for (let i = 0; i < throws.length; i++) {
        throws[i].zip = true;
      }
      const beat = 4;
      const arrowMarker = { id: 'arrow' };
      service.drawCircles(drawSpy, beat, throws, arrowMarker);
      expect(drawSpy.circle.calls.count()).toEqual(throws.length * 2);
      expect(drawSpy.line.calls.count()).toEqual(throws.length);
      for (let juggler = 0; juggler < throws.length; juggler++) {
        const pos = service.getBeatPosition(beat, juggler);
        // top (receiving circle on zip)
        expect(circleSpy.radius.calls.argsFor(2 * juggler)).
          toEqual([service.ZIP_RADIUS]);
        expect(circleSpy.cx.calls.argsFor(2 * juggler)).
          toEqual([pos.x - service.ZIP_X_OFFSET]);
        expect(circleSpy.cy.calls.argsFor(2 * juggler)).
          toEqual([pos.y - service.ZIP_Y_OFFSET]);
        expect(circleSpy.id.calls.argsFor(2 * juggler)).
          toEqual(['causal_beat_' + beat + '_juggler_' + juggler + '_0']);
        expect(circleSpy.addClass.calls.argsFor(2 * juggler)).
          toEqual(['causal_beat_circle']);
        // bottom (throwing circle on zip)
        expect(circleSpy.radius.calls.argsFor(2 * juggler + 1)).
          toEqual([service.ZIP_RADIUS]);
        expect(circleSpy.cx.calls.argsFor(2 * juggler + 1)).
          toEqual([pos.x + service.ZIP_X_OFFSET]);
        expect(circleSpy.cy.calls.argsFor(2 * juggler + 1)).
          toEqual([pos.y + service.ZIP_Y_OFFSET]);
        expect(circleSpy.id.calls.argsFor(2 * juggler + 1)).
          toEqual(['causal_beat_' + beat + '_juggler_' + juggler + '_1']);
        expect(circleSpy.addClass.calls.argsFor(2 * juggler + 1)).
          toEqual(['causal_beat_circle']);

        expect(drawSpy.line.calls.argsFor(juggler)).
          toEqual([pos.x,
          pos.y - service.ZIP_Y_OFFSET + service.ZIP_RADIUS,
          pos.x,
          pos.y + service.ZIP_Y_OFFSET - service.ZIP_RADIUS]);
        expect(lineSpy.addClass.calls.argsFor(juggler)).toEqual(['causal_pass_line']);
        expect(lineSpy.marker.calls.argsFor(juggler)).toEqual(['end', arrowMarker]);
      }

    });

    it('shouldZipDrawTextCorrectly', function () {
      for (let i = 0; i < throws.length; i++) {
        throws[i].zip = true;
      }
      const beat = 4;
      service.drawCircles(drawSpy, beat, throws, {});

      expect(drawSpy.text.calls.count()).toEqual(throws.length * 2);

      for (let juggler = 0; juggler < throws.length; juggler++) {
        const pos = service.getBeatPosition(beat, juggler);
        expect(drawSpy.text.calls.argsFor(2 * juggler)).
          toEqual([getOtherHand(throws[juggler].sourceHand)]);
        expect(textSpy.x.calls.argsFor(2 * juggler)).
          toEqual([pos.x - service.ZIP_X_OFFSET - getTextXOffset(getOtherHand(throws[juggler].sourceHand))]);
        expect(textSpy.y.calls.argsFor(2 * juggler)).
          toEqual([pos.y - service.ZIP_Y_OFFSET - 30]);
        expect(textSpy.id.calls.argsFor(2 * juggler)).
          toEqual(['causal_beat_label_' + beat + '_juggler_' + juggler + '_0']);
        expect(textSpy.addClass.calls.argsFor(2 * juggler)).
          toEqual(['causal_beat_label']);
        expect(textSpy.font.calls.argsFor(2 * juggler)).
          toEqual([{
            family: 'sans-serif'
            , size: '35'
          }]);
        expect(drawSpy.text.calls.argsFor(2 * juggler + 1)).
          toEqual([throws[juggler].sourceHand]);
        expect(textSpy.x.calls.argsFor(2 * juggler + 1)).
          toEqual([pos.x + service.ZIP_X_OFFSET - getTextXOffset(throws[juggler].sourceHand)]);
        expect(textSpy.y.calls.argsFor(2 * juggler + 1)).
          toEqual([pos.y + service.ZIP_Y_OFFSET - 30]);
        expect(textSpy.id.calls.argsFor(2 * juggler + 1)).
          toEqual(['causal_beat_label_' + beat + '_juggler_' + juggler + '_1']);
        expect(textSpy.addClass.calls.argsFor(2 * juggler + 1)).
          toEqual(['causal_beat_label']);
        expect(textSpy.font.calls.argsFor(2 * juggler + 1)).
          toEqual([{
            family: 'sans-serif'
            , size: '35'
          }]);
      }
    });

  });

  describe('drawThrows', () => {
    let drawSpy, arrowMarker, throws;
    let targetThrow;
    beforeEach(() => {
      drawSpy = {
        id: 'draw'
      };
      spyOn(service, 'drawThrowLine');
      spyOn(service, 'drawSelfCurve');
      spyOn(service, 'isLineInDiagram').and.callFake((throwObj) => {
        return throwObj.sourceJuggler !== throwObj.targetJuggler;
      });

      arrowMarker = {
        id: 'foo'
      };
      targetThrow = {
        "sourceJuggler": 1,
        "sourceHand": "L",
        "targetJuggler": 1,
        "throwHeight": 3
      };
      spyOn(service, 'getTargetThrow').and.returnValue(targetThrow);
    });

    it('should draw the right passes', () => {

      throws = [];
      for (let i = 0; i < 3; i++) {
        const throwObj = {
          sourceJuggler: i,
          sourceHand: (i % 2 === 0) ? 'R' : 'L',
          targetJuggler: i,
          throwHeight: 3
        };
        throws.push(throwObj);
      }

      throws[0].targetJuggler = 1;
      throws[1].targetJuggler = 0;
      service.drawThrows(drawSpy, 6, throws, arrowMarker, <Beat[]>fourCount.beats);
      expect(service.isLineInDiagram['calls'].count()).toEqual(3);
      expect(service.getTargetThrow['calls'].count()).toEqual(3);
      for (let i = 0; i < 3; i++) {
        expect(service.isLineInDiagram['calls'].argsFor(i)).toEqual([throws[i]]);
        expect(service.getTargetThrow['calls'].argsFor(i)).toEqual([6, throws[i], fourCount.beats]);
      }
      expect(service.drawThrowLine['calls'].count()).toEqual(2);
      expect(service.drawThrowLine['calls'].argsFor(0)).
        toEqual([drawSpy, 'throw_6_0', throws[0], 6, arrowMarker, targetThrow]);
      expect(service.drawThrowLine['calls'].argsFor(1)).
        toEqual([drawSpy, 'throw_6_1', throws[1], 6, arrowMarker, targetThrow]);
      expect(service.drawSelfCurve['calls'].count()).toEqual(1);
      expect(service.drawSelfCurve['calls'].argsFor(0)).
        toEqual([drawSpy, 'throw_6_2', throws[2], 6, arrowMarker, targetThrow]);

    });
  });

  describe('getTargetThrow', () => {
    it('should calculate self targetThrow without modulus', () => {
      const startBeat = 1;
      const sourceThrow = <Throw>fourCount.beats[1].throws[0];
      const pattern = <Pattern>fourCount;

      const retVal = service.getTargetThrow(startBeat, sourceThrow, pattern.beats);
      expect(retVal).toBe(pattern.beats[2].throws[0]);
    });
    it('should calculate pass targetThrow without modulus', () => {
      const startBeat = 0;
      const sourceThrow = <Throw>fourCount.beats[0].throws[0];
      const pattern = <Pattern>fourCount;

      const retVal = service.getTargetThrow(startBeat, sourceThrow, pattern.beats);
      expect(retVal).toBe(pattern.beats[1].throws[1]);
    });

    it('should calculate self targetThrow with modulus', () => {
      const startBeat = 3;
      const sourceThrow = <Throw>fourCount.beats[3].throws[0];
      const pattern = <Pattern>fourCount;

      const retVal = service.getTargetThrow(startBeat, sourceThrow, pattern.beats);
      expect(retVal).toBe(pattern.beats[0].throws[0]);
    });
  });

  describe('initArrow', () => {
    let arrowSpy, defsSpy, addSpy, pathSpy;
    beforeEach(() => {
      arrowSpy = {
        ref: jasmine.createSpy(),
        id: jasmine.createSpy()
      };
      defsSpy = {
        marker: jasmine.createSpy().and.returnValue(arrowSpy)
      };
      pathSpy = {
        addClass: jasmine.createSpy()
      };
      addSpy = {
        path: jasmine.createSpy().and.returnValue(pathSpy)
      };
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
    let throwObj;
    let drawSpy;
    let arrowMarker;
    let lineSpy;
    let lineSpy2;
    let pathSpy;
    let pathSpy2;

    beforeEach(function () {
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
          if (drawSpy.linesCount === 0) {
            drawSpy.linesCount++;
            return lineSpy;
          } else {
            drawSpy.linesCount++;
            return lineSpy2;
          }
        }),
        path: jasmine.createSpy().and.callFake(() => {
          if (drawSpy.pathsCount === 0) {
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
      let targetThrow;
      beforeEach(function () {
        targetThrow = {
          "sourceJuggler": 1,
          "sourceHand": "L",
          "targetJuggler": 1,
          "throwHeight": 3
        };
        service.diagramWidth = 100000;
      });

      it('should draw 3 self', function () {
        const id = 'foobar';
        const pos1 = service.getBeatPosition(0, 0);
        const pos2 = service.getBeatPosition(1, 0);
        service.drawThrowLine(drawSpy, id, throwObj, 0, arrowMarker, targetThrow);

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
        service.drawThrowLine(drawSpy, id, throwObj, 0, arrowMarker, targetThrow);
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
        service.drawThrowLine(drawSpy, id, throwObj, 0, arrowMarker, targetThrow);
        const start = service.getCircleUpperRight(pos1);
        const end = service.getCircleLowerLeft(pos2);
        expect(drawSpy.line).toHaveBeenCalledWith(start.x, start.y, end.x, end.y);
        expect(lineSpy.addClass).toHaveBeenCalledWith('causal_pass_line');
        expect(lineSpy.id).toHaveBeenCalledWith(id);
        expect(lineSpy.marker).toHaveBeenCalledWith('end', arrowMarker);
        expect(lineSpy.plot).not.toHaveBeenCalled();
      });

      describe('zip start', () => {
        it('should draw an up pass starting from the zip throw circle', () => {
          const id = 'foobar';
          throwObj.sourceJuggler = 1;
          throwObj.zip = true;
          const pos1 = service.getZipThrowPosition(0, 1);
          const pos2 = service.getBeatPosition(1, 0);
          service.drawThrowLine(drawSpy, id, throwObj, 0, arrowMarker, targetThrow);
          const start = service.getCircleUpperRight(pos1, service.ZIP_RADIUS);
          const end = service.getCircleLowerLeft(pos2);
          expect(drawSpy.line).toHaveBeenCalledWith(start.x, start.y, end.x, end.y);
          expect(lineSpy.addClass).toHaveBeenCalledWith('causal_pass_line');
          expect(lineSpy.id).toHaveBeenCalledWith(id);
          expect(lineSpy.marker).toHaveBeenCalledWith('end', arrowMarker);
          expect(lineSpy.plot).not.toHaveBeenCalled();
        });

      });
      describe('zip end', () => {
        it('should draw an up pass ending on the zip throw circle', () => {
          const id = 'foobar';
          throwObj.sourceJuggler = 1;
          targetThrow.zip = true;
          const pos1 = service.getBeatPosition(0, 1);
          const pos2 = service.getZipReceivePosition(1, 0);
          service.drawThrowLine(drawSpy, id, throwObj, 0, arrowMarker, targetThrow);
          const start = service.getCircleUpperRight(pos1);
          const end = service.getCircleLowerLeft(pos2, service.ZIP_RADIUS);
          expect(drawSpy.line).toHaveBeenCalledWith(start.x, start.y, end.x, end.y);
          expect(lineSpy.addClass).toHaveBeenCalledWith('causal_pass_line');
          expect(lineSpy.id).toHaveBeenCalledWith(id);
          expect(lineSpy.marker).toHaveBeenCalledWith('end', arrowMarker);
          expect(lineSpy.plot).not.toHaveBeenCalled();
        });
      });
    });
    describe('selfCurve', function () {
      let targetThrow;
      beforeEach(function () {
        targetThrow = {
          "sourceJuggler": 1,
          "sourceHand": "L",
          "targetJuggler": 1,
          "throwHeight": 3
        };
        service.diagramWidth = 100000;
      });
      it('should draw self 2', function () {
        const id = 'foobar';
        throwObj.throwHeight = 2;
        const pos1 = service.getBeatPosition(0, 0);
        const pos2 = service.getBeatPosition(0, 0);
        service.drawSelfCurve(drawSpy, id, throwObj, 0, arrowMarker, targetThrow);

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
        service.drawSelfCurve(drawSpy, id, throwObj, 2, arrowMarker, targetThrow);

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
        service.drawSelfCurve(drawSpy, id, throwObj, 1, arrowMarker, targetThrow);

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
        service.drawSelfCurve(drawSpy, id, throwObj, 0, arrowMarker, targetThrow);

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

      describe('zip starts', () => {
        beforeEach(() => {
          throwObj.zip = true;
        });
        it('should draw self 1', function () {
          const id = 'foobar';
          throwObj.throwHeight = 1;
          const pos1 = service.getZipThrowPosition(1, 0);
          const pos2 = service.getBeatPosition(0, 0);
          service.drawSelfCurve(drawSpy, id, throwObj, 1, arrowMarker, targetThrow);

          const start = service.getCircleBottom(pos1, service.ZIP_RADIUS);
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
          const pos1 = service.getZipThrowPosition(0, 0);
          const pos2 = service.getBeatPosition(4, 0);
          service.drawSelfCurve(drawSpy, id, throwObj, 0, arrowMarker, targetThrow);

          const start = service.getCircleUpperRight(pos1, service.ZIP_RADIUS);
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
      });

      describe('zip ends', () => {
        beforeEach(() => {
          targetThrow.zip = true;
        });
        it('should draw self 1', function () {
          const id = 'foobar';
          throwObj.throwHeight = 1;
          const pos1 = service.getBeatPosition(1, 0);
          const pos2 = service.getZipReceivePosition(0, 0);
          service.drawSelfCurve(drawSpy, id, throwObj, 1, arrowMarker, targetThrow);

          const start = service.getCircleBottom(pos1);
          const end = service.getCircleBottom(pos2, service.ZIP_RADIUS);

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
          const pos2 = service.getZipReceivePosition(4, 0);
          service.drawSelfCurve(drawSpy, id, throwObj, 0, arrowMarker, targetThrow);

          const start = service.getCircleUpperRight(pos1);
          const end = service.getCircleUpperLeft(pos2, service.ZIP_RADIUS);

          const expectedPath =
            'm ' + start.x + ' ' + start.y + ' A 300 300 0 0 1 ' + end.x + ' ' + end.y;
          expect(drawSpy.path).toHaveBeenCalledWith(expectedPath);
          expect(pathSpy.addClass).toHaveBeenCalledWith('causal_pass_line');
          expect(pathSpy.id).toHaveBeenCalledWith(id);
          expect(pathSpy.marker).toHaveBeenCalledWith('end', arrowMarker);
          expect(pathSpy.fill).toHaveBeenCalledWith('transparent');
          expect(pathSpy.plot).not.toHaveBeenCalled();
        });
        it('should draw self 2', function () {
          const id = 'foobar';
          throwObj.throwHeight = 2;
          throwObj.zip = true;
          const pos1 = service.getZipThrowPosition(0, 0);
          const pos2 = service.getZipReceivePosition(0, 0);
          service.drawSelfCurve(drawSpy, id, throwObj, 0, arrowMarker, throwObj);

          const start = service.getCircleUpperLeft(pos1, service.ZIP_RADIUS);
          const end = service.getCircleUpperRight(pos2, service.ZIP_RADIUS);

          const expectedPath =
            'm ' + start.x + ' ' + start.y + ' A 20 30 0 0 1 ' + end.x + ' ' + end.y;
          expect(drawSpy.path).toHaveBeenCalledWith(expectedPath);
          expect(pathSpy.addClass).toHaveBeenCalledWith('causal_pass_line');
          expect(pathSpy.id).toHaveBeenCalledWith(id);
          expect(pathSpy.marker).toHaveBeenCalledWith('end', arrowMarker);
          expect(pathSpy.fill).toHaveBeenCalledWith('transparent');
          expect(pathSpy.plot).not.toHaveBeenCalled();
        });
      });
    });
  });
});
