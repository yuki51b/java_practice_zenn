'use strict';

const p = document.getElementById('output'); // 出力用のp要素

// ［表示］ボタンを押したら…
document.querySelector('button').addEventListener('click', () => {
  // 今回のコードはここに書いていきます
  const text = document.getElementById('textInput');
  p.textContent = text.value;
  const password = document.getElementById('password');
  p.textContent = password.value;
  const radio = document.getElementsByName('abcRadio');
  for (const btn of radio){
    if (btn.checked == true){
      p.textContent = btn.value;
    }
    const checkbox = document.getElementsByName('abcCheck');
    const values = [];
    for (const box of checkbox) {
      if (box.checked == true) {
        values.push(box.value);
      }
    }
  p.textContent = values;
  }
  const select = document.querySelector('select');
  p.textContent = select.value;

  const multiSelect = document.querySelector('select[multiple]');
  const multi = [];
  for (const opt of multiSelect.options){
    if (opt.selected == true){
      multi.push(opt.value);
    }
  }
  p.textContent = multi;
});

const text = document.getElementById('textInput');
text.addEventListener('change', () => {
  p.textContent = text.value;
});

const form = document.querySelector('form');

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
});