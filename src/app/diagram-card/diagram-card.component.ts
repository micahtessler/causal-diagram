import { Component } from '@angular/core';
import { PatternService } from '../pattern.service';
import { MatCard, MatCardHeader, MatCardAvatar, MatCardTitle, MatCardContent } from '@angular/material/card';
import { DiagramComponent } from '../diagram/diagram.component';

@Component({
    selector: 'app-diagram-card',
    templateUrl: './diagram-card.component.html',
    styleUrls: ['./diagram-card.component.css'],
    imports: [MatCard, MatCardHeader, MatCardAvatar, MatCardTitle, DiagramComponent, MatCardContent]
})
export class DiagramCardComponent {
  
  constructor(public patternService : PatternService) { }

}
