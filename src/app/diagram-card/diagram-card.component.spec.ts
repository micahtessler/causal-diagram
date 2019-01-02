import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramCardComponent } from './diagram-card.component';

describe('DiagramCardComponent', () => {
  let component: DiagramCardComponent;
  let patternService: any;

  beforeEach(async(() => {

  }));

  beforeEach(() => {
    patternService = {};
    component = new DiagramCardComponent(patternService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
