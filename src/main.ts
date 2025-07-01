import './style.css'
import './hamburger.css'
import './rodape.css'

const menu = document.getElementById('menu')!
const hamburger = document.getElementById('hamburger')!
const burgerIcone = document.getElementById('burger-icone') as HTMLImageElement;

hamburger.addEventListener('click', () => {
  menu.classList.toggle('open');
  hamburger.classList.toggle('active');
  if (hamburger.classList.contains('active')) {
    burgerIcone.src = '/x.svg';
  } else {
    burgerIcone.src = '/burger-menu-roxo.svg';
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menu.classList.remove('open');
    hamburger.classList.remove('active');
    burgerIcone.src = '/burger-menu-roxo.svg';
  }
});


