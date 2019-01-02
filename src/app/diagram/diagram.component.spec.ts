import {ElementRef } from '@angular/core';

import { DiagramComponent } from './diagram.component';

describe('DiagramComponent', () => {
  let component: DiagramComponent;
  let diagramService: any;
  
  beforeEach(() => {
    diagramService = {
      divObs: {
        next: jasmine.createSpy()
      },
      drawSVG: jasmine.createSpy()
    };
    component = new DiagramComponent(diagramService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', ()=> {
    beforeEach(()=> {
      component.diagramDiv = new ElementRef(document.createElement('div'));
      component.diagramDiv.nativeElement.id = 'diagramDiv';
    });
    it('should set the diagramDiv', ()=> {
        component.ngOnInit();
        expect(diagramService.divObs.next).toHaveBeenCalledWith(component.diagramDiv.nativeElement);
        expect(diagramService.drawSVG).toHaveBeenCalled();
    });
  });
});
