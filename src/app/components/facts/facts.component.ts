import { Component, ElementRef } from '@angular/core';
import { ScrollService } from 'src/app/shared/scroll.service';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent {
  constructor(private el: ElementRef, private scrollService: ScrollService) {}

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId)
  }
}
