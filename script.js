var burger = document.getElementById('burger');
var header = document.querySelector('.header');
var links = document.querySelectorAll('.navbar__link');

function toggleNav(){
    header.classList.toggle('header__menu-open');
}


burger.addEventListener('click', toggleNav)
links.forEach(function(link){
    link.addEventListener('click', toggleNav)
})




