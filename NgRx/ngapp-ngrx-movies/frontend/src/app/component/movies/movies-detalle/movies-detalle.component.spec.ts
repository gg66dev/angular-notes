import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesDetalleComponent } from './movies-detalle.component';

describe('MoviesDetalleComponent', () => {
  let component: MoviesDetalleComponent;
  let fixture: ComponentFixture<MoviesDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
