import { NgModule } from '@angular/core';
import { SearchComponent } from 'src/app/pages/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchComponent],
  imports: [ReactiveFormsModule],
})
export class SearchModule { }

