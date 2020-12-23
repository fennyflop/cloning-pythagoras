import Card from './Card.js';

let k1 = 0;
let k2 = 0;
let gyp = 0;
let counter = 0;
let array = [];
const list = document.querySelector('.list');

const isEven = (num) => {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

function isRelative(x, y) {
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

for (let p = 2; gyp < 1000; p++) {
    for (let q = 1; q < p; q++) {
        if (isEven(p) && !isEven(q) || !isEven(p) && isEven(q)) {
            if (!(isRelative(p, q))) {
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

array.forEach((e) => {
    const card = new Card('#list-template', e);
    const cardElement = card.renderCard();
    list.append(cardElement);
})