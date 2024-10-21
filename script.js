'use strict';

console.log('Hello World!!');

const evList = [
  { name: 'サンダース', type: 'でんき', weight: 24.5, ability: 'ちくでん' },
  { name: 'ブースター', type: 'ほのお', weight: 25.0, ability: 'もらいび' },
  { name: 'エーフィ', type: 'エスパー', weight: 26.5, ability: 'シンクロ' },
  { name: 'ブラッキー', type: 'あく', weight: 27.0, ability: 'シンクロ' },
  { name: 'リーフィア', type: 'くさ', weight: 25.5, ability: 'リーフガード' },
  { name: 'ニンフィア', type: 'フェアリー', weight: 23.5, ability: 'メロメロボディ' },
  { name: 'グレイシア', type: 'こおり', weight: 25.9, ability: 'ゆきがくれ' },
  { name: 'シャワーズ', type: 'みず', weight: 29.0, ability: 'ちょすい' },
];

for (const ev of evList) {
  console.log(`${ev.name}のタイプは${ev.type}です`);
}

const nameList = evList
  .filter((ev) => ev.weight > 25) // 条件式でオブジェクトを抽出
  .map((ev) => `${ev.name}（${ev.weight}kg）`);  // 加工

// nameListは普通の配列
for (const n of nameList) {
  console.log(n);  // エーフィ（26.5kg） → ブラッキー（27.0kg) → ...
}

const table = document.querySelector('table');
const tr = document.createElement('tr');
const header = ['名前', 'タイプ', '体重', '特技'];

for (const h of header) {
  const th = document.createElement('th');
  th.textContent = h;
  tr.appendChild(th);
}

table.appendChild(tr);


for (const ev of evList) {
  const tr = document.createElement('tr');
  for (const prop in ev) {
    const td = document.createElement('td');
    td.textContent = ev[prop];
    tr.appendChild(td);
  }
  table.appendChild(tr);
}