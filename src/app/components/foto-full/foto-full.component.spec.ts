import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoFullComponent } from './foto-full.component';

describe('FotoFullComponent', () => {
  let component: FotoFullComponent;
  let fixture: ComponentFixture<FotoFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotoFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
