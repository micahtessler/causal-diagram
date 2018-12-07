import { DiagramService } from './diagram.service';

import { PatternService } from './pattern.service';
import fourCount from './patterns/fourCount.json';
import { Pattern } from './model/Pattern';
import { Throw } from './model/Throw';

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

  describe("beatDiff", function () {
    let throwObj: Throw;

    beforeEach(function () {
      throwObj = {
        sourceJuggler: 0,
        sourceHand: "R",
        targetJuggler: 0,
        throwHeight: 3
      };
    });

    describe("drawSVG", function () {
      let pattern: Pattern;
      let totalBeats: number;
      let totalJugglers: number;


      beforeEach(function () {

        totalBeats = 3;
        totalJugglers = 3;

        pattern = {
          name: "Test",
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
              "sourceJuggler": j,
              "sourceHand": "R",
              "targetJuggler": j,
              "throwHeight": 3
            };
            beat.throws.push(throwObj);
          }
        }
        patternService.selectedPattern = pattern;

        //clear the page...
        div = document.createElement("div");
        draw = null;
        spyOn(service, 'drawCircles');
        spyOn(service, 'drawThrows');
        spyOn(service, 'initArrow').and.returnValue(
          {
            "id": "fooArrow"
          }
        );
      });

      it("should draw the diagram correctly", function () {
        draw = service.drawSVG(div);
        console.log('div', div, Object.keys(div));

        let mySvg = div.firstChild as SVGElement;

        let viewWidth = service.BEAT_WIDTH * totalBeats;
        let viewHeight = service.BEAT_HEIGHT * (totalJugglers + 1);

        expect(mySvg.getAttribute('viewBox')).toEqual("0 0 " + viewWidth + " " + viewHeight);

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
              { "id": "fooArrow" }
            ]
          );

        }

      });
    });

    it("should calculate beat diff", function () {
      for (let i = 0; i < 20; i++) {
        throwObj.throwHeight = i;
        let diff = service.getBeatDiff(throwObj);
        expect(diff).toEqual(i - 2);
      }
    });
  });

  describe("getBeatPosition", () => {
    let circle_corner_adj;
    let totalBeats;
    let totalJugglers;
    beforeEach(function () {
      totalBeats = 20;
      totalJugglers = 20;
      circle_corner_adj = (Math.round((Math.cos(service.CIRCLE_CORNER_ANGLE) * service.CIRCLE_RADIUS) * 100) / 100);
    });
    it("should calculate beat position", () => {
      for (let beat = 0; beat < 20; beat++) {
        for (let juggler = 0; juggler < 20; juggler++) {
          let pos = service.getBeatPosition(beat, juggler);
          expect(pos.x).toEqual(beat * 100 + 50);
          expect(pos.y).toEqual(juggler * 125 + 75);
        }
      }
    });

    describe('Circle edge positions', () => {
      it("should  calculate upper left", function () {
        for (let beat = 0; beat < totalBeats; beat++) {
          for (let juggler = 0; juggler < totalJugglers; juggler++) {
            let pos = service.getBeatPosition(beat, juggler);
            let posX = service.getCircleUpperLeft(pos);

            expect(posX.x).toEqual(beat * 100 + 50 - circle_corner_adj);
            expect(posX.y).toEqual(juggler * 125 + 75 - circle_corner_adj);
          }
        }
      });

      it("should  calculate upper right", function () {
        for (let beat = 0; beat < totalBeats; beat++) {
          for (let juggler = 0; juggler < totalJugglers; juggler++) {
            let pos = service.getBeatPosition(beat, juggler);
            let posX = service.getCircleUpperRight(pos);
            expect(posX.x).toEqual(beat * 100 + 50 + circle_corner_adj);
            expect(posX.y).toEqual(juggler * 125 + 75 - circle_corner_adj);
          }
        }
      });

      it("should  calculate lower left", function () {
        for (let beat = 0; beat < totalBeats; beat++) {
          for (let juggler = 0; juggler < totalJugglers; juggler++) {
            let pos = service.getBeatPosition(beat, juggler);
            let posX = service.getCircleLowerLeft(pos);
            expect(posX.x).toEqual(beat * 100 + 50 - circle_corner_adj);
            expect(posX.y).toEqual(juggler * 125 + 75 + circle_corner_adj);
          }
        }
      });

      it("should  calculate lower right", function () {
        for (let beat = 0; beat < totalBeats; beat++) {
          for (let juggler = 0; juggler < totalJugglers; juggler++) {
            let pos = service.getBeatPosition(beat, juggler);
            let posX = service.getCircleLowerRight(pos);
            expect(posX.x).toEqual(beat * 100 + 50 + circle_corner_adj);
            expect(posX.y).toEqual(juggler * 125 + 75 + circle_corner_adj);
          }
        }
      });

      it("should  calculate right", function () {
        for (let beat = 0; beat < totalBeats; beat++) {
          for (let juggler = 0; juggler < totalJugglers; juggler++) {
            let pos = service.getBeatPosition(beat, juggler);
            let posX = service.getCircleRight(pos);
            expect(posX.x).toEqual(beat * 100 + 50 + service.CIRCLE_RADIUS);
            expect(posX.y).toEqual(juggler * 125 + 75);
          }
        }
      });

      it("should  calculate left", function () {
        for (let beat = 0; beat < totalBeats; beat++) {
          for (let juggler = 0; juggler < totalJugglers; juggler++) {
            let pos = service.getBeatPosition(beat, juggler);
            let posX = service.getCircleLeft(pos);
            expect(posX.x).toEqual(beat * 100 + 50 - service.CIRCLE_RADIUS);
            expect(posX.y).toEqual(juggler * 125 + 75);
          }
        }
      });

      it("should  calculate top ", function () {
        for (let beat = 0; beat < totalBeats; beat++) {
          for (let juggler = 0; juggler < totalJugglers; juggler++) {
            let pos = service.getBeatPosition(beat, juggler);
            let posX = service.getCircleTop(pos);
            expect(posX.x).toEqual(beat * 100 + 50);
            expect(posX.y).toEqual(juggler * 125 + 75 - service.CIRCLE_RADIUS);
          }
        }
      });

      it("should  calculate bottom ", function () {
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

  describe("drawCircles", function () {
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
          "sourceJuggler": i,
          "sourceHand": (i % 2 == 0) ? "R" : "L",
          "targetJuggler": i,
          "throwHeight": 3
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

    it("shouldDrawCirlesCorrectly", function () {
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
            toEqual(["causal_beat_" + beat + "_juggler_" + juggler]);
          expect(circleSpy.addClass.calls.argsFor(beat * totalJugglers + juggler)).
            toEqual(["causal_beat_circle"]);
        }
      }

    });

    it("shouldDrawTextCorrectly", function () {
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
            toEqual(["causal_beat_label_" + beat + "_juggler_" + juggler]);
          expect(textSpy.addClass.calls.argsFor(beat * totalJugglers + juggler)).
            toEqual(["causal_beat_label"]);
          expect(textSpy.font.calls.argsFor(beat * totalJugglers + juggler)).
            toEqual([{
              family: 'sans-serif'
              , size: "35"
            }]);

        }
      }
    });

  });

  describe('drawThrows', () => {
    let drawSpy, arrowMarker, throws, borderEast, borderWest;
    beforeEach(() => {
      drawSpy = {
        id: "draw"
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

    it("should draw the right passes", () => {

      throws = [];
      for (let i = 0; i < 3; i++) {
        const throwObj = {
          "sourceJuggler": i,
          "sourceHand": (i % 2 == 0) ? "R" : "L",
          "targetJuggler": i,
          "throwHeight": 3
        };
        throws.push(throwObj);
      }
      throws[0].targetJuggler=1;
      throws[1].targetJuggler=0;
      service.drawThrows(drawSpy, 6, throws, arrowMarker, borderEast, borderWest);
      expect(service.isLineInDiagram['calls'].count()).toEqual(3);
      for (let i = 0; i < 3; i++) {
        expect(service.isLineInDiagram['calls'].argsFor(i)).toEqual([throws[i]]);
      }
      expect(service.drawThrowLine['calls'].count()).toEqual(2);
      expect(service.drawThrowLine['calls'].argsFor(0)).
      toEqual([drawSpy, "throw_6_0", throws[0], 6, arrowMarker, borderEast, borderWest]);
      expect(service.drawThrowLine['calls'].argsFor(1)).
      toEqual([drawSpy, "throw_6_1", throws[1], 6, arrowMarker, borderEast, borderWest]);
      expect(service.drawSelfCurve['calls'].count()).toEqual(1);
      expect(service.drawSelfCurve['calls'].argsFor(0)).
      toEqual([drawSpy, "throw_6_2", throws[2], 6, arrowMarker, borderEast, borderWest]);
      
    });
  });
});
