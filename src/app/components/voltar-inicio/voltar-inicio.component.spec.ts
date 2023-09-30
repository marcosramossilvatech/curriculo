import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoltarInicioComponent } from './voltar-inicio.component';

describe('VoltarInicioComponent', () => {
  let component: VoltarInicioComponent;
  let fixture: ComponentFixture<VoltarInicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoltarInicioComponent]
    });
    fixture = TestBed.createComponent(VoltarInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
