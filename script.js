'use strict';

const storage = localStorage;
const input = document.querySelector('input');    // input要素
const output = document.getElementById('output'); // div#output要素
const submit = document.getElementById('submit'); // button#submit要素

const ul = document.createElement('ul');
output.appendChild(ul);

let listItems = JSON.parse(storage.store);
submit.addEventListener('click', () => {
  // output.textContent = input.value; // div要素に表示
  // storage.store = input.value; // 'store'キーに入力値を記録
  const li = document.createElement('li');
  li.textContent = input.value;
  ul.appendChild(li);

  listItems.push(input.value);
  storage.store = JSON.stringify(listItems);

  input.value = '';
});


document.addEventListener('DOMContentLoaded', () => {
  if (storage.store != undefined){
  // output.textContent = storageData;
  listItems = JSON.parse(storage.store);
  //   output.textContent = 'ここに内容を表示します'
  }
  for (const item of listItems) {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  }
});

const remove = document.createElement('button');
remove.textContent = 'ストレージデーターを削除';
document.body.insertBefore(remove, output.nextElementSibling);

remove.addEventListener('click', () => {
  delete storage.store;
  ul.textContent = '';
  listItems = [];
});

const link = document.createElement('button');
link.textContent = '別ページへ飛ぶ';
document.body.insertBefore(link, remove)

link.addEventListener('click', () =>{
  location.href = 'page.html';
})

