// const body = document.body;
const word = document.createElement('div');
word.textContent = '개발자';
document.body.append(word);

const inputData = document.createElement('input');
document.body.append(inputData);

const button = document.createElement('button');
button.textContent = '입력';
document.body.append(button);

const result = document.createElement('div');
document.body.append(result);

button.addEventListener('click', function callback() {
    if(word.textContent[word.textContent.length - 1] === inputData.value[0]) {
        result.textContent = '딩동댕'
        word.textContent = inputData.value;
        inputData.value = '';
    } else {
        result.textContent = '땡';
        inputData.value = '';
    }
})

