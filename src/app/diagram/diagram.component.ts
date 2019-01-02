import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DiagramService } from '../diagram.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit {
  @ViewChild('diagramDiv') diagramDiv: ElementRef;

  constructor(private diagramService: DiagramService) { }

  ngOnInit() {
    this.diagramService.divObs.next(this.diagramDiv.nativeElement);
    this.diagramService.drawSVG();
  }

}
