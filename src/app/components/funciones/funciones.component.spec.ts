import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionesComponent } from './funciones.component';

describe('FuncionesComponent', () => {
  let component: FuncionesComponent;
  let fixture: ComponentFixture<FuncionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
