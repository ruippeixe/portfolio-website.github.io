// 1. hamburger menu 

const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav__menu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  navMenu.classList.toggle('open');
});


// 2. check 'my full process button' and smooth scroll

const checkMoreBtn = document.querySelector('.check-more-btn');
const checkMore = document.querySelector('.check-more');

checkMoreBtn.addEventListener('click', (e) => {
  // 2.1. click button to check more
  checkMoreBtn.classList.toggle('hide');
  checkMore.classList.toggle('show');

  // 2.2. smooth scroll
  let scroll = document.querySelector('.post-scroll').scrollIntoView({ 
    behavior: 'smooth' 
  });
});
