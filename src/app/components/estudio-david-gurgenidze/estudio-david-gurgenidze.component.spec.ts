import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioDavidGurgenidzeComponent } from './estudio-david-gurgenidze.component';

describe('EstudioDavidGurgenidzeComponent', () => {
  let component: EstudioDavidGurgenidzeComponent;
  let fixture: ComponentFixture<EstudioDavidGurgenidzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudioDavidGurgenidzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudioDavidGurgenidzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
