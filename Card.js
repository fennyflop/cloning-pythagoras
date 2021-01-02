export default class Card {
    constructor(selector, { counter, p, q, k1, k2, gyp, rep }) {
        this._cardSelector = selector;
        this._counter = counter;
        this._p = p;
        this._q = q;
        this._k1 = k1;
        this._k2 = k2;
        this._gyp = gyp;
        this._rep = rep;
    }
    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content.cloneNode(true);
        return cardElement;
    }
    renderCard() {
        this._element = this._getTemplate();
        const count = this._element.querySelector('.list__count');
        const pVal = this._element.querySelector('.list__p');
        const qVal = this._element.querySelector('.list__q');
        const k1Val = this._element.querySelector('.list__k1');
        const k2Val = this._element.querySelector('.list__k2');
        const gypVal = this._element.querySelector('.list__gyp');
        count.textContent = this._counter + '.';
        pVal.textContent = this._p;
        qVal.textContent = this._q;
        k1Val.textContent = this._k1;
        k2Val.textContent = this._k2;
        gypVal.textContent = this._gyp;
        if (this._cardSelector === 'list-count-template') {
            this._element.querySelector('.list__rep').textContent = this._rep;
        }
        return this._element;
    }
}