//menu mobile
var burger = document.getElementById('burger');
var header = document.querySelector('.header');
var links = document.querySelectorAll('.navbar__link');

function toggleNav() {
    header.classList.toggle('header__menu-open');
}


burger.addEventListener('click', toggleNav)
links.forEach(function (link) {
    link.addEventListener('click', toggleNav)
})

/* contact */
var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);



function autosize() {
    var el = this;
    console.log(el.scrollHeight);
    setTimeout(function () {
        el.style.cssText = 'height:auto; padding: 0';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
}

//animation de la page au scroll


let observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entrie) {
        // si le seuil d'apparition est supérieur a 0.5 alors on affiche la section
        if (entrie.isIntersecting) {
            entrie.target.classList.remove('not-visible')
            observer.unobserve(entrie.target)
            console.log('item visible')
            console.log(entrie)
        }
    })

}, {
    //quand le seuil d'appartition de l'élément atteint 0.75, l'événement est déclenché.
    threshold: [0.75]
})

let items = document.querySelectorAll('.section')

items.forEach(function (item) {
    item.classList.add('not-visible')
    observer.observe(item)
})









