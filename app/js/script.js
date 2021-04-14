'use strict'

// Dom variables

const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const btnHamburger = document.getElementById('btnHamburger')

btnHamburger.addEventListener('click', function(){
    if (header.classList.contains('.open')){
        header.classList.remove('open');

    }

    else{
        header.classList.add('.open');
    }
})