import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsComponent } from './movie-details.component';
import { By } from '@angular/platform-browser';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display movie title', () => {
    component.getMovieDetailResult = { original_title: 'Test Movie' };
    fixture.detectChanges();
    const titleElement = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(titleElement.textContent).toContain('Test Movie');
  });

  it('should display movie overview', () => {
    component.getMovieDetailResult = { overview: 'Test Overview' };
    fixture.detectChanges();
    const overviewElement = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(overviewElement.textContent).toContain('Test Overview');
  });
});