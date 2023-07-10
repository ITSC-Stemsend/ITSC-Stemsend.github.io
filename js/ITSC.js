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
