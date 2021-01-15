import Card from './Card.js';
import Algorithm from './Algorithm.js';

const list = document.querySelector('.list');
const listPrime = document.querySelector('.list-prime');
const listCount = document.querySelector('.list-count');
const loading = document.querySelector('.loading');
const intro = document.querySelector('.intro');
const results = document.querySelector('.results');

const form = document.querySelector('.form');
const maxInput = form.querySelector('.form__item');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const maxValue = maxInput.value;
    intro.classList.toggle('none');
    loading.classList.toggle('none');
    setTimeout(() => {
        const algorithm = new Algorithm(maxValue);

        const array = algorithm.renderArray();

        const arrayPrime = algorithm.gypPrime();

        const duplicateArray = algorithm.duplicateArray();

        console.log(duplicateArray);

        array.forEach((e) => {
            const card = new Card('#list-template', e);
            const cardElement = card.renderCard();
            list.append(cardElement);
        })

        arrayPrime.forEach((e) => {
            const card = new Card('#list-template', e);
            const cardElement = card.renderCard();
            listPrime.append(cardElement);
        })

        duplicateArray.forEach((e) => {
            console.log(e);
            const card = new Card('#list-template', e);
            const cardElement = card.renderCard();
            listCount.append(cardElement);
        })

        loading.classList.toggle('none');
        results.classList.toggle('none');
    }, 1500)
})



document.querySelector('.popup__close-button').addEventListener('click', () => {
    document.querySelector('.popup').classList.toggle('popup__opened');
})
