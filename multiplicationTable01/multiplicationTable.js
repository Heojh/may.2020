// 랜덤 함수 생성. Math.ceil 을 사용해서 숫자 올림.
const number1 = Math.ceil(Math.random() * 9);
const number2 = Math.ceil(Math.random() * 9);

// multiply : 곱셈.
const multiply = number1 * number2;

const body = document.body;

const word = document.createElement('div');
word.textContent = String(number1) + ' X ' + String(number2) + ' =?';
body.append(word);

// while(true) {
//     const result = multiply;
//     const condition = true;
// }