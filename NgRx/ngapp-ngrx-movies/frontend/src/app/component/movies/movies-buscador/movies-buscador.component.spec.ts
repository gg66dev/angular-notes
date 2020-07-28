import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesBuscadorComponent } from './movies-buscador.component';

describe('MoviesBuscadorComponent', () => {
  let component: MoviesBuscadorComponent;
  let fixture: ComponentFixture<MoviesBuscadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesBuscadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
