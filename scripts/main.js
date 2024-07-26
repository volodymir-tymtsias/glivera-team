const menuOpenButton = document.querySelector('#menu-open');
const menuCloseButton = document.querySelector('#menu-close');
const mobileMenu = document.querySelector('#menu');

menuOpenButton.addEventListener('click', () => {
  mobileMenu.classList.add('page__mobile-menu--active');
  document.body.classList.add('page__body--with-menu');
});

menuCloseButton.addEventListener('click', () => {
  mobileMenu.classList.remove('page__mobile-menu--active');
  document.body.classList.remove('page__body--with-menu');
});
