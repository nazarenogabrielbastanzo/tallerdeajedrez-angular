import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidasAmistosasComponent } from './partidas-amistosas.component';

describe('PartidasAmistosasComponent', () => {
  let component: PartidasAmistosasComponent;
  let fixture: ComponentFixture<PartidasAmistosasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidasAmistosasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidasAmistosasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
