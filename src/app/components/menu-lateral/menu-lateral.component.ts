import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  activeSection: string = 'hero';
  @ViewChild(HeroComponent) heroComponent?: HeroComponent;
  @ViewChild(AboutComponent) aboutComponent?: AboutComponent;
  constructor(private el: ElementRef) {}

  ngOnInit() {}

  scrollToSection(sectionName: string): void {
    let sectionComponent: any;

    // Determine qual componente de seção corresponde ao nome da seção
    switch (sectionName) {
      case 'hero':
        sectionComponent = this.heroComponent;
        break;
      case 'about':
          sectionComponent = this.aboutComponent;
          break;
      // Adicione cases para as outras seções aqui
    }

    if (sectionComponent) {
      sectionComponent.scrollToSection();
      this.activeSection = sectionName;
    }
  }
}
