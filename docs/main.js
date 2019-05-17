(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'causal-diagram';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _diagram_card_diagram_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./diagram-card/diagram-card.component */ "./src/app/diagram-card/diagram-card.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _diagram_diagram_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./diagram/diagram.component */ "./src/app/diagram/diagram.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _diagram_card_diagram_card_component__WEBPACK_IMPORTED_MODULE_7__["DiagramCardComponent"],
                _diagram_diagram_component__WEBPACK_IMPORTED_MODULE_9__["DiagramComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/diagram-card/diagram-card.component.css":
/*!*********************************************************!*\
  !*** ./src/app/diagram-card/diagram-card.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWdyYW0tY2FyZC9kaWFncmFtLWNhcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/diagram-card/diagram-card.component.html":
/*!**********************************************************!*\
  !*** ./src/app/diagram-card/diagram-card.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\" *ngIf=\"patternService.selectedPattern\">\n  <mat-card-header>\n    <div mat-card-avatar></div>\n    <mat-card-title>{{patternService.selectedPattern.name}}</mat-card-title>\n    <!--<mat-card-subtitle>Dog Breed</mat-card-subtitle>-->\n  </mat-card-header>\n  <app-diagram></app-diagram>\n  <mat-card-content>\n    <ul>\n      <li> {{patternService.selectedPattern.jugglerCount}} Jugglers</li>\n      <li> {{patternService.clubCount(patternService.selectedPattern)}} Clubs</li>\n    </ul>\n\n  </mat-card-content>\n  <!--\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n  -->\n</mat-card>\n"

/***/ }),

/***/ "./src/app/diagram-card/diagram-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/diagram-card/diagram-card.component.ts ***!
  \********************************************************/
/*! exports provided: DiagramCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagramCardComponent", function() { return DiagramCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pattern_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pattern.service */ "./src/app/pattern.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DiagramCardComponent = /** @class */ (function () {
    function DiagramCardComponent(patternService) {
        this.patternService = patternService;
    }
    DiagramCardComponent.prototype.ngOnInit = function () {
    };
    DiagramCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-diagram-card',
            template: __webpack_require__(/*! ./diagram-card.component.html */ "./src/app/diagram-card/diagram-card.component.html"),
            styles: [__webpack_require__(/*! ./diagram-card.component.css */ "./src/app/diagram-card/diagram-card.component.css")]
        }),
        __metadata("design:paramtypes", [_pattern_service__WEBPACK_IMPORTED_MODULE_1__["PatternService"]])
    ], DiagramCardComponent);
    return DiagramCardComponent;
}());



/***/ }),

/***/ "./src/app/diagram.service.ts":
/*!************************************!*\
  !*** ./src/app/diagram.service.ts ***!
  \************************************/
/*! exports provided: DiagramService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagramService", function() { return DiagramService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pattern_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pattern.service */ "./src/app/pattern.service.ts");
/* harmony import */ var _model_Position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/Position */ "./src/app/model/Position.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DiagramService = /** @class */ (function () {
    function DiagramService(patternService) {
        var _this = this;
        this.patternService = patternService;
        this.CIRCLE_RADIUS = 40;
        this.ZIP_RADIUS = 20;
        this.ZIP_Y_OFFSET = 20;
        this.ZIP_X_OFFSET = 20;
        this.X_MARGIN = 50;
        this.BEAT_WIDTH = 100;
        this.Y_MARGIN = 75;
        this.BEAT_HEIGHT = 125;
        this.CIRCLE_CORNER_ANGLE = Math.PI / 4;
        this.CIRCLE_CORNER_X = (Math.round((Math.cos(this.CIRCLE_CORNER_ANGLE) * this.CIRCLE_RADIUS) * 100) / 100);
        this.CIRCLE_CORNER_Y = (Math.round((Math.sin(this.CIRCLE_CORNER_ANGLE) * this.CIRCLE_RADIUS) * 100) / 100);
        this.ZIP_CIRCLE_CORNER_X = (Math.round((Math.sin(this.CIRCLE_CORNER_ANGLE) * this.ZIP_RADIUS) * 100) / 100);
        this.ZIP_CIRCLE_CORNER_Y = (Math.round((Math.sin(this.CIRCLE_CORNER_ANGLE) * this.ZIP_RADIUS) * 100) / 100);
        this.divObs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.divObs.subscribe(function (div) {
            _this.div = div;
            _this.drawSVG();
        });
    }
    DiagramService.prototype.drawSVG = function () {
        var _this = this;
        if (this.div == null) {
            return;
        }
        this.div.innerHTML = '';
        if (this.patternService.selectedPattern == null) {
            return;
        }
        var draw = SVG(this.div);
        this.diagramWidth = this.BEAT_WIDTH * this.patternService.selectedPattern.beats.length;
        this.diagramHeight = this.BEAT_HEIGHT * (this.patternService.selectedPattern.jugglerCount + 1);
        draw.viewbox(0, 0, this.diagramWidth, this.diagramHeight);
        var bgRect = draw.rect(this.diagramWidth, this.diagramHeight);
        bgRect.addClass('causalBgRect');
        // create arrow heads
        var defs = draw.defs();
        var arrowMarker = this.initArrow(defs);
        var borderWest = draw.line(0, 0, 0, this.diagramHeight);
        borderWest.addClass('causal_border');
        borderWest.id('causal_border_west');
        var borderEast = draw.line(this.diagramWidth, 0, this.diagramWidth, this.diagramHeight);
        borderEast.addClass('causal_border');
        borderEast.id('causal_border_east');
        var borderNorth = draw.line(0, 1, this.diagramWidth, 1);
        borderNorth.addClass('causal_border');
        borderNorth.id('causal_border_north');
        var borderSouth = draw.line(0, this.diagramHeight, this.diagramWidth, this.diagramHeight);
        borderSouth.addClass('causal_border');
        borderSouth.id('causal_border_south');
        this.patternService.selectedPattern.beats.forEach(function (beat, i) {
            _this.drawCircles(draw, i, beat.throws, arrowMarker);
        });
        this.patternService.selectedPattern.beats.forEach(function (beat, i) {
            _this.drawThrows(draw, i, beat.throws, arrowMarker, borderEast, borderWest, _this.patternService.selectedPattern);
        });
        return draw;
    };
    DiagramService.prototype.getBeatDiff = function (throwObj) {
        return throwObj.throwHeight - 2;
    };
    DiagramService.prototype.getBeatPosition = function (beatNb, jugglerNb) {
        return new _model_Position__WEBPACK_IMPORTED_MODULE_2__["Position"](beatNb * this.BEAT_WIDTH + this.X_MARGIN, jugglerNb * this.BEAT_HEIGHT + this.Y_MARGIN);
    };
    DiagramService.prototype.getZipReceivePosition = function (beatNb, jugglerNb) {
        return new _model_Position__WEBPACK_IMPORTED_MODULE_2__["Position"](beatNb * this.BEAT_WIDTH + this.X_MARGIN - this.ZIP_X_OFFSET, jugglerNb * this.BEAT_HEIGHT + this.Y_MARGIN - this.ZIP_Y_OFFSET);
    };
    DiagramService.prototype.getZipThrowPosition = function (beatNb, jugglerNb) {
        return new _model_Position__WEBPACK_IMPORTED_MODULE_2__["Position"](beatNb * this.BEAT_WIDTH + this.X_MARGIN + this.ZIP_X_OFFSET, jugglerNb * this.BEAT_HEIGHT + this.Y_MARGIN + this.ZIP_Y_OFFSET);
    };
    DiagramService.prototype.getCircleUpperLeft = function (center, radius) {
        if (radius === void 0) { radius = this.CIRCLE_RADIUS; }
        var cornerAdj = (Math.round((Math.cos(this.CIRCLE_CORNER_ANGLE) * radius) * 100) / 100);
        return new _model_Position__WEBPACK_IMPORTED_MODULE_2__["Position"](center.x - cornerAdj, center.y - cornerAdj);
    };
    DiagramService.prototype.getCircleUpperRight = function (center, radius) {
        if (radius === void 0) { radius = this.CIRCLE_RADIUS; }
        var cornerAdj = (Math.round((Math.cos(this.CIRCLE_CORNER_ANGLE) * radius) * 100) / 100);
        return new _model_Position__WEBPACK_IMPORTED_MODULE_2__["Position"](center.x + cornerAdj, center.y - cornerAdj);
    };
    DiagramService.prototype.getCircleLowerLeft = function (center, radius) {
        if (radius === void 0) { radius = this.CIRCLE_RADIUS; }
        var cornerAdj = (Math.round((Math.cos(this.CIRCLE_CORNER_ANGLE) * radius) * 100) / 100);
        return new _model_Position__WEBPACK_IMPORTED_MODULE_2__["Position"](center.x - cornerAdj, center.y + cornerAdj);
    };
    DiagramService.prototype.getCircleLowerRight = function (center, radius) {
        if (radius === void 0) { radius = this.CIRCLE_RADIUS; }
        var cornerAdj = (Math.round((Math.cos(this.CIRCLE_CORNER_ANGLE) * radius) * 100) / 100);
        return new _model_Position__WEBPACK_IMPORTED_MODULE_2__["Position"](center.x + cornerAdj, center.y + cornerAdj);
    };
    DiagramService.prototype.getCircleLeft = function (center, radius) {
        if (radius === void 0) { radius = this.CIRCLE_RADIUS; }
        return new _model_Position__WEBPACK_IMPORTED_MODULE_2__["Position"](center.x - radius, center.y);
    };
    DiagramService.prototype.getCircleRight = function (center, radius) {
        if (radius === void 0) { radius = this.CIRCLE_RADIUS; }
        return new _model_Position__WEBPACK_IMPORTED_MODULE_2__["Position"](center.x + radius, center.y);
    };
    DiagramService.prototype.getCircleTop = function (center, radius) {
        if (radius === void 0) { radius = this.CIRCLE_RADIUS; }
        return new _model_Position__WEBPACK_IMPORTED_MODULE_2__["Position"](center.x, center.y - radius);
    };
    DiagramService.prototype.getCircleBottom = function (center, radius) {
        if (radius === void 0) { radius = this.CIRCLE_RADIUS; }
        return new _model_Position__WEBPACK_IMPORTED_MODULE_2__["Position"](center.x, center.y + radius);
    };
    DiagramService.prototype.drawCircles = function (draw, beatNb, throws, arrowMarker) {
        var _this = this;
        throws.forEach(function (throwObj) {
            if (throwObj.zip) {
                _this.drawZipCircles(draw, beatNb, throwObj, arrowMarker);
            }
            else {
                _this.drawNormalCircle(draw, beatNb, throwObj);
            }
        });
    };
    DiagramService.prototype.drawNormalCircle = function (draw, beatNb, throwObj) {
        var pos = this.getBeatPosition(beatNb, throwObj.sourceJuggler);
        // create the circle
        var circle = draw.circle();
        circle.radius(this.CIRCLE_RADIUS);
        circle.cx(pos.x);
        circle.cy(pos.y);
        circle.id('causal_beat_' + beatNb + '_juggler_' + throwObj.sourceJuggler);
        circle.addClass('causal_beat_circle');
        var text = draw.text(throwObj.sourceHand);
        text.x(pos.x - this.getTextXOffset(throwObj.sourceHand));
        text.y(pos.y - 30);
        text.id('causal_beat_label_' + beatNb + '_juggler_' + throwObj.sourceJuggler);
        text.addClass('causal_beat_label');
        text.font({
            family: 'sans-serif',
            size: '35'
        });
    };
    DiagramService.prototype.getOtherHand = function (hand) {
        if (hand === 'R') {
            return 'L';
        }
        else {
            return 'R';
        }
    };
    DiagramService.prototype.getTextXOffset = function (hand) {
        if (hand === 'R') {
            return 12;
        }
        else {
            return 10;
        }
    };
    DiagramService.prototype.drawZipCircles = function (draw, beatNb, throwObj, arrowMarker) {
        var pos0 = this.getZipReceivePosition(beatNb, throwObj.sourceJuggler);
        // create the top (receiving circle)
        var circleTop = draw.circle();
        circleTop.radius(this.ZIP_RADIUS);
        circleTop.cx(pos0.x);
        circleTop.cy(pos0.y);
        circleTop.id('causal_beat_' + beatNb + '_juggler_' + throwObj.sourceJuggler + '_0');
        circleTop.addClass('causal_beat_circle');
        var textTop = draw.text(this.getOtherHand(throwObj.sourceHand));
        textTop.x(pos0.x - this.getTextXOffset(this.getOtherHand(throwObj.sourceHand)));
        textTop.y(pos0.y - 30);
        textTop.id('causal_beat_label_' + beatNb + '_juggler_' + throwObj.sourceJuggler + '_0');
        textTop.addClass('causal_beat_label');
        textTop.font({
            family: 'sans-serif',
            size: '35'
        });
        var pos1 = this.getZipThrowPosition(beatNb, throwObj.sourceJuggler);
        // create the bottom (receiving circle)
        var circleBottom = draw.circle();
        circleBottom.radius(this.ZIP_RADIUS);
        circleBottom.cx(pos1.x);
        circleBottom.cy(pos1.y);
        circleBottom.id('causal_beat_' + beatNb + '_juggler_' + throwObj.sourceJuggler + '_1');
        circleBottom.addClass('causal_beat_circle');
        var textBottom = draw.text(throwObj.sourceHand);
        textBottom.x(pos1.x - this.getTextXOffset(throwObj.sourceHand));
        textBottom.y(pos1.y - 30);
        textBottom.id('causal_beat_label_' + beatNb + '_juggler_' + throwObj.sourceJuggler + '_1');
        textBottom.addClass('causal_beat_label');
        textBottom.font({
            family: 'sans-serif',
            size: '35'
        });
        // zip line between the circles
        var startPos = this.getCircleLowerRight(pos0, this.ZIP_RADIUS);
        var endPos = this.getCircleUpperLeft(pos1, this.ZIP_RADIUS);
        var line = draw.line(startPos.x, startPos.y, endPos.x, endPos.y);
        line.addClass('causal_pass_line');
        line.marker('end', arrowMarker);
    };
    DiagramService.prototype.drawThrows = function (draw, beatNb, throws, arrowMarker, borderEast, borderWest, pattern) {
        for (var j = 0; j < throws.length; j++) {
            // TODO: need a better ID system for throws (multiplexes...)
            var id = 'throw_' + beatNb + '_' + throws[j].sourceJuggler;
            var targetThrow = this.getTargetThrow(beatNb, throws[j], pattern);
            if (this.isLineInDiagram(throws[j])) {
                this.drawThrowLine(draw, id, throws[j], beatNb, arrowMarker, borderEast, borderWest, targetThrow);
            }
            else {
                // this is a curve for a self throw (not 1 or 3)
                this.drawSelfCurve(draw, id, throws[j], beatNb, arrowMarker, borderEast, borderWest, targetThrow);
            }
        }
    };
    DiagramService.prototype.getTargetThrow = function (startBeat, sourceThrow, pattern) {
        var targetBeatNumber = (startBeat + sourceThrow.throwHeight - 2) % pattern.beats.length;
        var targetBeat = pattern.beats[targetBeatNumber].throws.find(function (t) {
            return (t.sourceJuggler === sourceThrow.targetJuggler);
        });
        return targetBeat;
    };
    DiagramService.prototype.initArrow = function (defs) {
        var arrowMarker = defs.marker(5, 5, function (add) {
            var path = add.path('M0,0 L0,3 L4.5,1.5 z');
            path.addClass('causal_arrow');
        });
        arrowMarker.ref(0, 1.5);
        arrowMarker.id('arrowMarker');
        return arrowMarker;
    };
    DiagramService.prototype.isLineInDiagram = function (throwObj) {
        if (throwObj.sourceJuggler !== throwObj.targetJuggler) {
            return true;
        }
        else {
            var beatDiff = (throwObj.throwHeight - 2);
            return (beatDiff === 1);
        }
    };
    DiagramService.prototype.drawThrowLine = function (draw, id, throwObj, beatNb, arrowMarker, borderEast, borderWest, targetThrow) {
        var beat1Pos = this.getBeatPosition(beatNb, throwObj.sourceJuggler);
        var beat1Radius = this.CIRCLE_RADIUS;
        if (throwObj.zip) {
            beat1Pos = this.getZipThrowPosition(beatNb, throwObj.sourceJuggler);
            beat1Radius = this.ZIP_RADIUS;
        }
        var beatDiff = this.getBeatDiff(throwObj);
        var beat2Nb = beatNb + beatDiff;
        var beat2Pos = this.getBeatPosition(beat2Nb, throwObj.targetJuggler);
        var beat2Radius = this.CIRCLE_RADIUS;
        if (targetThrow.zip) {
            beat2Pos = this.getZipReceivePosition(beat2Nb, throwObj.targetJuggler);
            beat2Radius = this.ZIP_RADIUS;
        }
        var straightThrow = false;
        var upThrow = false;
        var startPos;
        var endPos;
        if (throwObj.sourceJuggler === throwObj.targetJuggler) {
            straightThrow = true;
            startPos = this.getCircleRight(beat1Pos, beat1Radius);
            endPos = this.getCircleLeft(beat2Pos, beat2Radius);
        }
        else {
            // this must be a positive height
            if (throwObj.sourceJuggler > throwObj.targetJuggler) {
                upThrow = true;
                startPos = this.getCircleUpperRight(beat1Pos, beat1Radius);
                endPos = this.getCircleLowerLeft(beat2Pos, beat2Radius);
            }
            else {
                startPos = this.getCircleLowerRight(beat1Pos, beat1Radius);
                endPos = this.getCircleUpperLeft(beat2Pos, beat2Radius);
            }
        }
        var line = draw.line(startPos.x, startPos.y, endPos.x, endPos.y);
        line.addClass('causal_pass_line');
        line.id(id);
        line.marker('end', arrowMarker);
        var intersectionPoint = this.getLineIntersection(line, borderEast);
        if (intersectionPoint != null) {
            // wrapping around right diagram edge
            // remove the marker
            line.marker('end', 0, 0, function () { });
            line.plot(startPos.x, startPos.y, intersectionPoint.x, intersectionPoint.y);
            // create a new line starting from the edge of the screen.
            // Beat2Nb is negative, so add beats
            var newBeat2Nb = beat2Nb % this.patternService.selectedPattern.beats.length;
            var newBeat2Pos = this.getBeatPosition(newBeat2Nb, throwObj.targetJuggler);
            if (targetThrow.zip) {
                newBeat2Pos = this.getZipReceivePosition(newBeat2Nb, throwObj.targetJuggler);
            }
            if (straightThrow) {
                endPos = this.getCircleLeft(newBeat2Pos, beat2Radius);
            }
            else if (upThrow) {
                endPos = this.getCircleLowerLeft(newBeat2Pos, beat2Radius);
            }
            else {
                endPos = this.getCircleUpperLeft(newBeat2Pos, beat2Radius);
            }
            var newId = id + '_A';
            var line2 = draw.line(0, intersectionPoint.y, endPos.x, endPos.y);
            line2.addClass('causal_pass_line');
            line2.id(newId);
            line2.marker('end', arrowMarker);
        }
    };
    DiagramService.prototype.drawSelfCurve = function (draw, id, throwObj, beatNb, arrowMarker, borderEast, borderWest, targetThrow) {
        var beat1Pos = this.getBeatPosition(beatNb, throwObj.sourceJuggler);
        var beat1Radius = this.CIRCLE_RADIUS;
        if (throwObj.zip) {
            beat1Pos = this.getZipThrowPosition(beatNb, throwObj.sourceJuggler);
            beat1Radius = this.ZIP_RADIUS;
        }
        var beatDiff = this.getBeatDiff(throwObj);
        var beat2Nb = beatNb + beatDiff;
        var beat2Pos = this.getBeatPosition(beat2Nb, throwObj.targetJuggler);
        var beat2Radius = this.CIRCLE_RADIUS;
        if (targetThrow.zip) {
            beat2Pos = this.getZipReceivePosition(beat2Nb, throwObj.targetJuggler);
            beat2Radius = this.ZIP_RADIUS;
        }
        var startPos;
        var endPos;
        var radiusX;
        var radiusY;
        var rotation = 0;
        var largeArcFlag = 0;
        var sweepFlag = 1;
        if (beatDiff === -2) {
            // backwards throw
            startPos = this.getCircleLowerLeft(beat1Pos, beat1Radius);
            endPos = this.getCircleLowerRight(beat2Pos, beat2Radius);
            radiusX = 100;
            radiusY = 100;
        }
        else if (beatDiff === -1) {
            startPos = this.getCircleBottom(beat1Pos, beat1Radius);
            endPos = this.getCircleBottom(beat2Pos, beat2Radius);
            radiusX = 100;
            radiusY = 100;
        }
        else if (beatDiff === 0) {
            startPos = this.getCircleUpperLeft(beat1Pos, beat1Radius);
            endPos = this.getCircleUpperRight(beat2Pos, beat2Radius);
            radiusX = 20;
            radiusY = 30;
        }
        else {
            startPos = this.getCircleUpperRight(beat1Pos, beat1Radius);
            endPos = this.getCircleUpperLeft(beat2Pos, beat2Radius);
            radiusX = 100 * (beatDiff - 1);
            radiusY = 100 * (beatDiff - 1);
        }
        var pathStr = 'm ' + startPos.x + ' ' + startPos.y + ' A ' + radiusX + ' ' +
            radiusY + ' ' + rotation + ' ' + largeArcFlag + ' ' + sweepFlag + ' ' + endPos.x + ' ' + endPos.y;
        var path = draw.path(pathStr);
        path.addClass('causal_pass_line');
        path.fill('transparent');
        path.id(id);
        path.marker('end', arrowMarker);
        var intersectionPoint = this.getLineIntersection(path, borderEast);
        if (intersectionPoint != null) {
            // wrapping around right diagram edge
            // remove the marker
            path.marker('end', 0, 0, function () { });
            pathStr = 'm ' + startPos.x + ' ' + startPos.y + ' A ' + radiusX + ' ' +
                radiusY + ' ' + rotation + ' ' + largeArcFlag + ' ' + sweepFlag + ' ' + intersectionPoint.x + ' ' + intersectionPoint.y;
            path.plot(pathStr);
            var newBeat2Nb = beat2Nb % this.patternService.selectedPattern.beats.length;
            var newBeat2Pos = this.getBeatPosition(newBeat2Nb, throwObj.targetJuggler);
            if (targetThrow.zip) {
                newBeat2Pos = this.getZipReceivePosition(newBeat2Nb, throwObj.targetJuggler);
            }
            // has to be forwards
            endPos = this.getCircleUpperLeft(newBeat2Pos, beat2Radius);
            var newId = id + '_A';
            pathStr = 'm ' + 0 + ' ' + intersectionPoint.y + ' A ' + radiusX + ' ' +
                radiusY + ' ' + rotation + ' ' + largeArcFlag + ' ' + sweepFlag + ' ' + endPos.x + ' ' + endPos.y;
            var path2 = draw.path(pathStr);
            path2.addClass('causal_pass_line');
            path2.fill('transparent');
            path2.id(newId);
            path2.marker('end', arrowMarker);
        }
        intersectionPoint = this.getLineIntersection(path, borderWest);
        if (intersectionPoint != null) {
            // wrapping around left diagram edge
            // remove the marker
            path.marker('end', 0, 0, function () { });
            pathStr = 'm ' + startPos.x + ' ' + startPos.y + ' A ' + radiusX + ' ' +
                radiusY + ' ' + rotation + ' ' + largeArcFlag + ' ' + sweepFlag + ' ' + intersectionPoint.x + ' ' + intersectionPoint.y;
            path.plot(pathStr);
            // create a new line starting from the edge of the screen.
            var newBeat2Nb = beat2Nb;
            while (newBeat2Nb < 0) {
                newBeat2Nb += this.patternService.selectedPattern.beats.length;
            }
            var newBeat2Pos = this.getBeatPosition(newBeat2Nb, throwObj.targetJuggler);
            if (targetThrow.zip) {
                newBeat2Pos = this.getZipReceivePosition(newBeat2Nb, throwObj.targetJuggler);
            }
            // has to be backwards
            endPos = this.getCircleLowerRight(newBeat2Pos, beat2Radius);
            var newId = id + '_A';
            pathStr = 'm ' + this.diagramWidth + ' ' + intersectionPoint.y + ' A ' + radiusX + ' ' +
                radiusY + ' ' + rotation + ' ' + largeArcFlag + ' ' + sweepFlag + ' ' + endPos.x + ' ' + endPos.y;
            var path2 = draw.path(pathStr);
            path2.addClass('causal_pass_line');
            path2.fill('transparent');
            path2.id(newId);
            path2.marker('end', arrowMarker);
        }
    };
    DiagramService.prototype.getLineIntersection = function (lineOrPath, line) {
        if (line == null) {
            return null;
        }
        var intersectionPoints = lineOrPath.intersectsLine(line);
        if (intersectionPoints != null) {
            if (intersectionPoints.length != null) {
                if (intersectionPoints.length > 0) {
                    return intersectionPoints[0];
                }
                else {
                    return null;
                }
            }
            else {
                return intersectionPoints;
            }
        }
        else {
            return null;
        }
    };
    DiagramService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_pattern_service__WEBPACK_IMPORTED_MODULE_1__["PatternService"]])
    ], DiagramService);
    return DiagramService;
}());



/***/ }),

/***/ "./src/app/diagram/diagram.component.css":
/*!***********************************************!*\
  !*** ./src/app/diagram/diagram.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".diagramDiv {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhZ3JhbS9kaWFncmFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9kaWFncmFtL2RpYWdyYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFncmFtRGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/diagram/diagram.component.html":
/*!************************************************!*\
  !*** ./src/app/diagram/diagram.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #diagramDiv class=\"diagramDiv\"></div>\n"

/***/ }),

/***/ "./src/app/diagram/diagram.component.ts":
/*!**********************************************!*\
  !*** ./src/app/diagram/diagram.component.ts ***!
  \**********************************************/
/*! exports provided: DiagramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagramComponent", function() { return DiagramComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _diagram_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../diagram.service */ "./src/app/diagram.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DiagramComponent = /** @class */ (function () {
    function DiagramComponent(diagramService) {
        this.diagramService = diagramService;
    }
    DiagramComponent.prototype.ngOnInit = function () {
        this.diagramService.divObs.next(this.diagramDiv.nativeElement);
        this.diagramService.drawSVG();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('diagramDiv'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DiagramComponent.prototype, "diagramDiv", void 0);
    DiagramComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-diagram',
            template: __webpack_require__(/*! ./diagram.component.html */ "./src/app/diagram/diagram.component.html"),
            styles: [__webpack_require__(/*! ./diagram.component.css */ "./src/app/diagram/diagram.component.css")]
        }),
        __metadata("design:paramtypes", [_diagram_service__WEBPACK_IMPORTED_MODULE_1__["DiagramService"]])
    ], DiagramComponent);
    return DiagramComponent;
}());



/***/ }),

/***/ "./src/app/model/Position.ts":
/*!***********************************!*\
  !*** ./src/app/model/Position.ts ***!
  \***********************************/
/*! exports provided: Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
var Position = /** @class */ (function () {
    function Position(x, y) {
        this.x = x;
        this.y = y;
    }
    return Position;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.menuBarButton {\n  font-size: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ubWVudUJhckJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"!(isHandset$ | async)\">\n    <mat-nav-list>\n\n      <button class=\"menuBarButton\" mat-button [matMenuTriggerFor]=\"patternMenu\">Select Pattern</button>\n      <mat-menu #patternMenu=\"matMenu\">\n          <button (click)=\"selectPattern(pattern)\" *ngFor=\"let pattern of patternService.patterns\" mat-menu-item>{{pattern.name}}</button>\n        </mat-menu>\n      \n      <!--<a mat-list-item href=\"#\">Upload Pattern</a>-->\n      <a mat-list-item (click)=\"patternFileInput.click()\">Upload Pattern</a> \n      <input [hidden]=true type=\"file\" #patternFileInput (change)=\"uploadPattern($event)\" accept=\"application/json\"/>\n      \n      <a mat-list-item (click)=\"downloadPattern()\">Download Pattern</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>Juggling Passing Causal Diagrams</span>\n    </mat-toolbar>\n    <!-- Add Content Here -->\n    \n  <app-diagram-card></app-diagram-card>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _pattern_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pattern.service */ "./src/app/pattern.service.ts");
/* harmony import */ var _diagram_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../diagram.service */ "./src/app/diagram.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(breakpointObserver, patternService, diagramService) {
        this.breakpointObserver = breakpointObserver;
        this.patternService = patternService;
        this.diagramService = diagramService;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    NavbarComponent.prototype.selectPattern = function (pattern) {
        this.patternService.selectedPattern = pattern;
        this.diagramService.drawSVG();
    };
    NavbarComponent.prototype.downloadPattern = function () {
        var currentPattern = this.patternService.selectedPattern;
        if (currentPattern != null) {
            var fileName = currentPattern.name + '.json';
            var patternAsJson = JSON.stringify(currentPattern, null, 2);
            var uri = 'data:application/json,' + encodeURIComponent(patternAsJson);
            // do the download
            var link = document.createElement('a');
            link.download = fileName;
            link.href = uri;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };
    NavbarComponent.prototype.uploadPattern = function (event) {
        var fileList = event.target.files;
        var patternService = this.patternService;
        var diagramService = this.diagramService;
        if (fileList.length > 0 && fileList[0] != null) {
            var reader_1 = new FileReader();
            reader_1.onload = function () {
                var text = reader_1.result;
                var newPattern = JSON.parse(text);
                patternService.selectedPattern = newPattern;
                diagramService.drawSVG();
                patternService.addPattern(newPattern);
            };
            reader_1.readAsText(fileList[0]);
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"], _pattern_service__WEBPACK_IMPORTED_MODULE_3__["PatternService"],
            _diagram_service__WEBPACK_IMPORTED_MODULE_4__["DiagramService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pattern.service.ts":
/*!************************************!*\
  !*** ./src/app/pattern.service.ts ***!
  \************************************/
/*! exports provided: PatternService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternService", function() { return PatternService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _patterns_deathFromAbove_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patterns/deathFromAbove.json */ "./src/app/patterns/deathFromAbove.json");
var _patterns_deathFromAbove_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./patterns/deathFromAbove.json */ "./src/app/patterns/deathFromAbove.json", 1);
/* harmony import */ var _patterns_earlyDouble_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patterns/earlyDouble.json */ "./src/app/patterns/earlyDouble.json");
var _patterns_earlyDouble_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./patterns/earlyDouble.json */ "./src/app/patterns/earlyDouble.json", 1);
/* harmony import */ var _patterns_feed_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patterns/feed.json */ "./src/app/patterns/feed.json");
var _patterns_feed_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./patterns/feed.json */ "./src/app/patterns/feed.json", 1);
/* harmony import */ var _patterns_fourCount_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patterns/fourCount.json */ "./src/app/patterns/fourCount.json");
var _patterns_fourCount_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./patterns/fourCount.json */ "./src/app/patterns/fourCount.json", 1);
/* harmony import */ var _patterns_lateDouble_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patterns/lateDouble.json */ "./src/app/patterns/lateDouble.json");
var _patterns_lateDouble_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./patterns/lateDouble.json */ "./src/app/patterns/lateDouble.json", 1);
/* harmony import */ var _patterns_leftCastle_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patterns/leftCastle.json */ "./src/app/patterns/leftCastle.json");
var _patterns_leftCastle_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./patterns/leftCastle.json */ "./src/app/patterns/leftCastle.json", 1);
/* harmony import */ var _patterns_leftDoubles_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patterns/leftDoubles.json */ "./src/app/patterns/leftDoubles.json");
var _patterns_leftDoubles_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./patterns/leftDoubles.json */ "./src/app/patterns/leftDoubles.json", 1);
/* harmony import */ var _patterns_rightCastle_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patterns/rightCastle.json */ "./src/app/patterns/rightCastle.json");
var _patterns_rightCastle_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./patterns/rightCastle.json */ "./src/app/patterns/rightCastle.json", 1);
/* harmony import */ var _patterns_rightTriple_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./patterns/rightTriple.json */ "./src/app/patterns/rightTriple.json");
var _patterns_rightTriple_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./patterns/rightTriple.json */ "./src/app/patterns/rightTriple.json", 1);
/* harmony import */ var _patterns_selfTriple_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./patterns/selfTriple.json */ "./src/app/patterns/selfTriple.json");
var _patterns_selfTriple_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./patterns/selfTriple.json */ "./src/app/patterns/selfTriple.json", 1);
/* harmony import */ var _patterns_TenClubThreeCountTriangle_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./patterns/TenClubThreeCountTriangle.json */ "./src/app/patterns/TenClubThreeCountTriangle.json");
var _patterns_TenClubThreeCountTriangle_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./patterns/TenClubThreeCountTriangle.json */ "./src/app/patterns/TenClubThreeCountTriangle.json", 1);
/* harmony import */ var _patterns_threeCount_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./patterns/threeCount.json */ "./src/app/patterns/threeCount.json");
var _patterns_threeCount_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./patterns/threeCount.json */ "./src/app/patterns/threeCount.json", 1);
/* harmony import */ var _patterns_threeCountWith441_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./patterns/threeCountWith441.json */ "./src/app/patterns/threeCountWith441.json");
var _patterns_threeCountWith441_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./patterns/threeCountWith441.json */ "./src/app/patterns/threeCountWith441.json", 1);
/* harmony import */ var _patterns_TriangleThing_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./patterns/TriangleThing.json */ "./src/app/patterns/TriangleThing.json");
var _patterns_TriangleThing_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./patterns/TriangleThing.json */ "./src/app/patterns/TriangleThing.json", 1);
/* harmony import */ var _patterns_mildMadness_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./patterns/mildMadness.json */ "./src/app/patterns/mildMadness.json");
var _patterns_mildMadness_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./patterns/mildMadness.json */ "./src/app/patterns/mildMadness.json", 1);
/* harmony import */ var _patterns_martinsMadness_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./patterns/martinsMadness.json */ "./src/app/patterns/martinsMadness.json");
var _patterns_martinsMadness_json__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./patterns/martinsMadness.json */ "./src/app/patterns/martinsMadness.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var PatternService = /** @class */ (function () {
    function PatternService() {
        this.patterns = [
            _patterns_deathFromAbove_json__WEBPACK_IMPORTED_MODULE_1__,
            _patterns_earlyDouble_json__WEBPACK_IMPORTED_MODULE_2__,
            _patterns_feed_json__WEBPACK_IMPORTED_MODULE_3__,
            _patterns_fourCount_json__WEBPACK_IMPORTED_MODULE_4__,
            _patterns_lateDouble_json__WEBPACK_IMPORTED_MODULE_5__,
            _patterns_leftCastle_json__WEBPACK_IMPORTED_MODULE_6__,
            _patterns_leftDoubles_json__WEBPACK_IMPORTED_MODULE_7__,
            _patterns_rightCastle_json__WEBPACK_IMPORTED_MODULE_8__,
            _patterns_rightTriple_json__WEBPACK_IMPORTED_MODULE_9__,
            _patterns_selfTriple_json__WEBPACK_IMPORTED_MODULE_10__,
            _patterns_TenClubThreeCountTriangle_json__WEBPACK_IMPORTED_MODULE_11__,
            _patterns_threeCount_json__WEBPACK_IMPORTED_MODULE_12__,
            _patterns_threeCountWith441_json__WEBPACK_IMPORTED_MODULE_13__,
            _patterns_TriangleThing_json__WEBPACK_IMPORTED_MODULE_14__,
            _patterns_mildMadness_json__WEBPACK_IMPORTED_MODULE_15__,
            _patterns_martinsMadness_json__WEBPACK_IMPORTED_MODULE_16__
        ];
        this.selectedPattern = null;
    }
    PatternService.prototype.clubCount = function (pattern) {
        var runningTotal = 0;
        for (var _i = 0, _a = pattern.beats; _i < _a.length; _i++) {
            var beat = _a[_i];
            for (var _b = 0, _c = beat.throws; _b < _c.length; _b++) {
                var throwObj = _c[_b];
                runningTotal += throwObj.throwHeight;
            }
        }
        var clubCount = runningTotal / (pattern.beats.length);
        return clubCount;
    };
    PatternService.prototype.addPattern = function (newPattern) {
        var idx = this.patterns.findIndex(function (pattern) {
            return pattern.name === newPattern.name;
        });
        if (idx >= 0) {
            this.patterns[idx] = newPattern;
        }
        else {
            this.patterns.push(newPattern);
        }
    };
    PatternService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PatternService);
    return PatternService;
}());



/***/ }),

/***/ "./src/app/patterns/TenClubThreeCountTriangle.json":
/*!*********************************************************!*\
  !*** ./src/app/patterns/TenClubThreeCountTriangle.json ***!
  \*********************************************************/
/*! exports provided: name, jugglerCount, beats, default */
/***/ (function(module) {

module.exports = {"name":"10 Club 3 Count Triangle","jugglerCount":3,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":4},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":2,"throwHeight":4},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":0,"throwHeight":4}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":1,"throwHeight":4},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":2,"throwHeight":4},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":0,"throwHeight":4}]}]};

/***/ }),

/***/ "./src/app/patterns/TriangleThing.json":
/*!*********************************************!*\
  !*** ./src/app/patterns/TriangleThing.json ***!
  \*********************************************/
/*! exports provided: name, jugglerCount, beats, default */
/***/ (function(module) {

module.exports = {"name":"Triangle: 4 ct, 2 ct, Feed","jugglerCount":3,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":2,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":2,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":2,"throwHeight":3}]}]};

/***/ }),

/***/ "./src/app/patterns/deathFromAbove.json":
/*!**********************************************!*\
  !*** ./src/app/patterns/deathFromAbove.json ***!
  \**********************************************/
/*! exports provided: name, jugglerCount, beats, default */
/***/ (function(module) {

module.exports = {"name":"Death From Above","jugglerCount":2,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":4}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":2},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":0,"throwHeight":4}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":5}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":0}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]}]};

/***/ }),

/***/ "./src/app/patterns/earlyDouble.json":
/*!*******************************************!*\
  !*** ./src/app/patterns/earlyDouble.json ***!
  \*******************************************/
/*! exports provided: name, jugglerCount, beats, default */
/***/ (function(module) {

module.exports = {"name":"Early Double","jugglerCount":2,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":1,"throwHeight":4},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":2},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]}]};

/***/ }),

/***/ "./src/app/patterns/feed.json":
/*!************************************!*\
  !*** ./src/app/patterns/feed.json ***!
  \************************************/
/*! exports provided: name, jugglerCount, beats, default */
/***/ (function(module) {

module.exports = {"name":"Four Count Feed","jugglerCount":3,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":2,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":2,"throwHeight":3}]}]};

/***/ }),

/***/ "./src/app/patterns/fourCount.json":
/*!*****************************************!*\
  !*** ./src/app/patterns/fourCount.json ***!
  \*****************************************/
/*! exports provided: name, jugglerCount, beats, default */
/***/ (function(module) {

module.exports = {"name":"Four Count","jugglerCount":2,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]}]};

/***/ }),

/***/ "./src/app/patterns/lateDouble.json":
/*!******************************************!*\
  !*** ./src/app/patterns/lateDouble.json ***!
  \******************************************/
/*! exports provided: name, jugglerCount, beats, default */
/***/ (function(module) {

module.exports = {"name":"Late Double","jugglerCount":2,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":4},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":2}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]}]};

/***/ }),

/***/ "./src/app/patterns/leftCastle.json":
/*!******************************************!*\
  !*** ./src/app/patterns/leftCastle.json ***!
  \******************************************/
/*! exports provided: name, jugglerCount, beats, default */
/***/ (function(module) {

module.exports = {"name":"Left Castle","jugglerCount":2,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":4},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":2},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]}]};

/***/ }),

/***/ "./src/app/patterns/leftDoubles.json":
/*!*******************************************!*\
  !*** ./src/app/patterns/leftDoubles.json ***!
  \*******************************************/
/*! exports provided: name, jugglerCount, beats, default */
/***/ (function(module) {

module.exports = {"name":"Left Doubles","jugglerCount":2,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":2},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":4},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":2},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":1,"throwHeight":4},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]}]};

/***/ }),

/***/ "./src/app/patterns/martinsMadness.json":
/*!**********************************************!*\
  !*** ./src/app/patterns/martinsMadness.json ***!
  \**********************************************/
/*! exports provided: name, jugglerCount, beats, default */
/***/ (function(module) {

module.exports = {"name":"Martin's Madness","jugglerCount":3,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":2,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":2,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3,"zip":true},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":2,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":2,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":0,"throwHeight":3,"zip":true},{"sourceJuggler":2,"sourceHand":"R","targetJuggler":2,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":2,"sourceHand":"L","targetJuggler":2,"throwHeight":3}]}]};

/***/ }),

/***/ "./src/app/patterns/mildMadness.json":
/*!*******************************************!*\
  !*** ./src/app/patterns/mildMadness.json ***!
  \*******************************************/
/*! exports provided: name, jugglerCount, beats, default */
/***/ (function(module) {

module.exports = {"name":"Mild Madness","jugglerCount":2,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":1,"throwHeight":3,"zip":true},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3,"zip":true}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3,"zip":true},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":0,"throwHeight":3,"zip":true}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]}]};

/***/ }),

/***/ "./src/app/patterns/rightCastle.json":
/*!*******************************************!*\
  !*** ./src/app/patterns/rightCastle.json ***!
  \*******************************************/
/*! exports provided: name, jugglerCount, beats, default */
/***/ (function(module) {

module.exports = {"name":"Right Castle","jugglerCount":2,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":4},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":2},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]}]};

/***/ }),

/***/ "./src/app/patterns/rightTriple.json":
/*!*******************************************!*\
  !*** ./src/app/patterns/rightTriple.json ***!
  \*******************************************/
/*! exports provided: name, jugglerCount, beats, default */
/***/ (function(module) {

module.exports = {"name":"Right Triple","jugglerCount":2,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":2},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":5},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":2},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]}]};

/***/ }),

/***/ "./src/app/patterns/selfTriple.json":
/*!******************************************!*\
  !*** ./src/app/patterns/selfTriple.json ***!
  \******************************************/
/*! exports provided: name, jugglerCount, beats, default */
/***/ (function(module) {

module.exports = {"name":"Self Triple","jugglerCount":2,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":5},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":5}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":2},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":2}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":2},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":2}]}]};

/***/ }),

/***/ "./src/app/patterns/threeCount.json":
/*!******************************************!*\
  !*** ./src/app/patterns/threeCount.json ***!
  \******************************************/
/*! exports provided: name, jugglerCount, beats, default */
/***/ (function(module) {

module.exports = {"name":"Three Count","jugglerCount":2,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":1,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":3},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]}]};

/***/ }),

/***/ "./src/app/patterns/threeCountWith441.json":
/*!*************************************************!*\
  !*** ./src/app/patterns/threeCountWith441.json ***!
  \*************************************************/
/*! exports provided: name, jugglerCount, beats, default */
/***/ (function(module) {

module.exports = {"name":"Three Count With 441","jugglerCount":2,"beats":[{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":1,"throwHeight":4},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":1},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":4},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":1,"throwHeight":4},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"R","targetJuggler":0,"throwHeight":1},{"sourceJuggler":1,"sourceHand":"R","targetJuggler":0,"throwHeight":3}]},{"throws":[{"sourceJuggler":0,"sourceHand":"L","targetJuggler":0,"throwHeight":4},{"sourceJuggler":1,"sourceHand":"L","targetJuggler":1,"throwHeight":3}]}]};

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fcprxbci/Documents/projects/mtessler/causal-diagram/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map