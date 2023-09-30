// app.component.ts
import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
export class AppComponent implements OnInit {

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

  ngOnInit() {}

  scrollToSection(sectionName: string): void {
    let sectionComponent: any;


    switch (sectionName) {
      case 'home':
        sectionComponent = this.heroComponent;
        break;
      case 'about':
        sectionComponent = this.aboutComponent;
        break;
      case 'facts':
        sectionComponent = this.factsComponent;
        break;
      case 'skills':
        sectionComponent = this.skillsComponent;
        break;
      case 'resume':
        sectionComponent = this.resumeComponent;
        break;
      case 'portfolio':
        sectionComponent = this.portfolioComponent;
        break;
      case 'services':
        sectionComponent = this.servicesComponent;
        break;
      case 'testimonials':
        sectionComponent = this.testimonialsComponent;
        break;
      case 'contact':
        sectionComponent = this.contactComponent;
        break;
    }

    if (sectionComponent) {
      sectionComponent.scrollToSection(sectionName);
      this.activeSection = sectionName;
    }
  }
}


