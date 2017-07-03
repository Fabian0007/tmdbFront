import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  baseUrl = "http://image.tmdb.org/t/p/w300/";
  details = {};
  keyvideo:string;
  overview:string;
  pointer = 0; //slider var
  constructor(private movieService: MovieService, private route: ActivatedRoute,
  		private router: Router) {
  }

  /**
  * Get a movie with your id
  */
  ngOnInit(){
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.movieService.getMovie(id).subscribe(details => {
        this.details = details;
        this.keyvideo=details.videos.results[0];
        this.overview=details.overview;
      });
    });
  }
  
  /**
  * Get the Total Url of image
  * @param {String} Src of image
  * @return {String} Total Url of image
  */
  getUrl(src: string): string {
    return `${this.baseUrl}${src}`;
  }
  
  /**Slider javascript logic to see similar movies on the movie detail panel
   * @param {direction:string} Indicates the move direction 
   * en el componente siguiente
   * @return {:void} */
	movieSlider(direction: string): void{
	  var slide: NodeListOf<any> = document.getElementsByClassName('slide');
	  if(slide.length > 0){
      var limit = slide.length;
      var div_width = parseInt(slide[0].clientWidth)+8;
      if(direction === 'left' && this.pointer -1 >= 0){
        this.pointer = this.pointer-1;
        var slide_container = document.getElementById('slide_container');
        var move_left = -1*this.pointer*div_width;
        slide_container.style.marginLeft = move_left+'px';
        slide_container.style.color = 'red';
      }
      if(direction === 'right' && (this.pointer + 1 <= (slide.length - 7))){
        this.pointer = this.pointer + 1;
        var slide_container = document.getElementById('slide_container');
        var move_left = -1*this.pointer*div_width;
        slide_container.style.marginLeft = move_left+'px';
        slide_container.style.color = 'red';
      }
	  }
	}
	
	/**
  * Redirect to a movie
  */
	goMovie(id:number) {
    this.router.navigate(['/movie/'+id]);
  }
	
}