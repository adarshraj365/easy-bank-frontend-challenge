const navbarLinks = document.querySelector('.navbar-links');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click' , ()=> {
    navbarLinks.classList.toggle('open');
    if(navbarLinks.classList.contains('open')){
        hamburger.src = './img/icon-close.svg';
    }
    else{
        hamburger.src = './img/icon-hamburger.svg' ;
    }
})

