import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs';

@Injectable()
export class MovieService {
  private url = "//apitmdb.herokuapp.com/";

  constructor(private http: Http) {
   }

  getPopular(): Observable<any> {
    var request =`${this.url}/movie/popular`;
    return this.http.get(request)
      .map(response => {
        return response.json().results;
      });
  }
  
  getTop():Observable<any> {
    var request =`${this.url}/movie/top_rated`;
    return this.http.get(request)
      .map(response => {
        return response.json().results;
      });
  }
  
  getLatest():Observable<any> {
    var request =`${this.url}/movie/latest`;
    return this.http.get(request)
      .map(response => {
        return response.json().results;
      });
  }
  
  getInTheaters():Observable<any> {
    var request =`${this.url}/movie/now_playing`;
    return this.http.get(request)
      .map(response => {
        return response.json().results;
      });
  }
  
  getUpComing():Observable<any> {
    var request =`${this.url}/movie/upcoming`;
    return this.http.get(request)
      .map(response => {
        return response.json().results;
      });
  }
  
  getMovie(id:number): Observable<any> {
    var request =`${this.url}/movie/${id}`;
    return this.http.get(request)
      .map(response => {
        return response.json();
      });
  }
  
  getPerson(id:number): Observable<any> {
    var request =`${this.url}/person/${id}`;
    return this.http.get(request)
      .map(response => {
        return response.json();
      });
  }
  
  getSearch(search:string, page:number): Observable<any> {
    if ( page === undefined ) {
      page = 1;
    }
    var request =`${this.url}/search/multi/${search}/${page}`;
    return this.http.get(request)
      .map(response => {
        return response.json().results;
      });
  }
  
  getSearchPerson(search:string, page:number): Observable<any> {
    if ( page === undefined ) {
      page = 1;
    }
    var request =`${this.url}/search/person/${search}/${page}`;
    return this.http.get(request)
      .map(response => {
        return response.json();
      });
  }
  
  getSearchMovie(search:string, page:number): Observable<any> {
    if ( page === undefined ) {
      page = 1;
    }
    var request =`${this.url}/search/movie/${search}/${page}`;
    return this.http.get(request)
      .map(response => {
        return response.json();
      });
  }
}