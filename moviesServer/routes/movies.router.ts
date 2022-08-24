import {
    getAllMovies,
    getMoviesByGenre,
    getGenres
} from "../controllers/movies.controller";
import { Router } from 'express';

const router = Router();

router.route('/movies').get(getAllMovies);
router.route('/movies/:genre').get(getMoviesByGenre);
router.route('/genres').get(getGenres);

export default router;