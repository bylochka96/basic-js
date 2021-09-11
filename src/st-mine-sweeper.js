import {NotImplementedError} from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */


export default function minesweeper(matrix) {
    let result = matrix.map(elem => elem.map(elem => 0));

    let isExist = (i, j) => {
        return j >= 0 && j < result.length && i >= 0 && i < result[0].length ? 1 : 0
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j]) {
                if (isExist(i - 1, j - 1)) result[i - 1][j - 1]++;
                if (isExist(i - 1, j)) result[i - 1][j]++;
                if (isExist(i - 1, j + 1)) result[i - 1][j + 1]++;
                if (isExist(i, j + 1)) result[i][j + 1]++;
                if (isExist(i + 1, j + 1)) result[i + 1][j + 1]++;
                if (isExist(i + 1, j)) result[i + 1][j]++;
                if (isExist(i + 1, j - 1)) result[i + 1][j - 1]++;
                if (isExist(i, j - 1)) result[i][j - 1]++;
            }
        }
    }
    return result
}