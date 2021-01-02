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

// form.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//     const maxValue = maxInput.value;
//     intro.classList.toggle('none');
//     loading.classList.toggle('none');
//     setTimeout(() => {
//         const algorithm = new Algorithm(maxValue);

//         const array = algorithm.renderArray();
        
//         algorithm.gypPrime();

        // array.forEach((e) => {
        //     const card = new Card('#list-template', e);
        //     const cardElement = card.renderCard();
        //     list.append(cardElement);

        // })
        
//         loading.classList.toggle('none');
//         results.classList.toggle('none');
//     }, 1500)
// })

const algorithm = new Algorithm(10000);

const array = algorithm.renderArray();

const arrayPrime = algorithm.gypPrime();

const duplicatesArray = algorithm.duplicatesObject();

duplicatesArray.forEach((e) => {
    console.log(e)
    // const card = new Card('#list-count-template', e[1]);
    // const cardElement = card.renderCard();
    // listCount.append(cardElement);
})

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