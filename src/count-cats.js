import {NotImplementedError} from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

export default function countCats(boxes) {
    let count = 0;
    for (let box of boxes) {
        for (let cat of box) {
            if (cat === '^^') {
                count++
            }
        }
    }
    return count;
}