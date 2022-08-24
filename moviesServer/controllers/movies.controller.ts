import { Request, Response } from "express";
import { getGenresService, getMoviesByGenreService, getMoviesService } from "../service/movies.service";
import { paginate } from "../service/paginate.service";


export const getAllMovies = async function (req: Request, res: Response) {
  try { return res.status(200).json(paginate(await getMoviesService(), +req.query.limit!, +req.query.offset!)) }
  catch (err) {
      return res.status(500).send(err);
    }
};

export const getMoviesByGenre = async function(req: Request, res: Response) {
  try { return res.status(200).json(paginate(await getMoviesByGenreService(req.params.genre), +req.query.limit!, +req.query.offset!)) }
  catch (err) {
      return res.status(500).send(err);
    }
};

export const getGenres = async function(req: Request, res: Response) {
  try { return res.status(200).json(await getGenresService()) }
  catch (err) {
      return res.status(500).send(err);
    }
};
