import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesResultadosComponent } from './movies-resultados.component';

describe('MoviesResultadosComponent', () => {
  let component: MoviesResultadosComponent;
  let fixture: ComponentFixture<MoviesResultadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesResultadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
