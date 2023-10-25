"use strict";
(self["webpackChunkcausal_diagram"] = self["webpackChunkcausal_diagram"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



const routes = [];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar/navbar.component */ 2247);



class AppComponent {
  constructor() {
    this.title = 'causal-diagram';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 2,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar")(1, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ 2247);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ 9743);
/* harmony import */ var _diagram_card_diagram_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./diagram-card/diagram-card.component */ 1576);
/* harmony import */ var _diagram_diagram_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./diagram/diagram.component */ 2731);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ 7728);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-button */ 8654);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/legacy-menu */ 662);
/* harmony import */ var _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/legacy-list */ 9038);
/* harmony import */ var _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/legacy-card */ 7665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
















class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__.LayoutModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_10__.MatLegacyButtonModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_13__.MatLegacyListModule, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_14__.MatLegacyCardModule, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_15__.MatLegacyMenuModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _diagram_card_diagram_card_component__WEBPACK_IMPORTED_MODULE_3__.DiagramCardComponent, _diagram_diagram_component__WEBPACK_IMPORTED_MODULE_4__.DiagramComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__.LayoutModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_10__.MatLegacyButtonModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_13__.MatLegacyListModule, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_14__.MatLegacyCardModule, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_15__.MatLegacyMenuModule]
  });
})();

/***/ }),

/***/ 1576:
/*!********************************************************!*\
  !*** ./src/app/diagram-card/diagram-card.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiagramCardComponent: () => (/* binding */ DiagramCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _pattern_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pattern.service */ 5265);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/legacy-card */ 7665);
/* harmony import */ var _diagram_diagram_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../diagram/diagram.component */ 2731);





function DiagramCardComponent_mat_card_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 1)(1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-diagram");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-card-content")(7, "ul")(8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.patternService.selectedPattern.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.patternService.selectedPattern.jugglerCount, " Jugglers");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.patternService.clubCount(ctx_r0.patternService.selectedPattern), " Clubs");
  }
}
class DiagramCardComponent {
  constructor(patternService) {
    this.patternService = patternService;
  }
  static #_ = this.ɵfac = function DiagramCardComponent_Factory(t) {
    return new (t || DiagramCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_pattern_service__WEBPACK_IMPORTED_MODULE_0__.PatternService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DiagramCardComponent,
    selectors: [["app-diagram-card"]],
    decls: 1,
    vars: 1,
    consts: [["class", "example-card", 4, "ngIf"], [1, "example-card"], ["mat-card-avatar", ""]],
    template: function DiagramCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DiagramCardComponent_mat_card_0_Template, 12, 3, "mat-card", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.patternService.selectedPattern);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_4__.MatLegacyCard, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_4__.MatLegacyCardHeader, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_4__.MatLegacyCardContent, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_4__.MatLegacyCardTitle, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_4__.MatLegacyCardAvatar, _diagram_diagram_component__WEBPACK_IMPORTED_MODULE_1__.DiagramComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2560:
/*!************************************!*\
  !*** ./src/app/diagram.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiagramService: () => (/* binding */ DiagramService)
/* harmony export */ });
/* harmony import */ var _model_Position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/Position */ 5657);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2484);
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @svgdotjs/svg.js */ 3725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _pattern_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pattern.service */ 5265);





class DiagramService {
  constructor(patternService) {
    this.patternService = patternService;
    this.CIRCLE_RADIUS = 40;
    this.ZIP_RADIUS = 20;
    this.ZIP_Y_OFFSET = 30;
    this.ZIP_X_OFFSET = 0;
    this.X_MARGIN = 50;
    this.BEAT_WIDTH = 100;
    this.Y_MARGIN = 75;
    this.BEAT_HEIGHT = 125;
    this.CIRCLE_CORNER_ANGLE = Math.PI / 4;
    this.CIRCLE_CORNER_X = Math.round(Math.cos(this.CIRCLE_CORNER_ANGLE) * this.CIRCLE_RADIUS * 100) / 100;
    this.CIRCLE_CORNER_Y = Math.round(Math.sin(this.CIRCLE_CORNER_ANGLE) * this.CIRCLE_RADIUS * 100) / 100;
    this.ZIP_CIRCLE_CORNER_X = Math.round(Math.sin(this.CIRCLE_CORNER_ANGLE) * this.ZIP_RADIUS * 100) / 100;
    this.ZIP_CIRCLE_CORNER_Y = Math.round(Math.sin(this.CIRCLE_CORNER_ANGLE) * this.ZIP_RADIUS * 100) / 100;
    this.divObs = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.divObs.subscribe(div => {
      this.div = div;
      this.drawSVG();
    });
  }
  drawSVG() {
    if (this.div == null) {
      return;
    }
    this.div.innerHTML = '';
    if (this.patternService.selectedPattern == null) {
      return;
    }
    const draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_1__.SVG)().addTo(this.div);
    const beatsToDraw = this.patternService.selectedPattern.beats.concat(this.patternService.selectedPattern.beats);
    this.diagramWidth = this.BEAT_WIDTH * beatsToDraw.length;
    this.diagramHeight = this.BEAT_HEIGHT * (this.patternService.selectedPattern.jugglerCount + 1);
    draw.viewbox(0, 0, this.diagramWidth, this.diagramHeight);
    const bgRect = draw.rect(this.diagramWidth, this.diagramHeight);
    bgRect.addClass('causalBgRect');
    // create arrow heads
    const defs = draw.defs();
    const arrowMarker = this.initArrow(defs);
    const borderWest = draw.line(0, 0, 0, this.diagramHeight);
    borderWest.addClass('causal_border');
    borderWest.id('causal_border_west');
    const borderEast = draw.line(this.diagramWidth, 0, this.diagramWidth, this.diagramHeight);
    borderEast.addClass('causal_border');
    borderEast.id('causal_border_east');
    const borderNorth = draw.line(0, 1, this.diagramWidth, 1);
    borderNorth.addClass('causal_border');
    borderNorth.id('causal_border_north');
    const borderSouth = draw.line(0, this.diagramHeight, this.diagramWidth, this.diagramHeight);
    borderSouth.addClass('causal_border');
    borderSouth.id('causal_border_south');
    beatsToDraw.forEach((beat, i) => {
      this.drawCircles(draw, i, beat.throws, arrowMarker);
    });
    beatsToDraw.forEach((beat, i) => {
      this.drawThrows(draw, i, beat.throws, arrowMarker, beatsToDraw);
    });
    return draw;
  }
  getBeatDiff(throwObj) {
    return throwObj.throwHeight - 2;
  }
  getBeatPosition(beatNb, jugglerNb) {
    return new _model_Position__WEBPACK_IMPORTED_MODULE_0__.Position(beatNb * this.BEAT_WIDTH + this.X_MARGIN, jugglerNb * this.BEAT_HEIGHT + this.Y_MARGIN);
  }
  getZipReceivePosition(beatNb, jugglerNb) {
    return new _model_Position__WEBPACK_IMPORTED_MODULE_0__.Position(beatNb * this.BEAT_WIDTH + this.X_MARGIN - this.ZIP_X_OFFSET, jugglerNb * this.BEAT_HEIGHT + this.Y_MARGIN - this.ZIP_Y_OFFSET);
  }
  getZipThrowPosition(beatNb, jugglerNb) {
    return new _model_Position__WEBPACK_IMPORTED_MODULE_0__.Position(beatNb * this.BEAT_WIDTH + this.X_MARGIN + this.ZIP_X_OFFSET, jugglerNb * this.BEAT_HEIGHT + this.Y_MARGIN + this.ZIP_Y_OFFSET);
  }
  getCircleUpperLeft(center, radius = this.CIRCLE_RADIUS) {
    const cornerAdj = Math.round(Math.cos(this.CIRCLE_CORNER_ANGLE) * radius * 100) / 100;
    return new _model_Position__WEBPACK_IMPORTED_MODULE_0__.Position(center.x - cornerAdj, center.y - cornerAdj);
  }
  getCircleUpperRight(center, radius = this.CIRCLE_RADIUS) {
    const cornerAdj = Math.round(Math.cos(this.CIRCLE_CORNER_ANGLE) * radius * 100) / 100;
    return new _model_Position__WEBPACK_IMPORTED_MODULE_0__.Position(center.x + cornerAdj, center.y - cornerAdj);
  }
  getCircleLowerLeft(center, radius = this.CIRCLE_RADIUS) {
    const cornerAdj = Math.round(Math.cos(this.CIRCLE_CORNER_ANGLE) * radius * 100) / 100;
    return new _model_Position__WEBPACK_IMPORTED_MODULE_0__.Position(center.x - cornerAdj, center.y + cornerAdj);
  }
  getCircleLowerRight(center, radius = this.CIRCLE_RADIUS) {
    const cornerAdj = Math.round(Math.cos(this.CIRCLE_CORNER_ANGLE) * radius * 100) / 100;
    return new _model_Position__WEBPACK_IMPORTED_MODULE_0__.Position(center.x + cornerAdj, center.y + cornerAdj);
  }
  getCircleLeft(center, radius = this.CIRCLE_RADIUS) {
    return new _model_Position__WEBPACK_IMPORTED_MODULE_0__.Position(center.x - radius, center.y);
  }
  getCircleRight(center, radius = this.CIRCLE_RADIUS) {
    return new _model_Position__WEBPACK_IMPORTED_MODULE_0__.Position(center.x + radius, center.y);
  }
  getCircleTop(center, radius = this.CIRCLE_RADIUS) {
    return new _model_Position__WEBPACK_IMPORTED_MODULE_0__.Position(center.x, center.y - radius);
  }
  getCircleBottom(center, radius = this.CIRCLE_RADIUS) {
    return new _model_Position__WEBPACK_IMPORTED_MODULE_0__.Position(center.x, center.y + radius);
  }
  drawCircles(draw, beatNb, throws, arrowMarker) {
    throws.forEach(throwObj => {
      if (throwObj.zip) {
        this.drawZipCircles(draw, beatNb, throwObj, arrowMarker);
      } else {
        this.drawNormalCircle(draw, beatNb, throwObj);
      }
    });
  }
  drawNormalCircle(draw, beatNb, throwObj) {
    const pos = this.getBeatPosition(beatNb, throwObj.sourceJuggler);
    // create the circle
    const circle = draw.circle();
    circle.radius(this.CIRCLE_RADIUS);
    circle.cx(pos.x);
    circle.cy(pos.y);
    circle.id('causal_beat_' + beatNb + '_juggler_' + throwObj.sourceJuggler);
    circle.addClass('causal_beat_circle');
    const text = draw.text(throwObj.sourceHand);
    text.x(pos.x - this.getTextXOffset(throwObj.sourceHand));
    text.y(pos.y);
    text.id('causal_beat_label_' + beatNb + '_juggler_' + throwObj.sourceJuggler);
    text.addClass('causal_beat_label');
    text.font({
      family: 'sans-serif',
      size: '35'
    });
  }
  getOtherHand(hand) {
    if (hand === 'R') {
      return 'L';
    } else {
      return 'R';
    }
  }
  getTextXOffset(hand) {
    if (hand === 'R') {
      return 12;
    } else {
      return 10;
    }
  }
  drawZipCircles(draw, beatNb, throwObj, arrowMarker) {
    const pos0 = this.getZipReceivePosition(beatNb, throwObj.sourceJuggler);
    // create the top (receiving circle)
    const circleTop = draw.circle();
    circleTop.radius(this.ZIP_RADIUS);
    circleTop.cx(pos0.x);
    circleTop.cy(pos0.y);
    circleTop.id('causal_beat_' + beatNb + '_juggler_' + throwObj.sourceJuggler + '_0');
    circleTop.addClass('causal_beat_circle');
    const textTop = draw.text(this.getOtherHand(throwObj.sourceHand));
    textTop.x(pos0.x - this.getTextXOffset(this.getOtherHand(throwObj.sourceHand)));
    textTop.y(pos0.y);
    textTop.id('causal_beat_label_' + beatNb + '_juggler_' + throwObj.sourceJuggler + '_0');
    textTop.addClass('causal_beat_label');
    textTop.font({
      family: 'sans-serif',
      size: '35'
    });
    const pos1 = this.getZipThrowPosition(beatNb, throwObj.sourceJuggler);
    // create the bottom (receiving circle)
    const circleBottom = draw.circle();
    circleBottom.radius(this.ZIP_RADIUS);
    circleBottom.cx(pos1.x);
    circleBottom.cy(pos1.y);
    circleBottom.id('causal_beat_' + beatNb + '_juggler_' + throwObj.sourceJuggler + '_1');
    circleBottom.addClass('causal_beat_circle');
    const textBottom = draw.text(throwObj.sourceHand);
    textBottom.x(pos1.x - this.getTextXOffset(throwObj.sourceHand));
    textBottom.y(pos1.y);
    textBottom.id('causal_beat_label_' + beatNb + '_juggler_' + throwObj.sourceJuggler + '_1');
    textBottom.addClass('causal_beat_label');
    textBottom.font({
      family: 'sans-serif',
      size: '35'
    });
    // zip line between the circles
    const startPos = this.getCircleBottom(pos0, this.ZIP_RADIUS);
    const endPos = this.getCircleTop(pos1, this.ZIP_RADIUS);
    const line = draw.line(startPos.x, startPos.y, endPos.x, endPos.y);
    line.addClass('causal_pass_line');
    line.marker('end', arrowMarker);
  }
  drawThrows(draw, beatNb, throws, arrowMarker, beatsToDraw) {
    for (let j = 0; j < throws.length; j++) {
      // TODO: need a better ID system for throws (multiplexes...)
      const id = 'throw_' + beatNb + '_' + throws[j].sourceJuggler;
      const targetThrow = this.getTargetThrow(beatNb, throws[j], beatsToDraw);
      if (this.isLineInDiagram(throws[j])) {
        this.drawThrowLine(draw, id, throws[j], beatNb, arrowMarker, targetThrow);
      } else {
        // this is a curve for a self throw (not 1 or 3)
        this.drawSelfCurve(draw, id, throws[j], beatNb, arrowMarker, targetThrow);
      }
    }
  }
  getTargetThrow(startBeat, sourceThrow, beats) {
    const targetBeatNumber = startBeat + sourceThrow.throwHeight - 2;
    const targetBeat = beats[targetBeatNumber % beats.length].throws.find(t => {
      return t.sourceJuggler === sourceThrow.targetJuggler;
    });
    return targetBeat;
  }
  initArrow(defs) {
    const arrowMarker = defs.marker(5, 5, function (add) {
      const path = add.path('M0,0 L0,3 L4.5,1.5 z');
      path.addClass('causal_arrow');
    });
    arrowMarker.ref(0, 1.5);
    arrowMarker.id('arrowMarker');
    return arrowMarker;
  }
  isLineInDiagram(throwObj) {
    if (throwObj.sourceJuggler !== throwObj.targetJuggler) {
      return true;
    } else {
      const beatDiff = throwObj.throwHeight - 2;
      return beatDiff === 1;
    }
  }
  drawThrowLine(draw, id, throwObj, beatNb, arrowMarker, targetThrow) {
    let beat1Pos = this.getBeatPosition(beatNb, throwObj.sourceJuggler);
    let beat1Radius = this.CIRCLE_RADIUS;
    if (throwObj.zip) {
      beat1Pos = this.getZipThrowPosition(beatNb, throwObj.sourceJuggler);
      beat1Radius = this.ZIP_RADIUS;
    }
    const beatDiff = this.getBeatDiff(throwObj);
    const beat2Nb = beatNb + beatDiff;
    let beat2Pos = this.getBeatPosition(beat2Nb, throwObj.targetJuggler);
    let beat2Radius = this.CIRCLE_RADIUS;
    if (targetThrow.zip) {
      beat2Pos = this.getZipReceivePosition(beat2Nb, throwObj.targetJuggler);
      beat2Radius = this.ZIP_RADIUS;
    }
    let startPos;
    let endPos;
    if (throwObj.sourceJuggler === throwObj.targetJuggler) {
      startPos = this.getCircleRight(beat1Pos, beat1Radius);
      endPos = this.getCircleLeft(beat2Pos, beat2Radius);
    } else {
      // this must be a positive height
      if (throwObj.sourceJuggler > throwObj.targetJuggler) {
        startPos = this.getCircleUpperRight(beat1Pos, beat1Radius);
        endPos = this.getCircleLowerLeft(beat2Pos, beat2Radius);
      } else {
        startPos = this.getCircleLowerRight(beat1Pos, beat1Radius);
        endPos = this.getCircleUpperLeft(beat2Pos, beat2Radius);
      }
    }
    const line = draw.line(startPos.x, startPos.y, endPos.x, endPos.y);
    line.addClass('causal_pass_line');
    line.id(id);
    if (endPos.x < this.diagramWidth) {
      line.marker('end', arrowMarker);
    }
  }
  drawSelfCurve(draw, id, throwObj, beatNb, arrowMarker, targetThrow) {
    let beat1Pos = this.getBeatPosition(beatNb, throwObj.sourceJuggler);
    let beat1Radius = this.CIRCLE_RADIUS;
    if (throwObj.zip) {
      beat1Pos = this.getZipThrowPosition(beatNb, throwObj.sourceJuggler);
      beat1Radius = this.ZIP_RADIUS;
    }
    const beatDiff = this.getBeatDiff(throwObj);
    const beat2Nb = beatNb + beatDiff;
    let beat2Pos = this.getBeatPosition(beat2Nb, throwObj.targetJuggler);
    let beat2Radius = this.CIRCLE_RADIUS;
    if (targetThrow.zip) {
      beat2Pos = this.getZipReceivePosition(beat2Nb, throwObj.targetJuggler);
      beat2Radius = this.ZIP_RADIUS;
    }
    let startPos;
    let endPos;
    let radiusX;
    let radiusY;
    const rotation = 0;
    const largeArcFlag = 0;
    const sweepFlag = 1;
    if (beatDiff === -2) {
      // backwards throw
      startPos = this.getCircleLowerLeft(beat1Pos, beat1Radius);
      endPos = this.getCircleLowerRight(beat2Pos, beat2Radius);
      radiusX = 100;
      radiusY = 100;
    } else if (beatDiff === -1) {
      startPos = this.getCircleBottom(beat1Pos, beat1Radius);
      endPos = this.getCircleBottom(beat2Pos, beat2Radius);
      radiusX = 100;
      radiusY = 100;
    } else if (beatDiff === 0) {
      startPos = this.getCircleUpperLeft(beat1Pos, beat1Radius);
      endPos = this.getCircleUpperRight(beat2Pos, beat2Radius);
      radiusX = 20;
      radiusY = 30;
    } else {
      startPos = this.getCircleUpperRight(beat1Pos, beat1Radius);
      endPos = this.getCircleUpperLeft(beat2Pos, beat2Radius);
      radiusX = 100 * (beatDiff - 1);
      radiusY = 100 * (beatDiff - 1);
    }
    const pathStr = 'm ' + startPos.x + ' ' + startPos.y + ' A ' + radiusX + ' ' + radiusY + ' ' + rotation + ' ' + largeArcFlag + ' ' + sweepFlag + ' ' + endPos.x + ' ' + endPos.y;
    const path = draw.path(pathStr);
    path.addClass('causal_pass_line');
    path.fill('transparent');
    path.id(id);
    if (endPos.x > 0 && endPos.x < this.diagramWidth) {
      path.marker('end', arrowMarker);
    }
  }
  static #_ = this.ɵfac = function DiagramService_Factory(t) {
    return new (t || DiagramService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_pattern_service__WEBPACK_IMPORTED_MODULE_2__.PatternService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: DiagramService,
    factory: DiagramService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2731:
/*!**********************************************!*\
  !*** ./src/app/diagram/diagram.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiagramComponent: () => (/* binding */ DiagramComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _diagram_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../diagram.service */ 2560);


const _c0 = ["diagramDiv"];
class DiagramComponent {
  constructor(diagramService) {
    this.diagramService = diagramService;
  }
  ngOnInit() {
    console.log(this.diagramDiv);
    this.diagramService.divObs.next(this.diagramDiv.nativeElement);
    this.diagramService.drawSVG();
  }
  static #_ = this.ɵfac = function DiagramComponent_Factory(t) {
    return new (t || DiagramComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_diagram_service__WEBPACK_IMPORTED_MODULE_0__.DiagramService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DiagramComponent,
    selectors: [["app-diagram"]],
    viewQuery: function DiagramComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.diagramDiv = _t.first);
      }
    },
    decls: 2,
    vars: 0,
    consts: [[1, "diagramDiv"], ["diagramDiv", ""]],
    template: function DiagramComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0, 1);
      }
    },
    styles: [".diagramDiv[_ngcontent-%COMP%] {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGlhZ3JhbS9kaWFncmFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhZ3JhbURpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5657:
/*!***********************************!*\
  !*** ./src/app/model/Position.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Position: () => (/* binding */ Position)
/* harmony export */ });
class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

/***/ }),

/***/ 2247:
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ 9743);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7422);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _pattern_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pattern.service */ 5265);
/* harmony import */ var _diagram_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../diagram.service */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 7728);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-button */ 8654);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-list */ 9038);
/* harmony import */ var _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-menu */ 662);
/* harmony import */ var _diagram_card_diagram_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../diagram-card/diagram-card.component */ 1576);














function NavbarComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_button_11_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const pattern_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.selectPattern(pattern_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pattern_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](pattern_r5.name);
  }
}
function NavbarComponent_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class NavbarComponent {
  constructor(breakpointObserver, patternService, diagramService) {
    this.breakpointObserver = breakpointObserver;
    this.patternService = patternService;
    this.diagramService = diagramService;
    this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Handset).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(result => result.matches));
  }
  selectPattern(pattern) {
    this.patternService.selectedPattern = pattern;
    this.diagramService.drawSVG();
  }
  downloadPattern() {
    const currentPattern = this.patternService.selectedPattern;
    if (currentPattern != null) {
      const fileName = currentPattern.name + '.json';
      const patternAsJson = JSON.stringify(currentPattern, null, 2);
      const uri = 'data:application/json,' + encodeURIComponent(patternAsJson);
      // do the download
      const link = document.createElement('a');
      link.download = fileName;
      link.href = uri;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
  uploadPattern(event) {
    const fileList = event.target.files;
    const patternService = this.patternService;
    const diagramService = this.diagramService;
    if (fileList.length > 0 && fileList[0] != null) {
      const reader = new FileReader();
      reader.onload = () => {
        const text = reader.result;
        const newPattern = JSON.parse(text);
        patternService.selectedPattern = newPattern;
        diagramService.drawSVG();
        patternService.addPattern(newPattern);
      };
      reader.readAsText(fileList[0]);
    }
  }
  static #_ = this.ɵfac = function NavbarComponent_Factory(t) {
    return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_pattern_service__WEBPACK_IMPORTED_MODULE_0__.PatternService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_diagram_service__WEBPACK_IMPORTED_MODULE_1__.DiagramService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: NavbarComponent,
    selectors: [["app-navbar"]],
    decls: 25,
    vars: 15,
    consts: [[1, "sidenav-container"], ["fixedInViewport", "true", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["mat-button", "", 1, "menuBarButton", 3, "matMenuTriggerFor"], ["patternMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-list-item", "", 3, "click"], ["type", "file", "accept", "application/json", 3, "hidden", "change"], ["patternFileInput", ""], ["color", "primary"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"]],
    template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-sidenav-container", 0)(1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-nav-list")(7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Select Pattern");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-menu", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, NavbarComponent_button_11_Template, 2, 1, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r3.click());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Upload Pattern");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NavbarComponent_Template_input_change_14_listener($event) {
          return ctx.uploadPattern($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_16_listener() {
          return ctx.downloadPattern();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Download Pattern");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-sidenav-content")(19, "mat-toolbar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, NavbarComponent_button_20_Template, 3, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Juggling Passing Causal Diagrams");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "app-diagram-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 9, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 11, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 7, ctx.isHandset$) ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.patternService.patterns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 13, ctx.isHandset$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_8__.MatLegacyButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_11__.MatLegacyNavList, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_11__.MatLegacyListItem, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_12__.MatLegacyMenu, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_12__.MatLegacyMenuItem, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_12__.MatLegacyMenuTrigger, _diagram_card_diagram_card_component__WEBPACK_IMPORTED_MODULE_2__.DiagramCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
    styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.menuBarButton[_ngcontent-%COMP%] {\n  font-size: inherit;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5tZW51QmFyQnV0dG9uIHtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5265:
/*!************************************!*\
  !*** ./src/app/pattern.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PatternService: () => (/* binding */ PatternService)
/* harmony export */ });
/* harmony import */ var _patterns_deathFromAbove_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patterns/deathFromAbove.json */ 8555);
/* harmony import */ var _patterns_earlyDouble_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patterns/earlyDouble.json */ 9158);
/* harmony import */ var _patterns_feed_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patterns/feed.json */ 634);
/* harmony import */ var _patterns_fourCount_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patterns/fourCount.json */ 3834);
/* harmony import */ var _patterns_lateDouble_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patterns/lateDouble.json */ 4096);
/* harmony import */ var _patterns_leftCastle_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patterns/leftCastle.json */ 8955);
/* harmony import */ var _patterns_leftDoubles_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patterns/leftDoubles.json */ 9209);
/* harmony import */ var _patterns_rightCastle_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patterns/rightCastle.json */ 234);
/* harmony import */ var _patterns_rightTriple_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patterns/rightTriple.json */ 4172);
/* harmony import */ var _patterns_selfTriple_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./patterns/selfTriple.json */ 9160);
/* harmony import */ var _patterns_TenClubThreeCountTriangle_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./patterns/TenClubThreeCountTriangle.json */ 248);
/* harmony import */ var _patterns_threeCount_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./patterns/threeCount.json */ 9003);
/* harmony import */ var _patterns_threeCountWith441_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./patterns/threeCountWith441.json */ 5894);
/* harmony import */ var _patterns_threeCountFeedWith441_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./patterns/threeCountFeedWith441.json */ 9648);
/* harmony import */ var _patterns_TriangleThing_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./patterns/TriangleThing.json */ 9806);
/* harmony import */ var _patterns_mildMadness_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./patterns/mildMadness.json */ 1971);
/* harmony import */ var _patterns_martinsMadness_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./patterns/martinsMadness.json */ 4153);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 1699);


















class PatternService {
  constructor() {
    this.patterns = [_patterns_deathFromAbove_json__WEBPACK_IMPORTED_MODULE_0__, _patterns_earlyDouble_json__WEBPACK_IMPORTED_MODULE_1__, _patterns_feed_json__WEBPACK_IMPORTED_MODULE_2__, _patterns_fourCount_json__WEBPACK_IMPORTED_MODULE_3__, _patterns_lateDouble_json__WEBPACK_IMPORTED_MODULE_4__, _patterns_leftCastle_json__WEBPACK_IMPORTED_MODULE_5__, _patterns_leftDoubles_json__WEBPACK_IMPORTED_MODULE_6__, _patterns_rightCastle_json__WEBPACK_IMPORTED_MODULE_7__, _patterns_rightTriple_json__WEBPACK_IMPORTED_MODULE_8__, _patterns_selfTriple_json__WEBPACK_IMPORTED_MODULE_9__, _patterns_TenClubThreeCountTriangle_json__WEBPACK_IMPORTED_MODULE_10__, _patterns_threeCount_json__WEBPACK_IMPORTED_MODULE_11__, _patterns_threeCountWith441_json__WEBPACK_IMPORTED_MODULE_12__, _patterns_threeCountFeedWith441_json__WEBPACK_IMPORTED_MODULE_13__, _patterns_TriangleThing_json__WEBPACK_IMPORTED_MODULE_14__, _patterns_mildMadness_json__WEBPACK_IMPORTED_MODULE_15__, _patterns_martinsMadness_json__WEBPACK_IMPORTED_MODULE_16__];
    this.selectedPattern = null;
  }
  clubCount(pattern) {
    let runningTotal = 0;
    for (const beat of pattern.beats) {
      for (const throwObj of beat.throws) {
        runningTotal += throwObj.throwHeight;
      }
    }
    const clubCount = runningTotal / pattern.beats.length;
    return clubCount;
  }
  addPattern(newPattern) {
    const idx = this.patterns.findIndex(pattern => {
      return pattern.name === newPattern.name;
    });
    if (idx >= 0) {
      this.patterns[idx] = newPattern;
    } else {
      this.patterns.push(newPattern);
    }
  }
  static #_ = this.ɵfac = function PatternService_Factory(t) {
    return new (t || PatternService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjectable"]({
    token: PatternService,
    factory: PatternService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 248:
/*!*********************************************************!*\
  !*** ./src/app/patterns/TenClubThreeCountTriangle.json ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"10 Club 3 Count Triangle","jugglerCount":3,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":4},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":2,"throwHeight":4},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":0,"throwHeight":4}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":1,"throwHeight":4},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":2,"throwHeight":4},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":0,"throwHeight":4}]}]}');

/***/ }),

/***/ 9806:
/*!*********************************************!*\
  !*** ./src/app/patterns/TriangleThing.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Triangle: 4 ct, 2 ct, Feed","jugglerCount":3,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":2,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":2,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":2,"throwHeight":3}]}]}');

/***/ }),

/***/ 8555:
/*!**********************************************!*\
  !*** ./src/app/patterns/deathFromAbove.json ***!
  \**********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Death From Above","jugglerCount":2,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":4}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":2},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":0,"throwHeight":4}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":5}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":0}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]}]}');

/***/ }),

/***/ 9158:
/*!*******************************************!*\
  !*** ./src/app/patterns/earlyDouble.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Early Double","jugglerCount":2,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":1,"throwHeight":4},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":2},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]}]}');

/***/ }),

/***/ 634:
/*!************************************!*\
  !*** ./src/app/patterns/feed.json ***!
  \************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Four Count Feed","jugglerCount":3,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":2,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":2,"throwHeight":3}]}]}');

/***/ }),

/***/ 3834:
/*!*****************************************!*\
  !*** ./src/app/patterns/fourCount.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Four Count","jugglerCount":2,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]}]}');

/***/ }),

/***/ 4096:
/*!******************************************!*\
  !*** ./src/app/patterns/lateDouble.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Late Double","jugglerCount":2,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":4},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":2}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]}]}');

/***/ }),

/***/ 8955:
/*!******************************************!*\
  !*** ./src/app/patterns/leftCastle.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Left Castle","jugglerCount":2,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":4},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":2},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]}]}');

/***/ }),

/***/ 9209:
/*!*******************************************!*\
  !*** ./src/app/patterns/leftDoubles.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Left Doubles","jugglerCount":2,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":2},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":4},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":2},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":1,"throwHeight":4},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]}]}');

/***/ }),

/***/ 4153:
/*!**********************************************!*\
  !*** ./src/app/patterns/martinsMadness.json ***!
  \**********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Martin\'s Madness","jugglerCount":3,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":2,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":2,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3,"zip":true},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":2,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":2,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":0,"throwHeight":3,"zip":true},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":2,"throwHeight":3}]}]}');

/***/ }),

/***/ 1971:
/*!*******************************************!*\
  !*** ./src/app/patterns/mildMadness.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Mild Madness","jugglerCount":2,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":1,"throwHeight":3,"zip":true},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3,"zip":true}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3,"zip":true},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":0,"throwHeight":3,"zip":true}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]}]}');

/***/ }),

/***/ 234:
/*!*******************************************!*\
  !*** ./src/app/patterns/rightCastle.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Right Castle","jugglerCount":2,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":4},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":2},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]}]}');

/***/ }),

/***/ 4172:
/*!*******************************************!*\
  !*** ./src/app/patterns/rightTriple.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Right Triple","jugglerCount":2,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":2},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":5},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":2},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]}]}');

/***/ }),

/***/ 9160:
/*!******************************************!*\
  !*** ./src/app/patterns/selfTriple.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Self Triple","jugglerCount":2,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":5},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":5}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":2},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":2}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":2},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":2}]}]}');

/***/ }),

/***/ 9003:
/*!******************************************!*\
  !*** ./src/app/patterns/threeCount.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Three Count","jugglerCount":2,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]}]}');

/***/ }),

/***/ 9648:
/*!*****************************************************!*\
  !*** ./src/app/patterns/threeCountFeedWith441.json ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Three Count Feed With 441","jugglerCount":3,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":4},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":2,"throwHeight":4},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":1},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":0,"throwHeight":4},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":2,"throwHeight":4},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":1},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]}]}');

/***/ }),

/***/ 5894:
/*!*************************************************!*\
  !*** ./src/app/patterns/threeCountWith441.json ***!
  \*************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Three Count With 441","jugglerCount":2,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":4},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":1},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":4},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":1,"throwHeight":4},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":1},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":4},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]}]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map