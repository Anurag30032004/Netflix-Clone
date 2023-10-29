import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Title, Meta } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let movieApiService: MovieApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        Title,
        Meta,
        {
          provide: MovieApiServiceService,
          useValue: {
            bannerApiData: () => of({ /* mock banner data */ }),
            trendingMovieApiData: () => of({ /* mock trending data */ }),
            fetchActionMovies: () => of({ /* mock action movie data */ }),
            fetchAdventureMovies: () => of({ /* mock adventure movie data */ }),
            fetchAnimationMovies: () => of({ /* mock animation movie data */ }),
            fetchComedyMovies: () => of({ /* mock comedy movie data */ }),
            fetchDocumentaryMovies: () => of({ /* mock documentary movie data */ }),
            fetchScienceFictionMovies: () => of({ /* mock science fiction movie data */ }),
            fetchThrillerMovies: () => of({ /* mock thriller movie data */ }),
          },
        },
      ],
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    movieApiService = TestBed.inject(MovieApiServiceService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
