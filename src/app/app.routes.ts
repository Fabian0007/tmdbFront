import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomemoviesComponent } from './homemovies/homemovies.component';
import { MovieComponent } from './movie/movie.component';
import { PopularmoviesComponent } from './popularmovies/popularmovies.component';
import { TopmoviesComponent } from './topmovies/topmovies.component';
import { IntheatersComponent } from './intheaters/intheaters.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { PersonComponent } from './person/person.component';
import { SearchexpandedComponent } from './searchexpanded/searchexpanded.component';

export const ROUTES: Routes = [
	{ path: '',  component: HomeComponent },
	{ path: 'movies', component: HomemoviesComponent },
	{ path: 'popularmovies', component: PopularmoviesComponent },
	{ path: 'topmovies', component: TopmoviesComponent },
	{ path: 'intheaters', component: IntheatersComponent },
	{ path: 'upcoming', component: UpcomingComponent },
	{ path: 'movie/:id', component: MovieComponent },
	{ path: 'person/:id', component: PersonComponent },
	{ path: 'searchexpanded/:parameter/:search/:page', component: SearchexpandedComponent }
];