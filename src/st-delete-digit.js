import {NotImplementedError} from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
    let max = 0;
    let arr = String(n).split('');
    for (let index in arr) {
        let temp = [...arr];
        temp.splice(index, 1);
        let tempMax = Number(temp.join(''));
        if (tempMax > max) max = tempMax;
    }

    return max;
}
