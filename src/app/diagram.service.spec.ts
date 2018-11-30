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

  describe("beatDiff", function() {
		let throwObj: Throw;

		beforeEach(function() {
			throwObj = {
					sourceJuggler:0,
					sourceHand:"R",
					targetJuggler:0,
					throwHeight: 3
			};
    });
    
    describe("drawSVG", function() {
			let pattern: Pattern;
			let totalBeats: number;
			let totalJugglers: number;
			
			let circlesDrawn;
			let throwsDrawn;
			let defsWithArrow;
			
			beforeEach(function() {
				
				totalBeats = 3;
				totalJugglers = 3;
				circlesDrawn = [];
				throwsDrawn = [];
				defsWithArrow = [];
				pattern = {
						name : "Test",
						jugglerCount : totalJugglers,
						beats : []
				};
				for (let i = 0; i < totalBeats; i++) {
					let beat = {
						throws : []
					};
					pattern.beats.push(beat);
					for (let j = 0; j < totalJugglers; j++) {
						let throwObj = {
							"sourceJuggler":j,
							"sourceHand":"R",
							"targetJuggler":j,
							"throwHeight": 3
						};
						beat.throws.push(throwObj);
					}
				}
        patternService.selectedPattern = pattern;

				//clear the page...
				div = document.createElement("div");
				draw = null;
				service.drawCircles = function(draw, beatNb, throws) {
					circlesDrawn[beatNb]={
						"draw": draw,
						"beatNb": beatNb,
						"throws": throws
					};
				}
				service.drawThrows = function(draw, beatNb, throws, arrowMarker) {
					throwsDrawn[beatNb] ={
						"draw": draw,
						"beatNb": beatNb,
						"throws": throws,
						"arrowMarker": arrowMarker
					};
				}
				service.initArrow = function(defs) {
					defsWithArrow = defs;
					return {
						"id":"fooArrow"
					};
				}
			});
			
			it("should draw the diagram correctly", function() {
				draw = service.drawSVG(div);
        console.log('div', div, Object.keys(div));

				let mySvg = 	div.firstChild as SVGElement;

        let viewWidth = service.BEAT_WIDTH * totalBeats;
				let viewHeight = service.BEAT_HEIGHT * (totalJugglers + 1);

        expect(mySvg.getAttribute('viewBox')).toEqual("0 0 "+viewWidth+" "+viewHeight);
				/*
				let defs = mySvg.childNodes[0];
				expect(defs.tagName).toEqual("defs");
				expect(defsWithArrow).toBe(defs.instance);
				
				expect(circlesDrawn.length).toEqual(totalBeats);
				for (let i = 0; i < totalBeats; i++) {
					expect(circlesDrawn[i].draw).toBe(draw);
					expect(circlesDrawn[i].beatNb).toEqual(i);
					expect(circlesDrawn[i].throws).toBe(pattern.beats[i].throws);
				}
					
				expect(throwsDrawn.length).toEqual(totalBeats);
				for (let i = 0; i < totalBeats; i++) {
					expect(throwsDrawn[i].draw).toBe(draw);
					expect(throwsDrawn[i].beatNb).toEqual(i);
					expect(throwsDrawn[i].throws).toBe(pattern.beats[i].throws);
					expect(throwsDrawn[i].arrowMarker.id).toEqual("fooArrow");
        }
        */
      });
		});

		it("should calculate beat diff", function() {
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
    beforeEach(function() {
			totalBeats = 20;
			totalJugglers = 20;
			circle_corner_adj = (Math.round((Math.cos(service.CIRCLE_CORNER_ANGLE)*service.CIRCLE_RADIUS)*100) / 100);
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
    
    describe('Circle edge positions', ()=> {
      it("should  calculate upper left", function() {
        for (let beat = 0; beat < totalBeats; beat++) {
          for (let juggler = 0; juggler < totalJugglers; juggler++) {
            let pos = service.getBeatPosition(beat, juggler);
            let posX = service.getCircleUpperLeft(pos);
            
            expect(posX.x).toEqual(beat * 100 + 50 - circle_corner_adj);
            expect(posX.y).toEqual(juggler * 125 + 75 - circle_corner_adj);
          }
        }
      });
  
      it("should  calculate upper right", function() {
        for (let beat = 0; beat < totalBeats; beat++) {
          for (let juggler = 0; juggler < totalJugglers; juggler++) {
            let pos = service.getBeatPosition(beat, juggler);
            let posX = service.getCircleUpperRight(pos);
            expect(posX.x).toEqual(beat * 100 + 50 + circle_corner_adj);
            expect(posX.y).toEqual(juggler * 125 + 75 - circle_corner_adj);
          }
        }
      });
  
      it("should  calculate lower left", function() {
        for (let beat = 0; beat < totalBeats; beat++) {
          for (let juggler = 0; juggler < totalJugglers; juggler++) {
            let pos = service.getBeatPosition(beat, juggler);
            let posX = service.getCircleLowerLeft(pos);
            expect(posX.x).toEqual(beat * 100 + 50 - circle_corner_adj);
            expect(posX.y).toEqual(juggler * 125 + 75 + circle_corner_adj);
          }
        }
      });
  
      it("should  calculate lower right", function() {
        for (let beat = 0; beat < totalBeats; beat++) {
          for (let juggler = 0; juggler < totalJugglers; juggler++) {
            let pos = service.getBeatPosition(beat, juggler);
            let posX = service.getCircleLowerRight(pos);
            expect(posX.x).toEqual(beat * 100 + 50 + circle_corner_adj);
            expect(posX.y).toEqual(juggler * 125 + 75 + circle_corner_adj);
          }
        }
      });
  
      it("should  calculate right", function() {
        for (let beat = 0; beat < totalBeats; beat++) {
          for (let juggler = 0; juggler < totalJugglers; juggler++) {
            let pos = service.getBeatPosition(beat, juggler);
            let posX = service.getCircleRight(pos);
            expect(posX.x).toEqual(beat * 100 + 50 + service.CIRCLE_RADIUS);
            expect(posX.y).toEqual(juggler * 125 + 75);
          }
        }
      });
  
      it("should  calculate left", function() {
        for (let beat = 0; beat < totalBeats; beat++) {
          for (let juggler = 0; juggler < totalJugglers; juggler++) {
            let pos = service.getBeatPosition(beat, juggler);
            let posX = service.getCircleLeft(pos);
            expect(posX.x).toEqual(beat * 100 + 50 - service.CIRCLE_RADIUS);
            expect(posX.y).toEqual(juggler * 125 + 75);
          }
        }
      });
  
      it("should  calculate top ", function() {
        for (let beat = 0; beat < totalBeats; beat++) {
          for (let juggler = 0; juggler < totalJugglers; juggler++) {
            let pos = service.getBeatPosition(beat, juggler);
            let posX = service.getCircleTop(pos);
            expect(posX.x).toEqual(beat * 100 + 50);
            expect(posX.y).toEqual(juggler * 125 + 75 - service.CIRCLE_RADIUS);
          }
        }
      });
  
      it("should  calculate bottom ", function() {
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
  
});
