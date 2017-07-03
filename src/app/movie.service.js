"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var MovieService = (function () {
    function MovieService(http) {
        this.http = http;
        this.url = "//apitmdb.herokuapp.com/";
    }
    MovieService.prototype.getPopular = function () {
        var request = this.url + "/movie/popular";
        return this.http.get(request)
            .map(function (response) {
            return response.json().results;
        });
    };
    MovieService.prototype.getTop = function () {
        var request = this.url + "/movie/top_rated";
        return this.http.get(request)
            .map(function (response) {
            return response.json().results;
        });
    };
    MovieService.prototype.getLatest = function () {
        var request = this.url + "/movie/latest";
        return this.http.get(request)
            .map(function (response) {
            return response.json().results;
        });
    };
    MovieService.prototype.getInTheaters = function () {
        var request = this.url + "/movie/now_playing";
        return this.http.get(request)
            .map(function (response) {
            return response.json().results;
        });
    };
    MovieService.prototype.getUpComing = function () {
        var request = this.url + "/movie/upcoming";
        return this.http.get(request)
            .map(function (response) {
            return response.json().results;
        });
    };
    MovieService.prototype.getMovie = function (id) {
        var request = this.url + "/movie/" + id;
        return this.http.get(request)
            .map(function (response) {
            return response.json();
        });
    };
    MovieService.prototype.getPerson = function (id) {
        var request = this.url + "/person/" + id;
        return this.http.get(request)
            .map(function (response) {
            return response.json();
        });
    };
    MovieService.prototype.getSearch = function (search, page) {
        if (page === undefined) {
            page = 1;
        }
        var request = this.url + "/search/multi/" + search + "/" + page;
        return this.http.get(request)
            .map(function (response) {
            return response.json().results;
        });
    };
    MovieService.prototype.getSearchPerson = function (search, page) {
        if (page === undefined) {
            page = 1;
        }
        var request = this.url + "/search/person/" + search + "/" + page;
        return this.http.get(request)
            .map(function (response) {
            return response.json();
        });
    };
    MovieService.prototype.getSearchMovie = function (search, page) {
        if (page === undefined) {
            page = 1;
        }
        var request = this.url + "/search/movie/" + search + "/" + page;
        return this.http.get(request)
            .map(function (response) {
            return response.json();
        });
    };
    MovieService = __decorate([
        core_1.Injectable()
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
