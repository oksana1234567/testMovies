import Movie from "../shared/interface/movie.interface";

const csv = require('csv-parser')
const fs = require('fs')
const path = require('path');

export const getMovies = function(): Promise<Movie[]> {
    return new Promise((resolve, reject) => {
        let results: Movie[] = [];
        return fs.createReadStream(path.join(__dirname, '..', 'data', 'movies.csv'))
            .pipe(csv())
            .on('data', async (data: Movie) => results.push(data))
            .on('error', (err: Error) => {
                console.log(err);
                reject(err);
            })
            .on('end', async () => {
               resolve(results)
            });
    });
};
