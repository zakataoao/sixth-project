let loginBtn = document.querySelector('.header__user');
let login = document.querySelector('.header__login');
loginBtn.addEventListener('click', function(){
    login.classList.toggle('header__active');
})