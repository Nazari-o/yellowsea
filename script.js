const menuLinks = document.querySelector('.menu__links');
const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.closeMenu');

menuBtn.addEventListener('click', function() {
  menuLinks.classList.add('openMenu');
})

closeBtn.addEventListener('click', function() {
  menuLinks.classList.remove('openMenu');
})