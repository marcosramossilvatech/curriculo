import { Component, ElementRef } from '@angular/core';
import { ScrollService } from 'src/app/shared/scroll.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  constructor(private el: ElementRef, private scrollService: ScrollService) {}

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId)
  }
}
