import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'movie-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class MovieAddComponent {

  form: any = {
    name: null,
    year: null,
    director: null,
    genre: null,
    runtime: null
  }

  isSuccessful = true;
  errorMessage = "";

  constructor(private movieService: MoviesService, private router: Router){}

  onSubmit(){
    this.movieService.addMovie(this.form)
    .subscribe({
      next: data => {
        this.isSuccessful = true;
        this.router.navigate(['/movie/list']);
      },
      error: err =>{
        this.errorMessage = err.error.message;
        this.isSuccessful = false;
      }

    })
  }





}
