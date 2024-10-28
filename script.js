'use strict';

// a要素とimg要素のエレメントを取得
const a = document.getElementById('link');
const img = a.firstElementChild;

// 属性値を書き換えることもできる
console.log(`元のリンクURL: ${a.href}`);
a.href = 'https://loremflickr.com/320/240/dog';

// つまり、JavaScript側で画像を差し替えることもできる
console.log(`元の画像ソース: ${img.src}`);
img.src = 'https://loremflickr.com/320/240/dog';

// a要素のtarget属性の値によってテキストノードの内容を場合分け

// class属性が設定されていない2番目のp要素を取得
const p = document.querySelectorAll('p')[1];
console.log(p.className);  // → 何も表示されない

p.className = 'myStyle'; // class属性を追加