
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakpointObserver } from '@angular/cdk/layout';
import { NavbarComponent } from './navbar.component';
import { Pattern } from '../model/Pattern';
import fourCount from '../patterns/fourCount.json'

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
    spyOn(breakpointObserver, 'observe').and.returnValue({
      pipe: () => { }
    });
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
});
