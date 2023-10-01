import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rede-social',
  templateUrl: './rede-social.component.html',
  styleUrls: ['./rede-social.component.css']
})
export class RedeSocialComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() href: string | undefined;
  @Input() class_a: string | undefined;
  @Input() class_i: string | undefined;
}
