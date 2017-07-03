import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  baseUrl = "http://image.tmdb.org/t/p/w300/";

    constructor(private route: ActivatedRoute,
  		private router: Router) { }

  ngOnInit() {
  }
  
  /**
  * Redirect to the home
  */
  goMovies() {
    this.router.navigate(['movies']);
  }

    /**
   * Get the Total Url of image
   * @param {String} Src of image
   * @return {String} Total Url of image
   */
  getUrl(src: string): string {
    return `${this.baseUrl}${src}`;
  }
  
}