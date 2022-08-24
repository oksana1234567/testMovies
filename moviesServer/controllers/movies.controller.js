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
exports.getGenres = exports.getMoviesByGenre = exports.getAllMovies = void 0;
const movies_service_1 = require("../service/movies.service");
const paginate_service_1 = require("../service/paginate.service");
const getAllMovies = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return res.status(200).json((0, paginate_service_1.paginate)(yield (0, movies_service_1.getMoviesService)(), +req.query.limit, +req.query.offset));
        }
        catch (err) {
            return res.status(500).send(err);
        }
    });
};
exports.getAllMovies = getAllMovies;
const getMoviesByGenre = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return res.status(200).json((0, paginate_service_1.paginate)(yield (0, movies_service_1.getMoviesByGenreService)(req.params.genre), +req.query.limit, +req.query.offset));
        }
        catch (err) {
            return res.status(500).send(err);
        }
    });
};
exports.getMoviesByGenre = getMoviesByGenre;
const getGenres = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return res.status(200).json(yield (0, movies_service_1.getGenresService)());
        }
        catch (err) {
            return res.status(500).send(err);
        }
    });
};
exports.getGenres = getGenres;
