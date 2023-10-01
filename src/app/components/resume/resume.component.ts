import { Component, ElementRef } from '@angular/core';
import { ScrollService } from 'src/app/shared/scroll.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  constructor(private el: ElementRef, private scrollService: ScrollService) {}

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId)
  }
}
