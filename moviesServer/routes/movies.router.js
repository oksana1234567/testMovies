"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const movies_controller_1 = require("../controllers/movies.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route('/movies').get(movies_controller_1.getAllMovies);
router.route('/movies/:genre').get(movies_controller_1.getMoviesByGenre);
router.route('/genres').get(movies_controller_1.getGenres);
exports.default = router;
