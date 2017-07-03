import { Component, OnInit, Input} from '@angular/core';
import { MovieService } from '../movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  baseUrl = "http://image.tmdb.org/t/p/w300/";
  resultsPersons = [];
  resultsMovies = [];
  search:string;
  active:boolean=false;
  focus:boolean=false;
  colorsPersons:Array<string>=[];
  colorsMovies:Array<string>=[];
  color:string="#AA0201";
  totalPages:number;
  @Input() preview:boolean;

  constructor(private movieService: MovieService, private route: ActivatedRoute,
  		private router: Router){
  		  this.router.events.subscribe(path => {
  		    this.clear();
      });
  	}

  ngOnInit(){

  }
  
  /**
  * Change the state of box search
  */
  changeState(active:boolean){
    this.active=active;
  }
  
  /**
  * Change the state of input search
  */
  changeFocus(focus:boolean){
    this.focus=focus;
  }
  
  /**
  * Shade background of "see all results"
  */
  putColor(){
    this.color="#AA0201";
  }
  
  /**
  * clear background of "see all results"
  */
  removeColor(){
    this.color="#C00201";
  }
  
  /**
  * Shade background of result of person
  */
  putColorPersons(i:number){
    this.colorsPersons[i]="#AA0201";
  }
  
  /**
  * Shade background of result of movie
  */
  putColorMovies(i:number){
    this.colorsMovies[i]="#AA0201";
  }
  
  /**
  * Clear background of result of person
  */
  removeColorPersons(i:number){
    this.colorsPersons[i]="#C00201";
  }
  
  /**
  * Clear background of result of movie
  */
  removeColorMovies(i:number){
    this.colorsMovies[i]="#C00201";
  }
  
  /**
  * Reset variables
  */
  clear(){
    this.resultsPersons=[];
    this.resultsMovies=[];
    this.search="";
    this.active=false;
  }
  
  /**
  * Performs the search of persons and movies
  */
  doSearch(){
    if(this.search.length >= 2){
      this.movieService.getSearchPerson(this.search, 1)
      .subscribe(resultsPersons => {
        this.resultsPersons=resultsPersons.results.slice(0,3);
        for(let i=0;i<this.resultsPersons.length;i++){
          this.colorsPersons[i]="#C00201";
        }
      });
      this.movieService.getSearchMovie(this.search, 1)
      .subscribe(resultsMovies => {
        this.resultsMovies=resultsMovies.results.slice(0,3);
        for(let i=0;i<this.resultsPersons.length;i++){
          this.colorsMovies[i]="#C00201";
        }
      });
      
      
    }else{
      this.resultsPersons=[];
       this.resultsMovies=[];
    }
  }
  
  /**
  * Get the Total Url of image
  * @param {String} Src of image
  * @return {String} Total Url of image
  */
  getUrl(src: string): string {
    return `${this.baseUrl}${src}`;
  }
  
  /**
  * Redirect to a person
  */
  goPerson(id:number) {
    this.router.navigate(['/person/'+id]);
  }
  
  /**
  * Redirect to a movie
  */
  goMovie(id:number) {
    this.router.navigate(['/movie/'+id]);
  }
  
  /**
  * Redirect to expanded search
  */
  goExpanded(){
    this.router.navigate(['/searchexpanded/persons/'+this.search+'/1']);
  }
}
