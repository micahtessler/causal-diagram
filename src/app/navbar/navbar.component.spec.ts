import { BreakpointObserver } from '@angular/cdk/layout';
import { NavbarComponent } from './navbar.component';
import { Pattern } from '../model/Pattern';
import fourCount from '../patterns/fourCount.json'
import {of} from 'rxjs';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let breakpointObserver: BreakpointObserver;
  let patternService: any;
  let diagramService: any;
  const myPattern: Pattern = fourCount as Pattern;

  beforeEach(() => {
    breakpointObserver = new BreakpointObserver(null, null);
    patternService = {};
    diagramService ={
      drawSVG: jasmine.createSpy()
    }
    spyOn(breakpointObserver, 'observe').and.returnValue(of(null));
    component = new NavbarComponent(breakpointObserver, patternService, diagramService);

  });


  it('should not error', () => {
    expect(component).toBeTruthy();
  });

  describe('selectPattern', () => {
    it('should select the pattern in the service', () => {
      expect(patternService.selectedPattern).toBeUndefined();
      component.selectPattern(myPattern);
      expect(patternService.selectedPattern).toEqual(myPattern);
      expect(diagramService.drawSVG).toHaveBeenCalled();
    });
  });

  describe('download', () => {
    let link: any;
    let patternAsURI: string;
    beforeEach(() => {
      patternService.selectedPattern = myPattern;
      link = {
        click: jasmine.createSpy()
      };
      spyOn(document, 'createElement').and.returnValue(link);
      spyOn(document.body, 'appendChild');
      spyOn(document.body, 'removeChild');
      patternAsURI =
      "data:application/json,"+encodeURIComponent(JSON.stringify(myPattern, null, 2));

    });

    it('should create & click a download link', () => {
      component.downloadPattern();
      expect(document.createElement).toHaveBeenCalledWith('a');
      expect(link.download).toEqual(myPattern.name+'.json');
      expect(link.href).toEqual(patternAsURI);
      expect(document.body.appendChild).toHaveBeenCalledWith(link);
      expect(link.click).toHaveBeenCalled();
      expect(document.body.removeChild).toHaveBeenCalledWith(link);
    });


  });
});
