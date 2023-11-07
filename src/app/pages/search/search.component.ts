import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private service: MovieApiServiceService, private title: Title, private meta: Meta) {
    this.title.setTitle('Search movies - showtime');
    this.meta.updateTag({ name: 'description', content: 'search here movies like avatar, war etc' });

    this.searchForm = new FormGroup({
      'movieName': new FormControl(null)
    });
  }

  ngOnInit(): void {
  }

  searchResult: any;

  submitForm() {
    // Handle form submission here
  }
}

