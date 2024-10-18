'use strict';

const bmi = window.prompt('BMIの値を入力してください');
const p_element = document.getElementById('message');
p_element.textContent = (`あなたのBMIは${bmi}:`);

if (bmi > 25) {
  p_element.textContent += '肥満です';
} else if (bmi < 18.5) {
  p_element.textContent += '低体重です';
} else {
  p_element.textContent += '適正体重です';
};

