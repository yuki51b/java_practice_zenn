'use strict';

for (let i = 0; i < 5; i += 1) {
  console.log('Hello world!');
}

for (let biscuit = 1; biscuit <= 128; biscuit *= 2) {
  console.log(`ポケットを叩くとビスケットが${biscuit}つ`);
}

for (let a = 1; a <= 9; a += 1) {
  for (let b = 1; b <= 9; b += 1) {
    console.log(`${a} × ${b} = ${a * b}`);
  }
}

for (const servant of ['犬', '猿', '雉']) {
  for (let n = 1; n <= 3; n += 1) {
    console.log(`${servant}${n}号！`);
  }
}

const element = document.createElement('p');
element.textContent = 'Hello World!!';
document.body.appendChild(element);

const ul = document.getElementById('list');
for (let i = 0; i < 5; i += 1) {
  const li = document.createElement('li');
  li.textContent = `子要素${i}号`;
  ul.appendChild(li);
}