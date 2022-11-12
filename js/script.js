const btn__burger = document.querySelector('#button-burger');
const btn__close = document.querySelector('#button-close');
const header = document.querySelector('#header');


btn__burger.addEventListener('click', function(){
    header.classList.add('menu-open');

    btn__close.addEventListener('click', function(){

        header.classList.replace('menu-open', 'header')
    })
})