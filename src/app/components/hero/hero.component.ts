import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.initTyped();
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
