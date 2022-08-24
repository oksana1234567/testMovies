"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = void 0;
const paginate = function (array, limit = 10, offset = 1) {
    return array.slice((offset - 1) * limit, offset * limit);
};
exports.paginate = paginate;
