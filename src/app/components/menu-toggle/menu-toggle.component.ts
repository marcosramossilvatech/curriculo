import { Component, Renderer2, ElementRef  } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-menu-toggle',
  templateUrl: './menu-toggle.component.html',
  styleUrls: ['./menu-toggle.component.css']
})
export class MenuToggleComponent  {

  constructor(private renderer: Renderer2, private el: ElementRef) { }
  mobileActive : string = 'mobile-nav-active';
  isXClass = false;
  cliqueAbrirFecharMenu() {

    const bodyHasClass = this.el.nativeElement.ownerDocument.body.classList.contains(this.mobileActive);

    if (bodyHasClass) {
      this.renderer.removeClass(document.body, this.mobileActive);
    } else {
      this.renderer.addClass(document.body, this.mobileActive);
    }
    this.isXClass = !this.isXClass;
  }
}
