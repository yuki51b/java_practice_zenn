'use strict';

console.log('Hello World!!');

const array = [1, 2, 'dog!', 1, 2, 'cat!'];

console.log(array[0]); // → 1
const animal = array[2];
console.log(animal); // → dog!
array[3] = 'pig!';   // arrayの“要素”は定数ではないので代入可
array[4] += array[0];
console.log(array); // → [1, 2, 'dog!', 'pig!', 3, 'cat!']

const arrayone = [1, 2, 3, 'dah', '!!'];

for (let i = 0; i < 5; i += 1) {
  console.log(arrayone[i]); // → 1, 2, 3, dah, !!
  arrayone[i] = i;  // 要素の値の書き換え
}

console.log(arrayone); // → [0, 1, 2, 3, 4]

const arraytwo = [1, 2, 3];

arraytwo.push(4);     // 末尾に追加 [1, 2, 3, 4]
arraytwo.unshift(0);  // 先頭に追加 [0, 1, 2, 3, 4]
arraytwo.pop();       // 末尾の要素を削除 [0, 1, 2, 3]
arraytwo.shift();     // 先頭の要素を削除 [1, 2, 3]

// console.logを使って確認してみてください
console.log(arraytwo);

const Oldarray = [1, 2, 3];

const newArray = Oldarray.map((el) => el + '号');
console.log(newArray);  // → [1号, 2号, 3号]

// 同じ処理をfor-of文で描くと…
const newArray2 = [];
for (const el of Oldarray) {
  newArray2.push(el + '号');
}

