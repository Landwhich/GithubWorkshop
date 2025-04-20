const nav = document.getElementById('nav');

let lastScroll = 0;

window.addEventListener('scroll', () => {
    if (lastScroll < window.scrollY) {
        nav.classList.add('collapse'); 
    } else {
        nav.classList.remove('collapse');
    }
    lastScroll = window.scrollY;
});