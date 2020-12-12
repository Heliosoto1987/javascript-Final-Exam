'use strict';
const btn = document.querySelector('.first__btn');
const firstImg = document.querySelector('.first__favorite--img');
const searchInput = document.querySelector('.first__seeker');
const containerOptionsHeader = document.querySelector('.second__header');
const toPrint = document.querySelector('.second__container');
const last = document.querySelector('.first__favorite--content');
let valueInput;
let apiResult = [];
let cansado;
function dataApi() {
    valueInput = searchInput.value
    const url = `http://api.tvmaze.com/search/shows?q=` + valueInput
        fetch(url)
        .then(response => response.json())
        .then(data => {
        apiResult = data
        return apiResult
            
    })
}

function print() {  
const filter = apiResult.filter(valor => valor.show.image == null)
const filter1 = apiResult.filter(valor => valor.show.image)
    for (let index = 0; index < filter1.length; index++) {
        if (searchInput.value.length >= 0) {
            toPrint.innerHTML += `<div class="big"><div class="second__inside ${index}"><h5>${filter1[index].show.name}</h5><img class="container__second--img" src="${filter1[index].show.image.original}" alt=""></div></div>`;
            toPrint.classList.add('switch');
            containerOptionsHeader.classList.remove('hidden');
            } 
    }
    for (let index = 0; index < filter.length; index++) {
        if (filter.length = 1) {
            toPrint.innerHTML += `<div class="big"><div class="second__inside ${index}"><h5>${filter[index].show.name}</h5><img class="container__second--img" src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV" alt=""></div></div>`;
        }
    }
}

function clickCleanner() {
    searchInput.value = ''
    if (searchInput.value.length === 0) {
        firstImg.src = 'https://media.istockphoto.com/vectors/welcom-header-colored-balloons-confetti-explosion-vector-id1160941940';
        toPrint.innerHTML = '';
        containerOptionsHeader.classList.add('hidden');
    }
}

function dblClickBtn() {
    if (toPrint.classList.contains('switch')) {
        toPrint.innerHTML = '';
    }
}

function lisnerFavorite(event) {
    let accSelector = [] 
    accSelector.push(event.target);
    for (let index = 0; index < accSelector.length; index++) {
        if (accSelector === accSelector) {
        last.innerHTML += `<div class="favorite__title--inside"><h5 class="favorite__title">${accSelector[index].parentElement.innerText}</h5><div class="first__favorite--content"><img src=${accSelector[index].currentSrc}></div></div>`
        }
    }
}

function callback() {
    dblClickBtn()
    print()
}

searchInput.addEventListener('click', clickCleanner);
searchInput.addEventListener('keyup', dataApi); 
btn.addEventListener('click', callback);
toPrint.addEventListener('click', lisnerFavorite)

