import { Component, ElementRef, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    this.initTyped();
  }
  scrollToSection(sectionId: string): void {
    const section = this.el.nativeElement.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  initTyped(): void {
    const options = {
      strings: ["Analista de sistema", "Desenvolvedor de sistema", "Apaixonado pelo meu menino"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    };

    const typed = new Typed('#typed', options);
  }
}
