
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakpointObserver } from '@angular/cdk/layout';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let breakpointObserver: BreakpointObserver;

  beforeEach(async(() => {
    breakpointObserver = new BreakpointObserver(null, null);
    spyOn(breakpointObserver, 'observe').and.returnValue({
      pipe: ()=>{}
    });

    component = new NavbarComponent(breakpointObserver);
  }));

  beforeEach(() => {

  });


  it('should not error', () => {
    expect(component).toBeTruthy();
  });
});
