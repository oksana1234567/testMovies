"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMoviesByGenreService = exports.getGenresService = exports.getMoviesService = void 0;
const movies_model_1 = require("../models/movies.model");
const getMoviesService = function () {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, movies_model_1.getMovies)();
    });
};
exports.getMoviesService = getMoviesService;
const getGenresService = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const array = yield (0, movies_model_1.getMovies)();
        return [...new Set(array.map((movie) => movie.genre1 || movie.genre2))];
    });
};
exports.getGenresService = getGenresService;
const getMoviesByGenreService = function (genre) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield (0, movies_model_1.getMovies)();
        return results.filter((movie) => movie.genre1 === genre || movie.genre2 === genre);
    });
};
exports.getMoviesByGenreService = getMoviesByGenreService;
