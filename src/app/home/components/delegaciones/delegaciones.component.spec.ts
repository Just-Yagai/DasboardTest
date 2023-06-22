import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegacionesComponent } from './delegaciones.component';

describe('DelegacionesComponent', () => {
  let component: DelegacionesComponent;
  let fixture: ComponentFixture<DelegacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelegacionesComponent]
    });
    fixture = TestBed.createComponent(DelegacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
