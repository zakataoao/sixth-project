let offsetFirst = 0;
let offsetSecond = 0;
let items = document.querySelectorAll('.slider__item');
let itemFirst = document.querySelectorAll('.slider__item-1');
let itemSecond = document.querySelectorAll('.slider__item-2');
let itemThird = document.querySelectorAll('.slider__item-3');
let sliderLine = document.querySelectorAll('.slider-line');
let widthFirst = 0;
let widthSecond = 0;
let next = document.querySelectorAll('.slider__next');
let prev = document.querySelectorAll('.slider__prev');
console.log(sliderLine[0]);
console.log(sliderLine[1]);
function init() {
    console.log('resize');
    widthFirst = document.querySelector('.slider').offsetWidth;
    widthSecond = document.querySelector('.slider-s').offsetWidth;
    sliderLine[0].style.width = widthFirst * 3 +'px';
    sliderLine[1].style.width = widthSecond * 3 +'px';
    itemFirst[0].style.width = widthFirst + 'px';
    itemFirst[1].style.width = widthSecond + 'px';
    itemSecond[0].style.width = widthFirst + 'px';
    itemSecond[1].style.width = widthSecond + 'px';
    itemThird[0].style.width = widthFirst + 'px';
    itemThird[1].style.width = widthSecond + 'px';

}
next[0].addEventListener('click', function next() {
    offsetFirst += widthFirst;
    if (offsetFirst > widthFirst*2) {
        offsetFirst = 0;
    }
    sliderLine[0].style.right = offsetFirst + 'px';
})
prev[0].addEventListener('click', function() {
    offsetFirst -= widthFirst;
    if (offsetFirst < 0) {
        offsetFirst = widthFirst*2;
    }
    sliderLine[0].style.right = offsetFirst + 'px';
})
next[1].addEventListener('click', function next() {
    offsetSecond += widthSecond;
    if (offsetSecond > widthSecond*2) {
        offsetSecond = 0;
    }
    sliderLine[1].style.right = offsetSecond + 'px';
})
prev[1].addEventListener('click', function() {
    offsetSecond -= widthSecond;
    if (offsetSecond < 0) {
        offsetSecond = widthSecond*2;
    }
    sliderLine[1].style.right = offsetSecond + 'px';
})
window.addEventListener('resize', init);
init();
