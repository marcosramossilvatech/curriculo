// app.component.ts
import { Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { FactsComponent } from './components/facts/facts.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  // implements OnInit
  rotate: boolean = false;
  activeSection: string = 'home';
  @ViewChild(HeroComponent) heroComponent?: HeroComponent;
  @ViewChild(AboutComponent) aboutComponent?: AboutComponent;
  @ViewChild(FactsComponent) factsComponent?: FactsComponent;
  @ViewChild(SkillsComponent) skillsComponent?: SkillsComponent;
  @ViewChild(ResumeComponent) resumeComponent?: ResumeComponent;
  @ViewChild(PortfolioComponent) portfolioComponent?: PortfolioComponent;
  @ViewChild(ServicesComponent) servicesComponent?: ServicesComponent;
  @ViewChild(TestimonialsComponent) testimonialsComponent?: TestimonialsComponent;
  @ViewChild(ContactComponent) contactComponent?: ContactComponent;
  constructor(private el: ElementRef) {}

  secoes: string[] = ['home', 'about', 'facts', 'skills', 'resume', 'portfolio', 'services', 'testimonials', 'contact'];
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    const scrollPosition = window.scrollY;



    for (const secao of this.secoes) {
      const elemento = document.getElementById(secao);
      if (elemento) {
        const limiteSuperior = elemento.offsetTop;
        const limiteInferior = limiteSuperior + elemento.clientHeight;

        if (scrollPosition >= limiteSuperior && scrollPosition < limiteInferior) {
          this.activeSection = secao;
        }
      }
    }
  }

  ngOnInit() {}

  scrollToSection(sectionName: string): void {
    let sectionComponent: any;


    switch (sectionName) {
      case this.secoes[0]:
        sectionComponent = this.heroComponent;
        break;
      case this.secoes[1]:
        sectionComponent = this.aboutComponent;
        break;
      case this.secoes[2]:
        sectionComponent = this.factsComponent;
        break;
      case this.secoes[3]:
        sectionComponent = this.skillsComponent;
        break;
      case this.secoes[4]:
        sectionComponent = this.resumeComponent;
        break;
      case this.secoes[5]:
        sectionComponent = this.portfolioComponent;
        break;
      case this.secoes[6]:
        sectionComponent = this.servicesComponent;
        break;
      case this.secoes[7]:
        sectionComponent = this.testimonialsComponent;
        break;
      case this.secoes[8]:
        sectionComponent = this.contactComponent;
        break;
    }

    if (sectionComponent) {
      sectionComponent.scrollToSection(sectionName);
      this.activeSection = sectionName;
    }
  }
}


