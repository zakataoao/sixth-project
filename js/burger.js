let btn = document.querySelector('.header__burger-btn');
let menu = document.querySelector('.header__ul');
btn.addEventListener('click', function(){
    menu.classList.toggle('active');
})