// Toggle class

const navbarNav = document.querySelector('.navlinks');

document.querySelector('#hm-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// klik di luar side bar untuk keluar navbar

const hamburger = document.querySelector('#hm-menu');

document.addEventListener('click', function(e){
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove('active');
});


// script.js
window.onscroll = function() {
    const nav = document.querySelector('.navbar');
    if(window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
};

