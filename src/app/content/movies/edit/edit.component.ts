import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'movie-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class MovieEditComponent implements OnInit{


  form: any = {
    _id: null,
    name: null,
    year: null,
    director: null,
    genre: null,
    runtime: null
  }

  isSuccessful = true;
  errorMessage = "";

  constructor(
    private movieService: MoviesService,
    private router: Router,
    private route: ActivatedRoute
    ){}

  ngOnInit(): void {
    this.route.params
      .subscribe({
        next: params =>{
          this.form._id = params['id']; // :id

          this.movieService.getMovie(this.form._id)
            .subscribe({
              next: data => {
                this.form = data.movie;
              },
              error: err=> {
                this.errorMessage = err.error.message;
                this.isSuccessful = false;
              }
            })
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSuccessful = false;
        }
      })
  }



  onSubmit(){
    this.movieService.editMovie(this.form)
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
