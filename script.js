'use strict';

const button = document.querySelector('button');
console.log(button);

button.addEventListener('click', () => {
  const p = document.getElementById('target');
  p.classList.toggle('myStyle');
});

button.addEventListener('click', () => {
  const p = document.getElementById('target');
  p.classList.toggle('newStyle');
});

button.addEventListener('mouseenter', () => {
  const p = document.getElementById('target');
  p.style.fontSize = '1.5em';
});

button.addEventListener('mouseleave', () => {
  const p = document.getElementById('target');
  p.style.fontSize = '1em';
});

const img = document.querySelector('imag')
img.addEventListener('click', () => {
  img.src = 'https://github.com/ugok-girls/ugok-girls.png';
});

window.addEventListener('resize', () => {
  const p = document.getElementById('target');
  p.style.backgroundColor = 'gold';
});
