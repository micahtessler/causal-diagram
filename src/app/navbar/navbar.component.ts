import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pattern } from '../model/Pattern';
import { PatternService } from '../pattern.service';
import { DiagramService } from '../diagram.service';
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { MatNavList, MatListItem } from '@angular/material/list';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { DiagramCardComponent } from '../diagram-card/diagram-card.component';
import { AsyncPipe } from '@angular/common';



@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    imports: [MatSidenavContainer, MatSidenav, MatNavList, MatButton, MatMenuTrigger, MatMenu, MatMenuItem, MatListItem, MatSidenavContent, MatToolbar, MatIconButton, MatIcon, DiagramCardComponent, AsyncPipe]
})
export class NavbarComponent {


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, public patternService: PatternService,
    private diagramService: DiagramService) {

  }

  selectPattern(pattern: Pattern): void {
    this.patternService.selectedPattern = pattern;
    this.diagramService.drawSVG();
  }

  downloadPattern(): void {
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

  uploadPattern(event): void {
    const fileList = event.target.files;
    const patternService = this.patternService;
    const diagramService = this.diagramService;
    if (fileList.length > 0 && fileList[0] != null) {

      const reader = new FileReader();
      reader.onload = () => {
        const text = reader.result as string;
        const newPattern = JSON.parse(text) as Pattern;
        patternService.selectedPattern = newPattern;
        diagramService.drawSVG();
        patternService.addPattern(newPattern);
      };

      reader.readAsText(fileList[0]);
    }
  }

}
