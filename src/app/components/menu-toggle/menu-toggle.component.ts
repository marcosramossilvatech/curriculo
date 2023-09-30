import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-menu-toggle',
  templateUrl: './menu-toggle.component.html',
  styleUrls: ['./menu-toggle.component.css']
})
export class MenuToggleComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Mobile nav toggle
    $(document).on('click', '.mobile-nav-toggle', (e: Event) => {
      $('body').toggleClass('mobile-nav-active');
      $(e.currentTarget).toggleClass('bi-list bi-x');
      // Adicione a classe 'rotate' para aplicar o efeito de giro
      $(e.currentTarget).toggleClass('rotate');
    });

    $(document).on('click', '.scrollto', (e: Event) => {
      const target = $(e.currentTarget);
      if (target && target[0] && target[0].hash) {
        e.preventDefault();
        let body = $('body');
        if (body.hasClass('mobile-nav-active')) {
          body.removeClass('mobile-nav-active');
          let navbarToggle = $('.mobile-nav-toggle');
          navbarToggle.toggleClass('bi-list bi-x');

          navbarToggle.toggleClass('rotate');
        }
      }
    });
  }
}
