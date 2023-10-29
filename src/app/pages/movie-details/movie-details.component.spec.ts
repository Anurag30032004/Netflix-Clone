import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieDetailsComponent } from './movie-details.component';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Title, Meta } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  let movieApiService: MovieApiServiceService;
  let activatedRoute: ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDetailsComponent],
      providers: [
        Title,
        Meta,
        {
          provide: MovieApiServiceService,
          useValue: {
            getMovieDetails: () => of({ /* mock movie details data */ }),
            getMovieVideo: () => of({ /* mock movie video data */ }),
            getMovieCast: () => of({ /* mock movie cast data */ }),
          },
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: () => '123' } }, // mock the ActivatedRoute
          },
        },
      ],
    });

    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    movieApiService = TestBed.inject(MovieApiServiceService);
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  
  it('should get movie details from the service', () => {
    const movieDetails = { /* Mock movie details data */ };
  
    spyOn(movieApiService, 'getMovieDetails').and.returnValue(of(movieDetails));
  
    component.ngOnInit();
  
    // Add expectations to ensure that getMovieDetailResult is set correctly based on the mocked data.
  });
  
  it('should get movie video from the service', () => {
    const movieVideo = { /* Mock movie video data */ };
  
    spyOn(movieApiService, 'getMovieVideo').and.returnValue(of(movieVideo));
  
    component.ngOnInit();
  
    // Add expectations to ensure that getMovieVideoResult is set correctly based on the mocked data.
  });
  
  it('should get movie cast from the service', () => {
    const movieCast = { /* Mock movie cast data */ };
  
    spyOn(movieApiService, 'getMovieCast').and.returnValue(of(movieCast));
  
    component.ngOnInit();
  
    // Add expectations to ensure that getMovieCastResult is set correctly based on the mocked data.
  });
  
});
