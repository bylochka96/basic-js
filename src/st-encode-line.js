import {NotImplementedError} from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aatt should return 2a2t
 *
 */
export default function encodeLine(str) {
    str += 'Ω';
    let result = '';
    let temp = str[0];
    let count = 0;
    for (let i in str) {
        if (str[i] === temp) {
            count++;
        } else {
            result += (count === 1) ? str[i - 1] : String(count) + str[i - 1];
            temp = str[i];
            count = 1;
        }
    }
    return result;
}
