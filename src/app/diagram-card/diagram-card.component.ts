import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PatternService } from '../pattern.service';
import { DiagramService } from '../diagram.service';

@Component({
  selector: 'app-diagram-card',
  templateUrl: './diagram-card.component.html',
  styleUrls: ['./diagram-card.component.css']
})
export class DiagramCardComponent {
  
  constructor(public patternService : PatternService) { }

}
