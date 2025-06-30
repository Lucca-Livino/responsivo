import './style.css'
import './hamburger.css'

const menu = document.getElementById('menu')!
const hamburger = document.getElementById('hamburger')!
const burgerIcon = document.getElementById('burger-icon') as HTMLImageElement;

hamburger.addEventListener('click', () => {
  menu.classList.toggle('open');
  hamburger.classList.toggle('active');
  if (hamburger.classList.contains('active')) {
    burgerIcon.src = '/x.svg';
  } else {
    burgerIcon.src = '/burger-menu-roxo.svg';
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menu.classList.remove('open');
    hamburger.classList.remove('active');
    burgerIcon.src = '/burger-menu-roxo.svg';
  }
});


