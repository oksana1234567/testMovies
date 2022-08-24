import Movie from "../shared/interface/movie.interface";

export const paginate = function(array: Movie[], limit: number = 10, offset: number = 1) {
  return array.slice((offset - 1) * limit, offset * limit);
}