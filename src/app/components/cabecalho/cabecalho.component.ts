import { Component } from '@angular/core';
import { CustomLink } from 'src/app/Models/Custom-link';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {

  redesSociais : CustomLink[]= [
    {
      href: 'https://api.whatsapp.com/send?phone=+553187752313',
      class_a: 'whatsapp',
      class_i: 'bx bxl-whatsapp'
    },
    {
      href: 'https://github.com/marcosramossilvatech',
      class_a: 'github',
      class_i: 'bx bxl-github'
    },
    {
      href: 'https://www.linkedin.com/in/marcos-ramos-1ab3856a/',
      class_a: 'linkedin',
      class_i: 'bx bxl-linkedin'
    }
  ]

  rotate: boolean = false;
}
