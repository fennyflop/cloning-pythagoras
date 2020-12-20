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

for (let p = 2; p < 10; p++) {
    for (let q = 1; q < p; q++) {
        if (isEven(p) && !isEven(q) || !isEven(p) && isEven(q)) {
            if (!(isRelative(p, q))) {
                const k1 = Math.pow(p, 2) - Math.pow(q, 2);
                const k2 = 2 * p * q;
                const gyp = Math.pow(p, 2) + Math.pow(q, 2);
                console.log(`k1 - ${k1}, k2 - ${k2}, gyp - ${gyp}`);
            }
        }
    }
}