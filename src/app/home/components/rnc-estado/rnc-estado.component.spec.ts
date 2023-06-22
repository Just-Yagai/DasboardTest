import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RncEstadoComponent } from './rnc-estado.component';

describe('RncEstadoComponent', () => {
  let component: RncEstadoComponent;
  let fixture: ComponentFixture<RncEstadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RncEstadoComponent]
    });
    fixture = TestBed.createComponent(RncEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
