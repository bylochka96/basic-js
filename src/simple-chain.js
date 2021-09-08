import {NotImplementedError} from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
    arr: [],

    getLength() {
        return this.arr.length;
    },
    addLink(value) {
        this.arr.push(`( ${value} )`);
        return this;

    },
    removeLink(position) {
        if (typeof (position) === 'number' && position > 0 && position < this.getLength()) {
            this.arr.splice(position - 1, 1);
            return this;
        }
        this.arr=[];
        throw new Error('You can\'t remove incorrect link!');
    },
    reverseChain() {
        this.arr.reverse();
        return this;
    },
    finishChain() {
        let string = this.arr.join('~~');
        this.arr=[];
        return string;
    }
};
