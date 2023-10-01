import { Component, ElementRef, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/shared/scroll.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  ngOnInit(): void {
    this.initTyped();
  }
  constructor(private el: ElementRef, private scrollService: ScrollService) {}

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId)
  }
  initTyped(): void {
    const options = {
      strings: ["Analista de sistema", "Desenvolvedor de sistema", "Entusiasta por tecnologia"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    };

    const typed = new Typed('#typed', options);
  }
}
