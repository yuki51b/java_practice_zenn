'use strict';
const storage = localStorage;

const table = document.querySelector('table');
const todo = document.getElementById('todo');
const priority = document.querySelector('select');
const deadline = document.querySelector('input[type="date"]');
const submit = document.getElementById('submit');

let list = [];

document.addEventListener('DOMContentLoaded', () => {
  // 1. ストレージデータ（JSON）の読み込み
  const json = storage.todoList;
  if (json == undefined) {
    return; //ストレージが何もない場合は何もしない
  }

  // 2. JSONをオブジェクトの配列に変換して配列listに代入
  list = JSON.parse(json);

  // 3. 配列listのデータを元にテーブルに要素を追加
  for ( const item of list) {
    addItem(item);
  }
});

submit.addEventListener('click', () =>{
  const item = {}

  if (todo.value) {
    item.todo = todo.value;
  } else {
    item.todo = 'テスト';
  }

  item.priority = priority.value;

  if (deadline.value) {
    item.deadline = deadline.value;
  } else {
    const date = new Date();
    item.deadline = date.toLocaleDateString();
  }

  item.done = false;

  console.log(item);

  todo.value = '';
  priority.value = '普';
  deadline.value = '';

  addItem(item);

  list.push(item);
  storage.todoList = JSON.stringify(list);
});

function addItem(item)  {
  const tr = document.createElement('tr');

  for (const prop in item) {
    const td = document.createElement('td');
    if (prop == 'done'){
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = item[prop];
      td.appendChild(checkbox);
      checkbox.addEventListener('change', checkBoxListener);
    }else{
    td.textContent = item[prop];
    }
    tr.appendChild(td);
  }

  table.appendChild(tr);
};

const checkBoxListener = (ev) => {
  // 1-1. テーブルの全tr要素のリストを取得（＆配列に変換）
  const trList = Array.from(document.getElementsByTagName('tr'));

  // 1-2. チェックボックスの親（td）の親（tr）を取得
  const currentTr = ev.currentTarget.parentElement.parentElement;

  // 1-3. 配列.indexOfメソッドで何番目（インデックス）かを取得
  const idx = trList.indexOf(currentTr) - 1;

  // 2. 配列listにそのインデックスでアクセスしてdoneを更新
  list[idx].done = ev.currentTarget.checked;

  // 3. ストレージデータを更新
  storage.todoList = JSON.stringify(list);
};

const filterButton = document.createElement('button');
filterButton.textContent = '優先度(高)で絞り込み';
filterButton.id = 'priority';
const main = document.querySelector('main');
main.appendChild(filterButton);

filterButton.addEventListener('click', () => {
    clearTable()
    for (const item of list){
      if (item.priority == '高'){
        addItem(item);
      }
    }
  });

  function clearTable(){
    const trList = Array.from(document.getElementsByTagName('tr'));
    trList.shift();
      for (const tr of trList) {
        tr.remove();
      }
  }

  const remove = document.createElement('button');
  remove.textContent = '完了したTODOを削除する';
  remove.id = 'remove'
  const br = document.createElement('br');
  main.appendChild(br);
  main.appendChild(remove);

  remove.addEventListener('click', () => {
    clearTable();  // TODOデータを一旦削除

    // 1. 未完了のTODOを抽出して定数listを置き換え
    list = list.filter((item) => item.done == false);
    // 2. TODOデータをテーブルに追加
    for (const item of list) {
      addItem(item);
    }
    // 3. ストレージデータを更新
    storage.todoList = JSON.stringify(list);
  });