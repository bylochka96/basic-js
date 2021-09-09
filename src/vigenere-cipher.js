import {NotImplementedError} from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
    constructor(flag = true) {
        this.reverseMode = !flag;
    }

    encrypt(message, key) {
        if (!message || !key) throw Error('Incorrect arguments!');
        if (this.reverseMode) message = message.split('').reverse().join('');

        key = key.toUpperCase();
        message = message.toUpperCase();

        let result = '';
        let j = 0;
        for (let i = 0; i < message.length; i++) {
            if (/[A-Z]/.test(message[i])) {
                result += String.fromCharCode((message.charCodeAt(i) + key.charCodeAt(j % key.length) - 2 * 'A'.charCodeAt(0)) % 26 + 'A'.charCodeAt(0));
                j++;
            } else result += message[i];
        }
        return result;
    }

    decrypt(message, key) {
        if (!message || !key) throw Error('Incorrect arguments!');
        if (this.reverseMode) message = message.split('').reverse().join('');

        key = key.toUpperCase();
        message = message.toUpperCase();

        let result = '';
        let j = 0;
        for (let i = 0; i < message.length; i++) {
            if (/[A-Z]/.test(message[i])) {
                result += String.fromCharCode((26 + message.charCodeAt(i) - key.charCodeAt(j % key.length)) % 26 + 'A'.charCodeAt(0));
                j++;
            } else result += message[i];
        }
        return result;
    }
}