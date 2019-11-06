import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidaTringovFischerComponent } from './partida-tringov-fischer.component';

describe('PartidaTringovFischerComponent', () => {
  let component: PartidaTringovFischerComponent;
  let fixture: ComponentFixture<PartidaTringovFischerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartidaTringovFischerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidaTringovFischerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
