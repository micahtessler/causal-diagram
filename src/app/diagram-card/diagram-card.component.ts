import { Component, OnInit } from '@angular/core';
import { PatternService } from '../pattern.service';

@Component({
  selector: 'app-diagram-card',
  templateUrl: './diagram-card.component.html',
  styleUrls: ['./diagram-card.component.css']
})
export class DiagramCardComponent implements OnInit {
  
  constructor(public patternService : PatternService) { }

  ngOnInit() {
  }
}
