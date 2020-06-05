// 랜덤 함수 생성. Math.ceil 을 사용해서 숫자 올림.
let number1 = Math.ceil(Math.random() * 9);
let number2 = Math.ceil(Math.random() * 9);

// multiply : 곱셈.
let multiply = number1 * number2;

const body = document.body;

const word = document.createElement('div');
word.textContent = String(number1) + ' X ' + String(number2) + ' =?';
body.append(word);

const form = document.createElement('form');
body.append(form);

const inputData = document.createElement('input');
form.append(inputData);

const button = document.createElement('button');
button.textContent = '입력';
form.append(button);

const showData = document.createElement('div');
body.append(showData);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if(multiply === Number(inputData.value)) {
        showData.textContent = '딩동댕';
        number1 = Math.ceil(Math.random() * 9);
        number2 = Math.ceil(Math.random() * 9);
        multiply = number1 * number2;
        word.textContent = String(number1) + ' X ' + String(number2) + ' =?';
        inputData.value = '';
        inputData.focus();
    } else {
        showData.textContent = '땡';
        inputData.value = '';
        inputData.focus();
    }
});