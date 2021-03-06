export default class Algorithm {
    constructor(max) {
        this._max = max;
    }
    _isEven(num) {
        if (num % 2 === 0) {
            return true;
        }
        return false;
    }

    _isRelative(x, y) {
        if ((typeof x !== 'number') || (typeof y !== 'number'))
            return false;
        x = Math.abs(x);
        y = Math.abs(y);
        while (y) {
            var t = y;
            y = x % y;
            x = t;
        }
        if (x === 1) {
            return false;
        } else {
            return true;
        }
    }
    _isPrime(num) {
        for (let i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    }
    renderArray() {
        let k1 = 0;
        let k2 = 0;
        let gyp = 0;
        let counter = 0;
        let array = [];

        for (let p = 2; gyp < this._max; p++) {
            for (let q = 1; q < p; q++) {
                if (this._isEven(p) && !this._isEven(q) || !this._isEven(p) && this._isEven(q)) {
                    if (!(this._isRelative(p, q))) {
                        ++counter;
                        k1 = Math.pow(p, 2) - Math.pow(q, 2);
                        k2 = 2 * p * q;
                        gyp = Math.pow(p, 2) + Math.pow(q, 2);
                        const obj = {
                            counter: counter,
                            p: p,
                            q: q,
                            k1: k1,
                            k2: k2,
                            gyp: gyp,
                        }
                        array.push(obj);
                    }
                }
            }
        }
        return array;
    }
    gypPrime() {
        const array = this.renderArray();
        const primeArray = [];
        array.forEach((e) => {
            if (this._isPrime(e.gyp)) {
                primeArray.push(e);
            }
        })
        return primeArray
    }
    _renderGypArray() {
        let gyp = 0;
        let array = [];
        for (let p = 2; gyp < this._max; p++) {
            for (let q = 1; q < p; q++) {
                if (this._isEven(p) && !this._isEven(q) || !this._isEven(p) && this._isEven(q)) {
                    if (!(this._isRelative(p, q))) {
                        gyp = Math.pow(p, 2) + Math.pow(q, 2);
                        array.push(gyp);
                    }
                }
            }
        }
        return array;
    }
    duplicateArray() {
        const sorted_arr = this._renderGypArray().sort((a, b) => a - b);
        let results = [];
        let duplicateArray = [];
        for (let i = 0; i < sorted_arr.length - 1; i++) {
            if (sorted_arr[i + 1] == sorted_arr[i]) {
                results.push(sorted_arr[i]);
            }
        }
        const array = this.renderArray();

        results.forEach((gyp) => {
            array.forEach((el) => {
                if (el.gyp === gyp) {
                    duplicateArray.push(el);
                }
            })
        })

        return duplicateArray;
    }
}   