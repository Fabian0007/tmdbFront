"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var MovieComponent = (function () {
    function MovieComponent(movieService, route, router) {
        this.movieService = movieService;
        this.route = route;
        this.router = router;
        this.baseUrl = "http://image.tmdb.org/t/p/w300/";
        this.details = {};
    }
    /**
    * Get a movie with your id
    */
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.movieService.getMovie(id).subscribe(function (details) {
                _this.details = details;
                _this.keyvideo = details.videos.results[0];
                _this.overview = details.overview;
            });
        });
    };
    /**
    * Get the Total Url of image
    * @param {String} Src of image
    * @return {String} Total Url of image
    */
    MovieComponent.prototype.getUrl = function (src) {
        return "" + this.baseUrl + src;
    };
    MovieComponent.prototype.getUrlVideo = function () {
        return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.key + "/?rel=0&modestbranding=1&autohide=1&showinfo=0&autoplay=1&loop=1&controls=0&mute=1&playlist=" + this.key);
    };
    MovieComponent = __decorate([
        core_1.Component({
            selector: 'app-movie',
            templateUrl: './movie.component.html',
            styleUrls: ['./movie.component.css']
        })
    ], MovieComponent);
    return MovieComponent;
}());
exports.MovieComponent = MovieComponent;
