'use strict';

/* MODAL */
const opbutton = document.querySelector('.loginbutton');
const clbutton = document.querySelector('.btn--close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

console.log(opbutton);
console.log(clbutton);

opbutton.addEventListener('click', function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});
clbutton.addEventListener('click', function (e) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

/* STICKY NAVIGATION */
const navbar = document.querySelector('.navheader');
const sticky = navbar.offsetTop;
window.onscroll = function () {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};
