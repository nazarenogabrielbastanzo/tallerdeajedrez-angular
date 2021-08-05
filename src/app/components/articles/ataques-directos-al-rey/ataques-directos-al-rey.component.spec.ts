import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtaquesDirectosAlReyComponent } from './ataques-directos-al-rey.component';

describe('AtaquesDirectosAlReyComponent', () => {
  let component: AtaquesDirectosAlReyComponent;
  let fixture: ComponentFixture<AtaquesDirectosAlReyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtaquesDirectosAlReyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtaquesDirectosAlReyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
