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
exports.getMovies = void 0;
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const getMovies = function () {
    return new Promise((resolve, reject) => {
        let results = [];
        return fs.createReadStream(path.join(__dirname, '..', 'data', 'movies.csv'))
            .pipe(csv())
            .on('data', (data) => __awaiter(this, void 0, void 0, function* () { return results.push(data); }))
            .on('error', (err) => {
            console.log(err);
            reject(err);
        })
            .on('end', () => __awaiter(this, void 0, void 0, function* () {
            resolve(results);
        }));
    });
};
exports.getMovies = getMovies;
