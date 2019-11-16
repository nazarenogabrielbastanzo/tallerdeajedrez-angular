import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAlbumComponent } from './buscar-album.component';

describe('BuscarAlbumComponent', () => {
  let component: BuscarAlbumComponent;
  let fixture: ComponentFixture<BuscarAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
