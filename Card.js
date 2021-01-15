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
        this._handleButtonClick = this._handleButtonClick.bind(this);
        this._popup = document.querySelector('.popup');
        this._canvas = document.querySelector('#canvas');
        this._context = this._canvas.getContext("2d");
    }
    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content.cloneNode(true);
        return cardElement;
    }
    _log() {
        console.log(this._context);
    }
    _handleButtonClick() {
        this._context.clearRect(0, 0, canvas.width, canvas.height);
        this._sum = this._k1 + this._k2 + this._gyp;
        this._v1 = Math.round(this._k1 / this._sum * 100);
        this._v2 = Math.round(this._k2 / this._sum * 100);
        this._vGyp = Math.round(this._gyp / this._sum * 100);
        const values = [this._v1, this._v2, this._vGyp];

        // console.log((250 / 100) * values[k2]);

        this._popup.classList.toggle('popup__opened')

        this._context.beginPath();
        this._context.moveTo(300, 300);
        this._context.lineTo(300, (250 / 100) * values[1]);
        this._context.lineTo((250 / 100) * values[0], (250 / 100) * values[1])
        // this._context.lineTo(100, 300);
        this._context.closePath();

        // the outline
        this._context.lineWidth = 10;
        this._context.strokeStyle = '#191919';
        this._context.stroke();

        // the fill color
        this._context.fillStyle = '#464646';
        this._context.fill();

        this._popup.querySelector('.k1').textContent = this._k1
        this._popup.querySelector('.k2').textContent = this._k2;
        this._popup.querySelector('.gyp').textContent = this._gyp;
        console.log(values);
    }
    renderCard() {
        this._element = this._getTemplate();
        const count = this._element.querySelector('.list__count');
        const pVal = this._element.querySelector('.list__p');
        const qVal = this._element.querySelector('.list__q');
        const k1Val = this._element.querySelector('.list__k1');
        const k2Val = this._element.querySelector('.list__k2');
        const gypVal = this._element.querySelector('.list__gyp');
        const button = this._element.querySelector('.list__button');
        button.addEventListener('click', this._handleButtonClick);
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

