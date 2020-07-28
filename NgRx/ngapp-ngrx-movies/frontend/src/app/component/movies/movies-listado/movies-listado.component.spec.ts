import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListadoComponent } from './movies-listado.component';

describe('MoviesListadoComponent', () => {
  let component: MoviesListadoComponent;
  let fixture: ComponentFixture<MoviesListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
