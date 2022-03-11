//menu mobile
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

var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);

function autosize() {
    var el = this;
    console.log(el.scrollHeight);
    setTimeout(function(){
        el.style.cssText = 'height:auto; padding: 0';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
    },0);
}







