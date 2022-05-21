window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#toTop')


    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex')
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    };
};

const navMenu = document.querySelector('#nav-menu');



const hamburger = document.querySelector('#hamberger');
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamberger-active');
    navMenu.classList.toggle('hidden')
});

window.addEventListener('click', function(e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.toggle('hamberger-active');
        navMenu.classList.toggle('hidden')
    }
});



// Dark toggle ke html

const darkToggle = document.querySelector('#darkToggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// Pindahkam posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    document.documentElement.classList.remove('dark');
    darkToggle.checked = false;
}