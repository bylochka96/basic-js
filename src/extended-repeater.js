import {NotImplementedError} from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
    str = String(str)
    options.addition = (options.addition === undefined) ? '' : String(options.addition)

    options.separator = options.separator ? options.separator : '+'
    options.additionSeparator = options.additionSeparator ? options.additionSeparator : '|'

    options.repeatTimes = options.repeatTimes ? +(options.repeatTimes) : 1
    options.additionRepeatTimes = options.additionRepeatTimes ? +(options.additionRepeatTimes) : 1

    let temp = [];

    if (options.repeatTimes > 0) {
        for (let i = 1; i <= options.repeatTimes; i++) {
            temp.push(str);
            for (let j = 1; j <= options.additionRepeatTimes; j++) {
                temp.push(options.addition)
                if (j !== options.additionRepeatTimes) temp.push(options.additionSeparator)
            }
            if (i !== options.repeatTimes) temp.push(options.separator)
        }
    }
    return temp.join('');
}
